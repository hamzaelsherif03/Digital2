import { processMetadata } from '@/lib/metadata';
import HeaderNav from '@/components/HeaderNav';
import FooterSection from '@/components/FooterSection';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, Phone, FileText, Rocket, CheckCircle, MessageSquare, Calendar, Shield, Zap, ArrowRight, Clock, Target, Award } from 'lucide-react';

export const metadata = processMetadata;

const steps = [
  {
    number: "01",
    title: 'Strategic Discovery',
    duration: "Consultation phase",
    icon: <Phone className="w-6 h-6 text-primary" />,
    desc: 'We begin with a comprehensive strategic consultation to understand your transformation objectives, current challenges, and vision for success.',
    deliverables: ["Strategic requirements analysis", "Transformation roadmap outline", "Executive team alignment", "Success metrics definition"]
  },
  {
    number: "02", 
    title: 'Solution Architecture',
    duration: "Planning phase",
    icon: <FileText className="w-6 h-6 text-primary" />,
    desc: 'Our team develops a detailed transformation proposal with clear deliverables, strategic approach, and investment framework tailored to your objectives.',
    deliverables: ["Detailed transformation proposal", "Custom investment framework", "Strategic implementation plan", "Risk mitigation strategy"]
  },
  {
    number: "03",
    title: 'Partnership Initiation', 
    duration: "Onboarding phase",
    icon: <Rocket className="w-6 h-6 text-primary" />,
    desc: 'Meet your dedicated acceleration team, gain access to our collaboration platform, and align on the detailed execution methodology.',
    deliverables: ["Executive team introductions", "Collaboration platform setup", "Communication protocols", "Partnership charter"]
  },
  {
    number: "04",
    title: 'Accelerated Execution',
    duration: "Implementation phase",
    icon: <Zap className="w-6 h-6 text-primary" />,
    desc: 'We execute through focused acceleration cycles with regular strategic check-ins and transparent progress communication throughout the engagement.',
    deliverables: ["Regular progress updates", "Strategic milestone reviews", "Stakeholder demonstrations", "Performance metrics tracking"]
  },
  {
    number: "05",
    title: 'Continuous Optimization',
    duration: "Refinement phase",
    icon: <MessageSquare className="w-6 h-6 text-primary" />,
    desc: 'Strategic review sessions with executive stakeholders to ensure alignment, gather feedback, and optimize the transformation approach for maximum impact.',
    deliverables: ["Executive review sessions", "Strategic feedback integration", "Continuous optimization", "Performance enhancement"]
  },
  {
    number: "06",
    title: 'Strategic Delivery',
    duration: "Completion phase",
    icon: <CheckCircle className="w-6 h-6 text-primary" />,
    desc: 'We deliver your transformation solution with comprehensive documentation, strategic handover, and ensure seamless integration with your operations.',
    deliverables: ["Production deployment", "Strategic documentation", "Knowledge transfer", "Integration validation"]
  },
  {
    number: "07",
    title: 'Partnership Excellence',
    duration: "Ongoing partnership",
    icon: <Shield className="w-6 h-6 text-primary" />,
    desc: 'Continued strategic partnership with ongoing optimization support and the option for expanded collaboration as your transformation evolves.',
    deliverables: ["Strategic optimization", "Performance monitoring", "Partnership expansion", "Long-term success planning"]
  },
];

const collaboration = [
  { 
    icon: <Users className="w-6 h-6 text-primary" />, 
    title: "Executive Partnership",
    text: 'Dedicated transformation team with executive-level project management and strategic oversight'
  },
  { 
    icon: <MessageSquare className="w-6 h-6 text-primary" />, 
    title: "Strategic Communication",
    text: 'Executive briefings, strategic updates, and real-time collaboration through dedicated channels'
  },
  { 
    icon: <Calendar className="w-6 h-6 text-primary" />, 
    title: "Flexible Engagement",
    text: 'Adaptable schedule with regular strategic sessions and milestone-based progress reviews'
  },
  { 
    icon: <Target className="w-6 h-6 text-primary" />, 
    title: "Outcome Focused",
    text: 'Results-driven approach with clear success metrics and strategic business impact measurement'
  },
];

