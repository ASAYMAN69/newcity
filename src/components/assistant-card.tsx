'use client';

import Image from 'next/image';
import Link from 'next/link';
import type { Assistant } from '@/lib/data';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { MapPin, Star, ArrowRight } from 'lucide-react';
import { placeholderImages } from '@/lib/data';

type AssistantCardProps = {
  assistant: Assistant;
};

export function AssistantCard({ assistant }: AssistantCardProps) {
  const placeholder = placeholderImages.find(p => p.id === `assistant-${assistant.id}`);

  return (
    <Link href={`/assistant/${assistant.id}`} className="block group">
      <Card className="text-center overflow-hidden transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl flex flex-col h-full">
        <CardHeader>
          <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-primary/20">
            <Image
              src={placeholder?.imageUrl || `https://picsum.photos/seed/a${assistant.id}/400/400`}
              alt={`Portrait of ${assistant.name}`}
              fill
              className="object-cover"
              data-ai-hint={placeholder?.imageHint || 'person portrait'}
            />
          </div>
          <CardTitle className="mt-4">{assistant.name}</CardTitle>
          <CardDescription className="flex items-center justify-center gap-1 text-muted-foreground">
            <MapPin className="h-4 w-4" />
            {assistant.location}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          <div className="flex justify-center items-center gap-2 mb-2">
              <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
              <span className="font-bold text-lg">{assistant.rating.toFixed(1)}</span>
          </div>
          <p className="text-xl font-semibold">৳{assistant.rate}/hr</p>
        </CardContent>
        <CardFooter>
          <Button variant="ghost" className="w-full text-primary group-hover:bg-primary/10">
            View Details <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
}
