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
    slug: 'quantum-computing-translation-next-generation',
    title: 'Quantum Computing in Translation: The Next Generation of Language Processing',
    category: 'Technology',
    readTime: '8 min read',
    excerpt: 'Explore how quantum computing is revolutionizing language translation with unprecedented accuracy and speed.',
    image: '/public/lovable-uploads/quantum-computing-translation.jpg',
    content: `
      # Quantum Computing in Translation: The Next Generation of Language Processing

      ## Introduction
      Quantum computing represents a paradigm shift in how we process and understand language across cultures. This article explores the groundbreaking applications of quantum computing in translation services.

      ## The Quantum Advantage
      Unlike classical computers that process bits sequentially, quantum computers can analyze multiple language patterns simultaneously, leading to more nuanced and contextually accurate translations.

      ## Real-World Applications
      - Simultaneous multi-language translation
      - Context-aware cultural adaptations
      - Real-time neural language processing
      - Quantum-enhanced machine learning for translation

      ## Future Implications
      As quantum computers become more accessible, we can expect to see revolutionary changes in how we approach language barriers and cultural communication.
    `,
    author: 'Dr. Sarah Chen',
    date: '2025-08-01'
  },
  {
    slug: 'ai-translation-breakthroughs-2025',
    title: 'AI Translation Breakthroughs: What to Expect in 2025',
    category: 'AI & ML',
    readTime: '6 min read',
    excerpt: 'Discover the latest AI translation technologies and their impact on global communication.',
    image: '/public/lovable-uploads/ai-translation.jpg',
    content: `
      # AI Translation Breakthroughs: What to Expect in 2025

      ## The Evolution of AI Translation
      From rule-based systems to neural networks, AI translation has come a long way. Learn about the latest developments and future predictions.

      ## Key Technologies
      - Advanced neural machine translation
      - Contextual understanding
      - Emotion-aware translation
      - Multi-modal translation systems

      ## Industry Impact
      How these breakthroughs are transforming various sectors, from healthcare to entertainment.
    `,
    author: 'Alex Thompson',
    date: '2025-07-28'
  }
];
