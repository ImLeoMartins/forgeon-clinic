import { Logo, Button, Card, Badge } from '@ds';

/** Placeholder home until the product screens exist. Built only with DS components and Tailwind token utilities. */
export function Home() {
  return (
    <main className="min-h-screen bg-bg-app grid place-items-center p-6">
      <Card variant="elevated" padding="lg" style={{ maxWidth: 'var(--content-max)' }}>
        <div className="flex flex-col items-start gap-4">
          <Logo size={36} />
          <Badge tone="ai" icon="sparkles">Agente de IA no WhatsApp para clínicas</Badge>
          <h1 className="font-display text-h2 text-text-strong">Forgeon Clinic</h1>
          <p className="text-md text-text-muted">O produto ainda está em construção. A biblioteca visual completa está na rota do design system.</p>
          <a href="/design-system"><Button iconRight="arrow-right">Abrir o design system</Button></a>
        </div>
      </Card>
    </main>
  );
}
