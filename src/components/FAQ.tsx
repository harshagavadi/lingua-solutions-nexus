import React from 'react';
import Card from './Card';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What types of documents do you translate?",
    answer: "We translate a wide range of documents including legal contracts, medical records, academic transcripts, business documents, technical manuals, patents, immigration papers, and certified personal documents like birth certificates and marriage licenses."
  },
  {
    question: "How do you ensure translation accuracy?",
    answer: "Our quality assurance process includes multiple review stages: initial translation by certified professionals, linguistic review by native speakers, subject matter expert validation, and final quality checks. We also use advanced CAT tools and maintain extensive terminology databases."
  },
  {
    question: "What is certified translation and when is it required?",
    answer: "Certified translation is an official translation accompanied by a signed statement from the translator attesting to its accuracy. It's typically required for legal documents, immigration applications, academic credentials, and official government submissions."
  },
  {
    question: "How long does the translation process take?",
    answer: "Timeline varies based on document length, complexity, and language pair. Standard documents typically take 1-3 business days, while complex technical or legal documents may require 5-7 days. Rush services are available for urgent projects."
  },
  {
    question: "Do you provide translations for all language pairs?",
    answer: "We offer translation services for over 100 language combinations, including major world languages like Spanish, French, German, Chinese, Japanese, Arabic, and Portuguese, as well as specialized regional languages and rare language pairs."
  },
  {
    question: "What are your security measures for confidential documents?",
    answer: "We implement enterprise-level security including encrypted file transfer, secure cloud storage, confidentiality agreements with all translators, and compliance with GDPR and HIPAA requirements. All sensitive documents are handled with strict confidentiality protocols."
  },
  {
    question: "Can you handle large-scale document translation projects?",
    answer: "Yes, we manage enterprise-level projects including website localization, software internationalization, large legal document sets, and multi-language marketing campaigns. Our project management team coordinates resources to meet tight deadlines while maintaining quality."
  },
  {
    question: "What industries do you specialize in?",
    answer: "We have specialized teams for healthcare and medical translation, legal and contracts, financial services, technology and software, manufacturing and engineering, academic and research, and government and public sector translations."
  }
];

const FAQ: React.FC = () => {
  return (
    <section id="faq" className="py-20 bg-secondary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get answers to common questions about our professional translation services, 
            certification processes, and quality assurance standards.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {faqData.map((faq, index) => (
            <Card key={index} className="p-6 h-full">
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {faq.question}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </p>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Have a specific question not covered here?
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            Contact Our Experts
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;