"use client";

import { useState, useEffect, Suspense } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useSearchParams } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useAnimationVariants } from '@/components/lib/utils';
import { useMobile } from '@/components/hooks/use-mobile';
import { CheckCircle, ArrowRight, Mail, Phone, MapPin, Calendar, Clock, Send, Shield, Users, Award, User, Building, MessageSquare, Zap, AlertCircle } from 'lucide-react';
import HeaderNav from '@/components/HeaderNav';
import FooterSection from '@/components/FooterSection';

// Enhanced form validation schema with mobile-friendly error messages
const contactSchema = z.object({
  name: z.string()
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name must be less than 50 characters'),
  email: z.string()
    .email('Please enter a valid email address')
    .min(1, 'Email is required'),
  phone: z.string()
    .min(10, 'Please enter a valid phone number')
    .regex(/^[\+]?[1-9][\d]{0,15}$/, 'Please enter a valid phone number'),
  company: z.string()
    .min(2, 'Company name must be at least 2 characters')
    .max(100, 'Company name must be less than 100 characters'),
  projectType: z.string()
    .min(1, 'Please select a project type'),
  budget: z.string()
    .min(1, 'Please select a budget range'),
  timeline: z.string()
    .min(1, 'Please select a timeline'),
  message: z.string()
    .min(20, 'Please provide at least 20 characters of detail')
    .max(1000, 'Message must be less than 1000 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

const projectTypes = [
  { value: 'mvp', label: 'MVP Development' },
  { value: 'scale-up', label: 'Scale-up Enhancement' },
  { value: 'enterprise', label: 'Enterprise Solution' },
  { value: 'web-app', label: 'Web Application' },
  { value: 'mobile-app', label: 'Mobile App' },
  { value: 'ecommerce', label: 'E-commerce Platform' },
  { value: 'other', label: 'Other' },
];

const budgetRanges = [
  { value: 'discuss', label: 'Strategic Discussion' },
  { value: '25k-50k', label: '$25,000 - $50,000' },
  { value: '50k-100k', label: '$50,000 - $100,000' },
  { value: '100k+', label: '$100,000+' },
  { value: 'enterprise', label: 'Enterprise Investment' },
];

const timelines = [
  { value: 'flexible', label: 'Flexible' },
  { value: '1-3months', label: '1-3 Months' },
  { value: '3-6months', label: '3-6 Months' },
  { value: '6months+', label: '6+ Months' },
];

const benefits = [
  {
    icon: <Clock className="w-5 h-5 text-primary" />,
    title: "24-Hour Response",
    description: "Executive-level consultation within one business day"
  },
  {
    icon: <Shield className="w-5 h-5 text-primary" />,
    title: "Consultation",
    description: "Strategic assessment and transformation roadmap"
  },
  {
    icon: <Award className="w-5 h-5 text-primary" />,
    title: "Proven Excellence",
    description: "200+ successful enterprise transformations delivered"
  }
];

function ContactFormContent() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [formErrors, setFormErrors] = useState<string[]>([]);
  const searchParams = useSearchParams();
  const { fadeInUp, staggerContainer } = useAnimationVariants();
  const isMobile = useMobile();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      company: '',
      projectType: '',
      budget: '',
      timeline: '',
      message: '',
    },
    mode: 'onChange', // Enable real-time validation
  });

  // Handle URL parameters for package pre-selection
  useEffect(() => {
    const packageParam = searchParams.get('package');
    const utmSource = searchParams.get('utm_source');
    const utmContent = searchParams.get('utm_content');
    
    if (packageParam) {
      const packageMap: Record<string, string> = {
        'sprint': 'mvp',
        'marathon': 'scale-up', 
        'enterprise': 'enterprise',
        'mvp': 'mvp',
        'scale-up': 'scale-up'
      };
      
      const projectType = packageMap[packageParam];
      if (projectType) {
        form.setValue('projectType', projectType);
        
        // Set appropriate budget range based on package
        if (packageParam === 'sprint') form.setValue('budget', 'discuss');
        if (packageParam === 'marathon') form.setValue('budget', '25k-50k');
        if (packageParam === 'enterprise') form.setValue('budget', 'enterprise');
      }
    }

    // Pre-fill message based on traffic source
    if (utmSource || utmContent) {
      const sourceMessage = `I'm interested in learning more about your digital acceleration services. I came from ${utmSource || utmContent}.`;
      form.setValue('message', sourceMessage);
    }
  }, [searchParams, form]);

  // Auto-focus first field on mobile
  useEffect(() => {
    if (isMobile && currentStep === 1) {
      const nameInput = document.querySelector('input[name="name"]') as HTMLInputElement;
      if (nameInput) {
        setTimeout(() => nameInput.focus(), 500);
      }
    }
  }, [isMobile, currentStep]);

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setFormErrors([]);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log('Form submitted:', data);
      setIsSuccess(true);
    } catch (error) {
      console.error('Submission error:', error);
      setFormErrors(['Something went wrong. Please try again or contact us directly.']);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Enhanced error handling with mobile-friendly messages
  const handleFormError = (errors: any) => {
    const errorMessages = Object.values(errors).map((error: any) => error?.message).filter(Boolean);
    setFormErrors(errorMessages);
    
    // Scroll to first error on mobile
    if (isMobile && errorMessages.length > 0) {
      const firstError = document.querySelector('[data-error="true"]');
      if (firstError) {
        firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  };

  if (isSuccess) {
    return (
      <div className="flex flex-col min-h-screen bg-background text-foreground">
        <HeaderNav />
        <div className="flex-grow py-16 md:py-32">
          <div className="container mx-auto px-container">
            <motion.div
              className="max-w-4xl mx-auto text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-6 md:mb-8 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center backdrop-blur-xl border border-primary/30 shadow-2xl shadow-primary/20"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              >
                <CheckCircle className="w-10 h-10 md:w-12 md:h-12 text-primary" />
              </motion.div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold font-headline mb-6 md:mb-8 text-primary">
                Message Sent Successfully!
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-foreground/70 mb-8 md:mb-12 max-w-3xl mx-auto px-4">
                Thank you for reaching out. Our executive team will review your transformation requirements and get back to you within 24 hours with a strategic consultation proposal.
              </p>
              <div className="space-y-6 md:space-y-8">
                <p className="text-foreground/60 text-base md:text-lg">What happens next?</p>
                <div className="bg-gradient-to-br from-background/80 via-background/60 to-background/40 backdrop-blur-2xl border border-primary/20 rounded-showcase p-6 md:p-8 lg:p-10 text-left space-y-4 md:space-y-6 shadow-2xl">
                  <div className="flex items-start gap-4 md:gap-6">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-primary/20 to-primary/10 border border-primary/30 rounded-feature flex items-center justify-center text-base md:text-lg font-bold text-primary flex-shrink-0">1</div>
                    <div>
                      <h3 className="font-semibold mb-2 text-primary text-base md:text-lg">Strategic Assessment</h3>
                      <p className="text-foreground/80 text-sm md:text-base">We'll review your transformation requirements and prepare a custom strategic proposal</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 md:gap-6">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-primary/15 to-primary/5 border border-primary/25 rounded-feature flex items-center justify-center text-base md:text-lg font-bold text-primary flex-shrink-0">2</div>
                    <div>
                      <h3 className="font-semibold mb-2 text-primary text-base md:text-lg">Executive Consultation</h3>
                      <p className="text-foreground/80 text-sm md:text-base">Schedule a strategic discovery session to discuss your vision and objectives in detail</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 md:gap-6">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-feature flex items-center justify-center text-base md:text-lg font-bold text-primary flex-shrink-0">3</div>
                    <div>
                      <h3 className="font-semibold mb-2 text-primary text-base md:text-lg">Transformation Roadmap</h3>
                      <p className="text-foreground/80 text-sm md:text-base">Receive a comprehensive transformation roadmap with strategic milestones and timeline</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center pt-6 md:pt-8">
                  <Button variant="outline" className="border-primary/30 hover:bg-primary/5 rounded-feature px-6 md:px-8 py-3 md:py-4 text-base md:text-lg" asChild>
                    <a href="/process">View Our Methodology</a>
                  </Button>
                  <Button variant="outline" className="border-primary/30 hover:bg-primary/5 rounded-feature px-6 md:px-8 py-3 md:py-4 text-base md:text-lg" asChild>
                    <a href="/insights">Read Case Studies</a>
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
        <section className="py-16 md:py-32">
          <div className="container mx-auto px-container">
            <motion.div
              className="text-center mb-12 md:mb-20 max-w-5xl mx-auto"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.div
                className="inline-flex items-center gap-2 md:gap-3 px-4 md:px-6 py-2 md:py-3 rounded-full bg-primary/10 border border-primary/20 text-xs md:text-sm font-semibold text-primary mb-6 md:mb-8 backdrop-blur-xl"
                variants={fadeInUp}
                custom={0}
              >
                <Zap className="w-3 h-3 md:w-4 md:h-4" />
                Strategic Consultation
              </motion.div>

              <motion.h1
                className="text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-bold font-headline mb-6 md:mb-8 leading-tight tracking-tight px-4"
                variants={fadeInUp}
                custom={1}
              >
                Ready to Accelerate Your
                <span className="block bg-gradient-to-r from-primary via-primary/90 to-primary/70 bg-clip-text text-transparent">
                  Digital Transformation?
                </span>
              </motion.h1>
              
              <motion.p
                className="text-lg md:text-xl lg:text-2xl text-foreground/70 leading-relaxed max-w-4xl mx-auto mb-12 md:mb-16 px-4"
                variants={fadeInUp}
                custom={2}
              >
                Connect with our executive team to discuss your transformation objectives and receive a custom strategic proposal within 24 hours.
              </motion.p>

              {/* Benefits */}
              <motion.div
                className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto"
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
              >
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit.title}
                    className="text-center bg-gradient-to-br from-background/80 via-background/60 to-background/40 backdrop-blur-2xl border border-primary/20 rounded-feature p-4 md:p-6 shadow-lg"
                    variants={fadeInUp}
                    custom={index + 3}
                  >
                    <div className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-feature mx-auto mb-3">
                      {benefit.icon}
                    </div>
                    <h3 className="font-bold mb-2 text-sm md:text-base">{benefit.title}</h3>
                    <p className="text-xs md:text-sm text-foreground/70">{benefit.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 md:py-32 bg-gradient-to-b from-background via-background/95 to-background">
          <div className="container mx-auto px-container">
            <div className="grid lg:grid-cols-3 gap-8 md:gap-12 max-w-7xl mx-auto">
              {/* Contact Form */}
              <motion.div
                className="lg:col-span-2"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Card className="bg-gradient-to-br from-background/80 via-background/60 to-background/40 backdrop-blur-2xl border border-primary/20 shadow-2xl hover:shadow-luxury transition-all duration-700 rounded-showcase">
                  <CardHeader className="pb-6 md:pb-8 border-b border-primary/20">
                    <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-primary/20 to-primary/10 border border-primary/30 rounded-feature flex items-center justify-center">
                        <Send className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-xl md:text-2xl lg:text-3xl text-primary font-bold font-headline">Begin Your Transformation</CardTitle>
                        <CardDescription className="text-foreground/70 text-sm md:text-lg">
                          Complete the form below and receive a strategic consultation proposal within 24 hours.
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6 md:p-8 lg:p-10">
                    {/* Error Messages */}
                    {formErrors.length > 0 && (
                      <motion.div
                        className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-feature"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="flex items-start gap-3">
                          <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                          <div>
                            <h4 className="font-semibold text-red-500 mb-2">Please fix the following errors:</h4>
                            <ul className="space-y-1">
                              {formErrors.map((error, index) => (
                                <li key={index} className="text-sm text-red-400">• {error}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit, handleFormError)} className="space-y-8 md:space-y-10">
                        {/* Basic Information Section */}
                        <div className="space-y-4 md:space-y-6">
                          <div className="flex items-center gap-3 md:gap-4 pb-4 md:pb-6 border-b border-primary/20">
                            <div className="w-6 h-6 md:w-8 md:h-8 bg-gradient-to-br from-primary/20 to-primary/10 border border-primary/30 rounded-feature flex items-center justify-center">
                              <User className="w-3 h-3 md:w-4 md:h-4 text-primary" />
                            </div>
                            <h3 className="text-lg md:text-xl font-bold text-primary font-headline">Contact Information</h3>
                          </div>
                          
                          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                            <FormField
                              control={form.control}
                              name="name"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel className="text-foreground font-semibold text-sm md:text-base">Full Name *</FormLabel>
                                  <FormControl>
                                    <Input 
                                      placeholder="John Smith" 
                                      className="bg-background/50 border-primary/20 text-foreground placeholder:text-foreground/50 focus:border-primary focus:ring-primary/20 hover:border-primary/30 transition-all duration-300 rounded-feature backdrop-blur-xl h-12 md:h-14 text-base" 
                                      {...field}
                                      autoComplete="name"
                                      autoFocus={isMobile && currentStep === 1}
                                    />
                                  </FormControl>
                                  <FormMessage className="text-sm" />
                                </FormItem>
                              )}
                            />

                            <FormField
                              control={form.control}
                              name="email"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel className="text-foreground font-semibold text-sm md:text-base">Email Address *</FormLabel>
                                  <FormControl>
                                    <Input 
                                      type="email" 
                                      placeholder="john@company.com" 
                                      className="bg-background/50 border-primary/20 text-foreground placeholder:text-foreground/50 focus:border-primary focus:ring-primary/20 hover:border-primary/30 transition-all duration-300 rounded-feature backdrop-blur-xl h-12 md:h-14 text-base"
                                      {...field}
                                      autoComplete="email"
                                      inputMode="email"
                                    />
                                  </FormControl>
                                  <FormMessage className="text-sm" />
                                </FormItem>
                              )}
                            />

                            <FormField
                              control={form.control}
                              name="phone"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel className="text-foreground font-semibold text-sm md:text-base">Phone Number *</FormLabel>
                                  <FormControl>
                                    <Input 
                                      type="tel" 
                                      placeholder="+1 (555) 123-4567" 
                                      className="bg-background/50 border-primary/20 text-foreground placeholder:text-foreground/50 focus:border-primary focus:ring-primary/20 hover:border-primary/30 transition-all duration-300 rounded-feature backdrop-blur-xl h-12 md:h-14 text-base"
                                      {...field}
                                      autoComplete="tel"
                                      inputMode="tel"
                                    />
                                  </FormControl>
                                  <FormMessage className="text-sm" />
                                </FormItem>
                              )}
                            />

                            <FormField
                              control={form.control}
                              name="company"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel className="text-foreground font-semibold text-sm md:text-base">Organization *</FormLabel>
                                  <FormControl>
                                    <Input 
                                      placeholder="Your Organization" 
                                      className="bg-background/50 border-primary/20 text-foreground placeholder:text-foreground/50 focus:border-primary focus:ring-primary/20 hover:border-primary/30 transition-all duration-300 rounded-feature backdrop-blur-xl h-12 md:h-14 text-base"
                                      {...field}
                                      autoComplete="organization"
                                    />
                                  </FormControl>
                                  <FormMessage className="text-sm" />
                                </FormItem>
                              )}
                            />
                          </div>
                        </div>

                        {/* Project Details Section */}
                        <div className="space-y-4 md:space-y-6">
                          <div className="flex items-center gap-3 md:gap-4 pb-4 md:pb-6 border-b border-primary/20">
                            <div className="w-6 h-6 md:w-8 md:h-8 bg-gradient-to-br from-primary/15 to-primary/5 border border-primary/25 rounded-feature flex items-center justify-center">
                              <Building className="w-3 h-3 md:w-4 md:h-4 text-primary" />
                            </div>
                            <h3 className="text-lg md:text-xl font-bold text-primary font-headline">Transformation Details</h3>
                          </div>
                          
                          <div className="grid md:grid-cols-3 gap-4 md:gap-6">
                            <FormField
                              control={form.control}
                              name="projectType"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel className="text-foreground font-semibold text-sm md:text-base">Transformation Type *</FormLabel>
                                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                      <SelectTrigger className="bg-background/50 border-primary/20 text-foreground focus:border-primary focus:ring-primary/20 hover:border-primary/30 rounded-feature backdrop-blur-xl h-12 md:h-14 text-base">
                                        <SelectValue placeholder="Select type" />
                                      </SelectTrigger>
                                    </FormControl>
                                    <SelectContent className="bg-card border-border rounded-feature">
                                      {projectTypes.map((type) => (
                                        <SelectItem key={type.value} value={type.value} className="text-foreground hover:bg-primary/10 text-sm md:text-base">
                                          {type.label}
                                        </SelectItem>
                                      ))}
                                    </SelectContent>
                                  </Select>
                                  <FormMessage className="text-sm" />
                                </FormItem>
                              )}
                            />

                            <FormField
                              control={form.control}
                              name="budget"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel className="text-foreground font-semibold text-sm md:text-base">Investment Range *</FormLabel>
                                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                      <SelectTrigger className="bg-background/50 border-primary/20 text-foreground focus:border-primary focus:ring-primary/20 hover:border-primary/30 rounded-feature backdrop-blur-xl h-12 md:h-14 text-base">
                                        <SelectValue placeholder="Select investment" />
                                      </SelectTrigger>
                                    </FormControl>
                                    <SelectContent className="bg-card border-border rounded-feature">
                                      {budgetRanges.map((range) => (
                                        <SelectItem key={range.value} value={range.value} className="text-foreground hover:bg-primary/10 text-sm md:text-base">
                                          {range.label}
                                        </SelectItem>
                                      ))}
                                    </SelectContent>
                                  </Select>
                                  <FormMessage className="text-sm" />
                                </FormItem>
                              )}
                            />

                            <FormField
                              control={form.control}
                              name="timeline"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel className="text-foreground font-semibold text-sm md:text-base">Timeline *</FormLabel>
                                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                      <SelectTrigger className="bg-background/50 border-primary/20 text-foreground focus:border-primary focus:ring-primary/20 hover:border-primary/30 rounded-feature backdrop-blur-xl h-12 md:h-14 text-base">
                                        <SelectValue placeholder="Select timeline" />
                                      </SelectTrigger>
                                    </FormControl>
                                    <SelectContent className="bg-card border-border rounded-feature">
                                      {timelines.map((timeline) => (
                                        <SelectItem key={timeline.value} value={timeline.value} className="text-foreground hover:bg-primary/10 text-sm md:text-base">
                                          {timeline.label}
                                        </SelectItem>
                                      ))}
                                    </SelectContent>
                                  </Select>
                                  <FormMessage className="text-sm" />
                                </FormItem>
                              )}
                            />
                          </div>
                        </div>

                        {/* Project Description Section */}
                        <div className="space-y-4 md:space-y-6">
                          <div className="flex items-center gap-3 md:gap-4 pb-4 md:pb-6 border-b border-primary/20">
                            <div className="w-6 h-6 md:w-8 md:h-8 bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-feature flex items-center justify-center">
                              <MessageSquare className="w-3 h-3 md:w-4 md:h-4 text-primary" />
                            </div>
                            <h3 className="text-lg md:text-xl font-bold text-primary font-headline">Transformation Objectives</h3>
                          </div>
                          
                          <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-foreground font-semibold text-sm md:text-base">Tell us about your transformation goals *</FormLabel>
                                <FormControl>
                                  <Textarea
                                    placeholder="Describe your transformation objectives, key challenges, target outcomes, and any specific requirements..."
                                    className="min-h-[120px] md:min-h-[150px] bg-background/50 border-primary/20 text-foreground placeholder:text-foreground/50 focus:border-primary focus:ring-primary/20 hover:border-primary/30 transition-all duration-300 resize-none rounded-feature backdrop-blur-xl text-base"
                                    {...field}
                                    autoComplete="off"
                                  />
                                </FormControl>
                                <FormMessage className="text-sm" />
                              </FormItem>
                            )}
                          />
                        </div>

                        {/* Submit Button */}
                        <div className="pt-6 md:pt-8 border-t border-primary/20">
                          <Button
                            type="submit"
                            size="lg"
                            disabled={isSubmitting}
                            className="w-full group relative overflow-hidden bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8 md:px-12 py-4 md:py-6 text-lg md:text-xl rounded-feature shadow-luxury transition-all duration-500 hover:shadow-luxury-lg hover:scale-105 disabled:hover:scale-100 min-h-[56px]"
                          >
                            {isSubmitting ? (
                              <>
                                <div className="w-5 h-5 md:w-6 md:h-6 border-2 border-current border-t-transparent rounded-full animate-spin mr-2 md:mr-3" />
                                Sending Message...
                              </>
                            ) : (
                              <>
                                <Send className="w-5 h-5 md:w-6 md:h-6 mr-2 md:mr-3" />
                                <span className="relative z-10">Send Strategic Inquiry</span>
                                <ArrowRight className="w-5 h-5 md:w-6 md:h-6 ml-2 md:ml-3 group-hover:translate-x-1 transition-transform duration-300" />
                                <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
                              </>
                            )}
                          </Button>
                        </div>
                      </form>
                    </Form>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Contact Information */}
              <motion.div
                className="lg:col-span-1"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="space-y-6 md:space-y-8">
                  {/* Contact Methods */}
                  <Card className="bg-gradient-to-br from-background/80 via-background/60 to-background/40 backdrop-blur-2xl border border-primary/20 shadow-lg hover:shadow-luxury transition-all duration-500 rounded-showcase">
                    <CardHeader>
                      <CardTitle className="text-primary flex items-center gap-2 md:gap-3 text-lg md:text-xl font-bold font-headline">
                        <Mail className="w-5 h-5 md:w-6 md:h-6" />
                        Executive Contact
                      </CardTitle>
                      <CardDescription className="text-foreground/70 text-sm md:text-base">
                        Direct access to our executive team for strategic discussions.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3 md:space-y-4">
                      <div className="flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-feature bg-background/50 border border-primary/20 hover:bg-background/70 hover:border-primary/30 transition-all duration-300 backdrop-blur-xl">
                        <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-primary/20 to-primary/10 border border-primary/30 rounded-feature flex items-center justify-center">
                          <Mail className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                        </div>
                        <div>
                          <div className="font-semibold text-foreground text-sm md:text-base">Executive Email</div>
                          <a 
                            href="mailto:executive@digitalaccel.com" 
                            className="text-xs md:text-sm text-foreground/70 hover:text-primary transition-colors"
                          >
                            executive@digitalaccel.com
                          </a>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-feature bg-background/50 border border-primary/20 hover:bg-background/70 hover:border-primary/30 transition-all duration-300 backdrop-blur-xl">
                        <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-primary/20 to-primary/10 border border-primary/30 rounded-feature flex items-center justify-center">
                          <Phone className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                        </div>
                        <div>
                          <div className="font-semibold text-foreground text-sm md:text-base">Strategic Hotline</div>
                          <a 
                            href="tel:+15551234567" 
                            className="text-xs md:text-sm text-foreground/70 hover:text-primary transition-colors"
                          >
                            +1 (555) 123-4567
                          </a>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-feature bg-background/50 border border-primary/20 backdrop-blur-xl">
                        <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-primary/20 to-primary/10 border border-primary/30 rounded-feature flex items-center justify-center">
                          <MapPin className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                        </div>
                        <div>
                          <div className="font-semibold text-foreground text-sm md:text-base">Global Headquarters</div>
                          <div className="text-xs md:text-sm text-foreground/70">
                            San Francisco Bay Area
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Schedule Call */}
                  <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/30 shadow-lg hover:shadow-luxury transition-all duration-500 rounded-showcase">
                    <CardContent className="p-6 md:p-8 text-center">
                      <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-primary/20 to-primary/10 border border-primary/30 rounded-feature flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-lg">
                        <Calendar className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                      </div>
                      <h4 className="font-bold mb-2 md:mb-3 text-primary text-lg md:text-xl font-headline">Executive Consultation</h4>
                      <p className="text-foreground/70 mb-4 md:mb-6 text-sm md:text-base">
                        Schedule a strategic consultation with our executive team to discuss your transformation objectives.
                      </p>
                      <Button className="w-full group relative overflow-hidden bg-primary/10 hover:bg-primary border border-primary/20 hover:border-primary text-primary hover:text-primary-foreground rounded-feature py-3 md:py-4 font-semibold transition-all duration-500 hover:scale-105 min-h-[48px]" asChild>
                        <a 
                          href="https://calendly.com/digitalaccel/executive-consultation" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 md:gap-3"
                        >
                          <Calendar className="w-4 h-4 md:w-5 md:h-5" />
                          <span className="relative z-10">Book Executive Call</span>
                          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
                        </a>
                      </Button>
                    </CardContent>
                  </Card>

                  {/* Trust Signals */}
                  <Card className="bg-gradient-to-br from-background/80 via-background/60 to-background/40 backdrop-blur-2xl border border-primary/20 shadow-lg hover:shadow-luxury transition-all duration-500 rounded-showcase">
                    <CardContent className="p-6 md:p-8 text-center">
                      <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-primary/20 to-primary/10 border border-primary/30 rounded-feature flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-lg">
                        <Users className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                      </div>
                      <h4 className="font-bold mb-2 md:mb-3 text-primary text-lg md:text-xl font-headline">Trusted by 200+ Organizations</h4>
                      <p className="text-foreground/70 mb-4 md:mb-6 text-sm md:text-base">
                        From startups to Fortune 500 enterprises, we've delivered successful digital transformations across industries.
                      </p>
                      <div className="grid grid-cols-2 gap-3 md:gap-4">
                        <div className="text-center p-3 md:p-4 bg-gradient-to-br from-primary/10 to-primary/5 rounded-feature border border-primary/20">
                          <div className="font-bold text-primary text-xl md:text-2xl">98%</div>
                          <div className="text-foreground/70 text-xs md:text-sm">Client Satisfaction</div>
                        </div>
                        <div className="text-center p-3 md:p-4 bg-gradient-to-br from-primary/10 to-primary/5 rounded-feature border border-primary/20">
                          <div className="font-bold text-primary text-xl md:text-2xl">24h</div>
                          <div className="text-foreground/70 text-xs md:text-sm">Response Time</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <FooterSection />
    </div>
  );
}

export default function ContactForm() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ContactFormContent />
    </Suspense>
  );
} 