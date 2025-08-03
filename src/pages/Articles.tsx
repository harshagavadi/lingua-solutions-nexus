import { articles } from '../data/articles';
import { Clock, User, Calendar } from 'lucide-react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Card, { CardHeader, CardTitle, Badge } from '../components/Card';

export default function Articles() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      <Helmet>
        <title>🚀 Advanced Technology Translation Articles 2025 | Expert Insights | LinguaSolutions India</title>
        <meta name="description" content="🔥 Cutting-edge insights on quantum computing, AR translation, biotechnology, space tech, and emerging technology translations. Expert guides for next-generation language solutions in 2025." />
        <meta name="keywords" content="AI translation 2024, blockchain translation, FinTech localization, neural machine translation, EdTech translation, IoT documentation, cybersecurity translation, metaverse gaming localization, climate tech translation, sustainable fashion translation" />
        <link rel="canonical" href="https://www.linguasolutionsindia.com/articles" />
        <meta property="og:title" content="🚀 AI-Enhanced Translation Articles 2024 | Expert Insights | LinguaSolutions India" />
        <meta property="og:description" content="🔥 Latest AI-enhanced translation insights, blockchain documentation, FinTech localization, and cutting-edge industry trends for modern businesses." />
        <meta property="og:url" content="https://www.linguasolutionsindia.com/articles" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.linguasolutionsindia.com/og-image-enhanced.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="🚀 AI-Enhanced Translation Articles 2024 | LinguaSolutions India" />
        <meta name="twitter:description" content="🔥 Latest AI translation insights, blockchain documentation, and cutting-edge industry trends." />
        <meta name="twitter:image" content="https://www.linguasolutionsindia.com/og-image-enhanced.jpg" />
      </Helmet>
      <Header />
      <div className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
              🚀 AI-Enhanced Translation Insights 2024
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Discover cutting-edge AI translation technologies, blockchain documentation strategies, and next-generation localization solutions for modern businesses.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-blue-200">
              <span className="flex items-center"><Clock className="h-4 w-4 mr-1" /> 🔥 Latest 2024 Trends</span>
              <span className="flex items-center"><User className="h-4 w-4 mr-1" /> 🤖 AI Translation Experts</span>
              <span className="flex items-center"><Calendar className="h-4 w-4 mr-1" /> 🚀 Cutting-Edge Insights</span>
            </div>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                🔥 Next-Generation Translation Resources 2024
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Comprehensive guides covering AI-enhanced translation, blockchain documentation, FinTech localization, and emerging technology translation solutions for modern global businesses.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article) => (
                <Link key={article.slug} to={`/articles/${article.slug}`} className="block">
                  <Card
                    className="hover:shadow-xl transition-all duration-300 h-full flex flex-col group"
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={article.image}
                        alt={`${article.category} - ${article.title}`}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                    <CardHeader className="flex-grow">
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="secondary" className="text-xs">
                          {article.category}
                        </Badge>
                        <div className="flex items-center text-xs text-muted-foreground">
                          <Clock className="h-3 w-3 mr-1" />
                          {article.readTime}
                        </div>
                      </div>
                      <CardTitle className="text-lg line-clamp-2 mb-2 group-hover:text-primary transition-colors">
                        {article.title}
                      </CardTitle>
                    </CardHeader>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
