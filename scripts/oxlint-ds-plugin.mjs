// oxlint JS plugin: exposes ESLint's core `no-restricted-syntax` rule as `ds/no-restricted-syntax`.
// oxlint (1.87) does not implement no-restricted-syntax natively; the design-system adherence rules
// exported by Claude Design are written as esquery selectors for it, so we run the original ESLint rule unchanged.
import { builtinRules } from 'eslint/use-at-your-own-risk';

export default {
  meta: { name: 'ds' },
  rules: {
    'no-restricted-syntax': builtinRules.get('no-restricted-syntax'),
  },
};
