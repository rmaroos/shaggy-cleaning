import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon, PhoneIcon } from 'lucide-react';
import { PageHero } from '../components/sections/PageHero';
import { CategoryCards } from '../components/sections/CategoryCards';
import { ServiceCard } from '../components/sections/ServiceCard';
import { FinalCTA } from '../components/sections/FinalCTA';
import { QuickRequestPanel } from '../components/quick-request/QuickRequestPanel';
import { Container } from '../components/ui/Container';
import { Button } from '../components/ui/Button';
import { categories } from '../data/categories';
import { contact } from '../data/site';
import { categoryPath, servicesInCategory } from '../utils/content';
import { useQuickRequestDrawer } from '../contexts/QuickRequestContext';
export function Services() {
  const {
    open
  } = useQuickRequestDrawer();
  return <>
      <PageHero crumbs={[{
      label: 'Services'
    }]} title="Cleaning services for every kind of space." description="Residential, commercial and specialised cleaning across Hobart — each with its own scope, trained team and checklist.">
        <nav aria-label="Jump to category" className="mt-10 flex flex-wrap gap-x-6 gap-y-2 border-t border-ink/10 pt-6">
          {categories.map((c) => <a key={c.slug} href={`#${c.slug}`} className="text-[15px] font-semibold text-ink/70 hover:text-brand">
              {c.name}
            </a>)}
        </nav>
      </PageHero>

      <section aria-labelledby="explore-title" className="bg-ink/[0.03] py-16 md:py-24">
        <Container>
          <h2 id="explore-title" className="font-display text-[32px] font-bold leading-[1.1] md:text-[44px]">Explore our services</h2>
          <div className="mt-10">
            <CategoryCards />
          </div>
        </Container>
      </section>

      {categories.map((c) => <section key={c.slug} id={c.slug} aria-labelledby={`${c.slug}-title`} className="scroll-mt-24 border-b border-ink/10 py-16 md:py-24">
          <Container>
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div className="max-w-2xl">
                <h2 id={`${c.slug}-title`} className="font-display text-[32px] font-bold leading-[1.1] md:text-[40px]">{c.name}</h2>
                <p className="mt-3 text-[17px] leading-relaxed text-ink/65">{c.intro}</p>
              </div>
              <Link to={categoryPath(c.slug)} className="group inline-flex shrink-0 items-center gap-1.5 text-[15px] font-semibold text-ink hover:text-brand">
                View {c.name.toLowerCase()}
                <ArrowRightIcon className="h-4 w-4 transition-transform duration-150 ease-out group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </div>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {servicesInCategory(c.slug).map((s) => <ServiceCard key={s.slug} service={s} />)}
            </div>
          </Container>
        </section>)}

      <section aria-labelledby="help-title" className="py-16 md:py-24">
        <Container className="grid items-center gap-10 rounded-2xl border border-ink/15 p-8 md:p-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="h-8 w-8 text-brand" aria-hidden="true" />
            <h2 id="help-title" className="mt-5 font-display text-[28px] font-bold leading-tight md:text-[36px]">Need help choosing a service?</h2>
            <p className="mt-3 max-w-xl text-[17px] leading-relaxed text-ink/65">
              Tell us about your property and what you need. We’ll recommend the right clean — or a combination — and quote it clearly.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 lg:col-span-5 lg:justify-end">
            <Button size="lg" onClick={() => open()}>Request Service</Button>
            <Button href={contact.phoneHref} variant="secondary" size="lg">
              <PhoneIcon className="h-4 w-4" aria-hidden="true" />
              {contact.phone}
            </Button>
          </div>
        </Container>
      </section>

      <QuickRequestPanel />
      <FinalCTA />
    </>;
}