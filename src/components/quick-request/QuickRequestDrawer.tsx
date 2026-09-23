import React, { useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { PhoneIcon, XIcon } from 'lucide-react';
import { QuickRequestForm } from './QuickRequestForm';
import { useQuickRequestDrawer } from '../../contexts/QuickRequestContext';
import { contact } from '../../data/site';

const ease = [0.23, 1, 0.32, 1] as const;

export function QuickRequestDrawer() {
  const { isOpen, close, prefill, openCount } = useQuickRequestDrawer();
  const closeRef = useRef<HTMLButtonElement>(null);
  const restoreRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!isOpen) return;
    restoreRef.current = document.activeElement as HTMLElement;
    document.body.style.overflow = 'hidden';
    const t = setTimeout(() => closeRef.current?.focus(), 50);
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && close();
    window.addEventListener('keydown', onKey);
    return () => {
      clearTimeout(t);
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
      restoreRef.current?.focus();
    };
  }, [isOpen, close]);

  return (
    <AnimatePresence>
      {isOpen &&
      <div className="fixed inset-0 z-[60]">
          <motion.div
          className="absolute inset-0 bg-ink/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease }}
          onClick={close}
          aria-hidden="true" />
        
          <motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby="drawer-title"
          className="absolute inset-y-0 right-0 flex w-full max-w-[480px] flex-col bg-white shadow-float"
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ duration: 0.28, ease }}>
          
            <div className="flex items-start justify-between gap-4 border-b border-ink/10 px-6 py-5">
              <div>
                <h2 id="drawer-title" className="font-display text-2xl font-bold text-ink">Request a cleaning service</h2>
                <p className="mt-1 text-sm text-ink/60">Takes under a minute. Free, no obligation.</p>
              </div>
              <button
              ref={closeRef}
              onClick={close}
              aria-label="Close request form"
              className="-mr-2 flex h-10 w-10 shrink-0 items-center justify-center rounded-md text-ink transition-colors duration-150 hover:bg-ink/[0.06] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand">
              
                <XIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto px-6 py-6">
              <QuickRequestForm
              key={openCount}
              layout="stacked"
              defaultService={prefill.service}
              defaultLocation={prefill.location}
              priorityCategory={prefill.category}
              onNavigate={close} />
            
            </div>
            <div className="border-t border-ink/10 px-6 py-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
              <a href={contact.phoneHref} className="flex items-center justify-center gap-2 text-sm font-semibold text-ink hover:text-brand">
                <PhoneIcon className="h-4 w-4" aria-hidden="true" />
                Prefer to talk? Call {contact.phone}
              </a>
            </div>
          </motion.div>
        </div>
      }
    </AnimatePresence>);

}