# Arquitetura do back-end — Forgeon Clinic

Status: **aprovado** (2026-10-07). Nenhum código do back-end foi escrito ainda.

Este documento descreve como o back-end do Forgeon Clinic vai funcionar: a stack, o modelo de dados multi-clínica, o fluxo de uma mensagem do WhatsApp até a resposta do agente, as regras de acesso e a ordem de construção. As decisões de produto vêm dos dois briefings de 2026-10-07 (ver a seção "Decisões já tomadas").

## Decisões já tomadas (briefings)

- Cada clínica é uma conta (tenant). A Forgeon cria a conta e convida o dono por e-mail; não há auto-cadastro no MVP.
- Uma conta pode ter várias unidades. Um funcionário pode trabalhar em mais de uma unidade, e o acesso é dado por unidade.
- Papéis: admin, recepção, profissional e gestor (que vê métricas, mas não vê dados clínicos).
- Só o admin e a recepção leem as conversas. O profissional vê apenas a própria agenda e os próprios pacientes.
- Login com e-mail e senha, com 2FA opcional (obrigatório para o admin).
- WhatsApp pela Cloud API oficial da Meta. Cada clínica conecta o próprio número pelo Embedded Signup, e cada unidade pode ter um número próprio.
- Uma agenda do Google Calendar por profissional.
- A passagem para a recepção avisa a equipe no painel, por push do navegador e no WhatsApp da recepção. A recepção responde pelo painel.
- Todos os dados ficam na União Europeia.

## Stack

| Camada | Escolha | Motivo |
|---|---|---|
| Runtime | Node 24 + TypeScript (mesmo do front-end) | Um ecossistema só, tipos compartilhados com o painel. |
| HTTP | Fastify 5 | Rápido, validação por schema, bom suporte a TypeScript. |
| Banco | PostgreSQL 17 | Relacional, Row Level Security para isolar clínicas. |
| ORM e migrações | Drizzle ORM + drizzle-kit | Tipado, SQL explícito, migrações versionadas. |
| Fila e agendamentos | pg-boss (fila dentro do Postgres) | Lembretes e processamento assíncrono sem precisar de Redis. |
| Autenticação | Better Auth com os plugins de organização, convites, 2FA e admin | Já resolve contas, membros, papéis, convites e TOTP. |
| Tempo real no painel | Server-Sent Events (SSE) | Alertas de passagem para a recepção sem WebSocket. |
| Push do navegador | Web Push (VAPID) | Notifica com a aba em segundo plano. |
| IA | Claude pelo SDK oficial `@anthropic-ai/sdk` | Agente com ferramentas (tool use). |
| Agenda | Google Calendar API (`googleapis`) | Decisão do briefing. |
| Testes | Vitest | Mesmo ecossistema do Vite. |
| Logs | pino, com redação de telefone e conteúdo de mensagem | LGPD/RGPD: nada de dado de saúde em log. |

### Organização do repositório

O front-end continua na raiz, como está hoje. O back-end entra como um workspace npm em `server/`, e os tipos compartilhados entre painel e API ficam em `shared/`:

```
/            front-end atual (Vite + React + design system)
server/      API Fastify, agente, workers, migrações
shared/      tipos e schemas (Zod) usados pelo painel e pela API
docs/        este documento e os próximos
```

## Modelo de dados

Toda tabela de dados da clínica tem `org_id`. O isolamento entre clínicas é garantido em duas camadas: o código sempre filtra por `org_id`, e o Postgres aplica Row Level Security com a clínica da sessão. Se uma consulta esquecer o filtro, o banco ainda bloqueia.

**Contas e acesso**
- `organizations` — a clínica: nome, país (BR ou ES), idioma padrão (pt-BR ou es-ES), fuso horário, plano.
- `units` — unidades: nome, endereço, fuso horário, número de WhatsApp próprio (opcional).
- `users`, `sessions`, `two_factor` — gerenciadas pelo Better Auth.
- `members` — usuário dentro de uma clínica, com o papel (`admin`, `recepcao`, `profissional`, `gestor`).
- `member_units` — em quais unidades cada membro trabalha.
- `invitations` — convites por e-mail (Better Auth).

