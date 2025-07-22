import React from 'react';
import { aboutMetadata } from '@/lib/metadata';
import HeaderNav from '@/components/HeaderNav';
import FooterSection from '@/components/FooterSection';
import { LeadershipTeam, TeamStats } from '@/components/TeamSection';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Target, 
  Eye, 
  Heart, 
  Zap, 
  Users, 
  Globe, 
  Rocket, 
  Award, 
  TrendingUp, 
  Clock, 
  Shield, 
  Code, 
  ArrowRight,
  Star,
  Building,
  Lightbulb,
  CheckCircle
} from 'lucide-react';

export const metadata = aboutMetadata;

const companyValues = [
  {
    icon: <Zap className="w-6 h-6 text-primary" />,
    title: "Speed & Agility",
    description: "We move fast and iterate quickly. In a world where timing matters, we help you get to market before your competition.",
    principle: "Ship fast, learn faster"
  },
  {
    icon: <Shield className="w-6 h-6 text-primary" />,
    title: "Quality & Reliability",
    description: "Every line of code, every design decision is crafted with precision. We build solutions that scale and stand the test of time.",
    principle: "Excellence is non-negotiable"
  },
  {
    icon: <Users className="w-6 h-6 text-primary" />,
    title: "Client Partnership",
    description: "We don't just deliver projects—we become your technical co-founders. Your success is our success, and we're invested in the long term.",
    principle: "Your growth is our mission"
  },
  {
    icon: <Lightbulb className="w-6 h-6 text-primary" />,
    title: "Innovation & Creativity",
    description: "We stay ahead of technology trends and apply cutting-edge solutions to solve complex business challenges.",
    principle: "Always pushing boundaries"
  }
];

const timeline = [
  {
    year: "2019",
    title: "Foundation",
    description: "Founded by Alex Rivera and Marcus Chen after experiencing the pain of slow technical execution at their previous startups.",
    icon: <Rocket className="w-5 h-5 text-primary" />,
    stats: "2 founders, 1 mission"
  },
  {
    year: "2020",
    title: "First 50 Projects",
    description: "Delivered our first 50 projects, establishing our rapid delivery methodology and building our reputation in the startup ecosystem.",
    icon: <TrendingUp className="w-5 h-5 text-primary" />,
    stats: "50 projects, 100% on-time"
  },
  {
    year: "2021",
    title: "Team Expansion",
    description: "Grew to 15 team members, adding world-class talent from Google, Apple, Tesla, and other leading tech companies.",
    icon: <Users className="w-5 h-5 text-primary" />,
    stats: "15 team members, 6 countries"
  },
  {
    year: "2022",
    title: "Enterprise Solutions",
    description: "Launched our Enterprise package, partnering with agencies and larger organizations to scale our impact.",
    icon: <Building className="w-5 h-5 text-primary" />,
    stats: "3 enterprise partnerships"
  },
  {
    year: "2023",
    title: "Global Reach",
    description: "Expanded internationally, now serving clients across 25+ countries with our remote-first approach.",
    icon: <Globe className="w-5 h-5 text-primary" />,
    stats: "25+ countries, 200+ projects"
  },
  {
    year: "2024",
    title: "AI Integration",
    description: "Pioneering AI-assisted development processes to deliver even faster results while maintaining quality.",
    icon: <Star className="w-5 h-5 text-primary" />,
    stats: "AI-powered acceleration"
  }
];

const achievements = [
  {
    icon: <Award className="w-5 h-5 text-primary" />,
    title: "200+ Projects Delivered",
    description: "Successfully launched applications for startups to enterprises"
  },
  {
    icon: <Clock className="w-5 h-5 text-primary" />,
    title: "7-Day Average Delivery",
    description: "Consistently delivering high-quality solutions in record time"
  },
  {
    icon: <TrendingUp className="w-5 h-5 text-primary" />,
    title: "$50M+ Revenue Generated",
    description: "Our solutions have generated over $50M in revenue for clients"
  },
  {
    icon: <Users className="w-5 h-5 text-primary" />,
    title: "98% Client Satisfaction",
    description: "Industry-leading satisfaction with 95% repeat business rate"
  },
  {
    icon: <Globe className="w-5 h-5 text-primary" />,
    title: "25+ Countries Served",
    description: "Global reach with clients from Silicon Valley to Singapore"
  },
  {
    icon: <Rocket className="w-5 h-5 text-primary" />,
    title: "50+ Startups Launched",
    description: "Helped bring innovative ideas to market faster than ever"
  }
];

