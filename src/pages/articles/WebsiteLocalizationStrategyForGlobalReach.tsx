import { articles } from '@/data/articles';
import ArticlePage from './ArticlePage';

const article = articles.find(article => article.slug === 'website-localization-strategy-for-global-reach');

if (!article) {
  // Handle the case where the article is not found, maybe render a 404 page or an error message
  // For now, we'll just return null
  console.error("Article with slug 'website-localization-strategy-for-global-reach' not found.");
  // You might want to return a more sophisticated error handling component here
  // return <div>Article not found.</div>;
}

const WebsiteLocalizationStrategyForGlobalReach = () => {
  if (!article) {
    return null; // Or a fallback UI
  }
  // ArticlePage uses useParams to get the slug, so no props needed
  return <ArticlePage />;
};

export default WebsiteLocalizationStrategyForGlobalReach;