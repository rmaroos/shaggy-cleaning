import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRightIcon } from 'lucide-react';
import { Container } from '../ui/Container';
import { environments } from '../../data/site';

export function Environments() {
  return (
    <section aria-labelledby="env-title" className="py-16 md:py-24">
      <Container className="grid gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <h2 id="env-title" className="font-display text-[32px] font-bold leading-[1.1] md:text-[44px]">
            Spaces we clean every week
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/65">
            Each environment gets its own scope, products and procedures — from clinical infection control to child-safe classrooms.
          </p>
        </div>
        <ul className="grid border-t border-ink/15 sm:grid-cols-2 lg:col-span-8">
          {environments.map((e, i) =>
          <li key={e.label} className={`border-b border-ink/15 ${i % 2 === 0 ? 'sm:pr-8' : 'sm:border-l sm:pl-8'}`}>
              <Link to={e.to} className="group flex items-center justify-between py-5">
                <span className="font-display text-xl font-bold text-ink transition-colors duration-150 group-hover:text-brand md:text-2xl">{e.label}</span>
                <ArrowUpRightIcon className="h-5 w-5 text-ink/40 transition-[transform,color] duration-150 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand" aria-hidden="true" />
              </Link>
            </li>
          )}
        </ul>
      </Container>
    </section>);

}