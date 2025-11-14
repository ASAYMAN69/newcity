import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Home, UtensilsCrossed, Sofa, Users, BookOpenCheck } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

type Service = {
  title: string;
  description: string;
  icon: React.ElementType;
  enabled: boolean;
  href?: string;
  onClick?: () => void;
};

type ServicesProps = {
  onRentClick: () => void;
};

export function Services({ onRentClick }: ServicesProps) {
  const services: Service[] = [
    {
      title: 'Rent a house',
      description: 'Find your perfect home',
      icon: Home,
      enabled: true,
      onClick: onRentClick,
    },
    {
      title: 'Catering',
      description: 'Delicious meals at your doorstep',
      icon: UtensilsCrossed,
      enabled: true,
      href: '/catering',
    },
    {
      title: 'Furnitures',
      description: 'Furnish your new home with ease',
      icon: Sofa,
      enabled: true,
      href: '/furniture'
    },
    {
      title: 'Local Assistance',
      description: 'Get help from local experts',
      icon: Users,
      enabled: true,
      href: '/assistant',
    },
     {
      title: 'Student Support',
      description: 'Find tutors and book stores',
      icon: BookOpenCheck,
      enabled: true,
      href: '/student-support',
    },
  ];

  const ServiceCard = ({ service }: { service: Service }) => {
    const isClickable = service.enabled && (service.href || service.onClick);

    const cardContent = (
      <Card
        onClick={service.onClick}
        className={cn(
          'group text-center transition-all duration-300 h-full',
          isClickable
            ? 'cursor-pointer hover:shadow-xl hover:-translate-y-2 hover:border-primary'
            : 'opacity-50 cursor-not-allowed bg-muted/50'
        )}
      >
        <CardHeader className="items-center">
          <div className="p-4 bg-primary/10 rounded-full mb-4 transition-colors duration-300 group-hover:bg-primary">
            <service.icon className="h-8 w-8 text-primary transition-colors duration-300 group-hover:text-primary-foreground" />
          </div>
          <CardTitle>{service.title}</CardTitle>
          <CardDescription>{service.description}</CardDescription>
        </CardHeader>
      </Card>
    );

    if (service.enabled && service.href) {
      return <Link href={service.href} className="block h-full">{cardContent}</Link>;
    }

    return cardContent;
  };


  return (
    <section className="w-full max-w-5xl mx-auto py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">Our Services</h2>
        <p className="text-muted-foreground mt-2">Everything you need for a smooth transition.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServiceCard key={service.title} service={service} />
        ))}
      </div>
    </section>
  );
}

    