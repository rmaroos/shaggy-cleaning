import React from 'react';
import { Link } from 'react-router-dom';
import { formatDate } from '../../utils/content';
import type { Article } from '../../types/content';

export function ArticleCard({ article }: {article: Article;}) {
  return (
    <article className="group flex h-full flex-col">
      <Link to={`/blog/${article.slug}`} className="block overflow-hidden rounded-lg bg-ink/[0.04]" tabIndex={-1} aria-hidden="true">
        <img
          src={article.image}
          alt=""
          loading="lazy"
          className="aspect-[16/10] w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]" />
        
      </Link>
      <div className="flex flex-1 flex-col pt-5">
        <p className="text-[13px] font-semibold text-brand">{article.category}</p>
        <h3 className="mt-2 font-display text-xl font-bold leading-snug text-ink">
          <Link to={`/blog/${article.slug}`} className="transition-colors duration-150 group-hover:text-brand">
            {article.title}
          </Link>
        </h3>
        <p className="mt-2 text-[15px] leading-relaxed text-ink/65">{article.excerpt}</p>
        <p className="mt-auto pt-4 text-[13px] text-ink/50">
          <time dateTime={article.date}>{formatDate(article.date)}</time> · {article.readTime}
        </p>
      </div>
    </article>);

}