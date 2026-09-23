import React, { useId, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRightIcon, PlusIcon } from 'lucide-react';
import { cn } from '../../utils/cn';
import type { Faq } from '../../types/content';

export function FaqAccordion({ items, defaultOpen = 0 }: {items: Faq[];defaultOpen?: number | null;}) {
  const [open, setOpen] = useState<number | null>(defaultOpen);
  const baseId = useId();

  return (
    <ul className="border-t border-ink/15">
      {items.map((faq, i) => {
        const isOpen = open === i;
        const btnId = `${baseId}-q${i}`;
        const panelId = `${baseId}-a${i}`;
        return (
          <li key={faq.question} className="relative border-b border-ink/15">
            <span
              className={cn('absolute left-0 top-0 h-full w-0.5 origin-top bg-brand transition-transform duration-200 ease-out', isOpen ? 'scale-y-100' : 'scale-y-0')}
              aria-hidden="true" />
            
            <h3>
              <button
                id={btnId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : i)}
                className={cn(
                  'flex w-full items-center justify-between gap-6 py-5 text-left transition-[padding] duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand',
                  isOpen && 'pl-5'
                )}>
                
                <span className="font-display text-[17px] font-bold text-ink md:text-lg">{faq.question}</span>
                <PlusIcon
                  className={cn('h-5 w-5 shrink-0 transition-transform duration-200 ease-out', isOpen ? 'rotate-45 text-brand' : 'text-ink')}
                  aria-hidden="true" />
                
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen &&
              <motion.div
                id={panelId}
                role="region"
                aria-labelledby={btnId}
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.22, ease: [0.23, 1, 0.32, 1] }}
                className="overflow-hidden">
                
                  <div className="pb-6 pl-5 pr-10">
                    <p className="text-[16px] leading-relaxed text-ink/75">{faq.answer}</p>
                    {faq.link &&
                  <Link to={faq.link.to} className="mt-3 inline-flex items-center gap-1.5 text-[15px] font-semibold text-brand hover:underline">
                        {faq.link.label}
                        <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
                      </Link>
                  }
                  </div>
                </motion.div>
              }
            </AnimatePresence>
          </li>);

      })}
    </ul>);

}