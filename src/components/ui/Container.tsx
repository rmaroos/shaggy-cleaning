import React from 'react';
import { cn } from '../../utils/cn';

export function Container({ className, children }: {className?: string;children: React.ReactNode;}) {
  return <div className={cn('mx-auto w-full max-w-site px-5 md:px-8 lg:px-12', className)}>{children}</div>;
}