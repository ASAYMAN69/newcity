import { bookStores } from '@/lib/data';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Star, ArrowLeft, MapPin, Sparkles, Phone } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

export default function BookStoreDetailPage({ params }: { params: { id: string } }) {
  const store = bookStores.find((s) => s.id.toString() === params.id);

  if (!store) {
    notFound();
  }

  return (
    <main className="container max-w-5xl mx-auto py-12 px-4">
      <Button variant="outline" asChild className="mb-8 inline-flex items-center">
        <Link href="/student-support/book-stores">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Book Stores
        </Link>
      </Button>

      <Card className="overflow-hidden">
        <Carousel className="w-full">
          <CarouselContent>
            {store.images.map((src, index) => (
              <CarouselItem key={index}>
                <div className="relative aspect-video w-full">
                  <Image
                    src={src}
                    alt={`View ${index + 1} of ${store.name}`}
                    fill
                    className="object-cover"
                    data-ai-hint="book store interior"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2" />
          <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2" />
        </Carousel>

        <CardHeader className="p-6">
          <div className="flex flex-col md:flex-row justify-between items-start gap-4">
            <div className="flex-1">
              <CardTitle className="text-3xl font-bold">{store.name}</CardTitle>
               <div className="flex items-center gap-2 mt-2 text-md text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>{store.location}</span>
                </div>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-6 pt-0">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-xl font-semibold mb-4 border-b pb-2">About this Store</h3>
              <CardDescription className="text-base text-foreground leading-relaxed mb-6">
                {store.description}
              </CardDescription>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 border-b pb-2">Specializes In</h3>
              <div className="flex flex-wrap gap-2">
                {store.specializes.map((item) => (
                    <Badge key={item} variant="secondary" className="flex items-center gap-2 py-1 px-3 text-sm">
                        <Sparkles className="h-4 w-4 text-primary" />
                        <span>{item}</span>
                    </Badge>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="bg-muted/50 p-6 flex justify-between items-center">
          <Badge variant="secondary" className="flex items-center gap-2 py-2 px-4 text-lg">
            <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
            <span className="font-bold">{store.rating.toFixed(1)}</span>
            <span className="text-sm text-muted-foreground ml-1">(Rating)</span>
          </Badge>
          <Button size="lg" className="shadow-md">
            <Phone className="mr-2 h-5 w-5" />
            Contact Store
          </Button>
        </CardFooter>
      </Card>
    </main>
  );
}

    