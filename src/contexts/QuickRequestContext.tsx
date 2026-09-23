import React, { createContext, useCallback, useContext, useMemo, useState } from 'react';
import type { CategorySlug } from '../types/content';

export interface QuickRequestPrefill {
  service?: string;
  location?: string;
  category?: CategorySlug;
}

interface QuickRequestContextValue {
  isOpen: boolean;
  prefill: QuickRequestPrefill;
  openCount: number;
  open: (prefill?: QuickRequestPrefill) => void;
  close: () => void;
}

const QuickRequestContext = createContext<QuickRequestContextValue | null>(null);

export function QuickRequestProvider({ children }: {children: React.ReactNode;}) {
  const [isOpen, setIsOpen] = useState(false);
  const [prefill, setPrefill] = useState<QuickRequestPrefill>({});
  const [openCount, setOpenCount] = useState(0);

  const open = useCallback((next?: QuickRequestPrefill) => {
    setPrefill(next ?? {});
    setOpenCount((c) => c + 1);
    setIsOpen(true);
  }, []);

  const close = useCallback(() => setIsOpen(false), []);

  const value = useMemo(() => ({ isOpen, prefill, openCount, open, close }), [isOpen, prefill, openCount, open, close]);

  return <QuickRequestContext.Provider value={value}>{children}</QuickRequestContext.Provider>;
}

export function useQuickRequestDrawer(): QuickRequestContextValue {
  const ctx = useContext(QuickRequestContext);
  if (!ctx) throw new Error('useQuickRequestDrawer must be used inside QuickRequestProvider');
  return ctx;
}