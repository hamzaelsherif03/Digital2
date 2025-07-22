"use client";

import { motion } from 'framer-motion';
import { HelpCircle } from 'lucide-react';
import { Card } from './ui/card';
import { useAnimationVariants } from './lib/utils';

const faqs = [
  {
    question: 'How do you ensure rapid delivery of enterprise-grade solutions?',
    answer: 'Our methodology combines proven frameworks, experienced teams working in parallel, and established technology stacks. We leverage our extensive library of enterprise components and best practices to accelerate development without compromising quality or security standards.'
  },
  {
    question: 'What is your approach to project revisions and refinements?',
    answer: 'We include comprehensive revision cycles as part of our standard engagement. Our collaborative approach ensures alignment at each milestone, with dedicated project management and direct access to technical leads throughout the process.'
  },
  {
    question: 'Do you provide ongoing support and maintenance?',
    answer: 'Yes, every engagement includes comprehensive post-launch support. We offer various maintenance and evolution packages designed to ensure your solution continues to perform optimally and adapt to changing business requirements.'
  },
  {
    question: 'What technologies and platforms do you specialize in?',
    answer: 'We utilize modern, enterprise-grade technologies including React, Next.js, cloud-native architectures, and industry-leading platforms. All solutions are built with scalability, security, and performance as core principles, ensuring compatibility with enterprise infrastructure.'
  },
  {
    question: 'How do you handle integration with existing enterprise systems?',
    answer: 'Our team has extensive experience with enterprise integrations including CRM systems, ERP platforms, analytics tools, and custom APIs. We conduct thorough discovery and planning to ensure seamless integration with your existing technology ecosystem.'
  },
  {
    question: 'What quality assurance and success measures do you provide?',
    answer: 'We maintain rigorous quality standards throughout our engagement process. Our commitment includes comprehensive testing, security reviews, performance optimization, and measurable success criteria aligned with your business objectives.'
  }
];

export default function FAQSection() {
  const { fadeInUp, staggerContainer } = useAnimationVariants();
  return (
    <section className="py-32">
      <div className="container mx-auto px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-6xl lg:text-7xl font-bold font-headline mb-8 tracking-tight"
          >
            Enterprise
            <span className="block bg-gradient-to-r from-primary via-primary/90 to-primary/70 bg-clip-text text-transparent">
              Inquiries
            </span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl md:text-2xl text-foreground/70 leading-relaxed"
          >
            Comprehensive answers to common questions about our enterprise digital acceleration methodology and engagement process.
          </motion.p>
        </motion.div>
        
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
          className="max-w-4xl mx-auto space-y-6"
        >
          {faqs.map((faq, i) => (
            <motion.div key={faq.question} variants={fadeInUp} custom={i}>
              <Card className="bg-gradient-to-br from-background/80 via-background/60 to-background/40 backdrop-blur-2xl border border-primary/20 hover:border-primary/30 transition-all duration-500 p-8 rounded-3xl shadow-lg hover:shadow-luxury">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold font-headline text-foreground">
                    {faq.question}
                  </h3>
                  <p className="text-foreground/70 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 