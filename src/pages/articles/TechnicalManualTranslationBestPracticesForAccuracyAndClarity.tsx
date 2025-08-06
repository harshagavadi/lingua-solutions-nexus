import React from 'react';
import { ArticlePage } from './ArticlePage';
import { articles } from '../../data/articles';

const article = articles.find(a => a.slug === 'technical-manual-translation-best-practices');

const TechnicalManualTranslationBestPracticesForAccuracyAndClarity = () => {
  if (!article) {
    return <div>Article not found</div>;
  }
  return <ArticlePage article={article} />;
};

export default TechnicalManualTranslationBestPracticesForAccuracyAndClarity;