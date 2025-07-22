import HeaderNav from '@/components/HeaderNav';
import FooterSection from '@/components/FooterSection';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  TrendingUp, 
  Zap, 
  CheckCircle, 
  Code, 
  Users, 
  BarChart2, 
  Settings2, 
  Calendar,
  ArrowRight,
  Clock,
  DollarSign,
  Star,
  Target,
  Database,
  FileText,
  Award,
  Gauge,
  Building,
  Shield
} from 'lucide-react';

const phases = [
  {
    phase: 'Phase 1: Growth Audit & Strategy',
    number: "01",
    duration: '1 week',
    icon: <BarChart2 className="w-6 h-6 text-primary" />, 
    desc: 'Comprehensive analysis of your product, data infrastructure, bottlenecks, and growth opportunities. Design a custom roadmap with prioritized quick wins.',
    deliverables: ['Complete growth audit report', 'Performance bottleneck analysis', 'Custom growth roadmap', 'ROI projections for improvements']
  },
  {
    phase: 'Phase 2: Infrastructure & Optimization',
    number: "02", 
    duration: '2-3 weeks',
    icon: <Zap className="w-6 h-6 text-primary" />, 
    desc: 'Implement critical automations, optimize database performance, enhance security, and streamline operations for exponential growth.',
    deliverables: ['Performance optimizations', 'Database scaling solutions', 'Automation implementations', 'Security enhancements']
  },
  {
    phase: 'Phase 3: Growth Systems & Analytics',
    number: "03",
    duration: '1-2 weeks',
    icon: <TrendingUp className="w-6 h-6 text-primary" />, 
    desc: 'Deploy advanced analytics, implement growth tracking systems, and create dashboards for data-driven decision making.',
    deliverables: ['Advanced analytics setup', 'Growth tracking dashboard', 'A/B testing framework', 'Performance monitoring']
  },
  {
    phase: 'Phase 4: Team Training & Handover',
    number: "04",
    duration: '1 week',
    icon: <Settings2 className="w-6 h-6 text-primary" />, 
    desc: 'Train your team on new systems, provide comprehensive documentation, and establish ongoing support protocols.',
    deliverables: ['Team training sessions', 'Technical documentation', 'Playbook for scaling', 'Ongoing support setup']
  },
];

const features = [
  {
    icon: <Gauge className="w-5 h-5 text-primary" />,
    title: "Performance Optimization",
    description: "10x faster load times with advanced caching and database optimization"
  },
  {
    icon: <TrendingUp className="w-5 h-5 text-primary" />,
    title: "Growth Analytics",
    description: "Advanced tracking and analytics for data-driven growth decisions"
  },
  {
    icon: <Zap className="w-5 h-5 text-primary" />,
    title: "Automation Systems",
    description: "Automated workflows that eliminate manual processes and reduce errors"
  },
  {
    icon: <Database className="w-5 h-5 text-primary" />,
    title: "Scalable Infrastructure",
    description: "Cloud architecture that scales automatically with your growth"
  },
  {
    icon: <Shield className="w-5 h-5 text-primary" />,
    title: "Enhanced Security",
    description: "Enterprise-grade security without compromising performance"
  },
  {
    icon: <Award className="w-5 h-5 text-primary" />,
    title: "Zero Downtime",
    description: "Seamless improvements with no disruption to your users"
  }
];

const caseStudies = [
  {
    company: "SaaS Platform",
    stage: "Series A",
    challenge: "Database performance bottlenecks",
    result: "300% user capacity increase",
    description: "Optimized their database architecture and implemented caching, enabling them to handle 3x more users without infrastructure costs increase.",
    metrics: ["90% faster queries", "50% cost reduction", "Zero downtime"],
    timeline: "4 weeks"
  },
  {
    company: "E-commerce Marketplace",
    stage: "Growth Stage",
    challenge: "Manual operations scaling issues",
    result: "80% operational efficiency gain",
    description: "Automated key business processes and implemented growth tracking, reducing manual work by 80% while improving accuracy.",
    metrics: ["80% less manual work", "99.9% uptime", "Real-time analytics"],
    timeline: "6 weeks"
  },
  {
    company: "FinTech Startup",
    stage: "Series B",
    challenge: "Compliance and security scaling",
    result: "Enterprise-ready platform",
    description: "Enhanced security architecture and compliance systems, enabling them to serve enterprise clients and close major deals.",
    metrics: ["SOC 2 compliance", "Enterprise clients", "10x revenue"],
    timeline: "8 weeks"
  }
];

