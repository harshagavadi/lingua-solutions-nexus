import React from 'react';
import ArticlePage from './ArticlePage';
import { articles } from '../../data/articles';

const article = articles.find(
  (a) => a.slug === 'business-contract-translation-best-practices'
);

const BusinessContractTranslationBestPractices: React.FC = () => {
  if (!article) {
    return <div>Article not found</div>;
  }

  // ArticlePage uses useParams to get the slug, so no props needed
  return <ArticlePage />;
};

export default BusinessContractTranslationBestPractices;