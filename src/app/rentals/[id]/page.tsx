import { houses } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { User, Star, ArrowLeft, BedDouble, Bath, Wifi, ParkingSquare, Utensils } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const amenityIcons: { [key: string]: React.ReactNode } = {
  'Wi-Fi': <Wifi className="h-4 w-4" />,
  'Air Conditioning': <div className="text-sm">AC</div>,
  'Parking': <ParkingSquare className="h-4 w-4" />,
  'Kitchen': <Utensils className="h-4 w-4" />,
  'Elevator': <ArrowLeft className="h-4 w-4 rotate-90" />,
  'Security': <Star className="h-4 w-4" />,
  '24/7 Security': <Star className="h-4 w-4" />,
  'Gated Community': <Star className="h-4 w-4" />,
  'Garden': <Star className="h-4 w-4" />,
  'Lake View': <Star className="h-4 w-4" />,
  'Gym': <Star className="h-4 w-4" />,
  'Pool': <Star className="h-4 w-4" />,
  'Family Friendly': <Star className="h-4 w-4" />,
  'Balcony': <Star className="h-4 w-4" />,
  'Sea View': <Star className="h-4 w-4" />,
  'TV': <Star className="h-4 w-4" />,
  'River View': <Star className="h-4 w-4" />,
  'Free Parking': <ParkingSquare className="h-4 w-4" />,
  'Breakfast Included': <Utensils className="h-4 w-4" />,
  'Tour Assistance': <Star className="h-4 w-4" />,
  'Beach Access': <Star className="h-4 w-4" />,
  'Restaurant': <Utensils className="h-4 w-4" />,
  'Mountain View': <Star className="h-4 w-4" />,
  'Hiking Trails': <Star className="h-4 w-4" />,
  'Historical Site Nearby': <Star className="h-4 w-4" />,
  'Basic Comforts': <Star className="h-4 w-4" />,
  'All Meals Included': <Utensils className="h-4 w-4" />,
  'Wildlife Viewing': <Star className="h-4 w-4" />,
  'High Security': <Star className="h-4 w-4" />
};


export default function HouseDetailPage({ params }: { params: { id: string } }) {
  const house = houses.find((h) => h.id.toString() === params.id);

  if (!house) {
    notFound();
  }

  return (
    <main className="container max-w-5xl mx-auto py-12 px-4">
      <Button variant="outline" asChild className="mb-8 inline-flex items-center">
        <Link href="/#rentals">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Listings
        </Link>
      </Button>

      <Card className="overflow-hidden">
        <Carousel className="w-full">
          <CarouselContent>
            {house.images.map((src, index) => (
              <CarouselItem key={index}>
                <div className="relative aspect-video w-full">
                  <Image
                    src={src}
                    alt={`View ${index + 1} of ${house.location}`}
                    fill
                    className="object-cover"
                    data-ai-hint="house interior"
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
              <CardTitle className="text-3xl font-bold">{house.location}</CardTitle>
              <div className="flex items-center gap-2 mt-2">
                <User className="h-4 w-4 text-muted-foreground" />
                <span className="text-md text-muted-foreground">Hosted by {house.owner}</span>
              </div>
            </div>
            <div className="text-left md:text-right mt-4 md:mt-0">
              <p className="text-3xl font-bold text-primary">
                ৳{house.price.toLocaleString()}
                <span className="text-lg font-normal text-muted-foreground">
                  {house.type === 'monthly' ? '/month' : '/night'}
                </span>
              </p>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-6 pt-0">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <h3 className="text-xl font-semibold mb-4 border-b pb-2">About this place</h3>
              <CardDescription className="text-base text-foreground leading-relaxed">
                {house.description}
              </CardDescription>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 border-b pb-2">Amenities</h3>
              <div className="grid grid-cols-2 gap-4">
                {house.amenities.map((amenity) => (
                  <div key={amenity} className="flex items-center gap-2 text-sm">
                    {amenityIcons[amenity] || <Star className="h-4 w-4" />}
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t">
             <h3 className="text-xl font-semibold mb-4">Property Details</h3>
             <div className="flex items-center gap-6 text-md">
                <div className="flex items-center gap-2">
                    <BedDouble className="h-5 w-5 text-primary" />
                    <span>{house.bedrooms} {house.bedrooms > 1 ? 'Bedrooms' : 'Bedroom'}</span>
                </div>
                 <div className="flex items-center gap-2">
                    <Bath className="h-5 w-5 text-primary" />
                    <span>{house.bathrooms} {house.bathrooms > 1 ? 'Bathrooms' : 'Bathroom'}</span>
                </div>
             </div>
          </div>
        </CardContent>
        <CardFooter className="bg-muted/50 p-6 flex justify-between items-center">
          <Badge variant="secondary" className="flex items-center gap-2 py-2 px-4 text-lg">
            <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
            <span className="font-bold">{house.rating.toFixed(1)}</span>
            <span className="text-sm text-muted-foreground ml-1">(Rating)</span>
          </Badge>
          <Button size="lg">Book Now</Button>
        </CardFooter>
      </Card>
    </main>
  );
}
