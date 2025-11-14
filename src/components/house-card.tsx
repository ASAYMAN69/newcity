import Image from 'next/image';
import Link from 'next/link';
import type { House } from '@/lib/data';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { MapPin, User, Star } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

type HouseCardProps = {
  house: House;
};

export function HouseCard({ house }: HouseCardProps) {
  const placeholder = PlaceHolderImages.find(p => p.id === house.id.toString());
  return (
    <Link href={`/rentals/${house.id}`} className="block group">
        <Card className="overflow-hidden transition-transform duration-300 ease-in-out group-hover:-translate-y-2 group-hover:shadow-xl flex flex-col h-full">
        <CardHeader className="p-0">
            <div className="relative aspect-video">
            <Image
                src={placeholder?.imageUrl || `https://picsum.photos/seed/${house.id}/600/400`}
                alt={`House in ${house.location}`}
                fill
                className="object-cover"
                data-ai-hint={placeholder?.imageHint || 'house exterior'}
            />
            </div>
            <div className="p-4 pb-0">
            <CardTitle className="text-2xl font-bold text-primary">
                ৳{house.price.toLocaleString()}{house.type === 'monthly' ? '/month' : '/night'}
            </CardTitle>
            </div>
        </CardHeader>
        <CardContent className="p-4 flex-grow">
            <div className="space-y-3">
            <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span className="text-md font-semibold">{house.location}</span>
            </div>
            <CardDescription className="text-sm text-muted-foreground line-clamp-2">
                {house.description}
            </CardDescription>
            <div className="flex items-center gap-2 pt-2">
                <User className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">{house.owner}</span>
            </div>
            </div>
        </CardContent>
        <CardFooter className="p-4 pt-0">
            <Badge variant="secondary" className="flex items-center gap-1">
            <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
            <span>{house.rating.toFixed(1)}</span>
            </Badge>
        </CardFooter>
        </Card>
    </Link>
  );
}
