import { commercialPropertyTypes, residentialPropertyTypes, allPropertyTypes } from '../data/site';
import type { CategorySlug } from '../types/content';

export interface DetailField {
  label: string;
  options: string[];
}

export function getPropertyOptions(category?: CategorySlug): string[] {
  if (category === 'residential') return residentialPropertyTypes;
  if (category === 'commercial') return commercialPropertyTypes;
  return allPropertyTypes;
}

const bedrooms: DetailField = { label: 'Bedrooms', options: ['1', '2', '3', '4', '5+'] };
const size: DetailField = {
  label: 'Approximate size',
  options: ['Under 200 m²', '200–500 m²', '500–1,000 m²', '1,000 m²+', 'Not sure']
};

export function getDetailField(serviceSlug: string, category?: CategorySlug): DetailField | null {
  switch (serviceSlug) {
    case 'house-cleaning':
    case 'end-of-lease-cleaning':
    case 'airbnb-cleaning':
      return bedrooms;
    case 'steam-carpet-cleaning':
      return { label: 'Rooms to clean', options: ['1–2 rooms', '3–4 rooms', '5+ rooms', 'Whole property'] };
    case 'window-cleaning':
      return { label: 'Storeys', options: ['Single storey', 'Two storey', 'Three+ storeys'] };
    case 'pressure-cleaning':
      return { label: 'Area to clean', options: ['Driveway', 'Deck or patio', 'Paths', 'House exterior', 'Multiple areas'] };
    case 'builders-cleaning':
      return { label: 'Project type', options: ['New home', 'Renovation', 'Commercial fit-out', 'Other'] };
    default:
      return category === 'commercial' ? size : null;
  }
}