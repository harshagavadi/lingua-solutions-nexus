import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, User, Calendar } from 'lucide-react';

const Articles = () => {
  const [selectedArticle, setSelectedArticle] = React.useState<any>(null);
  const today = new Date();
  const formatDate = (daysAgo: number) => {
    const date = new Date(today);
    date.setDate(date.getDate() - daysAgo);
    return date.toISOString().split('T')[0];
  };

  const articleImages = [
    "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop&auto=format", // Documents and papers
    "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=600&fit=crop&auto=format", // Legal/court documents
    "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop&auto=format", // Medical/healthcare
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&auto=format", // Business documents
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop&auto=format", // Technical documents
    "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=600&fit=crop&auto=format", // Academic papers
    "https://images.unsplash.com/photo-1581092795442-48cbc1c0e0fe?w=800&h=600&fit=crop&auto=format", // Financial documents
    "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&h=600&fit=crop&auto=format", // Website/marketing
    "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&h=600&fit=crop&auto=format", // Immigration forms
    "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop&auto=format", // Certificates
    "https://images.unsplash.com/photo-1559526324-593bc073d938?w=800&h=600&fit=crop&auto=format", // Software/app interface
    "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop&auto=format", // E-commerce/retail
    "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=800&h=600&fit=crop&auto=format", // Travel documents
    "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop&auto=format", // Insurance papers
    "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop&auto=format", // Manufacturing
    "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&h=600&fit=crop&auto=format", // Real estate
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop&auto=format", // Technology/computer
    "https://images.unsplash.com/photo-1554224154-26032fced8bd?w=800&h=600&fit=crop&auto=format", // Patent documents
    "https://images.unsplash.com/photo-1560472355-536de3962603?w=800&h=600&fit=crop&auto=format", // Gaming industry
    "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop&auto=format", // Government documents
    "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?w=800&h=600&fit=crop&auto=format", // Environmental reports
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&auto=format", // Energy sector
    "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&h=600&fit=crop&auto=format", // Food industry
    "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&h=600&fit=crop&auto=format", // Fashion/textile
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop&auto=format"  // Quality assurance
  ];

  const articles = [
    {
      title: "Professional Document Translation Services: Your Complete 2024 Guide",
      excerpt: "Discover how professional document translation services ensure accuracy, legal compliance, and cultural adaptation for global business success. Learn about certification processes, quality assurance, and choosing the right translation partner.",
      category: "Document Translation",
      readTime: "12 min read",
      date: formatDate(0),
      image: articleImages[0],
      slug: "professional-document-translation-services-guide-2024"
    },
    {
      title: "Legal Document Translation: Ensuring Precision in International Law",
      excerpt: "Navigate complex legal translation requirements with expert guidance. From contract translation to court document certification, understand how professional legal translators maintain accuracy and legal compliance across jurisdictions.",
      category: "Legal Translation",
      readTime: "15 min read", 
      date: formatDate(1),
      image: articleImages[1],
      slug: "legal-document-translation-international-law-precision"
    },
    {
      title: "Medical Translation Services: Precision Healthcare Communication",
      excerpt: "Explore critical medical translation requirements for patient safety and regulatory compliance. Learn about pharmaceutical labeling, clinical trial documentation, and specialized medical terminology management.",
      category: "Medical Translation",
      readTime: "10 min read",
      date: formatDate(2),
      image: articleImages[2],
      slug: "medical-translation-services-healthcare-communication"
    },
    {
      title: "Business Document Translation: Expanding Global Markets Successfully",
      excerpt: "Master business document translation for international expansion. Discover how accurate translation of financial reports, marketing materials, and corporate communications drives global success.",
      category: "Business Translation",
      readTime: "8 min read",
      date: formatDate(3),
      image: articleImages[3],
      slug: "business-document-translation-global-markets"
    },
    {
      title: "Technical Translation Excellence: Precision in Complex Documentation",
      excerpt: "Understand technical translation challenges and solutions for engineering, IT, and scientific documentation. Learn about terminology management and quality assurance in technical content translation.",
      category: "Technical Translation",
      readTime: "11 min read",
      date: formatDate(4),
      image: articleImages[4],
      slug: "technical-translation-excellence-complex-documentation"
    },
    {
      title: "Academic Document Translation: Scholarly Communication Across Languages",
      excerpt: "Navigate academic translation requirements for research papers, dissertations, and scholarly publications. Discover how professional translators maintain academic integrity and citation accuracy.",
      category: "Academic Translation",
      readTime: "9 min read",
      date: formatDate(5),
      image: articleImages[5],
      slug: "academic-document-translation-scholarly-communication"
    },
    {
      title: "Financial Document Translation: Compliance and Accuracy in Global Finance",
      excerpt: "Ensure regulatory compliance with expert financial document translation. Learn about translating annual reports, audit documents, and financial statements for international markets.",
      category: "Financial Translation",
      readTime: "13 min read",
      date: formatDate(6),
      image: articleImages[6],
      slug: "financial-document-translation-global-compliance"
    },
    {
      title: "Website Localization Services: Digital Success in Global Markets",
      excerpt: "Transform your website for international audiences with professional localization services. Discover best practices for cultural adaptation, SEO optimization, and user experience across languages.",
      category: "Website Localization",
      readTime: "14 min read",
      date: formatDate(7),
      image: articleImages[7],
      slug: "website-localization-services-global-digital-success"
    },
    {
      title: "Immigration Document Translation: Accurate Legal Documentation",
      excerpt: "Navigate immigration requirements with certified document translation services. Learn about visa applications, passport translations, and USCIS compliance for successful immigration processes.",
      category: "Immigration Translation",
      readTime: "10 min read",
      date: formatDate(8),
      image: articleImages[8],
      slug: "immigration-document-translation-legal-accuracy"
    },
    {
      title: "Certified Translation Services: Official Document Authentication",
      excerpt: "Understand certified translation requirements for official documents. Discover the certification process, legal acceptance, and when certified translations are required for government submissions.",
      category: "Certified Translation",
      readTime: "8 min read",
      date: formatDate(9),
      image: articleImages[9],
      slug: "certified-translation-services-official-authentication"
    },
    {
      title: "Software Localization: Adapting Applications for Global Users",
      excerpt: "Master software localization for international markets. Learn about UI translation, cultural adaptation, and technical considerations for successful global software deployment.",
      category: "Software Localization",
      readTime: "12 min read",
      date: formatDate(10),
      image: articleImages[10],
      slug: "software-localization-global-application-adaptation"
    },
    {
      title: "E-commerce Translation: Driving International Online Sales",
      excerpt: "Boost global e-commerce success with professional translation services. Discover how product descriptions, customer reviews, and checkout processes impact international sales conversion.",
      category: "E-commerce Translation",
      readTime: "11 min read",
      date: formatDate(11),
      image: articleImages[11],
      slug: "ecommerce-translation-international-online-sales"
    },
    {
      title: "Travel Document Translation: Seamless International Travel",
      excerpt: "Ensure smooth international travel with accurate document translation. Learn about passport translation, visa requirements, and travel insurance documentation for global travelers.",
      category: "Travel Translation",
      readTime: "7 min read",
      date: formatDate(12),
      image: articleImages[12],
      slug: "travel-document-translation-international-seamless"
    },
    {
      title: "Insurance Document Translation: Risk Management Across Borders",
      excerpt: "Navigate international insurance requirements with expert translation services. Understand policy translation, claims documentation, and regulatory compliance for global insurance operations.",
      category: "Insurance Translation",
      readTime: "9 min read",
      date: formatDate(13),
      image: articleImages[13],
      slug: "insurance-document-translation-global-risk-management"
    },
    {
      title: "Manufacturing Translation: Global Production Documentation",
      excerpt: "Ensure manufacturing excellence with precise technical translation. Learn about safety manuals, operational procedures, and quality control documentation for international production.",
      category: "Manufacturing Translation",
      readTime: "10 min read",
      date: formatDate(14),
      image: articleImages[14],
      slug: "manufacturing-translation-global-production-documentation"
    },
    {
      title: "Real Estate Translation: International Property Documentation",
      excerpt: "Navigate international real estate transactions with accurate document translation. Discover requirements for property contracts, legal descriptions, and regulatory compliance documentation.",
      category: "Real Estate Translation",
      readTime: "8 min read",
      date: formatDate(15),
      image: articleImages[15],
      slug: "real-estate-translation-international-property"
    },
    {
      title: "IT Documentation Translation: Technical Communication Excellence",
      excerpt: "Master IT documentation translation for global technology deployment. Learn about user manuals, API documentation, and system specifications translation for international markets.",
      category: "IT Translation",
      readTime: "11 min read",
      date: formatDate(16),
      image: articleImages[16],
      slug: "it-documentation-translation-technical-excellence"
    },
    {
      title: "Patent Translation Services: Intellectual Property Protection",
      excerpt: "Protect intellectual property with accurate patent translation services. Understand technical terminology, legal requirements, and filing procedures for international patent applications.",
      category: "Patent Translation",
      readTime: "13 min read",
      date: formatDate(17),
      image: articleImages[17],
      slug: "patent-translation-services-intellectual-property"
    },
    {
      title: "Gaming Localization: Creating Immersive Global Experiences",
      excerpt: "Transform gaming content for international audiences with professional localization. Discover cultural adaptation, character dialogue translation, and user interface optimization for global gaming success.",
      category: "Gaming Localization",
      readTime: "12 min read",
      date: formatDate(18),
      image: articleImages[18],
      slug: "gaming-localization-immersive-global-experiences"
    },
    {
      title: "Government Document Translation: Official Communication Standards",
      excerpt: "Ensure accurate government document translation for official communications. Learn about diplomatic correspondence, policy documents, and regulatory compliance translation requirements.",
      category: "Government Translation",
      readTime: "10 min read",
      date: formatDate(19),
      image: articleImages[19],
      slug: "government-document-translation-official-standards"
    },
    {
      title: "Environmental Document Translation: Sustainable Global Communication",
      excerpt: "Navigate environmental compliance with expert document translation. Understand environmental impact assessments, sustainability reports, and regulatory documentation for international projects.",
      category: "Environmental Translation",
      readTime: "9 min read",
      date: formatDate(20),
      image: articleImages[20],
      slug: "environmental-document-translation-sustainable-communication"
    },
    {
      title: "Energy Sector Translation: Power Industry Documentation",
      excerpt: "Ensure energy sector compliance with specialized translation services. Discover requirements for safety protocols, environmental assessments, and technical specifications in renewable energy projects.",
      category: "Energy Translation",
      readTime: "11 min read",
      date: formatDate(21),
      image: articleImages[21],
      slug: "energy-sector-translation-power-industry"
    },
    {
      title: "Food Industry Translation: Global Culinary Communication",
      excerpt: "Navigate food industry regulations with accurate translation services. Learn about nutritional labeling, safety protocols, and regulatory compliance for international food products.",
      category: "Food Translation",
      readTime: "8 min read",
      date: formatDate(22),
      image: articleImages[22],
      slug: "food-industry-translation-global-culinary"
    },
    {
      title: "Fashion Translation: Style Communication Across Cultures",
      excerpt: "Succeed in global fashion markets with expert translation services. Discover brand messaging, product descriptions, and cultural adaptation strategies for international fashion brands.",
      category: "Fashion Translation",
      readTime: "7 min read",
      date: formatDate(23),
      image: articleImages[23],
      slug: "fashion-translation-style-communication-cultures"
    },
    {
      title: "Document Translation Quality Assurance: Ensuring Excellence",
      excerpt: "Understand quality assurance processes in professional document translation. Learn about review procedures, terminology management, and quality control measures that ensure translation accuracy.",
      category: "Quality Assurance",
      readTime: "10 min read",
      date: formatDate(24),
      image: articleImages[24],
      slug: "document-translation-quality-assurance-excellence"
    },
    {
      title: "Translation Project Management: Efficient Global Communication",
      excerpt: "Master translation project management for large-scale international initiatives. Discover workflow optimization, team coordination, and delivery strategies for complex translation projects.",
      category: "Project Management",
      readTime: "12 min read",
      date: formatDate(25),
      image: articleImages[0],
      slug: "translation-project-management-global-communication"
    },
    {
      title: "Multilingual SEO Translation: Global Search Optimization",
      excerpt: "Optimize international SEO with expert translation services. Learn about keyword research, meta tag translation, and cultural adaptation strategies for global search engine success.",
      category: "SEO Translation",
      readTime: "13 min read",
      date: formatDate(26),
      image: articleImages[1],
      slug: "multilingual-seo-translation-global-optimization"
    },
    {
      title: "Translation Technology: AI and Human Expertise Combined",
      excerpt: "Explore the future of translation technology and human expertise integration. Understand CAT tools, machine translation, and quality enhancement technologies in professional translation services.",
      category: "Translation Technology",
      readTime: "11 min read",
      date: formatDate(27),
      image: articleImages[2],
      slug: "translation-technology-ai-human-expertise"
    },
    {
      title: "Cultural Adaptation in Translation: Beyond Language Barriers",
      excerpt: "Master cultural adaptation techniques for successful international communication. Learn about cultural nuances, local customs, and market-specific adaptations in professional translation.",
      category: "Cultural Adaptation",
      readTime: "9 min read",
      date: formatDate(28),
      image: articleImages[3],
      slug: "cultural-adaptation-translation-language-barriers"
    },
    {
      title: "Emergency Translation Services: Urgent Document Processing",
      excerpt: "Access emergency translation services for urgent documentation needs. Understand rapid turnaround processes, quality maintenance, and 24/7 availability for critical translation requirements.",
      category: "Emergency Translation",
      readTime: "6 min read",
      date: formatDate(29),
      image: articleImages[4],
      slug: "emergency-translation-services-urgent-processing"
    },
    {
      title: "Translation Cost Optimization: Maximizing Value and Quality",
      excerpt: "Optimize translation costs while maintaining quality standards. Discover pricing strategies, volume discounts, and efficiency measures for cost-effective international communication solutions.",
      category: "Cost Optimization",
      readTime: "8 min read",
      date: formatDate(30),
      image: articleImages[5],
      slug: "translation-cost-optimization-value-quality"
    },
    {
      title: "Interpretation Services: Real-Time Multilingual Communication",
      excerpt: "Understand professional interpretation services for live multilingual communication. Learn about simultaneous interpretation, consecutive interpretation, and technology-enhanced interpretation solutions.",
      category: "Interpretation Services",
      readTime: "10 min read",
      date: formatDate(31),
      image: articleImages[6],
      slug: "interpretation-services-realtime-multilingual"
    },
    {
      title: "Translation Memory Systems: Consistency and Efficiency",
      excerpt: "Leverage translation memory systems for consistent, efficient translations. Discover how TM databases improve quality, reduce costs, and ensure terminology consistency across projects.",
      category: "Translation Memory",
      readTime: "12 min read",
      date: formatDate(32),
      image: articleImages[7],
      slug: "translation-memory-systems-consistency-efficiency"
    },
    {
      title: "Subtitle Translation: Global Media Content Accessibility",
      excerpt: "Create accessible global media content with professional subtitle translation. Learn about timing, cultural adaptation, and technical requirements for international video content.",
      category: "Subtitle Translation",
      readTime: "9 min read",
      date: formatDate(33),
      image: articleImages[8],
      slug: "subtitle-translation-global-media-accessibility"
    },
    {
      title: "Voice-over Translation: Multilingual Audio Content Excellence",
      excerpt: "Produce exceptional multilingual audio content with voice-over translation services. Understand script adaptation, voice talent selection, and cultural synchronization for global audio projects.",
      category: "Voice-over Translation",
      readTime: "11 min read",
      date: formatDate(34),
      image: articleImages[9],
      slug: "voiceover-translation-multilingual-audio-excellence"
    },
    {
      title: "Translation Revision Services: Perfecting Global Communication",
      excerpt: "Enhance translation quality with professional revision services. Learn about editing processes, linguistic review, and quality improvement strategies for polished international communication.",
      category: "Translation Revision",
      readTime: "8 min read",
      date: formatDate(35),
      image: articleImages[10],
      slug: "translation-revision-services-global-communication"
    },
    {
      title: "Specialized Terminology Management: Industry-Specific Accuracy",
      excerpt: "Master specialized terminology management for industry-specific translations. Understand glossary development, term validation, and consistency maintenance across technical domains.",
      category: "Terminology Management",
      readTime: "13 min read",
      date: formatDate(36),
      image: articleImages[11],
      slug: "specialized-terminology-management-industry-accuracy"
    },
    {
      title: "Remote Translation Solutions: Digital-First Global Communication",
      excerpt: "Embrace remote translation solutions for efficient global communication. Discover cloud-based platforms, collaborative tools, and digital workflows for seamless international projects.",
      category: "Remote Translation",
      readTime: "10 min read",
      date: formatDate(37),
      image: articleImages[12],
      slug: "remote-translation-solutions-digital-communication"
    },
    {
      title: "Translation Ethics: Professional Standards and Best Practices",
      excerpt: "Understand translation ethics and professional standards in the industry. Learn about confidentiality, accuracy requirements, and ethical guidelines for responsible translation practices.",
      category: "Translation Ethics",
      readTime: "9 min read",
      date: formatDate(38),
      image: articleImages[13],
      slug: "translation-ethics-professional-standards"
    },
    {
      title: "Future of Translation Services: Trends and Innovations 2024",
      excerpt: "Explore the future of translation services with emerging trends and innovations. Discover AI integration, real-time translation, and next-generation technologies shaping global communication.",
      category: "Industry Trends",
      readTime: "14 min read",
      date: formatDate(39),
      image: articleImages[14],
      slug: "future-translation-services-trends-innovations-2024"
    },
    {
      title: "Translation Workflow Automation: Streamlining Global Projects",
      excerpt: "Optimize translation workflows with automation technologies. Learn about process streamlining, quality checkpoints, and efficiency improvements in large-scale translation operations.",
      category: "Workflow Automation",
      readTime: "11 min read",
      date: formatDate(40),
      image: articleImages[15],
      slug: "translation-workflow-automation-global-projects"
    },
    {
      title: "Cross-Cultural Marketing Translation: Global Brand Success",
      excerpt: "Achieve global brand success with cross-cultural marketing translation. Understand cultural sensitivity, brand voice adaptation, and market-specific messaging for international campaigns.",
      category: "Marketing Translation",
      readTime: "12 min read",
      date: formatDate(41),
      image: articleImages[16],
      slug: "cross-cultural-marketing-translation-brand-success"
    },
    {
      title: "Translation Security: Protecting Confidential Information",
      excerpt: "Ensure translation security for confidential information protection. Learn about data encryption, secure transmission, and confidentiality protocols in professional translation services.",
      category: "Translation Security",
      readTime: "10 min read",
      date: formatDate(42),
      image: articleImages[17],
      slug: "translation-security-confidential-information"
    },
    {
      title: "Multi-Language Customer Support: Global Service Excellence",
      excerpt: "Deliver exceptional multi-language customer support with professional translation. Understand support documentation translation, cultural communication styles, and global service standards.",
      category: "Customer Support",
      readTime: "8 min read",
      date: formatDate(43),
      image: articleImages[18],
      slug: "multilanguage-customer-support-global-excellence"
    },
    {
      title: "Translation Training: Building Professional Language Expertise",
      excerpt: "Develop professional language expertise with comprehensive translation training. Explore certification programs, skill development, and career advancement in the translation industry.",
      category: "Professional Training",
      readTime: "13 min read",
      date: formatDate(44),
      image: articleImages[19],
      slug: "translation-training-professional-language-expertise"
    },
    {
      title: "Global Compliance Translation: Meeting International Standards",
      excerpt: "Ensure global compliance with expert translation services. Learn about regulatory requirements, international standards, and compliance documentation for multinational operations.",
      category: "Compliance Translation",
      readTime: "11 min read",
      date: formatDate(45),
      image: articleImages[20],
      slug: "global-compliance-translation-international-standards"
    },
    {
      title: "Translation Quality Metrics: Measuring Excellence Standards",
      excerpt: "Measure translation excellence with comprehensive quality metrics. Understand evaluation criteria, performance indicators, and continuous improvement strategies for translation services.",
      category: "Quality Metrics",
      readTime: "9 min read",
      date: formatDate(46),
      image: articleImages[21],
      slug: "translation-quality-metrics-excellence-standards"
    },
    {
      title: "International Document Formatting: Global Standards Compliance",
      excerpt: "Master international document formatting for global standards compliance. Learn about layout adaptation, cultural formatting preferences, and technical requirements for international documents.",
      category: "Document Formatting",
      readTime: "7 min read",
      date: formatDate(47),
      image: articleImages[22],
      slug: "international-document-formatting-global-standards"
    },
    {
      title: "Translation Industry Certification: Professional Credentialing",
      excerpt: "Understand translation industry certification and professional credentialing. Explore certification processes, industry standards, and credential recognition for translation service providers.",
      category: "Industry Certification",
      readTime: "10 min read",
      date: formatDate(48),
      image: articleImages[23],
      slug: "translation-industry-certification-professional"
    },
    {
      title: "Machine Translation Post-Editing: Enhancing AI Translation Quality",
      excerpt: "Master machine translation post-editing for enhanced AI translation quality. Learn about MTPE workflows, quality improvement techniques, and human-AI collaboration in modern translation services.",
      category: "MTPE Services",
      readTime: "12 min read",
      date: formatDate(49),
      image: articleImages[24],
      slug: "machine-translation-post-editing-ai-quality"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      <Header />
      <div className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
              Translation Insights & Expertise
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Discover professional translation strategies, industry best practices, and expert insights for global communication success.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-blue-200">
              <span className="flex items-center"><Clock className="h-4 w-4 mr-1" /> Updated Daily</span>
              <span className="flex items-center"><User className="h-4 w-4 mr-1" /> Expert Authors</span>
              <span className="flex items-center"><Calendar className="h-4 w-4 mr-1" /> Latest Industry Trends</span>
            </div>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Professional Translation Resources
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Comprehensive guides and expert insights covering all aspects of professional translation services, from document translation to specialized industry solutions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article, index) => (
                <Card 
                  key={article.slug} 
                  className="hover:shadow-lg transition-all duration-300 h-full flex flex-col group cursor-pointer"
                  onClick={() => setSelectedArticle(article)}
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
                    <CardDescription className="line-clamp-3">
                      {article.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <div className="flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        {new Date(article.date).toLocaleDateString('en-US', { 
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
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Article Detail Modal */}
        {selectedArticle && (
          <div 
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedArticle(null)}
          >
            <div 
              className="bg-white rounded-lg max-w-4xl max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img 
                  src={selectedArticle.image} 
                  alt={selectedArticle.title}
                  className="w-full h-64 object-cover"
                />
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="absolute top-4 right-4 bg-white/80 hover:bg-white rounded-full p-2 transition-colors"
                >
                  ✕
                </button>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <Badge variant="secondary">{selectedArticle.category}</Badge>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 mr-1" />
                    {selectedArticle.readTime}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-1" />
                    {new Date(selectedArticle.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </div>
                </div>
                <h1 className="text-3xl font-bold mb-6">{selectedArticle.title}</h1>
                <div className="prose max-w-none">
                  <p className="text-lg text-muted-foreground mb-6">{selectedArticle.excerpt}</p>
                  <div className="space-y-4">
                    <p>Professional translation services have become essential for businesses expanding globally. This comprehensive guide explores the key aspects of document translation services and how to choose the right provider for your needs.</p>
                    
                    <h2 className="text-2xl font-semibold mt-8 mb-4">Why Professional Translation Matters</h2>
                    <p>Accurate translation goes beyond converting words from one language to another. It involves understanding cultural nuances, technical terminology, and industry-specific requirements to ensure your message resonates with the target audience.</p>
                    
                    <h2 className="text-2xl font-semibold mt-8 mb-4">Key Benefits of Professional Services</h2>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Certified accuracy and quality assurance</li>
                      <li>Cultural adaptation and localization</li>
                      <li>Industry-specific expertise</li>
                      <li>Confidentiality and security</li>
                      <li>Timely delivery and project management</li>
                    </ul>
                    
                    <h2 className="text-2xl font-semibold mt-8 mb-4">Choosing the Right Translation Partner</h2>
                    <p>When selecting a translation service provider, consider their expertise in your industry, quality assurance processes, technology capabilities, and track record of successful projects.</p>
                    
                    <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                      <h3 className="text-xl font-semibold mb-2">Ready to Get Started?</h3>
                      <p className="mb-4">Contact our expert team for a personalized consultation and free quote for your translation project.</p>
                      <button 
                        onClick={() => {
                          setSelectedArticle(null);
                          window.location.href = '/#quote';
                        }}
                        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        Get Free Quote
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Call to Action */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-16 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Need Professional Translation Services?</h2>
            <p className="text-xl mb-8 opacity-90">
              Get expert translation solutions tailored to your specific industry and requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => window.location.href = '/#quote'}
                className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Free Quote
              </button>
              <button 
                onClick={() => window.location.href = '/#contact'}
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors"
              >
                Contact Expert
              </button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Articles;