const growthMetrics = [
  {
    metric: "10x",
    label: "Performance Improvement",
    description: "Average speed increase"
  },
  {
    metric: "80%",
    label: "Cost Reduction",
    description: "Infrastructure savings"
  },
  {
    metric: "300%",
    label: "Capacity Increase",
    description: "User handling capability"
  },
  {
    metric: "99.9%",
    label: "Uptime Guarantee",
    description: "System reliability"
  }
];

const faqs = [
  {
    question: "How do you ensure zero downtime during optimization?",
    answer: "We use blue-green deployment strategies, gradual rollouts, and comprehensive testing environments to ensure your users never experience interruptions during improvements."
  },
  {
    question: "What if my current tech stack is outdated?",
    answer: "We specialize in modernizing legacy systems. We'll create a migration plan that gradually updates your technology while maintaining full functionality and data integrity."
  },
  {
    question: "How do you measure the success of optimizations?",
    answer: "We establish baseline metrics before starting and provide detailed before/after comparisons. You'll see improvements in speed, capacity, user experience, and operational efficiency."
  },
  {
    question: "Can you work with our existing development team?",
    answer: "Absolutely! We work alongside your team, providing knowledge transfer and training so they can maintain and extend the improvements we implement."
  },
  {
    question: "What ongoing support is included?",
    answer: "Scale-Up Engine includes 30 days of post-implementation support, monitoring setup, and optional ongoing maintenance packages for continued optimization."
  },
  {
    question: "How do you handle data privacy and security?",
    answer: "We follow strict security protocols, sign NDAs, and can work within your existing security frameworks. All improvements enhance rather than compromise your security posture."
  }
];

