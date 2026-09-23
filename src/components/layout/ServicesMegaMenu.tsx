import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from 'lucide-react';
import { categories } from '../../data/categories';
import { categoryPath, servicePath, servicesInCategory } from '../../utils/content';
import { useQuickRequestDrawer } from '../../contexts/QuickRequestContext';

export function ServicesMegaMenu({ onNavigate }: {onNavigate: () => void;}) {
  const { open } = useQuickRequestDrawer();
  return (
    <div className="grid grid-cols-[1fr_1fr_1fr_280px] gap-10 p-8">
      {categories.map((c) =>
      <div key={c.slug}>
          <Link
          to={categoryPath(c.slug)}
          onClick={onNavigate}
          className="group/cat inline-flex items-center gap-1.5 font-display text-base font-bold text-ink hover:text-brand">
          
            {c.name}
            <ArrowRightIcon className="h-3.5 w-3.5 transition-transform duration-150 ease-out group-hover/cat:translate-x-0.5" aria-hidden="true" />
          </Link>
          <p className="mt-1 text-[13px] leading-snug text-ink/55">{c.short}</p>
          <ul className="mt-4 space-y-2 border-t border-ink/10 pt-4">
            {servicesInCategory(c.slug).map((s) =>
          <li key={s.slug}>
                <Link to={servicePath(s)} onClick={onNavigate} className="text-[14px] text-ink/80 transition-colors duration-150 hover:text-brand">
                  {s.name}
                </Link>
              </li>
          )}
          </ul>
        </div>
      )}
      <div className="flex flex-col justify-between rounded-lg bg-ink p-6 text-white">
        <div>
          <p className="font-display text-lg font-bold leading-snug">Not sure which service you need?</p>
          <p className="mt-2 text-sm text-white/65">Tell us about your property and we’ll recommend the right clean.</p>
        </div>
        <div className="mt-6 flex flex-col gap-3">
          <button
            onClick={() => {
              onNavigate();
              open();
            }}
            className="inline-flex h-10 items-center justify-center rounded-md bg-brand px-4 text-sm font-semibold text-white transition-colors duration-150 hover:bg-brand/90">
            
            Request Service
          </button>
          <Link to="/services" onClick={onNavigate} className="text-center text-sm font-semibold text-white/80 hover:text-white">
            View all services
          </Link>
        </div>
      </div>
    </div>);

}