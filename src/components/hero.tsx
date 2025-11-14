import { Button } from '@/components/ui/button';
import { MoveRight } from 'lucide-react';
import Image from 'next/image';

type HeroProps = {
  onCTAClick: () => void;
};

export function Hero({ onCTAClick }: HeroProps) {
  return (
    <section className="w-full">
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center py-20 md:py-32">
        <div className="text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground">
            Travelling to a New city?{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                New City
            </span>{' '}
            is with you
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl">
            We streamline your move, connecting you with essential services to make you feel at home, faster.
            </p>
            <div className="mt-10">
            <Button
                size="lg"
                className="text-lg px-8 py-6 shadow-lg transition-transform duration-300 hover:scale-105"
                onClick={onCTAClick}
            >
                Let&apos;s move in <MoveRight className="ml-2 h-5 w-5" />
            </Button>
            </div>
        </div>
        <div className="group relative h-80 lg:h-full w-full rounded-2xl overflow-hidden order-first lg:order-last shadow-2xl">
            <Image
                src="https://picsum.photos/seed/hero/800/600"
                alt="Happy people moving to a new city"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                data-ai-hint="people moving city"
            />
            <div className="absolute inset-0 bg-blue-600/30 mix-blend-multiply"></div>
        </div>
      </div>
    </section>
  );
}
