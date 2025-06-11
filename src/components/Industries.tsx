
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const Industries = () => {
  const industries = [
    {
      name: 'Legal',
      description: 'Contracts, court documents, legal correspondence',
      color: 'bg-red-100 text-red-700',
      icon: '⚖️'
    },
    {
      name: 'Healthcare',
      description: 'Medical records, research papers, pharmaceutical',
      color: 'bg-green-100 text-green-700',
      icon: '🏥'
    },
    {
      name: 'Finance',
      description: 'Banking documents, financial reports, investment',
      color: 'bg-blue-100 text-blue-700',
      icon: '💰'
    },
    {
      name: 'Technology',
      description: 'Software documentation, user manuals, technical specs',
      color: 'bg-purple-100 text-purple-700',
      icon: '💻'
    },
    {
      name: 'Education',
      description: 'Academic papers, course materials, certifications',
      color: 'bg-yellow-100 text-yellow-700',
      icon: '📚'
    },
    {
      name: 'E-commerce',
      description: 'Product descriptions, marketing content, websites',
      color: 'bg-orange-100 text-orange-700',
      icon: '🛒'
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Industries We Serve
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Specialized translation services tailored to industry-specific terminology 
            and regulatory requirements across multiple sectors.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-blue-200">
              <CardContent className="p-8 text-center">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${industry.color} mb-4 text-2xl`}>
                  {industry.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{industry.name}</h3>
                <p className="text-muted-foreground">{industry.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
