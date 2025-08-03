import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Badge } from '@/components/ui/badge';
import { Clock, User, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
// Import the articles array from the main Articles page
import Articles from '../Articles';

const ArticlePage = () => {
  const { slug } = useParams();
  // Get articles array from Articles component
  // (If you move articles to a shared file, import from there instead)
  // @ts-ignore
  const articles = Articles()?.props?.articles || [];
  const article = articles.find((a: any) => a.slug === slug);

  if (!article) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-grow flex flex-col items-center justify-center text-center py-24">
          <h1 className="text-4xl font-bold mb-4">404 - Article Not Found</h1>
          <p className="mb-8">Sorry, the article you are looking for does not exist.</p>
          <Link to="/articles">
            <Button>Return to Articles</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      <Helmet>
        <title>{article.title} | LinguaSolutions India</title>
        <meta name="description" content={article.excerpt} />
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.excerpt} />
        <meta property="og:image" content={article.image} />
      </Helmet>
      <Header />
      <div className="container mx-auto px-4 pt-16 pb-12">
        <div className="mb-8">
          <Link to="/articles" className="text-blue-600 hover:underline">← Back to Articles</Link>
        </div>
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <div className="mb-4">
            <img src={article.image} alt={article.title} className="w-full h-64 object-cover rounded" />
          </div>
          <div className="flex items-center gap-4 mb-4">
            <Badge variant="secondary">{article.category}</Badge>
            <span className="flex items-center text-xs text-muted-foreground">
              <Clock className="h-3 w-3 mr-1" />
              {article.readTime}
            </span>
            <span className="flex items-center text-xs text-muted-foreground">
              <Calendar className="h-3 w-3 mr-1" />
              {new Date(article.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </span>
            <span className="flex items-center text-xs text-muted-foreground">
              <User className="h-3 w-3 mr-1" />
              Expert Team
            </span>
          </div>
          <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
          <p className="text-lg text-muted-foreground mb-8">{article.excerpt}</p>
          {/* Placeholder for full article content. Replace with real content if available. */}
          <div className="prose max-w-none">
            <p>[Full article content goes here. Please update this section with the complete article text for "{article.title}".]</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ArticlePage;