**Atendimento**
- `professionals` — dentista ou psicólogo: nome, especialidade, ligação opcional com um `member` (o profissional pode não ter login), ID da agenda no Google Calendar.
- `professional_units` — em quais unidades e dias o profissional atende.
- `services` — procedimentos ou tipos de consulta: nome, duração, informações de preço, profissionais que atendem.
- `knowledge` — base de conhecimento do agente: preços, convênios, endereço, regras da clínica, por clínica ou por unidade.

**WhatsApp e conversas**
- `whatsapp_numbers` — números conectados: `phone_number_id`, `waba_id`, número exibido, unidade (vazio = número da conta toda).
- `patients` — telefone (E.164), nome, idioma, data e versão do consentimento.
- `conversations` — paciente + número + unidade; estado (`agente`, `recepcao`, `encerrada`), quem assumiu, fim da janela de 24 horas da Meta.
- `messages` — direção, autor (paciente, agente ou membro da equipe), ID da mensagem na Meta, tipo, conteúdo cifrado, status de entrega.
- `handoffs` — passagens para a recepção: motivo (`pedido`, `baixa_confianca`, `clinico_urgente`, `pagamento`), resumo gerado pelo agente, prioridade, quando foi resolvida e por quem.

**Agenda**
- `appointments` — unidade, profissional, paciente, serviço, início e fim, estado (`agendada`, `confirmada`, `cancelada`, `faltou`, `concluida`), ID do evento no Google Calendar, origem (agente ou equipe).
- `calendar_connections` — conexão OAuth da clínica com o Google, com o refresh token cifrado.

**Conformidade**
- `audit_log` — quem acessou ou alterou dado de paciente, quando e o quê. A LGPD e o RGPD exigem esse rastro para dados de saúde.

## Permissões

| Ação | Admin | Recepção | Profissional | Gestor |
|---|---|---|---|---|
| Configurar clínica, agente, unidades, equipe | Sim | Não | Não | Não |
| Ler e responder conversas | Sim | Sim, nas suas unidades | Não | Não |
| Ver agenda | Toda | Suas unidades | Só a própria | Não |
| Ver pacientes | Todos | Suas unidades | Só os próprios | Não |
| Ver métricas agregadas | Sim | Não | Não | Sim |
| Cobrança | Sim | Não | Não | Sim |

O painel admin da Forgeon (criar clínica, convidar o dono, ver o status das contas) usa o plugin de admin do Better Auth, com um papel separado que não enxerga conteúdo de conversa.

## Fluxo de uma mensagem recebida

1. **Webhook.** A Meta chama `POST /webhooks/whatsapp`. A API confere a assinatura `X-Hub-Signature-256` com o app secret, grava o evento bruto de forma idempotente (o ID da mensagem é único), responde `200` na hora e põe o processamento na fila.
2. **Contexto.** O worker descobre a clínica e a unidade pelo `phone_number_id`, cria ou encontra o paciente e a conversa.
3. **Recepção já atendendo?** Se a conversa está com a recepção, o agente não responde. O sistema só avisa a equipe pelo painel.
4. **Triagem de segurança.** Antes do agente, uma checagem separada (regras de palavra-chave + uma chamada curta de classificação com saída estruturada) decide se o assunto é clínico ou urgente. Se for, o agente **não** responde sobre o assunto: o sistema manda uma mensagem fixa e escala na hora, com prioridade máxima. Ter duas camadas (regras e modelo) evita que um erro do agente deixe passar uma crise.
5. **Agente.** O agente roda com o histórico da conversa e as ferramentas abaixo, e a resposta é enviada pela Cloud API.
6. **Status.** Os webhooks de status (enviada, entregue, lida, falhou) atualizam a mensagem.

### Ferramentas do agente

