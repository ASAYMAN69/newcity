'use client';

import React, { useState, useMemo } from 'react';
import { furniture as allFurniture, type Furniture } from '@/lib/data';
import { FurnitureCard } from './furniture-card';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, ListFilter } from 'lucide-react';

type SortOption = 'price-desc' | 'price-asc';

export function FurnitureList() {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState<SortOption>('price-desc');
  const [typeFilter, setTypeFilter] = useState('all');

  const furnitureTypes = useMemo(() => {
    const allTypes = allFurniture.map(f => f.type);
    return ['all', ...Array.from(new Set(allTypes))];
  }, []);

  const processedFurniture = useMemo(() => {
    return allFurniture
      .filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .filter(item => 
        typeFilter === 'all' || item.type === typeFilter
      )
      .sort((a, b) => {
        if (sortOption === 'price-asc') {
          return a.price - b.price;
        }
        return b.price - a.price;
      });
  }, [searchTerm, sortOption, typeFilter]);

  return (
    <section id="furniture" className="w-full max-w-7xl mx-auto py-8 scroll-mt-20">
      <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-8 sticky top-16 bg-background/80 backdrop-blur-sm z-10 p-4 rounded-lg shadow-sm -mx-4">
        <div className="flex items-center gap-2 w-full md:max-w-md">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search by name or description"
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
                <div className="grid gap-2">
                  <Label>Type</Label>
                  <Select value={typeFilter} onValueChange={setTypeFilter}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        {furnitureTypes.map((type) => (
                          <SelectItem key={type} value={type}>
                            {type === 'all' ? 'All Types' : type}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>

      {processedFurniture.length > 0 ? (
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {processedFurniture.map((item) => (
            <FurnitureCard key={item.id} furniture={item} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <p className="text-xl text-muted-foreground">No furniture found for your search.</p>
        </div>
      )}
    </section>
  );
}

    