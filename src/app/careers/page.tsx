import { careersMetadata } from '@/lib/metadata';
import HeaderNav from '@/components/HeaderNav';
import FooterSection from '@/components/FooterSection';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Briefcase, 
  Globe, 
  Users, 
  Code, 
  Sparkles, 
  MapPin, 
  Clock, 
  DollarSign, 
  ArrowRight, 
  Heart, 
  Coffee, 
  Laptop, 
  GraduationCap,
  Trophy,
  Star,
  Calendar,
  Shield,
  Zap
} from 'lucide-react';

export const metadata = careersMetadata;

const roles = [
  {
    id: 'senior-fullstack',
    title: 'Senior Full-Stack Engineer',
    department: 'Engineering',
    type: 'Full-time',
    location: 'Remote',
    salary: '$80K - $120K',
    experience: '4+ years',
    description: 'Build and scale modern web applications using React, Next.js, TypeScript, and cloud-native technologies. Lead technical decisions and mentor junior developers.',
    requirements: [
      '4+ years of React/Next.js experience',
      'Strong TypeScript and Node.js skills',
      'Experience with cloud platforms (AWS/Vercel)',
      'Database design and optimization',
      'API development and integration'
    ],
    benefits: ['Equity package', 'Remote work', 'Learning budget'],
    featured: true
  },
  {
    id: 'product-designer',
    title: 'Product Designer',
    department: 'Design',
    type: 'Full-time',
    location: 'Remote',
    salary: '$70K - $100K',
    experience: '3+ years',
    description: 'Design beautiful, user-centric interfaces and shape the product experience. Work closely with engineering and product teams to deliver exceptional user experiences.',
    requirements: [
      '3+ years in product design',
      'Proficiency in Figma and design systems',
      'Strong UX research and testing skills',
      'Portfolio showcasing mobile and web work',
      'Experience with design-to-development handoff'
    ],
    benefits: ['Design conference budget', 'Remote work', 'Creative freedom'],
    featured: false
  },
  {
    id: 'project-manager',
    title: 'Project Manager',
    department: 'Operations',
    type: 'Full-time',
    location: 'Remote',
    salary: '$65K - $90K',
    experience: '3+ years',
    description: 'Drive projects from idea to launch, collaborating with clients and cross-functional teams. Ensure on-time delivery and exceptional client satisfaction.',
    requirements: [
      '3+ years in project management',
      'Experience with Agile/Scrum methodologies',
      'Strong client communication skills',
      'PMP or similar certification preferred',
      'Experience with project management tools'
    ],
    benefits: ['Client-facing role', 'Remote work', 'Growth opportunities'],
    featured: false
  },
  {
    id: 'growth-marketer',
    title: 'Growth Marketer',
    department: 'Marketing',
    type: 'Full-time',
    location: 'Remote',
    salary: '$60K - $85K',
    experience: '2+ years',
    description: 'Lead go-to-market strategy, growth experiments, and digital campaigns. Drive user acquisition and optimize conversion funnels.',
    requirements: [
      '2+ years in growth marketing',
      'Experience with digital advertising platforms',
      'Strong analytical and data-driven mindset',
      'Content creation and copywriting skills',
      'A/B testing and conversion optimization'
    ],
    benefits: ['Marketing budget ownership', 'Remote work', 'Performance bonuses'],
    featured: false
  },
];

const values = [
  {
    icon: <Globe className="w-6 h-6 text-primary" />, 
    title: 'Remote-First Culture',
    desc: 'Work from anywhere in the world. We value results, not hours in an office chair.'
  },
  {
    icon: <Users className="w-6 h-6 text-primary" />, 
    title: 'Collaborative Team',
    desc: 'We win as a team. Open communication, feedback, and transparency are core to our culture.'
  },
  {
    icon: <Code className="w-6 h-6 text-primary" />, 
    title: 'Quality Craftsmanship',
    desc: 'We care deeply about code quality, design excellence, and the details that delight users.'
  },
  {
    icon: <Sparkles className="w-6 h-6 text-primary" />, 
    title: 'Continuous Learning',
    desc: 'We invest in growth—yours and ours. Curiosity, experimentation, and improvement are celebrated.'
  },
];

const benefits = [
  {
    icon: <DollarSign className="w-5 h-5 text-primary" />,
    title: "Competitive Salary",
    description: "Market-rate compensation with annual reviews and performance bonuses"
  },
  {
    icon: <Globe className="w-5 h-5 text-primary" />,
    title: "100% Remote",
    description: "Work from anywhere with flexible hours and async-first communication"
  },
  {
    icon: <Heart className="w-5 h-5 text-primary" />,
    title: "Health & Wellness",
    description: "Comprehensive health insurance and mental health support"
  },
  {
    icon: <GraduationCap className="w-5 h-5 text-primary" />,
    title: "Learning Budget",
    description: "$2,000 annual budget for courses, conferences, and professional development"
  },
  {
    icon: <Laptop className="w-5 h-5 text-primary" />,
    title: "Equipment",
    description: "Latest MacBook Pro, monitor, and any tools you need to be productive"
  },
  {
    icon: <Coffee className="w-5 h-5 text-primary" />,
    title: "Flexible Time Off",
    description: "Unlimited PTO policy with minimum 15 days encouraged annually"
  }
];

