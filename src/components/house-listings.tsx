
'use client';

import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import Link from 'next/link';
import { houses as allHouses, type House } from '@/lib/data';
import { HouseCard } from './house-card';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Search, LoaderCircle, Users, ListFilter } from 'lucide-react';

const BATCH_SIZE = 10;

type SortOption = 'price-desc' | 'price-asc';
type FilterOption = 'all' | 'monthly' | 'nightly';

type HouseListingsProps = {
  initialFilter?: FilterOption;
};

export function HouseListings({ initialFilter = 'all' }: HouseListingsProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState<SortOption>('price-desc');
  const [filterOption, setFilterOption] = useState<FilterOption>(initialFilter);
  
  const [displayedHouses, setDisplayedHouses] = useState<House[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const loader = useRef(null);

  useEffect(() => {
    setFilterOption(initialFilter);
  }, [initialFilter]);

  const processedHouses = useMemo(() => {
    return allHouses
      .filter(house =>
        house.location.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .filter(house => 
        filterOption === 'all' || house.type === filterOption
      )
      .sort((a, b) => {
        if (sortOption === 'price-asc') {
          return a.price - b.price;
        }
        return b.price - a.price;
      });
  }, [searchTerm, filterOption, sortOption]);
  
  useEffect(() => {
    setDisplayedHouses(processedHouses.slice(0, BATCH_SIZE));
    setPage(1);
  }, [processedHouses]);

  const loadMoreHouses = useCallback(() => {
    if (loading) return;

    const currentCount = page * BATCH_SIZE;
    if (currentCount < processedHouses.length) {
      setLoading(true);
      setTimeout(() => { // Simulate network delay
        const nextPage = page + 1;
        const nextBatch = processedHouses.slice(0, nextPage * BATCH_SIZE);
        setDisplayedHouses(nextBatch);
        setPage(nextPage);
        setLoading(false);
      }, 500);
    }
  }, [page, processedHouses, loading]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        loadMoreHouses();
      }
    }, { threshold: 0.5 });

    const currentLoader = loader.current;
    if (currentLoader) {
      observer.observe(currentLoader);
    }

    return () => {
      if (currentLoader) observer.unobserve(currentLoader);
    };
  }, [loader, loadMoreHouses]);
  
  const hasMore = displayedHouses.length < processedHouses.length;

  return (
    <section id="rentals" className="w-full max-w-7xl mx-auto py-8 scroll-mt-20">
      <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-8 sticky top-16 bg-background/80 backdrop-blur-sm z-10 p-4 rounded-lg shadow-sm -mx-4">
        <div className="flex items-center gap-2 w-full md:max-w-md">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search by location (e.g., Dhaka, Gulshan)"
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
                  <Label>Stay Type</Label>
                  <RadioGroup value={filterOption} onValueChange={(value) => setFilterOption(value as FilterOption)}>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="all" id="all" />
                      <Label htmlFor="all">All</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="monthly" id="monthly" />
                      <Label htmlFor="monthly">Per Month</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="nightly" id="nightly" />
                      <Label htmlFor="nightly">Per Night</Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>
        <Link href="/planner" passHref>
          <Button variant="outline" className="w-full md:w-auto">
            <Users className="mr-2 h-4 w-4" />
            Hire for me
          </Button>
        </Link>
      </div>

      {displayedHouses.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {displayedHouses.map((house) => (
            <HouseCard key={house.id} house={house} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <p className="text-xl text-muted-foreground">No houses found for your search.</p>
        </div>
      )}

      <div className="flex justify-center mt-12">
        {!hasMore && displayedHouses.length > 0 ? (
           <Link href="/planner" passHref>
            <Button variant="default" size="lg">
              Can't find the desired one? Hire for me.
            </Button>
          </Link>
        ) : null}
      </div>

      <div ref={loader} className="h-10 flex justify-center items-center">
        {loading && <LoaderCircle className="h-8 w-8 animate-spin text-primary" />}
      </div>
    </section>
  );
}
