
import { CateringList } from '@/components/catering-list';

export default function CateringPage() {
  return (
    <main className="container max-w-7xl mx-auto py-12 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold">Find the <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Perfect Caterer</span></h1>
        <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
          From traditional feasts to modern cuisine, discover the best catering services for your next event.
        </p>
      </div>
      <CateringList />
    </main>
  );
}
