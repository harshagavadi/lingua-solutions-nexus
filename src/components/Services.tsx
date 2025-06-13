
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, BookOpen, Users, Pen, Image, Search } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: FileText,
      title: 'Document Translation',
      description: 'Professional legal, technical, marketing, and business document translation with certified accuracy for global compliance.',
      features: ['Legal Documents', 'Technical Manuals', 'Marketing Materials', 'Certified Translation'],
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      icon: BookOpen,
      title: 'Transcription Services',
      description: 'Accurate audio and video transcription in multiple languages with professional quality and fast turnaround.',
      features: ['Audio Transcription', 'Video Subtitles', 'Meeting Notes', 'Interview Transcripts'],
      gradient: 'from-green-500 to-green-600'
    },
    {
      icon: Users,
      title: 'Interpretation Services',
      description: 'Professional on-site and remote interpretation for meetings, conferences, and international business events.',
      features: ['Conference Interpreting', 'Business Meetings', 'Remote Sessions', 'Event Support'],
      gradient: 'from-purple-500 to-purple-600'
    },
    {
      icon: Pen,
      title: 'Localization Services',
      description: 'Comprehensive website, app, and software localization to effectively reach and engage global markets.',
      features: ['Website Localization', 'App Translation', 'Software UI', 'Cultural Adaptation'],
      gradient: 'from-orange-500 to-orange-600'
    },
    {
      icon: Image,
      title: 'Subtitling & Voice-over',
      description: 'Professional subtitling and voice-over services for multimedia content with native speaker quality.',
      features: ['Video Subtitles', 'Voice Recording', 'Dubbing Services', 'Media Localization'],
      gradient: 'from-pink-500 to-pink-600'
    },
    {
      icon: Search,
      title: 'Language Consultancy',
      description: 'Expert consultation on terminology management, style guides, and quality assurance for linguistic excellence.',
      features: ['Terminology Management', 'Style Guide Creation', 'Quality Assurance', 'Linguistic Review'],
      gradient: 'from-indigo-500 to-indigo-600'
    }
  ];

  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20 animate-slide-up">
          <h2 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-8">
            Our Professional Translation Services
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Comprehensive linguistic solutions tailored to your business needs. 
            From certified translation to expert localization, we ensure your message resonates globally with cultural precision.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-500 border-2 hover:border-transparent hover:-translate-y-2 bg-gradient-to-br from-white to-gray-50 overflow-hidden relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              <CardHeader className="text-center relative z-10">
                <div className={`mx-auto mb-6 p-4 bg-gradient-to-br ${service.gradient} rounded-2xl w-20 h-20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <service.icon className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-2xl font-display font-bold group-hover:text-blue-600 transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex items-center group-hover:text-foreground transition-colors">
                      <span className={`w-3 h-3 bg-gradient-to-r ${service.gradient} rounded-full mr-4 shadow-sm`}></span>
                      <span className="font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100">
            <h3 className="text-2xl font-display font-bold text-foreground mb-4">
              Need a Custom Translation Solution?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              We specialize in industry-specific terminology and can create tailored solutions for your unique requirements.
            </p>
            <button 
              onClick={() => document.getElementById('quote')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              Discuss Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
