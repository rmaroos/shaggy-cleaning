import React from 'react';
import { CheckIcon } from 'lucide-react';
import { cn } from '../../utils/cn';

export function IncludedList({ items, columns = 2, inverse }: {items: string[];columns?: 1 | 2;inverse?: boolean;}) {
  return (
    <ul className={cn('grid gap-x-10', columns === 2 && 'sm:grid-cols-2')}>
      {items.map((item) =>
      <li key={item} className={cn('flex items-start gap-3 border-b py-4', inverse ? 'border-white/15' : 'border-ink/10')}>
          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand">
            <CheckIcon className="h-3 w-3 text-white" strokeWidth={3} aria-hidden="true" />
          </span>
          <span className={cn('text-[16px] leading-snug', inverse ? 'text-white' : 'text-ink')}>{item}</span>
        </li>
      )}
    </ul>);

}