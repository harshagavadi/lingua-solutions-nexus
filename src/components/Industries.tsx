
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const Industries = () => {
  const industries = [
    {
      name: 'Legal Translation Services',
      description: 'Certified legal document translation for contracts, court documents, immigration papers, and legal correspondence',
      color: 'bg-red-100 text-red-700',
      icon: '⚖️',
      details: 'Expert legal translators with law degrees and certification. Notarized and apostille services available.',
      keywords: 'legal translation services, certified legal translation, court document translation, immigration translation',
      image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&h=400&fit=crop&crop=center'
    },
    {
      name: 'Healthcare & Medical Translation',
      description: 'Specialized medical document translation for research papers, clinical trials, patient records, and pharmaceutical documentation',
      color: 'bg-green-100 text-green-700',
      icon: '🏥',
      details: 'HIPAA-compliant medical translators with healthcare industry experience and medical terminology expertise.',
      keywords: 'medical translation services, healthcare translation, pharmaceutical translation, clinical trial translation',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop&crop=center'
    },
    {
      name: 'Financial Services Translation',
      description: 'Banking documents, financial reports, investment materials, insurance documents, and regulatory filings',
      color: 'bg-blue-100 text-blue-700',
      icon: '💰',
      details: 'Certified financial translators with expertise in banking, insurance, investment, and regulatory compliance.',
      keywords: 'financial translation services, banking document translation, insurance translation, investment translation',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop&crop=center'
    },
    {
      name: 'Technology & Software Translation',
      description: 'Software documentation, user manuals, technical specifications, API documentation, and IT content',
      color: 'bg-purple-100 text-purple-700',
      icon: '💻',
      details: 'Technical translators with software development and IT industry background for accurate technology translation.',
      keywords: 'technical translation services, software translation, IT documentation translation, user manual translation',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop&crop=center'
    },
    {
      name: 'Education & Academic Translation',
      description: 'Academic papers, research documents, course materials, certifications, and educational content',
      color: 'bg-yellow-100 text-yellow-700',
      icon: '📚',
      details: 'Academic translators with advanced degrees and research experience in various educational fields.',
      keywords: 'academic translation services, educational translation, research paper translation, thesis translation',
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&h=400&fit=crop&crop=center'
    },
    {
      name: 'E-commerce & Marketing Translation',
      description: 'Product descriptions, marketing content, websites, promotional materials, and brand localization',
      color: 'bg-orange-100 text-orange-700',
      icon: '🛒',
      details: 'Marketing translators with e-commerce and digital marketing expertise for effective brand communication.',
      keywords: 'e-commerce translation, marketing translation services, website translation, product description translation',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&crop=center'
    }
  ];

  const additionalIndustries = [
    'Manufacturing & Engineering Translation',
    'Automotive Industry Translation', 
    'Tourism & Hospitality Translation',
    'Real Estate Document Translation',
    'Energy & Oil Gas Translation',
    'Fashion & Retail Translation',
    'Food & Agriculture Translation',
    'Government & Public Sector Translation'
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Industry-Specific Translation Services - All Sectors Covered
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-6">
            LinguaSolutions India provides specialized translation services across all industries with 
            expert translators who understand sector-specific terminology, compliance requirements, 
            and industry standards. From legal and medical to technology and finance, we deliver 
            accurate, professional translations tailored to your industry needs.
          </p>
          <div className="text-sm text-muted-foreground max-w-3xl mx-auto">
            <strong>Industry Expertise:</strong> Legal • Medical • Technology • Finance • Education • 
            Manufacturing • Government • E-commerce • Tourism • Real Estate
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {industries.map((industry, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-blue-200 overflow-hidden">
              {/* Industry Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={industry.image}
                  alt={industry.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                <div className={`absolute top-4 left-4 inline-flex items-center justify-center w-12 h-12 rounded-full ${industry.color} text-2xl`}>
                  {industry.icon}
                </div>
              </div>
              
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-foreground mb-3">{industry.name}</h3>
                <p className="text-muted-foreground mb-4">{industry.description}</p>
                <p className="text-sm text-muted-foreground mb-3">{industry.details}</p>
                <div className="text-xs text-gray-500 italic">
                  Keywords: {industry.keywords}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Industries Grid */}
        <div className="bg-blue-50 rounded-2xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-center mb-6">Additional Industries We Serve</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {additionalIndustries.map((industry, index) => (
              <div key={index} className="bg-white rounded-lg p-4 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <span className="font-medium text-blue-700">{industry}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Industry-specific SEO Content */}
        <div className="bg-white rounded-2xl p-8 border border-gray-100">
          <h3 className="text-2xl font-bold text-center mb-8">Why Choose Industry-Specific Translation Services?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
            <div>
              <h4 className="font-semibold mb-3 text-blue-600">Legal Translation Expertise</h4>
              <p className="text-muted-foreground mb-4">
                Our certified legal translators have law degrees and specialized training in legal terminology. 
                We provide accurate translation for contracts, court documents, immigration papers, patents, 
                and legal correspondence with notarization and apostille services available.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-green-600">Medical Translation Accuracy</h4>
              <p className="text-muted-foreground mb-4">
                HIPAA-compliant medical translators with healthcare industry experience translate clinical trials, 
                research papers, patient records, pharmaceutical documentation, and medical device manuals with 
                100% accuracy in medical terminology.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-purple-600">Technical Translation Precision</h4>
              <p className="text-muted-foreground mb-4">
                Technical translators with engineering and IT backgrounds provide accurate translation for 
                software documentation, user manuals, API guides, technical specifications, and engineering 
                drawings with industry-specific terminology expertise.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-orange-600">Business Translation Solutions</h4>
              <p className="text-muted-foreground mb-4">
                Professional business translators handle corporate communications, financial reports, marketing 
                materials, presentations, and business contracts with cultural adaptation for international 
                markets and compliance with local business practices.
              </p>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <button 
              onClick={() => document.getElementById('quote')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              Get Industry-Specific Translation Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;
