
import React from 'react';

const Languages = () => {
  const languages = [
    { name: 'English', code: 'EN', flag: '🇺🇸' },
    { name: 'Spanish', code: 'ES', flag: '🇪🇸' },
    { name: 'French', code: 'FR', flag: '🇫🇷' },
    { name: 'German', code: 'DE', flag: '🇩🇪' },
    { name: 'Italian', code: 'IT', flag: '🇮🇹' },
    { name: 'Portuguese', code: 'PT', flag: '🇵🇹' },
    { name: 'Russian', code: 'RU', flag: '🇷🇺' },
    { name: 'Chinese', code: 'ZH', flag: '🇨🇳' },
    { name: 'Japanese', code: 'JP', flag: '🇯🇵' },
    { name: 'Korean', code: 'KR', flag: '🇰🇷' },
    { name: 'Arabic', code: 'AR', flag: '🇸🇦' },
    { name: 'Hindi', code: 'HI', flag: '🇮🇳' },
    { name: 'Kannada', code: 'KN', flag: '🇮🇳' },
    { name: 'Tamil', code: 'TA', flag: '🇮🇳' },
    { name: 'Telugu', code: 'TE', flag: '🇮🇳' },
    { name: 'Dutch', code: 'NL', flag: '🇳🇱' }
  ];

  return (
    <section className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            30+ Languages Supported
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We provide professional translation services across major global languages, 
            ensuring accurate communication for your international business needs.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
          {languages.map((language, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg p-4 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100"
            >
              <div className="text-3xl mb-2">{language.flag}</div>
              <div className="font-semibold text-sm text-foreground">{language.name}</div>
              <div className="text-xs text-muted-foreground">{language.code}</div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Need a language not listed?</p>
          <button className="text-blue-600 hover:text-blue-700 font-semibold hover:underline">
            Contact us for custom language solutions
          </button>
        </div>
      </div>
    </section>
  );
};

export default Languages;
