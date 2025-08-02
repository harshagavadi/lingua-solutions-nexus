import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, User, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Articles = () => {
  const today = new Date();
  const formatDate = (daysAgo: number) => {
    const date = new Date(today);
    date.setDate(date.getDate() - daysAgo);
    return date.toISOString().split('T')[0];
  };

  const articles = [
    {
      title: "AI-Enhanced Document Translation: Revolutionizing Global Business Communication in 2024",
      excerpt: "Explore how artificial intelligence is transforming document translation services while maintaining human expertise. Discover the latest AI translation technologies, quality assurance processes, and how hybrid AI-human workflows deliver 98% accuracy for critical business documents.",
      category: "Document Translation",
      readTime: "15 min read",
      date: formatDate(0),
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop&auto=format",
      slug: "ai-enhanced-document-translation-global-business-2024"
    },
    {
      title: "Blockchain Legal Document Translation: Smart Contracts and Cryptocurrency Compliance",
      excerpt: "Navigate the complex world of blockchain legal documentation with specialized translation services. Learn about smart contract translation, cryptocurrency regulations, DeFi protocols, and legal compliance requirements across international jurisdictions for digital assets.",
      category: "Legal Translation",
      readTime: "18 min read", 
      date: formatDate(1),
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=600&fit=crop&auto=format",
      slug: "blockchain-legal-document-translation-smart-contracts"
    },
    {
      title: "Telemedicine Translation: Digital Health Records and AI-Powered Medical Communication",
      excerpt: "Discover specialized translation services for telemedicine platforms and digital health records. Explore HIPAA-compliant translation processes, medical AI terminology, remote patient monitoring documentation, and cross-border healthcare communication standards.",
      category: "Medical Translation",
      readTime: "14 min read",
      date: formatDate(2),
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop&auto=format",
      slug: "telemedicine-translation-digital-health-records"
    },
    {
      title: "FinTech Translation Services: Digital Banking and Cryptocurrency Documentation",
      excerpt: "Master FinTech translation for digital banking platforms, cryptocurrency exchanges, and blockchain applications. Learn about regulatory compliance translation, API documentation, user interface localization, and financial technology terminology management.",
      category: "Business Translation",
      readTime: "16 min read",
      date: formatDate(3),
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop&auto=format",
      slug: "fintech-translation-services-digital-banking"
    },
    {
      title: "IoT and Smart Device Translation: Connected Technology Documentation",
      excerpt: "Navigate IoT device translation challenges for smart home technology, industrial IoT systems, and connected device interfaces. Understand technical specification translation, user manual localization, and safety protocol documentation for global IoT deployment.",
      category: "Technical Translation",
      readTime: "13 min read",
      date: formatDate(4),
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop&auto=format",
      slug: "iot-smart-device-translation-connected-technology"
    },
    {
      title: "EdTech Translation: Online Learning Platforms and Digital Education Content",
      excerpt: "Transform educational technology for global learners with specialized EdTech translation services. Explore e-learning content localization, MOOC platform translation, educational app interfaces, and accessibility compliance for international education markets.",
      category: "Academic Translation",
      readTime: "12 min read",
      date: formatDate(5),
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop&auto=format",
      slug: "edtech-translation-online-learning-platforms"
    },
    {
      title: "DeFi Protocol Translation: Decentralized Finance Documentation and Smart Contract Audits",
      excerpt: "Navigate decentralized finance translation requirements for DeFi protocols, yield farming platforms, and liquidity pool documentation. Learn about smart contract audit translation, tokenomics documentation, and regulatory compliance for decentralized applications.",
      category: "Financial Translation",
      readTime: "17 min read",
      date: formatDate(6),
      image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800&h=600&fit=crop&auto=format",
      slug: "defi-protocol-translation-decentralized-finance"
    },
    {
      title: "Progressive Web App Localization: PWA Translation for Global Mobile Users",
      excerpt: "Master Progressive Web App localization for international mobile audiences. Discover PWA-specific translation challenges, offline content management, push notification localization, and mobile-first user experience optimization across cultures and languages.",
      category: "Website Localization",
      readTime: "15 min read",
      date: formatDate(7),
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop&auto=format",
      slug: "progressive-web-app-localization-pwa-translation"
    },
    {
      title: "Digital Nomad Visa Translation: Remote Work Immigration Documentation",
      excerpt: "Navigate digital nomad visa requirements with specialized immigration translation services. Learn about remote work permit documentation, digital nomad visa applications, international tax compliance, and cross-border employment contract translation for location-independent professionals.",
      category: "Immigration Translation",
      readTime: "11 min read",
      date: formatDate(8),
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop&auto=format",
      slug: "digital-nomad-visa-translation-remote-work"
    },
    {
      title: "Blockchain Certificate Translation: NFT Documentation and Digital Asset Verification",
      excerpt: "Explore blockchain certificate translation for NFT marketplaces, digital asset verification, and cryptocurrency compliance. Learn about smart contract documentation, token metadata translation, and digital identity verification across international blockchain networks.",
      category: "Certified Translation",
      readTime: "14 min read",
      date: formatDate(9),
      image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?w=800&h=600&fit=crop&auto=format",
      slug: "blockchain-certificate-translation-nft-documentation"
    },
    {
      title: "Cloud-Native Application Localization: Microservices and Container Translation",
      excerpt: "Master cloud-native application localization for microservices architecture and containerized applications. Discover Kubernetes documentation translation, API gateway localization, and DevOps workflow internationalization for scalable cloud deployments.",
      category: "Software Localization",
      readTime: "16 min read",
      date: formatDate(10),
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop&auto=format",
      slug: "cloud-native-application-localization-microservices"
    },
    {
      title: "Social Commerce Translation: Live Shopping and Influencer Marketing Localization",
      excerpt: "Transform social commerce platforms for global markets with specialized translation services. Learn about live shopping stream localization, influencer marketing content translation, social media commerce interfaces, and cultural adaptation for social selling platforms.",
      category: "E-commerce Translation",
      readTime: "13 min read",
      date: formatDate(11),
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop&auto=format",
      slug: "social-commerce-translation-live-shopping"
    },
    {
      title: "Sustainable Tourism Translation: Eco-Travel Documentation and Carbon Offset Compliance",
      excerpt: "Navigate sustainable tourism translation for eco-travel platforms and carbon offset documentation. Explore environmental impact assessment translation, sustainable travel certification, and green tourism marketing content for environmentally conscious travelers.",
      category: "Travel Translation",
      readTime: "10 min read",
      date: formatDate(12),
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop&auto=format",
      slug: "sustainable-tourism-translation-eco-travel"
    },
    {
      title: "InsurTech Translation: Digital Insurance Platforms and AI-Powered Risk Assessment",
      excerpt: "Master InsurTech translation for digital insurance platforms, AI-powered risk assessment tools, and automated claims processing systems. Learn about parametric insurance documentation, peer-to-peer insurance platforms, and regulatory compliance for insurance technology.",
      category: "Insurance Translation",
      readTime: "14 min read",
      date: formatDate(13),
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop&auto=format",
      slug: "insurtech-translation-digital-insurance-platforms"
    },
    {
      title: "Industry 4.0 Translation: Smart Manufacturing and Automated Production Documentation",
      excerpt: "Navigate Industry 4.0 translation challenges for smart manufacturing systems, automated production lines, and IoT-enabled factories. Discover predictive maintenance documentation translation, robotics programming guides, and digital twin technology localization.",
      category: "Manufacturing Translation",
      readTime: "15 min read",
      date: formatDate(14),
      image: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=800&h=600&fit=crop&auto=format",
      slug: "industry-4-translation-smart-manufacturing"
    },
    {
      title: "PropTech Translation: Real Estate Technology and Virtual Property Tours",
      excerpt: "Transform real estate technology for global markets with specialized PropTech translation services. Learn about virtual property tour localization, real estate CRM systems, property management software, and smart building technology documentation translation.",
      category: "Real Estate Translation",
      readTime: "12 min read",
      date: formatDate(15),
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop&auto=format",
      slug: "proptech-translation-real-estate-technology"
    },
    {
      title: "Cybersecurity Translation: Threat Intelligence and Security Protocol Documentation",
      excerpt: "Master cybersecurity translation for threat intelligence reports, security protocol documentation, and incident response procedures. Explore penetration testing reports, vulnerability assessments, and compliance framework translation for global security operations.",
      category: "IT Translation",
      readTime: "16 min read",
      date: formatDate(16),
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=600&fit=crop&auto=format",
      slug: "cybersecurity-translation-threat-intelligence"
    },
    {
      title: "AI Patent Translation: Machine Learning and Neural Network IP Documentation",
      excerpt: "Navigate AI patent translation for machine learning algorithms, neural network architectures, and artificial intelligence innovations. Learn about deep learning patent documentation, AI model descriptions, and intellectual property protection for emerging technologies.",
      category: "Patent Translation",
      readTime: "18 min read",
      date: formatDate(17),
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop&auto=format",
      slug: "ai-patent-translation-machine-learning"
    },
    {
      title: "Metaverse Gaming Translation: Virtual World Localization and NFT Gaming",
      excerpt: "Create immersive metaverse gaming experiences with specialized translation services. Explore virtual world localization, NFT gaming documentation, play-to-earn mechanics translation, and cross-platform gaming communication for global virtual communities.",
      category: "Gaming Localization",
      readTime: "17 min read",
      date: formatDate(18),
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=600&fit=crop&auto=format",
      slug: "metaverse-gaming-translation-virtual-world"
    },
    {
      title: "Digital Government Translation: E-Governance and Smart City Documentation",
      excerpt: "Navigate digital government transformation with specialized e-governance translation services. Learn about smart city documentation, digital identity systems, online public services, and citizen engagement platform localization for modern government operations.",
      category: "Government Translation",
      readTime: "14 min read",
      date: formatDate(19),
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop&auto=format",
      slug: "digital-government-translation-e-governance"
    },
    {
      title: "Climate Tech Translation: Carbon Capture Technology and Green Innovation Documentation",
      excerpt: "Master climate technology translation for carbon capture systems, renewable energy innovations, and environmental monitoring technologies. Explore green tech patent documentation, sustainability reporting, and climate compliance translation for environmental solutions.",
      category: "Environmental Translation",
      readTime: "15 min read",
      date: formatDate(20),
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=600&fit=crop&auto=format",
      slug: "climate-tech-translation-carbon-capture"
    },
    {
      title: "Renewable Energy Translation: Solar, Wind, and Battery Storage Technology Documentation",
      excerpt: "Navigate renewable energy translation for solar panel specifications, wind turbine documentation, and battery storage systems. Learn about grid integration protocols, energy management software, and sustainable power generation technology localization.",
      category: "Energy Translation",
      readTime: "16 min read",
      date: formatDate(21),
      image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&h=600&fit=crop&auto=format",
      slug: "renewable-energy-translation-solar-wind-battery"
    },
    {
      title: "FoodTech Translation: Alternative Protein and Sustainable Food Innovation",
      excerpt: "Transform food technology documentation for alternative protein sources, lab-grown meat, and sustainable food innovations. Explore plant-based product labeling, food safety protocols, and nutritional analysis translation for next-generation food products.",
      category: "Food Translation",
      readTime: "13 min read",
      date: formatDate(22),
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop&auto=format",
      slug: "foodtech-translation-alternative-protein"
    },
    {
      title: "Sustainable Fashion Translation: Circular Economy and Ethical Manufacturing Documentation",
      excerpt: "Navigate sustainable fashion translation for circular economy initiatives, ethical manufacturing processes, and eco-friendly textile documentation. Learn about supply chain transparency, sustainable material certifications, and ethical fashion marketing localization.",
      category: "Fashion Translation",
      readTime: "11 min read",
      date: formatDate(23),
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop&auto=format",
      slug: "sustainable-fashion-translation-circular-economy"
    },
    {
      title: "AI-Powered Translation Quality Assurance: Machine Learning QA and Neural Network Validation",
      excerpt: "Explore AI-powered quality assurance systems for translation validation and error detection. Learn about neural network-based quality scoring, automated terminology consistency checks, and machine learning algorithms that enhance human translation review processes.",
      category: "Quality Assurance",
      readTime: "14 min read",
      date: formatDate(24),
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&h=600&fit=crop&auto=format",
      slug: "ai-powered-translation-quality-assurance"
    },
    {
      title: "Agile Translation Management: DevOps Integration and Continuous Localization",
      excerpt: "Master agile translation management with DevOps integration and continuous localization workflows. Discover automated translation pipelines, version control for multilingual content, and real-time collaboration tools for distributed translation teams.",
      category: "Project Management",
      readTime: "15 min read",
      date: formatDate(25),
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop&auto=format",
      slug: "agile-translation-management-devops-integration"
    },
    {
      title: "Voice Search SEO Translation: Conversational AI and Smart Speaker Optimization",
      excerpt: "Optimize voice search SEO with conversational AI translation and smart speaker localization. Learn about natural language processing for voice queries, smart assistant integration, and voice commerce optimization for global voice search markets.",
      category: "SEO Translation",
      readTime: "16 min read",
      date: formatDate(26),
      image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?w=800&h=600&fit=crop&auto=format",
      slug: "voice-search-seo-translation-conversational-ai"
    },
    {
      title: "Neural Machine Translation: Transformer Models and Large Language Model Integration",
      excerpt: "Explore cutting-edge neural machine translation with transformer models and large language model integration. Discover GPT-based translation systems, BERT optimization for multilingual content, and the future of AI-human collaborative translation workflows.",
      category: "Translation Technology",
      readTime: "18 min read",
      date: formatDate(27),
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop&auto=format",
      slug: "neural-machine-translation-transformer-models"
    },
    {
      title: "Cross-Cultural AI Communication: Cultural Intelligence in Machine Translation",
      excerpt: "Master cross-cultural AI communication with cultural intelligence integration in machine translation systems. Explore cultural bias detection, context-aware translation models, and culturally adaptive AI systems for global communication platforms.",
      category: "Cultural Adaptation",
      readTime: "14 min read",
      date: formatDate(28),
      image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&h=600&fit=crop&auto=format",
      slug: "cross-cultural-ai-communication-cultural-intelligence"
    },
    {
      title: "Real-Time Crisis Translation: Emergency Response and Disaster Communication",
      excerpt: "Navigate real-time crisis translation for emergency response systems and disaster communication platforms. Learn about multilingual emergency alerts, crisis management documentation, and rapid response translation protocols for global humanitarian operations.",
      category: "Emergency Translation",
      readTime: "12 min read",
      date: formatDate(29),
      image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=800&h=600&fit=crop&auto=format",
      slug: "real-time-crisis-translation-emergency-response"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      <Helmet>
        <title>🚀 AI-Enhanced Translation Articles 2024 | Expert Insights & Industry Trends | LinguaSolutions India</title>
        <meta name="description" content="🔥 Latest AI-enhanced translation insights, blockchain documentation, FinTech localization, and cutting-edge industry trends. Expert guides for modern translation challenges in 2024." />
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
              {articles.slice(0, 3).map((article, index) => {
                // Map article slugs to actual pages we created
                const getArticleLink = (slug: string) => {
                  const articleRoutes: { [key: string]: string } = {
                    'essential-guide-legal-document-translation': '/articles/essential-guide-legal-document-translation',
                    'medical-translation-accuracy-healthcare': '/articles/medical-translation-accuracy-healthcare', 
                    'business-contract-translation-best-practices': '/articles/business-contract-translation-best-practices'
                  };
                  return articleRoutes[slug] || '#';
                };

                const realArticles = [
                  {
                    title: "Essential Guide to Legal Document Translation",
                    excerpt: "Understanding the complexities and requirements for translating legal documents across different jurisdictions.",
                    category: "Legal Translation",
                    readTime: "8 min read",
                    date: "2024-01-15",
                    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&h=400&fit=crop",
                    slug: "essential-guide-legal-document-translation"
                  },
                  {
                    title: "Medical Translation: Accuracy in Healthcare Documentation",
                    excerpt: "How precise medical translation saves lives and ensures proper healthcare delivery worldwide.",
                    category: "Medical Translation",
                    readTime: "6 min read",
                    date: "2024-01-14",
                    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop",
                    slug: "medical-translation-accuracy-healthcare"
                  },
                  {
                    title: "Business Contract Translation Best Practices",
                    excerpt: "Key considerations when translating business contracts to avoid legal complications and ensure clarity.",
                    category: "Business Translation", 
                    readTime: "7 min read",
                    date: "2024-01-13",
                    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&h=400&fit=crop",
                    slug: "business-contract-translation-best-practices"
                  }
                ];

                const currentArticle = realArticles[index];
                
                return (
                  <Card 
                    key={currentArticle.slug} 
                    className="hover:shadow-xl transition-all duration-300 h-full flex flex-col group"
                  >
                    <div className="relative overflow-hidden">
                      <img 
                        src={currentArticle.image}
                        alt={`${currentArticle.category} - ${currentArticle.title}`}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                    <CardHeader className="flex-grow">
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="secondary" className="text-xs">
                          {currentArticle.category}
                        </Badge>
                        <div className="flex items-center text-xs text-muted-foreground">
                          <Clock className="h-3 w-3 mr-1" />
                          {currentArticle.readTime}
                        </div>
                      </div>
                      <CardTitle className="text-lg line-clamp-2 mb-2 group-hover:text-primary transition-colors">
                        {currentArticle.title}
                      </CardTitle>
                      <CardDescription className="line-clamp-3">
                        {currentArticle.excerpt}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                        <div className="flex items-center">
                          <Calendar className="h-3 w-3 mr-1" />
                          {new Date(currentArticle.date).toLocaleDateString('en-US', { 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                          })}
                        </div>
                        <div className="flex items-center">
                          <User className="h-3 w-3 mr-1" />
                          Expert Team
                        </div>
                      </div>
                      <Link to={getArticleLink(currentArticle.slug)}>
                        <Button 
                          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                        >
                          Read Full Article
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-16 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Need Professional Translation Services?</h2>
            <p className="text-xl mb-8 opacity-90">
              Get expert translation solutions for your business documents, legal contracts, and medical records.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/#quote">
                <Button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Get Free Quote
                </Button>
              </Link>
              <Link to="/#contact">
                <Button 
                  variant="outline"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Articles;
