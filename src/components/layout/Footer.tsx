import React from 'react';
import { Link } from 'react-router-dom';
import { MailIcon, MapPinIcon, PhoneIcon } from 'lucide-react';
import { Logo } from '../ui/Logo';
import { SocialIcon, type SocialNetwork } from '../ui/SocialIcon';
import { Container } from '../ui/Container';
import { contact } from '../../data/site';

const columns = [
{
  title: 'Services',
  links: [
  { label: 'House Cleaning', to: '/services/residential/house-cleaning' },
  { label: 'End of Lease Cleaning', to: '/services/residential/end-of-lease-cleaning' },
  { label: 'Office Cleaning', to: '/services/commercial/office-cleaning' },
  { label: 'Commercial Cleaning', to: '/services/commercial' },
  { label: 'Specialised Cleaning', to: '/services/specialised' },
  { label: 'View All Services', to: '/services' }]

},
{
  title: 'Company',
  links: [
  { label: 'About Us', to: '/about-us' },
  { label: 'Why Choose Shaggy', to: '/about-us#why' },
  { label: 'Our Team', to: '/about-us#team' },
  { label: 'Our Values', to: '/about-us#values' },
  { label: 'FAQs', to: '/faqs' },
  { label: 'Blog / Resources', to: '/blog' },
  { label: 'Contact', to: '/contact' }]

},
{
  title: 'Service Areas',
  links: [
  { label: 'Hobart', to: '/locations/hobart' },
  { label: 'Greater Hobart', to: '/locations/greater-hobart' },
  { label: 'Northern Suburbs', to: '/locations/northern-suburbs' },
  { label: 'Surrounding Areas', to: '/locations/other-service-areas' },
  { label: 'View All Locations', to: '/locations' }]

}];


const socials: {label: string;network: SocialNetwork;href: string;}[] = [
{ label: 'Facebook', network: 'facebook', href: 'https://facebook.com' },
{ label: 'Instagram', network: 'instagram', href: 'https://instagram.com' },
{ label: 'LinkedIn', network: 'linkedin', href: 'https://linkedin.com' }];


export function Footer() {
  return (
    <footer className="bg-ink pb-24 text-white md:pb-0">
      <Container className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1.2fr] lg:gap-10 lg:py-20">
        <div>
          <Logo inverse />
          <p className="mt-5 max-w-xs text-[15px] leading-relaxed text-white/60">
            Professional cleaning for homes, businesses and specialised facilities across Hobart and surrounding areas.
          </p>
          <ul className="mt-6 flex gap-2">
            {socials.map((s) =>
            <li key={s.label}>
                <a
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="flex h-10 w-10 items-center justify-center rounded-md border border-white/20 text-white transition-colors duration-150 hover:border-brand hover:bg-brand">
                
                  <SocialIcon network={s.network} className="h-4 w-4" />
                </a>
              </li>
            )}
          </ul>
        </div>

        {columns.map((col) =>
        <nav key={col.title} aria-label={col.title}>
            <h2 className="font-display text-sm font-bold text-white">{col.title}</h2>
            <ul className="mt-5 space-y-3">
              {col.links.map((l) =>
            <li key={l.label}>
                  <Link to={l.to} className="text-[15px] text-white/60 transition-colors duration-150 hover:text-white">
                    {l.label}
                  </Link>
                </li>
            )}
            </ul>
          </nav>
        )}

        <div>
          <h2 className="font-display text-sm font-bold text-white">Contact</h2>
          <ul className="mt-5 space-y-4 text-[15px]">
            <li>
              <a href={contact.phoneHref} className="flex items-start gap-3 text-white hover:text-brand">
                <PhoneIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                {contact.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${contact.email}`} className="flex items-start gap-3 break-all text-white/80 hover:text-white">
                <MailIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                {contact.email}
              </a>
            </li>
            <li className="flex items-start gap-3 text-white/60">
              <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
              {contact.area}
            </li>
          </ul>
        </div>
      </Container>
      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-3 py-6 text-[13px] text-white/50 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Shaggy Cleaning Services. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white">Terms & Conditions</Link>
          </div>
        </Container>
      </div>
    </footer>);

}