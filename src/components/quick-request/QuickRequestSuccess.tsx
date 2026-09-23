import React from 'react';
import { motion } from 'framer-motion';
import { CheckIcon, PhoneIcon } from 'lucide-react';
import { Button } from '../ui/Button';
import { contact } from '../../data/site';

interface QuickRequestSuccessProps {
  name: string;
  phone: string;
  reference: string;
  quoteHref: string;
  onReset: () => void;
  onNavigate?: () => void;
}

export function QuickRequestSuccess({ name, phone, reference, quoteHref, onReset, onNavigate }: QuickRequestSuccessProps) {
  const firstName = name.trim().split(' ')[0];
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
      role="status"
      aria-live="polite"
      className="flex flex-col gap-5">
      
      <div className="flex items-start gap-4">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand text-white">
          <CheckIcon className="h-5 w-5" strokeWidth={2.5} aria-hidden="true" />
        </span>
        <div>
          <h3 className="font-display text-2xl font-bold text-ink">Request received.</h3>
          <p className="mt-1.5 text-[15px] leading-relaxed text-ink/70">
            Thanks{firstName ? `, ${firstName}` : ''} — our team will review your request and call you on{' '}
            <span className="font-semibold text-ink">{phone}</span> {contact.responseTime}.
          </p>
        </div>
      </div>
      <dl className="flex flex-wrap gap-x-8 gap-y-2 border-y border-ink/10 py-4 text-sm">
        <div>
          <dt className="text-ink/50">Reference</dt>
          <dd className="font-semibold text-ink">{reference}</dd>
        </div>
        <div>
          <dt className="text-ink/50">Need it sooner?</dt>
          <dd>
            <a href={contact.phoneHref} className="inline-flex items-center gap-1.5 font-semibold text-ink hover:text-brand">
              <PhoneIcon className="h-3.5 w-3.5" aria-hidden="true" />
              {contact.phone}
            </a>
          </dd>
        </div>
      </dl>
      <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
        <Button to={quoteHref} variant="secondary" size="sm" onClick={onNavigate}>
          Add details for a faster quote
        </Button>
        <Button variant="text" onClick={onReset}>
          Send another request
        </Button>
      </div>
    </motion.div>);

}