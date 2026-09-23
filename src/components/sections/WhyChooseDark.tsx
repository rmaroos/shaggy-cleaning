import React from 'react';
import { whyChoose } from '../../data/site';
import { images } from '../../data/images';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';

interface WhyChooseDarkProps {
  title?: string;
  image?: string;
  id?: string;
}

export function WhyChooseDark({ title = 'Why choose the Shaggy difference?', image = images.team, id }: WhyChooseDarkProps) {
  return (
    <section id={id} aria-labelledby="why-title" className="scroll-mt-24 bg-ink py-16 text-white md:py-24">
      <Container className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <h2 id="why-title" className="font-display text-[32px] font-bold leading-[1.1] md:text-[44px]">
            {title}
          </h2>
          <p className="mt-4 max-w-xl font-display text-xl font-semibold text-white/80">
            Reliable. Professional. <span className="text-brand">Consistent.</span>
          </p>
          <ul className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2">
            {whyChoose.map((item) =>
            <li key={item.title} className="flex gap-4 border-t border-white/15 pt-5">
                <item.icon className="mt-0.5 h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
                <div>
                  <h3 className="font-display text-lg font-bold">{item.title}</h3>
                  <p className="mt-1 text-[15px] leading-relaxed text-white/65">{item.text}</p>
                </div>
              </li>
            )}
          </ul>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button to="/get-a-free-quote" size="lg">Get a Free Quote</Button>
            <Button to="/about-us" variant="inverse" size="lg">About Shaggy</Button>
          </div>
        </div>
        <div className="lg:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
            <img src={image} alt="The Shaggy Cleaning team in uniform" loading="lazy" className="h-full w-full object-cover" />
          </div>
        </div>
      </Container>
    </section>);

}