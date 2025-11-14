'use client';
import { Services } from '@/components/services';
import { useRouter } from 'next/navigation';

export default function ServicesPage() {
  const router = useRouter();

  const handleRentClick = () => {
    // This assumes you have a page or section for rentals.
    // Let's navigate to the root and scroll to the rentals section.
    router.push('/#rentals');
  };

  return (
    <main className="container max-w-7xl mx-auto py-12 px-4">
      <Services onRentClick={handleRentClick} />
    </main>
  );
}
