import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '../../utils/cn';

export function Logo({ inverse, className }: {inverse?: boolean;className?: string;}) {
  return (
    <Link to="/" className={cn('flex items-center gap-2.5', className)} aria-label="Shaggy Cleaning — home">
      <span
        className={cn(
          'relative flex h-9 w-9 items-center justify-center rounded-md font-display text-lg font-extrabold',
          inverse ? 'bg-white text-ink' : 'bg-ink text-white'
        )}
        aria-hidden="true">
        
        S
        <span className="absolute bottom-1.5 right-1.5 h-1.5 w-1.5 rounded-full bg-brand" />
      </span>
      <span className={cn('font-display text-[19px] font-extrabold leading-none tracking-tight', inverse ? 'text-white' : 'text-ink')}>
        Shaggy<span className="font-semibold"> Cleaning</span>
      </span>
    </Link>);

}