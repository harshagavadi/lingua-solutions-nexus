
import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Languages from '../components/Languages';
import Industries from '../components/Industries';
import About from '../components/About';
import Testimonials from '../components/Testimonials';
import QuoteForm from '../components/QuoteForm';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Services />
      <Languages />
      <Industries />
      <About />
      <Testimonials />
      <QuoteForm />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
