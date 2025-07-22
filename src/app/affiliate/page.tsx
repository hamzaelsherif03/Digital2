"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useAnimationVariants } from '@/components/lib/utils';
import { CheckCircle, ArrowRight, Users, Handshake, TrendingUp, Award, Clock, Shield, Target, Building, Globe, Zap } from 'lucide-react';
import HeaderNav from '@/components/HeaderNav';
import FooterSection from '@/components/FooterSection';

// Strategic partnership form schema
const partnerSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  organization: z.string().min(2, 'Organization name required'),
  website: z.string().url('Please enter a valid website URL').optional().or(z.literal('')),
  organizationType: z.string().min(1, 'Please select your organization type'),
  partnershipInterest: z.string().min(50, 'Please provide at least 50 characters about your partnership interest'),
  capabilities: z.string().min(30, 'Please describe your organization\'s capabilities'),
});

type PartnerFormData = z.infer<typeof partnerSchema>;

const partnershipTiers = [
  {
    tier: "Strategic Alliance",
    requirement: "Consulting & agencies with enterprise clients",
    benefits: [
      "Co-marketing opportunities",
      "Dedicated partnership manager",
      "Revenue sharing programs",
      "Joint solution development"
    ],
    features: ["White-label solutions", "Training & certification", "Lead sharing", "Executive introductions"]
  },
  {
    tier: "Technology Partner", 
    requirement: "Tech companies & platform providers",
    benefits: [
      "Technical integration support",
      "Joint product development",
      "Shared go-to-market strategy",
      "Technology alliance programs"
    ],
    features: ["API access & documentation", "Technical workshops", "Integration support", "Platform partnerships"]
  },
  {
    tier: "Channel Partner",
    requirement: "Resellers & implementation partners",
    benefits: [
      "Implementation support",
      "Training & enablement",
      "Channel incentive programs",
      "Territory protection"
    ],
    features: ["Certified partner status", "Sales enablement", "Technical training", "Marketing support"]
  }
];

const strategicBenefits = [
  {
    icon: <Handshake className="w-6 h-6 text-primary" />,
    title: "Strategic Collaboration",
    description: "Long-term partnerships focused on mutual growth and shared enterprise client success"
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-primary" />,
    title: "Revenue Growth",
    description: "Joint opportunities that expand market reach and drive sustainable revenue growth"
  },
  {
    icon: <Users className="w-6 h-6 text-primary" />,
    title: "Executive Access",
    description: "Direct access to executive teams and strategic decision-makers for partnership development"
  },
  {
    icon: <Target className="w-6 h-6 text-primary" />,
    title: "Market Expansion",
    description: "Collaborative market entry strategies and joint business development initiatives"
  }
];

const partnerStats = [
  { label: "Strategic Partners", value: "25+", subtext: "active partnerships" },
  { label: "Joint Revenue", value: "$5M+", subtext: "collaborative projects" },
  { label: "Partner Satisfaction", value: "98%", subtext: "retention rate" },
  { label: "Market Reach", value: "15+", subtext: "countries served" }
];

const organizationTypes = [
  "Consulting Agency",
  "Technology Company",
  "Systems Integrator", 
  "Digital Agency",
  "Implementation Partner",
  "Platform Provider",
  "Other"
];

