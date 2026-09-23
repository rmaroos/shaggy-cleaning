import {
  ShieldCheckIcon,
  UsersIcon,
  SparklesIcon,
  CalendarClockIcon,
  MessageSquareIcon,
  SlidersHorizontalIcon,
  MapPinIcon,
  ClipboardListIcon,
  FileTextIcon,
  CalendarCheckIcon,
  PhoneCallIcon,
  BadgeCheckIcon,
  HeartHandshakeIcon,
  ScaleIcon,
  StarIcon } from
'lucide-react';
import type { IconItem } from '../types/content';

export const contact = {
  phone: '(03) 6231 0000',
  phoneHref: 'tel:+61362310000',
  email: 'hello@shaggycleaning.com.au',
  area: 'Hobart & surrounding areas, Tasmania',
  hours: 'Mon–Sat, 7am–6pm',
  responseTime: 'within one business day'
};

export const navItems = [
{ label: 'Home', to: '/' },
{ label: 'Services', to: '/services', menu: 'services' as const },
{ label: 'Locations', to: '/locations', menu: 'locations' as const },
{ label: 'About Us', to: '/about-us' },
{ label: 'FAQs', to: '/faqs' },
{ label: 'Blog', to: '/blog' },
{ label: 'Contact', to: '/contact' }];


export const trustPoints = [
{ label: 'Trusted & local', icon: MapPinIcon },
{ label: 'Professional team', icon: UsersIcon },
{ label: 'Flexible scheduling', icon: CalendarClockIcon },
{ label: 'Quality focused', icon: SparklesIcon },
{ label: 'Fully insured', icon: ShieldCheckIcon }];


export const whyChoose: IconItem[] = [
{ title: 'Reliable service', text: 'We turn up when we say we will, every visit.', icon: ShieldCheckIcon },
{ title: 'Professional team', text: 'Trained, vetted cleaners who respect your space.', icon: UsersIcon },
{ title: 'Consistent quality', text: 'Checklists keep every clean to the same standard.', icon: SparklesIcon },
{ title: 'Flexible scheduling', text: 'Early, late, weekends — around your routine.', icon: CalendarClockIcon },
{ title: 'Clear communication', text: 'One point of contact and straight answers.', icon: MessageSquareIcon },
{ title: 'Tailored cleaning', text: 'Plans built around your property, not a template.', icon: SlidersHorizontalIcon }];


export const processSteps: IconItem[] = [
{ title: 'Request a quote', text: 'Send a quick request online or call our team.', icon: PhoneCallIcon },
{ title: 'Tell us your requirements', text: 'We confirm the property, scope and any priorities.', icon: ClipboardListIcon },
{ title: 'Receive your quote', text: 'A clear, itemised price with no obligation.', icon: FileTextIcon },
{ title: 'Schedule your cleaning', text: 'Pick a time that suits — we handle the rest.', icon: CalendarCheckIcon }];


export const environments = [
{ label: 'Offices', to: '/services/commercial/office-cleaning' },
{ label: 'Medical centres', to: '/services/commercial/medical-centre-cleaning' },
{ label: 'Schools', to: '/services/commercial/school-cleaning' },
{ label: 'Restaurants', to: '/services/commercial/restaurant-cleaning' },
{ label: 'Gyms', to: '/services/commercial/gym-cleaning' },
{ label: 'Industrial facilities', to: '/services/commercial/industrial-cleaning' },
{ label: 'Aged care', to: '/services/commercial/aged-care-cleaning' },
{ label: 'Residential properties', to: '/services/residential/house-cleaning' }];


export const companyValues: IconItem[] = [
{ title: 'Quality', text: 'We measure every clean against a written standard, not a feeling.', icon: BadgeCheckIcon },
{ title: 'Reliability', text: 'Consistent teams, consistent times, consistent results.', icon: ShieldCheckIcon },
{ title: 'Professionalism', text: 'Uniformed, insured and trained for the spaces we clean.', icon: UsersIcon },
{ title: 'Customer focus', text: 'Your feedback shapes the next visit — and the one after.', icon: HeartHandshakeIcon },
{ title: 'Integrity', text: 'Honest quotes, honest timeframes, no surprises on the invoice.', icon: ScaleIcon }];


export const quoteTrust = [
{ label: 'Fast & free quotes', icon: FileTextIcon },
{ label: 'No obligation', icon: BadgeCheckIcon },
{ label: 'Trusted & local', icon: MapPinIcon },
{ label: 'Transparent pricing', icon: ScaleIcon },
{ label: 'Professional & friendly', icon: StarIcon }];


export const residentialPropertyTypes = ['House', 'Apartment', 'Townhouse', 'Unit', 'Holiday rental', 'Other'];

export const commercialPropertyTypes = [
'Office',
'Commercial Building',
'Medical Centre',
'School',
'Restaurant',
'Gym',
'Industrial Facility',
'Aged Care',
'Other'];


export const allPropertyTypes = [
'House',
'Apartment',
'Office',
'Commercial Building',
'Medical Centre',
'School',
'Restaurant',
'Gym',
'Industrial Facility',
'Aged Care',
'Other'];


export const frequencies = ['One-off', 'Weekly', 'Fortnightly', 'Monthly', 'Other'];

export const timeSlots = ['Early morning (6–9am)', 'Morning (9am–12pm)', 'Afternoon (12–4pm)', 'Evening (4–8pm)', 'Flexible'];