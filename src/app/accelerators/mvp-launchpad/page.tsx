import HeaderNav from '@/components/HeaderNav';
import FooterSection from '@/components/FooterSection';
import Breadcrumb from '@/components/Breadcrumb';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Rocket, 
  Figma, 
  Users, 
  Zap, 
  CheckCircle, 
  TrendingUp, 
  Lightbulb,
  ArrowRight,
  Clock,
  DollarSign,
  Star,
  Target,
  Code,
  FileText,
  Calendar,
  Award,
  Smartphone,
  BarChart
} from 'lucide-react';

const timeline = [
  { 
    day: 'Day 1', 
    number: "01",
    title: 'Vision & Strategy', 
    duration: "8 hours",
    icon: <Lightbulb className="w-6 h-6 text-primary" />, 
    desc: 'Deep-dive discovery call to clarify your vision, define MVP scope, validate assumptions, and set measurable success metrics.',
    deliverables: ['Product requirements document', 'User persona definition', 'Success metrics framework', 'Technical architecture plan']
  },
  { 
    day: 'Day 2', 
    number: "02",
    title: 'Rapid Prototyping', 
    duration: "12 hours",
    icon: <Figma className="w-6 h-6 text-primary" />, 
    desc: 'Design and build clickable prototype with core user flows. Early feedback collection from you and potential users.',
    deliverables: ['Interactive Figma prototype', 'User flow diagrams', 'Initial user feedback', 'Design system basics']
  },
  { 
    day: 'Days 3-4', 
    number: "03",
    title: 'User Testing & Iteration', 
    duration: "16 hours",
    icon: <Users className="w-6 h-6 text-primary" />, 
    desc: 'Real user testing sessions with your target audience. Rapid iterations based on feedback and behavioral insights.',
    deliverables: ['User testing sessions (5-10 users)', 'Feedback analysis report', 'Prototype iterations', 'Validated user stories']
  },
  { 
    day: 'Days 5-6', 
    number: "04",
    title: 'MVP Development', 
    duration: "32 hours",
    icon: <Code className="w-6 h-6 text-primary" />, 
    desc: 'Build the production-ready MVP with essential features, payment integrations, analytics, and performance optimization.',
    deliverables: ['Production web application', 'Payment integration', 'Analytics setup', 'Performance optimization']
  },
  { 
    day: 'Day 7', 
    number: "05",
    title: 'Launch & Growth Setup', 
    duration: "8 hours",
    icon: <TrendingUp className="w-6 h-6 text-primary" />, 
    desc: 'Deploy to cloud, implement growth tracking, onboard first users, and create investor-ready materials.',
    deliverables: ['Live deployment', 'Growth dashboard', 'User onboarding flow', 'Pitch deck materials']
  },
];

const features = [
  {
    icon: <Rocket className="w-5 h-5 text-primary" />,
    title: "Rapid Prototyping",
    description: "Working prototype in 24 hours with real user feedback integration"
  },
  {
    icon: <Users className="w-5 h-5 text-primary" />,
    title: "User Validation",
    description: "Real user testing with 5-10 target customers for validated learning"
  },
  {
    icon: <Code className="w-5 h-5 text-primary" />,
    title: "Production Ready",
    description: "Scalable, secure code with payment integration and analytics"
  },
  {
    icon: <TrendingUp className="w-5 h-5 text-primary" />,
    title: "Growth Tracking",
    description: "Built-in analytics and growth metrics for data-driven decisions"
  },
  {
    icon: <FileText className="w-5 h-5 text-primary" />,
    title: "Investor Materials",
    description: "Professional pitch materials and demo-ready application"
  },
  {
    icon: <Award className="w-5 h-5 text-primary" />,
    title: "Full IP Ownership",
    description: "Complete source code ownership with no vendor lock-in"
  }
];

const caseStudies = [
  {
    startup: "TechStart Analytics",
    founder: "Sarah Chen, CEO",
    challenge: "SaaS analytics dashboard",
    result: "$15K MRR in 3 months",
    description: "Validated product-market fit with our MVP process, launched with paying customers from day one.",
    industry: "SaaS",
    funding: "Pre-seed"
  },
  {
    startup: "EcoMarket",
    founder: "Michael Rodriguez, Founder",
    challenge: "Sustainable marketplace",
    result: "1000+ active users",
    description: "Built marketplace MVP that attracted early adopters and secured seed funding within 6 months.",
    industry: "E-commerce",
    funding: "Seed"
  },
  {
    startup: "HealthTrack",
    founder: "Dr. Jennifer Walsh, Co-founder",
    challenge: "Patient monitoring app",
    result: "Hospital partnerships",
    description: "MVP validated with healthcare professionals, leading to pilot programs with 3 major hospitals.",
    industry: "HealthTech",
    funding: "Series A"
  }
];

