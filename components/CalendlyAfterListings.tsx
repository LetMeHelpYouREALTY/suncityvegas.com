'use client';

import { usePathname } from 'next/navigation';
import { Calendar } from 'lucide-react';
import { calendlyUrlFor } from '@/lib/calendly';

/** Booking strip placed directly after the RealScout listings widget. */
export default function CalendlyAfterListings() {
  const pathname = usePathname() || '/';
  const url = calendlyUrlFor(pathname, 'after-listings');

  const open = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || !window.Calendly) return;
    event.preventDefault();
    window.Calendly.initPopupWidget({ url });
  };

  return (
    <div className="mx-auto my-8 flex max-w-5xl flex-col items-center justify-between gap-4 rounded-lg border border-stone-200 bg-[#F7F6F4] px-6 py-5 sm:flex-row">
      <p className="text-base text-stone-800">
        See a home you like? Pick a time to tour it with Dr. Jan Duffy.
      </p>
      <a
        href={url}
        onClick={open}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex min-h-[48px] items-center gap-2 rounded-md bg-[#1C1917] px-6 py-3 text-sm font-semibold text-white hover:bg-black"
      >
        <Calendar className="h-5 w-5" aria-hidden="true" />
        Schedule a tour
      </a>
    </div>
  );
}
