import React from 'react';
import ArticlePage from './ArticlePage';
import { articles } from '../../data/articles';

const articleData = articles.find(article => article.slug === 'academic-translation-navigating-the-world-of-research');

const AcademicTranslationNavigatingTheWorldOfResearchAndAcademia: React.FC = () => {
  if (!articleData) {
    return <div>Article not found</div>;
  }

  // ArticlePage uses useParams to get the slug, so no props needed
  return <ArticlePage />;
};

export default AcademicTranslationNavigatingTheWorldOfResearchAndAcademia;