import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-gradient-to-br from-blue-300/20 to-purple-300/20 rounded-full blur-2xl"></div>
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-gradient-to-br from-pink-300/20 to-orange-300/20 rounded-full blur-xl"></div>
      
      {/* Floating Contact Icons */}
      <div className="absolute top-20 right-1/4 animate-float">
        <div className="w-16 h-16 bg-white/80 rounded-2xl shadow-xl flex items-center justify-center backdrop-blur-sm border border-blue-200">
          <span className="text-2xl">📞</span>
        </div>
      </div>
      <div className="absolute bottom-32 left-1/4 animate-bounce">
        <div className="w-12 h-12 bg-white/80 rounded-xl shadow-lg flex items-center justify-center backdrop-blur-sm border border-purple-200">
          <span className="text-xl">✉️</span>
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Get in Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to start your translation project? Contact us today for expert consultation and support.
          </p>
          
          {/* Beautiful Divider */}
          <div className="flex items-center justify-center mt-8">
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
            <div className="mx-4 w-3 h-3 bg-gradient-to-br from-pink-500 to-orange-500 rounded-full animate-pulse"></div>
            <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
          </div>
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
              <a href="mailto:linguasolutionsindia247@gmail.com" className="text-blue-600 hover:text-blue-700 font-semibold">
                linguasolutionsindia247@gmail.com
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
