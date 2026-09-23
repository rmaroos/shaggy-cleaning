import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowRightIcon, MapPinIcon } from 'lucide-react';
import { ArticleCard } from '../components/sections/ArticleCard';
import { FinalCTA } from '../components/sections/FinalCTA';
import { QuickRequestForm } from '../components/quick-request/QuickRequestForm';
import { Container } from '../components/ui/Container';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { NotFound } from './NotFound';
import { articles } from '../data/articles';
import { formatDate, getLocation, getService, servicePath } from '../utils/content';

export function BlogArticle() {
  const { slug } = useParams();
  const article = articles.find((a) => a.slug === slug);
  if (!article) return <NotFound />;

  const service = getService(article.relatedService);
  const location = getLocation(article.relatedLocation);
  const related = articles.filter((a) => a.slug !== article.slug).sort((a, b) => Number(b.category === article.category) - Number(a.category === article.category)).slice(0, 3);

  return (
    <>
      <article>
        <header className="pb-10 pt-8 md:pt-10">
          <Container>
            <Breadcrumbs items={[{ label: 'Blog', to: '/blog' }, { label: article.title }]} />
            <div className="mt-10 max-w-3xl">
              <p className="text-[13px] font-semibold text-brand">{article.category}</p>
              <h1 className="mt-3 font-display text-[36px] font-extrabold leading-[1.08] text-ink md:text-[54px]">{article.title}</h1>
              <p className="mt-5 text-[14px] text-ink/55">
                <time dateTime={article.date}>{formatDate(article.date)}</time> · {article.readTime} · Shaggy Cleaning team
              </p>
            </div>
          </Container>
        </header>
        <Container>
          <div className="aspect-[21/9] overflow-hidden rounded-hero bg-ink/[0.04]">
            <img src={article.image} alt="" className="h-full w-full object-cover" />
          </div>
        </Container>
        <Container className="grid gap-12 py-12 md:py-16 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7 lg:col-start-1">
            {article.body.map((block, i) =>
            <div key={i} className="mb-8">
                {block.heading && <h2 className="mb-4 font-display text-[26px] font-bold text-ink">{block.heading}</h2>}
                {block.paragraphs.map((p, j) =>
              <p key={j} className={`mb-4 leading-relaxed text-ink/80 ${i === 0 && j === 0 ? 'text-[20px]' : 'text-[17px]'}`}>{p}</p>
              )}
              </div>
            )}

            <div className="mt-12 grid gap-4 border-t border-ink/10 pt-10 sm:grid-cols-2">
              {service &&
              <Link to={servicePath(service)} className="group rounded-lg border border-ink/15 p-6 transition-colors duration-150 hover:border-brand">
                  <p className="text-[13px] text-ink/55">Related service</p>
                  <p className="mt-1 flex items-center justify-between font-display text-lg font-bold text-ink group-hover:text-brand">
                    {service.name}
                    <ArrowRightIcon className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-1" aria-hidden="true" />
                  </p>
                </Link>
              }
              {location &&
              <Link to={`/locations/${location.slug}`} className="group rounded-lg border border-ink/15 p-6 transition-colors duration-150 hover:border-brand">
                  <p className="text-[13px] text-ink/55">Related location</p>
                  <p className="mt-1 flex items-center justify-between font-display text-lg font-bold text-ink group-hover:text-brand">
                    <span className="flex items-center gap-2">
                      <MapPinIcon className="h-4 w-4 text-brand" aria-hidden="true" />
                      {location.name}
                    </span>
                    <ArrowRightIcon className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-1" aria-hidden="true" />
                  </p>
                </Link>
              }
            </div>
          </div>
          <aside className="lg:col-span-5 lg:col-start-8" aria-labelledby="article-qr-title">
            <div className="rounded-xl border border-ink/15 p-6 shadow-float lg:sticky lg:top-28">
              <h2 id="article-qr-title" className="font-display text-xl font-bold text-ink">
                {service ? `Need ${service.name.toLowerCase()}?` : 'Request a cleaning service'}
              </h2>
              <p className="mt-1 mb-5 text-sm text-ink/60">Free quote, usually within one business day.</p>
              <QuickRequestForm layout="stacked" defaultService={service?.slug} />
            </div>
          </aside>
        </Container>
      </article>

      <section aria-labelledby="related-articles" className="border-t border-ink/10 py-16 md:py-24">
        <Container>
          <h2 id="related-articles" className="font-display text-[32px] font-bold leading-[1.1] md:text-[40px]">Related articles</h2>
          <div className="mt-10 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((a) =>
            <ArticleCard key={a.slug} article={a} />
            )}
          </div>
        </Container>
      </section>
      <FinalCTA />
    </>);

}