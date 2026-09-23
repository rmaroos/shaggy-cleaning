import React from 'react';
import { processSteps } from '../../data/site';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';

export function ProcessSteps({ title = 'Getting started is simple' }: {title?: string;}) {
  return (
    <section aria-labelledby="process-title" className="py-16 md:py-24">
      <Container>
        <SectionHeading
          title={<span id="process-title">{title}</span>}
          description="Four steps from first message to a clean property — with no obligation until you’re happy with the quote."
          action={<Button to="/get-a-free-quote">Get a Free Quote</Button>} />
        
        <ol className="mt-12 grid gap-10 md:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-0">
          {processSteps.map((step, i) =>
          <li key={step.title} className="relative lg:pr-10">
              <div className="flex items-center gap-4">
                <span
                className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full font-display text-lg font-bold text-white ${
                i === 0 ? 'bg-brand' : 'bg-ink'}`
                }>
                
                  {i + 1}
                </span>
                {i < processSteps.length - 1 && <span className="hidden h-px flex-1 bg-ink/15 lg:block" aria-hidden="true" />}
              </div>
              <step.icon className="mt-6 h-6 w-6 text-ink" aria-hidden="true" />
              <h3 className="mt-3 font-display text-xl font-bold text-ink">{step.title}</h3>
              <p className="mt-2 max-w-[260px] text-[15px] leading-relaxed text-ink/65">{step.text}</p>
            </li>
          )}
        </ol>
      </Container>
    </section>);

}