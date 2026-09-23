import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '../../utils/cn';

type Variant = 'primary' | 'secondary' | 'inverse' | 'text';
type Size = 'sm' | 'md' | 'lg';

interface ButtonProps {
  variant?: Variant;
  size?: Size;
  to?: string;
  href?: string;
  type?: 'button' | 'submit';
  onClick?: (e: React.MouseEvent) => void;
  disabled?: boolean;
  className?: string;
  children: React.ReactNode;
  'aria-label'?: string;
}

const base =
'group inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold rounded-md transition-[background-color,color,border-color,transform] duration-150 ease-out active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-60';

const variants: Record<Variant, string> = {
  primary: 'bg-brand text-white hover:bg-brand/90',
  secondary: 'border-2 border-ink bg-white text-ink hover:bg-ink hover:text-white',
  inverse: 'border-2 border-white text-white hover:bg-white hover:text-ink focus-visible:ring-offset-ink',
  text: 'rounded-none px-0 text-ink hover:text-brand active:scale-100'
};

const sizes: Record<Size, string> = {
  sm: 'h-10 px-4 text-sm',
  md: 'h-11 px-5 text-[15px]',
  lg: 'h-[52px] px-7 text-base'
};

export function Button({ variant = 'primary', size = 'md', to, href, type = 'button', onClick, disabled, className, children, ...rest }: ButtonProps) {
  const classes = cn(base, variants[variant], variant === 'text' ? 'h-auto text-[15px]' : sizes[size], className);

  if (to) {
    return (
      <Link to={to} className={classes} onClick={onClick} aria-label={rest['aria-label']}>
        {children}
      </Link>);

  }
  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick} aria-label={rest['aria-label']}>
        {children}
      </a>);

  }
  return (
    <button type={type} className={classes} onClick={onClick} disabled={disabled} aria-label={rest['aria-label']}>
      {children}
    </button>);

}