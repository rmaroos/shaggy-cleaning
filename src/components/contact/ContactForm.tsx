import React from 'react';
import { motion } from 'framer-motion';
import { CheckIcon, Loader2Icon, WifiOffIcon } from 'lucide-react';
import { FormField } from '../ui/FormField';
import { SelectInput } from '../ui/SelectInput';
import { Button } from '../ui/Button';
import { useContactForm } from '../../hooks/useContactForm';
import { categories } from '../../data/categories';
import { contact } from '../../data/site';
import { servicesInCategory } from '../../utils/content';
import { fieldClass } from '../../utils/formStyles';
import { cn } from '../../utils/cn';

export function ContactForm() {
  const f = useContactForm();
  const { values, errors, id } = f;
  const desc = (k: keyof typeof values) => errors[k] ? `${id(k)}-error` : undefined;

  if (f.status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
        role="status"
        className="py-6">
        
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand text-white">
          <CheckIcon className="h-6 w-6" strokeWidth={2.5} aria-hidden="true" />
        </span>
        <h3 className="mt-5 font-display text-[28px] font-bold text-ink">Message sent.</h3>
        <p className="mt-2 max-w-md text-[16px] leading-relaxed text-ink/70">
          Thanks, {values.firstName}. We’ve received your enquiry (ref. <span className="font-semibold text-ink">{f.reference}</span>) and will reply to{' '}
          <span className="font-semibold text-ink">{values.email}</span> {contact.responseTime}.
        </p>
        <Button to="/get-a-free-quote" variant="secondary" className="mt-6">Need a detailed quote?</Button>
      </motion.div>);

  }

  const text = (k: 'firstName' | 'lastName' | 'email' | 'phone' | 'address', label: string, opts: {type?: string;auto?: string;required?: boolean;full?: boolean;} = {}) =>
  <FormField id={id(k)} label={label} required={opts.required} optional={!opts.required} error={errors[k]} className={opts.full ? 'sm:col-span-2' : ''}>
      <input
      id={id(k)}
      type={opts.type ?? 'text'}
      autoComplete={opts.auto}
      value={values[k]}
      aria-invalid={!!errors[k] || undefined}
      aria-describedby={desc(k)}
      onChange={(e) => f.set(k, e.target.value)}
      onBlur={() => f.blur(k)}
      className={fieldClass(!!errors[k])} />
    
    </FormField>;


  return (
    <form onSubmit={f.submit} noValidate aria-busy={f.status === 'submitting'}>
      {f.status === 'error' &&
      <div role="alert" className="mb-6 flex items-start gap-3 rounded border border-brand p-4 text-sm">
          <WifiOffIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
          <p>We couldn’t send your message. Check your connection and try again, or email {contact.email}.</p>
        </div>
      }
      <div className="grid gap-5 sm:grid-cols-2">
        {text('firstName', 'First name', { auto: 'given-name', required: true })}
        {text('lastName', 'Last name', { auto: 'family-name', required: true })}
        {text('email', 'Email', { type: 'email', auto: 'email', required: true })}
        {text('phone', 'Phone', { type: 'tel', auto: 'tel', required: true })}
        <FormField id={id('service')} label="Service required" optional>
          <SelectInput id={id('service')} value={values.service} placeholder="Select a service" onChange={(e) => f.set('service', e.target.value)}>
            {categories.map((c) =>
            <optgroup key={c.slug} label={c.name}>
                {servicesInCategory(c.slug).map((s) =>
              <option key={s.slug} value={s.slug}>{s.name}</option>
              )}
              </optgroup>
            )}
            <option value="other">Other / general enquiry</option>
          </SelectInput>
        </FormField>
        {text('address', 'Property address', { auto: 'street-address' })}
        <FormField id={id('message')} label="Message" required error={errors.message} className="sm:col-span-2">
          <textarea
            id={id('message')}
            rows={5}
            value={values.message}
            aria-invalid={!!errors.message || undefined}
            aria-describedby={desc('message')}
            onChange={(e) => f.set('message', e.target.value)}
            onBlur={() => f.blur('message')}
            placeholder="Tell us about your property and what you need"
            className={fieldClass(!!errors.message, 'h-auto py-3 resize-y')} />
          
        </FormField>
        <div className="sm:col-span-2">
          <label className="flex cursor-pointer items-start gap-3">
            <input
              id={id('consent')}
              type="checkbox"
              checked={values.consent}
              aria-invalid={!!errors.consent || undefined}
              aria-describedby={desc('consent')}
              onChange={(e) => f.set('consent', e.target.checked)}
              className={cn('mt-0.5 h-5 w-5 shrink-0 cursor-pointer rounded border accent-brand', errors.consent ? 'border-brand' : 'border-ink/30')} />
            
            <span className="text-[14px] leading-relaxed text-ink/75">
              I agree to Shaggy Cleaning contacting me about this enquiry and to the{' '}
              <a href="/privacy-policy" className="font-semibold text-ink underline underline-offset-2 hover:text-brand">Privacy Policy</a>.
            </span>
          </label>
          {errors.consent &&
          <p id={`${id('consent')}-error`} role="alert" className="mt-1.5 pl-8 text-[13px] text-brand">{errors.consent}</p>
          }
        </div>
      </div>
      <Button type="submit" size="lg" disabled={f.status === 'submitting'} className="mt-7 w-full sm:w-auto">
        {f.status === 'submitting' ?
        <>
            <Loader2Icon className="h-4 w-4 animate-spin" aria-hidden="true" />
            Sending…
          </> :

        'Send Enquiry'
        }
      </Button>
    </form>);

}