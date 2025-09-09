import React from 'react';
import Card from './Card';
import { Badge } from './ui/badge';
import { ArrowRight, Clock, Globe, CheckCircle } from 'lucide-react';

interface CaseStudy {
  title: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  timeline: string;
  languages: number;
  projectSize: string;
}

const caseStudies: CaseStudy[] = [
  {
    title: "Global Pharmaceutical Company Regulatory Submission",
    industry: "Healthcare",
    challenge: "A leading pharmaceutical company needed to translate clinical trial documentation for drug approval across 15 countries simultaneously, with strict regulatory deadlines and zero tolerance for errors.",
    solution: "We assembled a specialized team of medical translators with regulatory experience, implemented a parallel workflow system, and established direct communication channels with regulatory experts in each target country.",
    results: [
      "100% regulatory approval success rate across all 15 countries",
      "6 weeks ahead of original timeline",
      "Zero regulatory queries related to translation quality",
      "$2.3M in potential delay costs avoided"
    ],
    timeline: "12 weeks",
    languages: 15,
    projectSize: "2.4M words"
  },
  {
    title: "International M&A Due Diligence Translation",
    industry: "Financial Services",
    challenge: "A $1.2B cross-border acquisition required translation of complex financial documents, legal contracts, and compliance materials across multiple jurisdictions with a 3-week deadline.",
    solution: "We deployed a 24/7 translation team across three time zones, utilized AI-assisted translation for initial drafts followed by expert legal review, and maintained secure document handling throughout the process.",
    results: [
      "Transaction completed on schedule",
      "Legal documents approved without revision",
      "Compliance requirements met in all jurisdictions",
      "Client saved 40% compared to alternative providers"
    ],
    timeline: "3 weeks",
    languages: 8,
    projectSize: "850K words"
  },
  {
    title: "Healthcare System Digital Transformation",
    industry: "Healthcare Technology",
    challenge: "A major healthcare provider needed to localize their electronic health records system for deployment across Latin America, requiring medical terminology precision and cultural adaptation.",
    solution: "Our medical translation specialists worked directly with software developers to ensure seamless integration, while cultural consultants adapted content for regional healthcare practices and regulatory requirements.",
    results: [
      "Successful deployment across 12 countries",
      "95% user satisfaction rate",
      "30% reduction in implementation timeline",
      "Full regulatory compliance achieved"
    ],
    timeline: "8 weeks",
    languages: 6,
    projectSize: "500K words"
  }
];

const CaseStudies: React.FC = () => {
  return (
    <section id="case-studies" className="py-20 bg-secondary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Success Stories
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover how our expert translation services have helped organizations 
            achieve their international goals and overcome complex linguistic challenges.
          </p>
        </div>
        
        <div className="space-y-12">
          {caseStudies.map((study, index) => (
            <Card key={index} className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <div className="flex items-start gap-4 mb-6">
                    <Badge variant="secondary" className="text-sm">
                      {study.industry}
                    </Badge>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    {study.title}
                  </h3>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">
                        Challenge
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {study.challenge}
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">
                        Solution
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {study.solution}
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-3">
                        Results
                      </h4>
                      <ul className="space-y-2">
                        {study.results.map((result, resultIndex) => (
                          <li key={resultIndex} className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                            <span className="text-muted-foreground">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-secondary/20 rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-foreground mb-4">
                      Project Overview
                    </h4>
                    
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <Clock className="w-5 h-5 text-primary" />
                        <div>
                          <div className="text-sm text-muted-foreground">Timeline</div>
                          <div className="font-medium text-foreground">{study.timeline}</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <Globe className="w-5 h-5 text-primary" />
                        <div>
                          <div className="text-sm text-muted-foreground">Languages</div>
                          <div className="font-medium text-foreground">{study.languages} languages</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <ArrowRight className="w-5 h-5 text-primary" />
                        <div>
                          <div className="text-sm text-muted-foreground">Project Size</div>
                          <div className="font-medium text-foreground">{study.projectSize}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <a 
                      href="#contact" 
                      className="inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors"
                    >
                      Discuss Your Project
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Card className="p-8 bg-primary/5 border-primary/20">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Create Your Success Story?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join hundreds of organizations that have achieved their international goals 
              with our expert translation services.
            </p>
            <a 
              href="#contact" 
              className="inline-flex items-center px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Start Your Project
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;