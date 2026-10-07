# Forgeon Clinic

Agente de IA no WhatsApp para clínicas odontológicas e de psicologia no Brasil e na Espanha: agenda, remarca e confirma consultas, envia lembretes e passa a conversa para a recepção quando o paciente precisa de uma pessoa. Produto da [Forgeon](https://www.forgeon.dev).

Este repositório tem, por enquanto, a base do front-end e o design system completo.

## Rodar

```bash
npm install
npm run dev
```

- `http://localhost:5173/` — página inicial provisória.
- `http://localhost:5173/design-system` — biblioteca completa: fundações, todos os componentes em todos os estados, templates, tema claro e escuro.

Outros comandos: `npm run typecheck`, `npm run lint`, `npm run build`, `npm run preview`.

## Stack

React 19, TypeScript 7, Vite 8, Tailwind CSS 4 (restrito aos tokens), oxlint.

## Design system

- [`DESIGN.md`](DESIGN.md) — contrato visual e fonte da verdade dos tokens (formato DESIGN.md do Google Labs).
- [`design-system/`](design-system/README.md) — componentes, tokens, templates, guidelines, assets e HTMLs de referência (`design-system/reference/index.html` abre direto no navegador).
- [`AGENTS.md`](AGENTS.md) — regras para agentes de código e para quem contribui.
