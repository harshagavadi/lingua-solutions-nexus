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
            Professional Translation Services India - Your Trusted Language Partner
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            LinguaSolutions India is the leading translation company offering certified translation services in 30+ languages. 
            We specialize in legal translation, medical translation, technical document translation, and website localization 
            with 98% accuracy guarantee and same-day delivery options.
          </p>
        </div>

        {/* SEO Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Certified Translation Services */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-primary/20 hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4">
              <Star className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">Certified Translation Services India</h3>
            <p className="text-muted-foreground mb-4">
              ISO 17100:2015 certified translation company providing official document translation services 
              accepted by embassies, universities, and government agencies worldwide. Our certified translators 
              are native speakers with professional qualifications in legal, medical, and technical translation.
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
            <h3 className="text-2xl font-bold text-foreground mb-4">Legal Translation Services Mumbai Delhi</h3>
            <p className="text-muted-foreground mb-4">
              Specialized legal document translation services for law firms, corporate legal departments, 
              and individuals. Our legal translators have expertise in contract translation, court document 
              translation, legal agreement translation, and litigation support translation services.
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
            <h3 className="text-2xl font-bold text-foreground mb-4">Medical Translation Services Bangalore Chennai</h3>
            <p className="text-muted-foreground mb-4">
              Professional medical document translation by certified medical translators with healthcare 
              industry experience. We provide accurate translation of medical reports, clinical trial 
              documents, pharmaceutical documentation, and patient records with strict confidentiality.
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
                <p>• Birth Certificate Translation</p>
                <p>• Marriage Certificate Translation</p>
                <p>• Degree Certificate Translation</p>
                <p>• Diploma Translation Services</p>
                <p>• Passport Translation</p>
                <p>• Driving License Translation</p>
                <p>• Bank Statement Translation</p>
                <p>• Income Tax Returns Translation</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-3 flex items-center">
                <Users className="w-4 h-4 mr-2 text-secondary" />
                Industries Served
              </h4>
              <div className="space-y-1 text-sm text-muted-foreground">
                <p>• Legal Translation Services</p>
                <p>• Medical Translation India</p>
                <p>• Technical Translation</p>
                <p>• Financial Translation</p>
                <p>• Marketing Translation</p>
                <p>• Website Localization</p>
                <p>• E-commerce Translation</p>
                <p>• Software Localization</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-3 flex items-center">
                <Globe className="w-4 h-4 mr-2 text-accent" />
                Languages
              </h4>
              <div className="space-y-1 text-sm text-muted-foreground">
                <p>• Hindi Translation Services</p>
                <p>• English to Hindi Translation</p>
                <p>• Spanish Translation</p>
                <p>• French Translation Services</p>
                <p>• German Translation</p>
                <p>• Chinese Translation</p>
                <p>• Arabic Translation</p>
                <p>• Japanese Translation</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-3 flex items-center">
                <Star className="w-4 h-4 mr-2 text-primary" />
                Service Areas
              </h4>
              <div className="space-y-1 text-sm text-muted-foreground">
                <p>• Translation Services Mumbai</p>
                <p>• Translation Services Delhi</p>
                <p>• Translation Services Bangalore</p>
                <p>• Translation Services Chennai</p>
                <p>• Translation Services Pune</p>
                <p>• Translation Services Hyderabad</p>
                <p>• Translation Services Kolkata</p>
                <p>• Online Translation Services</p>
              </div>
            </div>
          </div>
        </div>

        {/* Long-tail SEO Content */}
        <div className="prose prose-lg max-w-none">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-primary/20">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Why Choose Professional Translation Services in India?
            </h3>
            <div className="text-muted-foreground space-y-4">
              <p>
                <strong>LinguaSolutions India</strong> is the most trusted translation company in India, providing 
                certified translation services for individuals, businesses, and organizations. Our team of 
                professional translators specializes in accurate document translation, legal translation, 
                medical translation, and technical translation services with guaranteed quality and fast delivery.
              </p>
              <p>
                As an <strong>ISO 17100:2015 certified translation company</strong>, we ensure the highest 
                standards of translation quality. Our certified translators are native speakers with 
                professional qualifications and extensive experience in their respective fields. Whether you 
                need document translation for immigration, business expansion, academic purposes, or legal 
                proceedings, we deliver accurate and reliable translation services.
              </p>
              <p>
                Our <strong>certified translation services</strong> are accepted by embassies, courts, 
                universities, and government agencies worldwide. We provide official stamps and signatures 
                with all certified translations, ensuring legal validity and acceptance. From birth certificate 
                translation to complex technical manual translation, we handle all types of documents with 
                precision and confidentiality.
              </p>
              <p>
                <strong>Fast turnaround times</strong> are our specialty. We offer same-day delivery for urgent 
                translation projects and typically complete standard projects within 24-48 hours. Our 24/7 
                customer support ensures you can reach us whenever you need translation assistance, making us 
                the preferred choice for emergency translation needs across India and internationally.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SEOContent;