
'use server';
/**
 * @fileOverview An AI agent for creating personalized relocation plans.
 *
 * - generatePlan - A function that creates a relocation plan based on user needs.
 * - GeneratePlanInput - The input type for the generatePlan function.
 * - GeneratePlanOutput - The return type for the generatePlan function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';
import { assistants, houses, caterers, furniture, tutors, bookStores } from '@/lib/data';

const GeneratePlanInputSchema = z.object({
  destinationCity: z.string().describe('The city the user is moving to.'),
  budget: z.string().optional().describe('The user\'s estimated monthly budget for living expenses.'),
  needs: z.string().describe('A detailed description of the user\'s relocation needs, preferences, and situation.'),
});
export type GeneratePlanInput = z.infer<typeof GeneratePlanInputSchema>;

// Fresh instance per call: shared instances make genkit emit $ref/$defs, which the Gemini API rejects.
const recommendedItemSchema = () =>
  z.object({
    id: z.number().describe('The ID of the recommended item.'),
    name: z.string().describe('The name of the item or service.'),
    reason: z.string().describe('A brief explanation of why this item is recommended based on the user\'s needs.'),
  });

const GeneratePlanOutputSchema = z.object({
  plan: z.string().describe('A step-by-step, actionable relocation plan tailored to the user\'s needs. This should be concise and easy to follow.'),
  recommendedAssistant: recommendedItemSchema().describe('The most suitable local assistant from the provided list.'),
  recommendedHousing: recommendedItemSchema().optional().describe('The most suitable rental property. Recommend only if a strong match is found.'),
  recommendedCaterer: recommendedItemSchema().optional().describe('The most suitable caterer. Recommend only if a strong match is found.'),
  recommendedFurniture: recommendedItemSchema().optional().describe('A suitable piece of furniture. Recommend only if a strong match is found.'),
  otherRecommendations: z.string().optional().describe('Brief recommendations for other services like tutors or book stores if applicable based on user needs.'),
});
export type GeneratePlanOutput = z.infer<typeof GeneratePlanOutputSchema>;

export async function generatePlan(input: GeneratePlanInput): Promise<GeneratePlanOutput> {
  return relocationPlannerFlow(input);
}

const prompt = ai.definePrompt({
  name: 'relocationPlannerPrompt',
  input: { schema: GeneratePlanInputSchema },
  output: { schema: GeneratePlanOutputSchema },
  prompt: `You are an expert relocation planner for "New City", a service that helps people move to new cities in Bangladesh. Your goal is to create a helpful, personalized plan and recommend the best local assistant and other relevant services based on a structured analysis of the user's needs.

**User's Request:**
- Destination City: {{{destinationCity}}}
- Budget: {{{budget}}}
- Needs & Preferences: {{{needs}}}

**Your Task:**
Carefully analyze the user's request and the available data below. Then, generate a response in the required JSON format.

1.  **Create a Relocation Plan:** Develop a clear, step-by-step action plan for the user.
2.  **Recommend a Local Assistant:** From the list of assistants, select the single best match. Provide their ID, name, and a brief justification for your choice in the 'recommendedAssistant' field. This is a mandatory field.
3.  **Provide Specific Service Recommendations (Optional but Recommended):**
    *   If you find a strong match for housing, catering, or furniture, populate the corresponding 'recommended...' field with the item's ID, name, and your reasoning.
    *   If the user's needs mention anything related to education or books, provide a brief text recommendation in the 'otherRecommendations' field, mentioning specific stores or tutors by name.
    *   Do not recommend items that are a poor match for the user's stated needs.

**Available Data for Recommendations:**

**Assistants:**
{{#each assistants}}
- ID: {{id}}, Name: {{name}}, Location: {{location}}, Specialties: {{#each specialties}}{{{this}}}{{#unless @last}}, {{/unless}}{{/each}}, Rate: ৳{{rate}}/hr
{{/each}}

**Rental Properties:**
{{#each houses}}
- ID: {{id}}, Location: {{location}}, Price: ৳{{price}}/{{type}}, Bedrooms: {{bedrooms}}, Description: {{description}}
{{/each}}

**Caterers:**
{{#each caterers}}
- ID: {{id}}, Name: {{name}}, Cuisine: {{cuisine}}, Price: ৳{{price_per_meal}}/meal, Location: {{location}}
{{/each}}

**Furniture:**
{{#each furniture}}
- ID: {{id}}, Name: {{name}}, Type: {{type}}, Price: ৳{{price}}, Store: {{storeName}}
{{/each}}

**Tutors:**
{{#each tutors}}
- ID: {{id}}, Name: {{name}}, Subjects: {{#each subjects}}{{{this}}}{{#unless @last}}, {{/unless}}{{/each}}, Rate: ৳{{rate}}/month, Location: {{location}}
{{/each}}

**Book Stores:**
{{#each bookStores}}
- ID: {{id}}, Name: {{name}}, Location: {{location}}, Specializes in: {{#each specializes}}{{{this}}}{{#unless @last}}, {{/unless}}{{/each}}
{{/each}}

Now, generate the JSON output based on your analysis.
`,
});

// Function to shuffle an array
function shuffleArray<T>(array: T[]): T[] {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

const relocationPlannerFlow = ai.defineFlow(
  {
    name: 'relocationPlannerFlow',
    inputSchema: GeneratePlanInputSchema,
    outputSchema: GeneratePlanOutputSchema,
  },
  async (input) => {
    // Shuffle assistants to prevent positional bias
    const shuffledAssistants = shuffleArray([...assistants]);

    const { output } = await prompt({
        ...input,
        assistants: shuffledAssistants.map(a => ({
            id: a.id,
            name: a.name,
            location: a.location,
            specialties: a.specialties,
            rate: a.rate
        })),
        houses: houses.map(h => ({ ...h, priceAndType: `${h.price}/${h.type}` })),
        caterers,
        furniture,
        tutors,
        bookStores
    });
    return output!;
  }
);
