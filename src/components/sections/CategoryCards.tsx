import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from 'lucide-react';
import { categories } from '../../data/categories';
import { categoryPath, servicePath, servicesInCategory } from '../../utils/content';

export function CategoryCards() {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {categories.map((c) => {
        const list = servicesInCategory(c.slug);
        return (
          <article key={c.slug} className="group flex flex-col overflow-hidden rounded-xl border border-ink/15 bg-white transition-colors duration-200 hover:border-brand">
            <Link to={categoryPath(c.slug)} className="relative block aspect-[16/11] overflow-hidden" tabIndex={-1} aria-hidden="true">
              <img src={c.image} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]" />
            </Link>
            <div className="flex flex-1 flex-col p-7">
              <h3 className="font-display text-2xl font-bold text-ink">
                <Link to={categoryPath(c.slug)} className="hover:text-brand">{c.name}</Link>
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink/65">{c.short}</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {list.slice(0, 4).map((s) =>
                <li key={s.slug}>
                    <Link
                    to={servicePath(s)}
                    className="inline-flex h-8 items-center rounded-full border border-ink/15 px-3 text-[13px] font-medium text-ink transition-colors duration-150 hover:border-ink hover:bg-ink hover:text-white">
                    
                      {s.name}
                    </Link>
                  </li>
                )}
                {list.length > 4 &&
                <li className="inline-flex h-8 items-center px-1 text-[13px] text-ink/50">+{list.length - 4} more</li>
                }
              </ul>
              <Link
                to={categoryPath(c.slug)}
                className="mt-auto inline-flex items-center gap-1.5 pt-7 text-[15px] font-semibold text-ink hover:text-brand">
                
                Explore {c.name.split(' ')[0].toLowerCase()} cleaning
                <ArrowRightIcon className="h-4 w-4 transition-transform duration-150 ease-out group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </div>
          </article>);

      })}
    </div>);

}