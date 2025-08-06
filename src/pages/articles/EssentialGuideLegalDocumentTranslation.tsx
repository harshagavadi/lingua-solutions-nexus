import React from 'react';
import ArticlePage from './ArticlePage'; // Assuming ArticlePage is in the same directory
import articles from '../data/articles'; // Adjust the import path if necessary

const articleData = articles.find(article => article.slug === 'essential-guide-legal-document-translation');

if (!articleData) {
  // Handle the case where the article is not found, maybe return null or a loading indicator
  console.error("Article with slug 'essential-guide-legal-document-translation' not found.");
  // You might want to return a different component or null here
}

const EssentialGuideLegalDocumentTranslation: React.FC = () => {
  if (!articleData) {
    return <div>Article not found.</div>; // Example error handling
  }

  return (
    <ArticlePage article={articleData} />
  );
};

export default EssentialGuideLegalDocumentTranslation;