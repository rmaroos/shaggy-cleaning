import React, { useMemo, useState } from 'react';
import { SearchIcon, XIcon } from 'lucide-react';
import { PageHero } from '../components/sections/PageHero';
import { FaqAccordion } from '../components/sections/FaqAccordion';
import { FinalCTA } from '../components/sections/FinalCTA';
import { QuickRequestPanel } from '../components/quick-request/QuickRequestPanel';
import { Container } from '../components/ui/Container';
import { Button } from '../components/ui/Button';
import { faqCategories, faqs } from '../data/faqs';
import { contact } from '../data/site';
import { cn } from '../utils/cn';
import type { FaqCategory } from '../types/content';

export function Faqs() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<FaqCategory | 'All'>('All');

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return faqs.filter(
      (f) =>
      (category === 'All' || f.category === category) && (
      !q || f.question.toLowerCase().includes(q) || f.answer.toLowerCase().includes(q))
    );
  }, [query, category]);

  const tabs: Array<FaqCategory | 'All'> = ['All', ...faqCategories];

  return (
    <>
      <PageHero
        crumbs={[{ label: 'FAQs' }]}
        title="Frequently asked questions"
        description="Answers about our services, pricing, booking and what to expect."
        actions={null}
        compact>
        
        <div className="relative mt-8 max-w-xl">
          <label htmlFor="faq-search" className="sr-only">Search questions</label>
          <SearchIcon className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-ink/50" aria-hidden="true" />
          <input
            id="faq-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search questions, e.g. “bond clean”"
            className="h-14 w-full rounded-md border border-ink/20 bg-white pl-12 pr-12 text-[16px] text-ink placeholder:text-ink/40 transition-[border-color,box-shadow] duration-150 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand" />
          
          {query &&
          <button
            onClick={() => setQuery('')}
            aria-label="Clear search"
            className="absolute right-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded hover:bg-ink/[0.06]">
            
              <XIcon className="h-4 w-4" aria-hidden="true" />
            </button>
          }
        </div>
      </PageHero>

      <section aria-label="Questions" className="pb-16 md:pb-24">
        <Container className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <nav aria-label="FAQ categories" className="lg:col-span-3">
            <ul className="no-scrollbar -mx-5 flex gap-2 overflow-x-auto px-5 lg:mx-0 lg:flex-col lg:gap-0 lg:px-0 lg:sticky lg:top-28">
              {tabs.map((t) => {
                const count = t === 'All' ? faqs.length : faqs.filter((f) => f.category === t).length;
                const active = category === t;
                return (
                  <li key={t} className="shrink-0">
                    <button
                      onClick={() => setCategory(t)}
                      aria-pressed={active}
                      className={cn(
                        'flex w-full items-center justify-between gap-4 whitespace-nowrap rounded-md border px-4 py-2.5 text-left text-[15px] font-semibold transition-colors duration-150 lg:rounded-none lg:border-0 lg:border-l-2 lg:py-3',
                        active ? 'border-ink bg-ink text-white lg:border-brand lg:bg-transparent lg:text-ink' : 'border-ink/15 text-ink/65 hover:text-ink lg:border-ink/10'
                      )}>
                      
                      {t === 'All' ? 'All questions' : t}
                      <span className={cn('text-[13px] font-medium', active ? 'text-white/70 lg:text-ink/50' : 'text-ink/40')}>{count}</span>
                    </button>
                  </li>);

              })}
            </ul>
          </nav>
          <div className="lg:col-span-9">
            <p className="mb-4 text-sm text-ink/55" aria-live="polite">
              {results.length} {results.length === 1 ? 'question' : 'questions'}
              {query && <> matching “{query}”</>}
            </p>
            {results.length > 0 ?
            <FaqAccordion key={`${category}-${query}`} items={results} defaultOpen={query ? 0 : null} /> :

            <div className="rounded-xl border border-ink/15 p-10 text-center">
                <h2 className="font-display text-2xl font-bold text-ink">No questions found</h2>
                <p className="mx-auto mt-2 max-w-sm text-[15px] text-ink/65">
                  Try a different search term, or ask our team directly — we’re happy to help.
                </p>
                <div className="mt-6 flex flex-wrap justify-center gap-3">
                  <Button variant="secondary" onClick={() => {setQuery('');setCategory('All');}}>Clear search</Button>
                  <Button href={contact.phoneHref}>Call {contact.phone}</Button>
                </div>
              </div>
            }
          </div>
        </Container>
      </section>

      <div className="bg-ink/[0.03]">
        <QuickRequestPanel title="Still have questions?" description="Send a quick request and we’ll answer them with your free quote." />
      </div>
      <div className="pt-16 md:pt-24">
        <FinalCTA />
      </div>
    </>);

}