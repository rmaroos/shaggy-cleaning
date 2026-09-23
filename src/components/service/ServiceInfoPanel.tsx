import React from 'react';
import { CalendarIcon, ClockIcon, KeyRoundIcon, ClipboardCheckIcon, PhoneIcon } from 'lucide-react';
import { Button } from '../ui/Button';
import { contact } from '../../data/site';
import { useQuickRequestDrawer } from '../../contexts/QuickRequestContext';
import type { Service } from '../../types/content';

export function ServiceInfoPanel({ service }: {service: Service;}) {
  const { open } = useQuickRequestDrawer();
  const rows = [
  { label: 'Standard duration', value: service.info.duration, icon: ClockIcon },
  { label: 'Frequency options', value: service.info.frequency, icon: CalendarIcon },
  { label: 'Preparation', value: service.info.preparation, icon: ClipboardCheckIcon },
  { label: 'Access', value: service.info.access, icon: KeyRoundIcon }];

  return (
    <aside aria-labelledby="info-title" className="rounded-xl border border-ink/15 bg-white p-7 lg:sticky lg:top-28">
      <h2 id="info-title" className="font-display text-xl font-bold text-ink">Service information</h2>
      <dl className="mt-5">
        {rows.map((r) =>
        <div key={r.label} className="flex gap-3 border-t border-ink/10 py-4">
            <r.icon className="mt-0.5 h-4 w-4 shrink-0 text-ink/60" aria-hidden="true" />
            <div>
              <dt className="text-[13px] text-ink/55">{r.label}</dt>
              <dd className="mt-0.5 text-[15px] font-medium text-ink">{r.value}</dd>
            </div>
          </div>
        )}
      </dl>
      <div className="mt-3 flex flex-col gap-3">
        <Button onClick={() => open({ service: service.slug })} className="w-full">
          Request {service.name}
        </Button>
        <Button href={contact.phoneHref} variant="secondary" className="w-full">
          <PhoneIcon className="h-4 w-4" aria-hidden="true" />
          {contact.phone}
        </Button>
      </div>
    </aside>);

}