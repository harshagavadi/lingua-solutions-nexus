// Shared articles array for both Articles.tsx and ArticlePage.tsx
export interface Article {
  slug: string;
  title: string;
  category: string;
  readTime: string;
  excerpt: string;
  image: string;
  content: string;
  author: string;
  date: string;
}

export const articles: Article[] = [
  {
    slug: 'essential-guide-legal-document-translation',
    title: 'Essential Guide to Legal Document Translation',
    category: 'Legal Translation',
    readTime: '8 min read',
    excerpt: 'Understanding the complexities and requirements for translating legal documents across different jurisdictions.',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&h=400&fit=crop',
    content: `
      # Essential Guide to Legal Document Translation

      ## Introduction
      Legal document translation is one of the most critical and challenging areas of professional translation services. The precision required, coupled with the need for deep understanding of legal systems across different jurisdictions, makes it essential to work with specialized legal translators.

      ## Types of Legal Documents
      Legal translation encompasses various document types including contracts, court documents, immigration papers, patents, and regulatory filings. Each type presents unique challenges requiring specialized knowledge.

      ## Key Challenges
      - Legal system differences between jurisdictions
      - Specialized terminology and concepts
      - Cultural and procedural variations
      - High accuracy requirements

      ## Best Practices
      - Use certified legal translators
      - Implement multi-stage review processes
      - Maintain terminology databases
      - Ensure cultural adaptation while preserving legal meaning
    `,
    author: 'Legal Translation Team',
    date: '2024-01-15'
  },
  {
    slug: 'medical-translation-accuracy-healthcare',
    title: 'Medical Translation: Accuracy in Healthcare Documentation',
    category: 'Medical Translation',
    readTime: '6 min read',
    excerpt: 'How precise medical translation saves lives and ensures proper healthcare delivery worldwide.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop',
    content: `
      # Medical Translation: Accuracy in Healthcare Documentation

      ## Introduction
      Medical translation accuracy is literally a matter of life and death. Translation errors in healthcare documentation can lead to misdiagnosis, incorrect treatment, and serious patient harm.

      ## Critical Areas
      - Patient care documentation
      - Clinical research and trials
      - Pharmaceutical documentation
      - Medical device manuals

      ## Quality Assurance
      Medical translation requires specialized translators with medical backgrounds, multi-stage review processes, and strict adherence to regulatory requirements.

      ## Regulatory Compliance
      Different countries have specific requirements for medical document translation, including certification and validation processes.
    `,
    author: 'Medical Translation Team',
    date: '2024-01-14'
  },
  {
    slug: 'business-contract-translation-best-practices',
    title: 'Business Contract Translation Best Practices',
    category: 'Business Translation',
    readTime: '7 min read',
    excerpt: 'Key considerations when translating business contracts to avoid legal complications and ensure clarity.',
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&h=400&fit=crop',
    content: `
      # Business Contract Translation Best Practices

      ## Introduction
      Business contract translation requires precision and understanding of legal frameworks in both source and target jurisdictions.

      ## Key Considerations
      - Legal system differences
      - Commercial terminology
      - Cultural business practices
      - Risk mitigation strategies

      ## Best Practices
      - Use specialized legal translators
      - Implement quality assurance processes
      - Consider cultural adaptation
      - Ensure regulatory compliance
    `,
    author: 'Business Legal Team',
    date: '2024-01-13'
  },
  {
    slug: 'technical-translation-challenges',
    title: 'Technical Manual Translation for Global Markets',
    category: 'Technical Translation',
    readTime: '9 min read',
    excerpt: 'Strategies for translating complex technical documentation while maintaining accuracy and usability.',
    image: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=600&h=400&fit=crop',
    content: `
      # Technical Manual Translation for Global Markets

      ## Introduction
      Technical translation presents unique challenges requiring specialized knowledge and precision.

      ## Common Challenges
      - Specialized terminology
      - Cultural variations in technical standards
      - Accuracy requirements
      - Rapid technological evolution

      ## Solutions
      - Subject matter expertise
      - Terminology management
      - Quality assurance processes
      - Continuous learning and adaptation
    `,
    author: 'Technical Translation Team',
    date: '2024-01-12'
  },
  {
    slug: 'website-localization-guide',
    title: 'Website Localization: Beyond Translation',
    category: 'Website Localization',
    readTime: '10 min read',
    excerpt: 'Complete guide to adapting your website for international markets with cultural sensitivity.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
    content: `
      # Website Localization: Beyond Translation

      ## Introduction
      Website localization goes beyond translation to create culturally appropriate experiences for global audiences.

      ## Key Components
      - Cultural adaptation
      - Technical considerations
      - SEO optimization
      - User experience design

      ## Best Practices
      - Plan for internationalization
      - Consider cultural preferences
      - Optimize for local search engines
      - Test with native users
    `,
    author: 'Localization Team',
    date: '2024-01-11'
  },
  {
    slug: 'certified-translation-process',
    title: 'Certified Translation Process: Complete Guide',
    category: 'Certified Translation',
    readTime: '7 min read',
    excerpt: 'Understanding when you need certified translation and what makes it different from regular translation.',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop',
    content: `
      # Certified Translation Process: Complete Guide

      ## Introduction
      Certified translations are official translations required for legal, academic, and governmental purposes.

      ## When You Need Certification
      - Legal proceedings
      - Immigration applications
      - Academic institutions
      - Business registrations

      ## The Process
      - Document assessment
      - Translation by certified translator
      - Quality review
      - Official certification
    `,
    author: 'Certification Team',
    date: '2024-01-10'
  },
  {
    slug: 'document-translation-standards',
    title: 'Document Translation Standards: Quality and Compliance',
    category: 'Quality Standards',
    readTime: '8 min read',
    excerpt: 'Learn about international standards for document translation and quality assurance processes.',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600&h=400&fit=crop',
    content: `
      # Document Translation Standards: Quality and Compliance

      ## Introduction
      Professional document translation requires adherence to rigorous quality standards and compliance frameworks.

      ## International Standards
      - ISO 17100:2015 requirements
      - Quality assurance processes
      - Translator competencies
      - Project management standards

      ## Implementation
      - Multi-stage review systems
      - Technology integration
      - Continuous improvement
      - Client communication
    `,
    author: 'Quality Assurance Team',
    date: '2024-01-09'
  },
  {
    slug: 'academic-translation-best-practices',
    title: 'Academic Translation Best Practices',
    category: 'Academic Translation',
    readTime: '6 min read',
    excerpt: 'Professional translation of academic credentials for international education and career opportunities.',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=400&fit=crop',
    content: `
      # Academic Translation Best Practices

      ## Introduction
      Academic translation requires specialized knowledge, precision, and deep understanding of scholarly conventions.

      ## Types of Documents
      - Research papers and journal articles
      - Theses and dissertations
      - Conference papers
      - Grant proposals

      ## Quality Requirements
      - Subject matter expertise
      - Academic writing conventions
      - Citation management
      - Peer review processes
    `,
    author: 'Academic Translation Team',
    date: '2024-01-08'
  }
];
