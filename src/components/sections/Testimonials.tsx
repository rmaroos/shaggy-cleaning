import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeftIcon, ArrowRightIcon, StarIcon } from 'lucide-react';
import { testimonials as allTestimonials } from '../../data/testimonials';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { cn } from '../../utils/cn';
import type { CategorySlug } from '../../types/content';

interface TestimonialsProps {
  title?: string;
  category?: CategorySlug;
}

export function Testimonials({ title = 'What our customers say', category }: TestimonialsProps) {
  const isDesktop = useMediaQuery('(min-width: 1024px)');
  const isTablet = useMediaQuery('(min-width: 768px)');
  const perView = isDesktop ? 3 : isTablet ? 2 : 1;
  const items = category ?
  [...allTestimonials].sort((a, b) => Number(b.category === category) - Number(a.category === category)) :
  allTestimonials;
  const pages = Math.ceil(items.length / perView);
  const [page, setPage] = useState(0);

  useEffect(() => setPage(0), [perView]);

  const go = (dir: number) => setPage((p) => (p + dir + pages) % pages);

  return (
    <section aria-labelledby="reviews-title" aria-roledescription="carousel" className="py-16 md:py-24">
      <Container>
        <SectionHeading
          title={<span id="reviews-title">{title}</span>}
          description="Real feedback from homes and businesses across Hobart."
          action={
          <div className="flex items-center gap-4">
              <button
              onClick={() => go(-1)}
              aria-label="Previous reviews"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/20 text-ink transition-colors duration-150 hover:border-ink hover:bg-ink hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand">
              
                <ArrowLeftIcon className="h-4 w-4" aria-hidden="true" />
              </button>
              <div className="flex gap-2" role="tablist" aria-label="Review pages">
                {Array.from({ length: pages }).map((_, i) =>
              <button
                key={i}
                role="tab"
                aria-selected={i === page}
                aria-label={`Page ${i + 1} of ${pages}`}
                onClick={() => setPage(i)}
                className={cn(
                  'h-2 rounded-full transition-[width,background-color] duration-200 ease-out',
                  i === page ? 'w-6 bg-brand' : 'w-2 bg-ink/20 hover:bg-ink/40'
                )} />

              )}
              </div>
              <button
              onClick={() => go(1)}
              aria-label="Next reviews"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/20 text-ink transition-colors duration-150 hover:border-ink hover:bg-ink hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand">
              
                <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          } />
        
        <div className="mt-12 overflow-hidden">
          <motion.ul
            className="flex"
            animate={{ x: `-${page * 100}%` }}
            transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
            aria-live="polite">
            
            {items.map((t, i) => {
              const visible = Math.floor(i / perView) === page;
              return (
                <li
                  key={t.name}
                  className="shrink-0 px-3 first:pl-0"
                  style={{ width: `${100 / perView}%`, paddingLeft: i % perView === 0 ? 0 : undefined, paddingRight: i % perView === perView - 1 ? 0 : undefined }}
                  aria-hidden={!visible}>
                  
                  <figure className="flex h-full flex-col rounded-lg border border-ink/15 bg-white p-7">
                    <div className="flex gap-0.5" aria-label={`${t.rating} out of 5 stars`}>
                      {Array.from({ length: 5 }).map((_, s) =>
                      <StarIcon key={s} className={cn('h-4 w-4', s < t.rating ? 'fill-brand text-brand' : 'text-ink/20')} aria-hidden="true" />
                      )}
                    </div>
                    <blockquote className="mt-5 flex-1 text-[17px] leading-relaxed text-ink">“{t.quote}”</blockquote>
                    <figcaption className="mt-6 border-t border-ink/10 pt-5">
                      <p className="font-semibold text-ink">{t.name}</p>
                      <p className="text-sm text-ink/55">
                        {t.place} · {t.type}
                      </p>
                    </figcaption>
                  </figure>
                </li>);

            })}
          </motion.ul>
        </div>
      </Container>
    </section>);

}