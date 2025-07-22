import React from 'react';
import HeaderNav from '@/components/HeaderNav';
import FooterSection from '@/components/FooterSection';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Rocket, Building, Crown, Zap, CheckCircle, Users, Clock, Target } from 'lucide-react';

const accelerators = [
  {
    title: 'MVP Launchpad',
    description: 'For startups and early-stage ideas. Transform concepts into market-ready solutions with proven acceleration methodologies.',
    href: '/accelerators/mvp-launchpad',
    icon: <Rocket className="w-8 h-8 text-primary" />,
    features: [
      'Rapid prototyping & validation',
      'Market-ready MVP development', 
      'User testing & feedback integration',
      'Launch strategy & support'
    ],
    approach: 'Accelerated development program',
    timeline: 'Rapid deployment cycle'
  },
  {
    title: 'Scale-Up Engine',
    description: 'For growing businesses ready to scale. Accelerate your digital transformation with enterprise-grade solutions and strategic optimization.',
    href: '/accelerators/scale-up-engine',
    icon: <Building className="w-8 h-8 text-primary" />,
    features: [
      'Performance optimization & scaling',
      'Strategic growth acceleration', 
      'Advanced automation integration',
      'Infrastructure transformation'
    ],
    approach: 'Comprehensive transformation program',
    timeline: 'Strategic implementation cycle'
  },
  {
    title: 'Enterprise Innovation Sprint',
    description: 'For large organizations. Drive enterprise-wide digital innovation and deliver transformational results with executive-level acceleration.',
    href: '/accelerators/enterprise-innovation-sprint',
    icon: <Crown className="w-8 h-8 text-primary" />,
    features: [
      'Executive stakeholder alignment',
      'Enterprise-grade security & compliance', 
      'Complex system integration',
      'Strategic change management'
    ],
    approach: 'Executive transformation partnership',
    timeline: 'Enterprise transformation cycle'
  },
];

const accelerationBenefits = [
  {
    icon: <Zap className="w-6 h-6 text-primary" />,
    title: "Proven Methodologies",
    description: "Battle-tested acceleration frameworks that have delivered 200+ successful transformations"
  },
  {
    icon: <Users className="w-6 h-6 text-primary" />,
    title: "Dedicated Teams",
    description: "Expert acceleration teams with specialized knowledge for your industry and transformation goals"
  },
  {
    icon: <Clock className="w-6 h-6 text-primary" />,
    title: "Rapid Results",
    description: "Accelerated timelines that deliver measurable business impact and competitive advantage"
  },
  {
    icon: <Target className="w-6 h-6 text-primary" />,
    title: "Strategic Focus",
    description: "Laser-focused approach on your specific objectives with clear success metrics and outcomes"
  }
];

