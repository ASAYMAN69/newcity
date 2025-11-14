
'use client';

import { AssistantList } from '@/components/assistant-list';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function AssistantPage() {
  const router = useRouter();

  return (
    <main className="container max-w-6xl mx-auto py-12 px-4">
       <Button variant="outline" onClick={() => router.back()} className="mb-8 inline-flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
        </Button>
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold">Hire a <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Local Assistant</span></h1>
        <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
          Get expert help from locals who know the city inside and out. They can help you find the perfect place, negotiate, and settle in smoothly.
        </p>
      </div>
      <AssistantList />
    </main>
  );
}
