import React from 'react';
import { Badge } from './ui/badge';
import { Star, Search, TrendingUp, Target, Users, Globe } from 'lucide-react';

const SEOContent = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-background via-background/95 to-primary/5 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-r from-accent/10 to-primary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Main SEO Section */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-to-r from-primary to-secondary text-primary-foreground">
            🚀 SEO Optimized Content
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-6">
            🚀 AI-Enhanced Professional Translation Services India 2024 - Your Trusted Digital Language Partner
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            LinguaSolutions India is the leading AI-enhanced translation company offering certified translation services in 30+ languages. 
            We combine cutting-edge AI technology with expert human translators for digital document translation, legal translation, 
            medical translation, technical document translation, and website localization with 98% accuracy guarantee and same-day delivery options.
          </p>
        </div>

        {/* SEO Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Certified Translation Services */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-primary/20 hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4">
              <Star className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">AI-Enhanced Certified Translation Services India 2024</h3>
            <p className="text-muted-foreground mb-4">
              ISO 17100:2015 certified translation company providing AI-enhanced official document translation services 
              accepted by embassies, universities, and government agencies worldwide. Our certified translators combine 
              human expertise with AI technology for digital document translation, scanned file processing, and OCR translation services.
            </p>
            <div className="space-y-2 text-sm">
              <p className="flex items-center"><span className="text-green-600 mr-2">✓</span> Birth Certificate Translation</p>
              <p className="flex items-center"><span className="text-green-600 mr-2">✓</span> Marriage Certificate Translation</p>
              <p className="flex items-center"><span className="text-green-600 mr-2">✓</span> Academic Transcript Translation</p>
              <p className="flex items-center"><span className="text-green-600 mr-2">✓</span> Passport Translation Services</p>
            </div>
          </div>

          {/* Legal Translation Services */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-primary/20 hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4">
              <Search className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">Digital Legal Translation Services Mumbai Delhi 2024</h3>
            <p className="text-muted-foreground mb-4">
              Specialized digital legal document translation services for law firms, fintech companies, blockchain startups, 
              and corporate legal departments. Our legal translators have expertise in contract translation, court document 
              translation, legal agreement translation, crypto document translation, and litigation support translation services.
            </p>
            <div className="space-y-2 text-sm">
              <p className="flex items-center"><span className="text-blue-600 mr-2">⚖️</span> Contract Translation Services</p>
              <p className="flex items-center"><span className="text-blue-600 mr-2">⚖️</span> Court Document Translation</p>
              <p className="flex items-center"><span className="text-blue-600 mr-2">⚖️</span> Legal Agreement Translation</p>
              <p className="flex items-center"><span className="text-blue-600 mr-2">⚖️</span> Immigration Document Translation</p>
            </div>
          </div>

          {/* Medical Translation Services */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-primary/20 hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-4">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">HealthTech Medical Translation Services Bangalore Chennai 2024</h3>
            <p className="text-muted-foreground mb-4">
              Professional medical document translation for healthtech companies, telemedicine platforms, and healthcare 
              institutions by certified medical translators. We provide accurate translation of medical reports, clinical trial 
              documents, pharmaceutical documentation, digital health records, and AI-powered medical device manuals with strict confidentiality.
            </p>
            <div className="space-y-2 text-sm">
              <p className="flex items-center"><span className="text-red-600 mr-2">🏥</span> Medical Report Translation</p>
              <p className="flex items-center"><span className="text-red-600 mr-2">🏥</span> Clinical Trial Translation</p>
              <p className="flex items-center"><span className="text-red-600 mr-2">🏥</span> Pharmaceutical Translation</p>
              <p className="flex items-center"><span className="text-red-600 mr-2">🏥</span> Patient Record Translation</p>
            </div>
          </div>
        </div>

        {/* SEO Keywords Section */}
        <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-2xl p-8 border border-primary/20 mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-foreground">
            🎯 Complete Translation Services Coverage
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <h4 className="font-semibold text-foreground mb-3 flex items-center">
                <Target className="w-4 h-4 mr-2 text-primary" />
                Document Types
              </h4>
              <div className="space-y-1 text-sm text-muted-foreground">
                <p>• Digital Certificate Translation</p>
                <p>• E-Document Translation Services</p>
                <p>• Scanned Document Translation</p>
                <p>• OCR Translation Services</p>
                <p>• QR Code Document Translation</p>
                <p>• Blockchain Certificate Translation</p>
                <p>• Digital Passport Translation</p>
                <p>• AI-Processed Document Translation</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-3 flex items-center">
                <Users className="w-4 h-4 mr-2 text-secondary" />
                Industries Served
              </h4>
              <div className="space-y-1 text-sm text-muted-foreground">
                <p>• FinTech Translation Services</p>
                <p>• HealthTech Translation India</p>
                <p>• EdTech Translation Services</p>
                <p>• Blockchain Translation</p>
                <p>• Crypto Document Translation</p>
                <p>• NFT Whitepaper Translation</p>
                <p>• Gaming Localization Services</p>
                <p>• Mobile App Localization</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-3 flex items-center">
                <Globe className="w-4 h-4 mr-2 text-accent" />
                Languages
              </h4>
              <div className="space-y-1 text-sm text-muted-foreground">
                <p>• AI-Enhanced Hindi Translation</p>
                <p>• Digital English to Hindi Translation</p>
                <p>• Machine Learning Spanish Translation</p>
                <p>• Neural French Translation Services</p>
                <p>• Smart German Translation</p>
                <p>• AI-Powered Chinese Translation</p>
                <p>• Automated Arabic Translation</p>
                <p>• Digital Japanese Translation</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-3 flex items-center">
                <Star className="w-4 h-4 mr-2 text-primary" />
                Service Areas
              </h4>
              <div className="space-y-1 text-sm text-muted-foreground">
                <p>• Digital Translation Services Mumbai</p>
                <p>• AI Translation Services Delhi</p>
                <p>• Tech Translation Services Bangalore</p>
                <p>• Startup Translation Services Pune</p>
                <p>• Scale-up Translation Services Hyderabad</p>
                <p>• Remote Translation Services</p>
                <p>• Cloud-based Translation Services</p>
                <p>• API Integration Translation Services</p>
              </div>
            </div>
          </div>
        </div>

        {/* Long-tail SEO Content */}
        <div className="prose prose-lg max-w-none">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-primary/20">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Why Choose AI-Enhanced Professional Translation Services in India 2024?
            </h3>
            <div className="text-muted-foreground space-y-4">
              <p>
                <strong>LinguaSolutions India</strong> is the most trusted AI-enhanced translation company in India 2024, providing 
                certified translation services for individuals, businesses, startups, and organizations. Our team of 
                professional translators combines human expertise with cutting-edge AI technology for accurate digital document translation, 
                legal translation, medical translation, and technical translation services with guaranteed quality and fast delivery.
              </p>
              <p>
                As an <strong>ISO 17100:2015 certified AI-enhanced translation company</strong>, we ensure the highest 
                standards of translation quality using both human expertise and machine learning algorithms. Our certified translators are native speakers with 
                professional qualifications and extensive experience in their respective fields, enhanced by AI-powered quality control systems. Whether you 
                need digital document translation for fintech, healthtech startups, blockchain companies, business expansion, academic purposes, or legal 
                proceedings, we deliver accurate and reliable AI-assisted translation services.
              </p>
              <p>
                Our <strong>AI-enhanced certified translation services</strong> are accepted by embassies, courts, 
                universities, fintech regulators, and government agencies worldwide. We provide official stamps and signatures 
                with all certified translations, ensuring legal validity and acceptance. From digital birth certificate 
                translation to complex technical manual translation, crypto whitepapers, and blockchain documentation, we handle all types of documents with 
                precision, AI-powered quality checks, and strict confidentiality protocols.
              </p>
              <p>
                <strong>AI-powered fast turnaround times</strong> are our specialty in 2024. We offer same-day delivery for urgent 
                translation projects using our hybrid AI-human workflow and typically complete standard projects within 24-48 hours. Our 24/7 
                AI-assisted customer support ensures you can reach us whenever you need translation assistance, making us 
                the preferred choice for emergency translation needs across India and internationally for modern businesses, startups, and digital companies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SEOContent;
