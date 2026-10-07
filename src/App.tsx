import type { ReactElement } from 'react';
import { Home } from './pages/Home';
import { DesignSystemShowcase } from './pages/DesignSystemShowcase';

// Minimal path switch — the app has two routes today. Swap for a real router when the panel gets real screens.
const ROUTES: Record<string, () => ReactElement> = {
  '/': Home,
  '/design-system': DesignSystemShowcase,
};

export function App() {
  const path = window.location.pathname.replace(/\/+$/, '') || '/';
  const Page = ROUTES[path] ?? Home;
  return <Page />;
}
