import React from 'react';
import { ExternalLink, Globe, Award, BookOpen, Building2, Users } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

const Backlinks = () => {
  const backlinkCategories = [
    {
      title: "Industry Organizations",
      icon: <Building2 className="w-6 h-6" />,
      gradient: "from-blue-500 to-cyan-500",
      links: [
        {
          title: "American Translators Association (ATA)",
          url: "https://atanet.org",
          description: "Leading professional association for translators and interpreters"
        },
        {
          title: "International Association of Professional Translators",
          url: "https://iapti.org",
          description: "Global network of professional translators and interpreters"
        },
        {
          title: "Federation of Indian Chambers of Commerce",
          url: "https://ficci.in",
          description: "India's largest business organization supporting trade"
        }
      ]
    },
    {
      title: "Certification Bodies",
      icon: <Award className="w-6 h-6" />,
      gradient: "from-purple-500 to-pink-500",
      links: [
        {
          title: "ISO International Standards",
          url: "https://iso.org",
          description: "International standards for translation quality (ISO 17100)"
        },
        {
          title: "Bureau of Indian Standards",
          url: "https://bis.gov.in",
          description: "National standards body of India for quality assurance"
        },
        {
          title: "Common European Framework of Reference",
          url: "https://coe.int/en/web/common-european-framework-reference-languages",
          description: "Language proficiency standards and certification"
        }
      ]
    },
    {
      title: "Language Resources",
      icon: <BookOpen className="w-6 h-6" />,
      gradient: "from-green-500 to-emerald-500",
      links: [
        {
          title: "Ethnologue Languages",
          url: "https://ethnologue.com",
          description: "Comprehensive reference for world's languages"
        },
        {
          title: "Google Translate Community",
          url: "https://translate.google.com/community",
          description: "Collaborative translation improvement platform"
        },
        {
          title: "Unicode Consortium",
          url: "https://unicode.org",
          description: "Universal character encoding standards"
        }
      ]
    },
    {
      title: "Government Resources",
      icon: <Globe className="w-6 h-6" />,
      gradient: "from-orange-500 to-red-500",
      links: [
        {
          title: "Ministry of External Affairs India",
          url: "https://mea.gov.in",
          description: "Official document translation and attestation services"
        },
        {
          title: "Embassy Documentation Services",
          url: "https://indianembassy.org",
          description: "Consular services and document requirements"
        },
        {
          title: "USCIS Translation Guidelines",
          url: "https://uscis.gov",
          description: "US immigration document translation requirements"
        }
      ]
    },
    {
      title: "Industry Partners",
      icon: <Users className="w-6 h-6" />,
      gradient: "from-teal-500 to-blue-500",
      links: [
        {
          title: "Legal Translation Network",
          url: "https://legaltranslation.org",
          description: "Specialized legal document translation services"
        },
        {
          title: "Medical Translation Association",
          url: "https://medicaltranslation.org",
          description: "Healthcare and pharmaceutical translation standards"
        },
        {
          title: "Technical Writers Association",
          url: "https://techwriters.org",
          description: "Technical documentation and localization resources"
        }
      ]
    },
    {
      title: "Technology & Tools",
      icon: <ExternalLink className="w-6 h-6" />,
      gradient: "from-indigo-500 to-purple-500",
      links: [
        {
          title: "Computer Assisted Translation Tools",
          url: "https://gala-global.org",
          description: "Industry association for localization and translation"
        },
        {
          title: "Translation Memory Systems",
          url: "https://tmxmall.com",
          description: "Translation memory and terminology resources"
        },
        {
          title: "Multilingual SEO Guide",
          url: "https://searchengineland.com",
          description: "Best practices for international SEO and localization"
        }
      ]
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background with gradient and floating elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-primary/5"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-accent/10 to-primary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-6 animate-bounce">
            🔗 Industry Resources & Partners
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Explore valuable resources, industry standards, and trusted partnerships that enhance our translation services quality and reliability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {backlinkCategories.map((category, categoryIndex) => (
            <Card 
              key={categoryIndex} 
              className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 border-2 hover:border-primary/30 bg-gradient-to-br from-card/95 to-card/90 backdrop-blur-sm animate-fade-in"
              style={{ animationDelay: `${categoryIndex * 100}ms` }}
            >
              <CardHeader className="pb-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.gradient} flex items-center justify-center text-white mb-3 group-hover:animate-spin`}>
                  {category.icon}
                </div>
                <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {category.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  Professional resources and industry standards
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.links.map((link, linkIndex) => (
                  <a
                    key={linkIndex}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-4 rounded-lg bg-gradient-to-r from-background/50 to-muted/30 hover:from-primary/10 hover:to-secondary/10 border border-border/50 hover:border-primary/30 transition-all duration-300 group/link"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground group-hover/link:text-primary transition-colors mb-1 flex items-center gap-2">
                          {link.title}
                          <ExternalLink className="w-4 h-4 opacity-60 group-hover/link:opacity-100 group-hover/link:text-primary transition-all" />
                        </h4>
                        <p className="text-sm text-muted-foreground group-hover/link:text-foreground transition-colors">
                          {link.description}
                        </p>
                      </div>
                    </div>
                  </a>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-2xl p-8 border border-primary/20">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              🤝 Partnership Opportunities
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Interested in partnering with us or getting your resource featured? We're always looking to collaborate with industry leaders and valuable service providers.
            </p>
            <a
              href="mailto:partnerships@linguasolutionsindia.com"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary text-primary-foreground px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl"
            >
              <Users className="w-5 h-5" />
              Contact for Partnerships
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Backlinks;