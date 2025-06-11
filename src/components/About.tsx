
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
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About LinguaSolutions
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              With over a decade of experience in the translation industry, we've built our reputation 
              on delivering precise, culturally-appropriate translations that help businesses 
              communicate effectively across global markets.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
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
          
          <div className="space-y-6">
            <Card className="border-l-4 border-l-blue-600">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">Our Mission</h3>
                <p className="text-muted-foreground">
                  To break down language barriers and enable seamless global communication 
                  through expert translation and linguistic services.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-l-4 border-l-green-600">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">Our Vision</h3>
                <p className="text-muted-foreground">
                  To be the world's most trusted partner for professional translation 
                  and localization services, connecting cultures and businesses globally.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-l-4 border-l-purple-600">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">Our Values</h3>
                <p className="text-muted-foreground">
                  Quality, accuracy, cultural sensitivity, and client satisfaction 
                  are at the core of everything we do.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
