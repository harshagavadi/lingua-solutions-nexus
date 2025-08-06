import React from 'react';
import { ArticlePage } from './ArticlePage';
import { articles } from '../../data/articles';

const article = articles.find(
  (a) => a.slug === 'business-contract-translation-best-practices'
);

const BusinessContractTranslationBestPractices: React.FC = () => {
  if (!article) {
    return <div>Article not found</div>;
  }

  return <ArticlePage article={article} />;
};

export default BusinessContractTranslationBestPractices;