import Script from 'next/script';
import { siteConfig } from '@/lib/site-config';
import { cfAbsoluteImage } from '@/lib/cf-image';

export default function SchemaMarkup() {
  const baseUrl = `https://www.${siteConfig.domain}`;

  // Organization Schema (matches GBP business name)
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${baseUrl}/#organization`,
    name: siteConfig.siteName,
    alternateName: ['Sun City Vegas Real Estate', 'Homes by Dr. Jan Duffy'],
    url: baseUrl,
    logo: cfAbsoluteImage('/images/logo/logo.jpg', baseUrl),
    telephone: siteConfig.phoneE164,
    email: siteConfig.agent.email,
    foundingDate: siteConfig.agent.openingDate,
    address: {
      '@type': 'PostalAddress',
      streetAddress: '9406 Del Webb Boulevard',
      addressLocality: 'Las Vegas',
      addressRegion: 'NV',
      postalCode: '89134',
      addressCountry: 'US',
    },
    sameAs: [
      siteConfig.social.facebook,
      siteConfig.social.instagram,
      siteConfig.social.linkedin,
      siteConfig.social.youtube,
      siteConfig.social.pinterest,
      siteConfig.social.tiktok,
      siteConfig.social.twitter,
    ],
    parentOrganization: {
      '@type': 'Organization',
      name: siteConfig.brokerage.name,
    },
  };

  // WebSite Schema with SearchAction (enables sitelinks search box)
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.siteName,
    url: baseUrl,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${baseUrl}/homes-for-sale?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.siteName,
      logo: {
        '@type': 'ImageObject',
        url: cfAbsoluteImage('/images/logo/logo.jpg', baseUrl),
      },
    },
  };

  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema).replace(/</g, '\\u003c'),
        }}
      />
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema).replace(/</g, '\\u003c'),
        }}
      />
    </>
  );
}
