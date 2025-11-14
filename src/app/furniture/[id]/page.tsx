import { furniture as allFurniture } from '@/lib/data';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Star, ArrowLeft, Sofa, Square, ShoppingCart } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

export default function FurnitureDetailPage({ params }: { params: { id: string } }) {
  const furniture = allFurniture.find((f) => f.id.toString() === params.id);

  if (!furniture) {
    notFound();
  }

  return (
    <main className="container max-w-5xl mx-auto py-12 px-4">
      <Button variant="outline" asChild className="mb-8 inline-flex items-center">
        <Link href="/furniture">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Furniture
        </Link>
      </Button>

      <Card className="overflow-hidden">
        <Carousel className="w-full">
          <CarouselContent>
            {furniture.images.map((src, index) => (
              <CarouselItem key={index}>
                <div className="relative aspect-video w-full">
                  <Image
                    src={src}
                    alt={`View ${index + 1} of ${furniture.name}`}
                    fill
                    className="object-cover"
                    data-ai-hint="modern furniture"
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
              <Badge variant="outline" className="mb-2">{furniture.type}</Badge>
              <CardTitle className="text-3xl font-bold">{furniture.name}</CardTitle>
            </div>
            <div className="text-left md:text-right mt-4 md:mt-0">
              <p className="text-3xl font-bold text-primary">
                ৳{furniture.price.toLocaleString()}
              </p>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-6 pt-0">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-xl font-semibold mb-4 border-b pb-2">About this Item</h3>
              <CardDescription className="text-base text-foreground leading-relaxed mb-6">
                {furniture.description}
              </CardDescription>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 border-b pb-2">Details</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2">
                    <Sofa className="h-4 w-4 text-primary" />
                    <span>Material: {furniture.material}</span>
                </div>
                <div className="flex items-center gap-2">
                    <Square className="h-4 w-4 text-primary" />
                    <span>Dimensions: {furniture.dimensions}</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="bg-muted/50 p-6 flex justify-between items-center">
          <Badge variant="secondary" className="flex items-center gap-2 py-2 px-4 text-lg">
            <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
            <span className="font-bold">{furniture.rating.toFixed(1)}</span>
            <span className="text-sm text-muted-foreground ml-1">(Rating)</span>
          </Badge>
          <Button size="lg" className="shadow-md">
            <ShoppingCart className="mr-2 h-5 w-5" />
            Add to Cart
          </Button>
        </CardFooter>
      </Card>
    </main>
  );
}

    