- `listar_unidades` e `escolher_unidade` — quando o número é compartilhado entre unidades.
- `listar_servicos` — serviços, duração e profissionais.
- `buscar_horarios` — horários livres por serviço, profissional, unidade e período, consultando o Google Calendar (free/busy).
- `agendar`, `remarcar`, `cancelar` — criam, movem ou cancelam a consulta no banco e no Google Calendar.
- `minhas_consultas` — consultas futuras do paciente.
- `consultar_informacoes` — busca na base de conhecimento da clínica (preços, convênios, endereço).
- `passar_para_recepcao` — abre a passagem com motivo e resumo. É obrigatória quando o paciente pede, quando o agente não tem confiança, quando o assunto é pagamento ou orçamento, e quando o assunto é clínico.

O agente nunca inventa horário: só oferece o que `buscar_horarios` devolveu, e só confirma depois que `agendar` respondeu com sucesso.

### Modelo de IA

- **Escolhido:** Claude Sonnet 5.5 (`claude-sonnet-5-5`), com o pensamento adaptativo ligado. O esforço começa em `low` para a conversa e é ajustado medindo um conjunto de conversas de teste (`medium` se a qualidade com ferramentas não segurar).
- **Custo:** US$ 2 por milhão de tokens de entrada e US$ 10 por milhão de saída. O prompt de sistema e a base de conhecimento da clínica ficam em cache, o que reduz bastante o custo da entrada.
- **Outras opções:** Claude Opus 5.5 (US$ 4 / US$ 20) se a qualidade não bastar, e Claude Haiku 4.5 (US$ 1 / US$ 5) para a classificação da triagem, se medir bem.
- **Recusas:** as respostas com `stop_reason: "refusal"` são tratadas, e a conversa vai para a recepção.

### Onde a IA roda (residência de dados)

A API direta da Anthropic hoje só fixa a inferência nos EUA ou em modo global, não na UE. Para manter as mensagens dos pacientes dentro da UE, a recomendação é usar o Claude pelo **Google Cloud Vertex AI na região `eu`**. O SDK é o mesmo (`AnthropicVertex`), então o código muda só na criação do cliente. Durante o desenvolvimento, com dados fictícios, podemos usar a API direta.

## Passagem para a recepção

Quando o agente chama `passar_para_recepcao` ou a triagem escala:
1. A conversa muda para o estado `recepcao`, e o agente para de responder.
2. O painel recebe o alerta em tempo real (SSE), e os navegadores inscritos recebem push.
3. A recepção recebe no WhatsApp uma notificação com o resumo e o link da conversa. Essa mensagem sai de um número da Forgeon e usa um template aprovado pela Meta, porque fica fora da janela de 24 horas.
4. A recepção responde pelo painel, e a mensagem sai pelo número da clínica.
5. Ao encerrar, a recepção devolve a conversa ao agente ou a fecha.

## Lembretes e confirmação

- Ao criar uma consulta, o sistema agenda os lembretes na fila (por padrão, 24 horas antes; configurável por clínica).
- O lembrete usa um template aprovado pela Meta, em pt-BR ou es-ES, com botões "Confirmar", "Remarcar" e "Cancelar".
- Se o paciente não confirmar até o prazo da clínica, o horário é liberado e a recepção é avisada.
- E-mails: confirmação para o paciente (quando houver e-mail), resumo diário para a clínica e follow-up. O provedor de e-mail precisa ter região na UE.

## Auditor de uso por clínica (operação da Forgeon)

Cada clínica tem um livro-razão de custos, para a Forgeon saber quanto cada uma gera de despesa e repassar o que passar da franquia mensal.

