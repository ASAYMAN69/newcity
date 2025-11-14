import Image from 'next/image';
import Link from 'next/link';
import type { Furniture } from '@/lib/data';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Star, Sofa, Store } from 'lucide-react';
import { placeholderImages } from '@/lib/data';

type FurnitureCardProps = {
  furniture: Furniture;
};

export function FurnitureCard({ furniture }: FurnitureCardProps) {
  const placeholder = placeholderImages.find(p => p.id === `furniture-${furniture.id}`);
  return (
    <Link href={`/furniture/${furniture.id}`} className="block group">
      <Card className="overflow-hidden transition-transform duration-300 ease-in-out group-hover:-translate-y-2 group-hover:shadow-xl flex flex-col h-full">
        <CardHeader className="p-0">
          <div className="relative aspect-video">
            <Image
              src={placeholder?.imageUrl || `https://picsum.photos/seed/f${furniture.id}/600/400`}
              alt={`Photo of ${furniture.name}`}
              fill
              className="object-cover"
              data-ai-hint={placeholder?.imageHint || 'modern furniture'}
            />
          </div>
          <div className="p-4 pb-0">
            <CardTitle className="text-2xl font-bold text-primary">
              {furniture.name}
            </CardTitle>
            <p className="text-lg font-semibold">৳{furniture.price.toLocaleString()}</p>
          </div>
        </CardHeader>
        <CardContent className="p-4 flex-grow">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Sofa className="h-4 w-4 text-muted-foreground" />
              <span className="text-md font-semibold">{furniture.type}</span>
            </div>
             <div className="flex items-center gap-2">
                <Store className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm font-medium text-muted-foreground">{furniture.storeName}</span>
            </div>
          </div>
        </CardContent>
        <CardFooter className="p-4 pt-0">
          <Badge variant="secondary" className="flex items-center gap-1">
            <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
            <span>{furniture.rating.toFixed(1)}</span>
          </Badge>
        </CardFooter>
      </Card>
    </Link>
  );
}

    