const commitments = [
  {
    icon: <Clock className="w-5 h-5 text-primary" />,
    title: "Strategic Timeline",
    description: "Flexible timelines designed around your business objectives and operational requirements"
  },
  {
    icon: <Shield className="w-5 h-5 text-primary" />,
    title: "Excellence Assurance", 
    description: "Comprehensive satisfaction guarantee with ongoing partnership commitment to your success"
  },
  {
    icon: <Award className="w-5 h-5 text-primary" />,
    title: "Enterprise Standards",
    description: "Highest quality deliverables, professional documentation, and industry best practices"
  }
];

export default function ProcessPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <HeaderNav />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="py-32">
          <div className="container mx-auto px-8">
            <div className="text-center mb-20 max-w-5xl mx-auto">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-headline mb-8 leading-tight tracking-tight">
                Our Strategic
                <span className="block bg-gradient-to-r from-primary via-primary/90 to-primary/70 bg-clip-text text-transparent">
                  Transformation Process
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-foreground/70 mb-16 leading-relaxed max-w-4xl mx-auto">
                From strategic discovery to long-term partnership, our proven methodology ensures exceptional outcomes through clear processes, executive collaboration, and results-driven execution.
              </p>
              
              {/* Strategic Commitments */}
              <div className="grid md:grid-cols-3 gap-6 mb-16">
                {commitments.map((commitment, index) => (
                  <div key={commitment.title} className="text-center bg-gradient-to-br from-background/80 via-background/60 to-background/40 backdrop-blur-2xl border border-primary/20 rounded-2xl p-6 shadow-lg">
                    <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 backdrop-blur-xl border border-primary/30 rounded-xl mx-auto mb-3">
                      {commitment.icon}
                    </div>
                    <h3 className="font-bold mb-2 text-sm">{commitment.title}</h3>
                    <p className="text-xs text-foreground/70 leading-relaxed">{commitment.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Process Steps */}
        <section className="py-32 bg-gradient-to-b from-background via-background/95 to-background">
          <div className="container mx-auto px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-headline mb-8 tracking-tight">
                7-Phase Transformation Methodology
              </h2>
              <p className="text-xl md:text-2xl text-foreground/70 max-w-3xl mx-auto">
                Our proven approach that has delivered successful transformations for 200+ organizations worldwide
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              {steps.map((step, index) => (
                <div key={step.title} className="relative">
                  {/* Connector Line */}
                  {index < steps.length - 1 && (
                    <div className="absolute left-8 top-32 w-0.5 h-40 bg-gradient-to-b from-primary/50 to-primary/20 z-0"></div>
                  )}
                  
                  <Card className="mb-12 bg-gradient-to-br from-background/80 via-background/60 to-background/40 backdrop-blur-2xl border border-primary/20 shadow-2xl hover:shadow-luxury transition-all duration-700 hover:scale-105 rounded-3xl relative z-10">
                    <CardContent className="p-8 lg:p-10">
                      <div className="flex items-start gap-8">
                        {/* Step Number Circle */}
                        <div className="flex-shrink-0">
                          <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 backdrop-blur-xl border border-primary/30 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                            {step.icon}
                          </div>
                          <div className="text-center">
                            <div className="text-primary font-bold text-sm">{step.number}</div>
                          </div>
                        </div>
                        
                        {/* Content */}
                        <div className="flex-grow">
                          <div className="flex items-center justify-between mb-4">
                            <h3 className="text-2xl font-bold font-headline text-primary">{step.title}</h3>
                            <span className="text-sm text-foreground/60 bg-primary/10 px-4 py-2 rounded-full border border-primary/20 backdrop-blur-xl">
                              {step.duration}
                            </span>
                          </div>
                          <p className="text-foreground/80 mb-6 leading-relaxed text-lg">{step.desc}</p>
                          
                          {/* Deliverables */}
                          <div>
                            <h4 className="text-sm font-semibold text-primary mb-4">Strategic Deliverables:</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                              {step.deliverables.map((deliverable, idx) => (
                                <div key={idx} className="flex items-center gap-3 text-sm text-foreground/70 bg-primary/5 p-3 rounded-xl border border-primary/20">
                                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                                  <span>{deliverable}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Collaboration Section */}
        <section className="py-32 bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5">
          <div className="container mx-auto px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold font-headline mb-8">
                Executive Collaboration Model
              </h2>
              <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
                Strategic partnership approach that ensures alignment, transparency, and exceptional outcomes throughout your transformation.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {collaboration.map((item, index) => (
                <Card key={index} className="bg-background/60 backdrop-blur-xl border border-primary/20 rounded-3xl shadow-lg hover:shadow-luxury transition-all duration-500 text-center">
                  <CardContent className="p-8">
                    <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 backdrop-blur-xl border border-primary/30 rounded-2xl mx-auto mb-6">
                      {item.icon}
                    </div>
                    <h3 className="font-bold mb-3 text-primary text-lg">{item.title}</h3>
                    <p className="text-sm text-foreground/70 leading-relaxed">{item.text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Expectations Section */}
        <section className="py-32">
          <div className="container mx-auto px-8">
            <div className="max-w-5xl mx-auto">
              <Card className="bg-gradient-to-br from-background/80 via-background/60 to-background/40 backdrop-blur-2xl border border-primary/20 rounded-3xl shadow-2xl">
                <CardHeader className="text-center">
                  <CardTitle className="text-3xl md:text-4xl font-bold font-headline text-primary">
                    Partnership Excellence Standards
                  </CardTitle>
                  <CardDescription className="text-xl text-foreground/70">
                    Our commitment to exceptional outcomes—throughout and beyond your transformation
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-8 lg:p-10">
                  <div className="grid md:grid-cols-2 gap-10">
                    <div>
                      <h4 className="font-bold text-primary mb-6 text-lg">During Transformation:</h4>
                      <ul className="space-y-4">
                        <li className="flex items-start gap-4">
                          <CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-foreground/80">Strategic clarity with defined outcomes and transparent methodologies</span>
                        </li>
                        <li className="flex items-start gap-4">
                          <CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-foreground/80">Executive-level partnership with dedicated strategic oversight and communication</span>
                        </li>
                        <li className="flex items-start gap-4">
                          <CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-foreground/80">Agile methodology with rapid iteration cycles and continuous stakeholder alignment</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-primary mb-6 text-lg">Post-Transformation:</h4>
                      <ul className="space-y-4">
                        <li className="flex items-start gap-4">
                          <CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-foreground/80">Comprehensive strategic support with ongoing optimization opportunities</span>
                        </li>
                        <li className="flex items-start gap-4">
                          <CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-foreground/80">Complete documentation, training, and knowledge transfer for sustained success</span>
                        </li>
                        <li className="flex items-start gap-4">
                          <CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-foreground/80">Continued partnership opportunities for strategic expansion and evolution</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 bg-gradient-to-b from-background via-background/95 to-background">
          <div className="container mx-auto px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold font-headline mb-8">
                Ready to Begin Your Strategic Transformation?
              </h2>
              <p className="text-xl text-foreground/70 mb-12 max-w-3xl mx-auto">
                Join 200+ successful organizations who've accelerated their transformation with our proven strategic methodology and partnership approach.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button size="lg" className="group relative overflow-hidden bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-6 text-xl font-semibold rounded-full shadow-luxury transition-all duration-500 hover:shadow-luxury-lg hover:scale-105" asChild>
                  <a href="/contact?utm_source=process&utm_medium=cta&utm_campaign=transformation" className="flex items-center gap-4">
                    <span className="relative z-10">Begin Your Transformation</span>
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
                  </a>
                </Button>
                <Button size="lg" variant="ghost" className="group px-12 py-6 text-xl font-medium rounded-full hover:bg-primary/5 transition-all duration-300 border border-primary/20 backdrop-blur-xl" asChild>
                  <a href="/accelerators" className="flex items-center gap-4">
                    <span>Explore Programs</span>
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