import { services } from '../data/services';
import { categories } from '../data/categories';
import { locations } from '../data/locations';
import type { Category, CategorySlug, Location, Service } from '../types/content';

export function getService(slug?: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getCategory(slug?: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function getLocation(slug?: string): Location | undefined {
  return locations.find((l) => l.slug === slug);
}

export function servicesInCategory(slug: CategorySlug): Service[] {
  return services.filter((s) => s.category === slug);
}

export function servicePath(service: Service): string {
  return `/services/${service.category}/${service.slug}`;
}

export function categoryPath(slug: CategorySlug): string {
  return `/services/${slug}`;
}

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-AU', { day: 'numeric', month: 'long', year: 'numeric' });
}

export const allSuburbs: string[] = Array.from(new Set(['Hobart', ...locations.flatMap((l) => l.suburbs)]));