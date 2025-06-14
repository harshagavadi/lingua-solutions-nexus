
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { useIsMobile } from '@/hooks/use-mobile';
import Logo from './Logo';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const navigationItems = [
    { id: 'services', label: 'Services' },
    { id: 'languages', label: 'Languages' },
    { id: 'industries', label: 'Industries' },
    { id: 'about', label: 'About' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'career', label: 'Career' },
    { id: 'contact', label: 'Contact' },
  ];

  const MobileNavigation = () => (
    <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <SheetHeader>
          <SheetTitle>Navigation</SheetTitle>
          <SheetDescription>
            Navigate to different sections of our website
          </SheetDescription>
        </SheetHeader>
        <nav className="flex flex-col space-y-4 mt-8">
          {navigationItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-left text-lg text-muted-foreground hover:text-foreground transition-colors py-2 border-b border-gray-100 last:border-b-0"
            >
              {item.label}
            </button>
          ))}
          <Button 
            onClick={() => scrollToSection('quote')} 
            className="bg-blue-600 hover:bg-blue-700 mt-4"
            size="lg"
          >
            Get Quote
          </Button>
        </nav>
      </SheetContent>
    </Sheet>
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Logo />
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-sm lg:text-base text-muted-foreground hover:text-foreground transition-colors duration-200 hover:scale-105"
              >
                {item.label}
              </button>
            ))}
            <Button 
              onClick={() => scrollToSection('quote')} 
              className="bg-blue-600 hover:bg-blue-700 transition-all duration-200 hover:shadow-lg"
              size={isMobile ? "sm" : "default"}
            >
              Get Quote
            </Button>
          </nav>
          
          {/* Mobile Navigation */}
          <MobileNavigation />
        </div>
      </div>
    </header>
  );
};

export default Header;
