import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from 'lucide-react';
import { servicePath } from '../../utils/content';
import { cn } from '../../utils/cn';
import type { Service } from '../../types/content';

interface ServiceCardProps {
  service: Service;
  size?: 'default' | 'feature';
  className?: string;
}

export function ServiceCard({ service, size = 'default', className }: ServiceCardProps) {
  const feature = size === 'feature';
  return (
    <Link
      to={servicePath(service)}
      className={cn(
        'group flex h-full flex-col overflow-hidden rounded-lg border border-ink/15 bg-white transition-colors duration-200 ease-out hover:border-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2',
        className
      )}>
      
      <div className={cn('relative overflow-hidden bg-ink/[0.04]', feature ? 'aspect-[4/3] lg:aspect-auto lg:flex-1' : 'aspect-[4/3]')}>
        <img
          src={service.image}
          alt=""
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]" />
        
      </div>
      <div className={cn('flex flex-1 flex-col', feature ? 'p-7 lg:flex-none' : 'p-6')}>
        <h3
          className={cn(
            'font-display font-bold text-ink transition-colors duration-150 group-hover:text-brand',
            feature ? 'text-[28px] leading-tight' : 'text-xl'
          )}>
          
          {service.name}
        </h3>
        <p className={cn('mt-2 leading-relaxed text-ink/65', feature ? 'text-[17px]' : 'text-[15px]')}>{service.short}</p>
        <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-[15px] font-semibold text-ink">
          View Service
          <ArrowRightIcon className="h-4 w-4 transition-transform duration-150 ease-out group-hover:translate-x-1" aria-hidden="true" />
        </span>
      </div>
    </Link>);

}