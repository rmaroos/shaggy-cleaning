import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from 'lucide-react';
import { PageHero } from '../components/sections/PageHero';
import { LocationMap } from '../components/sections/LocationMap';
import { CategoryCards } from '../components/sections/CategoryCards';
import { Testimonials } from '../components/sections/Testimonials';
import { FinalCTA } from '../components/sections/FinalCTA';
import { QuickRequestPanel } from '../components/quick-request/QuickRequestPanel';
import { Container } from '../components/ui/Container';
import { locations } from '../data/locations';

export function Locations() {
  return (
    <>
      <PageHero
        crumbs={[{ label: 'Locations' }]}
        title="Cleaning across Hobart and surrounding areas."
        description="Local teams across the city, the Eastern Shore, Kingborough and the northern suburbs. Find your area below."
        compact />
      

      <section aria-labelledby="areas-list-title" className="pb-16 md:pb-24">
        <Container className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <h2 id="areas-list-title" className="sr-only">Service areas</h2>
            <ul className="border-t border-ink/15">
              {locations.map((l) =>
              <li key={l.slug} className="border-b border-ink/15">
                  <Link to={`/locations/${l.slug}`} className="group grid gap-3 py-7 md:grid-cols-[1fr_auto] md:items-center md:gap-8">
                    <div>
                      <h3 className="font-display text-2xl font-bold text-ink transition-colors duration-150 group-hover:text-brand md:text-[28px]">{l.name}</h3>
                      <p className="mt-1 text-[15px] text-ink/65">{l.short}</p>
                      <p className="mt-3 text-sm text-ink/50">{l.suburbs.slice(0, 5).join(' · ')}{l.suburbs.length > 5 ? ' …' : ''}</p>
                    </div>
                    <span className="inline-flex items-center gap-1.5 text-[15px] font-semibold text-ink">
                      View area
                      <ArrowRightIcon className="h-4 w-4 transition-transform duration-150 ease-out group-hover:translate-x-1" aria-hidden="true" />
                    </span>
                  </Link>
                </li>
              )}
            </ul>
          </div>
          <div className="lg:col-span-5">
            <LocationMap className="aspect-square lg:sticky lg:top-28" />
          </div>
        </Container>
      </section>

      <div className="bg-ink/[0.03]">
        <QuickRequestPanel title="Check we cover your area" description="Enter your suburb and we’ll confirm availability with your quote." />
      </div>

      <section aria-labelledby="loc-services-title" className="py-16 md:py-24">
        <Container>
          <h2 id="loc-services-title" className="font-display text-[32px] font-bold leading-[1.1] md:text-[44px]">Services available in every area</h2>
          <div className="mt-10">
            <CategoryCards />
          </div>
        </Container>
      </section>

      <Testimonials />
      <FinalCTA />
    </>);

}