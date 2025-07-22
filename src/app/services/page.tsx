import React from 'react';
import HeaderNav from '@/components/HeaderNav';
import FooterSection from '@/components/FooterSection';
import ServicesSection from '@/components/ServicesSection';
import SecurityBadges from '@/components/SecurityBadges';
import CTASection from '@/components/CTASection';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, CheckCircle, Zap, Shield, Users, Building, Rocket, Globe } from 'lucide-react';

const serviceCategories = [
  {
    title: "Digital Foundation & Acceleration",
    description: "Essential enterprise services to establish and accelerate your digital presence",
    icon: <Rocket className="w-8 h-8 text-primary" />,
    services: [
      "High-Performance Web Applications",
      "Mobile-First Digital Experiences", 
      "Digital Presence Acceleration",
      "Performance & SEO Optimization"
    ],
    approach: "Rapid deployment programs",
    timeline: "Custom timeline based on requirements"
  },
  {
    title: "Custom Enterprise Solutions",
    description: "Tailored digital acceleration solutions for unique business transformation needs",
    icon: <Building className="w-8 h-8 text-primary" />,
    services: [
      "Enterprise Web Applications",
      "API Development & Integration Strategy",
      "Database Architecture & Migration",
      "Legacy System Modernization"
    ],
    approach: "Strategic transformation partnerships",
    timeline: "Comprehensive planning and execution"
  },
  {
    title: "Scale & Optimization",
    description: "Advanced acceleration services for established enterprises ready to scale",
    icon: <Globe className="w-8 h-8 text-primary" />,
    services: [
      "Performance Optimization & Scaling",
      "Infrastructure Acceleration", 
      "Analytics & Automation Integration",
      "Conversion & Growth Optimization"
    ],
    approach: "Continuous improvement programs",
    timeline: "Ongoing partnership and optimization"
  }
];

const accelerationComparison = [
  {
    type: "Digital Accelerators",
    bestFor: "Startups & rapid market entry",
    approach: "Proven acceleration programs with defined scope",
    timeline: "Rapid deployment cycles",
    investment: "Project-based investment",
    includes: "Strategy, design, development, launch acceleration"
  },
  {
    type: "Enterprise Solutions", 
    bestFor: "Complex requirements & strategic transformation",
    approach: "Custom solutions designed for specific enterprise needs",
    timeline: "Strategic timeline based on transformation scope",
    investment: "Partnership-based investment",
    includes: "Custom development, enterprise integrations, ongoing acceleration"
  }
];

