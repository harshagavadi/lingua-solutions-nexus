
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Languages from '../components/Languages';
import Industries from '../components/Industries';
import About from '../components/About';
import Testimonials from '../components/Testimonials';
import PricingCalculator from '../components/PricingCalculator';
import QuoteForm from '../components/QuoteForm';
import Career from '../components/Career';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Breadcrumbs from '../components/Breadcrumbs';

const Index = () => {
  const [currentSection, setCurrentSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['services', 'languages', 'industries', 'about', 'testimonials', 'quote', 'career', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setCurrentSection(section);
            break;
          }
        }
      }
      
      // If we're at the top, show home
      if (window.scrollY < 200) {
        setCurrentSection('home');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getBreadcrumbItems = () => {
    const sectionMap: { [key: string]: string } = {
      'home': 'Home',
      'services': 'Our Services',
      'languages': 'Languages',
      'industries': 'Industries',
      'about': 'About Us',
      'testimonials': 'Testimonials',
      'quote': 'Get Quote',
      'career': 'Career Opportunities',
      'contact': 'Contact Us'
    };

    if (currentSection === 'home') {
      return [];
    }

    return [
      {
        label: sectionMap[currentSection] || 'Page',
        isActive: true
      }
    ];
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-16">
        {currentSection !== 'home' && <Breadcrumbs items={getBreadcrumbItems()} />}
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
        <div id="career">
          <Career />
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
