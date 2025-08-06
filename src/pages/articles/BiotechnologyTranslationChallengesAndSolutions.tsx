import React from 'react';
import ArticlePage from './ArticlePage';
import { articles } from '../../data/articles';

const articleData = articles.find(article => article.slug === 'biotechnology-translation-challenges-and-solutions');

const BiotechnologyTranslationChallengesAndSolutions: React.FC = () => {
  if (!articleData) {
    return <div>Article not found</div>;
  }

  return <ArticlePage article={articleData} />;
};

export default BiotechnologyTranslationChallengesAndSolutions;