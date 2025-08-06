import React from 'react';
import { articles } from '../../data/articles';
import ArticlePage from './ArticlePage';

const TheImportanceOfCertifiedTranslationForOfficialDocuments: React.FC = () => {
  const article = articles.find(
    (article) => article.slug === 'the-importance-of-certified-translation'
  );

  if (!article) {
    return <div>Article not found</div>; // Or handle the not found case appropriately
  }

  return <ArticlePage article={article} />;
};

export default TheImportanceOfCertifiedTranslationForOfficialDocuments;