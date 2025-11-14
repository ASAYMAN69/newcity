import { caterers } from '@/lib/data';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Star, ArrowLeft, Utensils, MapPin, Sparkles } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

export default function CatererDetailPage({ params }: { params: { id: string } }) {
  const caterer = caterers.find((c) => c.id.toString() === params.id);

  if (!caterer) {
    notFound();
  }

  return (
    <main className="container max-w-5xl mx-auto py-12 px-4">
      <Button variant="outline" asChild className="mb-8 inline-flex items-center">
        <Link href="/catering">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Caterers
        </Link>
      </Button>

      <Card className="overflow-hidden">
        <Carousel className="w-full">
          <CarouselContent>
            {caterer.images.map((src, index) => (
              <CarouselItem key={index}>
                <div className="relative aspect-video w-full">
                  <Image
                    src={src}
                    alt={`View ${index + 1} of ${caterer.name}`}
                    fill
                    className="object-cover"
                    data-ai-hint="food catering"
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
              <CardTitle className="text-3xl font-bold">{caterer.name}</CardTitle>
              <div className="flex items-center gap-4 mt-2 text-md text-muted-foreground">
                <div className="flex items-center gap-1">
                    <Utensils className="h-4 w-4" />
                    <span>{caterer.cuisine}</span>
                </div>
                 <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    <span>{caterer.location}</span>
                </div>
              </div>
            </div>
            <div className="text-left md:text-right mt-4 md:mt-0">
              <p className="text-3xl font-bold text-primary">
                ৳{caterer.price_per_meal.toLocaleString()}
                <span className="text-lg font-normal text-muted-foreground">
                  /meal
                </span>
              </p>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-6 pt-0">
            <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  <h3 className="text-xl font-semibold mb-4 border-b pb-2">About this Caterer</h3>
                  <CardDescription className="text-base text-foreground leading-relaxed mb-6">
                    {caterer.description}
                  </CardDescription>
                </div>
                 <div>
                    <h3 className="text-xl font-semibold mb-4 border-b pb-2">Specialties</h3>
                    <div className="flex flex-wrap gap-2">
                        {caterer.specialty.map((item) => (
                            <Badge key={item} variant="secondary" className="flex items-center gap-2 py-1 px-3 text-sm">
                                <Sparkles className="h-4 w-4 text-primary" />
                                <span>{item}</span>
                            </Badge>
                        ))}
                    </div>
                 </div>
            </div>
            <div className="mt-6 pt-6 border-t">
                <h3 className="text-2xl font-semibold mb-4 text-center">Weekly Meal Plan</h3>
                <div className="rounded-lg border">
                    <Table>
                        <TableHeader>
                            <TableRow>
                            <TableHead className="w-[120px] font-bold text-lg text-primary">Day</TableHead>
                            <TableHead className="font-bold">Breakfast</TableHead>
                            <TableHead className="font-bold">Lunch</TableHead>
                            <TableHead className="font-bold">Dinner</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {caterer.weekly_menu.map((menu) => (
                                <TableRow key={menu.day}>
                                <TableCell className="font-medium">{menu.day}</TableCell>
                                <TableCell>{menu.breakfast}</TableCell>
                                <TableCell>{menu.lunch}</TableCell>
                                <TableCell>{menu.dinner}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </div>
        </CardContent>
        <CardFooter className="bg-muted/50 p-6 flex justify-between items-center">
          <Badge variant="secondary" className="flex items-center gap-2 py-2 px-4 text-lg">
            <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
            <span className="font-bold">{caterer.rating.toFixed(1)}</span>
            <span className="text-sm text-muted-foreground ml-1">(Rating)</span>
          </Badge>
          <Button size="lg">Book Now</Button>
        </CardFooter>
      </Card>
    </main>
  );
}
