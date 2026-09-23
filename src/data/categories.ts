import { images } from './images';
import type { Category } from '../types/content';

export const categories: Category[] = [
{
  slug: 'residential',
  name: 'Residential Cleaning',
  short: 'Regular and one-off cleaning for Hobart homes and rentals.',
  intro:
  'From weekly upkeep to a full end-of-lease clean, we look after homes across Hobart with the same care and checklist every visit.',
  image: images.house,
  why: [
  { title: 'The same faces', text: 'Where possible, the same cleaners visit your home each time.' },
  { title: 'Your home, your way', text: 'Tell us your priorities and we build them into every visit.' },
  { title: 'Bond-ready standards', text: 'End-of-lease cleans follow real estate agent checklists.' },
  { title: 'No lock-in', text: 'Pause, change or cancel regular cleans with notice.' }],

  included: [
  'Kitchen benches, splashbacks and appliance exteriors',
  'Bathrooms, showers, toilets and mirrors',
  'Vacuuming and mopping of all hard floors',
  'Dusting of surfaces, skirting boards and sills',
  'Bedrooms tidied and surfaces wiped',
  'Bins emptied and liners replaced'],

  environmentsTitle: 'Homes we clean',
  environments: ['Houses', 'Apartments', 'Townhouses', 'Units', 'Rental properties', 'Holiday homes']
},
{
  slug: 'commercial',
  name: 'Commercial Cleaning',
  short: 'Scheduled cleaning for offices, clinics, schools and facilities.',
  intro:
  'Reliable, after-hours cleaning programs for Hobart businesses — built around your operating hours, compliance needs and budget.',
  image: images.office,
  why: [
  { title: 'After-hours service', text: 'We clean around your trading hours so work never stops.' },
  { title: 'Site-specific plans', text: 'Scopes written for your building, industry and traffic.' },
  { title: 'Compliance aware', text: 'Infection control and safety procedures where required.' },
  { title: 'Single point of contact', text: 'One account manager who knows your site.' }],

  included: [
  'Workstations, desks and high-touch points sanitised',
  'Kitchens, breakout areas and appliances cleaned',
  'Bathrooms cleaned, restocked and disinfected',
  'Floors vacuumed, mopped and spot-cleaned',
  'Waste and recycling removed',
  'Entry, reception and glass doors detailed'],

  environmentsTitle: 'Industries we serve',
  environments: ['Offices', 'Medical centres', 'Schools', 'Restaurants', 'Gyms', 'Industrial facilities', 'Aged care', 'Retail']
},
{
  slug: 'specialised',
  name: 'Specialised Cleaning',
  short: 'Carpets, windows, pressure washing, builders and short-stay cleans.',
  intro:
  'Targeted cleaning that needs specialist equipment or turnaround — carried out by trained technicians across Greater Hobart.',
  image: images.window,
  why: [
  { title: 'Specialist equipment', text: 'Commercial steam, pressure and water-fed pole systems.' },
  { title: 'Fast turnarounds', text: 'Short-stay and builders cleans scheduled around deadlines.' },
  { title: 'Safe methods', text: 'Surface-appropriate products and height-safe practices.' },
  { title: 'Combine services', text: 'Bundle carpets, windows and exteriors in one visit.' }],

  included: [
  'Pre-inspection and surface assessment',
  'Specialist equipment and products supplied',
  'Spot treatment for stains and build-up',
  'Protection of surrounding surfaces and furniture',
  'Post-clean walkthrough',
  'Advice on aftercare and maintenance'],

  environmentsTitle: 'Common environments we clean',
  environments: ['Short-stay rentals', 'New builds', 'Renovations', 'Driveways & decks', 'Shopfronts', 'Multi-storey windows']
}];