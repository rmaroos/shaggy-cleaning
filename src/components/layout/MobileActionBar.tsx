import React from 'react';
import { PhoneIcon } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { contact } from '../../data/site';
import { useQuickRequestDrawer } from '../../contexts/QuickRequestContext';
import { getService } from '../../utils/content';
import { locations } from '../../data/locations';

export function MobileActionBar() {
  const { open } = useQuickRequestDrawer();
  const { pathname } = useLocation();
  if (pathname.startsWith('/get-a-free-quote')) return null;

  const segments = pathname.split('/').filter(Boolean);
  const handleRequest = () => {
    if (segments[0] === 'services' && segments[2]) return open({ service: getService(segments[2])?.slug });
    if (segments[0] === 'services' && segments[1]) return open({ category: segments[1] as 'residential' | 'commercial' | 'specialised' });
    if (segments[0] === 'locations' && segments[1]) {
      const loc = locations.find((l) => l.slug === segments[1]);
      return open({ location: loc && loc.slug !== 'other-service-areas' ? loc.name.replace('Greater ', '') : undefined });
    }
    open();
  };

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-3 border-t border-ink/10 bg-white px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] shadow-float md:hidden">
      <a
        href={contact.phoneHref}
        className="flex h-12 items-center justify-center gap-2 rounded-md border-2 border-ink text-[15px] font-semibold text-ink active:scale-[0.98]">
        
        <PhoneIcon className="h-4 w-4" aria-hidden="true" />
        Call Now
      </a>
      <button
        onClick={handleRequest}
        className="flex h-12 items-center justify-center rounded-md bg-brand text-[15px] font-semibold text-white active:scale-[0.98]">
        
        Request Service
      </button>
    </div>);

}