import React from 'react';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';
import { ServiceCard } from '../sections/ServiceCard';
import { getService } from '../../utils/content';
import type { Service } from '../../types/content';

const featuredSlugs = ['office-cleaning', 'medical-centre-cleaning', 'house-cleaning'];

export function FeaturedServices() {
  const [lead, ...rest] = featuredSlugs.map((s) => getService(s)).filter((s): s is Service => Boolean(s));
  return (
    <section aria-labelledby="featured-title" className="bg-white py-16 md:py-24">
      <Container>
        <SectionHeading
          title={<span id="featured-title">Our most requested services</span>}
          description="The cleans Hobart homes and businesses book with us most."
          action={<Button to="/services" variant="secondary">View All Services</Button>} />
        
        <div className="mt-12 grid gap-6 lg:grid-cols-3 lg:grid-rows-2">
          <ServiceCard service={lead} size="feature" className="lg:col-span-2 lg:row-span-2" />
          {rest.map((s) =>
          <ServiceCard key={s.slug} service={s} />
          )}
        </div>
      </Container>
    </section>);

}