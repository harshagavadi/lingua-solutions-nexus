import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import Articles from "./pages/Articles";
import LegalDocumentTranslation from "./pages/articles/LegalDocumentTranslation";
import MedicalTranslationAccuracy from "./pages/articles/MedicalTranslationAccuracy";
import BusinessContractTranslation from "./pages/articles/BusinessContractTranslation";
import TechnicalTranslationChallenges from "./pages/articles/TechnicalTranslationChallenges";
import CertifiedTranslationProcess from "./pages/articles/CertifiedTranslationProcess";
import WebsiteLocalizationGuide from "./pages/articles/WebsiteLocalizationGuide";
import DocumentTranslationStandards from "./pages/articles/DocumentTranslationStandards";
import AcademicTranslationBestPractices from "./pages/articles/AcademicTranslationBestPractices";
import ArticlePage from "./pages/articles/ArticlePage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/articles/essential-guide-legal-document-translation" element={<LegalDocumentTranslation />} />
          <Route path="/articles/medical-translation-accuracy-healthcare" element={<MedicalTranslationAccuracy />} />
          <Route path="/articles/business-contract-translation-best-practices" element={<BusinessContractTranslation />} />
          <Route path="/articles/technical-translation-challenges" element={<TechnicalTranslationChallenges />} />
          <Route path="/articles/certified-translation-process" element={<CertifiedTranslationProcess />} />
          <Route path="/articles/website-localization-guide" element={<WebsiteLocalizationGuide />} />
          <Route path="/articles/document-translation-standards" element={<DocumentTranslationStandards />} />
          <Route path="/articles/academic-translation-best-practices" element={<AcademicTranslationBestPractices />} />
          <Route path="/articles/:slug" element={<ArticlePage />} />
          <Route path="/index.html" element={<Navigate to="/" replace />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
