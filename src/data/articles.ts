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
  }
];
