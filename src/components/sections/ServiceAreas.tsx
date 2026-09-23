import React from 'react';
import { Link } from 'react-router-dom';
import { MapPinIcon } from 'lucide-react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { LocationMap } from './LocationMap';
import { featuredSuburbs, locations } from '../../data/locations';

interface ServiceAreasProps {
  title?: string;
  suburbs?: string[];
}

export function ServiceAreas({ title = 'Proudly serving Hobart and surrounds', suburbs = featuredSuburbs }: ServiceAreasProps) {
  return (
    <section aria-labelledby="areas-title" className="border-t border-ink/10 py-16 md:py-24">
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <h2 id="areas-title" className="font-display text-[32px] font-bold leading-[1.1] md:text-[44px]">{title}</h2>
          <p className="mt-4 max-w-lg text-[17px] leading-relaxed text-ink/65">
            Local teams across the city, the Eastern Shore, Kingborough and the northern suburbs. Not listed? Ask us — we travel for regular and larger jobs.
          </p>
          <ul className="mt-8 flex flex-wrap gap-2">
            {suburbs.map((s) =>
            <li key={s} className="inline-flex h-9 items-center gap-1.5 rounded-full border border-ink/15 px-3.5 text-sm font-medium text-ink">
                <MapPinIcon className="h-3.5 w-3.5 text-brand" aria-hidden="true" />
                {s}
              </li>
            )}
            <li className="inline-flex h-9 items-center px-2 text-sm text-ink/55">+ surrounding suburbs</li>
          </ul>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
            <Button to="/locations" variant="secondary">View Locations</Button>
            <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm">
              {locations.slice(0, 3).map((l) =>
              <Link key={l.slug} to={`/locations/${l.slug}`} className="font-semibold text-ink/70 underline-offset-4 hover:text-brand hover:underline">
                  {l.name}
                </Link>
              )}
            </div>
          </div>
        </div>
        <LocationMap className="aspect-[4/3]" />
      </Container>
    </section>);

}