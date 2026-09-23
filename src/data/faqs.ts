import type { Faq, FaqCategory } from '../types/content';

export const faqCategories: FaqCategory[] = ['General', 'Services', 'Pricing & Quotes', 'Booking & Scheduling'];

export const faqs: Faq[] = [
{
  question: 'What cleaning services do you provide?',
  answer:
  'We provide residential cleaning (regular house cleans and end of lease), commercial cleaning (offices, buildings, gyms, medical, schools, restaurants, industrial and aged care) and specialised services such as carpets, windows, pressure cleaning, builders and Airbnb cleaning.',
  category: 'General',
  link: { label: 'View all services', to: '/services' }
},
{
  question: 'Which areas do you service?',
  answer:
  'We service Hobart and surrounding areas, including the Eastern Shore, Kingborough and the northern suburbs. Other surrounding areas are available by arrangement.',
  category: 'General',
  link: { label: 'View service areas', to: '/locations' }
},
{
  question: 'Are your cleaners insured and police checked?',
  answer:
  'Yes. Every team member is police checked, trained in our cleaning standards and covered by our public liability insurance. Staff working in schools and aged care hold the relevant registrations.',
  category: 'General'
},
{
  question: 'Do I need to be home during the clean?',
  answer:
  'No. Many customers provide a key, lockbox code or alarm access. We will agree access arrangements with you before the first visit.',
  category: 'General'
},
{
  question: 'Do you provide cleaning products and equipment?',
  answer:
  'Yes, we bring all products and equipment. If you prefer specific products — for example, fragrance-free or eco options — let us know and we will use them.',
  category: 'Services'
},
{
  question: 'What is included in an end of lease clean?',
  answer:
  'Our end of lease clean covers the oven, cupboards, bathrooms, walls (spot-clean), windows inside, tracks, light fittings and all floors. We work to common Hobart agent checklists and return if an item is flagged.',
  category: 'Services',
  link: { label: 'End of lease cleaning', to: '/services/residential/end-of-lease-cleaning' }
},
{
  question: 'Can you clean after hours for my business?',
  answer:
  'Yes. Most commercial cleaning is carried out before or after trading hours so your team and customers are never disrupted.',
  category: 'Services',
  link: { label: 'Commercial cleaning', to: '/services/commercial' }
},
{
  question: 'How much does a clean cost?',
  answer:
  'Pricing depends on the property size, condition, service type and frequency. Send a quick request and we will provide a clear, no-obligation quote — usually within one business day.',
  category: 'Pricing & Quotes',
  link: { label: 'Get a free quote', to: '/get-a-free-quote' }
},
{
  question: 'How do I request a quote?',
  answer:
  'Use the Quick Service Request on any page, complete the full quote form, or call us. The quick request takes under a minute; the full form helps us give a more accurate price.',
  category: 'Pricing & Quotes',
  link: { label: 'Get a free quote', to: '/get-a-free-quote' }
},
{
  question: 'Is there a minimum charge or lock-in contract?',
  answer:
  'There is a minimum visit length for residential cleans, which we confirm in your quote. Regular cleans have no lock-in contract — you can pause or cancel with notice.',
  category: 'Pricing & Quotes'
},
{
  question: 'Do you offer a site visit before quoting?',
  answer:
  'For larger commercial sites, builders cleans and complex jobs we are happy to visit and inspect before providing a final quote.',
  category: 'Pricing & Quotes'
},
{
  question: 'How soon can you start?',
  answer:
  'For most homes we can start within a week. One-off and end of lease cleans depend on availability, so we recommend booking as early as possible.',
  category: 'Booking & Scheduling'
},
{
  question: 'Can I change or cancel a booking?',
  answer:
  'Yes. Please give us at least 24 hours notice for changes or cancellations so we can reschedule our team.',
  category: 'Booking & Scheduling'
},
{
  question: 'Do you work weekends?',
  answer:
  'We work Monday to Saturday. Sunday cleans may be available for commercial sites and short-stay turnovers by arrangement.',
  category: 'Booking & Scheduling'
}];