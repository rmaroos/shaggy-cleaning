import React from 'react';
import { PageHero } from '../components/sections/PageHero';
import { WhyChooseDark } from '../components/sections/WhyChooseDark';
import { ProcessSteps } from '../components/sections/ProcessSteps';
import { ServiceAreas } from '../components/sections/ServiceAreas';
import { Testimonials } from '../components/sections/Testimonials';
import { FinalCTA } from '../components/sections/FinalCTA';
import { Container } from '../components/ui/Container';
import { companyValues } from '../data/site';
import { images } from '../data/images';

const team = [
{ role: 'Residential team', text: 'Regular house cleans and end of lease — the same faces week to week wherever possible.' },
{ role: 'Commercial team', text: 'After-hours crews for offices, clinics, schools and facilities, each inducted to their sites.' },
{ role: 'Specialist technicians', text: 'Trained on carpet extraction, pressure washing and height-safe window systems.' }];


export function About() {
  return (
    <>
      <PageHero
        crumbs={[{ label: 'About Us' }]}
        title="A local cleaning team that shows up and does it properly."
        description="Shaggy Cleaning looks after homes, businesses and facilities across Hobart with one simple standard: clean it like we’d want it cleaned."
        image={images.team}
        imageAlt="The Shaggy Cleaning team" />
      

      <section aria-labelledby="story-title" className="border-t border-ink/10 py-16 md:py-24">
        <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <h2 id="story-title" className="font-display text-[32px] font-bold leading-[1.1] md:text-[44px] lg:col-span-4">Our story</h2>
          <div className="space-y-5 text-[18px] leading-relaxed text-ink/75 lg:col-span-8">
            <p>
              Shaggy started with a handful of Hobart homes and a frustration shared by many of our first customers: cleaners who didn’t turn up, rushed through the job or changed every visit.
            </p>
            <p>
              We built the business around the opposite. Consistent teams. Written checklists. Clear communication. As word spread, homeowners asked us to clean their offices, and offices introduced us to clinics, schools and facilities.
            </p>
            <p className="font-display text-2xl font-bold leading-snug text-ink">
              Today we clean across Greater Hobart — and we still answer the phone ourselves.
            </p>
          </div>
        </Container>
      </section>

      <section aria-label="Mission and vision" className="bg-ink/[0.03] py-16 md:py-24">
        <Container className="grid gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <h2 className="font-display text-sm font-bold text-brand">Mission</h2>
            <p className="mt-4 font-display text-[26px] font-bold leading-snug text-ink md:text-[32px]">
              Deliver reliable, high-quality cleaning that gives Hobart homes and businesses one less thing to worry about.
            </p>
          </div>
          <div>
            <h2 className="font-display text-sm font-bold text-brand">Vision</h2>
            <p className="mt-4 font-display text-[26px] font-bold leading-snug text-ink md:text-[32px]">
              To be Tasmania’s most trusted cleaning company — known for consistency, not just a good first clean.
            </p>
          </div>
        </Container>
      </section>

      <section id="team" aria-labelledby="team-title" className="scroll-mt-24 py-16 md:py-24">
        <Container className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <div className="aspect-[3/2] overflow-hidden rounded-2xl">
              <img src={images.team} alt="Shaggy cleaners standing together in uniform" loading="lazy" className="h-full w-full object-cover" />
            </div>
          </div>
          <div className="lg:col-span-6">
            <h2 id="team-title" className="font-display text-[32px] font-bold leading-[1.1] md:text-[44px]">Who we are</h2>
            <p className="mt-4 text-[17px] leading-relaxed text-ink/65">
              Every cleaner is police checked, insured, uniformed and trained on our standards before their first job.
            </p>
            <ul className="mt-8 border-t border-ink/15">
              {team.map((t) =>
              <li key={t.role} className="border-b border-ink/15 py-5">
                  <h3 className="font-display text-lg font-bold text-ink">{t.role}</h3>
                  <p className="mt-1 text-[15px] leading-relaxed text-ink/65">{t.text}</p>
                </li>
              )}
            </ul>
          </div>
        </Container>
      </section>

      <WhyChooseDark id="why" image={images.office} />

      <section id="values" aria-labelledby="values-title" className="scroll-mt-24 py-16 md:py-24">
        <Container>
          <h2 id="values-title" className="font-display text-[32px] font-bold leading-[1.1] md:text-[44px]">Our values</h2>
          <dl className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-5">
            {companyValues.map((v) =>
            <div key={v.title} className="border-t-2 border-ink pt-5">
                <v.icon className="h-5 w-5 text-brand" aria-hidden="true" />
                <dt className="mt-4 font-display text-xl font-bold text-ink">{v.title}</dt>
                <dd className="mt-2 text-[15px] leading-relaxed text-ink/65">{v.text}</dd>
              </div>
            )}
          </dl>
        </Container>
      </section>

      <ProcessSteps title="Our approach" />
      <ServiceAreas />
      <Testimonials />
      <FinalCTA />
    </>);

}