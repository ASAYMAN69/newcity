'use client';

import React, { useState, useMemo } from 'react';
import { assistants as allAssistants, type Assistant } from '@/lib/data';
import { AssistantCard } from './assistant-card';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, ListFilter } from 'lucide-react';

type SortOption = 'rate-desc' | 'rate-asc';

export function AssistantList() {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState<SortOption>('rate-desc');
  const [locationFilter, setLocationFilter] = useState('all');

  const locations = useMemo(() => {
    const allLocations = allAssistants.map(a => a.location);
    return ['all', ...Array.from(new Set(allLocations))];
  }, []);

  const processedAssistants = useMemo(() => {
    return allAssistants
      .filter(assistant =>
        assistant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        assistant.specialties.some(s => s.toLowerCase().includes(searchTerm.toLowerCase()))
      )
      .filter(assistant => 
        locationFilter === 'all' || assistant.location === locationFilter
      )
      .sort((a, b) => {
        if (sortOption === 'rate-asc') {
          return a.rate - b.rate;
        }
        return b.rate - a.rate;
      });
  }, [searchTerm, sortOption, locationFilter]);

  return (
    <section id="assistants" className="w-full max-w-7xl mx-auto py-8 scroll-mt-20">
      <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-8 sticky top-16 bg-background/80 backdrop-blur-sm z-10 p-4 rounded-lg shadow-sm -mx-4">
        <div className="flex items-center gap-2 w-full md:max-w-md">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search by name or specialty"
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
                  <Label>Sort by Rate</Label>
                  <RadioGroup value={sortOption} onValueChange={(value) => setSortOption(value as SortOption)}>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="rate-desc" id="rate-desc" />
                      <Label htmlFor="rate-desc">High to Low</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="rate-asc" id="rate-asc" />
                      <Label htmlFor="rate-asc">Low to High</Label>
                    </div>
                  </RadioGroup>
                </div>
                <div className="grid gap-2">
                  <Label>Location</Label>
                  <Select value={locationFilter} onValueChange={setLocationFilter}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a location" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        {locations.map((loc) => (
                          <SelectItem key={loc} value={loc}>
                            {loc === 'all' ? 'All Locations' : loc}
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

      {processedAssistants.length > 0 ? (
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {processedAssistants.map((assistant) => (
            <AssistantCard key={assistant.id} assistant={assistant} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <p className="text-xl text-muted-foreground">No assistants found for your search.</p>
        </div>
      )}
    </section>
  );
}
