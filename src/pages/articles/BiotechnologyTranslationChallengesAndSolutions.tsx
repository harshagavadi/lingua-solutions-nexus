import React from 'react';
import ArticlePage from './ArticlePage';
import { articles } from '../../data/articles';

const articleData = articles.find(article => article.slug === 'biotechnology-translation-challenges-and-solutions');

const BiotechnologyTranslationChallengesAndSolutions: React.FC = () => {
  if (!articleData) {
    return <div>Article not found</div>;
  }

  // ArticlePage uses useParams to get the slug, so no props needed
  return <ArticlePage />;
};

export default BiotechnologyTranslationChallengesAndSolutions;