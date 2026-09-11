import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import { cn } from '@/lib/utils';

type BreadcrumbItem = {
  label: string;
  href: string;
};

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
  className?: string;
};

export default function Breadcrumbs({ items, className }: BreadcrumbsProps) {
  const baseUrl = 'https://www.suncityvegas.com';

  // Generate BreadcrumbList schema
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: `${baseUrl}${item.href}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema).replace(/</g, '\\u003c'),
        }}
      />
      <nav
        aria-label="Breadcrumb"
        className={cn('py-4 border-b border-[#B8A078]/20 bg-[#F7F6F4]', className)}
      >
        <div className="container mx-auto px-4">
          <ol className="flex items-center space-x-2 text-sm text-[#141210]">
            {items.map((item, index) => (
              <li key={item.href} className="flex items-center">
                {index > 0 && (
                  <ChevronRight className="w-4 h-4 mx-2 text-[#B8A078]" aria-hidden="true" />
                )}
                {index === 0 ? (
                  <Link
                    href={item.href}
                    className="flex items-center hover:text-[#1C1917] transition-colors"
                    aria-label={item.label}
                  >
                    <Home className="w-4 h-4 mr-1" />
                    <span className="sr-only">{item.label}</span>
                  </Link>
                ) : index === items.length - 1 ? (
                  <span className="text-[#1C1917] font-medium" aria-current="page">
                    {item.label}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="hover:text-[#1C1917] transition-colors"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>
    </>
  );
}
