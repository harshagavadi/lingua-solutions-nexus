
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, BookOpen, Users, Pen, Image, Search } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: FileText,
      title: 'Document Translation',
      description: 'Legal, technical, marketing, and business document translation with certified accuracy.',
      features: ['Legal Documents', 'Technical Manuals', 'Marketing Materials', 'Certified Translation']
    },
    {
      icon: BookOpen,
      title: 'Transcription Services',
      description: 'Audio and video transcription in multiple languages with professional quality.',
      features: ['Audio Transcription', 'Video Subtitles', 'Meeting Notes', 'Interview Transcripts']
    },
    {
      icon: Users,
      title: 'Interpretation',
      description: 'On-site and remote interpretation services for meetings, conferences, and events.',
      features: ['Conference Interpreting', 'Business Meetings', 'Remote Sessions', 'Event Support']
    },
    {
      icon: Pen,
      title: 'Localization',
      description: 'Website, app, and software localization to reach global markets effectively.',
      features: ['Website Localization', 'App Translation', 'Software UI', 'Cultural Adaptation']
    },
    {
      icon: Image,
      title: 'Subtitling & Voice-over',
      description: 'Professional subtitling and voice-over services for multimedia content.',
      features: ['Video Subtitles', 'Voice Recording', 'Dubbing Services', 'Media Localization']
    },
    {
      icon: Search,
      title: 'Language Consultancy',
      description: 'Expert consultation on terminology, style guides, and quality assurance.',
      features: ['Terminology Management', 'Style Guide Creation', 'Quality Assurance', 'Linguistic Review']
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Professional Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive linguistic solutions tailored to your business needs. 
            From translation to localization, we ensure your message resonates globally.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-blue-200">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                  <service.icon className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex items-center">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
