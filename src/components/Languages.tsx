
import React from 'react';

const Languages = () => {
  const languages = [
    { name: 'English', code: 'EN', flag: '🇺🇸', description: 'Professional English translation services' },
    { name: 'Spanish', code: 'ES', flag: '🇪🇸', description: 'Spanish document translation services' },
    { name: 'French', code: 'FR', flag: '🇫🇷', description: 'French translation by native speakers' },
    { name: 'German', code: 'DE', flag: '🇩🇪', description: 'German translation services' },
    { name: 'Italian', code: 'IT', flag: '🇮🇹', description: 'Italian document translation' },
    { name: 'Portuguese', code: 'PT', flag: '🇵🇹', description: 'Portuguese translation services' },
    { name: 'Russian', code: 'RU', flag: '🇷🇺', description: 'Russian translation by experts' },
    { name: 'Chinese', code: 'ZH', flag: '🇨🇳', description: 'Chinese translation services' },
    { name: 'Japanese', code: 'JP', flag: '🇯🇵', description: 'Japanese document translation' },
    { name: 'Korean', code: 'KR', flag: '🇰🇷', description: 'Korean translation services' },
    { name: 'Arabic', code: 'AR', flag: '🇸🇦', description: 'Arabic translation by native speakers' },
    { name: 'Hindi', code: 'HI', flag: '🇮🇳', description: 'Hindi translation services India' },
    { name: 'Kannada', code: 'KN', flag: '🇮🇳', description: 'Kannada translation services' },
    { name: 'Tamil', code: 'TA', flag: '🇮🇳', description: 'Tamil document translation' },
    { name: 'Telugu', code: 'TE', flag: '🇮🇳', description: 'Telugu translation services' },
    { name: 'Dutch', code: 'NL', flag: '🇳🇱', description: 'Dutch translation services' }
  ];

  const popularLanguagePairs = [
    'English to Hindi Translation',
    'English to Spanish Translation', 
    'English to French Translation',
    'Hindi to English Translation',
    'German to English Translation',
    'Chinese to English Translation'
  ];

  return (
    <section className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Professional Translation Services in 30+ Languages
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-6">
            LinguaSolutions India provides expert translation services across major global languages with 
            certified native-speaking translators. Our multilingual translation team ensures cultural accuracy 
            and linguistic precision for all your international communication needs.
          </p>
          <div className="text-sm text-muted-foreground max-w-3xl mx-auto">
            <strong>Available Language Services:</strong> Document Translation • Certified Translation • 
            Business Translation • Legal Translation • Medical Translation • Technical Translation
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 mb-12">
          {languages.map((language, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg p-4 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100 group"
              title={language.description}
            >
              <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">{language.flag}</div>
              <div className="font-semibold text-sm text-foreground">{language.name}</div>
              <div className="text-xs text-muted-foreground">{language.code}</div>
            </div>
          ))}
        </div>

        {/* Popular Language Pairs Section */}
        <div className="bg-white rounded-2xl p-8 mb-12 border border-blue-100">
          <h3 className="text-2xl font-bold text-center mb-6">Most Popular Translation Language Pairs</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {popularLanguagePairs.map((pair, index) => (
              <div key={index} className="bg-blue-50 rounded-lg p-4 text-center hover:bg-blue-100 transition-colors">
                <span className="font-medium text-blue-700">{pair}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Language-specific SEO Content */}
        <div className="bg-white rounded-2xl p-8 border border-blue-100">
          <h3 className="text-2xl font-bold text-center mb-6">Expert Native Language Translators</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
            <div>
              <h4 className="font-semibold mb-3 text-blue-600">European Language Translation Services</h4>
              <p className="text-muted-foreground mb-4">
                Professional translation services for European languages including French, German, Spanish, Italian, 
                Portuguese, Dutch, and Russian. Our certified European translators provide accurate document translation 
                for business, legal, and technical content with cultural localization.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-green-600">Asian Language Translation Services</h4>
              <p className="text-muted-foreground mb-4">
                Expert Asian language translation including Chinese (Mandarin/Cantonese), Japanese, Korean, Hindi, 
                Tamil, Telugu, Kannada, and Arabic. Native speakers ensure cultural accuracy and linguistic precision 
                for all Asian language translation projects.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-purple-600">Indian Regional Language Translation</h4>
              <p className="text-muted-foreground mb-4">
                Comprehensive Indian regional language translation services including Hindi, Tamil, Telugu, Kannada, 
                Malayalam, Bengali, Gujarati, Marathi, and more. Perfect for businesses expanding within India and 
                requiring local language support.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-orange-600">Rare Language Translation Services</h4>
              <p className="text-muted-foreground mb-4">
                Specialized translation services for rare and uncommon languages. Our extensive network of certified 
                translators covers over 100 languages including regional dialects and indigenous languages. Contact 
                us for custom language translation requirements.
              </p>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4 text-lg">
            Don't see your language listed? We translate in 100+ languages worldwide.
          </p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-blue-600 hover:text-blue-700 font-semibold hover:underline text-lg"
          >
            Contact us for custom language translation solutions
          </button>
        </div>
      </div>
    </section>
  );
};

export default Languages;
