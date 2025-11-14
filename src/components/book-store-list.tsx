'use client';

import React, { useState, useMemo } from 'react';
import { bookStores as allBookStores } from '@/lib/data';
import { BookStoreCard } from './book-store-card';
import { Input } from './ui/input';
import { Search } from 'lucide-react';

export function BookStoreList() {
  const [searchTerm, setSearchTerm] = useState('');

  const processedBookStores = useMemo(() => {
    return allBookStores
      .filter(store =>
        store.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        store.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        store.specializes.some(s => s.toLowerCase().includes(searchTerm.toLowerCase()))
      );
  }, [searchTerm]);

  return (
    <section id="book-stores" className="w-full max-w-7xl mx-auto py-8 scroll-mt-20">
      <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-8 sticky top-16 bg-background/80 backdrop-blur-sm z-10 p-4 rounded-lg shadow-sm -mx-4">
        <div className="relative w-full md:max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search by name, location, or specialty"
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {processedBookStores.length > 0 ? (
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {processedBookStores.map((store) => (
            <BookStoreCard key={store.id} store={store} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <p className="text-xl text-muted-foreground">No book stores found for your search.</p>
        </div>
      )}
    </section>
  );
}

    