
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'Global Tech Solutions',
      content: 'LinguaSolutions transformed our international expansion. Their technical translation accuracy and cultural insights were invaluable for our software localization project.',
      rating: 5
    },
    {
      name: 'Dr. Rajesh Patel',
      company: 'Medical Research Institute',
      content: 'The precision and attention to detail in translating our medical research papers was exceptional. They understood the complex terminology perfectly.',
      rating: 5
    },
    {
      name: 'Maria Rodriguez',
      company: 'Legal Associates',
      content: 'Their certified legal translations have been crucial for our international cases. Professional, accurate, and delivered on time, every single time.',
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our valued clients 
            have to say about our translation services.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-500 text-xl">★</span>
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
