import React from 'react';
import ArticlePage from './ArticlePage';
import { articles } from '../../data/articles';

const renewableEnergyArticle = articles.find(article => article.slug === 'renewable-energy-documentation-translation');

const TranslatingRenewableEnergyDocumentationForASustainableFuture: React.FC = () => {
  if (!renewableEnergyArticle) {
    return <div>Article not found.</div>;
  }

  // ArticlePage uses useParams to get the slug, so no props needed
  return <ArticlePage />;
};

export default TranslatingRenewableEnergyDocumentationForASustainableFuture;