const pricingFeatures = [
  "7-day delivery guarantee",
  "User testing with real customers",
  "Production-ready code",
  "Payment integration",
  "Analytics dashboard",
  "Investor pitch materials",
  "30-day support included",
  "Full source code ownership"
];

const faqs = [
  {
    question: "What happens if my idea changes during the 7 days?",
    answer: "We build in flexibility for scope adjustments. Minor changes are included, and we'll discuss any major pivots to ensure we deliver maximum value within the timeline."
  },
  {
    question: "Do I need technical knowledge to work with you?",
    answer: "Not at all! We handle all technical aspects and explain everything in simple terms. You focus on the business vision, we handle the technical execution."
  },
  {
    question: "What if I need changes after the 7 days?",
    answer: "The 30-day support period covers bug fixes and minor adjustments. For new features or major changes, we offer flexible ongoing development packages."
  },
  {
    question: "How do you ensure my MVP will attract users?",
    answer: "We validate with real users during days 3-4, iterate based on feedback, and implement proven growth mechanics like analytics, onboarding flows, and conversion optimization."
  },
  {
    question: "Can you help with marketing and user acquisition?",
    answer: "While our focus is on building your MVP, we provide growth tracking setup and can connect you with our network of marketing specialists for ongoing growth support."
  },
  {
    question: "What technologies do you use?",
    answer: "We use modern, scalable technologies like React/Next.js, TypeScript, and cloud platforms. All code is production-ready and follows industry best practices."
  }
];

