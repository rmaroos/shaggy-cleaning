import React from 'react';
import { useParams } from 'react-router-dom';
import { MapPinIcon } from 'lucide-react';
import { PageHero } from '../components/sections/PageHero';
import { CategoryCards } from '../components/sections/CategoryCards';
import { WhyChooseDark } from '../components/sections/WhyChooseDark';
import { ProcessSteps } from '../components/sections/ProcessSteps';
import { Testimonials } from '../components/sections/Testimonials';
import { FaqSection } from '../components/sections/FaqSection';
import { FinalCTA } from '../components/sections/FinalCTA';
import { LocationMap } from '../components/sections/LocationMap';
import { QuickRequestPanel } from '../components/quick-request/QuickRequestPanel';
import { Container } from '../components/ui/Container';
import { NotFound } from './NotFound';
import { faqs } from '../data/faqs';
import { images } from '../data/images';
import { getLocation } from '../utils/content';

export function LocationDetail() {
  const { location: slug } = useParams();
  const location = getLocation(slug);
  if (!location) return <NotFound />;

  const isOther = location.slug === 'other-service-areas';
  const prefillLocation = location.slug === 'hobart' ? 'Hobart' : undefined;
  const locationFaqs = faqs.filter((f) => f.category === 'General' || f.category === 'Booking & Scheduling').slice(0, 5);

  return (
    <>
      <PageHero
        crumbs={[{ label: 'Locations', to: '/locations' }, { label: location.name }]}
        title={isOther ? 'Cleaning in surrounding areas' : `Cleaning services in ${location.name}`}
        description={location.intro}
        image={images.house}
        imageAlt={`A home cleaned by Shaggy in ${location.name}`} />
      
      <div className="flow-root bg-ink/[0.03] pb-16">
        <QuickRequestPanel overlap defaultLocation={prefillLocation} title={`Request a clean in ${location.name}`} />
      </div>

      <section aria-labelledby="cover-title" className="py-16 md:py-24">
        <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <h2 id="cover-title" className="font-display text-[32px] font-bold leading-[1.1] md:text-[44px]">Areas we cover</h2>
            <p className="mt-4 text-[17px] leading-relaxed text-ink/65">
              {isOther ?
              'We regularly travel to these areas. Availability is confirmed when we quote.' :
              `Our ${location.name} teams service these suburbs every week.`}
            </p>
            <ul className="mt-8 grid grid-cols-2 gap-x-6 border-t border-ink/15">
              {location.suburbs.map((s) =>
              <li key={s} className="flex items-center gap-2 border-b border-ink/15 py-3.5 text-[16px] font-medium text-ink">
                  <MapPinIcon className="h-4 w-4 text-brand" aria-hidden="true" />
                  {s}
                </li>
              )}
            </ul>
          </div>
          <div className="lg:col-span-6">
            <LocationMap className="aspect-[4/3]" title={`Map of ${location.name}`} />
            <h3 className="mt-10 font-display text-xl font-bold text-ink">Location information</h3>
            <dl className="mt-4 grid gap-x-8 sm:grid-cols-2">
              {location.info.map((i) =>
              <div key={i.label} className="border-t border-ink/10 py-3.5">
                  <dt className="text-[13px] text-ink/55">{i.label}</dt>
                  <dd className="mt-0.5 font-medium text-ink">{i.value}</dd>
                </div>
              )}
            </dl>
          </div>
        </Container>
      </section>

      <section aria-labelledby="loc-cat-title" className="bg-ink/[0.03] py-16 md:py-24">
        <Container>
          <h2 id="loc-cat-title" className="font-display text-[32px] font-bold leading-[1.1] md:text-[44px]">
            Cleaning services in {location.name}
          </h2>
          <div className="mt-10">
            <CategoryCards />
          </div>
        </Container>
      </section>

      <WhyChooseDark title={`Why ${location.name} chooses Shaggy`} />
      <ProcessSteps title="How it works" />
      <Testimonials title={`Reviews from ${location.name}`} />
      <FaqSection items={locationFaqs} />
      <FinalCTA title={`Get a free quote in ${location.name}`} />
    </>);

}