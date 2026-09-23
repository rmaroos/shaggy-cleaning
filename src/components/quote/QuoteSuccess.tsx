import React from 'react';
import { motion } from 'framer-motion';
import { CheckIcon, MailIcon, PhoneIcon } from 'lucide-react';
import { Button } from '../ui/Button';
import { contact } from '../../data/site';
import { getService } from '../../utils/content';
import type { QuoteValues } from '../../hooks/useQuoteForm';

const nextSteps = [
{ title: 'We review your request', text: 'Our team checks your property details and requirements.' },
{ title: 'We contact you', text: `A team member calls or emails ${contact.responseTime}.` },
{ title: 'You receive your quote', text: 'A clear, itemised price — no obligation to book.' }];


export function QuoteSuccess({ values, reference }: {values: QuoteValues;reference: string;}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.28, ease: [0.23, 1, 0.32, 1] }}
      role="status">
      
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand text-white">
        <CheckIcon className="h-7 w-7" strokeWidth={2.5} aria-hidden="true" />
      </span>
      <h2 className="mt-6 font-display text-[32px] font-extrabold leading-tight text-ink md:text-[40px]">Request received.</h2>
      <p className="mt-3 max-w-xl text-[17px] leading-relaxed text-ink/70">
        Thanks, {values.firstName}. Your quote request for <span className="font-semibold text-ink">{getService(values.service)?.name}</span> is with our team.
      </p>
      <p className="mt-5 inline-flex items-center gap-3 rounded-md border border-ink/15 px-4 py-2.5 text-sm">
        <span className="text-ink/55">Reference</span>
        <span className="font-display text-base font-bold text-ink">{reference}</span>
      </p>

      <h3 className="mt-10 font-display text-lg font-bold text-ink">What happens next</h3>
      <ol className="mt-4 space-y-4">
        {nextSteps.map((s, i) =>
        <li key={s.title} className="flex gap-4">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-ink text-[13px] font-bold text-white">{i + 1}</span>
            <div>
              <p className="font-semibold text-ink">{s.title}</p>
              <p className="text-[15px] text-ink/65">{s.text}</p>
            </div>
          </li>
        )}
      </ol>
      <p className="mt-8 text-[15px] text-ink/65">
        We’ll contact you on <span className="font-semibold text-ink">{values.phone}</span> or <span className="font-semibold text-ink">{values.email}</span>.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Button href={contact.phoneHref} variant="secondary">
          <PhoneIcon className="h-4 w-4" aria-hidden="true" />
          {contact.phone}
        </Button>
        <Button href={`mailto:${contact.email}`} variant="text" className="px-2">
          <MailIcon className="h-4 w-4" aria-hidden="true" />
          {contact.email}
        </Button>
      </div>
      <div className="mt-10 border-t border-ink/10 pt-6">
        <Button to="/" variant="text">Back to home</Button>
      </div>
    </motion.div>);

}