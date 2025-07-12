
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
    { id: 'backlinks', label: 'Resources' },
    { id: 'contact', label: 'Contact' },
  ];

  const MobileNavigation = () => (
    <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden bg-gradient-to-br from-blue-100 to-purple-100 hover:from-blue-200 hover:to-purple-200 border border-blue-200 shadow-md">
          <Menu className="h-6 w-6 text-blue-600" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-gradient-to-br from-blue-50 to-purple-50">
        <SheetHeader>
          <SheetTitle className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Navigation</SheetTitle>
          <SheetDescription className="text-muted-foreground">
            Navigate to different sections of our website
          </SheetDescription>
        </SheetHeader>
        <nav className="flex flex-col space-y-2 mt-8">
          {navigationItems.map((item, index) => {
            const colors = [
              'hover:bg-blue-100 hover:text-blue-700 hover:border-blue-300',
              'hover:bg-purple-100 hover:text-purple-700 hover:border-purple-300', 
              'hover:bg-green-100 hover:text-green-700 hover:border-green-300',
              'hover:bg-orange-100 hover:text-orange-700 hover:border-orange-300',
              'hover:bg-pink-100 hover:text-pink-700 hover:border-pink-300',
              'hover:bg-indigo-100 hover:text-indigo-700 hover:border-indigo-300',
              'hover:bg-cyan-100 hover:text-cyan-700 hover:border-cyan-300',
              'hover:bg-teal-100 hover:text-teal-700 hover:border-teal-300'
            ];
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-left text-lg text-muted-foreground ${colors[index % colors.length]} transition-all duration-300 py-3 px-4 rounded-lg border border-transparent font-medium hover:shadow-md hover:scale-105`}
              >
                {item.label}
              </button>
            );
          })}
          <Button 
            onClick={() => scrollToSection('quote')} 
            className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 mt-6 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            size="lg"
          >
            ✨ Get Quote
          </Button>
        </nav>
      </SheetContent>
    </Sheet>
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-blue-50/95 via-white/95 to-purple-50/95 backdrop-blur-md border-b border-gradient-to-r from-blue-200 to-purple-200 supports-[backdrop-filter]:bg-gradient-to-r supports-[backdrop-filter]:from-blue-50/80 supports-[backdrop-filter]:via-white/80 supports-[backdrop-filter]:to-purple-50/80 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Logo />
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2 lg:space-x-4">
            {navigationItems.map((item, index) => {
              const colors = [
                'hover:text-blue-600 hover:bg-blue-50',
                'hover:text-purple-600 hover:bg-purple-50', 
                'hover:text-green-600 hover:bg-green-50',
                'hover:text-orange-600 hover:bg-orange-50',
                'hover:text-pink-600 hover:bg-pink-50',
                'hover:text-indigo-600 hover:bg-indigo-50',
                'hover:text-cyan-600 hover:bg-cyan-50',
                'hover:text-teal-600 hover:bg-teal-50'
              ];
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm lg:text-base text-muted-foreground ${colors[index % colors.length]} transition-all duration-300 hover:scale-110 hover:shadow-md px-3 py-2 rounded-full font-medium border border-transparent hover:border-current/20`}
                >
                  {item.label}
                </button>
              );
            })}
            <Button 
              onClick={() => scrollToSection('quote')} 
              className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white transition-all duration-300 hover:shadow-xl hover:scale-105 border-0 font-semibold"
              size={isMobile ? "sm" : "default"}
            >
              ✨ Get Quote
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
