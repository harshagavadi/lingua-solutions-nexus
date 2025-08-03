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
  // ...existing code...
];