export default function AcceleratorsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <HeaderNav />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="py-32">
          <div className="container mx-auto px-8">
            <div className="text-center max-w-5xl mx-auto mb-20">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-headline mb-8 leading-tight tracking-tight">
                Acceleration Programs for
                <span className="block bg-gradient-to-r from-primary via-primary/90 to-primary/70 bg-clip-text text-transparent">
                  Every Stage
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-foreground/70 max-w-4xl mx-auto leading-relaxed mb-16">
                Explore our proven acceleration programs designed for every stage of your digital transformation journey. Each program is meticulously crafted to deliver exceptional outcomes and sustainable competitive advantage.
              </p>

              {/* Acceleration Benefits */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                {accelerationBenefits.map((benefit, index) => (
                  <div key={benefit.title} className="text-center bg-gradient-to-br from-background/80 via-background/60 to-background/40 backdrop-blur-2xl border border-primary/20 rounded-2xl p-6 shadow-lg">
                    <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl mx-auto mb-3">
                      {benefit.icon}
                    </div>
                    <h3 className="font-bold mb-2 text-sm">{benefit.title}</h3>
                    <p className="text-xs text-foreground/70 leading-relaxed">{benefit.description}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Button size="lg" className="group relative overflow-hidden bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-6 text-xl font-semibold rounded-full shadow-luxury transition-all duration-500 hover:shadow-luxury-lg hover:scale-105" asChild>
                  <a href="/contact?utm_source=accelerators&utm_medium=cta&utm_campaign=acceleration" className="flex items-center gap-4">
                    <span className="relative z-10">Explore Acceleration Programs</span>
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
                  </a>
                </Button>
                <Button size="lg" variant="ghost" className="group px-12 py-6 text-xl font-medium rounded-full hover:bg-primary/5 transition-all duration-300 border border-primary/20 backdrop-blur-xl" asChild>
                  <a href="/process" className="flex items-center gap-4">
                    <span>Explore Our Process</span>
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Accelerator Programs */}
        <section className="py-32 bg-gradient-to-b from-background via-background/95 to-background">
          <div className="container mx-auto px-8">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-headline mb-8 tracking-tight">
                Choose Your Acceleration Path
              </h2>
              <p className="text-xl md:text-2xl text-foreground/70 max-w-3xl mx-auto">
                Three distinct acceleration programs, each designed to deliver transformational results for different business stages and objectives.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {accelerators.map((accel, index) => (
                <Card key={accel.title} className="relative h-full bg-gradient-to-br from-background/80 via-background/60 to-background/40 backdrop-blur-2xl border border-primary/20 shadow-2xl hover:shadow-luxury transition-all duration-700 hover:scale-105 rounded-3xl overflow-hidden group">
                  {/* Background gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  
                  <CardContent className="p-8 lg:p-10 relative z-10">
                    {/* Icon */}
                    <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 backdrop-blur-xl border border-primary/30 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                      {accel.icon}
                    </div>

                    <h2 className="text-2xl font-bold font-headline mb-4">{accel.title}</h2>
                    <p className="text-foreground/70 leading-relaxed mb-6">{accel.description}</p>
                    
                    {/* Features */}
                    <div className="space-y-3 mb-8">
                      {accel.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-foreground/80 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Approach Details */}
                    <div className="space-y-3 mb-8 p-6 bg-primary/5 rounded-2xl border border-primary/20">
                      <div className="flex justify-between text-sm">
                        <span className="text-foreground/60 font-medium">Approach:</span>
                        <span className="font-semibold text-primary">{accel.approach}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-foreground/60 font-medium">Timeline:</span>
                        <span className="font-semibold">{accel.timeline}</span>
                      </div>
                    </div>
                    
                    {/* CTA Button */}
                    <div className="space-y-4">
                      <Button className="w-full group relative overflow-hidden rounded-2xl py-4 text-lg font-semibold transition-all duration-500 hover:scale-105 bg-primary/10 hover:bg-primary border border-primary/20 hover:border-primary text-primary hover:text-primary-foreground backdrop-blur-xl" asChild>
                        <Link href={accel.href} className="flex items-center gap-3 justify-center">
                          <span className="relative z-10">Learn More</span>
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
                        </Link>
                      </Button>
                      
                      <Button variant="outline" className="w-full group border-primary/20 hover:bg-primary/5 rounded-2xl py-4 transition-all duration-300" asChild>
                        <a href={`/contact?program=${accel.title.toLowerCase().replace(/\s+/g, '-')}`} className="flex items-center gap-3 justify-center">
                          <span>Discuss Program</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Success Metrics */}
        <section className="py-32 bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5">
          <div className="container mx-auto px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold font-headline mb-8">
                Acceleration Success Metrics
              </h2>
              <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
                Proven results from our acceleration programs across all business stages and industries.
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
              <div className="text-center bg-background/60 backdrop-blur-xl border border-primary/20 rounded-2xl p-6 shadow-lg">
                <div className="text-4xl font-bold text-primary mb-2">200+</div>
                <div className="text-sm font-medium text-foreground mb-1">Programs Delivered</div>
                <div className="text-xs text-foreground/50">Successful accelerations</div>
              </div>
              
              <div className="text-center bg-background/60 backdrop-blur-xl border border-primary/20 rounded-2xl p-6 shadow-lg">
                <div className="text-4xl font-bold text-primary mb-2">98%</div>
                <div className="text-sm font-medium text-foreground mb-1">Success Rate</div>
                <div className="text-xs text-foreground/50">Program completion</div>
              </div>
              
              <div className="text-center bg-background/60 backdrop-blur-xl border border-primary/20 rounded-2xl p-6 shadow-lg">
                <div className="text-4xl font-bold text-primary mb-2">50M+</div>
                <div className="text-sm font-medium text-foreground mb-1">Revenue Generated</div>
                <div className="text-xs text-foreground/50">Client business impact</div>
              </div>
              
              <div className="text-center bg-background/60 backdrop-blur-xl border border-primary/20 rounded-2xl p-6 shadow-lg">
                <div className="text-4xl font-bold text-primary mb-2">25+</div>
                <div className="text-sm font-medium text-foreground mb-1">Countries</div>
                <div className="text-xs text-foreground/50">Global reach</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32">
          <div className="container mx-auto px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold font-headline mb-8">
                Ready to Begin Your <span className="text-primary">Acceleration Journey</span>?
              </h2>
              <p className="text-xl text-foreground/70 mb-12 max-w-3xl mx-auto">
                Choose the acceleration program that aligns with your transformation objectives, or schedule a consultation to explore a custom approach designed specifically for your organization.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button size="lg" className="group relative overflow-hidden bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-6 text-xl font-semibold rounded-full shadow-luxury transition-all duration-500 hover:shadow-luxury-lg hover:scale-105" asChild>
                  <a href="/contact?utm_source=accelerators&utm_medium=cta&utm_campaign=consultation" className="flex items-center gap-4">
                    <span className="relative z-10">Schedule Consultation</span>
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
                  </a>
                </Button>
                <Button size="lg" variant="ghost" className="group px-12 py-6 text-xl font-medium rounded-full hover:bg-primary/5 transition-all duration-300 border border-primary/20 backdrop-blur-xl" asChild>
                  <a href="/pricing" className="flex items-center gap-4">
                    <span>View Investment Options</span>
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