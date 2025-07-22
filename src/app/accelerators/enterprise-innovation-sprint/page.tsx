import HeaderNav from '@/components/HeaderNav';
import FooterSection from '@/components/FooterSection';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Shield, 
  Rocket, 
  Users, 
  CheckCircle, 
  Zap, 
  Briefcase, 
  Globe, 
  ArrowRight,
  Clock,
  DollarSign,
  Star,
  Building,
  Target,
  TrendingUp,
  FileText,
  Calendar,
  Award
} from 'lucide-react';

const milestones = [
  { 
    number: "01",
    title: 'Stakeholder Alignment', 
    duration: "1-2 days",
    icon: <Users className="w-6 h-6 text-primary" />, 
    desc: 'Executive workshops to align all stakeholders, define strategic goals, and establish clear project vision.',
    deliverables: ['Stakeholder interviews', 'Vision alignment document', 'Success metrics framework']
  },
  { 
    number: "02",
    title: 'Security & Compliance', 
    duration: "2-3 days",
    icon: <Shield className="w-6 h-6 text-primary" />, 
    desc: 'Comprehensive enterprise-grade security review, compliance audit, and risk assessment.',
    deliverables: ['Security architecture review', 'Compliance checklist', 'Risk mitigation plan']
  },
  { 
    number: "03",
    title: 'Rapid Prototyping', 
    duration: "3-4 days",
    icon: <Rocket className="w-6 h-6 text-primary" />, 
    desc: 'Build working prototype with core functionality for internal review and stakeholder feedback.',
    deliverables: ['Interactive prototype', 'Technical architecture', 'User feedback report']
  },
  { 
    number: "04",
    title: 'Solution Development', 
    duration: "5-8 days",
    icon: <Briefcase className="w-6 h-6 text-primary" />, 
    desc: 'Develop the complete solution with enterprise integrations, security, and scalability built-in.',
    deliverables: ['Production application', 'Integration setup', 'Performance optimization']
  },
  { 
    number: "05",
    title: 'Change Management', 
    duration: "2-3 days",
    icon: <Target className="w-6 h-6 text-primary" />, 
    desc: 'Train teams, manage organizational change, and ensure smooth adoption across the enterprise.',
    deliverables: ['Training materials', 'Change management plan', 'User adoption strategy']
  },
  { 
    number: "06",
    title: 'Launch & Support', 
    duration: "Ongoing",
    icon: <Globe className="w-6 h-6 text-primary" />, 
    desc: 'Deploy globally, monitor adoption metrics, and provide ongoing support for continuous success.',
    deliverables: ['Global deployment', 'Monitoring dashboard', '30-day support package']
  },
];

const features = [
  {
    icon: <Building className="w-5 h-5 text-primary" />,
    title: "Enterprise Security",
    description: "SOC 2, GDPR, and industry-specific compliance built-in from day one"
  },
  {
    icon: <Users className="w-5 h-5 text-primary" />,
    title: "Stakeholder Management",
    description: "Executive reporting and transparent communication throughout the project"
  },
  {
    icon: <Globe className="w-5 h-5 text-primary" />,
    title: "Global Scalability",
    description: "Multi-region deployment with performance optimization worldwide"
  },
  {
    icon: <Shield className="w-5 h-5 text-primary" />,
    title: "Risk Mitigation",
    description: "Comprehensive risk assessment and mitigation strategies"
  },
  {
    icon: <Target className="w-5 h-5 text-primary" />,
    title: "Change Management",
    description: "Organizational change support to ensure smooth adoption"
  },
  {
    icon: <Award className="w-5 h-5 text-primary" />,
    title: "24/7 Support",
    description: "Dedicated enterprise support team with guaranteed SLAs"
  }
];

