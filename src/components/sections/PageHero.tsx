import React from 'react';
import { PhoneIcon } from 'lucide-react';
import { Container } from '../ui/Container';
import { Breadcrumbs, type Crumb } from '../ui/Breadcrumbs';
import { Button } from '../ui/Button';
import { contact } from '../../data/site';
import { cn } from '../../utils/cn';

interface PageHeroProps {
  crumbs: Crumb[];
  title: React.ReactNode;
  description?: string;
  image?: string;
  imageAlt?: string;
  actions?: React.ReactNode;
  children?: React.ReactNode;
  compact?: boolean;
}

export function PageHero({ crumbs, title, description, image, imageAlt = '', actions, children, compact }: PageHeroProps) {
  const defaultActions =
  <>
      <Button to="/get-a-free-quote" size="lg">Get a Free Quote</Button>
      <Button href={contact.phoneHref} variant="secondary" size="lg">
        <PhoneIcon className="h-4 w-4" aria-hidden="true" />
        Call Now
      </Button>
    </>;


  return (
    <section className={cn('bg-white', compact ? 'pb-10 pt-8 md:pb-14 md:pt-10' : 'pb-20 pt-8 md:pb-28 md:pt-10')}>
      <Container>
        <Breadcrumbs items={crumbs} />
        <div className={cn('mt-8 grid items-center gap-10 md:mt-12', image && 'lg:grid-cols-12 lg:gap-16')}>
          <div className={cn(image ? 'lg:col-span-6' : 'max-w-3xl')}>
            <h1 className="font-display text-[40px] font-extrabold leading-[1.04] text-ink md:text-[60px]">{title}</h1>
            {description && <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-ink/65 md:text-[19px]">{description}</p>}
            {actions !== null && <div className="mt-8 flex flex-wrap gap-3">{actions ?? defaultActions}</div>}
            {children}
          </div>
          {image &&
          <div className="lg:col-span-6">
              <div className="relative aspect-[4/3] overflow-hidden rounded-hero bg-ink/[0.04]">
                <img src={image} alt={imageAlt} className="h-full w-full object-cover" />
              </div>
            </div>
          }
        </div>
      </Container>
    </section>);

}