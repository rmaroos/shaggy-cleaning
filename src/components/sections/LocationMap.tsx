import React from 'react';
import { cn } from '../../utils/cn';

export function LocationMap({ className, title = 'Map of Hobart and surrounding service areas' }: {className?: string;title?: string;}) {
  return (
    <div className={cn('relative overflow-hidden rounded-2xl border border-ink/10 bg-ink/[0.04]', className)}>
      <iframe
        title={title}
        src="https://www.openstreetmap.org/export/embed.html?bbox=147.12%2C-43.02%2C147.52%2C-42.74&layer=mapnik&marker=-42.8821%2C147.3272"
        className="absolute inset-0 h-full w-full grayscale"
        loading="lazy" />
      
    </div>);

}