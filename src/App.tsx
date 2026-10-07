import type { ReactElement } from 'react';
import { Home } from './pages/Home';
import { DesignSystemShowcase } from './pages/DesignSystemShowcase';
import { UsageAuditor } from './pages/UsageAuditor';

// Minimal path switch. Swap for a real router when the panel gets real screens.
const ROUTES: Record<string, () => ReactElement> = {
  '/': Home,
  '/design-system': DesignSystemShowcase,
  '/forgeon/auditor': UsageAuditor,
};

export function App() {
  const path = window.location.pathname.replace(/\/+$/, '') || '/';
  const Page = ROUTES[path] ?? Home;
  return <Page />;
}
