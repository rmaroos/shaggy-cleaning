import React from 'react';
import { Link } from 'react-router-dom';

export interface Crumb {
  label: string;
  to?: string;
}

export function Breadcrumbs({ items }: {items: Crumb[];}) {
  const all: Crumb[] = [{ label: 'Home', to: '/' }, ...items];
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[13px]">
        {all.map((c, i) => {
          const last = i === all.length - 1;
          return (
            <li key={`${c.label}-${i}`} className="flex items-center gap-2">
              {c.to && !last ?
              <Link to={c.to} className="text-ink/55 transition-colors duration-150 hover:text-brand">
                  {c.label}
                </Link> :

              <span className="font-semibold text-ink" aria-current={last ? 'page' : undefined}>
                  {c.label}
                </span>
              }
              {!last && <span className="text-ink/30" aria-hidden="true">/</span>}
            </li>);

        })}
      </ol>
    </nav>);

}