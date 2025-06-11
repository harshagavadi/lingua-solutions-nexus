
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToQuote = () => {
    document.getElementById('quote')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            Expert Translation &{' '}
            <span className="text-blue-600">Linguistic Solutions</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Professional translation services in 30+ languages. From legal documents to marketing content, 
            we bridge language barriers with precision and cultural expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-xl transition-all"
              onClick={scrollToQuote}
            >
              Get Free Quote
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-6 border-2 hover:bg-blue-50 transition-all"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Our Services
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white/70 backdrop-blur-sm rounded-lg p-6 border border-white/30 shadow-lg hover:shadow-xl transition-all">
              <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-muted-foreground">Projects Completed</div>
            </div>
            <div className="bg-white/70 backdrop-blur-sm rounded-lg p-6 border border-white/30 shadow-lg hover:shadow-xl transition-all">
              <div className="text-3xl font-bold text-blue-600 mb-2">30+</div>
              <div className="text-muted-foreground">Languages Supported</div>
            </div>
            <div className="bg-white/70 backdrop-blur-sm rounded-lg p-6 border border-white/30 shadow-lg hover:shadow-xl transition-all">
              <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
              <div className="text-muted-foreground">Accuracy Rate</div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default Hero;