export default function StrategicPartnersPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { fadeInUp, staggerContainer } = useAnimationVariants();

  const form = useForm<PartnerFormData>({
    resolver: zodResolver(partnerSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      organization: '',
      website: '',
      organizationType: '',
      partnershipInterest: '',
      capabilities: '',
    },
  });

  const onSubmit = async (data: PartnerFormData) => {
    setIsSubmitting(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log('Strategic partnership application submitted:', data);
      setIsSuccess(true);
    } catch (error) {
      console.error('Submission error:', error);
      alert('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="flex flex-col min-h-screen bg-background text-foreground">
        <HeaderNav />
        <div className="flex-grow py-32">
          <div className="container mx-auto px-8">
            <motion.div
              className="max-w-3xl mx-auto text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                className="w-24 h-24 mx-auto mb-8 bg-primary/20 rounded-full flex items-center justify-center backdrop-blur-xl border border-primary/30"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              >
                <CheckCircle className="w-12 h-12 text-primary" />
              </motion.div>
              <h1 className="text-4xl md:text-5xl font-bold font-headline mb-8">Partnership Application Submitted!</h1>
              <p className="text-xl text-foreground/70 mb-12">
                Thank you for your interest in our strategic partnership program. Our partnership team will review your application and contact you within 3-5 business days to discuss collaboration opportunities.
              </p>
              <div className="space-y-6">
                <p className="text-foreground/60">Next steps:</p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Button variant="outline" className="border-primary/30 hover:bg-primary/5 rounded-2xl px-8 py-4" asChild>
                    <a href="/about">Learn About Our Team</a>
                  </Button>
                  <Button variant="outline" className="border-primary/30 hover:bg-primary/5 rounded-2xl px-8 py-4" asChild>
                    <a href="/process">Explore Our Methodology</a>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        <FooterSection />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <HeaderNav />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="py-32">
          <div className="container mx-auto px-8">
            <motion.div
              className="text-center mb-20 max-w-5xl mx-auto"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.h1
                className="text-4xl md:text-6xl lg:text-7xl font-bold font-headline mb-8 leading-tight tracking-tight"
                variants={fadeInUp}
                custom={1}
              >
                Strategic Partnerships for
                <span className="block bg-gradient-to-r from-primary via-primary/90 to-primary/70 bg-clip-text text-transparent">
                  Mutual Growth
                </span>
              </motion.h1>
              
              <motion.p
                className="text-xl md:text-2xl text-foreground/70 max-w-4xl mx-auto leading-relaxed mb-16"
                variants={fadeInUp}
                custom={2}
              >
                Join our exclusive network of strategic partners and collaborate with us to deliver enterprise-grade digital acceleration solutions to organizations worldwide.
              </motion.p>

              {/* Key Stats */}
              <motion.div
                className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
                variants={fadeInUp}
                custom={3}
              >
                {partnerStats.map((stat, index) => (
                  <div key={stat.label} className="text-center bg-gradient-to-br from-background/80 via-background/60 to-background/40 backdrop-blur-2xl border border-primary/20 rounded-2xl p-6 shadow-lg">
                    <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                    <div className="text-sm font-medium text-foreground mb-1">{stat.label}</div>
                    <div className="text-xs text-foreground/50">{stat.subtext}</div>
                  </div>
                ))}
              </motion.div>

              <motion.div
                className="flex flex-col sm:flex-row items-center justify-center gap-6"
                variants={fadeInUp}
                custom={4}
              >
                <Button size="lg" className="group relative overflow-hidden bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-6 text-xl font-semibold rounded-full shadow-luxury transition-all duration-500 hover:shadow-luxury-lg hover:scale-105" asChild>
                  <a href="#apply" className="flex items-center gap-4">
                    <span className="relative z-10">Apply for Partnership</span>
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
                  </a>
                </Button>
                <Button size="lg" variant="ghost" className="group px-12 py-6 text-xl font-medium rounded-full hover:bg-primary/5 transition-all duration-300 border border-primary/20 backdrop-blur-xl" asChild>
                  <a href="#benefits" className="flex items-center gap-4">
                    <span>Learn More</span>
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Strategic Benefits */}
        <section id="benefits" className="py-32 bg-gradient-to-b from-background via-background/95 to-background">
          <div className="container mx-auto px-8">
            <motion.div
              className="text-center mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h2 
                className="text-4xl md:text-5xl lg:text-6xl font-bold font-headline mb-8 tracking-tight"
                variants={fadeInUp}
              >
                Partnership Benefits
              </motion.h2>
              <motion.p 
                className="text-xl md:text-2xl text-foreground/70 max-w-3xl mx-auto"
                variants={fadeInUp}
              >
                Collaborative advantages that drive mutual growth and market expansion
              </motion.p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {strategicBenefits.map((benefit, index) => (
                <motion.div 
                  key={benefit.title}
                  className="text-center bg-gradient-to-br from-background/80 via-background/60 to-background/40 backdrop-blur-2xl border border-primary/20 rounded-3xl p-8 shadow-lg hover:shadow-luxury transition-all duration-500"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  custom={index}
                >
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl mx-auto mb-6">
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg font-bold font-headline mb-3">{benefit.title}</h3>
                  <p className="text-sm text-foreground/70 leading-relaxed">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Tiers */}
        <section className="py-32 bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5">
          <div className="container mx-auto px-8">
            <motion.div
              className="text-center mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h2 
                className="text-4xl md:text-5xl font-bold font-headline mb-8"
                variants={fadeInUp}
              >
                Partnership Tiers
              </motion.h2>
              <motion.p 
                className="text-xl text-foreground/70 max-w-3xl mx-auto"
                variants={fadeInUp}
              >
                Choose the partnership model that aligns with your organization's capabilities and growth objectives
              </motion.p>
            </motion.div>
            
            <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {partnershipTiers.map((tier, index) => (
                <motion.div 
                  key={tier.tier}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  custom={index}
                >
                  <Card className="relative h-full bg-gradient-to-br from-background/80 via-background/60 to-background/40 backdrop-blur-2xl border border-primary/20 shadow-2xl hover:shadow-luxury transition-all duration-700 hover:scale-105 rounded-3xl overflow-hidden">
                    {/* Background gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 opacity-0 hover:opacity-100 transition-opacity duration-700" />
                    
                    <CardContent className="p-8 lg:p-10 relative z-10">
                      <div className="text-center mb-8">
                        <h3 className="text-2xl font-bold font-headline mb-4">{tier.tier}</h3>
                        <p className="text-foreground/70 text-sm mb-6">{tier.requirement}</p>
                      </div>
                      
                      <div className="space-y-6">
                        <div>
                          <h4 className="font-semibold text-primary mb-4">Key Benefits:</h4>
                          <div className="space-y-3">
                            {tier.benefits.map((benefit, i) => (
                              <div key={i} className="flex items-center gap-3 text-sm">
                                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                                <span className="text-foreground/80">{benefit}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-primary mb-4">Includes:</h4>
                          <div className="space-y-3">
                            {tier.features.map((feature, i) => (
                              <div key={i} className="flex items-center gap-3 text-sm">
                                <div className="w-2 h-2 rounded-full bg-primary shadow-lg shadow-primary/50 flex-shrink-0" />
                                <span className="text-foreground/70">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Application Form */}
        <section id="apply" className="py-32">
          <div className="container mx-auto px-8">
            <motion.div
              className="max-w-4xl mx-auto"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold font-headline mb-8">Apply for Strategic Partnership</h2>
                <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
                  Ready to explore collaboration opportunities? Submit your partnership application and our team will contact you within 3-5 business days.
                </p>
              </div>

              <Card className="bg-gradient-to-br from-background/80 via-background/60 to-background/40 backdrop-blur-2xl border border-primary/20 shadow-2xl rounded-3xl">
                <CardContent className="p-8 lg:p-12">
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                      <div className="grid md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-sm font-semibold">Full Name *</FormLabel>
                              <FormControl>
                                <Input placeholder="John Smith" className="rounded-xl border-primary/20 bg-background/50 backdrop-blur-xl" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-sm font-semibold">Email Address *</FormLabel>
                              <FormControl>
                                <Input type="email" placeholder="john@company.com" className="rounded-xl border-primary/20 bg-background/50 backdrop-blur-xl" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-sm font-semibold">Phone Number *</FormLabel>
                              <FormControl>
                                <Input type="tel" placeholder="+1 (555) 123-4567" className="rounded-xl border-primary/20 bg-background/50 backdrop-blur-xl" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="organization"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-sm font-semibold">Organization *</FormLabel>
                              <FormControl>
                                <Input placeholder="Your Organization" className="rounded-xl border-primary/20 bg-background/50 backdrop-blur-xl" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="website"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-sm font-semibold">Website URL</FormLabel>
                              <FormControl>
                                <Input placeholder="https://yourcompany.com" className="rounded-xl border-primary/20 bg-background/50 backdrop-blur-xl" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="organizationType"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-sm font-semibold">Organization Type *</FormLabel>
                              <FormControl>
                                <select 
                                  {...field}
                                  className="w-full px-4 py-3 rounded-xl border border-primary/20 bg-background/50 backdrop-blur-xl text-sm focus:border-primary/50 focus:outline-none"
                                >
                                  <option value="">Select organization type...</option>
                                  {organizationTypes.map(type => (
                                    <option key={type} value={type}>{type}</option>
                                  ))}
                                </select>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="partnershipInterest"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm font-semibold">Partnership Interest *</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Describe your interest in strategic partnership and how you envision our collaboration..."
                                className="min-h-[120px] rounded-xl border-primary/20 bg-background/50 backdrop-blur-xl"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="capabilities"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm font-semibold">Organization Capabilities *</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Describe your organization's core capabilities, expertise, and target markets..."
                                className="min-h-[100px] rounded-xl border-primary/20 bg-background/50 backdrop-blur-xl"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="text-center pt-8">
                        <Button
                          type="submit"
                          size="lg"
                          disabled={isSubmitting}
                          className="group relative overflow-hidden bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-6 text-xl font-semibold rounded-full shadow-luxury transition-all duration-500 hover:shadow-luxury-lg hover:scale-105"
                        >
                          {isSubmitting ? (
                            <>
                              <div className="w-6 h-6 border-2 border-current border-t-transparent rounded-full animate-spin mr-3" />
                              Submitting Application...
                            </>
                          ) : (
                            <>
                              <span className="relative z-10">Submit Partnership Application</span>
                              <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
                              <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
                            </>
                          )}
                        </Button>
                        
                        <p className="text-sm text-foreground/60 mt-6">
                          Partnership review typically takes 3-5 business days. Our team will contact you to discuss collaboration opportunities.
                        </p>
                      </div>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>
      </main>
      <FooterSection />
    </div>
  );
} 