const testimonials = [
  {
    quote: "The remote culture here is incredible. I have the flexibility to work when I'm most productive while collaborating with amazing people worldwide.",
    author: "Sarah Chen",
    role: "Senior Engineer",
    avatar: "SC",
    tenure: "2 years"
  },
  {
    quote: "I've grown more in 1 year here than in my previous 3 years elsewhere. The learning opportunities and mentorship are unmatched.",
    author: "Marcus Johnson", 
    role: "Product Designer",
    avatar: "MJ",
    tenure: "1 year"
  },
  {
    quote: "The transparency and trust in this company is refreshing. Leadership actually listens and acts on feedback.",
    author: "Elena Rodriguez",
    role: "Project Manager", 
    avatar: "ER",
    tenure: "3 years"
  }
];

const applicationSteps = [
  {
    step: "01",
    title: "Apply",
    description: "Submit your application with resume and cover letter",
    icon: <Briefcase className="w-5 h-5 text-primary" />
  },
  {
    step: "02", 
    title: "Screen",
    description: "30-minute call with our talent team to discuss the role",
    icon: <Users className="w-5 h-5 text-primary" />
  },
  {
    step: "03",
    title: "Interview",
    description: "Technical/portfolio review with the hiring manager",
    icon: <Code className="w-5 h-5 text-primary" />
  },
  {
    step: "04",
    title: "Decision",
    description: "Final conversation and offer within 48 hours",
    icon: <Trophy className="w-5 h-5 text-primary" />
  }
];

