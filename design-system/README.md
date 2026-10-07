# design-system — mapa da biblioteca

Biblioteca de UI do Forgeon Clinic, portada do export do Claude Design ("Forgeon Clinic Design System") para React 19 + TypeScript. O contrato visual e a fonte da verdade dos tokens é o [`DESIGN.md`](../DESIGN.md) na raiz. A rota `/design-system` do app renderiza tudo o que está aqui, em todos os estados e nos dois temas.

## O que tem em cada pasta

| Pasta / arquivo | Conteúdo |
|---|---|
| `index.ts` | API pública. O app importa tudo de `@ds` (alias para esta pasta). Nunca importe arquivos internos de `components/`. |
| `styles.css` | Entrada de CSS: importa os tokens na ordem certa. Já é importado por `src/styles/app.css`. |
| `tokens/` | Tokens em CSS custom properties: `fonts.css` (@font-face locais), `colors.css` (escalas + aliases semânticos), `theme-dark.css` (`[data-theme="dark"]`), `typography.css`, `spacing.css` (espaço, raios, alturas de controle, layout), `effects.css` (sombras, foco, movimento, padrões), `base.css` (padrões de elementos). Espelham o front matter do `DESIGN.md`. |
| `components/` | 27 componentes + 2 helpers exportados (`Field`, `Choice`), tipados, um por arquivo `.tsx`: `brand/` Logo · `icons/` Icon (+ `iconData.ts`) · `actions/` Button, IconButton · `forms/` Input (+ Field), Select, Textarea, Checkbox (+ Choice), Radio, Switch · `display/` Card, Badge, Tag, Avatar · `navigation/` Tabs · `overlays/` Dialog, Toast, Tooltip · `chat/` ChatBubble, ConversationItem · `clinic/` StatusBadge, AppointmentCard, TimeSlots, WeekCalendar, HandoffAlert, PatientTable, KpiCard · `utils/interactive.tsx` (hover/press/focus, `ForceState` para o showcase, tipos `Locale` e `AppointmentStatus`). |
| `templates/` | Composições prontas, só com a API pública: `painel/` (painel da clínica clicável — Shell com Sidebar e Topbar, Dashboard, Agenda, Conversations, Patients, Templates, `PainelApp`, dados fictícios em `data.ts`), `site/` (landing de vendas PT/ES — `SiteLanding`, seções e `copy.ts`) e `email/` (HTML transacional com estilos inline: confirmação pt-BR e lembrete es-ES — abre direto no navegador). API em `@ds/templates`. |
| `guidelines/` | `content.md` (voz, tom e vocabulário PT/ES) e `components.md` (uso de cada componente, com exemplos). |
| `assets/` | `fonts/` (Manrope, Inter, JetBrains Mono — woff2, SIL OFL), `icons/` (SVGs Lucide v0.468 + glifo WhatsApp), `logo/` (símbolo, wordmark e nome da Forgeon em cor, preto e branco), `source/` (SVGs originais enviados pelo usuário — o símbolo e o logotipo dependem de raster embutido que falta; os vetores limpos de `logo/` foram extraídos de `forgeon-preto.svg`). |
| `reference/` | HTMLs de referência visual do export original, intactos e autossuficientes. Abra `reference/index.html` no navegador (duplo clique). Ver abaixo. |

## HTMLs de referência

`reference/` guarda os cartões de especificação e os UI kits originais do Claude Design, como foram desenhados:

- `reference/index.html` — índice com link para todos.
- `reference/guidelines/*.html` — cartões de cor, tipo e espaçamento (18).
- `reference/components/**/*.card.html` — cartões de componentes (13).
- `reference/ui_kits/painel/index.html` e `reference/ui_kits/site/index.html` — protótipos clicáveis (os `.jsx` foram embutidos no HTML para funcionar em `file://`).
- `reference/thumbnail.html` — capa do sistema.
- `reference/_runtime/ds-bundle.js` — bundle compilado original do Claude Design, mantido **só** para estes HTMLs renderizarem. É um retrato congelado do export: não é importado pelo app e não deve ser editado. A biblioteca viva é `components/`.

Os HTMLs leem os tokens e fontes de `../styles.css` e `../assets/` desta pasta, então refletem mudanças de token. React e Babel vêm do unpkg, então é preciso internet. Os e-mails ficam em `templates/email/`.

## Como criar um componente novo

1. Confira se ele já existe em `index.ts` ou se uma variante de um componente existente resolve. Uma versão só de cada coisa.
2. Crie `components/<grupo>/<Nome>.tsx` seguindo o padrão dos vizinhos: props tipadas e exportadas (`<Nome>Props`), JSDoc com o uso, estilos inline só com `var(--token)`, estados via `useInteractive` (hover, active, focus), `disabled` com opacidade 0.45, alvo de toque ≥ 44px, rótulos PT/ES via `locale` quando houver texto.
3. Se faltar um valor, **adicione o token primeiro** no front matter do `DESIGN.md` e no CSS correspondente em `tokens/` (mesmo nome), e rode `npm run lint:design`. Nunca escreva hex, `px` em string ou fonte fora do sistema no componente: `npm run lint` bloqueia.
4. Exporte em `index.ts`.
5. Adicione a regra de props ao `.oxlintrc.json` (`ds/no-restricted-syntax`, mesmo formato das demais) se quiser validação de props e enums no uso.
6. Mostre o componente em `src/pages/DesignSystemShowcase.tsx`, com todos os estados (use `<ForceState>` para hover/active/focus) — o `ThemePair` já renderiza claro e escuro.
7. Documente o uso em `guidelines/components.md`.
8. Rode `npm run typecheck && npm run lint && npm run build`.

## Estilo no app

Telas e componentes de produto usam os componentes de `@ds`. Para layout, use as utilidades Tailwind geradas a partir dos tokens (`bg-surface-card`, `text-text-muted`, `rounded-lg`, `shadow-md`, `font-display`, `text-h2`, `p-6`…). As paletas, fontes, raios e sombras padrão do Tailwind foram removidas em `src/styles/app.css`, então só existe o que está no sistema.
