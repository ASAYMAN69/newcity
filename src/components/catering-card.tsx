import Image from 'next/image';
import Link from 'next/link';
import type { Caterer } from '@/lib/data';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { MapPin, Star, Utensils } from 'lucide-react';
import { placeholderImages } from '@/lib/data';

type CateringCardProps = {
  caterer: Caterer;
};

export function CateringCard({ caterer }: CateringCardProps) {
  const placeholder = placeholderImages.find(p => p.id === `caterer-${caterer.id}`);
  return (
    <Link href={`/catering/${caterer.id}`} className="block group">
      <Card className="overflow-hidden transition-transform duration-300 ease-in-out group-hover:-translate-y-2 group-hover:shadow-xl flex flex-col h-full">
        <CardHeader className="p-0">
          <div className="relative aspect-video">
            <Image
              src={placeholder?.imageUrl || `https://picsum.photos/seed/c${caterer.id}/600/400`}
              alt={`Food from ${caterer.name}`}
              fill
              className="object-cover"
              data-ai-hint={placeholder?.imageHint || 'food catering'}
            />
          </div>
          <div className="p-4 pb-0">
            <CardTitle className="text-2xl font-bold text-primary">
              {caterer.name}
            </CardTitle>
            <p className="text-lg font-semibold">৳{caterer.price_per_meal.toLocaleString()}/meal</p>
          </div>
        </CardHeader>
        <CardContent className="p-4 flex-grow">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Utensils className="h-4 w-4 text-muted-foreground" />
              <span className="text-md font-semibold">{caterer.cuisine}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-muted-foreground" />
              <span className="text-md font-semibold">{caterer.location}</span>
            </div>
            <CardDescription className="text-sm text-muted-foreground line-clamp-2">
              {caterer.description}
            </CardDescription>
          </div>
        </CardContent>
        <CardFooter className="p-4 pt-0">
          <Badge variant="secondary" className="flex items-center gap-1">
            <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
            <span>{caterer.rating.toFixed(1)}</span>
          </Badge>
        </CardFooter>
      </Card>
    </Link>
  );
}
