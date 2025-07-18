import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface Article {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  image: string;
  slug: string;
}

const articles: Article[] = [
  {
    id: 1,
    title: "Essential Guide to Legal Document Translation",
    excerpt: "Understanding the complexities and requirements for translating legal documents across different jurisdictions.",
    category: "Legal Translation",
    readTime: "8 min read",
    date: "2024-01-15",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&h=400&fit=crop",
    slug: "essential-guide-legal-document-translation"
  },
  {
    id: 2,
    title: "Medical Translation: Accuracy in Healthcare Documentation",
    excerpt: "How precise medical translation saves lives and ensures proper healthcare delivery worldwide.",
    category: "Medical Translation",
    readTime: "6 min read",
    date: "2024-01-14",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop",
    slug: "medical-translation-accuracy-healthcare"
  },
  {
    id: 3,
    title: "Business Contract Translation Best Practices",
    excerpt: "Key considerations when translating business contracts to avoid legal complications and ensure clarity.",
    category: "Business Translation",
    readTime: "7 min read",
    date: "2024-01-13",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&h=400&fit=crop",
    slug: "business-contract-translation-best-practices"
  },
  {
    id: 4,
    title: "Technical Manual Translation for Global Markets",
    excerpt: "Strategies for translating complex technical documentation while maintaining accuracy and usability.",
    category: "Technical Translation",
    readTime: "9 min read",
    date: "2024-01-12",
    image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=600&h=400&fit=crop",
    slug: "technical-manual-translation-global-markets"
  },
  {
    id: 5,
    title: "Website Localization: Beyond Translation",
    excerpt: "Complete guide to adapting your website for international markets with cultural sensitivity.",
    category: "Website Localization",
    readTime: "10 min read",
    date: "2024-01-11",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    slug: "website-localization-beyond-translation"
  },
  {
    id: 6,
    title: "Immigration Document Translation Requirements",
    excerpt: "Understanding the specific requirements for translating immigration documents for various countries.",
    category: "Immigration Translation",
    readTime: "5 min read",
    date: "2024-01-10",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&h=400&fit=crop",
    slug: "immigration-document-translation-requirements"
  },
  {
    id: 7,
    title: "Financial Statement Translation for International Business",
    excerpt: "Accurate translation of financial documents for global business operations and compliance.",
    category: "Financial Translation",
    readTime: "8 min read",
    date: "2024-01-09",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
    slug: "financial-statement-translation-international-business"
  },
  {
    id: 8,
    title: "Academic Transcript Translation Services",
    excerpt: "Professional translation of academic credentials for international education and career opportunities.",
    category: "Academic Translation",
    readTime: "6 min read",
    date: "2024-01-08",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=400&fit=crop",
    slug: "academic-transcript-translation-services"
  },
  {
    id: 9,
    title: "Patent Translation: Protecting Intellectual Property Globally",
    excerpt: "Specialized translation services for patents to ensure international intellectual property protection.",
    category: "Patent Translation",
    readTime: "9 min read",
    date: "2024-01-07",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
    slug: "patent-translation-protecting-intellectual-property"
  },
  {
    id: 10,
    title: "Marriage Certificate Translation for Immigration",
    excerpt: "Step-by-step guide to translating marriage certificates for immigration and legal purposes.",
    category: "Document Translation",
    readTime: "4 min read",
    date: "2024-01-06",
    image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&h=400&fit=crop",
    slug: "marriage-certificate-translation-immigration"
  },
  {
    id: 11,
    title: "Software Localization: Code Meets Culture",
    excerpt: "Technical aspects of software localization including UI elements, error messages, and user experience.",
    category: "Software Localization",
    readTime: "11 min read",
    date: "2024-01-05",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
    slug: "software-localization-code-meets-culture"
  },
  {
    id: 12,
    title: "Certified Translation vs. Regular Translation",
    excerpt: "Understanding when you need certified translation and what makes it different from regular translation.",
    category: "Certified Translation",
    readTime: "7 min read",
    date: "2024-01-04",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop",
    slug: "certified-translation-vs-regular-translation"
  },
  {
    id: 13,
    title: "Birth Certificate Translation: Global Requirements",
    excerpt: "Country-specific requirements for birth certificate translation and apostille processes.",
    category: "Document Translation",
    readTime: "6 min read",
    date: "2024-01-03",
    image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=600&h=400&fit=crop",
    slug: "birth-certificate-translation-global-requirements"
  },
  {
    id: 14,
    title: "Marketing Content Translation: Cultural Adaptation",
    excerpt: "How to adapt marketing messages for different cultures while maintaining brand consistency.",
    category: "Marketing Translation",
    readTime: "8 min read",
    date: "2024-01-02",
    image: "https://images.unsplash.com/photo-1553484771-371a605b060b?w=600&h=400&fit=crop",
    slug: "marketing-content-translation-cultural-adaptation"
  },
  {
    id: 15,
    title: "Legal Deposition Translation Services",
    excerpt: "Specialized services for translating legal depositions and court proceedings accurately.",
    category: "Legal Translation",
    readTime: "7 min read",
    date: "2024-01-01",
    image: "https://images.unsplash.com/photo-1589994965851-a8f479c573a9?w=600&h=400&fit=crop",
    slug: "legal-deposition-translation-services"
  },
  {
    id: 16,
    title: "Pharmaceutical Document Translation Standards",
    excerpt: "Regulatory compliance and quality standards for pharmaceutical document translation.",
    category: "Medical Translation",
    readTime: "9 min read",
    date: "2023-12-31",
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=600&h=400&fit=crop",
    slug: "pharmaceutical-document-translation-standards"
  },
  {
    id: 17,
    title: "E-learning Content Localization Strategies",
    excerpt: "Best practices for localizing educational content for global online learning platforms.",
    category: "E-learning Translation",
    readTime: "10 min read",
    date: "2023-12-30",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
    slug: "elearning-content-localization-strategies"
  },
  {
    id: 18,
    title: "Insurance Policy Translation Essentials",
    excerpt: "Key considerations when translating insurance policies and claims documentation.",
    category: "Insurance Translation",
    readTime: "6 min read",
    date: "2023-12-29",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
    slug: "insurance-policy-translation-essentials"
  },
  {
    id: 19,
    title: "Video Game Localization: Playing Across Cultures",
    excerpt: "Cultural adaptation techniques for video games including dialogue, cultural references, and gameplay.",
    category: "Game Localization",
    readTime: "12 min read",
    date: "2023-12-28",
    image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=600&h=400&fit=crop",
    slug: "video-game-localization-playing-across-cultures"
  },
  {
    id: 20,
    title: "Translation Memory: Boosting Efficiency and Consistency",
    excerpt: "How translation memory technology improves translation quality and reduces costs over time.",
    category: "Translation Technology",
    readTime: "8 min read",
    date: "2023-12-27",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop",
    slug: "translation-memory-boosting-efficiency-consistency"
  },
  {
    id: 21,
    title: "Court Document Translation for International Litigation",
    excerpt: "Specialized translation services for international legal proceedings and cross-border litigation.",
    category: "Legal Translation",
    readTime: "9 min read",
    date: "2023-12-26",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&h=400&fit=crop",
    slug: "court-document-translation-international-litigation"
  },
  {
    id: 22,
    title: "Mobile App Localization: User Experience First",
    excerpt: "Optimizing mobile app translations for different screen sizes, languages, and cultural preferences.",
    category: "App Localization",
    readTime: "7 min read",
    date: "2023-12-25",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
    slug: "mobile-app-localization-user-experience-first"
  },
  {
    id: 23,
    title: "Scientific Research Translation: Precision Matters",
    excerpt: "Maintaining scientific accuracy while translating research papers and technical studies.",
    category: "Scientific Translation",
    readTime: "10 min read",
    date: "2023-12-24",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600&h=400&fit=crop",
    slug: "scientific-research-translation-precision-matters"
  },
  {
    id: 24,
    title: "Divorce Document Translation Services",
    excerpt: "Professional translation of divorce decrees and related legal documents for international recognition.",
    category: "Legal Translation",
    readTime: "5 min read",
    date: "2023-12-23",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop",
    slug: "divorce-document-translation-services"
  },
  {
    id: 25,
    title: "Translation Quality Assurance: Best Practices",
    excerpt: "Comprehensive quality control processes to ensure accurate and professional translations.",
    category: "Quality Assurance",
    readTime: "8 min read",
    date: "2023-12-22",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600&h=400&fit=crop",
    slug: "translation-quality-assurance-best-practices"
  },
  {
    id: 26,
    title: "Banking Document Translation for Global Finance",
    excerpt: "Secure and accurate translation of banking documents for international financial operations.",
    category: "Financial Translation",
    readTime: "7 min read",
    date: "2023-12-21",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
    slug: "banking-document-translation-global-finance"
  },
  {
    id: 27,
    title: "Resume Translation for International Job Search",
    excerpt: "Professional translation and adaptation of resumes for international career opportunities.",
    category: "Professional Translation",
    readTime: "6 min read",
    date: "2023-12-20",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
    slug: "resume-translation-international-job-search"
  },
  {
    id: 28,
    title: "Real Estate Document Translation",
    excerpt: "Specialized translation services for property documents in international real estate transactions.",
    category: "Real Estate Translation",
    readTime: "6 min read",
    date: "2023-12-19",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop",
    slug: "real-estate-document-translation"
  },
  {
    id: 29,
    title: "Apostille and Translation: Complete Guide",
    excerpt: "Understanding the apostille process and how it relates to document translation requirements.",
    category: "Document Legalization",
    readTime: "9 min read",
    date: "2023-12-18",
    image: "https://images.unsplash.com/photo-1589994965851-a8f479c573a9?w=600&h=400&fit=crop",
    slug: "apostille-and-translation-complete-guide"
  },
  {
    id: 30,
    title: "Food Industry Translation: From Labels to Menus",
    excerpt: "Specialized translation services for food industry including ingredient lists, nutritional information, and menus.",
    category: "Food Industry Translation",
    readTime: "7 min read",
    date: "2023-12-17",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop",
    slug: "food-industry-translation-labels-menus"
  },
  {
    id: 31,
    title: "Interpreting vs Translation: When to Use Which",
    excerpt: "Understanding the differences between interpreting and translation services and when each is appropriate.",
    category: "Language Services",
    readTime: "6 min read",
    date: "2023-12-16",
    image: "https://images.unsplash.com/photo-1573164713712-03790a178651?w=600&h=400&fit=crop",
    slug: "interpreting-vs-translation-when-to-use"
  },
  {
    id: 32,
    title: "Automotive Industry Translation Standards",
    excerpt: "Technical translation requirements for automotive manuals, specifications, and safety documentation.",
    category: "Automotive Translation",
    readTime: "8 min read",
    date: "2023-12-15",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600&h=400&fit=crop",
    slug: "automotive-industry-translation-standards"
  },
  {
    id: 33,
    title: "Travel Document Translation for Visa Applications",
    excerpt: "Complete guide to translating travel documents for visa applications and border control.",
    category: "Travel Translation",
    readTime: "5 min read",
    date: "2023-12-14",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&h=400&fit=crop",
    slug: "travel-document-translation-visa-applications"
  },
  {
    id: 34,
    title: "Energy Sector Translation: Power and Precision",
    excerpt: "Specialized translation services for the energy industry including technical manuals and safety protocols.",
    category: "Energy Translation",
    readTime: "9 min read",
    date: "2023-12-13",
    image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=600&h=400&fit=crop",
    slug: "energy-sector-translation-power-precision"
  },
  {
    id: 35,
    title: "Fashion Industry Localization Trends",
    excerpt: "Cultural adaptation strategies for fashion brands expanding into international markets.",
    category: "Fashion Translation",
    readTime: "7 min read",
    date: "2023-12-12",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop",
    slug: "fashion-industry-localization-trends"
  },
  {
    id: 36,
    title: "Construction Document Translation",
    excerpt: "Technical translation services for construction blueprints, specifications, and safety documentation.",
    category: "Construction Translation",
    readTime: "8 min read",
    date: "2023-12-11",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop",
    slug: "construction-document-translation"
  },
  {
    id: 37,
    title: "Non-Profit Organization Translation Needs",
    excerpt: "Supporting global humanitarian efforts through professional translation of mission-critical documents.",
    category: "Non-Profit Translation",
    readTime: "6 min read",
    date: "2023-12-10",
    image: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=600&h=400&fit=crop",
    slug: "non-profit-organization-translation-needs"
  },
  {
    id: 38,
    title: "Blockchain and Cryptocurrency Translation",
    excerpt: "Specialized translation services for blockchain technology and cryptocurrency documentation.",
    category: "Technology Translation",
    readTime: "10 min read",
    date: "2023-12-09",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=400&fit=crop",
    slug: "blockchain-cryptocurrency-translation"
  },
  {
    id: 39,
    title: "Art and Culture Translation: Preserving Meaning",
    excerpt: "Translating artistic and cultural content while preserving original meaning and cultural context.",
    category: "Cultural Translation",
    readTime: "9 min read",
    date: "2023-12-08",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop",
    slug: "art-culture-translation-preserving-meaning"
  },
  {
    id: 40,
    title: "Death Certificate Translation Requirements",
    excerpt: "Professional translation of death certificates for legal and administrative purposes worldwide.",
    category: "Document Translation",
    readTime: "4 min read",
    date: "2023-12-07",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop",
    slug: "death-certificate-translation-requirements"
  },
  {
    id: 41,
    title: "Aviation Industry Translation Standards",
    excerpt: "Critical translation requirements for aviation safety manuals, maintenance guides, and regulatory documentation.",
    category: "Aviation Translation",
    readTime: "11 min read",
    date: "2023-12-06",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&h=400&fit=crop",
    slug: "aviation-industry-translation-standards"
  },
  {
    id: 42,
    title: "Telecommunications Technology Translation",
    excerpt: "Technical translation services for telecommunications equipment manuals and network documentation.",
    category: "Telecommunications Translation",
    readTime: "8 min read",
    date: "2023-12-05",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
    slug: "telecommunications-technology-translation"
  },
  {
    id: 43,
    title: "Sports Industry Localization Strategies",
    excerpt: "Adapting sports content for international audiences including commentary, rules, and marketing materials.",
    category: "Sports Translation",
    readTime: "7 min read",
    date: "2023-12-04",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
    slug: "sports-industry-localization-strategies"
  },
  {
    id: 44,
    title: "Environmental Document Translation",
    excerpt: "Specialized translation for environmental impact assessments and sustainability reports.",
    category: "Environmental Translation",
    readTime: "8 min read",
    date: "2023-12-03",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=400&fit=crop",
    slug: "environmental-document-translation"
  },
  {
    id: 45,
    title: "Military Document Translation Services",
    excerpt: "Secure and accurate translation of military documentation with strict confidentiality protocols.",
    category: "Military Translation",
    readTime: "9 min read",
    date: "2023-12-02",
    image: "https://images.unsplash.com/photo-1606115915090-be18fea23ec7?w=600&h=400&fit=crop",
    slug: "military-document-translation-services"
  },
  {
    id: 46,
    title: "Music Industry Translation: Beyond Lyrics",
    excerpt: "Complete localization services for music industry including contracts, promotional materials, and digital content.",
    category: "Music Translation",
    readTime: "6 min read",
    date: "2023-12-01",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop",
    slug: "music-industry-translation-beyond-lyrics"
  },
  {
    id: 47,
    title: "Social Media Content Localization",
    excerpt: "Cultural adaptation strategies for social media content across different platforms and regions.",
    category: "Social Media Translation",
    readTime: "7 min read",
    date: "2023-11-30",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop",
    slug: "social-media-content-localization"
  },
  {
    id: 48,
    title: "Mining Industry Technical Translation",
    excerpt: "Specialized translation services for mining operations including safety protocols and technical specifications.",
    category: "Mining Translation",
    readTime: "8 min read",
    date: "2023-11-29",
    image: "https://images.unsplash.com/photo-1516733968668-dbdce39c4281?w=600&h=400&fit=crop",
    slug: "mining-industry-technical-translation"
  },
  {
    id: 49,
    title: "Publishing Industry Translation Trends",
    excerpt: "Global publishing trends and translation strategies for books, magazines, and digital content.",
    category: "Publishing Translation",
    readTime: "10 min read",
    date: "2023-11-28",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&h=400&fit=crop",
    slug: "publishing-industry-translation-trends"
  },
  {
    id: 50,
    title: "Future of Translation Technology",
    excerpt: "Emerging technologies in translation including AI, machine learning, and neural networks.",
    category: "Translation Technology",
    readTime: "12 min read",
    date: "2023-11-27",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop",
    slug: "future-translation-technology"
  }
];

const Articles = () => {
  return (
    <section id="articles" className="py-20 bg-gradient-to-br from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Translation Insights & Resources
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay informed with our comprehensive guides, industry insights, and best practices 
            for professional translation services across various sectors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <Card key={article.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card border-border">
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-primary/90 text-primary-foreground">
                    {article.category}
                  </Badge>
                </div>
              </div>
              
              <CardHeader className="pb-3">
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                  {article.title}
                </h3>
              </CardHeader>
              
              <CardContent className="pt-0">
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(article.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{article.readTime}</span>
                  </div>
                </div>
                
                <Button variant="outline" className="w-full group/btn">
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="px-8">
            Load More Articles
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Articles;
