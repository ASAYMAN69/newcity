'use client';

import { useRouter } from 'next/navigation';
import { Hero } from '@/components/hero';
import { CompanyPortfolio } from '@/components/company-portfolio';
import { CustomerReviews } from '@/components/customer-reviews';
import { CtaSection } from '@/components/cta-section';

export default function Home() {
  const router = useRouter();

  return (
    <main className="flex flex-col items-center justify-start min-h-[calc(100vh-4rem)] p-4 sm:p-8 md:p-12 space-y-16">
      <Hero onCTAClick={() => router.push('/services')} />
      <CompanyPortfolio />
      <CustomerReviews />
      <CtaSection />
    </main>
  );
}
