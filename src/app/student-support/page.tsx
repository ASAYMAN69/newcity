
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { BookMarked, Users } from 'lucide-react';
import Link from 'next/link';

export default function StudentSupportPage() {
  const supportServices = [
    {
      title: 'Book Stores',
      description: 'Find academic and general books.',
      icon: BookMarked,
      href: '/student-support/book-stores',
    },
    {
      title: 'Local Tutors',
      description: 'Get help from expert tutors nearby.',
      icon: Users,
      href: '/student-support/tutors',
    },
  ];

  return (
    <main className="container max-w-4xl mx-auto py-12 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold">
          Student <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Support Hub</span>
        </h1>
        <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
          Essential resources for your academic journey. Find book stores and expert local tutors to help you succeed.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {supportServices.map((service) => (
          <Link href={service.href} key={service.title} className="block group">
            <Card className="text-center transition-all duration-300 h-full cursor-pointer hover:shadow-xl hover:-translate-y-2 hover:border-primary">
              <CardHeader className="items-center p-8">
                <div className="p-4 bg-primary/10 rounded-full mb-4 transition-colors duration-300 group-hover:bg-primary">
                  <service.icon className="h-10 w-10 text-primary transition-colors duration-300 group-hover:text-primary-foreground" />
                </div>
                <CardTitle className="text-2xl">{service.title}</CardTitle>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </main>
  );
}

    