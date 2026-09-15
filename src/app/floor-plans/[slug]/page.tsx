import { redirect } from 'next/navigation';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  robots: { index: false, follow: true },
};

// Redirect individual floor plan pages to main home styles page
// Sun City Summerlin is a resale community without specific builder floor plans
export default function FloorPlanPage() {
  redirect('/floor-plans');
}

export async function generateStaticParams() {
  return [];
}
