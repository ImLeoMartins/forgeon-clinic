import React from 'react';
import type { Locale } from '../../index';
import { FC_SITE_COPY } from './copy';
import { SiteNav, Hero, How, ForWhom, Pricing, Faq, FinalCta, Footer, DemoDialog } from './Sections';

/** Sales landing template — hero, como funciona, especialidades, preços, FAQ, CTA final; PT/ES; demo dialog. */
export function SiteLanding({ initialLocale = 'pt-BR' }: { initialLocale?: Locale }) {
  const [locale, setLocale] = React.useState<Locale>(initialLocale);
  const [demo, setDemo] = React.useState(false);
  const c = FC_SITE_COPY[locale];
  const cta = () => setDemo(true);
  return (
    <div lang={locale} style={{ background: 'var(--bg-app)', color: 'var(--text-body)' }}>
      <SiteNav c={c} locale={locale} setLocale={setLocale} onCta={cta} />
      <Hero c={c} locale={locale} onCta={cta} />
      <How c={c} />
      <ForWhom c={c} />
      <Pricing c={c} onCta={cta} />
      <Faq c={c} />
      <FinalCta c={c} onCta={cta} />
      <Footer c={c} />
      {demo && <DemoDialog c={c} onClose={() => setDemo(false)} />}
    </div>
  );
}
