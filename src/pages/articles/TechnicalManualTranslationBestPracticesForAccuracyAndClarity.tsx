import React from 'react';
import ArticlePage from './ArticlePage';
import { articles } from '../../data/articles';

const article = articles.find(a => a.slug === 'technical-manual-translation-best-practices');

const TechnicalManualTranslationBestPracticesForAccuracyAndClarity = () => {
  if (!article) {
    return <div>Article not found</div>;
  }
  // ArticlePage uses useParams to get the slug, so no props needed
  return <ArticlePage />;
};

export default TechnicalManualTranslationBestPracticesForAccuracyAndClarity;