export default function ScaleUpEnginePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <HeaderNav />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16 max-w-5xl mx-auto">
              <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 px-4 py-2">
                <TrendingUp className="w-4 h-4 mr-2" />
                Scale-Ready Solution
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold font-headline mb-6 leading-tight">
                Scale-Up <span className="text-primary">Engine</span>
              </h1>
              <p className="text-xl text-foreground/80 mb-8 leading-relaxed">
                Unlock your next stage of exponential growth. Optimize performance, automate operations, 
                and scale seamlessly—without sacrificing quality or stability.
              </p>
              
              {/* Key Stats */}
              <div className="grid md:grid-cols-4 gap-6 mb-12">
                {growthMetrics.map((metric, index) => (
                  <div key={metric.label} className="text-center">
                    <div className="flex items-center justify-center w-12 h-12 bg-primary/10 border border-primary/20 rounded-xl mx-auto mb-3">
                      <TrendingUp className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-1 text-sm">{metric.metric}</h3>
                    <p className="text-xs text-foreground/70 font-medium">{metric.label}</p>
                    <p className="text-xs text-foreground/60">{metric.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Scaling Process */}
        <section className="py-16 bg-white/5">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">
                Our Scale-Up Process
              </h2>
              <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
                A systematic approach to identify bottlenecks, implement optimizations, and prepare your platform for explosive growth.
              </p>
            </div>

            <div className="max-w-6xl mx-auto space-y-8">
              {phases.map((phase, index) => (
                <div key={phase.phase} className="relative">
                  {/* Connector Line */}
                  {index < phases.length - 1 && (
                    <div className="absolute left-6 top-24 w-0.5 h-24 bg-primary/30 z-0"></div>
                  )}
                  
                  <Card className="bg-white/5 border-white/10 hover:bg-white/10 hover:border-primary/20 transition-all duration-300 relative z-10">
                    <CardContent className="p-8">
                      <div className="flex items-start gap-8">
                        {/* Phase Circle */}
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-primary/20 border border-primary/30 rounded-full flex items-center justify-center mb-4">
                            {phase.icon}
                          </div>
                          <div className="text-center">
                            <div className="text-primary font-bold text-sm">{phase.number}</div>
                          </div>
                        </div>
                        
                        {/* Content */}
                        <div className="flex-grow">
                          <div className="flex items-center justify-between mb-4">
                            <h3 className="text-xl font-bold text-primary">{phase.phase}</h3>
                            <Badge variant="outline" className="border-primary/30 text-primary">
                              {phase.duration}
                            </Badge>
                          </div>
                          
                          <p className="text-foreground/80 mb-6 leading-relaxed">{phase.desc}</p>
                          
                          {/* Deliverables */}
                          <div>
                            <h4 className="text-sm font-semibold text-foreground mb-3">Key Deliverables:</h4>
                            <div className="grid md:grid-cols-2 gap-3">
                              {phase.deliverables.map((deliverable, idx) => (
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
                Scale-Ready Optimizations
              </h2>
              <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
                Comprehensive improvements that prepare your platform for 10x growth without breaking.
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
                Scale-Up Success Stories
              </h2>
              <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
                Companies that transformed their platforms and unlocked exponential growth.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {caseStudies.map((study, index) => (
                <Card key={index} className="bg-white/5 border-white/10 hover:bg-white/10 hover:border-primary/20 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Badge variant="outline" className="border-primary/30 text-primary text-xs">
                        {study.stage}
                      </Badge>
                      <Badge variant="outline" className="border-primary/30 text-primary text-xs">
                        {study.timeline}
                      </Badge>
                    </div>
                    
                    <h3 className="font-bold text-primary mb-2">{study.company}</h3>
                    <p className="text-sm text-foreground/60 mb-3">{study.challenge}</p>
                    <p className="text-foreground/80 text-sm mb-4 leading-relaxed">{study.description}</p>
                    
                    {/* Metrics */}
                    <div className="space-y-2 mb-4">
                      {study.metrics.map((metric, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-foreground/70">
                          <CheckCircle className="w-3 h-3 text-primary flex-shrink-0" />
                          {metric}
                        </div>
                      ))}
                    </div>
                    
                    <div className="border-t border-primary/20 pt-4">
                      <div className="text-center">
                        <div className="text-lg font-bold text-primary">{study.result}</div>
                        <div className="text-xs text-foreground/60">Primary Outcome</div>
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
                Scale-Up Investment
              </h2>
              <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
                Custom pricing based on your current platform complexity and growth targets.
              </p>
            </div>

            <Card className="bg-primary/5 border-primary/20 max-w-4xl mx-auto">
              <CardContent className="p-12 text-center">
                <div className="flex items-center justify-center gap-2 mb-6">
                  <DollarSign className="w-8 h-8 text-primary" />
                  <span className="text-4xl font-bold text-primary">$5,000 - $15,000</span>
                </div>
                
                <p className="text-foreground/70 text-lg mb-8 max-w-2xl mx-auto">
                  Investment varies based on platform complexity, optimization scope, and growth targets. 
                  Most projects see 10x ROI within 3 months.
                </p>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="text-center">
                    <h4 className="font-semibold text-primary mb-1">Typical Timeline</h4>
                    <p className="text-sm text-foreground/70">4-8 weeks</p>
                  </div>
                  <div className="text-center">
                    <h4 className="font-semibold text-primary mb-1">Payment Terms</h4>
                    <p className="text-sm text-foreground/70">50% start, 50% completion</p>
                  </div>
                  <div className="text-center">
                    <h4 className="font-semibold text-primary mb-1">ROI Guarantee</h4>
                    <p className="text-sm text-foreground/70">10x improvement or refund</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" asChild>
                    <a href="/contact?package=marathon" className="flex items-center gap-2">
                      Request Investment Proposal
                      <ArrowRight className="w-5 h-5" />
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <a href="/contact" className="flex items-center gap-2">
                      <Calendar className="w-5 h-5" />
                      Schedule Growth Audit
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
                Common questions about our Scale-Up Engine optimization process.
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
                  Ready to Scale Your Platform?
                </h2>
                <p className="text-foreground/70 text-lg mb-8 max-w-2xl mx-auto">
                  Join growing companies who've unlocked 10x performance improvements and 
                  exponential growth with our Scale-Up Engine methodology.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" asChild>
                    <a href="/contact?package=marathon" className="flex items-center gap-2">
                      Explore Scale Program
                      <ArrowRight className="w-5 h-5" />
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <a href="/pricing" className="flex items-center gap-2">
                      <FileText className="w-5 h-5" />
                      Compare All Solutions
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