import React from 'react';
import { QuickRequestForm } from './QuickRequestForm';
import { Container } from '../ui/Container';
import { cn } from '../../utils/cn';
import type { CategorySlug } from '../../types/content';

interface QuickRequestPanelProps {
  title?: string;
  description?: string;
  defaultService?: string;
  defaultLocation?: string;
  priorityCategory?: CategorySlug;
  overlap?: boolean;
}

export function QuickRequestPanel({
  title = 'Request a cleaning service',
  description = 'Tell us what you need and we’ll come back with a free quote.',
  defaultService,
  defaultLocation,
  priorityCategory,
  overlap
}: QuickRequestPanelProps) {
  return (
    <section id="quick-request" aria-labelledby="quick-request-title" className={cn('relative z-10 scroll-mt-28', overlap ? '-mt-10 md:-mt-16' : 'py-12 md:py-16')}>
      <Container>
        <div className="rounded-xl border border-ink/10 bg-white p-6 shadow-float md:p-8">
          <div className="mb-6 flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between md:gap-6">
            <h2 id="quick-request-title" className="font-display text-2xl font-bold text-ink">{title}</h2>
            <p className="text-[15px] text-ink/60">{description}</p>
          </div>
          <QuickRequestForm
            layout="inline"
            defaultService={defaultService}
            defaultLocation={defaultLocation}
            priorityCategory={priorityCategory} />
          
        </div>
      </Container>
    </section>);

}