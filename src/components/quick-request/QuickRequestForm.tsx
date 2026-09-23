import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRightIcon, Loader2Icon, WifiOffIcon } from 'lucide-react';
import { Button } from '../ui/Button';
import { FormField } from '../ui/FormField';
import { SelectInput } from '../ui/SelectInput';
import { QuickRequestSuccess } from './QuickRequestSuccess';
import { useQuickRequest } from '../../hooks/useQuickRequest';
import { categories } from '../../data/categories';
import { contact } from '../../data/site';
import { allSuburbs, servicesInCategory } from '../../utils/content';
import { fieldClass } from '../../utils/formStyles';
import { todayISO } from '../../utils/validation';
import { cn } from '../../utils/cn';
import type { CategorySlug } from '../../types/content';

interface QuickRequestFormProps {
  layout?: 'inline' | 'stacked';
  defaultService?: string;
  defaultLocation?: string;
  priorityCategory?: CategorySlug;
  onNavigate?: () => void;
}

export function QuickRequestForm({ layout = 'inline', defaultService, defaultLocation, priorityCategory, onNavigate }: QuickRequestFormProps) {
  const q = useQuickRequest({ defaultService, defaultLocation, priorityCategory });
  const { values, errors, fieldId } = q;
  const inline = layout === 'inline';
  const orderedCategories = priorityCategory ?
  [...categories].sort((a, b) => Number(b.slug === priorityCategory) - Number(a.slug === priorityCategory)) :
  categories;

  if (q.status === 'success') {
    return (
      <QuickRequestSuccess
        name={values.name}
        phone={values.phone}
        reference={q.reference}
        quoteHref={q.quoteHref}
        onReset={q.reset}
        onNavigate={onNavigate} />);


  }

  const describedBy = (f: keyof typeof values) => errors[f] ? `${fieldId(f)}-error` : undefined;
  const submitting = q.status === 'submitting';
  const listId = `${fieldId('location')}-list`;

  return (
    <form onSubmit={q.submit} noValidate aria-busy={submitting}>
      {q.status === 'error' &&
      <div role="alert" className="mb-5 flex items-start gap-3 rounded border border-brand bg-white p-4 text-sm">
          <WifiOffIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
          <p className="text-ink">
            We couldn’t send your request. Check your connection and try again, or call{' '}
            <a href={contact.phoneHref} className="font-semibold underline underline-offset-2 hover:text-brand">{contact.phone}</a>.
          </p>
        </div>
      }

      <div className={cn('grid gap-4', inline ? 'md:grid-cols-2 lg:grid-cols-4' : 'sm:grid-cols-2')}>
        <FormField id={fieldId('service')} label="Service required" required error={errors.service} className={inline ? '' : 'sm:col-span-2'}>
          <SelectInput
            id={fieldId('service')}
            value={values.service}
            hasError={!!errors.service}
            aria-describedby={describedBy('service')}
            placeholder="Select a service"
            onChange={(e) => q.setField('service', e.target.value)}>
            
            {orderedCategories.map((c) =>
            <optgroup key={c.slug} label={c.name}>
                {servicesInCategory(c.slug).map((s) =>
              <option key={s.slug} value={s.slug}>{s.name}</option>
              )}
              </optgroup>
            )}
            <option value="other">Other / not sure</option>
          </SelectInput>
        </FormField>

        <FormField id={fieldId('propertyType')} label="Property type" optional>
          <SelectInput
            id={fieldId('propertyType')}
            value={values.propertyType}
            placeholder="Select type"
            onChange={(e) => q.setField('propertyType', e.target.value)}>
            
            {q.propertyOptions.map((p) =>
            <option key={p} value={p}>{p}</option>
            )}
          </SelectInput>
        </FormField>

        <FormField id={fieldId('location')} label="Suburb" required error={errors.location}>
          <input
            id={fieldId('location')}
            list={listId}
            value={values.location}
            autoComplete="address-level2"
            placeholder="e.g. Sandy Bay"
            aria-invalid={!!errors.location || undefined}
            aria-describedby={describedBy('location')}
            onChange={(e) => q.setField('location', e.target.value)}
            onBlur={() => q.blurField('location')}
            className={fieldClass(!!errors.location)} />
          
          <datalist id={listId}>
            {allSuburbs.map((s) =>
            <option key={s} value={s} />
            )}
          </datalist>
        </FormField>

        <FormField id={fieldId('date')} label="Preferred date" optional>
          <input
            id={fieldId('date')}
            type="date"
            min={todayISO()}
            value={values.date}
            onChange={(e) => q.setField('date', e.target.value)}
            className={fieldClass(false, values.date ? '' : 'text-ink/45')} />
          
        </FormField>
      </div>

      <AnimatePresence initial={false}>
        {values.service &&
        <motion.div
          key="dynamic"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.22, ease: [0.23, 1, 0.32, 1] }}
          className="overflow-hidden">
          
            <div className={cn('grid gap-4 pt-4', inline ? 'md:grid-cols-2 lg:grid-cols-4' : 'sm:grid-cols-2')}>
              {q.detailField &&
            <FormField id={fieldId('detail')} label={q.detailField.label} optional>
                  <SelectInput
                id={fieldId('detail')}
                value={values.detail}
                placeholder="Select"
                onChange={(e) => q.setField('detail', e.target.value)}>
                
                    {q.detailField.options.map((o) =>
                <option key={o} value={o}>{o}</option>
                )}
                  </SelectInput>
                </FormField>
            }
              <FormField
              id={fieldId('message')}
              label="Anything we should know?"
              optional
              className={cn(inline ? q.detailField ? 'lg:col-span-3' : 'md:col-span-2 lg:col-span-4' : q.detailField ? '' : 'sm:col-span-2')}>
              
                <input
                id={fieldId('message')}
                value={values.message}
                placeholder="Access, priorities, pets…"
                onChange={(e) => q.setField('message', e.target.value)}
                className={fieldClass(false)} />
              
              </FormField>
            </div>
          </motion.div>
        }
      </AnimatePresence>

      <div className={cn('mt-4 grid gap-4', inline ? 'md:grid-cols-2 lg:grid-cols-4' : 'sm:grid-cols-2')}>
        <FormField id={fieldId('name')} label="Name" required error={errors.name} className={inline ? '' : 'sm:col-span-2'}>
          <input
            id={fieldId('name')}
            value={values.name}
            autoComplete="name"
            placeholder="Your name"
            aria-invalid={!!errors.name || undefined}
            aria-describedby={describedBy('name')}
            onChange={(e) => q.setField('name', e.target.value)}
            onBlur={() => q.blurField('name')}
            className={fieldClass(!!errors.name)} />
          
        </FormField>
        <FormField id={fieldId('phone')} label="Phone" required error={errors.phone}>
          <input
            id={fieldId('phone')}
            type="tel"
            inputMode="tel"
            value={values.phone}
            autoComplete="tel"
            placeholder="04xx xxx xxx"
            aria-invalid={!!errors.phone || undefined}
            aria-describedby={describedBy('phone')}
            onChange={(e) => q.setField('phone', e.target.value)}
            onBlur={() => q.blurField('phone')}
            className={fieldClass(!!errors.phone)} />
          
        </FormField>
        <FormField id={fieldId('email')} label="Email" required error={errors.email}>
          <input
            id={fieldId('email')}
            type="email"
            value={values.email}
            autoComplete="email"
            placeholder="you@example.com"
            aria-invalid={!!errors.email || undefined}
            aria-describedby={describedBy('email')}
            onChange={(e) => q.setField('email', e.target.value)}
            onBlur={() => q.blurField('email')}
            className={fieldClass(!!errors.email)} />
          
        </FormField>
        <div className={cn('flex flex-col', inline ? 'justify-start lg:pt-[26px]' : 'sm:col-span-2')}>
          <Button type="submit" size="lg" disabled={submitting} className="h-12 w-full">
            {submitting ?
            <>
                <Loader2Icon className="h-4 w-4 animate-spin" aria-hidden="true" />
                Submitting…
              </> :

            <>
                Request Service
                <ArrowRightIcon className="h-4 w-4 transition-transform duration-150 ease-out group-hover:translate-x-0.5" aria-hidden="true" />
              </>
            }
          </Button>
        </div>
      </div>
      <p className="mt-4 text-[13px] text-ink/50">
        Free, no-obligation. We reply {contact.responseTime}.
      </p>
    </form>);

}