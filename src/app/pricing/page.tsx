import HeaderNav from '@/components/HeaderNav';
import FooterSection from '@/components/FooterSection';
import PricingSection from '@/components/PricingSection';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, Shield, Clock, Users, ArrowRight, MessageSquare, Zap, Building, Crown, Rocket } from 'lucide-react';

const enterpriseFeatures = [
  {
    icon: <Clock className="w-5 h-5 text-primary" />,
    title: "Rapid Engagement",
    description: "Dedicated team assignment within 24 hours"
  },
  {
    icon: <Shield className="w-5 h-5 text-primary" />,
    title: "Enterprise Assurance", 
    description: "Comprehensive SLAs and performance guarantees"
  },
  {
    icon: <Users className="w-5 h-5 text-primary" />,
    title: "Dedicated Partnership",
    description: "Executive-level project management and support"
  },
  {
    icon: <Zap className="w-5 h-5 text-primary" />,
    title: "Accelerated Delivery",
    description: "Proven methodologies for rapid transformation"
  }
];

const accelerationApproaches = [
  {
    icon: <Rocket className="w-6 h-6 text-primary" />,
    title: "VELOCITY",
    description: "Rapid digital acceleration for startups and growing businesses",
    features: [
      "Digital strategy consultation",
      "MVP development & launch", 
      "Performance optimization",
      "Growth analytics setup",
      "Mobile-first architecture",
      "Ongoing acceleration support"
    ],
    bestFor: "Startups & rapid deployment needs",
    approach: "Accelerated development programs",
    pricing: "Custom project-based investment"
  },
  {
    icon: <Building className="w-6 h-6 text-primary" />,
    title: "SCALE",
    description: "Enterprise-grade acceleration for established organizations",
    features: [
      "Complete digital transformation",
      "Multi-platform solutions",
      "Advanced integrations & APIs",
      "Enterprise security & compliance",
      "Scalable cloud architecture",
      "White-label solutions",
      "Dedicated acceleration team"
    ],
    bestFor: "Established businesses & enterprises",
    approach: "Comprehensive transformation programs",
    pricing: "Strategic partnership investment"
  },
  {
    icon: <Crown className="w-6 h-6 text-primary" />,
    title: "TRANSFORM",
    description: "Complete digital ecosystem transformation for large enterprises",
    features: [
      "End-to-end digital strategy",
      "Legacy system modernization",
      "Multi-stakeholder platforms",
      "Advanced AI/ML integration",
      "Enterprise-grade infrastructure",
      "Compliance & governance",
      "Executive acceleration program",
      "Long-term partnership"
    ],
    bestFor: "Large enterprises & complex requirements",
    approach: "Strategic transformation partnerships",
    pricing: "Executive consultation required"
  }
];

const enterpriseCommitments = [
  {
    title: "Transparent Methodology",
    description: "Clear processes and deliverables with no hidden complexities"
  },
  {
    title: "Flexible Investment",
    description: "Custom investment structures aligned with your business model"
  },
  {
    title: "Strategic Partnership",
    description: "Long-term collaboration focused on sustainable growth"
  },
  {
    title: "Proven Results",
    description: "Track record of successful enterprise transformations"
  }
];

