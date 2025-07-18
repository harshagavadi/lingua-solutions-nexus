import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { Upload, FileText } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

const QuoteForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    serviceType: '',
    sourceLanguage: '',
    targetLanguage: '',
    wordCount: '',
    deadline: '',
    message: '',
    budget: ''
  });
  const [files, setFiles] = useState<FileList | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Prepare file names array
      const fileNames = files ? Array.from(files).map(file => file.name) : [];
      
      // Prepare quote data
      const quoteData = {
        ...formData,
        fileNames
      };

      console.log('Submitting quote:', quoteData);

      // Call the edge function to save to database and send email
      const { data, error } = await supabase.functions.invoke('send-quote-email', {
        body: { quoteData }
      });

      if (error) {
        console.error('Error submitting quote:', error);
        throw new Error(error.message || 'Failed to submit quote');
      }

      if (data.success) {
        toast({
          title: "Quote Request Submitted Successfully!",
          description: "Your quote has been sent to our team. We'll analyze your project and send a detailed quote to your email within 2 hours.",
        });

        // Reset form
        setFormData({
          name: '', email: '', company: '', phone: '', serviceType: '', 
          sourceLanguage: '', targetLanguage: '', wordCount: '', deadline: '', 
          message: '', budget: ''
        });
        setFiles(null);
        
        // Reset file input
        const fileInput = document.getElementById('file-upload') as HTMLInputElement;
        if (fileInput) fileInput.value = '';
      } else {
        throw new Error(data.error || 'Failed to submit quote');
      }
    } catch (error) {
      console.error('Quote submission error:', error);
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your quote. Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFiles(e.target.files);
  };

  return (
    <section className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Get Your Free Professional Quote
            </h2>
            <p className="text-xl text-muted-foreground">
              Upload your documents and receive a detailed quote within 2 hours. No obligation.
            </p>
          </div>
          
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Project Details & File Upload</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Full Name *</label>
                    <Input
                      required
                      value={formData.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email Address *</label>
                    <Input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Company/Organization</label>
                    <Input
                      value={formData.company}
                      onChange={(e) => handleChange('company', e.target.value)}
                      placeholder="Your company name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone Number</label>
                    <Input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleChange('phone', e.target.value)}
                      placeholder="+1 (234) 567-8900"
                    />
                  </div>
                </div>
                
                {/* Service Details */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Service Type *</label>
                    <Select onValueChange={(value) => handleChange('serviceType', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="translation">Document Translation</SelectItem>
                        <SelectItem value="transcription">Audio/Video Transcription</SelectItem>
                        <SelectItem value="interpretation">Interpretation Services</SelectItem>
                        <SelectItem value="localization">Website/App Localization</SelectItem>
                        <SelectItem value="subtitling">Subtitling & Captions</SelectItem>
                        <SelectItem value="voiceover">Voice-over & Dubbing</SelectItem>
                        <SelectItem value="proofreading">Proofreading & Editing</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">From Language *</label>
                    <Select onValueChange={(value) => handleChange('sourceLanguage', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Source language" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="english">English</SelectItem>
                        <SelectItem value="spanish">Spanish</SelectItem>
                        <SelectItem value="french">French</SelectItem>
                        <SelectItem value="german">German</SelectItem>
                        <SelectItem value="chinese">Chinese (Mandarin)</SelectItem>
                        <SelectItem value="hindi">Hindi</SelectItem>
                        <SelectItem value="kannada">Kannada</SelectItem>
                        <SelectItem value="tamil">Tamil</SelectItem>
                        <SelectItem value="telugu">Telugu</SelectItem>
                        <SelectItem value="arabic">Arabic</SelectItem>
                        <SelectItem value="japanese">Japanese</SelectItem>
                        <SelectItem value="korean">Korean</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">To Language *</label>
                    <Select onValueChange={(value) => handleChange('targetLanguage', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Target language" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="english">English</SelectItem>
                        <SelectItem value="spanish">Spanish</SelectItem>
                        <SelectItem value="french">French</SelectItem>
                        <SelectItem value="german">German</SelectItem>
                        <SelectItem value="chinese">Chinese (Mandarin)</SelectItem>
                        <SelectItem value="hindi">Hindi</SelectItem>
                        <SelectItem value="kannada">Kannada</SelectItem>
                        <SelectItem value="tamil">Tamil</SelectItem>
                        <SelectItem value="telugu">Telugu</SelectItem>
                        <SelectItem value="arabic">Arabic</SelectItem>
                        <SelectItem value="japanese">Japanese</SelectItem>
                        <SelectItem value="korean">Korean</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                {/* Project Details */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Estimated Word Count</label>
                    <Input
                      value={formData.wordCount}
                      onChange={(e) => handleChange('wordCount', e.target.value)}
                      placeholder="e.g., 1000 words"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Project Deadline</label>
                    <Input
                      type="date"
                      value={formData.deadline}
                      onChange={(e) => handleChange('deadline', e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Budget Range (USD)</label>
                    <Select onValueChange={(value) => handleChange('budget', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select budget" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under-500">Under $500</SelectItem>
                        <SelectItem value="500-1000">$500 - $1,000</SelectItem>
                        <SelectItem value="1000-2500">$1,000 - $2,500</SelectItem>
                        <SelectItem value="2500-5000">$2,500 - $5,000</SelectItem>
                        <SelectItem value="over-5000">Over $5,000</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                {/* File Upload */}
                <div>
                  <label className="block text-sm font-medium mb-2">Upload Documents (Optional)</label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors">
                    <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                    <input
                      type="file"
                      multiple
                      onChange={handleFileChange}
                      className="hidden"
                      id="file-upload"
                      accept=".pdf,.doc,.docx,.txt,.ppt,.pptx,.xls,.xlsx"
                    />
                    <label
                      htmlFor="file-upload"
                      className="cursor-pointer text-blue-600 hover:text-blue-700 font-medium"
                    >
                      Click to upload files
                    </label>
                    <p className="text-sm text-gray-500 mt-2">
                      Supported: PDF, DOC, DOCX, TXT, PPT, PPTX, XLS, XLSX (Max 10MB each)
                    </p>
                    {files && files.length > 0 && (
                      <div className="mt-4 space-y-2">
                        {Array.from(files).map((file, index) => (
                          <div key={index} className="flex items-center justify-center text-sm text-gray-600">
                            <FileText className="h-4 w-4 mr-2" />
                            {file.name} ({(file.size / 1024 / 1024).toFixed(2)} MB)
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                
                {/* Project Description */}
                <div>
                  <label className="block text-sm font-medium mb-2">Project Description & Special Requirements</label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    placeholder="Please describe your project in detail, including any specific requirements, industry terminology, target audience, certification needs, or special formatting requirements..."
                    rows={5}
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-6"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Get Free Professional Quote'}
                </Button>
                
                <p className="text-center text-sm text-muted-foreground">
                  By submitting this form, you agree to our privacy policy. We'll never share your information.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default QuoteForm;
