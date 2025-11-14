'use client';

import React, { useState, useMemo } from 'react';
import { caterers as allCaterers, type Caterer } from '@/lib/data';
import { CateringCard } from './catering-card';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Search, ListFilter } from 'lucide-react';

type SortOption = 'price-desc' | 'price-asc';

export function CateringList() {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState<SortOption>('price-desc');

  const processedCaterers = useMemo(() => {
    return allCaterers
      .filter(caterer =>
        caterer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        caterer.cuisine.toLowerCase().includes(searchTerm.toLowerCase()) ||
        caterer.location.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .sort((a, b) => {
        if (sortOption === 'price-asc') {
          return a.price_per_meal - b.price_per_meal;
        }
        return b.price_per_meal - a.price_per_meal;
      });
  }, [searchTerm, sortOption]);

  return (
    <section id="caterers" className="w-full max-w-7xl mx-auto py-8 scroll-mt-20">
      <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-8 sticky top-16 bg-background/80 backdrop-blur-sm z-10 p-4 rounded-lg shadow-sm -mx-4">
        <div className="flex items-center gap-2 w-full md:max-w-md">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search by name, cuisine, or location"
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" size="icon" className="shrink-0">
                <ListFilter className="h-4 w-4" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-64">
              <div className="grid gap-4">
                <div className="space-y-2">
                  <h4 className="font-medium leading-none">Filters</h4>
                  <p className="text-sm text-muted-foreground">
                    Adjust your search criteria.
                  </p>
                </div>
                <div className="grid gap-2">
                  <Label>Sort by Price</Label>
                  <RadioGroup value={sortOption} onValueChange={(value) => setSortOption(value as SortOption)}>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="price-desc" id="price-desc" />
                      <Label htmlFor="price-desc">High to Low</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="price-asc" id="price-asc" />
                      <Label htmlFor="price-asc">Low to High</Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>

      {processedCaterers.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {processedCaterers.map((caterer) => (
            <CateringCard key={caterer.id} caterer={caterer} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <p className="text-xl text-muted-foreground">No caterers found for your search.</p>
        </div>
      )}
    </section>
  );
}
