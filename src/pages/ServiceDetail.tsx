import React from 'react';
import { useParams } from 'react-router-dom';
import { PageHero } from '../components/sections/PageHero';
import { IncludedList } from '../components/sections/IncludedList';
import { ProcessSteps } from '../components/sections/ProcessSteps';
import { WhyChooseDark } from '../components/sections/WhyChooseDark';
import { ServiceAreas } from '../components/sections/ServiceAreas';
import { Testimonials } from '../components/sections/Testimonials';
import { FaqSection } from '../components/sections/FaqSection';
import { ServiceCard } from '../components/sections/ServiceCard';
import { FinalCTA } from '../components/sections/FinalCTA';
import { ServiceInfoPanel } from '../components/service/ServiceInfoPanel';
import { QuickRequestPanel } from '../components/quick-request/QuickRequestPanel';
import { Container } from '../components/ui/Container';
import { SectionHeading } from '../components/ui/SectionHeading';
import { NotFound } from './NotFound';
import { faqs } from '../data/faqs';
import { getCategory, getService, servicesInCategory } from '../utils/content';

export function ServiceDetail() {
  const { category: catSlug, service: slug } = useParams();
  const service = getService(slug);
  const category = getCategory(catSlug);
  if (!service || !category || service.category !== category.slug) return <NotFound />;

  const related = servicesInCategory(category.slug).filter((s) => s.slug !== service.slug).slice(0, 3);
  const serviceFaqs = [
  ...faqs.filter((f) => f.link?.to.includes(service.slug)),
  ...faqs.filter((f) => ['Services', 'Pricing & Quotes'].includes(f.category) && !f.link?.to.includes(service.slug))].
  slice(0, 5);

  return (
    <>
      <PageHero
        crumbs={[
        { label: 'Services', to: '/services' },
        { label: category.name, to: `/services/${category.slug}` },
        { label: service.name }]
        }
        title={service.name}
        description={service.overview}
        image={service.image}
        imageAlt={`${service.name} in progress`} />
      
      <div className="flow-root bg-ink/[0.03] pb-16">
        <QuickRequestPanel overlap defaultService={service.slug} title={`Request ${service.name.toLowerCase()}`} />
      </div>

      <section aria-labelledby="overview-title" className="py-16 md:py-24">
        <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-8">
            <h2 id="overview-title" className="font-display text-[32px] font-bold leading-[1.1] md:text-[40px]">Who is it for?</h2>
            <p className="mt-4 max-w-2xl text-[18px] leading-relaxed text-ink/75">{service.whoFor}</p>

            <h3 className="mt-10 font-display text-lg font-bold text-ink">Ideal for</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {service.idealFor.map((i) =>
              <li key={i} className="inline-flex h-9 items-center rounded-full border border-ink/15 px-4 text-sm font-medium text-ink">{i}</li>
              )}
            </ul>

            <h2 className="mt-16 font-display text-[32px] font-bold leading-[1.1] md:text-[40px]">What’s included</h2>
            <div className="mt-6">
              <IncludedList items={service.included} />
            </div>

            <h2 className="mt-16 font-display text-[32px] font-bold leading-[1.1] md:text-[40px]">Key benefits</h2>
            <dl className="mt-8 grid gap-8 sm:grid-cols-3">
              {service.benefits.map((b) =>
              <div key={b.title} className="border-t-2 border-ink pt-5">
                  <dt className="font-display text-xl font-bold text-ink">{b.title}</dt>
                  <dd className="mt-2 text-[15px] leading-relaxed text-ink/65">{b.text}</dd>
                </div>
              )}
            </dl>
          </div>
          <div className="lg:col-span-4">
            <ServiceInfoPanel service={service} />
          </div>
        </Container>
      </section>

      <ProcessSteps title={`How ${service.name.toLowerCase()} works`} />
      <WhyChooseDark />
      <ServiceAreas title={`${service.name} across Hobart`} />
      <Testimonials title="Customer reviews" category={category.slug} />
      <FaqSection items={serviceFaqs} title={`${service.name} FAQs`} />

      {related.length > 0 &&
      <section aria-labelledby="related-title" className="border-t border-ink/10 py-16 md:py-24">
          <Container>
            <SectionHeading title={<span id="related-title">Related services</span>} />
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((s) =>
            <ServiceCard key={s.slug} service={s} />
            )}
            </div>
          </Container>
        </section>
      }

      <FinalCTA title={`Book your ${service.name.toLowerCase()}`} image={service.image} />
    </>);

}