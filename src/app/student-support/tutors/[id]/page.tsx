import { tutors } from '@/lib/data';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Star, ArrowLeft, MapPin, Sparkles, Phone, BookOpen, Briefcase } from 'lucide-react';

export default function TutorDetailPage({ params }: { params: { id: string } }) {
  const tutor = tutors.find((t) => t.id.toString() === params.id);

  if (!tutor) {
    notFound();
  }

  return (
    <main className="container max-w-4xl mx-auto py-12 px-4">
      <Button variant="outline" asChild className="mb-8 inline-flex items-center">
        <Link href="/student-support/tutors">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Tutors
        </Link>
      </Button>

      <Card className="overflow-hidden shadow-lg">
        <div className="grid md:grid-cols-3">
          <div className="md:col-span-1">
            <div className="relative h-full w-full min-h-[250px]">
              <Image
                src={tutor.images[0]}
                alt={`Portrait of ${tutor.name}`}
                fill
                className="object-cover"
                data-ai-hint="person portrait"
              />
            </div>
          </div>
          <div className="md:col-span-2">
            <CardHeader>
              <CardTitle className="text-4xl font-extrabold tracking-tight">{tutor.name}</CardTitle>
              <div className="flex items-center gap-2 mt-2 text-lg text-muted-foreground">
                  <MapPin className="h-5 w-5" />
                  <span>{tutor.location}</span>
              </div>
               <div className="flex items-center gap-2 mt-2 text-md text-muted-foreground">
                  <Briefcase className="h-5 w-5" />
                  <span>{tutor.experience} experience</span>
              </div>
              <div className="flex items-center gap-4 mt-4">
                  <Badge variant="secondary" className="flex items-center gap-2 py-2 px-4 text-md">
                      <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                      <span className="font-bold">{tutor.rating.toFixed(1)}</span>
                      <span className="text-sm text-muted-foreground ml-1">(Rating)</span>
                  </Badge>
                  <p className="text-2xl font-bold text-primary">
                    ৳{tutor.rate.toLocaleString()}
                    <span className="text-base font-normal text-muted-foreground">
                      /month
                    </span>
                  </p>
              </div>
            </CardHeader>
            <CardContent>
                <h3 className="text-xl font-semibold mb-3 border-b pb-2">About {tutor.name.split(' ')[0]}</h3>
                <CardDescription className="text-base text-foreground/80 leading-relaxed mb-6">
                    {tutor.description}
                </CardDescription>

                <h3 className="text-xl font-semibold mb-4 border-b pb-2">Subjects</h3>
                <div className="flex flex-wrap gap-3">
                {tutor.subjects.map((item) => (
                    <Badge key={item} variant="outline" className="flex items-center gap-2 py-1.5 px-4 text-sm font-medium border-primary/50 text-primary">
                        <BookOpen className="h-4 w-4" />
                        <span>{item}</span>
                    </Badge>
                ))}
                </div>
            </CardContent>
          </div>
        </div>
        <CardFooter className="bg-muted/40 p-6">
          <Button size="lg" className="w-full md:w-auto md:ml-auto text-lg py-6 px-8 shadow-md hover:shadow-lg transition-shadow">
            <Phone className="mr-3 h-5 w-5" />
            Contact {tutor.name.split(' ')[0]}
          </Button>
        </CardFooter>
      </Card>
    </main>
  );
}
