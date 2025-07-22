"use client";

import { motion } from 'framer-motion';
import { Card } from './ui/card';
import { useAnimationVariants } from './lib/utils';
import { Lightbulb, Figma, Users, Code, Zap, MessageSquare, CheckCircle, Shield } from 'lucide-react';

const processSteps = [
  {
    number: "01",
    title: 'Discovery & Strategy',
    duration: "1-2 days",
    icon: <Lightbulb className="w-6 h-6 text-primary" />,
    desc: 'Deep-dive discovery to understand your business goals, technical requirements, and success metrics.',
    deliverables: ['Business requirements document', 'Technical architecture plan', 'Success metrics framework', 'Project timeline']
  },
  {
    number: "02", 
    title: 'Design & Prototyping',
    duration: "2-3 days",
    icon: <Figma className="w-6 h-6 text-primary" />,
    desc: 'Create interactive prototypes and design systems that align with your brand and user experience goals.',
    deliverables: ['Interactive prototypes', 'Design system', 'User flow diagrams', 'Brand integration']
  },
  {
    number: "03",
    title: 'Development & Testing',
    duration: "3-5 days", 
    icon: <Code className="w-6 h-6 text-primary" />,
    desc: 'Build your solution using modern technologies with continuous testing and quality assurance.',
    deliverables: ['Production-ready code', 'Quality assurance testing', 'Performance optimization', 'Security implementation']
  },
  {
    number: "04",
    title: 'Launch & Optimization',
    duration: "1-2 days",
    icon: <Zap className="w-6 h-6 text-primary" />,
    desc: 'Deploy your solution and implement ongoing optimization strategies for maximum performance.',
    deliverables: ['Production deployment', 'Performance monitoring', 'Analytics setup', 'Launch support']
  },
  {
    number: "05",
    title: 'Continuous Support',
    duration: "Ongoing",
    icon: <MessageSquare className="w-6 h-6 text-primary" />,
    desc: 'Provide ongoing support, maintenance, and optimization to ensure your solution continues to deliver results.',
    deliverables: ['Regular maintenance', 'Performance monitoring', 'Feature updates', 'Technical support']
  }
];

export default function ProcessSection() {
  const { fadeInUp, staggerContainer } = useAnimationVariants();
  
  return (
    <section id="process" className="py-section bg-white/5">
      <div className="container mx-auto px-container">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary mb-4"
          >
            <Zap className="w-4 h-4" />
            Our Process
          </motion.div>
          
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-6xl lg:text-7xl font-bold font-headline mb-8 tracking-tight"
          >
            Proven
            <span className="block bg-gradient-to-r from-primary via-primary/90 to-primary/70 bg-clip-text text-transparent">
              Acceleration
            </span>
            Methodology
          </motion.h2>
          
          <motion.p
            variants={fadeInUp}
            className="text-xl md:text-2xl text-foreground/70 leading-relaxed"
          >
            Our systematic approach ensures rapid delivery while maintaining enterprise-grade quality and performance standards.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          className="space-y-12"
        >
          {processSteps.map((step, index) => (
            <motion.div
              key={step.number}
              variants={fadeInUp}
              custom={index}
              className="relative"
            >
              {/* Step Card */}
              <Card className="relative bg-gradient-to-br from-background/80 via-background/60 to-background/40 backdrop-blur-2xl border border-primary/20 shadow-2xl hover:shadow-luxury transition-all duration-500 hover:scale-105 rounded-feature p-8 lg:p-12">
                <div className="flex flex-col lg:flex-row items-start gap-8">
                  {/* Step Number & Icon */}
                  <div className="flex items-center justify-center w-12 h-12 rounded-element bg-primary/10 mb-4">
                    {step.icon}
                  </div>
                  
                  {/* Step Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-2xl font-bold text-primary">{step.number}</span>
                      <h3 className="text-2xl font-bold font-headline">{step.title}</h3>
                      <span className="text-sm text-foreground/60 bg-primary/10 px-4 py-2 rounded-full border border-primary/20 backdrop-blur-xl">
                        {step.duration}
                      </span>
                    </div>
                    
                    <p className="text-foreground/70 mb-6 leading-relaxed text-lg">
                      {step.desc}
                    </p>
                    
                    {/* Deliverables */}
                    <div className="grid md:grid-cols-2 gap-3">
                      {step.deliverables.map((deliverable, idx) => (
                        <div key={idx} className="flex items-center gap-3 text-sm">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-foreground/80">{deliverable}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Process CTA */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
          className="mt-20 text-center bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 rounded-showcase p-12 backdrop-blur-xl border border-primary/20 shadow-2xl"
        >
          <motion.h3
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold font-headline mb-6"
          >
            Ready to Accelerate Your
            <span className="block bg-gradient-to-r from-primary via-primary/90 to-primary/70 bg-clip-text text-transparent">
              Digital Journey?
            </span>
          </motion.h3>
          
          <motion.p
            variants={fadeInUp}
            className="text-xl text-foreground/70 mb-8 max-w-2xl mx-auto"
          >
            Let's discuss how our proven methodology can accelerate your digital transformation and deliver measurable results.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <a 
              href="/contact?utm_source=website&utm_medium=cta&utm_campaign=conversion&utm_content=process-consultation"
              className="group relative overflow-hidden bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-6 text-xl font-semibold rounded-full shadow-luxury transition-all duration-500 hover:shadow-luxury-lg hover:scale-105"
            >
              <span className="relative z-10">Start Your Project</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
            </a>
            
            <a 
              href="/contact"
              className="group px-12 py-6 text-xl font-medium rounded-full hover:bg-primary/5 transition-all duration-300 border border-primary/20 backdrop-blur-xl"
            >
              Schedule Consultation
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 