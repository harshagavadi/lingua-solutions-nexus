import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

const About = () => {
  const achievements = [
    'ISO 17100:2015 Certified Translation Services',
    'Native speakers and certified translators',
    'Advanced CAT tools (SDL Trados, MemoQ)',
    'Quality assurance and revision process',
    '24/7 customer support availability',
    'Confidentiality and data security compliance'
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-blue-300/30 to-purple-300/30 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-gradient-to-br from-pink-300/30 to-orange-300/30 rounded-full blur-lg"></div>
      
      {/* Floating Icons */}
      <div className="absolute top-20 left-1/4 animate-float">
        <div className="w-12 h-12 bg-white/80 rounded-xl shadow-lg flex items-center justify-center backdrop-blur-sm">
          <span className="text-xl">🏆</span>
        </div>
      </div>
      <div className="absolute bottom-32 right-1/4 animate-bounce">
        <div className="w-10 h-10 bg-white/80 rounded-lg shadow-lg flex items-center justify-center backdrop-blur-sm">
          <span className="text-lg">✨</span>
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              About LinguaSolutions
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              With over a decade of experience in the translation industry, we've built our reputation 
              on delivering precise, culturally-appropriate translations that help businesses 
              communicate effectively across global markets.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our team of certified linguists, native speakers, and subject matter experts
              ensures every project meets the highest standards of quality and accuracy.
            </p>
            
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                  <span className="text-muted-foreground">{achievement}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            {/* Beautiful Image Collage */}
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl transform rotate-3 shadow-xl"></div>
              <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop&crop=center"
                  alt="Professional translation team"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6 space-y-4">
                  <Card className="border-l-4 border-l-blue-600 shadow-md hover:shadow-lg transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-3 mb-2">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                          <span className="text-blue-600">🎯</span>
                        </div>
                        <h3 className="text-lg font-bold text-foreground">Our Mission</h3>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        To break down language barriers and enable seamless global communication 
                        through expert translation and linguistic services.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-l-4 border-l-green-600 shadow-md hover:shadow-lg transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-3 mb-2">
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                          <span className="text-green-600">👁️</span>
                        </div>
                        <h3 className="text-lg font-bold text-foreground">Our Vision</h3>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        To be the world's most trusted partner for professional translation 
                        and localization services, connecting cultures and businesses globally.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-l-4 border-l-purple-600 shadow-md hover:shadow-lg transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-3 mb-2">
                        <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                          <span className="text-purple-600">💎</span>
                        </div>
                        <h3 className="text-lg font-bold text-foreground">Our Values</h3>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Quality, accuracy, cultural sensitivity, and client satisfaction 
                        are at the core of everything we do.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
              
              {/* Floating Achievement Badges */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-4 border-4 border-yellow-200 animate-bounce">
                <div className="text-center">
                  <div className="text-2xl mb-1">🏅</div>
                  <div className="text-xs font-bold text-yellow-600">ISO Certified</div>
                </div>
              </div>
              
              <div className="absolute top-6 -right-8 bg-white rounded-xl shadow-lg p-3 border-2 border-green-200 animate-pulse">
                <div className="text-center">
                  <div className="text-lg mb-1">⭐</div>
                  <div className="text-xs font-bold text-green-600">4.9/5 Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
