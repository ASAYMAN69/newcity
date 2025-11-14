import Image from 'next/image';
import Link from 'next/link';
import type { BookStore } from '@/lib/data';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { MapPin, Star } from 'lucide-react';
import { placeholderImages } from '@/lib/data';

type BookStoreCardProps = {
  store: BookStore;
};

export function BookStoreCard({ store }: BookStoreCardProps) {
  const placeholder = placeholderImages.find(p => p.id === `book-store-${store.id}`);
  return (
    <Link href={`/student-support/book-stores/${store.id}`} className="block group">
      <Card className="overflow-hidden transition-transform duration-300 ease-in-out group-hover:-translate-y-2 group-hover:shadow-xl flex flex-col h-full">
        <CardHeader className="p-0">
          <div className="relative aspect-video">
            <Image
              src={placeholder?.imageUrl || `https://picsum.photos/seed/bs${store.id}/600/400`}
              alt={`Photo of ${store.name}`}
              fill
              className="object-cover"
              data-ai-hint={placeholder?.imageHint || 'book store'}
            />
          </div>
          <div className="p-4 pb-0">
            <CardTitle className="text-2xl font-bold text-primary">
              {store.name}
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent className="p-4 flex-grow">
          <div className="space-y-3">
             <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm font-medium text-muted-foreground">{store.location}</span>
            </div>
            <CardDescription className="text-sm text-muted-foreground line-clamp-2">
              {store.description}
            </CardDescription>
          </div>
        </CardContent>
        <CardFooter className="p-4 pt-0">
          <Badge variant="secondary" className="flex items-center gap-1">
            <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
            <span>{store.rating.toFixed(1)}</span>
          </Badge>
        </CardFooter>
      </Card>
    </Link>
  );
}

    