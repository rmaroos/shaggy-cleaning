import React from 'react';
import { Link } from 'react-router-dom';
import { PhoneIcon } from 'lucide-react';
import { Container } from '../ui/Container';
import { contact } from '../../data/site';
import { images } from '../../data/images';

interface FinalCTAProps {
  title?: string;
  description?: string;
  image?: string;
}

export function FinalCTA({
  title = 'Ready for a cleaner space?',
  description = 'Get a free, no-obligation quote from Hobart’s local cleaning team. Most quotes are ready within one business day.',
  image = images.hero
}: FinalCTAProps) {
  return (
    <section aria-labelledby="final-cta-title" className="pb-16 md:pb-24">
      <Container>
        <div className="grid overflow-hidden rounded-2xl bg-brand text-white lg:grid-cols-12">
          <div className="p-8 md:p-12 lg:col-span-7 lg:p-16">
            <h2 id="final-cta-title" className="font-display text-[34px] font-extrabold leading-[1.05] md:text-[52px]">{title}</h2>
            <p className="mt-5 max-w-lg text-[17px] leading-relaxed text-white/85">{description}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/get-a-free-quote"
                className="inline-flex h-[52px] items-center justify-center rounded-md bg-white px-7 text-base font-semibold text-ink transition-[background-color,transform] duration-150 ease-out hover:bg-white/90 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand">
                
                Get a Free Quote
              </Link>
              <a
                href={contact.phoneHref}
                className="inline-flex h-[52px] items-center justify-center gap-2 rounded-md border-2 border-white px-7 text-base font-semibold text-white transition-[background-color,color,transform] duration-150 ease-out hover:bg-white hover:text-brand active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand">
                
                <PhoneIcon className="h-4 w-4" aria-hidden="true" />
                {contact.phone}
              </a>
            </div>
          </div>
          <div className="relative hidden min-h-[320px] lg:col-span-5 lg:block">
            <img src={image} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
          </div>
        </div>
      </Container>
    </section>);

}