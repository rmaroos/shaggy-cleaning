import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDownIcon, PhoneIcon, XIcon } from 'lucide-react';
import { Logo } from '../ui/Logo';
import { Button } from '../ui/Button';
import { navItems, contact } from '../../data/site';
import { categories } from '../../data/categories';
import { locations } from '../../data/locations';
import { categoryPath, servicePath, servicesInCategory } from '../../utils/content';
import { cn } from '../../utils/cn';

const ease = [0.23, 1, 0.32, 1] as const;

export function MobileMenu({ open, onClose }: {open: boolean;onClose: () => void;}) {
  const [expanded, setExpanded] = useState<string | null>(null);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open &&
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        className="fixed inset-0 z-[70] flex flex-col bg-white xl:hidden"
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.2, ease }}>
        
          <div className="flex h-[76px] items-center justify-between border-b border-ink/10 px-5 md:px-8">
            <Logo />
            <button
            onClick={onClose}
            aria-label="Close menu"
            className="flex h-10 w-10 items-center justify-center rounded-md hover:bg-ink/[0.06] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand">
            
              <XIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-5 py-4 md:px-8">
            <ul>
              {navItems.map((item) => {
              const isOpen = expanded === item.label;
              return (
                <li key={item.to} className="border-b border-ink/10">
                    <div className="flex items-center justify-between">
                      <NavLink
                      to={item.to}
                      end={item.to === '/'}
                      onClick={onClose}
                      className={({ isActive }) =>
                      cn('flex-1 py-4 font-display text-xl font-bold', isActive ? 'text-brand' : 'text-ink')
                      }>
                      
                        {item.label}
                      </NavLink>
                      {item.menu &&
                    <button
                      onClick={() => setExpanded(isOpen ? null : item.label)}
                      aria-expanded={isOpen}
                      aria-label={`${isOpen ? 'Collapse' : 'Expand'} ${item.label}`}
                      className="flex h-11 w-11 items-center justify-center rounded-md hover:bg-ink/[0.06]">
                      
                          <ChevronDownIcon className={cn('h-5 w-5 transition-transform duration-200', isOpen && 'rotate-180 text-brand')} aria-hidden="true" />
                        </button>
                    }
                    </div>
                    <AnimatePresence initial={false}>
                      {item.menu && isOpen &&
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.22, ease }}
                      className="overflow-hidden">
                      
                          <div className="pb-5">
                            {item.menu === 'services' ?
                        <div className="grid gap-5 sm:grid-cols-3">
                                {categories.map((c) =>
                          <div key={c.slug}>
                                    <Link to={categoryPath(c.slug)} onClick={onClose} className="text-sm font-bold text-ink">
                                      {c.name}
                                    </Link>
                                    <ul className="mt-2 space-y-1.5">
                                      {servicesInCategory(c.slug).map((s) =>
                              <li key={s.slug}>
                                          <Link to={servicePath(s)} onClick={onClose} className="text-[15px] text-ink/70 hover:text-brand">
                                            {s.name}
                                          </Link>
                                        </li>
                              )}
                                    </ul>
                                  </div>
                          )}
                              </div> :

                        <ul className="space-y-2">
                                {locations.map((l) =>
                          <li key={l.slug}>
                                    <Link to={`/locations/${l.slug}`} onClick={onClose} className="text-[15px] text-ink/70 hover:text-brand">
                                      {l.name}
                                    </Link>
                                  </li>
                          )}
                              </ul>
                        }
                          </div>
                        </motion.div>
                    }
                    </AnimatePresence>
                  </li>);

            })}
            </ul>
          </nav>
          <div className="grid grid-cols-2 gap-3 border-t border-ink/10 px-5 py-4 pb-[max(1rem,env(safe-area-inset-bottom))] md:px-8">
            <Button href={contact.phoneHref} variant="secondary">
              <PhoneIcon className="h-4 w-4" aria-hidden="true" />
              Call Now
            </Button>
            <Button to="/get-a-free-quote" onClick={onClose}>
              Get a Free Quote
            </Button>
          </div>
        </motion.div>
      }
    </AnimatePresence>);

}