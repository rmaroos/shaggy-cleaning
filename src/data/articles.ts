import { images } from './images';
import type { Article, ArticleCategory } from '../types/content';

export const articleCategories: ArticleCategory[] = ['Cleaning Tips', 'Cleaning Guides', 'Service Guides', 'Local Cleaning Guides'];

export const articles: Article[] = [
{
  slug: 'end-of-lease-cleaning-checklist-hobart',
  title: 'The end of lease cleaning checklist Hobart agents actually use',
  category: 'Cleaning Guides',
  date: '2026-09-02',
  readTime: '6 min read',
  excerpt: 'What property managers check at inspection — room by room — and the items tenants most often miss.',
  image: images.airbnb,
  body: [
  {
    paragraphs: [
    'Getting your bond back comes down to one thing: whether the property matches the condition report. Most Hobart agents use a similar checklist at the final inspection, and a handful of items account for most re-clean requests.']

  },
  {
    heading: 'Kitchen',
    paragraphs: [
    'The oven is the single most-flagged item. Agents check the racks, the glass door, the rangehood filter and the cooktop. Inside cupboards and drawers must be wiped free of crumbs and residue.',
    'Do not forget the dishwasher filter and the seal around the fridge space.']

  },
  {
    heading: 'Bathrooms',
    paragraphs: [
    'Soap scum on shower screens and mould in grout lines are the usual culprits. Exhaust fans are often overlooked — a quick vacuum and wipe makes a noticeable difference.']

  },
  {
    heading: 'Throughout',
    paragraphs: [
    'Window tracks, skirting boards, light switches and marks on walls near beds and couches are all on the list. Carpets are commonly required to be professionally steam cleaned — check your lease.']

  }],

  relatedService: 'end-of-lease-cleaning',
  relatedLocation: 'hobart'
},
{
  slug: 'how-often-should-you-clean-your-office',
  title: 'How often should your office really be cleaned?',
  category: 'Service Guides',
  date: '2026-08-18',
  readTime: '5 min read',
  excerpt: 'A practical guide to choosing a cleaning frequency based on headcount, foot traffic and the type of work you do.',
  image: images.office,
  body: [
  {
    paragraphs: [
    'There is no single right answer, but there is a right answer for your office. Headcount, visitor traffic and shared facilities matter far more than floor area.']

  },
  {
    heading: 'A simple rule of thumb',
    paragraphs: [
    'Under 10 people with low visitor traffic: weekly or twice weekly. 10–50 people: three to five times a week. Over 50, or client-facing spaces: daily.']

  },
  {
    heading: 'Split the scope',
    paragraphs: [
    'Kitchens and bathrooms often need daily attention even when desks and floors do not. A split scope keeps costs down while keeping high-use areas hygienic.']

  }],

  relatedService: 'office-cleaning',
  relatedLocation: 'hobart'
},
{
  slug: 'removing-mould-tasmanian-winter',
  title: 'Keeping mould at bay through a Tasmanian winter',
  category: 'Local Cleaning Guides',
  date: '2026-07-28',
  readTime: '4 min read',
  excerpt: 'Cold, damp months bring condensation and mould. Here is how to prevent it — and when to call in help.',
  image: images.window,
  body: [
  {
    paragraphs: [
    'Hobart winters are cold and damp, and condensation on windows is often the first sign of a mould problem. Prevention is far easier than removal.']

  },
  {
    heading: 'Ventilate daily',
    paragraphs: [
    'Open windows for ten minutes each morning, even when it is cold. Run exhaust fans during and after showers and while cooking.']

  },
  {
    heading: 'Wipe condensation',
    paragraphs: [
    'Wipe window glass and sills each morning. Moisture that sits in tracks and on frames is where mould takes hold first.']

  }],

  relatedService: 'window-cleaning',
  relatedLocation: 'greater-hobart'
},
{
  slug: 'airbnb-turnover-checklist',
  title: 'A five-star Airbnb turnover in under three hours',
  category: 'Service Guides',
  date: '2026-07-10',
  readTime: '5 min read',
  excerpt: 'The order of operations professional turnover teams use to reset a short-stay property fast.',
  image: images.airbnb,
  body: [
  {
    paragraphs: [
    'Speed on a turnover comes from sequence, not rushing. Start with linen, finish with floors, and inspect with a guest’s eyes.']

  },
  {
    heading: 'Strip first',
    paragraphs: ['Strip beds and start laundry the moment you arrive so it runs while you clean.']
  },
  {
    heading: 'Top to bottom',
    paragraphs: ['Dust high surfaces first, then benches, then floors. Bathrooms and kitchen get the most time.']
  }],

  relatedService: 'airbnb-cleaning',
  relatedLocation: 'hobart'
},
{
  slug: 'carpet-care-between-cleans',
  title: 'Carpet care between professional cleans',
  category: 'Cleaning Tips',
  date: '2026-06-24',
  readTime: '3 min read',
  excerpt: 'Small weekly habits that keep carpets looking newer for longer.',
  image: images.carpet,
  body: [
  {
    paragraphs: ['Carpets wear from grit more than anything else. Vacuuming high-traffic areas twice a week makes the biggest difference.']
  },
  {
    heading: 'Blot, never rub',
    paragraphs: ['For spills, blot from the outside in with a clean white cloth and cold water. Rubbing spreads the stain and damages fibres.']
  }],

  relatedService: 'steam-carpet-cleaning',
  relatedLocation: 'northern-suburbs'
},
{
  slug: 'kitchen-deep-clean-routine',
  title: 'A 20-minute weekly kitchen reset',
  category: 'Cleaning Tips',
  date: '2026-06-05',
  readTime: '3 min read',
  excerpt: 'A simple routine to keep your kitchen clean between regular professional visits.',
  image: images.hero,
  body: [
  {
    paragraphs: ['A short weekly reset stops build-up before it becomes a weekend job.']
  },
  {
    heading: 'The routine',
    paragraphs: [
    'Clear the fridge of old food, wipe shelves, degrease the cooktop, wipe cupboard fronts and handles, then finish with the sink and floor.']

  }],

  relatedService: 'house-cleaning',
  relatedLocation: 'hobart'
}];