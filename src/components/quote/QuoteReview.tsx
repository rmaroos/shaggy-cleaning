import React from 'react';
import { getService, formatDate } from '../../utils/content';
import { quoteSteps, type QuoteForm } from '../../hooks/useQuoteForm';
import { cn } from '../../utils/cn';

export function QuoteReview({ form }: {form: QuoteForm;}) {
  const { values: v, errors, id, set, goTo } = form;
  const groups = [
  { step: 0, rows: [['Name', `${v.firstName} ${v.lastName}`], ['Email', v.email], ['Phone', v.phone]] },
  { step: 1, rows: [['Address', [v.address, v.suburb].filter(Boolean).join(', ')], ['Property type', v.propertyType]] },
  { step: 2, rows: [['Service', getService(v.service)?.name ?? '—']] },
  { step: 3, rows: [['Requirements', v.details || 'None provided']] },
  { step: 4, rows: [['Date', v.date ? formatDate(v.date) : '—'], ['Time', v.time || 'Any time'], ['Frequency', v.frequency]] }];


  return (
    <div>
      <div className="divide-y divide-ink/10 border-y border-ink/10">
        {groups.map((g) =>
        <div key={g.step} className="grid gap-3 py-5 sm:grid-cols-[160px_1fr_auto] sm:gap-6">
            <p className="font-display text-[15px] font-bold text-ink">{quoteSteps[g.step].title}</p>
            <dl className="space-y-1.5">
              {g.rows.map(([label, value]) =>
            <div key={label} className="flex gap-3 text-[15px]">
                  <dt className="w-28 shrink-0 text-ink/55">{label}</dt>
                  <dd className="whitespace-pre-line break-words text-ink">{value}</dd>
                </div>
            )}
            </dl>
            <button type="button" onClick={() => goTo(g.step)} className="justify-self-start text-sm font-semibold text-ink underline underline-offset-4 hover:text-brand sm:justify-self-end">
              Edit
            </button>
          </div>
        )}
      </div>
      <div className="mt-6">
        <label className="flex cursor-pointer items-start gap-3">
          <input
            id={id('consent')}
            type="checkbox"
            checked={v.consent}
            aria-invalid={!!errors.consent || undefined}
            aria-describedby={errors.consent ? `${id('consent')}-error` : undefined}
            onChange={(e) => set('consent', e.target.checked)}
            className={cn('mt-0.5 h-5 w-5 shrink-0 cursor-pointer accent-brand', errors.consent && 'outline outline-1 outline-brand')} />
          
          <span className="text-[14px] leading-relaxed text-ink/75">
            I agree to Shaggy Cleaning contacting me about this quote and to the{' '}
            <a href="/privacy-policy" className="font-semibold text-ink underline underline-offset-2 hover:text-brand">Privacy Policy</a>.
          </span>
        </label>
        {errors.consent &&
        <p id={`${id('consent')}-error`} role="alert" className="mt-1.5 pl-8 text-[13px] text-brand">{errors.consent}</p>
        }
      </div>
    </div>);

}