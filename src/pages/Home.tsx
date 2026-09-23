import React from 'react';
import { HomeHero } from '../components/home/HomeHero';
import { FeaturedServices } from '../components/home/FeaturedServices';
import { Environments } from '../components/home/Environments';
import { QuickRequestPanel } from '../components/quick-request/QuickRequestPanel';
import { TrustStrip } from '../components/sections/TrustStrip';
import { CategoryCards } from '../components/sections/CategoryCards';
import { WhyChooseDark } from '../components/sections/WhyChooseDark';
import { ProcessSteps } from '../components/sections/ProcessSteps';
import { ServiceAreas } from '../components/sections/ServiceAreas';
import { Testimonials } from '../components/sections/Testimonials';
import { FaqSection } from '../components/sections/FaqSection';
import { FinalCTA } from '../components/sections/FinalCTA';
import { Container } from '../components/ui/Container';
import { SectionHeading } from '../components/ui/SectionHeading';

export function Home() {
  return (
    <>
      <HomeHero />
      <div className="flow-root bg-ink/[0.03] pb-16 md:pb-20">
        <QuickRequestPanel overlap />
      </div>
      <TrustStrip />
      <section aria-labelledby="categories-title" className="py-16 md:py-24">
        <Container>
          <SectionHeading
            title={<span id="categories-title">Cleaning made simple.</span>}
            description="Professional cleaning services for homes, businesses and specialised facilities across Hobart." />
          
          <div className="mt-12">
            <CategoryCards />
          </div>
        </Container>
      </section>
      <FeaturedServices />
      <WhyChooseDark />
      <ProcessSteps />
      <Environments />
      <ServiceAreas />
      <Testimonials />
      <FaqSection />
      <FinalCTA />
    </>);

}