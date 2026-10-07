// Verifies that design-system/tokens/*.css and src/styles/app.css match DESIGN.md (the source of truth).
// - every color in DESIGN.md exists in colors.css (light) or theme-dark.css (`dark-` prefix) with the same value;
// - every color custom property in those CSS files exists in DESIGN.md (no CSS-only tokens);
// - rounded / spacing / typography sizes match spacing.css and typography.css;
// - the literal fallbacks in app.css `@theme` (radius, shadow) match the tokens.
// Run: node scripts/check-tokens.mjs  (part of `npm run lint`)
import { readFileSync } from 'node:fs';

const read = (p) => readFileSync(new URL(`../${p}`, import.meta.url), 'utf8');
const design = read('DESIGN.md');
const fm = design.match(/^---\n([\s\S]*?)\n---/);
if (!fm) { console.error('DESIGN.md has no YAML front matter'); process.exit(1); }

// Minimal parser for the front matter shape used here: top-level groups with `key: value` or one nested level.
const groups = {};
let group = null; let sub = null;
for (const line of fm[1].split('\n')) {
  const top = line.match(/^([a-z]+):\s*(.*)$/);
  if (top) { group = top[1]; sub = null; if (!top[2]) groups[group] = {}; continue; }
  const lvl1 = line.match(/^ {2}([A-Za-z0-9-]+):\s*(.*)$/);
  if (lvl1 && group && groups[group]) { if (lvl1[2]) { groups[group][lvl1[1]] = unq(lvl1[2]); sub = null; } else { sub = lvl1[1]; groups[group][sub] = {}; } continue; }
  const lvl2 = line.match(/^ {4}([A-Za-z]+):\s*(.*)$/);
  if (lvl2 && group && sub) groups[group][sub][lvl2[1]] = unq(lvl2[2]);
}
function unq(v) { return v.replace(/^"(.*)"$/, '$1'); }

const cssVars = (css) => Object.fromEntries([...css.matchAll(/--([a-z0-9-]+)\s*:\s*([^;]+);/g)].map((m) => [m[1], m[2].replace(/\/\*.*?\*\//g, '').trim()]));
const lightCss = cssVars(read('design-system/tokens/colors.css'));
const darkCss = cssVars(read('design-system/tokens/theme-dark.css'));
const spacingCss = cssVars(read('design-system/tokens/spacing.css'));
const typoCss = cssVars(read('design-system/tokens/typography.css'));
const effectsCss = cssVars(read('design-system/tokens/effects.css').split('@media')[0]);

const norm = (v) => String(v).trim().toLowerCase().replace(/\s+/g, '').replace(/^\{colors\.(.+)\}$/, 'var(--$1)');
const errors = [];
const ROLE = new Set(['primary', 'secondary', 'tertiary', 'neutral']);
const CSS_ONLY = new Set(['brand-gradient']); // gradients are not a DESIGN.md Color; documented in the Colors prose
const isColor = (v) => /^(#|rgba?\(|var\(--)/.test(v);

const colors = groups.colors || {};
for (const [name, value] of Object.entries(colors)) {
  if (ROLE.has(name)) continue;
  const dark = name.startsWith('dark-');
  const key = dark ? name.slice(5) : name;
  const css = dark ? darkCss : lightCss;
  if (!(key in css)) errors.push(`DESIGN.md colors.${name} has no --${key} in ${dark ? 'theme-dark.css' : 'colors.css'}`);
  else if (norm(css[key]) !== norm(value)) errors.push(`colors.${name}: DESIGN.md "${value}" ≠ CSS "${css[key]}"`);
}
for (const [k, v] of Object.entries(lightCss)) if (!CSS_ONLY.has(k) && isColor(v) && !(k in colors)) errors.push(`--${k} (colors.css) is missing from DESIGN.md colors`);
for (const [k, v] of Object.entries(darkCss)) if (isColor(v) && !k.startsWith('shadow') && k !== 'focus-ring' && !(`dark-${k}` in colors)) errors.push(`--${k} (theme-dark.css) is missing from DESIGN.md colors as dark-${k}`);

for (const [k, v] of Object.entries(groups.rounded || {})) if (norm(spacingCss[`radius-${k}`]) !== norm(v)) errors.push(`rounded.${k}: DESIGN.md "${v}" ≠ --radius-${k} "${spacingCss[`radius-${k}`]}"`);
for (const [k, v] of Object.entries(groups.spacing || {})) {
  const cssKey = /^[0-9]/.test(k) ? `space-${k}` : k;
  const want = cssKey in spacingCss ? spacingCss[cssKey] : undefined;
  if (want === undefined) errors.push(`spacing.${k} has no --${cssKey} in spacing.css`);
  else if (norm(want === '0' ? '0px' : want) !== norm(v)) errors.push(`spacing.${k}: DESIGN.md "${v}" ≠ --${cssKey} "${want}"`);
}
const TYPO = { display: 'display', h1: 'h1', h2: 'h2', h3: 'h3', h4: 'h4', 'body-lg': 'lg', 'body-md': 'md', 'body-ui': 'ui', 'body-sm': 'sm', 'body-xs': 'xs', overline: 'overline', kpi: 'kpi' };
for (const [level, k] of Object.entries(TYPO)) {
  const t = (groups.typography || {})[level];
  if (!t) { errors.push(`typography.${level} missing from DESIGN.md`); continue; }
  if (norm(t.fontSize) !== norm(typoCss[`text-${k}-size`])) errors.push(`typography.${level}.fontSize ≠ --text-${k}-size`);
  if (norm(t.lineHeight) !== norm(typoCss[`text-${k}-lh`])) errors.push(`typography.${level}.lineHeight ≠ --text-${k}-lh`);
}

const appTheme = cssVars((read('src/styles/app.css').match(/@theme \{([\s\S]*?)\n\}/) || ['', ''])[1]);
for (const [k, v] of Object.entries(appTheme)) {
  if (k.startsWith('radius-') && norm(v) !== norm(spacingCss[k])) errors.push(`app.css @theme --${k} "${v}" ≠ token "${spacingCss[k]}"`);
  if (k.startsWith('shadow-') && norm(v) !== norm(effectsCss[k])) errors.push(`app.css @theme --${k} "${v}" ≠ token "${effectsCss[k]}"`);
}

if (errors.length) {
  console.error(`check-tokens: ${errors.length} mismatch(es) between DESIGN.md and the CSS tokens:\n- ` + errors.join('\n- '));
  process.exit(1);
}
console.log(`check-tokens: OK — ${Object.keys(colors).length} colors, ${Object.keys(groups.rounded || {}).length} radii, ${Object.keys(groups.spacing || {}).length} spacing, ${Object.keys(TYPO).length} type levels in sync.`);
