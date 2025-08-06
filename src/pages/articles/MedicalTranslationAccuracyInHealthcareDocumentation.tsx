import React from 'react';
import ArticlePage from './ArticlePage';
import { articles } from '../../data/articles';

const medicalTranslationArticle = articles.find(article => article.slug === 'medical-translation-accuracy-in-healthcare-documentation');

const MedicalTranslationAccuracyInHealthcareDocumentation: React.FC = () => {
  if (!medicalTranslationArticle) {
    return <div>Article not found</div>;
  }

  return (
    <ArticlePage article={medicalTranslationArticle} />
  );
};

export default MedicalTranslationAccuracyInHealthcareDocumentation;