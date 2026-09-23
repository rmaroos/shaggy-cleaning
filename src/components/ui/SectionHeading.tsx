import React from 'react';
import { cn } from '../../utils/cn';

interface SectionHeadingProps {
  title: React.ReactNode;
  description?: string;
  action?: React.ReactNode;
  align?: 'left' | 'center';
  inverse?: boolean;
  className?: string;
  as?: 'h1' | 'h2';
}

export function SectionHeading({ title, description, action, align = 'left', inverse, className, as = 'h2' }: SectionHeadingProps) {
  const Tag = as;
  return (
    <div
      className={cn(
        'flex flex-col gap-6',
        align === 'center' ? 'items-center text-center' : 'md:flex-row md:items-end md:justify-between',
        className
      )}>
      
      <div className={cn('max-w-2xl', align === 'center' && 'mx-auto')}>
        <Tag className={cn('font-display text-[32px] font-bold leading-[1.1] md:text-[44px]', inverse ? 'text-white' : 'text-ink')}>{title}</Tag>
        {description &&
        <p className={cn('mt-4 text-[17px] leading-relaxed md:text-lg', inverse ? 'text-white/70' : 'text-ink/65')}>{description}</p>
        }
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>);

}