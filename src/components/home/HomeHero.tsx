import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRightIcon, CheckIcon, MapPinIcon, PhoneIcon } from 'lucide-react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { images } from '../../data/images';
import { contact } from '../../data/site';
import { useQuickRequestDrawer } from '../../contexts/QuickRequestContext';

const ease = [0.23, 1, 0.32, 1] as const;
const indicators = ['Police-checked, insured team', 'No lock-in contracts', 'Quotes within one business day'];

export function HomeHero() {
  const reduce = useReducedMotion();
  const { open } = useQuickRequestDrawer();
  const rise = (delay: number) =>
  reduce ? {} : { initial: { opacity: 0, y: 12 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.3, delay, ease } };

  return (
    <section className="bg-white pb-24 pt-10 md:pb-32 md:pt-16">
      <Container className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-6">
          <motion.p {...rise(0)} className="inline-flex items-center gap-2 rounded-full border border-ink/15 py-1.5 pl-2.5 pr-3.5 text-[13px] font-semibold text-ink">
            <MapPinIcon className="h-3.5 w-3.5 text-brand" aria-hidden="true" />
            Local to Hobart, Tasmania
          </motion.p>
          <motion.h1 {...rise(0.04)} className="mt-6 font-display text-[44px] font-extrabold leading-[1.02] text-ink md:text-[72px]">
            Professional cleaning for homes <span className="text-brand">&</span> businesses.
          </motion.h1>
          <motion.p {...rise(0.08)} className="mt-6 max-w-lg text-[17px] leading-relaxed text-ink/65 md:text-[19px]">
            Reliable residential, commercial and specialised cleaning across Hobart and surrounding areas — done properly, every visit.
          </motion.p>
          <motion.div {...rise(0.12)} className="mt-9 flex flex-wrap gap-3">
            <Button to="/get-a-free-quote" size="lg">
              Get a Free Quote
              <ArrowRightIcon className="h-4 w-4 transition-transform duration-150 ease-out group-hover:translate-x-0.5" aria-hidden="true" />
            </Button>
            <Button href={contact.phoneHref} variant="secondary" size="lg">
              <PhoneIcon className="h-4 w-4" aria-hidden="true" />
              Call Now
            </Button>
          </motion.div>
          <motion.ul {...rise(0.16)} className="mt-10 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:gap-x-6">
            {indicators.map((t) =>
            <li key={t} className="flex items-center gap-2 text-[14px] font-medium text-ink/75">
                <CheckIcon className="h-4 w-4 text-brand" strokeWidth={2.5} aria-hidden="true" />
                {t}
              </li>
            )}
          </motion.ul>
        </div>

        <div className="relative lg:col-span-6">
          <motion.div
            initial={reduce ? false : { opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, ease }}
            className="relative aspect-[4/5] max-h-[640px] w-full overflow-hidden rounded-hero bg-ink/[0.04] sm:aspect-[5/4] lg:aspect-[4/5]">
            
            <img src={images.hero} alt="A Shaggy cleaner wiping down a marble kitchen bench in a bright Hobart home" className="h-full w-full object-cover" />
          </motion.div>
          <motion.button
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2, ease }}
            onClick={() => open()}
            className="group absolute -bottom-6 left-4 right-4 flex items-center justify-between gap-4 rounded-lg bg-brand p-5 text-left text-white shadow-float transition-colors duration-150 hover:bg-brand/95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 sm:left-auto sm:right-6 sm:w-[320px]">
            
            <span>
              <span className="block font-display text-lg font-bold leading-tight">Request a clean in under a minute</span>
              <span className="mt-1 block text-sm text-white/80">Five fields. No obligation.</span>
            </span>
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-brand">
              <ArrowRightIcon className="h-4 w-4 transition-transform duration-150 ease-out group-hover:translate-x-0.5" aria-hidden="true" />
            </span>
          </motion.button>
        </div>
      </Container>
    </section>);

}