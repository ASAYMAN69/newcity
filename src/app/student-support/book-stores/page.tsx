import { BookStoreList } from '@/components/book-store-list';

export default function BookStoresPage() {
  return (
    <main className="container max-w-7xl mx-auto py-12 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold">Find Local <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Book Stores</span></h1>
        <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
          Discover the best places to find academic textbooks, literature, and stationery.
        </p>
      </div>
      <BookStoreList />
    </main>
  );
}

    