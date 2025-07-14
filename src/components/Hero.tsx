
import React from 'react';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';

const Hero = () => {
  const isMobile = useIsMobile();

  const scrollToQuote = () => {
    document.getElementById('quote')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400/20 rounded-full mix-blend-overlay filter blur-xl animate-pulse"></div>
      <div className="absolute bottom-1/3 right-1/3 w-48 h-48 bg-cyan-400/20 rounded-full mix-blend-overlay filter blur-xl animate-pulse"></div>
      
      {/* Language decoration elements */}
      <div className="absolute top-20 right-10 opacity-30 text-4xl font-bold text-white/20 transform rotate-12">
        हिन्दी
      </div>
      <div className="absolute bottom-40 left-10 opacity-30 text-3xl font-bold text-white/20 transform -rotate-12">
        中文
      </div>
      <div className="absolute top-1/3 left-10 opacity-30 text-2xl font-bold text-white/20 transform rotate-45">
        العربية
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Seamless Multipurpose Language Tool
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto font-light leading-relaxed">
            LinguaSol provides translation and localization solutions for Software, Website, App and ERP Systems.
          </p>
          
          <div className="mb-12">
            <Button 
              size={isMobile ? "default" : "lg"} 
              className="text-base sm:text-lg px-8 py-4 sm:px-12 sm:py-6 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
              onClick={scrollToQuote}
            >
              Get Linguify
            </Button>
          </div>
          
          {/* Illustration section */}
          <div className="relative max-w-3xl mx-auto mb-12">
            <div className="bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-3xl p-8 backdrop-blur-sm border border-white/10">
              <div className="flex justify-center items-center space-x-4 mb-6">
                {/* Laptop/Device representations */}
                <div className="w-32 h-20 bg-white/90 rounded-lg shadow-lg transform -rotate-6 hover:rotate-0 transition-transform duration-300">
                  <div className="w-full h-3 bg-gray-200 rounded-t-lg"></div>
                  <div className="p-2">
                    <div className="w-full h-2 bg-blue-200 rounded mb-1"></div>
                    <div className="w-3/4 h-2 bg-gray-200 rounded mb-1"></div>
                    <div className="w-1/2 h-2 bg-gray-200 rounded"></div>
                  </div>
                </div>
                <div className="w-32 h-20 bg-white/90 rounded-lg shadow-lg transform rotate-6 hover:rotate-0 transition-transform duration-300">
                  <div className="w-full h-3 bg-gray-200 rounded-t-lg"></div>
                  <div className="p-2">
                    <div className="w-full h-2 bg-green-200 rounded mb-1"></div>
                    <div className="w-2/3 h-2 bg-gray-200 rounded mb-1"></div>
                    <div className="w-4/5 h-2 bg-gray-200 rounded"></div>
                  </div>
                </div>
              </div>
              {/* Small character illustrations */}
              <div className="flex justify-center space-x-8">
                <div className="w-8 h-12 bg-gradient-to-b from-blue-400 to-blue-600 rounded-full opacity-80"></div>
                <div className="w-8 h-12 bg-gradient-to-b from-green-400 to-green-600 rounded-full opacity-80"></div>
                <div className="w-8 h-12 bg-gradient-to-b from-purple-400 to-purple-600 rounded-full opacity-80"></div>
              </div>
            </div>
          </div>
          
          {/* Bottom tagline */}
          <div className="text-xl sm:text-2xl md:text-3xl font-semibold text-white/90">
            Multilingual Tool for B2C
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
