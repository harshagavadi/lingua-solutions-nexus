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

  const unsplashImages = [
    "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=800&h=600&fit=crop&auto=format",
    "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop&auto=format",
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop&auto=format",
    "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=600&fit=crop&auto=format",
    "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=600&fit=crop&auto=format",
    "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=800&h=600&fit=crop&auto=format",
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&h=600&fit=crop&auto=format",
    "https://images.unsplash.com/photo-1466442929976-97f336a657be?w=800&h=600&fit=crop&auto=format",
    "https://images.unsplash.com/photo-1517022812141-23620dba5c23?w=800&h=600&fit=crop&auto=format",
    "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=800&h=600&fit=crop&auto=format"
  ];

  const articles = [
    {
      title: "Complete Guide to Professional Document Translation Services in 2024",
      excerpt: "Discover why businesses worldwide trust professional document translation services for accurate, culturally-adapted content. Learn about certification requirements, quality assurance processes, and how to choose the right translation partner for your specific industry needs.",
      category: "Document Translation",
      readTime: "8 min read",
      date: formatDate(0),
      image: unsplashImages[0],
      slug: "professional-document-translation-services-2024"
    },
    {
      title: "Legal Translation Services: Ensuring Accuracy in International Law and Compliance",
      excerpt: "Navigate the complex world of legal document translation with expert insights. From contract translation to court document certification, understand how professional legal translators ensure accuracy, maintain confidentiality, and meet stringent legal requirements across jurisdictions.",
      category: "Legal Translation",
      readTime: "10 min read",
      date: formatDate(1),
      image: unsplashImages[1],
      slug: "legal-translation-services-international-law-compliance"
    },
    {
      title: "Medical Translation: Precision Healthcare Communication Across Languages",
      excerpt: "Explore the critical role of medical translation in patient safety and regulatory compliance. Learn about specialized terminology management, clinical trial documentation, pharmaceutical labeling, and how medical translators ensure life-saving accuracy in healthcare communications.",
      category: "Medical Translation",
      readTime: "9 min read",
      date: formatDate(2),
      image: unsplashImages[2],
      slug: "medical-translation-precision-healthcare-communication"
    },
    {
      title: "Technical Translation for Engineering: Managing Complex Documentation Projects",
      excerpt: "Master the art of technical translation for engineering projects. From user manuals to safety protocols, discover how specialized technical translators handle complex diagrams, maintain consistency across multiple languages, and ensure technical accuracy in global engineering documentation.",
      category: "Technical Translation",
      readTime: "11 min read",
      date: formatDate(3),
      image: unsplashImages[3],
      slug: "technical-translation-engineering-documentation-projects"
    },
    {
      title: "Certified Translation Services: Official Document Requirements and Process",
      excerpt: "Understanding certified translation requirements for immigration, academic, and legal purposes. Learn about notarization processes, apostille services, and how certified translators ensure your official documents meet government and institutional standards worldwide.",
      category: "Certified Translation",
      readTime: "7 min read",
      date: formatDate(4),
      image: unsplashImages[4],
      slug: "certified-translation-services-official-document-requirements"
    },
    {
      title: "Business Translation Solutions for Global Market Expansion Success",
      excerpt: "Accelerate your international business growth with strategic translation solutions. Discover how professional business translation services help companies expand globally, from marketing materials to financial reports, ensuring cultural relevance and market penetration.",
      category: "Business Translation",
      readTime: "9 min read",
      date: formatDate(5),
      image: unsplashImages[5],
      slug: "business-translation-solutions-global-market-expansion"
    },
    {
      title: "Financial Document Translation: Banking, Insurance, and Investment Compliance",
      excerpt: "Navigate complex financial regulations with expert financial document translation. From annual reports to compliance documentation, learn how specialized financial translators ensure accuracy, maintain confidentiality, and meet regulatory requirements across international markets.",
      category: "Financial Translation",
      readTime: "10 min read",
      date: formatDate(6),
      image: unsplashImages[6],
      slug: "financial-document-translation-banking-insurance-compliance"
    },
    {
      title: "Website Localization Services: Beyond Translation for Global Digital Success",
      excerpt: "Transform your website for international markets with comprehensive localization services. Understand the difference between translation and localization, including cultural adaptation, local SEO optimization, payment integration, and user experience considerations for global audiences.",
      category: "Website Localization",
      readTime: "8 min read",
      date: formatDate(7),
      image: unsplashImages[7],
      slug: "website-localization-services-global-digital-success"
    },
    {
      title: "Academic Translation Services: Scholarly Research and Publication Support",
      excerpt: "Advance your academic career with professional scholarly translation services. From research papers to dissertation translation, discover how academic translators maintain scientific accuracy, preserve author voice, and meet publication standards for international journals.",
      category: "Academic Translation",
      readTime: "9 min read",
      date: formatDate(8),
      image: unsplashImages[8],
      slug: "academic-translation-services-scholarly-research-publication"
    },
    {
      title: "Immigration Document Translation: Visa Applications and Citizenship Requirements",
      excerpt: "Successfully navigate immigration processes with certified document translation services. Complete guide covering birth certificates, marriage certificates, academic transcripts, and employment records translation for visa applications, green cards, and citizenship processes.",
      category: "Immigration Translation",
      readTime: "12 min read",
      date: formatDate(9),
      image: unsplashImages[9],
      slug: "immigration-document-translation-visa-citizenship-requirements"
    },
    {
      title: "Marketing Translation and Transcreation: Connecting Brands with Global Audiences",
      excerpt: "Create compelling marketing campaigns that resonate across cultures with professional marketing translation and transcreation services. Learn how to adapt brand messaging, maintain emotional impact, and drive conversions in international markets.",
      category: "Marketing Translation",
      readTime: "8 min read",
      date: formatDate(10),
      image: unsplashImages[0],
      slug: "marketing-translation-transcreation-global-brand-connection"
    },
    {
      title: "Patent Translation Services: Protecting Intellectual Property Worldwide",
      excerpt: "Safeguard your innovations with expert patent translation services. Understanding technical terminology, legal requirements, and filing procedures across different patent offices. Learn how specialized patent translators ensure your intellectual property protection is maintained globally.",
      category: "Patent Translation",
      readTime: "11 min read",
      date: formatDate(11),
      image: unsplashImages[1],
      slug: "patent-translation-services-intellectual-property-protection"
    },
    {
      title: "Software Localization: Making Applications Accessible to Global Users",
      excerpt: "Transform your software for international markets with comprehensive localization strategies. From UI translation to cultural adaptation, discover how software localization increases user adoption, improves user experience, and drives global revenue growth.",
      category: "Software Localization",
      readTime: "10 min read",
      date: formatDate(12),
      image: unsplashImages[2],
      slug: "software-localization-global-user-accessibility"
    },
    {
      title: "Pharmaceutical Translation: Regulatory Compliance in Global Drug Development",
      excerpt: "Navigate complex pharmaceutical regulations with specialized translation services. From clinical trial protocols to regulatory submissions, understand how pharmaceutical translators ensure patient safety, regulatory compliance, and successful drug approvals worldwide.",
      category: "Pharmaceutical Translation",
      readTime: "13 min read",
      date: formatDate(13),
      image: unsplashImages[3],
      slug: "pharmaceutical-translation-regulatory-compliance-drug-development"
    },
    {
      title: "International Contract Translation: Legal Precision for Global Business Deals",
      excerpt: "Ensure your international contracts are legally sound and culturally appropriate with expert contract translation services. Learn about legal terminology management, jurisdiction considerations, and how professional translators protect your business interests in global transactions.",
      category: "Legal Translation",
      readTime: "10 min read",
      date: formatDate(14),
      image: unsplashImages[4],
      slug: "international-contract-translation-global-business-deals"
    },
    {
      title: "E-commerce Translation: Optimizing Online Stores for Global Sales Success",
      excerpt: "Maximize your e-commerce potential with strategic translation and localization services. From product descriptions to checkout processes, discover how professional e-commerce translation increases conversion rates and builds trust with international customers.",
      category: "E-commerce Translation",
      readTime: "9 min read",
      date: formatDate(15),
      image: unsplashImages[5],
      slug: "ecommerce-translation-global-online-sales-optimization"
    },
    {
      title: "Educational Content Translation: Bridging Language Barriers in Learning",
      excerpt: "Make education accessible worldwide with professional educational content translation. From curriculum materials to online courses, learn how educational translators maintain pedagogical effectiveness while adapting content for diverse cultural and linguistic contexts.",
      category: "Educational Translation",
      readTime: "8 min read",
      date: formatDate(16),
      image: unsplashImages[6],
      slug: "educational-content-translation-global-learning-accessibility"
    },
    {
      title: "Gaming Localization: Creating Immersive Experiences for Global Gamers",
      excerpt: "Level up your game's global appeal with comprehensive gaming localization services. From dialogue translation to cultural adaptation, discover how gaming localization creates authentic, engaging experiences that resonate with players worldwide.",
      category: "Gaming Localization",
      readTime: "11 min read",
      date: formatDate(17),
      image: unsplashImages[7],
      slug: "gaming-localization-immersive-global-player-experiences"
    },
    {
      title: "Insurance Document Translation: Managing Risk Across International Markets",
      excerpt: "Navigate global insurance markets with precise document translation services. From policy documents to claims processing, understand how insurance translators ensure coverage clarity, regulatory compliance, and effective risk management across borders.",
      category: "Insurance Translation",
      readTime: "9 min read",
      date: formatDate(18),
      image: unsplashImages[8],
      slug: "insurance-document-translation-international-risk-management"
    },
    {
      title: "Real Estate Translation: Facilitating International Property Transactions",
      excerpt: "Streamline international real estate transactions with professional translation services. From property listings to legal documentation, learn how real estate translation specialists ensure accurate communication and successful property deals across global markets.",
      category: "Real Estate Translation",
      readTime: "8 min read",
      date: formatDate(19),
      image: unsplashImages[9],
      slug: "real-estate-translation-international-property-transactions"
    },
    {
      title: "Tourism Translation Services: Welcoming International Visitors Effectively",
      excerpt: "Enhance your destination's appeal with professional tourism translation services. From travel guides to hospitality materials, discover how tourism translation helps destinations attract international visitors and provide exceptional multilingual experiences.",
      category: "Tourism Translation",
      readTime: "7 min read",
      date: formatDate(20),
      image: unsplashImages[0],
      slug: "tourism-translation-services-international-visitor-experience"
    },
    {
      title: "Automotive Industry Translation: Global Vehicle Documentation Standards",
      excerpt: "Drive international success with specialized automotive translation services. From technical manuals to safety documentation, learn how automotive translators ensure accuracy, compliance, and safety across global automotive markets and regulations.",
      category: "Automotive Translation",
      readTime: "10 min read",
      date: formatDate(21),
      image: unsplashImages[1],
      slug: "automotive-industry-translation-global-documentation-standards"
    },
    {
      title: "Agricultural Translation: Supporting Global Food Security and Innovation",
      excerpt: "Advance global agriculture with specialized translation services for farming and food production. From research documentation to agricultural technology transfer, discover how agricultural translation supports food security and sustainable farming practices worldwide.",
      category: "Agricultural Translation",
      readTime: "9 min read",
      date: formatDate(22),
      image: unsplashImages[2],
      slug: "agricultural-translation-global-food-security-innovation"
    },
    {
      title: "Environmental Translation: Communicating Sustainability Across Borders",
      excerpt: "Advance global environmental initiatives with specialized translation services for sustainability projects. From climate research to environmental impact assessments, learn how environmental translators support international collaboration for a sustainable future.",
      category: "Environmental Translation",
      readTime: "11 min read",
      date: formatDate(23),
      image: unsplashImages[3],
      slug: "environmental-translation-sustainability-global-communication"
    },
    {
      title: "Energy Sector Translation: Powering Global Energy Transition",
      excerpt: "Support the global energy transition with specialized translation services for renewable energy, oil & gas, and nuclear industries. From technical specifications to regulatory documentation, ensure accurate communication in the evolving energy landscape.",
      category: "Energy Translation",
      readTime: "12 min read",
      date: formatDate(24),
      image: unsplashImages[4],
      slug: "energy-sector-translation-global-energy-transition"
    },
    {
      title: "Aviation Translation: Ensuring Safety in International Aviation Industry",
      excerpt: "Maintain aviation safety standards with critical translation services for the aerospace industry. From pilot training materials to maintenance manuals, discover how aviation translators ensure safety, compliance, and effective communication in international aviation.",
      category: "Aviation Translation",
      readTime: "11 min read",
      date: formatDate(25),
      image: unsplashImages[5],
      slug: "aviation-translation-international-safety-standards"
    },
    {
      title: "Maritime Translation: Navigating International Shipping and Trade",
      excerpt: "Navigate global maritime trade with specialized translation services for shipping and logistics. From port documentation to maritime law, learn how maritime translators ensure smooth international shipping operations and regulatory compliance.",
      category: "Maritime Translation",
      readTime: "10 min read",
      date: formatDate(26),
      image: unsplashImages[6],
      slug: "maritime-translation-international-shipping-trade"
    },
    {
      title: "Fashion Industry Translation: Global Style and Brand Communication",
      excerpt: "Expand your fashion brand internationally with specialized translation services for the fashion industry. From product catalogs to brand storytelling, discover how fashion translation helps brands connect authentically with global fashion consumers.",
      category: "Fashion Translation",
      readTime: "8 min read",
      date: formatDate(27),
      image: unsplashImages[7],
      slug: "fashion-industry-translation-global-brand-communication"
    },
    {
      title: "Food Industry Translation: Global Culinary Communication and Safety",
      excerpt: "Ensure food safety and cultural authenticity with professional food industry translation services. From recipes to nutrition labeling, learn how food translators navigate cultural preferences, regulatory requirements, and culinary traditions worldwide.",
      category: "Food Translation",
      readTime: "9 min read",
      date: formatDate(28),
      image: unsplashImages[8],
      slug: "food-industry-translation-global-culinary-safety"
    },
    {
      title: "Sports Translation: Breaking Language Barriers in International Athletics",
      excerpt: "Unite global sports communities with professional sports translation services. From Olympic documentation to athlete communications, discover how sports translators facilitate international competitions and cross-cultural athletic collaboration.",
      category: "Sports Translation",
      readTime: "8 min read",
      date: formatDate(29),
      image: unsplashImages[9],
      slug: "sports-translation-international-athletics-communication"
    },
    {
      title: "Entertainment Translation: Global Media Localization and Cultural Adaptation",
      excerpt: "Entertain global audiences with comprehensive entertainment translation and localization services. From film subtitling to music industry translation, learn how entertainment translators preserve artistic integrity while ensuring cultural relevance.",
      category: "Entertainment Translation",
      readTime: "10 min read",
      date: formatDate(30),
      image: unsplashImages[0],
      slug: "entertainment-translation-global-media-localization"
    },
    {
      title: "Construction Industry Translation: Building Success Across International Projects",
      excerpt: "Construct international success with specialized translation services for the construction industry. From architectural plans to safety protocols, discover how construction translators ensure project accuracy, worker safety, and regulatory compliance globally.",
      category: "Construction Translation",
      readTime: "10 min read",
      date: formatDate(31),
      image: unsplashImages[1],
      slug: "construction-industry-translation-international-project-success"
    },
    {
      title: "Telecommunications Translation: Connecting the World Through Technology",
      excerpt: "Enable global connectivity with specialized telecommunications translation services. From network documentation to user interfaces, learn how telecom translators support the digital infrastructure that connects our increasingly globalized world.",
      category: "Telecommunications Translation",
      readTime: "11 min read",
      date: formatDate(32),
      image: unsplashImages[2],
      slug: "telecommunications-translation-global-technology-connection"
    },
    {
      title: "Retail Translation: Creating Seamless Shopping Experiences Worldwide",
      excerpt: "Transform your retail business for global markets with comprehensive translation services. From product catalogs to customer service, discover how retail translation creates consistent, engaging shopping experiences that drive international sales growth.",
      category: "Retail Translation",
      readTime: "9 min read",
      date: formatDate(33),
      image: unsplashImages[3],
      slug: "retail-translation-global-shopping-experiences"
    },
    {
      title: "Human Resources Translation: Managing Global Workforce Communications",
      excerpt: "Optimize global workforce management with specialized HR translation services. From employee handbooks to international recruitment, learn how HR translators ensure clear communication, compliance, and employee engagement across diverse cultural contexts.",
      category: "HR Translation",
      readTime: "10 min read",
      date: formatDate(34),
      image: unsplashImages[4],
      slug: "human-resources-translation-global-workforce-management"
    },
    {
      title: "Government Translation: Public Service Accessibility and International Relations",
      excerpt: "Serve diverse communities with professional government translation services. From public documents to diplomatic communications, discover how government translators ensure citizen access to services and facilitate international cooperation and understanding.",
      category: "Government Translation",
      readTime: "12 min read",
      date: formatDate(35),
      image: unsplashImages[5],
      slug: "government-translation-public-service-international-relations"
    },
    {
      title: "Non-Profit Translation: Amplifying Global Impact and Humanitarian Outreach",
      excerpt: "Maximize your organization's global impact with specialized non-profit translation services. From fundraising campaigns to program documentation, learn how non-profit translators help humanitarian organizations reach diverse communities and drive positive change worldwide.",
      category: "Non-Profit Translation",
      readTime: "9 min read",
      date: formatDate(36),
      image: unsplashImages[6],
      slug: "nonprofit-translation-global-humanitarian-impact"
    },
    {
      title: "Scientific Research Translation: Advancing Knowledge Without Language Barriers",
      excerpt: "Accelerate scientific discovery with professional research translation services. From peer-reviewed publications to grant proposals, discover how scientific translators maintain research integrity while facilitating international collaboration and knowledge sharing.",
      category: "Scientific Translation",
      readTime: "11 min read",
      date: formatDate(37),
      image: unsplashImages[7],
      slug: "scientific-research-translation-international-knowledge-sharing"
    },
    {
      title: "Translation Quality Assurance: Implementing Excellence Standards and Best Practices",
      excerpt: "Ensure translation excellence with comprehensive quality assurance frameworks. From linguistic review to cultural validation, learn about industry-standard QA processes that guarantee accuracy, consistency, and cultural appropriateness in professional translation projects.",
      category: "Quality Assurance",
      readTime: "10 min read",
      date: formatDate(38),
      image: unsplashImages[8],
      slug: "translation-quality-assurance-excellence-standards"
    },
    {
      title: "Translation Technology: AI, Machine Learning, and Human Expertise Integration",
      excerpt: "Explore the future of translation technology and its integration with human expertise. From CAT tools to neural machine translation, discover how modern technology enhances translator productivity while maintaining the human touch essential for quality translation.",
      category: "Translation Technology",
      readTime: "13 min read",
      date: formatDate(39),
      image: unsplashImages[9],
      slug: "translation-technology-ai-human-expertise-integration"
    },
    {
      title: "Cultural Adaptation in Translation: Mastering Cross-Cultural Communication",
      excerpt: "Master the art of cultural adaptation in professional translation services. Beyond literal translation, learn how cultural experts ensure your content resonates authentically with target audiences, respecting local customs, values, and communication styles.",
      category: "Cultural Adaptation",
      readTime: "11 min read",
      date: formatDate(40),
      image: unsplashImages[0],
      slug: "cultural-adaptation-translation-cross-cultural-communication"
    },
    {
      title: "Emergency Translation Services: Rapid Response for Time-Critical Communications",
      excerpt: "Access rapid translation services for urgent and time-sensitive documents. From medical emergencies to legal deadlines, discover how emergency translation services provide fast, accurate translations without compromising quality or confidentiality.",
      category: "Emergency Translation",
      readTime: "7 min read",
      date: formatDate(41),
      image: unsplashImages[1],
      slug: "emergency-translation-services-rapid-response-communications"
    },
    {
      title: "Translation Project Management: Orchestrating Complex Multilingual Initiatives",
      excerpt: "Successfully manage large-scale translation projects with proven project management methodologies. From timeline planning to quality control, learn how professional project managers coordinate complex multilingual initiatives and ensure successful delivery.",
      category: "Project Management",
      readTime: "10 min read",
      date: formatDate(42),
      image: unsplashImages[2],
      slug: "translation-project-management-multilingual-initiatives"
    },
    {
      title: "Selecting Professional Translation Services: Complete Buyer's Guide 2024",
      excerpt: "Make informed decisions when choosing translation service providers with this comprehensive buyer's guide. Evaluate credentials, assess quality standards, compare pricing models, and find the perfect translation partner for your specific business needs.",
      category: "Service Selection",
      readTime: "12 min read",
      date: formatDate(43),
      image: unsplashImages[3],
      slug: "selecting-professional-translation-services-buyers-guide-2024"
    },
    {
      title: "Translation Pricing Guide: Understanding Costs and Value in Language Services",
      excerpt: "Navigate translation pricing with transparency and confidence. Understand cost factors, compare pricing models, and learn how to budget effectively for professional translation services while ensuring quality and value for your investment.",
      category: "Pricing Guide",
      readTime: "9 min read",
      date: formatDate(44),
      image: unsplashImages[4],
      slug: "translation-pricing-guide-costs-value-language-services"
    },
    {
      title: "Document Preparation for Translation: Optimization Strategies and Best Practices",
      excerpt: "Optimize your translation workflow with strategic document preparation techniques. From file formatting to terminology management, learn how proper preparation reduces costs, improves accuracy, and accelerates delivery timelines for translation projects.",
      category: "Document Preparation",
      readTime: "8 min read",
      date: formatDate(45),
      image: unsplashImages[5],
      slug: "document-preparation-translation-optimization-best-practices"
    },
    {
      title: "Post-Translation Review: Quality Control and Delivery Excellence Standards",
      excerpt: "Implement effective post-translation review processes to ensure exceptional quality delivery. From linguistic validation to client feedback integration, discover best practices for reviewing translated content and maintaining consistent quality standards.",
      category: "Quality Review",
      readTime: "10 min read",
      date: formatDate(46),
      image: unsplashImages[6],
      slug: "post-translation-review-quality-control-excellence"
    },
    {
      title: "Building Strategic Translation Partnerships: Long-Term Success Frameworks",
      excerpt: "Develop successful long-term partnerships with translation service providers through strategic relationship building. Learn how to align goals, establish communication protocols, and create collaborative frameworks that drive mutual success and business growth.",
      category: "Partnership Development",
      readTime: "9 min read",
      date: formatDate(47),
      image: unsplashImages[7],
      slug: "strategic-translation-partnerships-long-term-success"
    },
    {
      title: "Translation Industry Trends 2024: Future Insights and Market Evolution",
      excerpt: "Stay ahead of translation industry developments with insights into emerging trends, technological innovations, and market evolution. From AI integration to sustainability initiatives, explore what's shaping the future of language services.",
      category: "Industry Trends",
      readTime: "12 min read",
      date: formatDate(48),
      image: unsplashImages[8],
      slug: "translation-industry-trends-2024-future-market-insights"
    },
    {
      title: "Multilingual SEO Strategy: Global Search Optimization for Translated Content",
      excerpt: "Dominate international search markets with advanced multilingual SEO strategies. From keyword localization to technical implementation, master the art of optimizing translated content for global search visibility and organic traffic growth.",
      category: "Multilingual SEO",
      readTime: "14 min read",
      date: formatDate(49),
      image: unsplashImages[9],
      slug: "multilingual-seo-strategy-global-search-optimization"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-16">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
                Translation Insights & Expert Resources
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Explore our comprehensive collection of expert articles covering all aspects of professional translation services, from legal and medical to technical and business translation solutions.
              </p>
              <div className="flex flex-wrap justify-center gap-2 text-sm text-muted-foreground">
                <span className="bg-white/50 px-3 py-1 rounded-full">50+ Expert Articles</span>
                <span className="bg-white/50 px-3 py-1 rounded-full">Updated Daily</span>
                <span className="bg-white/50 px-3 py-1 rounded-full">SEO Optimized</span>
                <span className="bg-white/50 px-3 py-1 rounded-full">Industry Leading Content</span>
              </div>
            </div>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article, index) => (
                <Card 
                  key={article.slug} 
                  className="hover:shadow-lg transition-all duration-300 h-full flex flex-col group cursor-pointer"
                  onClick={() => setSelectedArticle(article)}
                >
                  <div className="aspect-video overflow-hidden rounded-t-lg">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
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
      </div>
      <Footer />
    </div>
  );
};

export default Articles;