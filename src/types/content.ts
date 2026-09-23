import type { LucideIcon } from 'lucide-react';

export type CategorySlug = 'residential' | 'commercial' | 'specialised';

export interface TextItem {
  title: string;
  text: string;
}

export interface IconItem extends TextItem {
  icon: LucideIcon;
}

export interface Category {
  slug: CategorySlug;
  name: string;
  short: string;
  intro: string;
  image: string;
  why: TextItem[];
  included: string[];
  environmentsTitle: string;
  environments: string[];
}

export interface ServiceInfo {
  duration: string;
  frequency: string;
  preparation: string;
  access: string;
}

export interface Service {
  slug: string;
  name: string;
  category: CategorySlug;
  short: string;
  overview: string;
  image: string;
  whoFor: string;
  idealFor: string[];
  included: string[];
  benefits: TextItem[];
  info: ServiceInfo;
}

export interface Location {
  slug: string;
  name: string;
  short: string;
  intro: string;
  suburbs: string[];
  info: {label: string;value: string;}[];
}

export interface Testimonial {
  name: string;
  place: string;
  type: string;
  quote: string;
  rating: number;
  category: CategorySlug;
}

export type FaqCategory = 'General' | 'Services' | 'Pricing & Quotes' | 'Booking & Scheduling';

export interface Faq {
  question: string;
  answer: string;
  category: FaqCategory;
  link?: {label: string;to: string;};
}

export type ArticleCategory = 'Cleaning Tips' | 'Cleaning Guides' | 'Service Guides' | 'Local Cleaning Guides';

export interface Article {
  slug: string;
  title: string;
  category: ArticleCategory;
  date: string;
  readTime: string;
  excerpt: string;
  image: string;
  body: {heading?: string;paragraphs: string[];}[];
  relatedService: string;
  relatedLocation: string;
}