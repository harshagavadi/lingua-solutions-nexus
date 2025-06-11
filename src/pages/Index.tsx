
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Languages from '../components/Languages';
import Industries from '../components/Industries';
import About from '../components/About';
import Testimonials from '../components/Testimonials';
import PricingCalculator from '../components/PricingCalculator';
import QuoteForm from '../components/QuoteForm';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-16"> {/* Add padding to account for fixed header */}
        <Hero />
        <div id="services">
          <Services />
        </div>
        <div id="languages">
          <Languages />
        </div>
        <div id="industries">
          <Industries />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="testimonials">
          <Testimonials />
        </div>
        <PricingCalculator />
        <div id="quote">
          <QuoteForm />
        </div>
        <div id="contact">
          <Contact />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
