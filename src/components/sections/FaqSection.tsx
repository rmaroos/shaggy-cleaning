import React from 'react';
import { FaqAccordion } from './FaqAccordion';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { faqs } from '../../data/faqs';
import type { Faq } from '../../types/content';

interface FaqSectionProps {
  items?: Faq[];
  title?: string;
}

export function FaqSection({ items = faqs.slice(0, 5), title = 'Frequently asked questions' }: FaqSectionProps) {
  return (
    <section aria-labelledby="faq-title" className="py-16 md:py-24">
      <Container className="grid gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <h2 id="faq-title" className="font-display text-[32px] font-bold leading-[1.1] md:text-[44px]">{title}</h2>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/65">
            Can’t find what you’re looking for? Our team is happy to help.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button to="/faqs" variant="secondary">View all FAQs</Button>
            <Button to="/contact" variant="text" className="px-2">Contact us</Button>
          </div>
        </div>
        <div className="lg:col-span-8">
          <FaqAccordion items={items} />
        </div>
      </Container>
    </section>);

}