export default function MVPLaunchpadPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <HeaderNav />
      <main className="flex-grow pt-20">
        {/* Breadcrumb Navigation */}
        <div className="container mx-auto px-container">
          <Breadcrumb className="mb-4" />
        </div>
        
        {/* Hero Section */}
        <section className="py-section-compact">
          <div className="container mx-auto px-container">
            <div className="text-center mb-16 max-w-5xl mx-auto">
              <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 px-4 py-2">
                <Rocket className="w-4 h-4 mr-2" />
                Founder Favorite
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold font-headline mb-6 leading-tight">
                MVP <span className="text-primary">Launchpad</span>
              </h1>
              <p className="text-xl text-foreground/80 mb-8 leading-relaxed">
                From napkin sketch to validated MVP in just 7 days. Test your vision, 
                attract investors, and launch with confidence—faster than ever.
              </p>
              
              {/* Key Stats */}
              <div className="grid md:grid-cols-4 gap-6 mb-12">
                <div className="text-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary/10 border border-primary/20 rounded-element mx-auto mb-3">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-1 text-sm">7 Days</h3>
                  <p className="text-xs text-foreground/70">Delivery guarantee</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary/10 border border-primary/20 rounded-element mx-auto mb-3">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-1 text-sm">Real User Testing</h3>
                  <p className="text-xs text-foreground/70">5-10 target customers</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary/10 border border-primary/20 rounded-element mx-auto mb-3">
                    <DollarSign className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-1 text-sm">$2,500</h3>
                  <p className="text-xs text-foreground/70">Fixed price</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary/10 border border-primary/20 rounded-element mx-auto mb-3">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-1 text-sm">Full Ownership</h3>
                  <p className="text-xs text-foreground/70">Code & IP yours</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7-Day Process */}
        <section className="py-16 bg-white/5">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">
                Your 7-Day MVP Journey
              </h2>
              <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
                A proven day-by-day process that turns your idea into a market-ready MVP with real user validation.
              </p>
            </div>

            <div className="max-w-6xl mx-auto space-y-8">
              {timeline.map((step, index) => (
                <div key={step.day} className="relative">
                  {/* Connector Line */}
                  {index < timeline.length - 1 && (
                    <div className="absolute left-6 top-24 w-0.5 h-24 bg-primary/30 z-0"></div>
                  )}
                  
                  <Card className="bg-white/5 border-white/10 hover:bg-white/10 hover:border-primary/20 transition-all duration-300 relative z-10">
                    <CardContent className="p-8">
                      <div className="flex items-start gap-8">
                        {/* Step Circle */}
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-primary/20 border border-primary/30 rounded-full flex items-center justify-center mb-4">
                            {step.icon}
                          </div>
                          <div className="text-center">
                            <div className="text-primary font-bold text-sm">{step.number}</div>
                          </div>
                        </div>
                        
                        {/* Content */}
                        <div className="flex-grow">
                          <div className="flex items-center justify-between mb-4">
                            <div>
                              <h3 className="text-xl font-bold text-primary">{step.day}: {step.title}</h3>
                              <Badge variant="outline" className="border-primary/30 text-primary mt-2">
                                {step.duration}
                              </Badge>
                            </div>
                          </div>
                          
                          <p className="text-foreground/80 mb-6 leading-relaxed">{step.desc}</p>
                          
                          {/* Deliverables */}
                          <div>
                            <h4 className="text-sm font-semibold text-foreground mb-3">Deliverables:</h4>
                            <div className="grid md:grid-cols-2 gap-3">
                              {step.deliverables.map((deliverable, idx) => (
                                <div key={idx} className="flex items-center gap-2 text-sm text-foreground/70">
                                  <CheckCircle className="w-3 h-3 text-primary flex-shrink-0" />
                                  {deliverable}
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

        {/* Features */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">
                What Makes Our MVP Special
              </h2>
              <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
                Not just a basic prototype—a production-ready MVP with real user validation and growth mechanics.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {features.map((feature, index) => (
                <Card key={feature.title} className="bg-white/5 border-white/10 hover:bg-white/10 hover:border-primary/20 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-primary/10 border border-primary/20 rounded-xl flex items-center justify-center">
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-primary mb-2">{feature.title}</h3>
                        <p className="text-sm text-foreground/70 leading-relaxed">{feature.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-16 bg-white/5">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">
                Founder Success Stories
              </h2>
              <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
                Real startups that used our MVP Launchpad to validate ideas and secure funding.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {caseStudies.map((study, index) => (
                <Card key={index} className="bg-white/5 border-white/10 hover:bg-white/10 hover:border-primary/20 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Badge variant="outline" className="border-primary/30 text-primary text-xs">
                        {study.industry}
                      </Badge>
                      <Badge variant="outline" className="border-primary/30 text-primary text-xs">
                        {study.funding}
                      </Badge>
                    </div>
                    
                    <h3 className="font-bold text-primary mb-1">{study.startup}</h3>
                    <p className="text-sm text-foreground/60 mb-3">{study.founder}</p>
                    <p className="text-foreground/80 text-sm mb-4 leading-relaxed">"{study.description}"</p>
                    
                    <div className="border-t border-primary/20 pt-4">
                      <div className="text-center">
                        <div className="text-lg font-bold text-primary">{study.result}</div>
                        <div className="text-xs text-foreground/60">Result After Launch</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">
                Simple, Transparent Pricing
              </h2>
              <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
                One fixed price, no hidden fees, everything included.
              </p>
            </div>

            <Card className="bg-primary/5 border-primary/20 max-w-4xl mx-auto">
              <CardContent className="p-12 text-center">
                <div className="flex items-center justify-center gap-2 mb-6">
                  <span className="text-2xl text-foreground/50 line-through">$3,500</span>
                  <span className="text-5xl font-bold text-primary">$2,500</span>
                </div>
                
                <div className="text-sm font-semibold text-primary bg-primary/10 px-4 py-2 rounded-full inline-block mb-8">
                  Save $1,000 - Limited Time
                </div>

                <p className="text-foreground/70 text-lg mb-8 max-w-2xl mx-auto">
                  Complete MVP development in 7 days with user validation, payment integration, 
                  and everything you need to launch and grow.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <h4 className="font-semibold text-primary mb-3">What's Included:</h4>
                    <div className="space-y-2">
                      {pricingFeatures.slice(0, 4).map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-foreground/70">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-3">Plus:</h4>
                    <div className="space-y-2">
                      {pricingFeatures.slice(4).map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-foreground/70">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" asChild>
                    <a href="/contact?package=sprint" className="flex items-center gap-2">
                      Explore MVP Program
                      <ArrowRight className="w-5 h-5" />
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <a href="/contact" className="flex items-center gap-2">
                      <Calendar className="w-5 h-5" />
                      Book Discovery Call
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-white/5">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
                Common questions from founders about our MVP Launchpad process.
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-6">
              {faqs.map((faq, index) => (
                <Card key={index} className="bg-white/5 border-white/10">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-primary mb-2">{faq.question}</h3>
                    <p className="text-foreground/70 text-sm leading-relaxed">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <Card className="bg-primary/5 border-primary/20 max-w-4xl mx-auto">
              <CardContent className="p-12 text-center">
                <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4 text-primary">
                  Ready to Launch Your MVP?
                </h2>
                <p className="text-foreground/70 text-lg mb-8 max-w-2xl mx-auto">
                  Join 50+ successful founders who've validated their ideas and secured funding 
                  with our proven MVP Launchpad methodology.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" asChild>
                    <a href="/contact?package=sprint" className="flex items-center gap-2">
                      Explore MVP Program
                      <ArrowRight className="w-5 h-5" />
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <a href="/pricing" className="flex items-center gap-2">
                      <FileText className="w-5 h-5" />
                      Compare All Packages
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <FooterSection />
    </div>
  );
} 