import React from 'react';
import Card from './Card';
import { Button } from './ui/button';
import { Download, FileText, BookOpen, Calculator } from 'lucide-react';

interface Resource {
  title: string;
  description: string;
  type: 'guide' | 'checklist' | 'template' | 'calculator';
  downloadUrl: string;
  icon: React.ReactNode;
}

const resources: Resource[] = [
  {
    title: "Legal Translation Quality Checklist",
    description: "Comprehensive 15-point checklist to evaluate the quality and accuracy of legal document translations before submission.",
    type: "checklist",
    downloadUrl: "#",
    icon: <FileText className="w-6 h-6" />
  },
  {
    title: "Medical Translation Terminology Guide",
    description: "Essential medical terminology reference covering 500+ terms across multiple languages with pronunciation guides.",
    type: "guide",
    downloadUrl: "#",
    icon: <BookOpen className="w-6 h-6" />
  },
  {
    title: "Business Contract Translation Template",
    description: "Professional template for structuring international business contract translations with legal compliance notes.",
    type: "template",
    downloadUrl: "#",
    icon: <FileText className="w-6 h-6" />
  },
  {
    title: "Translation Cost Calculator",
    description: "Interactive tool to estimate translation costs based on document type, language pair, and urgency requirements.",
    type: "calculator",
    downloadUrl: "#",
    icon: <Calculator className="w-6 h-6" />
  },
  {
    title: "Certification Requirements by Country",
    description: "Complete guide to translation certification requirements across 50+ countries with embassy contact information.",
    type: "guide",
    downloadUrl: "#",
    icon: <BookOpen className="w-6 h-6" />
  },
  {
    title: "Website Localization Checklist",
    description: "Step-by-step checklist for website localization projects covering content, technical, and cultural considerations.",
    type: "checklist",
    downloadUrl: "#",
    icon: <FileText className="w-6 h-6" />
  }
];

const getTypeColor = (type: string) => {
  switch (type) {
    case 'guide':
      return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
    case 'checklist':
      return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
    case 'template':
      return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
    case 'calculator':
      return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200';
    default:
      return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
  }
};

const Resources: React.FC = () => {
  return (
    <section id="resources" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Free Translation Resources
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Download our comprehensive guides, checklists, and tools to enhance your understanding 
            of professional translation processes and requirements.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 p-2 bg-primary/10 rounded-lg text-primary">
                  {resource.icon}
                </div>
                <div className="flex-1">
                  <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium mb-2 ${getTypeColor(resource.type)}`}>
                    {resource.type.charAt(0).toUpperCase() + resource.type.slice(1)}
                  </span>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {resource.title}
                  </h3>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {resource.description}
              </p>
              
              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => window.open(resource.downloadUrl, '_blank')}
              >
                <Download className="w-4 h-4 mr-2" />
                Download Free
              </Button>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Card className="p-8 bg-primary/5 border-primary/20">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Need Custom Resources?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Our team can create customized guides, templates, and checklists specific to your 
              industry requirements and translation needs.
            </p>
            <Button size="lg">
              Request Custom Resources
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Resources;