- **`usage_events`** é um livro-razão só de inserção. Cada chamada à IA vira um lançamento com o modelo, os tokens (entrada, saída, cache lido e escrito) e o custo. Cada mensagem cobrada pela Meta também vira um lançamento, com a categoria e o país. O custo fica em nano-dólares (1e-9 USD) e guarda a versão da tabela de preços usada no cálculo. O campo `ref` impede lançamento duplicado.
- **Preços** ficam em `server/src/usage/prices.ts`. A IA usa a tabela da Anthropic. As tarifas da Meta, por país e categoria, ainda precisam ser preenchidas com a tabela oficial. Enquanto não forem, a mensagem cobrada entra com custo pendente, e o relatório avisa. A Meta informa no webhook de status se cada mensagem é cobrada (`pricing.type`) e em qual categoria (`pricing.category`).
- **Planos** (`billing_plans`) têm mensalidade, moeda (BRL ou EUR), franquia de uso incluída e markup do excedente. 10000 pontos-base é repasse a preço de custo; 13000 é custo mais 30%. Cada clínica tem um plano (`org_billing`), com franquia própria opcional.
- **Relatório:** `GET /admin/usage?month=AAAA-MM` lista todas as clínicas, e `GET /admin/usage/:orgId` mostra uma. Cada uma vem com o custo total, a franquia, o excedente e o valor a repassar, quebrados por fornecedor e por item. O mês é em UTC. Os valores saem em dólar; a conversão para BRL ou EUR acontece na fatura.
- **Acesso:** provisoriamente por token fixo (`FORGEON_ADMIN_TOKEN`). Na etapa 3, passa para o login da equipe Forgeon.
- **Falta ligar:** os lançamentos de IA são feitos pelo agente (etapa 4), e os da Meta pelo processamento dos status, depois que o número estiver ligado a uma clínica (etapa 3). Depois vêm os alertas de 80% e 100% da franquia e a conciliação mensal com as faturas da Anthropic, do Google e da Meta.

## Segurança e LGPD/RGPD

- Conteúdo das mensagens e refresh tokens cifrados no banco (AES-256-GCM, chave fora do banco).
- Logs sem telefone nem conteúdo de mensagem.
- `audit_log` de acesso a dados de paciente.
- Consentimento registrado no primeiro contato, com a versão do texto.
- Política de retenção configurável (por exemplo, apagar conversas depois de N meses).
- Segredos em `.env` no desenvolvimento e no Secret Manager em produção. Tokens nunca entram no repositório.
- Fixtures e testes só com dados fictícios.

## Hospedagem

Recomendação: **Google Cloud, região de Madri (`europe-southwest1`)**.
- Cloud Run para a API e os workers.
- Cloud SQL para o Postgres.
- Secret Manager para os segredos.
- Vertex AI (região `eu`) para o Claude.

O mesmo projeto do Google Cloud já seria necessário para a Google Calendar API, então tudo fica num provedor só, dentro da UE.

No desenvolvimento local, o Postgres roda em Docker e o webhook da Meta chega por um túnel (Cloudflare Tunnel).

## Ordem de construção

1. **Base.** Workspace `server/`, Fastify, Postgres local, Drizzle, variáveis de ambiente, logs, testes.
2. **WhatsApp ponta a ponta.** Webhook com verificação de assinatura, envio de mensagem, eco com o número de teste pelo túnel.
3. **Contas e acesso.** Better Auth com clínicas, unidades, papéis, convites e 2FA; painel admin da Forgeon (só a API).
4. **Agente.** Ferramentas primeiro com uma agenda falsa em memória, depois com o Google Calendar; triagem de segurança.
5. **Passagem para a recepção.** Estados da conversa, SSE, push, aviso no WhatsApp, resposta pelo painel.
6. **Lembretes e e-mails.** Fila, templates da Meta, liberação de horário.
7. **Produção na UE.** Deploy no Google Cloud, cifragem, auditoria, consentimento, retenção.

As telas do painel podem começar em paralelo a partir da etapa 3, usando os templates de `@ds/templates`.

## Decisões tomadas sobre este plano (2026-10-07)

1. Modelo do agente: **Claude Sonnet 5.5**.
2. IA em produção: **Claude pelo Vertex AI na região `eu`**. No desenvolvimento, API direta da Anthropic, só com dados fictícios.
3. Hospedagem: **Google Cloud em Madri** (`europe-southwest1`).
4. Triagem urgente: a mensagem fixa **inclui os telefones de emergência** (Brasil: SAMU 192 e CVV 188; Espanha: 112 e 024) antes de passar para a recepção. A clínica revisa o texto exato.

## Decisões em aberto

1. Provedor de e-mail com região na UE.
