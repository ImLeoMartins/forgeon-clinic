# AGENTS.md — Forgeon Clinic

Instruções para agentes de código (Claude Code, Codex, Cursor, Copilot, Gemini…) neste repositório. O `CLAUDE.md` importa este arquivo; edite aqui.

## Projeto

Forgeon Clinic: SaaS da Forgeon com um agente de IA no WhatsApp para clínicas odontológicas e de psicologia no Brasil e na Espanha (agenda, lembretes, triagem, passagem para a recepção). Toda a UI sai em **pt-BR** e **es-ES**. Estado atual: base do front-end e design system; ainda não há telas de produto nem back-end.

## Stack

- React 19 + TypeScript 7 + Vite 8 (`@vitejs/plugin-react`), ES modules.
- Tailwind CSS 4 via `@tailwindcss/vite`, com o tema restrito aos tokens do design system (`src/styles/app.css`).
- oxlint 1.x com as regras de aderência ao design system (`.oxlintrc.json` + `scripts/oxlint-ds-plugin.mjs`).
- Sem shadcn/ui e sem roteador: `src/App.tsx` faz um switch mínimo de caminho (`/` e `/design-system`).
- Aliases: `@/` → `src/`, `@ds` → `design-system/` (API pública em `design-system/index.ts`), `@ds/templates` → templates.

## Comandos

```bash
npm install
npm run dev         # http://localhost:5173 — showcase em /design-system
npm run typecheck   # tsc --noEmit
npm run lint        # oxlint --deny-warnings + DESIGN.md lint + checagem de tokens
npm run build       # typecheck + vite build
```

Antes de entregar qualquer mudança: `npm run typecheck && npm run lint && npm run build` precisam passar.

## Design system — regras obrigatórias

- **`DESIGN.md` na raiz é o contrato visual e a fonte da verdade dos tokens.** Está versionado e segue o formato DESIGN.md do Google Labs (Stitch): front matter YAML com os tokens + prosa. `design-system/tokens/*.css` espelha esse front matter com os mesmos nomes; `npm run lint:design` falha se divergirem. Mudou um token? Mude no `DESIGN.md` primeiro, depois no CSS.
- **Componente novo sai da biblioteca em `design-system/`.** Use os componentes de `@ds` antes de escrever qualquer elemento visual. Se faltar algo, crie dentro de `design-system/components` seguindo `design-system/README.md` — nunca um componente paralelo em `src/`.
- **Nenhum valor de cor, fonte, espaçamento ou raio vai hardcoded no código.** Use `var(--token)` ou as utilidades Tailwind geradas dos tokens (`bg-surface-card`, `text-text-strong`, `rounded-lg`, `p-6`, `font-display`, `text-h2`). Hex cru, `px` em string, fonte fora de Manrope/Inter/JetBrains Mono e import de arquivo interno do design system quebram `npm run lint`. Valor que não existe vira token novo (no `DESIGN.md` e no CSS), não literal.
- Tema escuro: `data-theme="dark"` em `<html>` ou em qualquer contêiner; os componentes trocam sozinhos. A landing é só clara.
- Voz e texto: `design-system/guidelines/content.md` (você/tú, sentence case, 24h, vírgula decimal, sem emoji, urgência sem alarme).

## Mapa da biblioteca

Detalhes em [`design-system/README.md`](design-system/README.md).

- `design-system/index.ts` — API pública (`@ds`).
- `design-system/tokens/` — tokens CSS (cores, tema escuro, tipografia, espaçamento, efeitos, fontes, base).
- `design-system/components/` — 27 componentes tipados + helpers `Field` e `Choice`, por grupo: brand, icons, actions, forms, display, navigation, overlays, chat, clinic, utils.
- `design-system/templates/` — painel da clínica, landing de vendas e e-mails transacionais (`@ds/templates`).
- `design-system/guidelines/` — voz/conteúdo e uso de cada componente.
- `design-system/assets/` — fontes locais, ícones, logos e SVGs-fonte.
- `design-system/reference/` — **HTMLs de referência visual** do export original do Claude Design; abra `design-system/reference/index.html` no navegador. Não são código do app; não edite `reference/_runtime/ds-bundle.js`.
- `src/pages/DesignSystemShowcase.tsx` — rota `/design-system` com a biblioteca inteira, todos os estados, tema claro e escuro.

### Como criar um componente novo

1. Verifique em `design-system/index.ts` se já existe algo equivalente; uma versão só de cada componente.
2. Crie `design-system/components/<grupo>/<Nome>.tsx` no padrão dos vizinhos (props tipadas, `useInteractive` para hover/active/focus, estados disabled/erro/vazio quando fizer sentido, só `var(--token)`).
3. Token faltando → adicione no `DESIGN.md` e em `design-system/tokens/`.
4. Exporte em `design-system/index.ts`, mostre no showcase com todos os estados e documente em `design-system/guidelines/components.md`.
5. Rode typecheck, lint e build.

## Convenções

- TypeScript estrito; sem `any` novo. Imports de tipo com `import type`.
- Código e identificadores em inglês; textos de interface em pt-BR e es-ES.
- Dados de paciente são dados de saúde (LGPD/RGPD): nada de dado real em fixtures, logs ou commits.