export default function PricingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <HeaderNav />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="py-32">
          <div className="container mx-auto px-8">
            <div className="text-center mb-20 max-w-5xl mx-auto">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-headline mb-8 leading-tight tracking-tight">
                Enterprise Digital
                <span className="block bg-gradient-to-r from-primary via-primary/90 to-primary/70 bg-clip-text text-transparent">
                  Acceleration Investment
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-foreground/70 leading-relaxed mb-12 max-w-4xl mx-auto">
                Strategic partnerships with transparent methodologies and flexible investment structures. 
                Every engagement is custom-designed for maximum business impact and sustainable growth.
              </p>
              
              {/* Enterprise Features */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                {enterpriseFeatures.map((feature, index) => (
                  <div key={feature.title} className="text-center">
                    <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 backdrop-blur-xl border border-primary/30 rounded-2xl mx-auto mb-4 shadow-lg">
                      {feature.icon}
                    </div>
                    <h3 className="font-bold mb-2 text-lg">{feature.title}</h3>
                    <p className="text-sm text-foreground/70 leading-relaxed">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Main Pricing Section */}
        <PricingSection />

        {/* Acceleration Approaches */}
        <section className="py-32 bg-gradient-to-b from-background via-background/95 to-background">
          <div className="container mx-auto px-8">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-headline mb-8 tracking-tight">
                Choose Your
                <span className="block bg-gradient-to-r from-primary via-primary/90 to-primary/70 bg-clip-text text-transparent">
                  Acceleration Approach
                </span>
              </h2>
              <p className="text-xl md:text-2xl text-foreground/70 max-w-3xl mx-auto">
                Three distinct approaches to digital acceleration, each tailored for different business stages and transformation requirements.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {accelerationApproaches.map((approach, index) => (
                <Card key={approach.title} className="relative h-full bg-gradient-to-br from-background/80 via-background/60 to-background/40 backdrop-blur-2xl border border-primary/20 shadow-2xl hover:shadow-luxury transition-all duration-700 hover:scale-105 rounded-3xl overflow-hidden">
                  {/* Background gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 opacity-0 hover:opacity-100 transition-opacity duration-700" />
                  
                  <CardContent className="p-8 lg:p-10 relative z-10">
                    {/* Icon */}
                    <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 backdrop-blur-xl border border-primary/30 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                      {approach.icon}
                    </div>

                    <h3 className="text-2xl font-bold font-headline mb-4">{approach.title}</h3>
                    <p className="text-foreground/70 leading-relaxed mb-6">{approach.description}</p>

                    {/* Features */}
                    <div className="space-y-3 mb-8">
                      {approach.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-foreground/80 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Approach Details */}
                    <div className="space-y-4 mb-8 p-6 bg-primary/5 rounded-2xl border border-primary/20">
                      <div>
                        <span className="text-sm font-semibold text-primary">Best For: </span>
                        <span className="text-sm text-foreground/80">{approach.bestFor}</span>
                      </div>
                      <div>
                        <span className="text-sm font-semibold text-primary">Approach: </span>
                        <span className="text-sm text-foreground/80">{approach.approach}</span>
                      </div>
                      <div>
                        <span className="text-sm font-semibold text-primary">Investment: </span>
                        <span className="text-sm text-foreground/80">{approach.pricing}</span>
                      </div>
                    </div>

                    <Button 
                      className="w-full group relative overflow-hidden rounded-2xl py-4 text-lg font-semibold transition-all duration-500 hover:scale-105 bg-primary/10 hover:bg-primary border border-primary/20 hover:border-primary text-primary hover:text-primary-foreground backdrop-blur-xl"
                      asChild
                    >
                      <a href={`/contact?approach=${approach.title.toLowerCase()}`} className="flex items-center justify-center gap-3">
                        <MessageSquare className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                        <span className="relative z-10">Discuss {approach.title}</span>
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

        {/* Enterprise Commitments */}
        <section className="py-32 bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5">
          <div className="container mx-auto px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-headline mb-8">
                Our Enterprise Commitments
              </h2>
              <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
                Principles that guide every enterprise partnership and ensure mutual success.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
              {enterpriseCommitments.map((commitment, index) => (
                <div key={commitment.title} className="flex items-start gap-4 p-6 bg-background/60 backdrop-blur-xl border border-primary/20 rounded-2xl shadow-lg">
                  <div className="w-3 h-3 rounded-full bg-primary shadow-lg shadow-primary/50 mt-2 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-primary mb-2">{commitment.title}</h3>
                    <p className="text-foreground/70 leading-relaxed">{commitment.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Enterprise CTA */}
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-bold font-headline mb-6">
                Ready to Begin Your <span className="text-primary">Digital Acceleration</span>?
              </h3>
              <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
                Schedule a strategic consultation to discuss your transformation requirements and explore the optimal acceleration approach for your organization.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button 
                  size="lg"
                  className="group relative overflow-hidden bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-6 text-xl font-semibold rounded-full shadow-luxury transition-all duration-500 hover:shadow-luxury-lg hover:scale-105"
                  asChild
                >
                  <a href="/contact?type=enterprise-consultation" className="flex items-center gap-4">
                    <span className="relative z-10">Schedule Enterprise Consultation</span>
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
                  </a>
                </Button>
                
                <Button 
                  size="lg" 
                  variant="ghost" 
                  className="group px-12 py-6 text-xl font-medium rounded-full hover:bg-primary/5 transition-all duration-300 border border-primary/20 backdrop-blur-xl"
                  asChild
                >
                  <a href="/process" className="flex items-center gap-4">
                    <span>Learn Our Methodology</span>
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <FooterSection />
    </div>
  );
} 