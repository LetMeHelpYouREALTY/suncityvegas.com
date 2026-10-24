/** Calendly events by page intent (scheduling_url values from the Calendly API). */
export const CALENDLY_EVENTS = {
  tour: 'https://calendly.com/drjanduffy/showing',
  seller: 'https://calendly.com/drjanduffy/listing-consultation',
} as const;

const SELLER_PATHS = ['/selling', '/blog/selling-home-sun-city-summerlin'];

/** Seller pages book the listing consultation; every other page books a tour. */
export function calendlyEventForPath(pathname: string): string {
  return SELLER_PATHS.some((p) => pathname === p || pathname.startsWith(`${p}/`))
    ? CALENDLY_EVENTS.seller
    : CALENDLY_EVENTS.tour;
}

/**
 * Adds UTM tags to a Calendly URL. utm_source is the bare domain so the
 * Calendly → FUB Worker can map the booking to this site.
 */
export function tagCalendlyUrl(url: string, medium: string, pathname = '/'): string {
  const u = new URL(url);
  u.searchParams.set('hide_gdpr_banner', '1');
  u.searchParams.set('utm_source', 'suncityvegas.com');
  u.searchParams.set('utm_medium', medium);
  u.searchParams.set('utm_campaign', pathname === '/' ? 'home' : pathname.slice(1));
  return u.toString();
}

/** Calendly URL for the page's intent, tagged with UTM. */
export function calendlyUrlFor(pathname: string, medium: string): string {
  return tagCalendlyUrl(calendlyEventForPath(pathname), medium, pathname);
}
