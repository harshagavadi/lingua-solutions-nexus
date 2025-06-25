
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'Global Tech Solutions Inc.',
      position: 'International Operations Director',
      content: 'LinguaSolutions India transformed our global expansion with exceptional technical translation services. Their software localization accuracy and cultural insights were invaluable for our international product launch across 15 countries.',
      rating: 5,
      project: 'Software Localization Project - 8 Languages',
      industry: 'Technology'
    },
    {
      name: 'Dr. Rajesh Patel',
      company: 'Advanced Medical Research Institute',
      position: 'Chief Research Officer',
      content: 'The precision and attention to detail in translating our clinical trial documentation was exceptional. Their medical translators understood complex pharmaceutical terminology perfectly, ensuring regulatory compliance across multiple countries.',
      rating: 5,
      project: 'Clinical Trial Documentation - FDA Submission',
      industry: 'Healthcare'
    },
    {
      name: 'Maria Rodriguez',
      company: 'International Legal Associates',
      position: 'Senior Partner',
      content: 'Their certified legal translation services have been crucial for our international litigation cases. Professional accuracy, perfect terminology, and delivered ahead of schedule every single time. Highly recommended for legal firms.',
      rating: 5,
      project: 'International Contract Translation - 12 Countries',
      industry: 'Legal'
    },
    {
      name: 'Ahmed Al-Mansouri',
      company: 'Emirates Business Group',
      position: 'CEO',
      content: 'Outstanding Arabic translation services for our business expansion in Middle East. The cultural adaptation and business terminology expertise helped us establish strong partnerships across Arab markets.',
      rating: 5,
      project: 'Business Documentation - Arabic Markets',
      industry: 'Business'
    },
    {
      name: 'Prof. Linda Chen',
      company: 'International University',
      position: 'Research Director',
      content: 'Excellent academic translation services for our research publications. Their translators have deep understanding of academic writing and research methodology, delivering publication-ready translations consistently.',
      rating: 5,
      project: 'Academic Research Papers - 6 Languages',
      industry: 'Education'
    },
    {
      name: 'Roberto Silva',
      company: 'Manufacturing Solutions Ltd.',
      position: 'Operations Manager',
      content: 'Perfect technical manual translation for our industrial equipment. The accuracy in engineering terminology and safety instructions was critical for our international operations. Exceptional service quality.',
      rating: 5,
      project: 'Technical Manual Translation - Safety Critical',
      industry: 'Manufacturing'
    }
  ];

  const stats = [
    { number: '500+', label: 'Satisfied Clients Worldwide' },
    { number: '98%', label: 'Client Retention Rate' },
    { number: '4.9/5', label: 'Average Client Rating' },
    { number: '24hrs', label: 'Average Response Time' }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Client Success Stories - Professional Translation Services Reviews
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
            Don't just take our word for it. Read what our valued clients say about LinguaSolutions India's 
            professional translation services. From Fortune 500 companies to small businesses, we deliver 
            exceptional translation quality that drives international success.
          </p>
          
          {/* Client Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => (
              <div key={index} className="bg-blue-50 rounded-lg p-4 hover:bg-blue-100 transition-colors">
                <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-1">{stat.number}</div>
                <div className="text-sm font-medium text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-blue-200">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-500 text-xl">★</span>
                  ))}
                  <span className="ml-2 text-sm text-muted-foreground">({testimonial.rating}/5)</span>
                </div>
                <p className="text-muted-foreground mb-6 italic leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="border-t pt-4">
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-blue-600 font-medium">{testimonial.position}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                  <div className="mt-2 text-xs bg-gray-100 rounded-full px-3 py-1 inline-block">
                    {testimonial.project}
                  </div>
                  <div className="mt-1 text-xs text-green-600 font-medium">
                    Industry: {testimonial.industry}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100">
          <h3 className="text-2xl font-bold text-center mb-6">Why 500+ Companies Trust LinguaSolutions India</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-blue-600 text-3xl mb-2">🏆</div>
              <h4 className="font-semibold mb-2">ISO 17100:2015 Certified</h4>
              <p className="text-sm text-muted-foreground">International quality standards for translation services</p>
            </div>
            <div className="text-center">
              <div className="text-green-600 text-3xl mb-2">⚡</div>
              <h4 className="font-semibold mb-2">Fast Turnaround</h4>
              <p className="text-sm text-muted-foreground">Same-day delivery available for urgent projects</p>
            </div>
            <div className="text-center">
              <div className="text-purple-600 text-3xl mb-2">🔒</div>
              <h4 className="font-semibold mb-2">100% Confidential</h4>
              <p className="text-sm text-muted-foreground">NDA protection and secure document handling</p>
            </div>
            <div className="text-center">
              <div className="text-orange-600 text-3xl mb-2">💰</div>
              <h4 className="font-semibold mb-2">Competitive Pricing</h4>
              <p className="text-sm text-muted-foreground">Best rates with volume discounts available</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <h3 className="text-2xl font-bold mb-4">Join 500+ Satisfied Clients Worldwide</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Experience the same professional translation quality that Fortune 500 companies trust. 
            Get your free quote today and see why we're India's #1 translation service provider.
          </p>
          <button 
            onClick={() => document.getElementById('quote')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            Get Your Free Translation Quote Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
