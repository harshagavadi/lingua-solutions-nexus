import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, User, Calendar } from 'lucide-react';

const Articles = () => {
  const articles = [
    {
      title: "The Essential Guide to Document Translation Services",
      excerpt: "Learn about the comprehensive process of document translation and why professional services are crucial for accuracy.",
      category: "Document Translation",
      readTime: "5 min read",
      date: "2024-01-15",
      image: "/lovable-uploads/30c8b16a-f320-408c-a511-978738cd6002.png"
    },
    {
      title: "Legal Translation: Ensuring Accuracy in International Law",
      excerpt: "Discover the complexities of legal translation and how certified translators handle sensitive legal documents.",
      category: "Legal Translation",
      readTime: "7 min read",
      date: "2024-01-14",
      image: "/lovable-uploads/657176ae-4d78-46b3-b020-1c567330a80b.png"
    },
    {
      title: "Medical Translation: Precision in Healthcare Communication",
      excerpt: "Explore the critical importance of medical translation in ensuring patient safety and regulatory compliance.",
      category: "Medical Translation",
      readTime: "6 min read",
      date: "2024-01-13",
      image: "/lovable-uploads/7c0843e7-07e2-4c32-be0f-d520b0648181.png"
    },
    {
      title: "Technical Translation for Engineering Documentation",
      excerpt: "Understanding the specialized requirements for translating complex technical manuals and engineering documents.",
      category: "Technical Translation",
      readTime: "8 min read",
      date: "2024-01-12",
      image: "/lovable-uploads/d81c345a-4df1-4694-a1a1-664f801b5b74.png"
    },
    {
      title: "Certified Translation: What You Need to Know",
      excerpt: "Learn about certified translation requirements for official documents and government submissions.",
      category: "Certified Translation",
      readTime: "4 min read",
      date: "2024-01-11",
      image: "/lovable-uploads/30c8b16a-f320-408c-a511-978738cd6002.png"
    },
    {
      title: "Business Translation Services for Global Expansion",
      excerpt: "How professional business translation services can facilitate international market entry and growth.",
      category: "Business Translation",
      readTime: "6 min read",
      date: "2024-01-10",
      image: "/lovable-uploads/657176ae-4d78-46b3-b020-1c567330a80b.png"
    },
    {
      title: "Financial Document Translation: Compliance and Accuracy",
      excerpt: "Navigate the complexities of financial document translation for banking, insurance, and investment sectors.",
      category: "Financial Translation",
      readTime: "7 min read",
      date: "2024-01-09",
      image: "/lovable-uploads/7c0843e7-07e2-4c32-be0f-d520b0648181.png"
    },
    {
      title: "Website Localization: Beyond Simple Translation",
      excerpt: "Understand the difference between translation and localization for effective global web presence.",
      category: "Website Localization",
      readTime: "5 min read",
      date: "2024-01-08",
      image: "/lovable-uploads/d81c345a-4df1-4694-a1a1-664f801b5b74.png"
    },
    {
      title: "Academic Translation: Scholarly Research Across Languages",
      excerpt: "Explore the specialized field of academic translation for research papers, theses, and scholarly publications.",
      category: "Academic Translation",
      readTime: "6 min read",
      date: "2024-01-07",
      image: "/lovable-uploads/30c8b16a-f320-408c-a511-978738cd6002.png"
    },
    {
      title: "Immigration Document Translation Requirements",
      excerpt: "Complete guide to translating immigration documents for visa applications and citizenship processes.",
      category: "Immigration Translation",
      readTime: "8 min read",
      date: "2024-01-06",
      image: "/lovable-uploads/657176ae-4d78-46b3-b020-1c567330a80b.png"
    },
    {
      title: "Marketing Translation: Connecting with Global Audiences",
      excerpt: "Learn how marketing translation services help brands communicate effectively across different cultures.",
      category: "Marketing Translation",
      readTime: "5 min read",
      date: "2024-01-05",
      image: "/lovable-uploads/7c0843e7-07e2-4c32-be0f-d520b0648181.png"
    },
    {
      title: "Patent Translation: Protecting Intellectual Property Worldwide",
      excerpt: "Understanding the critical role of patent translation in international intellectual property protection.",
      category: "Patent Translation",
      readTime: "7 min read",
      date: "2024-01-04",
      image: "/lovable-uploads/d81c345a-4df1-4694-a1a1-664f801b5b74.png"
    },
    {
      title: "Software Localization: Making Apps Global-Ready",
      excerpt: "Comprehensive guide to software localization for mobile apps and desktop applications.",
      category: "Software Localization",
      readTime: "6 min read",
      date: "2024-01-03",
      image: "/lovable-uploads/30c8b16a-f320-408c-a511-978738cd6002.png"
    },
    {
      title: "Pharmaceutical Translation: Regulatory Compliance Matters",
      excerpt: "Navigate the strict requirements for pharmaceutical translation in drug approval processes.",
      category: "Pharmaceutical Translation",
      readTime: "8 min read",
      date: "2024-01-02",
      image: "/lovable-uploads/657176ae-4d78-46b3-b020-1c567330a80b.png"
    },
    {
      title: "Contract Translation: Legal Precision in International Deals",
      excerpt: "Ensure your international contracts are accurately translated with professional legal translation services.",
      category: "Legal Translation",
      readTime: "7 min read",
      date: "2024-01-01",
      image: "/lovable-uploads/7c0843e7-07e2-4c32-be0f-d520b0648181.png"
    },
    {
      title: "E-commerce Translation: Selling Globally",
      excerpt: "Best practices for translating e-commerce platforms to reach international customers effectively.",
      category: "E-commerce Translation",
      readTime: "5 min read",
      date: "2023-12-31",
      image: "/lovable-uploads/d81c345a-4df1-4694-a1a1-664f801b5b74.png"
    },
    {
      title: "Educational Content Translation for Online Learning",
      excerpt: "How to effectively translate educational materials for global online learning platforms.",
      category: "Educational Translation",
      readTime: "6 min read",
      date: "2023-12-30",
      image: "/lovable-uploads/30c8b16a-f320-408c-a511-978738cd6002.png"
    },
    {
      title: "Gaming Localization: Creating Immersive Global Experiences",
      excerpt: "Explore the unique challenges and opportunities in video game localization and translation.",
      category: "Gaming Localization",
      readTime: "7 min read",
      date: "2023-12-29",
      image: "/lovable-uploads/657176ae-4d78-46b3-b020-1c567330a80b.png"
    },
    {
      title: "Insurance Document Translation: Risk Management Across Borders",
      excerpt: "Understanding the importance of accurate insurance document translation for international coverage.",
      category: "Insurance Translation",
      readTime: "6 min read",
      date: "2023-12-28",
      image: "/lovable-uploads/7c0843e7-07e2-4c32-be0f-d520b0648181.png"
    },
    {
      title: "Real Estate Translation: Property Transactions Worldwide",
      excerpt: "Navigate international real estate transactions with professional property document translation.",
      category: "Real Estate Translation",
      readTime: "5 min read",
      date: "2023-12-27",
      image: "/lovable-uploads/d81c345a-4df1-4694-a1a1-664f801b5b74.png"
    },
    {
      title: "Tourism Translation: Welcoming Global Visitors",
      excerpt: "How tourism translation services help destinations attract and serve international travelers.",
      category: "Tourism Translation",
      readTime: "4 min read",
      date: "2023-12-26",
      image: "/lovable-uploads/30c8b16a-f320-408c-a511-978738cd6002.png"
    },
    {
      title: "Automotive Translation: Global Vehicle Documentation",
      excerpt: "Specialized translation services for automotive manuals, specifications, and safety documentation.",
      category: "Automotive Translation",
      readTime: "6 min read",
      date: "2023-12-25",
      image: "/lovable-uploads/657176ae-4d78-46b3-b020-1c567330a80b.png"
    },
    {
      title: "Agricultural Translation: Feeding the World Through Communication",
      excerpt: "Agricultural translation services for farming techniques, research, and international trade documents.",
      category: "Agricultural Translation",
      readTime: "5 min read",
      date: "2023-12-24",
      image: "/lovable-uploads/7c0843e7-07e2-4c32-be0f-d520b0648181.png"
    },
    {
      title: "Environmental Translation: Sustainability Across Languages",
      excerpt: "Environmental document translation for climate research, sustainability reports, and green initiatives.",
      category: "Environmental Translation",
      readTime: "7 min read",
      date: "2023-12-23",
      image: "/lovable-uploads/d81c345a-4df1-4694-a1a1-664f801b5b74.png"
    },
    {
      title: "Energy Sector Translation: Powering Global Communication",
      excerpt: "Specialized translation services for renewable energy, oil & gas, and nuclear industry documentation.",
      category: "Energy Translation",
      readTime: "8 min read",
      date: "2023-12-22",
      image: "/lovable-uploads/30c8b16a-f320-408c-a511-978738cd6002.png"
    },
    {
      title: "Aviation Translation: Safety in International Skies",
      excerpt: "Critical aviation translation services for safety manuals, regulations, and pilot documentation.",
      category: "Aviation Translation",
      readTime: "7 min read",
      date: "2023-12-21",
      image: "/lovable-uploads/657176ae-4d78-46b3-b020-1c567330a80b.png"
    },
    {
      title: "Maritime Translation: Navigating International Waters",
      excerpt: "Maritime industry translation for shipping documents, regulations, and port communications.",
      category: "Maritime Translation",
      readTime: "6 min read",
      date: "2023-12-20",
      image: "/lovable-uploads/7c0843e7-07e2-4c32-be0f-d520b0648181.png"
    },
    {
      title: "Fashion Industry Translation: Style Without Borders",
      excerpt: "Fashion translation services for global brands, product descriptions, and trend communications.",
      category: "Fashion Translation",
      readTime: "5 min read",
      date: "2023-12-19",
      image: "/lovable-uploads/d81c345a-4df1-4694-a1a1-664f801b5b74.png"
    },
    {
      title: "Food Industry Translation: Global Culinary Communication",
      excerpt: "Food industry translation for recipes, nutrition labels, and international food safety standards.",
      category: "Food Translation",
      readTime: "6 min read",
      date: "2023-12-18",
      image: "/lovable-uploads/30c8b16a-f320-408c-a511-978738cd6002.png"
    },
    {
      title: "Sports Translation: Breaking Language Barriers in Athletics",
      excerpt: "Sports industry translation for international competitions, athlete communications, and regulations.",
      category: "Sports Translation",
      readTime: "5 min read",
      date: "2023-12-17",
      image: "/lovable-uploads/657176ae-4d78-46b3-b020-1c567330a80b.png"
    },
    {
      title: "Entertainment Translation: Global Media Consumption",
      excerpt: "Entertainment industry translation for films, TV shows, music, and digital content platforms.",
      category: "Entertainment Translation",
      readTime: "7 min read",
      date: "2023-12-16",
      image: "/lovable-uploads/7c0843e7-07e2-4c32-be0f-d520b0648181.png"
    },
    {
      title: "Construction Translation: Building Across Borders",
      excerpt: "Construction industry translation for blueprints, safety protocols, and international projects.",
      category: "Construction Translation",
      readTime: "6 min read",
      date: "2023-12-15",
      image: "/lovable-uploads/d81c345a-4df1-4694-a1a1-664f801b5b74.png"
    },
    {
      title: "Telecommunications Translation: Connecting the World",
      excerpt: "Telecommunications translation for network documentation, user manuals, and technical specifications.",
      category: "Telecommunications Translation",
      readTime: "7 min read",
      date: "2023-12-14",
      image: "/lovable-uploads/30c8b16a-f320-408c-a511-978738cd6002.png"
    },
    {
      title: "Retail Translation: Shopping Without Language Barriers",
      excerpt: "Retail industry translation for product catalogs, customer service, and multi-channel commerce.",
      category: "Retail Translation",
      readTime: "5 min read",
      date: "2023-12-13",
      image: "/lovable-uploads/657176ae-4d78-46b3-b020-1c567330a80b.png"
    },
    {
      title: "HR Translation: Global Workforce Management",
      excerpt: "Human resources translation for employee handbooks, policies, and international recruitment.",
      category: "HR Translation",
      readTime: "6 min read",
      date: "2023-12-12",
      image: "/lovable-uploads/7c0843e7-07e2-4c32-be0f-d520b0648181.png"
    },
    {
      title: "Government Translation: Public Service Accessibility",
      excerpt: "Government document translation for public services, international relations, and citizen communication.",
      category: "Government Translation",
      readTime: "8 min read",
      date: "2023-12-11",
      image: "/lovable-uploads/d81c345a-4df1-4694-a1a1-664f801b5b74.png"
    },
    {
      title: "Non-Profit Translation: Spreading Global Impact",
      excerpt: "Non-profit organization translation for humanitarian projects, fundraising, and global outreach.",
      category: "Non-Profit Translation",
      readTime: "5 min read",
      date: "2023-12-10",
      image: "/lovable-uploads/30c8b16a-f320-408c-a511-978738cd6002.png"
    },
    {
      title: "Scientific Research Translation: Knowledge Without Borders",
      excerpt: "Scientific translation services for research papers, grant applications, and international collaboration.",
      category: "Scientific Translation",
      readTime: "7 min read",
      date: "2023-12-09",
      image: "/lovable-uploads/657176ae-4d78-46b3-b020-1c567330a80b.png"
    },
    {
      title: "Quality Assurance in Translation: Ensuring Excellence",
      excerpt: "Best practices for quality assurance in professional translation services and deliverable standards.",
      category: "Quality Assurance",
      readTime: "6 min read",
      date: "2023-12-08",
      image: "/lovable-uploads/7c0843e7-07e2-4c32-be0f-d520b0648181.png"
    },
    {
      title: "Translation Technology: AI and Human Expertise",
      excerpt: "How modern translation technology enhances human translators and improves service delivery.",
      category: "Translation Technology",
      readTime: "8 min read",
      date: "2023-12-07",
      image: "/lovable-uploads/d81c345a-4df1-4694-a1a1-664f801b5b74.png"
    },
    {
      title: "Cultural Adaptation in Translation: Beyond Words",
      excerpt: "Understanding cultural nuances and adaptation techniques for effective cross-cultural communication.",
      category: "Cultural Adaptation",
      readTime: "7 min read",
      date: "2023-12-06",
      image: "/lovable-uploads/30c8b16a-f320-408c-a511-978738cd6002.png"
    },
    {
      title: "Emergency Translation Services: When Time Matters",
      excerpt: "Rapid response translation services for urgent documents and time-critical business needs.",
      category: "Emergency Translation",
      readTime: "4 min read",
      date: "2023-12-05",
      image: "/lovable-uploads/657176ae-4d78-46b3-b020-1c567330a80b.png"
    },
    {
      title: "Translation Project Management: Delivering Success",
      excerpt: "Best practices in translation project management for complex, multi-language initiatives.",
      category: "Project Management",
      readTime: "6 min read",
      date: "2023-12-04",
      image: "/lovable-uploads/7c0843e7-07e2-4c32-be0f-d520b0648181.png"
    },
    {
      title: "Choosing the Right Translation Service Provider",
      excerpt: "Comprehensive guide to selecting professional translation services that meet your specific needs.",
      category: "Service Selection",
      readTime: "8 min read",
      date: "2023-12-03",
      image: "/lovable-uploads/d81c345a-4df1-4694-a1a1-664f801b5b74.png"
    },
    {
      title: "Translation Pricing: Understanding Cost Factors",
      excerpt: "Transparent breakdown of translation pricing factors and how to budget for professional services.",
      category: "Pricing Guide",
      readTime: "5 min read",
      date: "2023-12-02",
      image: "/lovable-uploads/30c8b16a-f320-408c-a511-978738cd6002.png"
    },
    {
      title: "Document Preparation for Translation: Best Practices",
      excerpt: "How to prepare your documents for translation to ensure efficiency, accuracy, and cost-effectiveness.",
      category: "Document Preparation",
      readTime: "6 min read",
      date: "2023-12-01",
      image: "/lovable-uploads/657176ae-4d78-46b3-b020-1c567330a80b.png"
    },
    {
      title: "Post-Translation Review: Ensuring Quality Delivery",
      excerpt: "Best practices for reviewing translated documents and ensuring they meet your quality standards.",
      category: "Quality Review",
      readTime: "7 min read",
      date: "2023-11-30",
      image: "/lovable-uploads/7c0843e7-07e2-4c32-be0f-d520b0648181.png"
    },
    {
      title: "Building Long-Term Translation Partnerships",
      excerpt: "How to develop successful long-term relationships with translation service providers for ongoing needs.",
      category: "Partnership Development",
      readTime: "5 min read",
      date: "2023-11-29",
      image: "/lovable-uploads/d81c345a-4df1-4694-a1a1-664f801b5b74.png"
    },
    {
      title: "Translation Industry Trends: What's Next?",
      excerpt: "Explore emerging trends in the translation industry and how they impact service delivery and quality.",
      category: "Industry Trends",
      readTime: "8 min read",
      date: "2023-11-28",
      image: "/lovable-uploads/30c8b16a-f320-408c-a511-978738cd6002.png"
    },
    {
      title: "Multilingual SEO: Optimizing Content for Global Search",
      excerpt: "Advanced strategies for multilingual SEO to ensure your translated content ranks well globally.",
      category: "Multilingual SEO",
      readTime: "9 min read",
      date: "2023-11-27",
      image: "/lovable-uploads/657176ae-4d78-46b3-b020-1c567330a80b.png"
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
                Translation Insights & Resources
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Explore our comprehensive collection of articles covering all aspects of professional translation services, from legal and medical to technical and business translation.
              </p>
            </div>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
                  <div className="aspect-video overflow-hidden rounded-t-lg">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
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
                    <CardTitle className="text-lg line-clamp-2 mb-2">
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
                        {new Date(article.date).toLocaleDateString()}
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
      </div>
      <Footer />
    </div>
  );
};

export default Articles;