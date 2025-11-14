import Image from 'next/image';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: 'Amina Ahmed',
    role: 'Moved to Dhaka',
    avatar: 'https://picsum.photos/seed/rev1/100/100',
    rating: 5,
    quote: 'New City made our move to Dhaka seamless. The local assistant was incredibly helpful, and we found the perfect apartment within a week. Highly recommended!',
  },
  {
    name: 'Rahim Khan',
    role: 'Student in Chittagong',
    avatar: 'https://picsum.photos/seed/rev2/100/100',
    rating: 5,
    quote: 'As a student, finding a good tutor and affordable books was crucial. The Student Support section was a lifesaver. I found an amazing physics tutor near my university.',
  },
  {
    name: 'The Rahman Family',
    role: 'Relocated to Sylhet',
    avatar: 'https://picsum.photos/seed/rev3/100/100',
    rating: 4,
    quote: "Finding a caterer that suited our family's taste was so easy with New City. The daily meals are delicious and feel just like home-cooked food. It saved us so much time!",
  },
];

export function CustomerReviews() {
  return (
    <section id="reviews" className="w-full max-w-7xl mx-auto py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">What Our Clients Say</h2>
          <p className="text-muted-foreground mt-4 max-w-3xl mx-auto">
            Real stories from people who have used New City to start their new lives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <Card key={index} className="flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
              <CardContent className="p-6 text-base text-foreground/80 italic">
                <p>"{review.quote}"</p>
              </CardContent>
              <CardHeader className="p-6 pt-0 mt-auto">
                <div className="flex items-center gap-4">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden">
                    <Image
                      src={review.avatar}
                      alt={`Avatar of ${review.name}`}
                      fill
                      className="object-cover"
                      data-ai-hint="person avatar"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-lg">{review.name}</p>
                    <p className="text-sm text-muted-foreground">{review.role}</p>
                     <div className="flex items-center gap-0.5 mt-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${
                            i < review.rating ? 'text-yellow-500 fill-yellow-500' : 'text-muted-foreground/30'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
