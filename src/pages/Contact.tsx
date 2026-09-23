import React from 'react';
import { ClockIcon, MailIcon, MapPinIcon, PhoneIcon } from 'lucide-react';
import { PageHero } from '../components/sections/PageHero';
import { ContactForm } from '../components/contact/ContactForm';
import { LocationMap } from '../components/sections/LocationMap';
import { FaqSection } from '../components/sections/FaqSection';
import { ServiceAreas } from '../components/sections/ServiceAreas';
import { FinalCTA } from '../components/sections/FinalCTA';
import { Container } from '../components/ui/Container';
import { contact } from '../data/site';
import { faqs } from '../data/faqs';

const methods = [
{ label: 'Call us', value: contact.phone, href: contact.phoneHref, note: 'Fastest for urgent or same-week cleans', icon: PhoneIcon, primary: true },
{ label: 'Email', value: contact.email, href: `mailto:${contact.email}`, note: `We reply ${contact.responseTime}`, icon: MailIcon },
{ label: 'Service area', value: 'Hobart & surrounds', href: '/locations', note: 'City, Eastern Shore, Kingborough, northern suburbs', icon: MapPinIcon }];


export function Contact() {
  return (
    <>
      <PageHero
        crumbs={[{ label: 'Contact' }]}
        title="Talk to our team."
        description="Call, email or send an enquiry. For pricing, the quick request or full quote form is the fastest way to a clear price."
        compact />
      

      <section aria-label="Contact methods" className="pb-12 md:pb-16">
        <Container>
          <ul className="grid gap-px overflow-hidden rounded-xl border border-ink/15 bg-ink/15 md:grid-cols-3">
            {methods.map((m) =>
            <li key={m.label} className="bg-white">
                <a href={m.href} className="group flex h-full flex-col p-7 transition-colors duration-150 hover:bg-ink/[0.02]">
                  <m.icon className={`h-5 w-5 ${m.primary ? 'text-brand' : 'text-ink'}`} aria-hidden="true" />
                  <span className="mt-5 text-[13px] text-ink/55">{m.label}</span>
                  <span className={`mt-1 break-words font-display font-bold text-ink transition-colors duration-150 group-hover:text-brand ${m.primary ? 'text-[28px]' : 'text-xl'}`}>
                    {m.value}
                  </span>
                  <span className="mt-2 text-sm text-ink/60">{m.note}</span>
                </a>
              </li>
            )}
          </ul>
        </Container>
      </section>

      <section aria-labelledby="enquiry-title" className="bg-ink/[0.03] py-16 md:py-24">
        <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="rounded-xl border border-ink/10 bg-white p-7 shadow-float md:p-10 lg:col-span-7">
            <h2 id="enquiry-title" className="font-display text-[28px] font-bold text-ink md:text-[34px]">Send an enquiry</h2>
            <p className="mt-2 mb-8 text-[15px] text-ink/60">Required fields are marked with <span className="text-brand">*</span></p>
            <ContactForm />
          </div>
          <div className="lg:col-span-5">
            <LocationMap className="aspect-square" />
            <h2 className="mt-8 font-display text-xl font-bold text-ink">Contact details</h2>
            <dl className="mt-4">
              {[
              { icon: PhoneIcon, label: 'Phone', value: contact.phone },
              { icon: MailIcon, label: 'Email', value: contact.email },
              { icon: ClockIcon, label: 'Hours', value: contact.hours },
              { icon: MapPinIcon, label: 'Based in', value: contact.area }].
              map((d) =>
              <div key={d.label} className="flex gap-3 border-t border-ink/10 py-3.5">
                  <d.icon className="mt-0.5 h-4 w-4 shrink-0 text-ink/60" aria-hidden="true" />
                  <div>
                    <dt className="text-[13px] text-ink/55">{d.label}</dt>
                    <dd className="break-words font-medium text-ink">{d.value}</dd>
                  </div>
                </div>
              )}
            </dl>
          </div>
        </Container>
      </section>

      <FaqSection items={faqs.filter((f) => f.category !== 'Services').slice(0, 5)} />
      <ServiceAreas />
      <FinalCTA />
    </>);

}