const caseStudies = [
  {
    company: "Fortune 500 Retailer",
    challenge: "Legacy system modernization",
    result: "40% faster operations",
    description: "Transformed their inventory management system, reducing processing time by 40% across 200+ locations.",
    industry: "Retail",
    timeline: "6 weeks"
  },
  {
    company: "Global Financial Services",
    challenge: "Regulatory compliance platform",
    result: "100% compliance rate",
    description: "Built automated compliance reporting system, achieving 100% regulatory compliance across 15 countries.",
    industry: "Finance",
    timeline: "8 weeks"
  },
  {
    company: "Healthcare Network",
    challenge: "Patient data integration",
    result: "60% efficiency gain",
    description: "Unified patient data across 50+ facilities, improving care coordination and reducing administrative overhead.",
    industry: "Healthcare",
    timeline: "10 weeks"
  }
];

const faqs = [
  {
    question: "How does this differ from traditional enterprise consulting?",
    answer: "Unlike traditional consulting that takes 6-12 months, we deliver working solutions in 4-10 weeks with full enterprise security and compliance built-in."
  },
  {
    question: "What security standards do you support?",
    answer: "We support SOC 2, GDPR, HIPAA, PCI DSS, and industry-specific compliance requirements. All solutions include enterprise-grade security by default."
  },
  {
    question: "How do you manage stakeholder alignment in large organizations?",
    answer: "We start with executive workshops to align all stakeholders, then provide weekly progress reports and maintain transparent communication throughout the project."
  },
  {
    question: "What kind of ongoing support is included?",
    answer: "Enterprise Innovation Sprint includes 30 days of post-launch support, 24/7 monitoring, and optional ongoing maintenance packages with guaranteed SLAs."
  },
  {
    question: "Can you integrate with our existing enterprise systems?",
    answer: "Yes, we specialize in enterprise integrations including ERP, CRM, legacy systems, and modern cloud platforms. Integration planning is part of our process."
  }
];

export default function EnterpriseInnovationSprintPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <HeaderNav />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16 max-w-5xl mx-auto">
              <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 px-4 py-2">
                <Building className="w-4 h-4 mr-2" />
                Enterprise Solution
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold font-headline mb-6 leading-tight">
                Enterprise Innovation <span className="text-primary">Sprint</span>
              </h1>
              <p className="text-xl text-foreground/80 mb-8 leading-relaxed">
                Move at startup speed while maintaining enterprise security and compliance. 
                Transform your organization with solutions that scale globally in weeks, not months.
              </p>
              
              {/* Key Stats */}
              <div className="grid md:grid-cols-4 gap-6 mb-12">
                <div className="text-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary/10 border border-primary/20 rounded-xl mx-auto mb-3">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-1 text-sm">4-10 Weeks</h3>
                  <p className="text-xs text-foreground/70">Delivery timeline</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary/10 border border-primary/20 rounded-xl mx-auto mb-3">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-1 text-sm">Enterprise Security</h3>
                  <p className="text-xs text-foreground/70">SOC 2, GDPR compliant</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary/10 border border-primary/20 rounded-xl mx-auto mb-3">
                    <Globe className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-1 text-sm">Global Scale</h3>
                  <p className="text-xs text-foreground/70">Multi-region deployment</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary/10 border border-primary/20 rounded-xl mx-auto mb-3">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-1 text-sm">24/7 Support</h3>
                  <p className="text-xs text-foreground/70">Enterprise SLAs</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Overview */}
        <section className="py-16 bg-white/5">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">
                Our Enterprise Process
              </h2>
              <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
                A proven methodology that delivers enterprise-grade solutions with startup agility.
              </p>
            </div>

            <div className="max-w-6xl mx-auto space-y-8">
              {milestones.map((milestone, index) => (
                <div key={milestone.title} className="relative">
                  {/* Connector Line */}
                  {index < milestones.length - 1 && (
                    <div className="absolute left-6 top-24 w-0.5 h-24 bg-primary/30 z-0"></div>
                  )}
                  
                  <Card className="bg-white/5 border-white/10 hover:bg-white/10 hover:border-primary/20 transition-all duration-300 relative z-10">
                    <CardContent className="p-8">
                      <div className="flex items-start gap-8">
                        {/* Step Number Circle */}
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-primary/20 border border-primary/30 rounded-full flex items-center justify-center mb-4">
                            {milestone.icon}
                          </div>
                          <div className="text-center">
                            <div className="text-primary font-bold text-sm">{milestone.number}</div>
                          </div>
                        </div>
                        
                        {/* Content */}
                        <div className="flex-grow">
                          <div className="flex items-center justify-between mb-4">
                            <h3 className="text-xl font-bold text-primary">{milestone.title}</h3>
                            <Badge variant="outline" className="border-primary/30 text-primary">
                              {milestone.duration}
                            </Badge>
                          </div>
                          
                          <p className="text-foreground/80 mb-6 leading-relaxed">{milestone.desc}</p>
                          
                          {/* Deliverables */}
                          <div>
                            <h4 className="text-sm font-semibold text-foreground mb-3">Key Deliverables:</h4>
                            <div className="grid md:grid-cols-3 gap-4">
                              {milestone.deliverables.map((deliverable, idx) => (
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
                Enterprise-Grade Features
              </h2>
              <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
                Everything your organization needs for secure, scalable, and compliant innovation.
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

        {/* Case Studies */}
        <section className="py-16 bg-white/5">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">
                Enterprise Success Stories
              </h2>
              <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
                Real results from Fortune 500 companies and global enterprises.
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
                        {study.timeline}
                      </Badge>
                    </div>
                    
                    <h3 className="font-bold text-primary mb-2">{study.company}</h3>
                    <p className="text-sm text-foreground/60 mb-3">{study.challenge}</p>
                    <p className="text-foreground/80 text-sm mb-4 leading-relaxed">{study.description}</p>
                    
                    <div className="border-t border-primary/20 pt-4">
                      <div className="text-center">
                        <div className="text-lg font-bold text-primary">{study.result}</div>
                        <div className="text-xs text-foreground/60">Key Result</div>
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
                Enterprise Investment
              </h2>
              <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
                Custom pricing based on scope, complexity, and organizational requirements.
              </p>
            </div>

            <Card className="bg-primary/5 border-primary/20 max-w-4xl mx-auto">
              <CardContent className="p-12 text-center">
                <div className="flex items-center justify-center gap-2 mb-6">
                  <DollarSign className="w-8 h-8 text-primary" />
                  <span className="text-4xl font-bold text-primary">Custom Pricing</span>
                </div>
                
                <p className="text-foreground/70 text-lg mb-8 max-w-2xl mx-auto">
                  Every enterprise has unique requirements. We provide detailed proposals with 
                  transparent pricing based on your specific needs and scope.
                </p>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="text-center">
                    <h4 className="font-semibold text-primary mb-1">Typical Range</h4>
                    <p className="text-sm text-foreground/70">$25K - $100K+</p>
                  </div>
                  <div className="text-center">
                    <h4 className="font-semibold text-primary mb-1">Payment Terms</h4>
                    <p className="text-sm text-foreground/70">Flexible milestone-based</p>
                  </div>
                  <div className="text-center">
                    <h4 className="font-semibold text-primary mb-1">Support Included</h4>
                    <p className="text-sm text-foreground/70">30 days post-launch</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" asChild>
                    <a href="/contact?package=enterprise" className="flex items-center gap-2">
                      Get Custom Proposal
                      <ArrowRight className="w-5 h-5" />
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <a href="/contact" className="flex items-center gap-2">
                      <Calendar className="w-5 h-5" />
                      Schedule Discovery Call
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
                Common questions about our Enterprise Innovation Sprint process.
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
                  Ready to Accelerate Your Enterprise Innovation?
                </h2>
                <p className="text-foreground/70 text-lg mb-8 max-w-2xl mx-auto">
                  Join Fortune 500 companies who've transformed their operations with our 
                  Enterprise Innovation Sprint methodology.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" asChild>
                    <a href="/contact?package=enterprise" className="flex items-center gap-2">
                      Explore Enterprise Sprint
                      <ArrowRight className="w-5 h-5" />
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <a href="/pricing" className="flex items-center gap-2">
                      <FileText className="w-5 h-5" />
                      View All Packages
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