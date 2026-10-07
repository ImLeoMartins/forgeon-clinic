---
name: forgeon-clinic-design
description: Use this skill to generate well-branded interfaces and assets for Forgeon Clinic (Forgeon's WhatsApp AI agent for dental and psychology clinics in Brazil and Spain), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Ported from the Claude Design export's `SKILL.md`, re-pointed at this repository.

Read `DESIGN.md` (repo root — tokens and visual rules), `design-system/README.md` (library map), `design-system/guidelines/content.md` (voice) and `design-system/guidelines/components.md` (component usage), then explore the other files in `design-system/`.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out of `design-system/assets/` and create static HTML files for the user to view; the HTMLs in `design-system/reference/` show how (they load `design-system/styles.css`). If working on production code, build from the components exported by `@ds` and follow the rules in `AGENTS.md` — tokens only, no hardcoded colors, fonts, spacing or radii.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.
