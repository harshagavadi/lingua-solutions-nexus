
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Get in Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to start your translation project? Contact us today for expert consultation and support.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <Card className="text-center hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-8">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Email Us</h3>
              <p className="text-muted-foreground mb-4">
                Send us your project details and we'll respond within 2 hours.
              </p>
              <a href="mailto:harshagavadi@gmail.com" className="text-blue-600 hover:text-blue-700 font-semibold">
                harshagavadi@gmail.com
              </a>
            </CardContent>
          </Card>
          
          <Card className="text-center hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-8">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">WhatsApp</h3>
              <p className="text-muted-foreground mb-4">
                Quick questions? Chat with us directly on WhatsApp.
              </p>
              <a href="https://wa.me/919591474239" className="text-green-600 hover:text-green-700 font-semibold">
                +91 95914 74239
              </a>
            </CardContent>
          </Card>
          
          <Card className="text-center hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-8">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Business Hours</h3>
              <p className="text-muted-foreground mb-4">
                We're available when you need us most.
              </p>
              <div className="text-foreground font-medium">
                <div>Mon-Fri: 9AM-6PM</div>
                <div>Emergency: 24/7</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
