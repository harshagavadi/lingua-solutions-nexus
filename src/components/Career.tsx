
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Users, Clock, Briefcase } from 'lucide-react';

const Career = () => {
  const jobOpenings = [
    {
      title: "Senior Translator - Legal",
      location: "Remote / India",
      type: "Full-time",
      experience: "5+ years",
      description: "Specialized legal document translation with expertise in Indian and international law."
    },
    {
      title: "Project Manager",
      location: "Mumbai, India",
      type: "Full-time", 
      experience: "3+ years",
      description: "Manage translation projects, coordinate with clients and translators, ensure quality delivery."
    },
    {
      title: "Technical Translator",
      location: "Remote",
      type: "Contract",
      experience: "2+ years",
      description: "Technical documentation translation for IT, engineering, and manufacturing sectors."
    },
    {
      title: "Quality Assurance Specialist",
      location: "Bangalore, India",
      type: "Full-time",
      experience: "3+ years",
      description: "Review and ensure quality of translated documents across multiple languages."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Career Opportunities
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join our dynamic team of language professionals and help businesses communicate across cultures. 
            We offer competitive compensation, flexible work arrangements, and opportunities for professional growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {jobOpenings.map((job, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{job.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {job.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {job.type}
                      </div>
                      <div className="flex items-center gap-1">
                        <Briefcase className="h-4 w-4" />
                        {job.experience}
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">{job.description}</p>
                <Button 
                  className="w-full bg-blue-600 hover:bg-blue-700"
                  onClick={() => window.open('mailto:linguasolutionsindia247@gmail.com?subject=Application for ' + job.title, '_blank')}
                >
                  Apply Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-white rounded-lg p-8 max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">Why Work With Us?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <h4 className="text-lg font-semibold mb-2">Collaborative Team</h4>
                <p className="text-muted-foreground">Work with experienced professionals in a supportive environment</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌍</span>
                </div>
                <h4 className="text-lg font-semibold mb-2">Global Impact</h4>
                <p className="text-muted-foreground">Help businesses communicate across cultures and languages</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📈</span>
                </div>
                <h4 className="text-lg font-semibold mb-2">Growth Opportunities</h4>
                <p className="text-muted-foreground">Continuous learning and professional development programs</p>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-muted-foreground mb-4">
              Don't see a position that matches your skills? We're always looking for talented individuals.
            </p>
            <Button 
              variant="outline" 
              onClick={() => window.open('mailto:linguasolutionsindia247@gmail.com?subject=General Application', '_blank')}
            >
              Send Us Your Resume
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Career;
