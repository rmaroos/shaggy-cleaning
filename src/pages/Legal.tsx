import React from 'react';
import { Container } from '../components/ui/Container';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { contact } from '../data/site';

const content = {
  privacy: {
    title: 'Privacy Policy',
    sections: [
    { heading: 'What we collect', text: 'When you request a quote or contact us, we collect your name, contact details, property details and any information you choose to share about your cleaning requirements.' },
    { heading: 'How we use it', text: 'We use your information to respond to your enquiry, prepare quotes, deliver services and improve our website. We do not sell your personal information.' },
    { heading: 'Your choices', text: `You can ask to access, correct or delete your information at any time by emailing ${contact.email}.` }]

  },
  terms: {
    title: 'Terms & Conditions',
    sections: [
    { heading: 'Quotes', text: 'Quotes are based on the information provided and may be adjusted after inspection if the scope differs significantly.' },
    { heading: 'Bookings & cancellations', text: 'Please provide at least 24 hours notice to change or cancel a booking.' },
    { heading: 'Satisfaction', text: 'If something isn’t right, tell us within 24 hours and we’ll return to address it.' }]

  }
};

export function Legal({ page }: {page: 'privacy' | 'terms';}) {
  const c = content[page];
  return (
    <section className="pb-24 pt-8 md:pt-10">
      <Container>
        <Breadcrumbs items={[{ label: c.title }]} />
        <div className="mt-10 max-w-3xl">
          <h1 className="font-display text-[40px] font-extrabold leading-tight text-ink md:text-[56px]">{c.title}</h1>
          <p className="mt-3 text-sm text-ink/55">Last updated September 2026</p>
          {c.sections.map((s) =>
          <div key={s.heading} className="mt-10">
              <h2 className="font-display text-2xl font-bold text-ink">{s.heading}</h2>
              <p className="mt-3 text-[17px] leading-relaxed text-ink/75">{s.text}</p>
            </div>
          )}
        </div>
      </Container>
    </section>);

}