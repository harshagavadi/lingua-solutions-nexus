
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, BookOpen, Users, Pen, Image, Search } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: FileText,
      title: 'Certified Document Translation Services',
      description: 'Professional certified translation for legal documents, immigration papers, academic certificates, and business contracts. Government-approved translators with notarization and apostille services available.',
      features: ['Legal Document Translation', 'Immigration Papers', 'Academic Certificate Translation', 'Notarized Translation Services'],
      gradient: 'from-blue-500 to-blue-600',
      keywords: 'certified translation, legal document translation, immigration translation, notarized translation India'
    },
    {
      icon: BookOpen,
      title: 'Audio & Video Transcription Services',
      description: 'Accurate multilingual transcription services for business meetings, interviews, podcasts, and video content. Professional quality with timestamps and speaker identification.',
      features: ['Business Meeting Transcription', 'Interview Transcription', 'Podcast Transcription', 'Video Subtitle Services'],
      gradient: 'from-green-500 to-green-600',
      keywords: 'transcription services India, audio transcription, video transcription, multilingual transcription'
    },
    {
      icon: Users,
      title: 'Professional Interpretation Services',
      description: 'Expert interpreters for conferences, business meetings, medical appointments, and legal proceedings. Available on-site and remotely with specialized industry knowledge.',
      features: ['Conference Interpreting', 'Medical Interpretation', 'Legal Interpretation', 'Business Meeting Support'],
      gradient: 'from-purple-500 to-purple-600',
      keywords: 'interpretation services, conference interpreter India, medical interpreter, legal interpreter'
    },
    {
      icon: Pen,
      title: 'Website & App Localization Services',
      description: 'Complete localization solutions for websites, mobile applications, and software platforms. Cultural adaptation, UI translation, and market-specific content optimization.',
      features: ['Website Localization', 'Mobile App Translation', 'Software UI Translation', 'E-commerce Localization'],
      gradient: 'from-orange-500 to-orange-600',
      keywords: 'website localization India, app translation services, software localization, e-commerce translation'
    },
    {
      icon: Image,
      title: 'Video Subtitling & Voice-over Services',
      description: 'Professional video translation with subtitling, dubbing, and voice-over services. Native speaker quality for marketing videos, training content, and multimedia presentations.',
      features: ['Video Subtitling Services', 'Professional Voice-over', 'Video Dubbing', 'Multimedia Localization'],
      gradient: 'from-pink-500 to-pink-600',
      keywords: 'video subtitling services, voice over services India, video dubbing, multimedia translation'
    },
    {
      icon: Search,
      title: 'Translation Quality Assurance & Consulting',
      description: 'Expert linguistic consultation, terminology management, and translation quality assurance. Style guide creation, glossary development, and ongoing translation project management.',
      features: ['Translation Quality Control', 'Terminology Management', 'Translation Consulting', 'Project Management'],
      gradient: 'from-indigo-500 to-indigo-600',
      keywords: 'translation quality assurance, linguistic consulting India, terminology management, translation project management'
    }
  ];

  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20 animate-slide-up">
          <h2 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-8">
            Professional Translation Services in India - Certified & Accurate
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-6">
            LinguaSolutions India offers comprehensive professional translation services with ISO 17100:2015 certification. 
            Our expert translators deliver accurate, culturally-adapted translations across 30+ languages for businesses, 
            legal firms, healthcare providers, and academic institutions worldwide.
          </p>
          <div className="text-sm text-muted-foreground max-w-3xl mx-auto">
            <strong>Specializing in:</strong> Legal Translation • Medical Translation • Technical Translation • 
            Business Translation • Academic Translation • Website Localization • Certified Document Translation
          </div>
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
                <ul className="space-y-3 mb-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex items-center group-hover:text-foreground transition-colors">
                      <span className={`w-3 h-3 bg-gradient-to-r ${service.gradient} rounded-full mr-4 shadow-sm`}></span>
                      <span className="font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="text-xs text-gray-500 italic">
                  Keywords: {service.keywords}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Enhanced Call to Action with SEO Content */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100">
            <h3 className="text-3xl font-display font-bold text-foreground mb-4">
              Why Choose LinguaSolutions India for Professional Translation Services?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6 text-left">
              <div>
                <h4 className="font-semibold text-blue-600 mb-2">Certified Excellence</h4>
                <p className="text-sm text-muted-foreground">ISO 17100:2015 certified translation company with government-approved translators</p>
              </div>
              <div>
                <h4 className="font-semibold text-green-600 mb-2">Fast Delivery</h4>
                <p className="text-sm text-muted-foreground">Same-day and express translation services available with 24/7 support</p>
              </div>
              <div>
                <h4 className="font-semibold text-purple-600 mb-2">Industry Expertise</h4>
                <p className="text-sm text-muted-foreground">Specialized translators for legal, medical, technical, and business domains</p>
              </div>
              <div>
                <h4 className="font-semibold text-orange-600 mb-2">Competitive Pricing</h4>
                <p className="text-sm text-muted-foreground">Affordable translation rates starting from ₹2 per word with volume discounts</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Get accurate, certified translation services from India's leading translation company. 
              Free quotes, fast turnaround, and 98% accuracy guarantee on all projects.
            </p>
            <button 
              onClick={() => document.getElementById('quote')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              Get Free Translation Quote - Instant Response
            </button>
          </div>
        </div>

        {/* SEO Content Section */}
        <div className="mt-16 bg-gray-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-center mb-6">Professional Translation Services Across All Industries</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm leading-relaxed">
            <div>
              <h4 className="font-semibold mb-3">Legal Translation Services India</h4>
              <p className="text-muted-foreground mb-4">
                Expert legal document translation for contracts, agreements, court documents, immigration papers, 
                and legal correspondence. Our certified legal translators ensure accuracy and compliance with 
                international legal standards.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Medical Translation Services</h4>
              <p className="text-muted-foreground mb-4">
                Specialized medical document translation for research papers, clinical trials, patient records, 
                pharmaceutical documentation, and medical device manuals. HIPAA-compliant and medically accurate translations.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Technical Translation Solutions</h4>
              <p className="text-muted-foreground mb-4">
                Technical manual translation, software documentation, engineering specifications, and user manuals. 
                Our technical translators have industry expertise in IT, engineering, manufacturing, and technology sectors.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Business Translation Services</h4>
              <p className="text-muted-foreground mb-4">
                Corporate document translation, marketing materials, financial reports, presentations, and business 
                correspondence. Perfect for companies expanding into international markets with culturally-adapted content.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
