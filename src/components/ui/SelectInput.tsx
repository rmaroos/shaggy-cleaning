import React from 'react';
import { ChevronDownIcon } from 'lucide-react';
import { selectClass } from '../../utils/formStyles';

interface SelectInputProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  hasError?: boolean;
  placeholder?: string;
  children: React.ReactNode;
}

export function SelectInput({ hasError, placeholder, children, value, ...rest }: SelectInputProps) {
  return (
    <div className="relative">
      <select
        {...rest}
        value={value}
        aria-invalid={hasError || undefined}
        className={`${selectClass(hasError)} ${value ? '' : 'text-ink/45'}`}>
        
        {placeholder && <option value="">{placeholder}</option>}
        {children}
      </select>
      <ChevronDownIcon className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink/60" aria-hidden="true" />
    </div>);

}