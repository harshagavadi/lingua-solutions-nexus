import React from 'react';
import { ArticlePage } from './ArticlePage';
import { articles } from '../../data/articles';

const renewableEnergyArticle = articles.find(article => article.slug === 'renewable-energy-documentation-translation');

const TranslatingRenewableEnergyDocumentationForASustainableFuture: React.FC = () => {
  if (!renewableEnergyArticle) {
    return <div>Article not found.</div>;
  }

  return (
    <ArticlePage article={renewableEnergyArticle} />
  );
};

export default TranslatingRenewableEnergyDocumentationForASustainableFuture;