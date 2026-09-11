import { services } from "@/lib/services";

export const dynamic = "force-dynamic";

export async function GET() {
  const baseUrl = "https://www.suncityvegas.com";
  const serviceLines = services
    .map((service) => `- [${service.name}](${baseUrl}/services/${service.slug}): ${service.answer}`)
    .join("\n");
  const content = `# Sun City Summerlin 55+ Real Estate | Homes by Dr. Jan Duffy
> 55+ active adult real estate in Sun City Summerlin, Las Vegas, NV 89134
## About
Dr. Jan Duffy is a Nevada-licensed REALTOR® (S.0197614.LLC) with Berkshire Hathaway HomeServices Nevada Properties. Primary Google Business category: Real estate agent. Additional categories: Real estate agency, Retirement community, Real estate consultant.
- **Business:** Sun City Summerlin 55+ Real Estate | Homes by Dr. Jan Duffy
- **License:** Nevada S.0197614.LLC
- **Phone:** (702) 718-0043
- **SMS:** sms:+17027180043
- **Address:** 9406 Del Webb Boulevard, Las Vegas, NV 89134
- **Hours:** Daily 6:00 AM–9:00 PM (closed July 3–4, 2026)
- **Website:** ${baseUrl}
## Services
${serviceLines}
## Coverage Area
Sun City Summerlin, Summerlin, Centennial Hills, Providence, Skye Canyon, Kyle Canyon, Las Vegas, Henderson, North Las Vegas, Clark County, Nevada
## Key Pages
- [Home](${baseUrl}/)
- [Services](${baseUrl}/services)
- [Homes for Sale](${baseUrl}/homes-for-sale)
- [Contact](${baseUrl}/contact)
- [About](${baseUrl}/about)
## Contact
- **Call/Text:** (702) 718-0043
- **Website:** ${baseUrl}
`;
  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  });
}
