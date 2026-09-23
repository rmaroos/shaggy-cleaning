import React, { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDownIcon, MenuIcon, PhoneIcon } from 'lucide-react';
import { Logo } from '../ui/Logo';
import { Button } from '../ui/Button';
import { Container } from '../ui/Container';
import { ServicesMegaMenu } from './ServicesMegaMenu';
import { MobileMenu } from './MobileMenu';
import { navItems, contact } from '../../data/site';
import { locations } from '../../data/locations';
import { cn } from '../../utils/cn';

type Menu = 'services' | 'locations' | null;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menu, setMenu] = useState<Menu>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout>>();
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenu(null);
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menu) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setMenu(null);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [menu]);

  const openMenu = (m: Menu) => {
    clearTimeout(closeTimer.current);
    setMenu(m);
  };
  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setMenu(null), 120);
  };

  return (
    <header
      className={cn(
        'sticky top-0 z-50 border-b bg-white transition-[box-shadow,border-color] duration-200 ease-out',
        scrolled ? 'border-ink/10 shadow-float' : 'border-ink/10'
      )}
      onMouseLeave={scheduleClose}>
      
      <Container className="flex h-[76px] items-center justify-between gap-6 lg:h-[84px]">
        <Logo />

        <nav aria-label="Main" className="hidden xl:block">
          <ul className="flex items-center gap-1">
            {navItems.map((item) =>
            <li key={item.to} className="relative" onMouseEnter={() => item.menu ? openMenu(item.menu) : scheduleClose()}>
                <div className="flex items-center">
                  <NavLink
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) =>
                  cn(
                    'relative px-3 py-2 text-[15px] font-medium transition-colors duration-150 hover:text-brand',
                    'after:absolute after:inset-x-3 after:-bottom-[22px] after:h-0.5 after:bg-brand after:transition-transform after:duration-200 after:ease-out',
                    isActive ? 'text-ink after:scale-x-100' : 'text-ink after:scale-x-0',
                    item.menu && 'pr-1'
                  )
                  }>
                  
                    {item.label}
                  </NavLink>
                  {item.menu &&
                <button
                  aria-label={`Open ${item.label} menu`}
                  aria-expanded={menu === item.menu}
                  aria-controls={`menu-${item.menu}`}
                  onClick={() => setMenu(menu === item.menu ? null : item.menu)}
                  className="flex h-8 w-6 items-center justify-center rounded text-ink/60 hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand">
                  
                      <ChevronDownIcon
                    className={cn('h-4 w-4 transition-transform duration-200 ease-out', menu === item.menu && 'rotate-180')}
                    aria-hidden="true" />
                  
                    </button>
                }
                </div>
                {item.menu === 'locations' &&
              <AnimatePresence>
                    {menu === 'locations' &&
                <motion.div
                  id="menu-locations"
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.16, ease: [0.23, 1, 0.32, 1] }}
                  onMouseEnter={() => openMenu('locations')}
                  className="absolute left-0 top-full mt-[21px] w-72 rounded-b-lg border border-t-0 border-ink/10 bg-white p-3 shadow-float">
                  
                        <ul>
                          {locations.map((l) =>
                    <li key={l.slug}>
                              <Link
                        to={`/locations/${l.slug}`}
                        className="block rounded-md px-3 py-2.5 transition-colors duration-150 hover:bg-ink/[0.04]">
                        
                                <span className="block text-[15px] font-semibold text-ink">{l.name}</span>
                                <span className="block text-[13px] text-ink/55">{l.short}</span>
                              </Link>
                            </li>
                    )}
                        </ul>
                        <Link to="/locations" className="mt-1 block border-t border-ink/10 px-3 pt-3 text-sm font-semibold text-brand">
                          View all locations
                        </Link>
                      </motion.div>
                }
                  </AnimatePresence>
              }
              </li>
            )}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <Button href={contact.phoneHref} variant="secondary" size="sm" className="hidden lg:inline-flex">
            <PhoneIcon className="h-4 w-4" aria-hidden="true" />
            Call Now
          </Button>
          <Button to="/get-a-free-quote" size="sm" className="hidden md:inline-flex">
            Get a Free Quote
          </Button>
          <button
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            aria-expanded={mobileOpen}
            className="flex h-10 w-10 items-center justify-center rounded-md text-ink hover:bg-ink/[0.06] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand xl:hidden">
            
            <MenuIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {menu === 'services' &&
        <motion.div
          id="menu-services"
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.18, ease: [0.23, 1, 0.32, 1] }}
          onMouseEnter={() => openMenu('services')}
          className="absolute inset-x-0 top-full hidden border-b border-ink/10 bg-white shadow-float xl:block">
          
            <Container>
              <ServicesMegaMenu onNavigate={() => setMenu(null)} />
            </Container>
          </motion.div>
        }
      </AnimatePresence>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>);

}