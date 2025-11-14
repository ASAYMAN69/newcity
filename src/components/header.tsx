
'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { ThemeToggle } from './theme-toggle';
import { cn } from '@/lib/utils';
import { NavigationMenu, NavigationMenuItem, NavigationMenuList, NavigationMenuLink, NavigationMenuTrigger, NavigationMenuContent } from './ui/navigation-menu';
import { buttonVariants } from './ui/button';
import { useIsMobile } from '@/hooks/use-mobile';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from './ui/sheet';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


export function Header() {
  const isMobile = useIsMobile();
  const pathname = usePathname();
  const [isSheetOpen, setIsSheetOpen] = React.useState(false);

  const isHomePage = pathname === '/';

  const Logo = () => (
    <>
      <Image 
        src="https://i.postimg.cc/HkwsKCjq/1758219798229.png"
        alt="New City Logo"
        width={120}
        height={40}
        className="object-contain"
      />
      <span className="text-2xl font-bold tracking-tight bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent -ml-8">
        New City
      </span>
    </>
  );

  if (isMobile) {
    return (
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
          <div className="w-10">
            {!isHomePage && (
              <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Open menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-full max-w-sm">
                    <div className="flex justify-between items-center mb-6">
                        <Link href="/" onClick={() => setIsSheetOpen(false)} className="flex items-center">
                          <Logo />
                        </Link>
                        <SheetClose asChild>
                             <Button variant="ghost" size="icon">
                                <X className="h-6 w-6" />
                                <span className="sr-only">Close menu</span>
                            </Button>
                        </SheetClose>
                    </div>
                  <nav className="flex flex-col space-y-2">
                     <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1" className="border-none">
                            <AccordionTrigger className={cn(buttonVariants({ variant: "ghost" }), "justify-between text-base font-normal")}>Residence</AccordionTrigger>
                            <AccordionContent className="pb-0 pl-4">
                                <div className="flex flex-col space-y-1">
                                    <Link href="/#rentals" className={cn(buttonVariants({ variant: "ghost" }), "justify-start text-base font-normal")} onClick={() => setIsSheetOpen(false)}>
                                        Per Month
                                    </Link>
                                    <Link href="/#rentals-nightly" className={cn(buttonVariants({ variant: "ghost" }), "justify-start text-base font-normal")} onClick={() => setIsSheetOpen(false)}>
                                        Per Night
                                    </Link>
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    <Link href="/catering" className={cn(buttonVariants({ variant: "ghost" }), "justify-start text-base font-normal")} onClick={() => setIsSheetOpen(false)}>
                      Catering
                    </Link>
                    <Link href="/furniture" className={cn(buttonVariants({ variant: "ghost" }), "justify-start text-base font-normal")} onClick={() => setIsSheetOpen(false)}>
                      Furniture
                    </Link>
                     <Link href="/student-support" className={cn(buttonVariants({ variant: "ghost" }), "justify-start text-base font-normal")} onClick={() => setIsSheetOpen(false)}>
                      Student Support
                    </Link>
                    <Link href="/assistant" className={cn(buttonVariants({ variant: "ghost" }), "justify-start text-base font-normal")} onClick={() => setIsSheetOpen(false)}>
                      Local Assistants
                    </Link>
                     <div className="pt-4">
                        <ThemeToggle />
                    </div>
                  </nav>
                </SheetContent>
              </Sheet>
            )}
          </div>
          
          <div className="flex-1 flex justify-center">
            <Link href="/" className="flex items-center">
                <Logo />
            </Link>
          </div>
          
          <div className="w-10">
            {isHomePage && <ThemeToggle />}
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
        <Link href="/" className="flex items-center">
           <Logo />
        </Link>

        <div className="flex items-center gap-4">
          {!isHomePage && (
            <NavigationMenu>
              <NavigationMenuList>
                  <NavigationMenuItem>
                      <NavigationMenuTrigger>Residence</NavigationMenuTrigger>
                      <NavigationMenuContent>
                          <ul className="grid w-[400px] gap-3 p-4 md:w-[200px] lg:w-[250px] ">
                               <ListItem href="/#rentals" title="Per Month">
                                  Find your next home for a long-term stay.
                              </ListItem>
                              <ListItem href="/#rentals-nightly" title="Per Night">
                                  Book a short stay for your vacation or trip.
                              </ListItem>
                          </ul>
                      </NavigationMenuContent>
                  </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink asChild className={cn(buttonVariants({ variant: "ghost" }), "transition-colors text-foreground")}>
                      <Link href="/catering">
                        Catering
                      </Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink asChild className={cn(buttonVariants({ variant: "ghost" }), "transition-colors text-foreground")}>
                      <Link href="/furniture">
                        Furniture
                      </Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
                 <NavigationMenuItem>
                    <NavigationMenuLink asChild className={cn(buttonVariants({ variant: "ghost" }), "transition-colors text-foreground")}>
                      <Link href="/student-support">
                        Student Support
                      </Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink asChild className={cn(buttonVariants({ variant: "ghost" }), "transition-colors text-foreground")}>
                      <Link href="/assistant">
                        Local Assistants
                      </Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          )}
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={props.href || '/'}
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