export default function CareersPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <HeaderNav />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16 max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold font-headline mb-6 leading-tight">
                Build the Future with <span className="text-primary">DigitalAccel</span>
              </h1>
              <p className="text-xl text-foreground/80 mb-8 leading-relaxed">
                Join a world-class team of engineers, designers, and strategists. We're remote-first, 
                async-friendly, and obsessed with building products that matter.
              </p>
              
              {/* Quick Stats */}
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <div className="text-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary/10 border border-primary/20 rounded-xl mx-auto mb-3">
                    <Globe className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-1 text-sm">100% Remote</h3>
                  <p className="text-xs text-foreground/70">Work from anywhere</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary/10 border border-primary/20 rounded-xl mx-auto mb-3">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-1 text-sm">20+ Team Members</h3>
                  <p className="text-xs text-foreground/70">Across 12 countries</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary/10 border border-primary/20 rounded-xl mx-auto mb-3">
                    <Zap className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-1 text-sm">Fast Growth</h3>
                  <p className="text-xs text-foreground/70">200+ projects delivered</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Company Values */}
        <section className="py-16 bg-white/5">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">
                Our Values
              </h2>
              <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                These principles guide everything we do and help create an environment where great work happens.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {values.map((value, index) => (
                <Card key={value.title} className="bg-white/5 border-white/10 hover:bg-white/10 hover:border-primary/20 transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="flex items-center justify-center w-12 h-12 bg-primary/10 border border-primary/20 rounded-xl mx-auto mb-4">
                      {value.icon}
                    </div>
                    <h3 className="font-semibold mb-2 text-primary">{value.title}</h3>
                    <p className="text-sm text-foreground/70 leading-relaxed">{value.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4 flex items-center justify-center gap-3">
                <Briefcase className="w-8 h-8 text-primary" /> 
                Open Positions
              </h2>
              <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                Join our team and help us build the next generation of digital solutions.
              </p>
            </div>

            <div className="max-w-5xl mx-auto space-y-6">
              {roles.map((role) => (
                <Card key={role.id} className={`transition-all duration-300 hover:shadow-lg ${
                  role.featured 
                    ? 'bg-primary/5 border-primary/20 hover:border-primary/30' 
                    : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-primary/20'
                }`}>
                  <CardContent className="p-8">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                      {/* Job Info */}
                      <div className="flex-grow">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <div className="flex items-center gap-3 mb-2">
                              <h3 className="text-xl font-bold text-primary">{role.title}</h3>
                              {role.featured && (
                                <Badge className="bg-primary/20 text-primary border-primary/30">
                                  <Star className="w-3 h-3 mr-1" />
                                  Featured
                                </Badge>
                              )}
                            </div>
                            <div className="flex items-center gap-4 text-sm text-foreground/60 mb-3">
                              <span className="flex items-center gap-1">
                                <Briefcase className="w-4 h-4" />
                                {role.department}
                              </span>
                              <span className="flex items-center gap-1">
                                <MapPin className="w-4 h-4" />
                                {role.location}
                              </span>
                              <span className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                {role.type}
                              </span>
                              <span className="flex items-center gap-1">
                                <DollarSign className="w-4 h-4" />
                                {role.salary}
                              </span>
                            </div>
                          </div>
                        </div>
                        
                        <p className="text-foreground/80 mb-4 leading-relaxed">{role.description}</p>
                        
                        {/* Requirements */}
                        <div className="mb-4">
                          <h4 className="font-semibold text-primary mb-2">Requirements:</h4>
                          <ul className="grid md:grid-cols-2 gap-2">
                            {role.requirements.map((req, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-sm text-foreground/80">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                {req}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Benefits */}
                        <div className="flex flex-wrap gap-2">
                          {role.benefits.map((benefit, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs border-primary/30 text-primary">
                              {benefit}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Apply Button */}
                      <div className="flex-shrink-0">
                        <Button size="lg" className="w-full lg:w-auto group" asChild>
                          <a href={`mailto:careers@digitalaccel.io?subject=Application: ${role.title}`} 
                             className="flex items-center gap-2">
                            Apply Now
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </a>
                        </Button>
                        <p className="text-xs text-foreground/60 mt-2 text-center lg:text-left">
                          {role.experience} experience
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits & Perks */}
        <section className="py-16 bg-white/5">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">
                Benefits & Perks
              </h2>
              <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                We invest in our team with competitive benefits and perks that support your best work.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {benefits.map((benefit, index) => (
                <Card key={benefit.title} className="bg-white/5 border-white/10 hover:bg-white/10 hover:border-primary/20 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-primary/10 border border-primary/20 rounded-xl flex items-center justify-center">
                        {benefit.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-primary mb-2">{benefit.title}</h3>
                        <p className="text-sm text-foreground/70 leading-relaxed">{benefit.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Employee Testimonials */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">
                What Our Team Says
              </h2>
              <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                Hear from our team members about their experience working at DigitalAccel.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="bg-white/5 border-white/10 hover:bg-white/10 hover:border-primary/20 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                      ))}
                    </div>
                    <blockquote className="text-foreground/80 mb-4 italic leading-relaxed">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/20 border border-primary/30 rounded-full flex items-center justify-center">
                        <span className="text-sm font-semibold text-primary">{testimonial.avatar}</span>
                      </div>
                      <div>
                        <div className="font-semibold text-primary">{testimonial.author}</div>
                        <div className="text-sm text-foreground/60">{testimonial.role} • {testimonial.tenure}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Application Process */}
        <section className="py-16 bg-white/5">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">
                Our Hiring Process
              </h2>
              <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                We've designed a fair, transparent process that respects your time while getting to know each other.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-4 gap-8">
                {applicationSteps.map((step, index) => (
                  <div key={step.step} className="text-center">
                    <div className="relative mb-6">
                      <div className="w-16 h-16 bg-primary/20 border-2 border-primary/30 rounded-full flex items-center justify-center mx-auto mb-4">
                        {step.icon}
                      </div>
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                        <div className="text-primary font-bold text-sm bg-background px-2">{step.step}</div>
                      </div>
                      {index < applicationSteps.length - 1 && (
                        <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-primary/30 -translate-y-1/2"></div>
                      )}
                    </div>
                    <h3 className="font-semibold text-primary mb-2">{step.title}</h3>
                    <p className="text-sm text-foreground/70 leading-relaxed">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <Card className="bg-primary/5 border-primary/20 max-w-4xl mx-auto">
              <CardContent className="p-12 text-center">
                <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4 text-primary">
                  Ready to Join Our Team?
                </h2>
                <p className="text-foreground/70 text-lg mb-8 max-w-2xl mx-auto">
                  Don't see a role that fits? We're always looking for exceptional talent. 
                  Send us your resume and tell us how you'd like to contribute.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" asChild>
                    <a href="mailto:careers@digitalaccel.io" className="flex items-center gap-2">
                      Get In Touch
                      <ArrowRight className="w-5 h-5" />
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <a href="/contact" className="flex items-center gap-2">
                      <Calendar className="w-5 h-5" />
                      Schedule a Call
                    </a>
                  </Button>
                </div>
                <div className="mt-8 pt-8 border-t border-primary/20">
                  <div className="flex items-center justify-center gap-2 text-sm text-foreground/60">
                    <Shield className="w-4 h-4" />
                    DigitalAccel is an equal opportunity employer committed to diversity and inclusion.
                  </div>
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