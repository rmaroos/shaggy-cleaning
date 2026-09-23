import React from 'react';
import { useParams } from 'react-router-dom';
import { PageHero } from '../components/sections/PageHero';
import { ServiceCard } from '../components/sections/ServiceCard';
import { IncludedList } from '../components/sections/IncludedList';
import { ProcessSteps } from '../components/sections/ProcessSteps';
import { ServiceAreas } from '../components/sections/ServiceAreas';
import { Testimonials } from '../components/sections/Testimonials';
import { FaqSection } from '../components/sections/FaqSection';
import { FinalCTA } from '../components/sections/FinalCTA';
import { QuickRequestPanel } from '../components/quick-request/QuickRequestPanel';
import { Container } from '../components/ui/Container';
import { SectionHeading } from '../components/ui/SectionHeading';
import { NotFound } from './NotFound';
import { faqs } from '../data/faqs';
import { getCategory, servicesInCategory } from '../utils/content';

const whyTitles = {
  residential: 'Why residential customers choose Shaggy',
  commercial: 'Why businesses choose Shaggy',
  specialised: 'Why choose Shaggy for specialised cleaning'
};

export function ServiceCategory() {
  const { category: slug } = useParams();
  const category = getCategory(slug);
  if (!category) return <NotFound />;

  const list = servicesInCategory(category.slug);
  const categoryFaqs = faqs.filter((f) => f.category === 'Services' || f.category === 'Pricing & Quotes').slice(0, 5);

  return (
    <>
      <PageHero
        crumbs={[{ label: 'Services', to: '/services' }, { label: category.name }]}
        title={category.name}
        description={category.intro}
        image={category.image} />
      
      <div className="flow-root bg-ink/[0.03] pb-4">
        <QuickRequestPanel overlap priorityCategory={category.slug} title={`Request ${category.name.toLowerCase()}`} />
      </div>

      <section aria-labelledby="list-title" className="bg-ink/[0.03] pb-16 pt-12 md:pb-24 md:pt-16">
        <Container>
          <SectionHeading
            title={<span id="list-title">{category.name.replace(' Cleaning', '')} services</span>}
            description={`${list.length} services, each with its own scope and trained team.`} />
          
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {list.map((s) =>
            <ServiceCard key={s.slug} service={s} />
            )}
          </div>
        </Container>
      </section>

      <section aria-labelledby="cat-why-title" className="py-16 md:py-24">
        <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <h2 id="cat-why-title" className="font-display text-[32px] font-bold leading-[1.1] md:text-[44px]">{whyTitles[category.slug]}</h2>
          </div>
          <dl className="grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:col-span-7">
            {category.why.map((w) =>
            <div key={w.title} className="border-t-2 border-ink pt-5">
                <dt className="font-display text-xl font-bold text-ink">{w.title}</dt>
                <dd className="mt-2 text-[15px] leading-relaxed text-ink/65">{w.text}</dd>
              </div>
            )}
          </dl>
        </Container>
      </section>

      <section aria-labelledby="included-title" className="bg-ink py-16 text-white md:py-24">
        <Container className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="aspect-[4/5] overflow-hidden rounded-2xl">
              <img src={list[0]?.image ?? category.image} alt="" loading="lazy" className="h-full w-full object-cover" />
            </div>
          </div>
          <div className="lg:col-span-7">
            <h2 id="included-title" className="font-display text-[32px] font-bold leading-[1.1] md:text-[44px]">What’s included</h2>
            <p className="mt-4 max-w-lg text-[17px] text-white/70">
              A typical {category.name.toLowerCase()} scope. Every quote is tailored to your property.
            </p>
            <div className="mt-8">
              <IncludedList items={category.included} inverse />
            </div>
          </div>
        </Container>
      </section>

      <section aria-labelledby="env-cat-title" className="py-16 md:py-24">
        <Container>
          <h2 id="env-cat-title" className="font-display text-[32px] font-bold leading-[1.1] md:text-[44px]">{category.environmentsTitle}</h2>
          <ul className="mt-10 grid grid-cols-2 border-l border-t border-ink/15 md:grid-cols-3 lg:grid-cols-4">
            {category.environments.map((e) =>
            <li key={e} className="border-b border-r border-ink/15 p-6 font-display text-lg font-bold text-ink md:p-8 md:text-xl">
                {e}
              </li>
            )}
          </ul>
        </Container>
      </section>

      <ProcessSteps />
      <ServiceAreas />
      <Testimonials category={category.slug} />
      <FaqSection items={categoryFaqs} />
      <FinalCTA image={category.image} />
    </>);

}