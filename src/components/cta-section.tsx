import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Sparkles, ArrowRight } from 'lucide-react';

export function CtaSection() {
  return (
    <section className="w-full max-w-7xl mx-auto py-16">
      <div className="container mx-auto px-4">
        <Card className="bg-gradient-to-r from-primary to-accent text-primary-foreground overflow-hidden shadow-2xl">
          <div className="p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <Sparkles className="h-12 w-12 mb-4 mx-auto md:mx-0" />
              <h2 className="text-3xl md:text-4xl font-bold">
                Let Our AI Plan Your Perfect Move
              </h2>
              <p className="mt-4 text-lg max-w-2xl opacity-90">
                Overwhelmed with planning? Answer a few questions and our AI will generate a personalized relocation strategy and recommend the perfect local assistant for you—for free.
              </p>
            </div>
            <div className="flex-shrink-0">
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="text-lg px-8 py-6 shadow-lg transition-transform duration-300 hover:scale-105 bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              >
                <Link href="/planner">
                  Get Your Free Plan
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
