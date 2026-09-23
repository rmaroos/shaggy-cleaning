import { cn } from './cn';

export function fieldClass(hasError?: boolean, extra?: string): string {
  return cn(
    'block w-full h-12 rounded border bg-white px-3.5 text-[15px] text-ink placeholder:text-ink/40',
    'transition-[border-color,box-shadow] duration-150 ease-out',
    'focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand',
    'disabled:bg-ink/[0.04] disabled:text-ink/40',
    hasError ? 'border-brand' : 'border-ink/20 hover:border-ink/40',
    extra
  );
}

export function selectClass(hasError?: boolean): string {
  return fieldClass(hasError, 'appearance-none pr-10 cursor-pointer');
}