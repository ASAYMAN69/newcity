
'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { LoaderCircle, Sparkles, Bot, User, ArrowRight, Home, Utensils, Sofa } from 'lucide-react';
import { generatePlan, type GeneratePlanOutput, type GeneratePlanInput } from '@/ai/flows/relocation-planner-flow';
import { AssistantCard } from '@/components/assistant-card';
import { HouseCard } from '@/components/house-card';
import { CateringCard } from '@/components/catering-card';
import { FurnitureCard } from '@/components/furniture-card';
import { assistants, houses, caterers, furniture } from '@/lib/data';

const formSchema = z.object({
  destinationCity: z.string().min(2, { message: 'Destination city is required.' }),
  budget: z.string().optional(),
  needs: z.string().min(10, { message: 'Please describe your needs in at least 10 characters.' }),
});

export default function PlannerPage() {
  const [plan, setPlan] = useState<GeneratePlanOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      destinationCity: '',
      budget: '',
      needs: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setError(null);
    setPlan(null);
    
    try {
      const result = await generatePlan(values as GeneratePlanInput);
      setPlan(result);
    } catch (e) {
      setError('Sorry, something went wrong while generating your plan. Please try again.');
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  }

  const recommendedAssistant = plan ? assistants.find(a => a.id === plan.recommendedAssistant.id) : null;
  const recommendedHousing = plan?.recommendedHousing ? houses.find(h => h.id === plan.recommendedHousing!.id) : null;
  const recommendedCaterer = plan?.recommendedCaterer ? caterers.find(c => c.id === plan.recommendedCaterer!.id) : null;
  const recommendedFurniture = plan?.recommendedFurniture ? furniture.find(f => f.id === plan.recommendedFurniture!.id) : null;

  const Recommendation = ({ icon, title, reason, children }: { icon: React.ReactNode, title: string, reason: string, children: React.ReactNode }) => (
    <div>
      <h3 className="font-bold text-lg mb-2 flex items-center gap-2">{icon} {title}</h3>
      <p className="text-sm text-muted-foreground mb-4 italic border-l-2 border-primary pl-3">"{reason}"</p>
      {children}
    </div>
  );

  return (
    <main className="container max-w-4xl mx-auto py-12 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold">
          AI <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Relocation Planner</span>
        </h1>
        <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
          Tell us what you need, and our AI assistant will create a personalized relocation plan and recommend the perfect local expert for you.
        </p>
      </div>

      <div className="flex flex-col items-center gap-8">
        <Card className="shadow-lg w-full max-w-2xl">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="h-6 w-6" /> Your Relocation Needs
            </CardTitle>
            <CardDescription>Fill out the form below to get started.</CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="destinationCity"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Destination City</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., Dhaka, Chittagong" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                 <FormField
                  control={form.control}
                  name="budget"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Estimated Monthly Budget (Optional)</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., ৳50,000" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="needs"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Describe Your Needs</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us what you're looking for. e.g., 'I am moving with my family of four and need a 3-bedroom apartment near a good school. We also need help setting up utilities and finding a reliable caterer.'"
                          className="min-h-[120px]"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        The more detail you provide, the better the plan will be.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" disabled={isLoading} className="w-full text-lg py-6">
                  {isLoading ? (
                    <LoaderCircle className="animate-spin" />
                  ) : (
                    <>
                      Generate My Plan <Sparkles className="ml-2 h-5 w-5" />
                    </>
                  )}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>

        <div className="w-full max-w-2xl mt-8">
          {isLoading && (
            <Card className="shadow-lg animate-pulse">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2"><Bot className="h-6 w-6"/> Your Personal Plan</CardTitle>
                    <CardDescription>Our AI is crafting your relocation strategy...</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="h-4 bg-muted rounded w-3/4"></div>
                    <div className="h-4 bg-muted rounded w-1/2"></div>
                    <div className="h-4 bg-muted rounded w-full"></div>
                    <div className="h-4 bg-muted rounded w-2/3"></div>
                </CardContent>
            </Card>
          )}

          {error && (
            <Card className="shadow-lg border-destructive">
                <CardHeader>
                    <CardTitle className="text-destructive">An Error Occurred</CardTitle>
                </CardHeader>
                <CardContent>
                    <p>{error}</p>
                </CardContent>
            </Card>
          )}

          {plan && !isLoading && (
            <Card className="shadow-lg">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2"><Bot className="h-6 w-6 text-primary"/> Your Personal Plan</CardTitle>
                    <CardDescription>Here is a step-by-step guide for your move.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
                    <div>
                        <h3 className="font-bold text-lg mb-2">Relocation Strategy</h3>
                        <p className="text-muted-foreground whitespace-pre-wrap">{plan.plan}</p>
                    </div>

                    {recommendedAssistant && (
                       <Recommendation 
                          icon={<User />}
                          title="Recommended Local Assistant"
                          reason={plan.recommendedAssistant.reason}
                       >
                         <AssistantCard assistant={recommendedAssistant} />
                       </Recommendation>
                    )}

                    {recommendedHousing && (
                       <Recommendation 
                          icon={<Home />}
                          title="Recommended Housing"
                          reason={plan.recommendedHousing!.reason}
                       >
                         <HouseCard house={recommendedHousing} />
                       </Recommendation>
                    )}

                    {recommendedCaterer && (
                       <Recommendation 
                          icon={<Utensils />}
                          title="Recommended Caterer"
                          reason={plan.recommendedCaterer!.reason}
                       >
                         <CateringCard caterer={recommendedCaterer} />
                       </Recommendation>
                    )}

                     {recommendedFurniture && (
                       <Recommendation 
                          icon={<Sofa />}
                          title="Recommended Furniture"
                          reason={plan.recommendedFurniture!.reason}
                       >
                         <FurnitureCard furniture={recommendedFurniture} />
                       </Recommendation>
                    )}

                    {plan.otherRecommendations && (
                        <div>
                            <h3 className="font-bold text-lg mb-2">Other Recommendations</h3>
                            <p className="text-muted-foreground whitespace-pre-wrap">{plan.otherRecommendations}</p>
                        </div>
                    )}
                </CardContent>
                 <CardFooter>
                    <Button asChild className="w-full">
                        <a href="/services">
                            Explore All Services <ArrowRight className="ml-2 h-4 w-4" />
                        </a>
                    </Button>
                </CardFooter>
            </Card>
          )}

        </div>
      </div>
    </main>
  );
}
