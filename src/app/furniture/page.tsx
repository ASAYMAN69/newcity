
import { FurnitureList } from '@/components/furniture-list';

export default function FurniturePage() {
  return (
    <main className="container max-w-7xl mx-auto py-12 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold">Furnish Your <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">New Home</span></h1>
        <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
          Discover stylish and affordable furniture to make your new space feel like home.
        </p>
      </div>
      <FurnitureList />
    </main>
  );
}
