import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from 'lucide-react';
import { PageHero } from '../components/sections/PageHero';
import { ArticleCard } from '../components/sections/ArticleCard';
import { CategoryCards } from '../components/sections/CategoryCards';
import { FinalCTA } from '../components/sections/FinalCTA';
import { Container } from '../components/ui/Container';
import { Button } from '../components/ui/Button';
import { articleCategories, articles } from '../data/articles';
import { formatDate } from '../utils/content';
import { cn } from '../utils/cn';
import type { ArticleCategory } from '../types/content';

export function Blog() {
  const [category, setCategory] = useState<ArticleCategory | 'All'>('All');
  const [featured, ...rest] = articles;
  const filtered = category === 'All' ? rest : articles.filter((a) => a.category === category);

  return (
    <>
      <PageHero
        crumbs={[{ label: 'Blog' }]}
        title="Cleaning tips, guides & local advice"
        description="Practical advice from the Shaggy team — for Hobart homes, rentals and workplaces."
        actions={null}
        compact />
      

      <section aria-labelledby="featured-article" className="pb-16 md:pb-20">
        <Container>
          <article className="group grid overflow-hidden rounded-2xl border border-ink/15 lg:grid-cols-12">
            <Link to={`/blog/${featured.slug}`} className="relative block aspect-[16/10] overflow-hidden lg:col-span-7 lg:aspect-auto lg:min-h-[420px]" tabIndex={-1} aria-hidden="true">
              <img src={featured.image} alt="" className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]" />
            </Link>
            <div className="flex flex-col p-8 md:p-10 lg:col-span-5">
              <p className="text-[13px] font-semibold text-brand">Featured · {featured.category}</p>
              <h2 id="featured-article" className="mt-3 font-display text-[28px] font-bold leading-tight text-ink md:text-[34px]">
                <Link to={`/blog/${featured.slug}`} className="hover:text-brand">{featured.title}</Link>
              </h2>
              <p className="mt-4 text-[17px] leading-relaxed text-ink/65">{featured.excerpt}</p>
              <p className="mt-4 text-[13px] text-ink/50">
                {formatDate(featured.date)} · {featured.readTime}
              </p>
              <div className="mt-auto pt-8">
                <Button to={`/blog/${featured.slug}`} variant="secondary">
                  Read Article
                  <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
                </Button>
              </div>
            </div>
          </article>
        </Container>
      </section>

      <section aria-labelledby="latest-title" className="border-t border-ink/10 py-16 md:py-20">
        <Container>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <h2 id="latest-title" className="font-display text-[32px] font-bold leading-[1.1] md:text-[40px]">
              {category === 'All' ? 'Latest articles' : category}
            </h2>
            <ul className="no-scrollbar -mx-5 flex gap-2 overflow-x-auto px-5 md:mx-0 md:px-0" aria-label="Filter by category">
              {(['All', ...articleCategories] as const).map((c) =>
              <li key={c} className="shrink-0">
                  <button
                  onClick={() => setCategory(c)}
                  aria-pressed={category === c}
                  className={cn(
                    'h-9 whitespace-nowrap rounded-full border px-4 text-sm font-semibold transition-colors duration-150',
                    category === c ? 'border-ink bg-ink text-white' : 'border-ink/15 text-ink/70 hover:border-ink hover:text-ink'
                  )}>
                  
                    {c}
                  </button>
                </li>
              )}
            </ul>
          </div>
          {filtered.length > 0 ?
          <div className="mt-10 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((a) =>
            <ArticleCard key={a.slug} article={a} />
            )}
            </div> :

          <div className="mt-10 rounded-xl border border-ink/15 p-10 text-center">
              <h3 className="font-display text-xl font-bold">No articles in this category yet</h3>
              <p className="mt-2 text-[15px] text-ink/65">We’re writing more guides. In the meantime, browse all articles.</p>
              <Button variant="secondary" className="mt-6" onClick={() => setCategory('All')}>Show all articles</Button>
            </div>
          }
        </Container>
      </section>

      <section aria-labelledby="blog-services-title" className="bg-ink/[0.03] py-16 md:py-24">
        <Container>
          <h2 id="blog-services-title" className="font-display text-[32px] font-bold leading-[1.1] md:text-[44px]">Explore our services</h2>
          <div className="mt-10">
            <CategoryCards />
          </div>
        </Container>
      </section>

      <div className="pt-16 md:pt-24">
        <FinalCTA />
      </div>
    </>);

}