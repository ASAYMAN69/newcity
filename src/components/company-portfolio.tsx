import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Award, Building, Users, Mail } from 'lucide-react';

export function CompanyPortfolio() {
  const achievements = [
    {
      icon: Users,
      value: '10,000+',
      label: 'Happy Clients',
    },
    {
      icon: Building,
      value: '5 Cities',
      label: 'Across the Nation',
    },
    {
      icon: Award,
      value: 'Top Rated',
      label: 'Relocation Service 2024',
    },
  ];

  return (
    <section id="portfolio" className="w-full max-w-7xl mx-auto py-16 bg-muted/40 rounded-lg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">About New City</h2>
          <p className="text-muted-foreground mt-4 max-w-3xl mx-auto">
            New City was founded with a simple mission: to make relocating to a new city as seamless and stress-free as possible. We connect you with trusted local services, from housing to expert assistance, ensuring you feel at home from day one.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {achievements.map((item, index) => (
            <Card key={index} className="text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
              <CardContent className="p-6 flex flex-col items-center">
                <item.icon className="h-12 w-12 text-primary mb-4" />
                <p className="text-3xl font-bold">{item.value}</p>
                <p className="text-muted-foreground">{item.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-2">Have Questions?</h3>
          <p className="text-muted-foreground mb-6">Our team is here to help you with your next big move.</p>
          <Button size="lg" asChild>
            <a href="mailto:contact@newcity.com">
              <Mail className="mr-2 h-5 w-5" />
              Contact Us
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
