
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Star, Shield, Clock } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Hero = () => {
  const isMobile = useIsMobile();

  const scrollToQuote = () => {
    document.getElementById('quote')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      {/* Hero Image */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
        <img 
          src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop&crop=center"
          alt="Professional translation services background"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="absolute top-20 left-4 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
      <div className="absolute top-40 right-4 sm:right-10 w-48 h-48 sm:w-72 sm:h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-5xl mx-auto animate-fade-in">
          {/* Trust Indicators */}
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-6 mb-6 sm:mb-8 text-xs sm:text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <Shield className="h-3 w-3 sm:h-4 sm:w-4 text-green-600" />
              <span>ISO 17100:2015 Certified Translation Company</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-500" />
              <span>4.9/5 Client Satisfaction Rating</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="h-3 w-3 sm:h-4 sm:w-4 text-blue-600" />
              <span>24/7 Translation Support</span>
            </div>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-bold text-foreground mb-4 sm:mb-6 leading-tight">
            #1 Professional Translation Services in India - {' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Certified & Accurate
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-6 sm:mb-8 max-w-4xl mx-auto font-light leading-relaxed px-2">
            Leading <strong>professional translation company in India</strong> offering certified document translation in <strong>30+ languages</strong>. 
            Expert legal, medical, technical translation services with <strong>98% accuracy guarantee</strong> and same-day delivery. 
            Trusted by 500+ businesses worldwide for accurate, affordable translation solutions.
          </p>
          
          {/* Key Value Propositions */}
          <div className="mb-6 sm:mb-8 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm font-medium">
              <div className="bg-white/80 rounded-lg p-3 border border-blue-100">
                <span className="text-blue-600">✓</span> Certified Translation Services
              </div>
              <div className="bg-white/80 rounded-lg p-3 border border-green-100">
                <span className="text-green-600">✓</span> Same Day Delivery Available
              </div>
              <div className="bg-white/80 rounded-lg p-3 border border-purple-100">
                <span className="text-purple-600">✓</span> Government Approved Translators
              </div>
              <div className="bg-white/80 rounded-lg p-3 border border-orange-100">
                <span className="text-orange-600">✓</span> Affordable Translation Rates
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-12 sm:mb-16 px-4">
            <Button 
              size={isMobile ? "default" : "lg"} 
              className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              onClick={scrollToQuote}
            >
              Get Free Translation Quote - 15 Minutes Response
            </Button>
            <Button 
              variant="outline" 
              size={isMobile ? "default" : "lg"} 
              className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 border-2 hover:bg-blue-50 transition-all duration-300 hover:shadow-lg"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Translation Services
            </Button>
          </div>
          
          {/* Enhanced Stats with SEO Keywords */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 text-center px-2">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800 mb-2 sm:mb-3 group-hover:scale-110 transition-transform">500+</div>
              <div className="text-sm sm:text-base text-muted-foreground font-medium">Successful Translation Projects</div>
              <div className="text-xs sm:text-sm text-muted-foreground mt-1 sm:mt-2">Across legal, medical, technical industries</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-800 mb-2 sm:mb-3 group-hover:scale-110 transition-transform">30+</div>
              <div className="text-sm sm:text-base text-muted-foreground font-medium">Languages Supported</div>
              <div className="text-xs sm:text-sm text-muted-foreground mt-1 sm:mt-2">Native certified translators available</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group sm:col-span-2 lg:col-span-1">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-800 mb-2 sm:mb-3 group-hover:scale-110 transition-transform">98%</div>
              <div className="text-sm sm:text-base text-muted-foreground font-medium">Translation Accuracy Rate</div>
              <div className="text-xs sm:text-sm text-muted-foreground mt-1 sm:mt-2">ISO certified quality assurance</div>
            </div>
          </div>

          {/* Service Keywords for SEO */}
          <div className="mt-8 sm:mt-12 text-xs sm:text-sm text-muted-foreground max-w-4xl mx-auto">
            <p className="leading-relaxed">
              <strong>Professional Services:</strong> Document Translation Services • Legal Translation India • Medical Translation Services • 
              Technical Translation • Certified Translation Services • Website Localization • Business Translation • Academic Translation • 
              Immigration Document Translation • Marriage Certificate Translation • Birth Certificate Translation • Passport Translation Services
            </p>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-5 w-5 sm:h-6 sm:w-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default Hero;
