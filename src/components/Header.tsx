import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Logo />
          
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('services')} className="text-muted-foreground hover:text-foreground transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection('languages')} className="text-muted-foreground hover:text-foreground transition-colors">
              Languages
            </button>
            <button onClick={() => scrollToSection('industries')} className="text-muted-foreground hover:text-foreground transition-colors">
              Industries
            </button>
            <button onClick={() => scrollToSection('about')} className="text-muted-foreground hover:text-foreground transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="text-muted-foreground hover:text-foreground transition-colors">
              Testimonials
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </button>
            <Button onClick={() => scrollToSection('quote')} className="bg-blue-600 hover:bg-blue-700">
              Get Quote
            </Button>
          </nav>
          
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('services')} className="text-left text-muted-foreground hover:text-foreground transition-colors">
                Services
              </button>
              <button onClick={() => scrollToSection('languages')} className="text-left text-muted-foreground hover:text-foreground transition-colors">
                Languages
              </button>
              <button onClick={() => scrollToSection('industries')} className="text-left text-muted-foreground hover:text-foreground transition-colors">
                Industries
              </button>
              <button onClick={() => scrollToSection('about')} className="text-left text-muted-foreground hover:text-foreground transition-colors">
                About
              </button>
              <button onClick={() => scrollToSection('testimonials')} className="text-left text-muted-foreground hover:text-foreground transition-colors">
                Testimonials
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-left text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </button>
              <Button onClick={() => scrollToSection('quote')} className="bg-blue-600 hover:bg-blue-700 w-full">
                Get Quote
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
