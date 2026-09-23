import { useId, useState } from 'react';
import { isValidEmail, isValidPhone, makeReference, required } from '../utils/validation';

export interface ContactValues {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  service: string;
  address: string;
  message: string;
  consent: boolean;
}

type Field = keyof ContactValues;
const ORDER: Field[] = ['firstName', 'lastName', 'email', 'phone', 'message', 'consent'];

function validate(field: Field, v: ContactValues): string | undefined {
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
    case 'message':
      return required(v.message, 'Please tell us how we can help.');
    case 'consent':
      return v.consent ? undefined : 'Please agree so we can contact you about your enquiry.';
    default:
      return undefined;
  }
}

export function useContactForm() {
  const prefix = useId();
  const [values, setValues] = useState<ContactValues>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    address: '',
    message: '',
    consent: false
  });
  const [errors, setErrors] = useState<Partial<Record<Field, string>>>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [reference, setReference] = useState('');

  const id = (f: Field) => `${prefix}-${f}`;

  function set<K extends Field>(field: K, value: ContactValues[K]) {
    const next = { ...values, [field]: value };
    setValues(next);
    if (errors[field]) setErrors((e) => ({ ...e, [field]: validate(field, next) }));
  }

  function blur(field: Field) {
    if (values[field]) setErrors((e) => ({ ...e, [field]: validate(field, values) }));
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    const next: Partial<Record<Field, string>> = {};
    ORDER.forEach((f) => {
      const err = validate(f, values);
      if (err) next[f] = err;
    });
    setErrors(next);
    const first = ORDER.find((f) => next[f]);
    if (first) {
      document.getElementById(id(first))?.focus();
      return;
    }
    setStatus('submitting');
    await new Promise((r) => setTimeout(r, 1100));
    if (!navigator.onLine) {
      setStatus('error');
      return;
    }
    setReference(makeReference());
    setStatus('success');
  }

  return { values, errors, status, reference, id, set, blur, submit, retry: () => setStatus('idle') };
}