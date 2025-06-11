
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Calculator } from 'lucide-react';

const PricingCalculator = () => {
  const [serviceType, setServiceType] = useState('');
  const [wordCount, setWordCount] = useState('');
  const [urgency, setUrgency] = useState('');
  const [currency, setCurrency] = useState('USD');
  const [estimate, setEstimate] = useState<number | null>(null);

  const calculatePrice = () => {
    if (!serviceType || !wordCount) return;

    const baseRates = {
      USD: {
        translation: 0.10,
        transcription: 1.5,
        interpretation: 50,
        localization: 0.12,
        subtitling: 8,
        voiceover: 10
      },
      INR: {
        translation: 0.75,
        transcription: 120,
        interpretation: 4000,
        localization: 0.90,
        subtitling: 640,
        voiceover: 800
      }
    };

    const urgencyMultipliers = {
      standard: 1,
      urgent: 1.5,
      express: 2
    };

    const baseRate = baseRates[currency as keyof typeof baseRates][serviceType as keyof typeof baseRates.USD] || (currency === 'USD' ? 0.10 : 0.75);
    const multiplier = urgencyMultipliers[urgency as keyof typeof urgencyMultipliers] || 1;
    const words = parseInt(wordCount) || 0;

    let calculatedPrice = 0;
    if (serviceType === 'interpretation') {
      calculatedPrice = baseRate * multiplier * Math.ceil(words / 100); // per hour estimation
    } else {
      calculatedPrice = baseRate * words * multiplier;
    }

    const minimumRate = currency === 'USD' ? 25 : 2000;
    setEstimate(Math.max(calculatedPrice, minimumRate));
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Pricing Calculator
            </h2>
            <p className="text-xl text-muted-foreground">
              Get an instant estimate for your translation project
            </p>
          </div>
          
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl text-center flex items-center justify-center gap-2">
                <Calculator className="h-6 w-6" />
                Project Estimator
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Currency</label>
                <Select onValueChange={setCurrency} value={currency}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select currency" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="USD">USD ($)</SelectItem>
                    <SelectItem value="INR">INR (₹)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Service Type</label>
                <Select onValueChange={setServiceType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select service type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="translation">Document Translation</SelectItem>
                    <SelectItem value="transcription">Transcription (per minute)</SelectItem>
                    <SelectItem value="interpretation">Interpretation (per hour)</SelectItem>
                    <SelectItem value="localization">Website Localization</SelectItem>
                    <SelectItem value="subtitling">Subtitling (per minute)</SelectItem>
                    <SelectItem value="voiceover">Voice-over (per minute)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">
                  {serviceType === 'interpretation' ? 'Estimated Hours' : 
                   serviceType === 'transcription' || serviceType === 'subtitling' || serviceType === 'voiceover' ? 'Minutes' : 
                   'Word Count'}
                </label>
                <Input
                  type="number"
                  value={wordCount}
                  onChange={(e) => setWordCount(e.target.value)}
                  placeholder={serviceType === 'interpretation' ? 'e.g., 2' : 
                              serviceType === 'transcription' || serviceType === 'subtitling' || serviceType === 'voiceover' ? 'e.g., 30' : 
                              'e.g., 1000'}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Urgency</label>
                <Select onValueChange={setUrgency}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select deadline" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="standard">Standard (5-7 days)</SelectItem>
                    <SelectItem value="urgent">Urgent (2-3 days) +50%</SelectItem>
                    <SelectItem value="express">Express (24 hours) +100%</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <Button 
                onClick={calculatePrice} 
                className="w-full bg-blue-600 hover:bg-blue-700"
                disabled={!serviceType || !wordCount || !urgency || !currency}
              >
                Calculate Estimate
              </Button>
              
              {estimate && (
                <div className="bg-blue-50 p-6 rounded-lg text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    {currency === 'USD' ? '$' : '₹'}{estimate.toFixed(2)}
                  </div>
                  <p className="text-muted-foreground">
                    Estimated price for your project
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    *Final price may vary based on complexity and specific requirements
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PricingCalculator;
