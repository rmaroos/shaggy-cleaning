import React from 'react';
import { AlertCircleIcon } from 'lucide-react';
import { cn } from '../../utils/cn';

interface FormFieldProps {
  id: string;
  label: string;
  required?: boolean;
  optional?: boolean;
  error?: string;
  hint?: string;
  className?: string;
  children: React.ReactNode;
}

export function FormField({ id, label, required, optional, error, hint, className, children }: FormFieldProps) {
  return (
    <div className={cn('flex flex-col', className)}>
      <label htmlFor={id} className="mb-1.5 text-[13px] font-semibold text-ink">
        {label}
        {required && <span className="ml-0.5 text-brand" aria-hidden="true">*</span>}
        {optional && <span className="ml-1 font-normal text-ink/45">(optional)</span>}
      </label>
      {children}
      {error ?
      <p id={`${id}-error`} role="alert" className="mt-1.5 flex items-start gap-1.5 text-[13px] text-brand">
          <AlertCircleIcon className="mt-px h-3.5 w-3.5 shrink-0" aria-hidden="true" />
          {error}
        </p> :
      hint ?
      <p id={`${id}-hint`} className="mt-1.5 text-[13px] text-ink/50">{hint}</p> :
      null}
    </div>);

}