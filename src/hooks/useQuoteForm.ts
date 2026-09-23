import { useId, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getService } from '../utils/content';
import { isValidEmail, isValidPhone, makeReference, required } from '../utils/validation';

export interface QuoteValues {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  suburb: string;
  propertyType: string;
  service: string;
  details: string;
  date: string;
  time: string;
  frequency: string;
  consent: boolean;
}

export type QuoteField = keyof QuoteValues;

export const quoteSteps = [
{ title: 'Your details', fields: ['firstName', 'lastName', 'email', 'phone'] as QuoteField[] },
{ title: 'Property', fields: ['address', 'suburb', 'propertyType'] as QuoteField[] },
{ title: 'Service', fields: ['service'] as QuoteField[] },
{ title: 'Requirements', fields: [] as QuoteField[] },
{ title: 'Date & time', fields: ['date', 'frequency'] as QuoteField[] },
{ title: 'Review', fields: ['consent'] as QuoteField[] }];


function validate(field: QuoteField, v: QuoteValues): string | undefined {
  switch (field) {
    case 'firstName':
      return required(v.firstName, 'Please enter your first name.');
    case 'lastName':
      return required(v.lastName, 'Please enter your last name.');
    case 'email':
      if (!v.email.trim()) return 'Please enter your email address.';
      return isValidEmail(v.email) ? undefined : 'Please enter a valid email address.';
    case 'phone':
      if (!v.phone.trim()) return 'Please enter your phone number.';
      return isValidPhone(v.phone) ? undefined : 'Please enter a valid phone number.';
    case 'address':
      return required(v.address, 'Please enter the property address.');
    case 'suburb':
      return required(v.suburb, 'Please enter the suburb.');
    case 'propertyType':
      return required(v.propertyType, 'Please choose a property type.');
    case 'service':
      return required(v.service, 'Please choose the cleaning service you need.');
    case 'date':
      return required(v.date, 'Please choose a preferred date.');
    case 'frequency':
      return required(v.frequency, 'Please choose how often you need cleaning.');
    case 'consent':
      return v.consent ? undefined : 'Please agree so we can contact you with your quote.';
    default:
      return undefined;
  }
}

export function useQuoteForm() {
  const [params] = useSearchParams();
  const prefix = useId();
  const initialService = getService(params.get('service') ?? '') ? params.get('service')! : '';
  const [values, setValues] = useState<QuoteValues>({
    firstName: params.get('first') ?? '',
    lastName: params.get('last') ?? '',
    email: params.get('email') ?? '',
    phone: params.get('phone') ?? '',
    address: '',
    suburb: params.get('location') ?? '',
    propertyType: params.get('property') ?? '',
    service: initialService,
    details: '',
    date: params.get('date') ?? '',
    time: '',
    frequency: '',
    consent: false
  });
  const [step, setStep] = useState(0);
  const [maxStep, setMaxStep] = useState(0);
  const [errors, setErrors] = useState<Partial<Record<QuoteField, string>>>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [reference, setReference] = useState('');

  const id = (f: QuoteField) => `${prefix}-${f}`;

  function set<K extends QuoteField>(field: K, value: QuoteValues[K]) {
    const next = { ...values, [field]: value };
    setValues(next);
    if (errors[field]) setErrors((e) => ({ ...e, [field]: validate(field, next) }));
  }

  function blur(field: QuoteField) {
    if (values[field]) setErrors((e) => ({ ...e, [field]: validate(field, values) }));
  }

  function validateStep(index: number): boolean {
    const next: Partial<Record<QuoteField, string>> = {};
    quoteSteps[index].fields.forEach((f) => {
      const err = validate(f, values);
      if (err) next[f] = err;
    });
    setErrors((e) => ({ ...e, ...next, ...Object.fromEntries(quoteSteps[index].fields.filter((f) => !next[f]).map((f) => [f, undefined])) }));
    const first = quoteSteps[index].fields.find((f) => next[f]);
    if (first) {
      setTimeout(() => document.getElementById(id(first))?.focus(), 0);
      return false;
    }
    return true;
  }

  function goTo(index: number) {
    setStep(index);
    document.getElementById('quote-form-top')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function next() {
    if (!validateStep(step)) return;
    const n = Math.min(step + 1, quoteSteps.length - 1);
    setMaxStep((m) => Math.max(m, n));
    goTo(n);
  }

  function back() {
    goTo(Math.max(step - 1, 0));
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (step < quoteSteps.length - 1) {
      next();
      return;
    }
    for (let i = 0; i < quoteSteps.length; i++) {
      if (!validateStep(i)) {
        goTo(i);
        return;
      }
    }
    setStatus('submitting');
    await new Promise((r) => setTimeout(r, 1300));
    if (!navigator.onLine) {
      setStatus('error');
      return;
    }
    setReference(makeReference());
    setStatus('success');
    document.getElementById('quote-form-top')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  return { values, errors, step, maxStep, status, reference, id, set, blur, next, back, goTo, submit, retry: () => setStatus('idle') };
}

export type QuoteForm = ReturnType<typeof useQuoteForm>;