const culturalValues = [
  {
    title: "Remote-First",
    description: "We've been remote since day one, believing the best talent is distributed globally.",
    metric: "12 countries"
  },
  {
    title: "Continuous Learning",
    description: "Every team member gets $2,000 annually for learning and professional development.",
    metric: "$2K budget"
  },
  {
    title: "Work-Life Balance",
    description: "Unlimited PTO and flexible hours because we believe great work happens when you're energized.",
    metric: "Unlimited PTO"
  },
  {
    title: "Transparency",
    description: "Open salaries, public roadmaps, and honest communication in everything we do.",
    metric: "100% open"
  }
];

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <HeaderNav />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16 max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold font-headline mb-6 leading-tight">
                Building the Future of <span className="text-primary">Digital Innovation</span>
              </h1>
              <p className="text-xl text-foreground/80 mb-8 leading-relaxed">
                We're not just another development agency. We're your technical co-founders, 
                turning visionary ideas into market-ready solutions at unprecedented speed.
              </p>
              
              {/* Mission Statement */}
              <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 mb-12">
                <h2 className="text-2xl font-bold text-primary mb-4">Our Mission</h2>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  To eliminate technical barriers that prevent great ideas from reaching the world. 
                  We believe innovation should be accessible, and execution should be lightning-fast.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Company Story */}
        <section className="py-16 bg-white/5">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">
                  Our Story
                </h2>
                <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
                  Born from frustration with slow technical execution, we set out to revolutionize 
                  how digital products are built and launched.
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold font-headline mb-6 text-primary">
                    The Problem We Solved
                  </h3>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-red-500/20 border border-red-500/30 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Months of Development</h4>
                        <p className="text-sm text-foreground/70">Traditional agencies taking 3-6 months for simple applications</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-red-500/20 border border-red-500/30 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Unclear Pricing</h4>
                        <p className="text-sm text-foreground/70">Hidden costs and scope creep making budgets unpredictable</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-red-500/20 border border-red-500/30 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Poor Communication</h4>
                        <p className="text-sm text-foreground/70">Black box development with little visibility into progress</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold font-headline mb-6 text-primary">
                    Our Solution
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-primary/20 border border-primary/30 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                        <CheckCircle className="w-3 h-3 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">7-Day Delivery</h4>
                        <p className="text-sm text-foreground/70">Production-ready applications delivered in a single week</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-primary/20 border border-primary/30 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                        <CheckCircle className="w-3 h-3 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Transparent Pricing</h4>
                        <p className="text-sm text-foreground/70">Fixed prices with no hidden fees or surprise costs</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-primary/20 border border-primary/30 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                        <CheckCircle className="w-3 h-3 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Daily Updates</h4>
                        <p className="text-sm text-foreground/70">Real-time progress tracking with daily communication</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">
                What Drives Us
              </h2>
              <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
                Our core principles shape every decision, every line of code, and every client interaction.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              {/* Mission */}
              <Card className="bg-primary/5 border-primary/20 hover:border-primary/30 transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-primary/20 border border-primary/30 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Target className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-primary">Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-foreground/80 leading-relaxed">
                    Eliminate technical barriers preventing great ideas from reaching the world through rapid, 
                    high-quality development solutions.
                  </p>
                </CardContent>
              </Card>

              {/* Vision */}
              <Card className="bg-white/5 border-white/10 hover:bg-white/10 hover:border-primary/20 transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-primary/20 border border-primary/30 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Eye className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-primary">Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-foreground/80 leading-relaxed">
                    A world where any innovator can bring their digital vision to life within days, 
                    not months, regardless of their technical background.
                  </p>
                </CardContent>
              </Card>

              {/* Purpose */}
              <Card className="bg-white/5 border-white/10 hover:bg-white/10 hover:border-primary/20 transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-primary/20 border border-primary/30 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-primary">Purpose</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-foreground/80 leading-relaxed">
                    Democratize innovation by making world-class technical execution accessible 
                    to startups, entrepreneurs, and visionaries everywhere.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Core Values */}
            <div className="grid md:grid-cols-2 gap-8">
              {companyValues.map((value, index) => (
                <Card key={value.title} className="bg-white/5 border-white/10 hover:bg-white/10 hover:border-primary/20 transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0 w-12 h-12 bg-primary/10 border border-primary/20 rounded-xl flex items-center justify-center">
                        {value.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-primary mb-2">{value.title}</h3>
                        <p className="text-foreground/80 mb-3 leading-relaxed">{value.description}</p>
                        <div className="text-sm font-medium text-primary italic">"{value.principle}"</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <LeadershipTeam className="bg-white/5" />

        {/* Company Timeline */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">
                Our Journey
              </h2>
              <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
                From a two-person startup to a global team serving clients worldwide.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              {timeline.map((milestone, index) => (
                <div key={milestone.year} className="relative">
                  {/* Timeline line */}
                  {index < timeline.length - 1 && (
                    <div className="absolute left-8 top-20 w-0.5 h-32 bg-primary/30"></div>
                  )}
                  
                  <div className="flex items-start gap-8 mb-16">
                    {/* Year badge */}
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-primary/20 border-2 border-primary/30 rounded-full flex items-center justify-center">
                        {milestone.icon}
                      </div>
                      <div className="text-center mt-2">
                        <div className="text-primary font-bold text-sm">{milestone.year}</div>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <Card className="flex-grow bg-white/5 border-white/10 hover:bg-white/10 hover:border-primary/20 transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="text-xl font-bold text-primary">{milestone.title}</h3>
                          <Badge variant="outline" className="border-primary/30 text-primary">
                            {milestone.stats}
                          </Badge>
                        </div>
                        <p className="text-foreground/80 leading-relaxed">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="py-16 bg-white/5">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">
                Our Impact
              </h2>
              <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
                Numbers that reflect our commitment to excellence and client success.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {achievements.map((achievement, index) => (
                <Card key={achievement.title} className="bg-white/5 border-white/10 hover:bg-white/10 hover:border-primary/20 transition-all duration-300 text-center">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary/10 border border-primary/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                      {achievement.icon}
                    </div>
                    <h3 className="font-bold text-primary mb-2">{achievement.title}</h3>
                    <p className="text-sm text-foreground/70 leading-relaxed">{achievement.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team Stats */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">
                Our Team By The Numbers
              </h2>
            </div>
            <TeamStats className="max-w-4xl mx-auto" />
          </div>
        </section>

        {/* Culture */}
        <section className="py-16 bg-white/5">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">
                Our Culture
              </h2>
              <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
                We've built a culture that attracts the world's best talent and keeps them engaged.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {culturalValues.map((culture, index) => (
                <Card key={culture.title} className="bg-white/5 border-white/10 hover:bg-white/10 hover:border-primary/20 transition-all duration-300 text-center">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-primary mb-2">{culture.title}</h3>
                    <p className="text-sm text-foreground/70 mb-3 leading-relaxed">{culture.description}</p>
                    <div className="text-lg font-bold text-primary">{culture.metric}</div>
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
                  Ready to Accelerate Your Vision?
                </h2>
                <p className="text-foreground/70 text-lg mb-8 max-w-2xl mx-auto">
                  Join 200+ successful entrepreneurs who've transformed their ideas into market-ready 
                  solutions with our proven methodology.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" asChild>
                    <a href="/contact" className="flex items-center gap-2">
                      Schedule Consultation
                      <ArrowRight className="w-5 h-5" />
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <a href="/careers" className="flex items-center gap-2">
                      <Users className="w-5 h-5" />
                      Join Our Team
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