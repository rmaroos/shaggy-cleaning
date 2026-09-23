import React from 'react';
import { FormField } from '../ui/FormField';
import { SelectInput } from '../ui/SelectInput';
import { QuoteReview } from './QuoteReview';
import { categories } from '../../data/categories';
import { allPropertyTypes, frequencies, timeSlots } from '../../data/site';
import { allSuburbs, servicesInCategory } from '../../utils/content';
import { fieldClass } from '../../utils/formStyles';
import { todayISO } from '../../utils/validation';
import { cn } from '../../utils/cn';
import type { QuoteField, QuoteForm } from '../../hooks/useQuoteForm';

export function QuoteStepFields({ form }: {form: QuoteForm;}) {
  const { values, errors, id, set, blur, step } = form;
  const desc = (k: QuoteField) => errors[k] ? `${id(k)}-error` : undefined;

  const text = (k: 'firstName' | 'lastName' | 'email' | 'phone' | 'address' | 'suburb', label: string, opts: {type?: string;auto?: string;full?: boolean;list?: string;placeholder?: string;} = {}) =>
  <FormField id={id(k)} label={label} required error={errors[k]} className={opts.full ? 'sm:col-span-2' : ''}>
      <input
      id={id(k)}
      type={opts.type ?? 'text'}
      autoComplete={opts.auto}
      list={opts.list}
      placeholder={opts.placeholder}
      value={values[k]}
      aria-invalid={!!errors[k] || undefined}
      aria-describedby={desc(k)}
      onChange={(e) => set(k, e.target.value)}
      onBlur={() => blur(k)}
      className={fieldClass(!!errors[k])} />
    
    </FormField>;


  if (step === 0) {
    return (
      <div className="grid gap-5 sm:grid-cols-2">
        {text('firstName', 'First name', { auto: 'given-name' })}
        {text('lastName', 'Last name', { auto: 'family-name' })}
        {text('email', 'Email address', { type: 'email', auto: 'email' })}
        {text('phone', 'Phone number', { type: 'tel', auto: 'tel', placeholder: '04xx xxx xxx' })}
      </div>);

  }

  if (step === 1) {
    return (
      <div className="grid gap-5 sm:grid-cols-2">
        {text('address', 'Property address', { auto: 'street-address', full: true, placeholder: 'Street address' })}
        {text('suburb', 'Suburb', { auto: 'address-level2', list: 'quote-suburbs', placeholder: 'e.g. Sandy Bay' })}
        <datalist id="quote-suburbs">
          {allSuburbs.map((s) =>
          <option key={s} value={s} />
          )}
        </datalist>
        <FormField id={id('propertyType')} label="Property type" required error={errors.propertyType}>
          <SelectInput
            id={id('propertyType')}
            value={values.propertyType}
            hasError={!!errors.propertyType}
            aria-describedby={desc('propertyType')}
            placeholder="Select property type"
            onChange={(e) => set('propertyType', e.target.value)}>
            
            {allPropertyTypes.map((p) =>
            <option key={p} value={p}>{p}</option>
            )}
          </SelectInput>
        </FormField>
      </div>);

  }

  if (step === 2) {
    return (
      <fieldset aria-describedby={desc('service')}>
        <legend className="mb-4 text-[13px] font-semibold text-ink">
          Cleaning service <span className="text-brand" aria-hidden="true">*</span>
        </legend>
        <div className="space-y-7">
          {categories.map((c) =>
          <div key={c.slug}>
              <p className="mb-3 font-display text-base font-bold text-ink">{c.name}</p>
              <div className="grid gap-2 sm:grid-cols-2">
                {servicesInCategory(c.slug).map((s, i) => {
                const selected = values.service === s.slug;
                return (
                  <label
                    key={s.slug}
                    className={cn(
                      'flex cursor-pointer items-center gap-3 rounded-md border px-4 py-3.5 transition-colors duration-150',
                      selected ? 'border-brand ring-1 ring-brand' : errors.service ? 'border-brand/50' : 'border-ink/15 hover:border-ink/40'
                    )}>
                    
                      <input
                      id={c.slug === 'residential' && i === 0 ? id('service') : undefined}
                      type="radio"
                      name="service"
                      value={s.slug}
                      checked={selected}
                      onChange={() => set('service', s.slug)}
                      className="h-4 w-4 accent-brand" />
                    
                      <span className="text-[15px] font-medium text-ink">{s.name}</span>
                    </label>);

              })}
              </div>
            </div>
          )}
        </div>
        {errors.service &&
        <p id={`${id('service')}-error`} role="alert" className="mt-4 text-[13px] text-brand">{errors.service}</p>
        }
      </fieldset>);

  }

  if (step === 3) {
    return (
      <FormField id={id('details')} label="Additional requirements" optional hint="Property size, areas needing extra attention, access information, pets or special requests.">
        <textarea
          id={id('details')}
          rows={7}
          value={values.details}
          onChange={(e) => set('details', e.target.value)}
          placeholder="e.g. 3 bed, 2 bath. Oven needs a deep clean. Key in lockbox — code on request."
          className={fieldClass(false, 'h-auto py-3 resize-y')} />
        
      </FormField>);

  }

  if (step === 4) {
    return (
      <div className="grid gap-5 sm:grid-cols-2">
        <FormField id={id('date')} label="Preferred date" required error={errors.date}>
          <input
            id={id('date')}
            type="date"
            min={todayISO()}
            value={values.date}
            aria-invalid={!!errors.date || undefined}
            aria-describedby={desc('date')}
            onChange={(e) => set('date', e.target.value)}
            className={fieldClass(!!errors.date)} />
          
        </FormField>
        <FormField id={id('time')} label="Preferred time" optional>
          <SelectInput id={id('time')} value={values.time} placeholder="Any time" onChange={(e) => set('time', e.target.value)}>
            {timeSlots.map((t) =>
            <option key={t} value={t}>{t}</option>
            )}
          </SelectInput>
        </FormField>
        <fieldset className="sm:col-span-2" aria-describedby={desc('frequency')}>
          <legend className="mb-2 text-[13px] font-semibold text-ink">
            Cleaning frequency <span className="text-brand" aria-hidden="true">*</span>
          </legend>
          <div className="flex flex-wrap gap-2">
            {frequencies.map((fr, i) => {
              const selected = values.frequency === fr;
              return (
                <label
                  key={fr}
                  className={cn(
                    'flex h-11 cursor-pointer items-center rounded-md border px-4 text-[15px] font-medium transition-colors duration-150 has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-brand',
                    selected ? 'border-ink bg-ink text-white' : errors.frequency ? 'border-brand/50 text-ink' : 'border-ink/15 text-ink hover:border-ink/40'
                  )}>
                  
                  <input
                    id={i === 0 ? id('frequency') : undefined}
                    type="radio"
                    name="frequency"
                    value={fr}
                    checked={selected}
                    onChange={() => set('frequency', fr)}
                    className="sr-only" />
                  
                  {fr}
                </label>);

            })}
          </div>
          {errors.frequency &&
          <p id={`${id('frequency')}-error`} role="alert" className="mt-2 text-[13px] text-brand">{errors.frequency}</p>
          }
        </fieldset>
      </div>);

  }

  return <QuoteReview form={form} />;
}