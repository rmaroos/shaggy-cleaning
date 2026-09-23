import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../components/ui/Container';
import { Button } from '../components/ui/Button';
import { categories } from '../data/categories';
import { categoryPath } from '../utils/content';

export function NotFound() {
  return (
    <section className="py-24 md:py-32">
      <Container className="max-w-3xl text-center">
        <p className="font-display text-[96px] font-extrabold leading-none text-ink md:text-[140px]">
          4<span className="text-brand">0</span>4
        </p>
        <h1 className="mt-6 font-display text-3xl font-bold text-ink md:text-4xl">This page has been swept away.</h1>
        <p className="mx-auto mt-4 max-w-md text-[17px] text-ink/65">
          The page you’re looking for doesn’t exist or has moved. Try one of these instead.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button to="/" variant="secondary">Back to home</Button>
          <Button to="/get-a-free-quote">Get a Free Quote</Button>
        </div>
        <ul className="mt-12 flex flex-wrap justify-center gap-x-6 gap-y-2 border-t border-ink/10 pt-8">
          {categories.map((c) =>
          <li key={c.slug}>
              <Link to={categoryPath(c.slug)} className="text-[15px] font-semibold text-ink/70 hover:text-brand">{c.name}</Link>
            </li>
          )}
          <li><Link to="/contact" className="text-[15px] font-semibold text-ink/70 hover:text-brand">Contact</Link></li>
        </ul>
      </Container>
    </section>);

}