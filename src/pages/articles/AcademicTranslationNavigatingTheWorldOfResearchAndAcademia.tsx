import React from 'react';
import ArticlePage from './ArticlePage';
import { articles } from '../../data/articles';

const articleData = articles.find(article => article.slug === 'academic-translation-navigating-the-world-of-research');

const AcademicTranslationNavigatingTheWorldOfResearchAndAcademia: React.FC = () => {
  if (!articleData) {
    return <div>Article not found</div>;
  }

  return (
    <ArticlePage article={articleData} />
  );
};

export default AcademicTranslationNavigatingTheWorldOfResearchAndAcademia;