const enterpriseBenefits = [
  {
    icon: <Shield className="w-6 h-6 text-primary" />,
    title: "Enterprise-Grade Security",
    description: "SOC 2 compliance, enterprise security protocols, and data protection standards"
  },
  {
    icon: <Users className="w-6 h-6 text-primary" />,
    title: "Dedicated Acceleration Team",
    description: "Executive-level project management with dedicated technical specialists"
  },
  {
    icon: <Zap className="w-6 h-6 text-primary" />,
    title: "Proven Acceleration Methodology",
    description: "Battle-tested frameworks that accelerate time-to-market and business impact"
  },
  {
    icon: <Building className="w-6 h-6 text-primary" />,
    title: "Enterprise Integration",
    description: "Seamless integration with existing enterprise systems and workflows"
  }
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <HeaderNav />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="py-32">
          <div className="container mx-auto px-8">
            <div className="text-center max-w-5xl mx-auto mb-20">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-headline mb-8 leading-tight tracking-tight">
                Enterprise Digital
                <span className="block bg-gradient-to-r from-primary via-primary/90 to-primary/70 bg-clip-text text-transparent">
                  Acceleration Services
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-foreground/70 max-w-4xl mx-auto leading-relaxed mb-16">
                From rapid digital acceleration to complex enterprise transformation, we provide the full spectrum of services to accelerate your business growth and competitive advantage.
              </p>
              
              {/* Enterprise Trust signals */}
              <div className="mb-12">
                <p className="text-sm text-foreground/50 mb-4 uppercase tracking-wider">Enterprise-Grade Security & Compliance</p>
                <SecurityBadges 
                  variant="horizontal" 
                  showDescription={false}
                  className="justify-center opacity-70 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Button size="lg" className="group relative overflow-hidden bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-6 text-xl font-semibold rounded-full shadow-luxury transition-all duration-500 hover:shadow-luxury-lg hover:scale-105" asChild>
                  <a href="/contact?utm_source=website&utm_medium=cta&utm_campaign=enterprise&utm_content=services-accelerate-now" className="flex items-center gap-4">
                    <span className="relative z-10">Explore Digital Services</span>
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
                  </a>
                </Button>
                <Button size="lg" variant="ghost" className="group px-12 py-6 text-xl font-medium rounded-full hover:bg-primary/5 transition-all duration-300 border border-primary/20 backdrop-blur-xl" asChild>
                  <a href="/accelerators" className="flex items-center gap-4">
                    <span>Explore Accelerators</span>
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Service Categories */}
        <section className="py-32 bg-gradient-to-b from-background via-background/95 to-background">
          <div className="container mx-auto px-8">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-headline mb-8 tracking-tight">
                Service Categories
              </h2>
              <p className="text-xl md:text-2xl text-foreground/70 max-w-3xl mx-auto">
                Comprehensive digital acceleration services designed for every stage of your enterprise transformation journey.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {serviceCategories.map((category, index) => (
                <Card key={category.title} className="relative h-full bg-gradient-to-br from-background/80 via-background/60 to-background/40 backdrop-blur-2xl border border-primary/20 shadow-2xl hover:shadow-luxury transition-all duration-700 hover:scale-105 rounded-3xl overflow-hidden">
                  {/* Background gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 opacity-0 hover:opacity-100 transition-opacity duration-700" />
                  
                  <CardContent className="p-8 lg:p-10 relative z-10">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 backdrop-blur-xl border border-primary/30 rounded-2xl flex items-center justify-center shadow-lg">
                        {category.icon}
                      </div>
                      <div>
                        <CardTitle className="text-xl font-bold font-headline">{category.title}</CardTitle>
                      </div>
                    </div>
                    
                    <CardDescription className="text-foreground/70 leading-relaxed mb-6">
                      {category.description}
                    </CardDescription>
                    
                    <ul className="space-y-3 mb-8">
                      {category.services.map((service) => (
                        <li key={service} className="flex items-center gap-3 text-sm">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                          <span className="text-foreground/80">{service}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="space-y-3 mb-8 p-6 bg-primary/5 rounded-2xl border border-primary/20">
                      <div className="flex justify-between text-sm">
                        <span className="text-foreground/60 font-medium">Approach:</span>
                        <span className="font-semibold text-primary">{category.approach}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-foreground/60 font-medium">Timeline:</span>
                        <span className="font-semibold">{category.timeline}</span>
                      </div>
                    </div>
                    
                    <Button className="w-full group relative overflow-hidden rounded-2xl py-4 text-lg font-semibold transition-all duration-500 hover:scale-105 bg-primary/10 hover:bg-primary border border-primary/20 hover:border-primary text-primary hover:text-primary-foreground backdrop-blur-xl" asChild>
                      <a href="/contact?service=custom" className="flex items-center gap-3 justify-center">
                        <span className="relative z-10">Discuss Requirements</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Services Section */}
        <ServicesSection />

        {/* Enterprise Benefits */}
        <section className="py-32 bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5">
          <div className="container mx-auto px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold font-headline mb-8">
                Enterprise Acceleration Benefits
              </h2>
              <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
                Comprehensive advantages that come with our enterprise-grade digital acceleration approach.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {enterpriseBenefits.map((benefit, index) => (
                <div key={benefit.title} className="text-center bg-background/60 backdrop-blur-xl border border-primary/20 rounded-2xl p-6 shadow-lg hover:shadow-luxury transition-all duration-500">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl mx-auto mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="font-bold text-primary mb-3">{benefit.title}</h3>
                  <p className="text-sm text-foreground/70 leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Accelerators vs Services Comparison */}
        <section className="py-32">
          <div className="container mx-auto px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold font-headline mb-8">
                Accelerators vs Enterprise Services
              </h2>
              <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
                Choose the right approach for your digital transformation. Here's how to decide between our acceleration programs and custom enterprise services.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {accelerationComparison.map((option) => (
                <Card key={option.type} className="bg-gradient-to-br from-background/80 via-background/60 to-background/40 backdrop-blur-2xl border border-primary/20 rounded-3xl shadow-lg hover:shadow-luxury transition-all duration-500">
                  <CardHeader>
                    <CardTitle className="text-2xl text-primary font-bold font-headline">{option.type}</CardTitle>
                    <CardDescription className="text-lg">{option.bestFor}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <span className="text-sm text-foreground/60 font-medium">Approach: </span>
                      <span className="text-sm text-foreground/80">{option.approach}</span>
                    </div>
                    <div>
                      <span className="text-sm text-foreground/60 font-medium">Timeline: </span>
                      <span className="text-sm font-semibold text-primary">{option.timeline}</span>
                    </div>
                    <div>
                      <span className="text-sm text-foreground/60 font-medium">Investment: </span>
                      <span className="text-sm text-foreground/80">{option.investment}</span>
                    </div>
                    <div>
                      <span className="text-sm text-foreground/60 font-medium">Includes: </span>
                      <span className="text-sm text-foreground/80">{option.includes}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <p className="text-foreground/60 mb-6 text-lg">
                Not sure which approach aligns with your transformation goals?
              </p>
              <Button size="lg" className="group relative overflow-hidden bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-6 text-xl font-semibold rounded-full shadow-luxury transition-all duration-500 hover:shadow-luxury-lg hover:scale-105" asChild>
                <a href="/contact?utm_source=website&utm_medium=cta&utm_campaign=enterprise&utm_content=services-consultation" className="flex items-center gap-4">
                  <span className="relative z-10">Schedule Strategic Consultation</span>
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <CTASection />
      </main>
      <FooterSection />
    </div>
  );
} 