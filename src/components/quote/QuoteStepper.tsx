import React from 'react';
import { CheckIcon } from 'lucide-react';
import { quoteSteps } from '../../hooks/useQuoteForm';
import { cn } from '../../utils/cn';

interface QuoteStepperProps {
  step: number;
  maxStep: number;
  onSelect: (i: number) => void;
}

export function QuoteStepper({ step, maxStep, onSelect }: QuoteStepperProps) {
  return (
    <nav aria-label="Quote progress">
      <div className="mb-3 flex items-baseline justify-between md:hidden">
        <p className="font-display text-lg font-bold text-ink">{quoteSteps[step].title}</p>
        <p className="text-sm text-ink/55">{step + 1} / {quoteSteps.length}</p>
      </div>
      <div className="h-1 overflow-hidden rounded-full bg-ink/10 md:hidden" aria-hidden="true">
        <div
          className="h-full bg-brand transition-[width] duration-300 ease-out"
          style={{ width: `${(step + 1) / quoteSteps.length * 100}%` }} />
        
      </div>
      <ol className="hidden md:grid md:grid-cols-6">
        {quoteSteps.map((s, i) => {
          const done = i < step || i <= maxStep && i !== step;
          const current = i === step;
          const reachable = i <= maxStep;
          return (
            <li key={s.title} className="relative">
              <button
                type="button"
                onClick={() => reachable && onSelect(i)}
                disabled={!reachable}
                aria-current={current ? 'step' : undefined}
                className="group flex w-full flex-col items-start gap-2 text-left disabled:cursor-not-allowed">
                
                <span className="flex w-full items-center">
                  <span
                    className={cn(
                      'flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold transition-colors duration-200',
                      current ? 'bg-brand text-white' : done ? 'bg-ink text-white' : 'border border-ink/20 bg-white text-ink/40'
                    )}>
                    
                    {done && !current ? <CheckIcon className="h-4 w-4" strokeWidth={3} aria-hidden="true" /> : i + 1}
                  </span>
                  {i < quoteSteps.length - 1 &&
                  <span className={cn('mx-2 h-px flex-1', i < maxStep ? 'bg-ink' : 'bg-ink/15')} aria-hidden="true" />
                  }
                </span>
                <span
                  className={cn(
                    'whitespace-nowrap text-[13px] font-semibold',
                    current ? 'text-ink' : reachable ? 'text-ink/70 group-hover:text-brand' : 'text-ink/40'
                  )}>
                  
                  {s.title}
                </span>
              </button>
            </li>);

        })}
      </ol>
    </nav>);

}