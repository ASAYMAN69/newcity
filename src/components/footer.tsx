import Link from 'next/link';
import Image from 'next/image';
import { Button } from './ui/button';
import { Facebook, Twitter, Instagram } from 'lucide-react';

export function Footer() {
  const Logo = () => (
    <div className="flex items-center">
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
    </div>
  );

  return (
    <footer className="bg-muted/40 border-t mt-16">
      <div className="container max-w-7xl mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="mb-4 inline-block">
              <Logo />
            </Link>
            <p className="text-muted-foreground text-sm max-w-xs">
              Making your move to a new city seamless and stress-free. Your one-stop solution for relocation.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link href="/#rentals" className="text-sm text-muted-foreground hover:text-primary">Rent a House</Link></li>
              <li><Link href="/catering" className="text-sm text-muted-foreground hover:text-primary">Catering</Link></li>
              <li><Link href="/furniture" className="text-sm text-muted-foreground hover:text-primary">Furniture</Link></li>
              <li><Link href="/assistant" className="text-sm text-muted-foreground hover:text-primary">Local Assistants</Link></li>
              <li><Link href="/student-support" className="text-sm text-muted-foreground hover:text-primary">Student Support</Link></li>
            </ul>
          </div>
           <div>
            <h3 className="text-lg font-semibold mb-4">About</h3>
            <ul className="space-y-2">
              <li><Link href="/#portfolio" className="text-sm text-muted-foreground hover:text-primary">About Us</Link></li>
              <li><Link href="/#reviews" className="text-sm text-muted-foreground hover:text-primary">Testimonials</Link></li>
               <li><a href="mailto:contact@newcity.com" className="text-sm text-muted-foreground hover:text-primary">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex items-center gap-4">
                <Button variant="ghost" size="icon" asChild>
                    <a href="#" aria-label="Facebook">
                        <Facebook className="h-5 w-5" />
                    </a>
                </Button>
                 <Button variant="ghost" size="icon" asChild>
                    <a href="#" aria-label="Twitter">
                        <Twitter className="h-5 w-5" />
                    </a>
                </Button>
                 <Button variant="ghost" size="icon" asChild>
                    <a href="#" aria-label="Instagram">
                        <Instagram className="h-5 w-5" />
                    </a>
                </Button>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} New City. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
