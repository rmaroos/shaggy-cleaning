import React from 'react';
import { trustPoints } from '../../data/site';
import { Container } from '../ui/Container';

export function TrustStrip() {
  return (
    <section aria-label="Why customers trust us" className="border-y border-ink/10 bg-white">
      <Container>
        <ul className="no-scrollbar -mx-5 flex gap-8 overflow-x-auto px-5 py-6 md:mx-0 md:justify-between md:px-0">
          {trustPoints.map((t) =>
          <li key={t.label} className="flex shrink-0 items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-ink/15">
                <t.icon className="h-4 w-4 text-ink" aria-hidden="true" />
              </span>
              <span className="whitespace-nowrap text-[15px] font-semibold text-ink">{t.label}</span>
            </li>
          )}
        </ul>
      </Container>
    </section>);

}