import { useId, useMemo, useState } from 'react';
import { getService } from '../utils/content';
import { getDetailField, getPropertyOptions } from '../utils/quickRequest';
import { isValidEmail, isValidPhone, makeReference, required } from '../utils/validation';
import type { CategorySlug } from '../types/content';

export interface QuickRequestValues {
  service: string;
  propertyType: string;
  detail: string;
  location: string;
  date: string;
  name: string;
  phone: string;
  email: string;
  message: string;
}

export type QuickRequestField = keyof QuickRequestValues;
type Status = 'idle' | 'submitting' | 'success' | 'error';

interface Options {
  defaultService?: string;
  defaultLocation?: string;
  priorityCategory?: CategorySlug;
}

const FIELD_ORDER: QuickRequestField[] = ['service', 'location', 'name', 'phone', 'email'];

function validateField(field: QuickRequestField, v: QuickRequestValues): string | undefined {
  switch (field) {
    case 'service':
      return required(v.service, 'Please choose the service you need.');
    case 'location':
      return required(v.location, 'Please tell us your suburb.');
    case 'name':
      return required(v.name, 'Please enter your name.');
    case 'phone':
      if (!v.phone.trim()) return 'Please enter your phone number.';
      return isValidPhone(v.phone) ? undefined : 'Please enter a valid phone number.';
    case 'email':
      if (!v.email.trim()) return 'Please enter your email address.';
      return isValidEmail(v.email) ? undefined : 'Please enter a valid email address.';
    default:
      return undefined;
  }
}

export function useQuickRequest({ defaultService = '', defaultLocation = '', priorityCategory }: Options) {
  const idPrefix = useId();
  const [values, setValues] = useState<QuickRequestValues>({
    service: defaultService,
    propertyType: '',
    detail: '',
    location: defaultLocation,
    date: '',
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState<Partial<Record<QuickRequestField, string>>>({});
  const [status, setStatus] = useState<Status>('idle');
  const [reference, setReference] = useState('');

  const service = getService(values.service);
  const category: CategorySlug | undefined = service?.category ?? priorityCategory;
  const propertyOptions = useMemo(() => getPropertyOptions(category), [category]);
  const detailField = useMemo(() => getDetailField(values.service, service?.category), [values.service, service?.category]);

  const fieldId = (field: QuickRequestField) => `${idPrefix}-${field}`;

  function setField(field: QuickRequestField, value: string) {
    setValues((prev) => {
      const next = { ...prev, [field]: value };
      if (field === 'service') {
        next.detail = '';
        const nextCategory = getService(value)?.category;
        if (prev.propertyType && !getPropertyOptions(nextCategory).includes(prev.propertyType)) next.propertyType = '';
      }
      if (errors[field]) {
        setErrors((e) => ({ ...e, [field]: validateField(field, next) }));
      }
      return next;
    });
  }

  function blurField(field: QuickRequestField) {
    if (!values[field]) return;
    setErrors((e) => ({ ...e, [field]: validateField(field, values) }));
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    const nextErrors: Partial<Record<QuickRequestField, string>> = {};
    FIELD_ORDER.forEach((f) => {
      const err = validateField(f, values);
      if (err) nextErrors[f] = err;
    });
    setErrors(nextErrors);
    const firstError = FIELD_ORDER.find((f) => nextErrors[f]);
    if (firstError) {
      document.getElementById(fieldId(firstError))?.focus();
      return;
    }
    setStatus('submitting');
    await new Promise((r) => setTimeout(r, 1100));
    if (typeof navigator !== 'undefined' && !navigator.onLine) {
      setStatus('error');
      return;
    }
    setReference(makeReference());
    setStatus('success');
  }

  function reset() {
    setValues((v) => ({ ...v, date: '', detail: '', message: '', propertyType: '' }));
    setErrors({});
    setStatus('idle');
  }

  const quoteHref = useMemo(() => {
    const params = new URLSearchParams();
    const [first, ...rest] = values.name.trim().split(' ');
    if (values.service) params.set('service', values.service);
    if (values.propertyType) params.set('property', values.propertyType);
    if (values.location) params.set('location', values.location);
    if (values.date) params.set('date', values.date);
    if (first) params.set('first', first);
    if (rest.length) params.set('last', rest.join(' '));
    if (values.phone) params.set('phone', values.phone);
    if (values.email) params.set('email', values.email);
    const qs = params.toString();
    return `/get-a-free-quote${qs ? `?${qs}` : ''}`;
  }, [values]);

  return {
    values,
    errors,
    status,
    reference,
    category,
    propertyOptions,
    detailField,
    fieldId,
    setField,
    blurField,
    submit,
    reset,
    retry: () => setStatus('idle'),
    quoteHref
  };
}