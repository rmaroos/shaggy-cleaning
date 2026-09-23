import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeftIcon, ArrowRightIcon, Loader2Icon, MapPinIcon, PhoneIcon, WifiOffIcon } from 'lucide-react';
import { Container } from '../components/ui/Container';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { Button } from '../components/ui/Button';
import { QuoteStepper } from '../components/quote/QuoteStepper';
import { QuoteStepFields } from '../components/quote/QuoteStepFields';
import { QuoteSuccess } from '../components/quote/QuoteSuccess';
import { FaqSection } from '../components/sections/FaqSection';
import { quoteSteps, useQuoteForm } from '../hooks/useQuoteForm';
import { contact, quoteTrust } from '../data/site';
import { featuredSuburbs } from '../data/locations';
import { faqs } from '../data/faqs';

export function Quote() {
  const form = useQuoteForm();
  const last = form.step === quoteSteps.length - 1;
  const submitting = form.status === 'submitting';

  return (
    <>
      <section className="bg-ink/[0.03] pb-16 pt-8 md:pb-24 md:pt-10">
        <Container>
          <Breadcrumbs items={[{ label: 'Get a Free Quote' }]} />
          <div className="mt-8 max-w-2xl md:mt-10">
            <h1 className="font-display text-[40px] font-extrabold leading-[1.04] text-ink md:text-[56px]">Get a free quote</h1>
            <p className="mt-4 text-[17px] leading-relaxed text-ink/65 md:text-[19px]">
              Six short steps, about two minutes. The more we know, the more accurate your quote.
            </p>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-12 lg:gap-12">
            <div id="quote-form-top" className="scroll-mt-28 rounded-xl border border-ink/10 bg-white p-6 shadow-float md:p-10 lg:col-span-8">
              {form.status === 'success' ?
              <QuoteSuccess values={form.values} reference={form.reference} /> :

              <form onSubmit={form.submit} noValidate aria-busy={submitting}>
                  <QuoteStepper step={form.step} maxStep={form.maxStep} onSelect={form.goTo} />
                  <div className="mt-10">
                    <h2 className="hidden font-display text-2xl font-bold text-ink md:block">{quoteSteps[form.step].title}</h2>
                    {form.status === 'error' &&
                  <div role="alert" className="mt-5 flex items-start gap-3 rounded border border-brand p-4 text-sm">
                        <WifiOffIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                        <p>We couldn’t submit your quote. Check your connection and try again — your details are saved.</p>
                      </div>
                  }
                    <AnimatePresence mode="wait" initial={false}>
                      <motion.div
                      key={form.step}
                      initial={{ opacity: 0, x: 12 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -12 }}
                      transition={{ duration: 0.18, ease: [0.23, 1, 0.32, 1] }}
                      className="mt-6">
                      
                        <QuoteStepFields form={form} />
                      </motion.div>
                    </AnimatePresence>
                  </div>
                  <div className="mt-10 flex items-center justify-between gap-4 border-t border-ink/10 pt-6">
                    {form.step > 0 ?
                  <Button variant="text" onClick={form.back}>
                        <ArrowLeftIcon className="h-4 w-4" aria-hidden="true" />
                        Back
                      </Button> :

                  <span />
                  }
                    <Button type="submit" size="lg" disabled={submitting}>
                      {submitting ?
                    <>
                          <Loader2Icon className="h-4 w-4 animate-spin" aria-hidden="true" />
                          Submitting…
                        </> :
                    last ?
                    'Review & Submit' :

                    <>
                          Continue
                          <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
                        </>
                    }
                    </Button>
                  </div>
                </form>
              }
            </div>

            <aside className="space-y-8 lg:col-span-4" aria-label="Why request a quote with us">
              <ul className="space-y-4">
                {quoteTrust.map((t) =>
                <li key={t.label} className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-ink/15 bg-white">
                      <t.icon className="h-4 w-4 text-ink" aria-hidden="true" />
                    </span>
                    <span className="text-[15px] font-semibold text-ink">{t.label}</span>
                  </li>
                )}
              </ul>
              <div className="rounded-xl bg-ink p-7 text-white">
                <h2 className="font-display text-xl font-bold">Need help?</h2>
                <p className="mt-2 text-[15px] text-white/70">Prefer to talk it through? Our team can quote over the phone.</p>
                <a href={contact.phoneHref} className="mt-5 flex items-center gap-2 font-display text-2xl font-bold hover:text-brand">
                  <PhoneIcon className="h-5 w-5 text-brand" aria-hidden="true" />
                  {contact.phone}
                </a>
                <p className="mt-1 text-sm text-white/55">{contact.hours}</p>
              </div>
              <div>
                <h2 className="font-display text-base font-bold text-ink">Service areas</h2>
                <p className="mt-2 flex flex-wrap gap-x-2 gap-y-1 text-sm text-ink/65">
                  <MapPinIcon className="h-4 w-4 text-brand" aria-hidden="true" />
                  {featuredSuburbs.join(', ')} and surrounding suburbs.
                </p>
              </div>
            </aside>
          </div>
        </Container>
      </section>
      <FaqSection items={faqs.filter((f) => f.category === 'Pricing & Quotes' || f.category === 'Booking & Scheduling').slice(0, 5)} title="Quote questions" />
    </>);

}