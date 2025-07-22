"use client";

import { motion } from 'framer-motion';
import { MessageSquare } from 'lucide-react';
import { Card } from './ui/card';
import { useAnimationVariants } from './lib/utils';

const testimonials = [
  {
    author: 'Jane Doe',
    company: 'Acme Corp',
    quote: 'DigitalAccel delivered our MVP in record time. The process was seamless and the results exceeded our expectations.'
  },
  {
    author: 'John Smith',
    company: 'StartupX',
    quote: 'The team at DigitalAccel is world-class. We saw a 300% lift in conversions after launch.'
  },
  {
    author: 'Emily Chen',
    company: 'GrowthHub',
    quote: 'Their 7-day sprint is the real deal. We went from idea to live product in a week.'
  }
];

export default function TestimonialsSection() {
  const { fadeInUp, staggerContainer } = useAnimationVariants();
  return (
    <section className="py-section bg-white/5">
      <div className="container mx-auto px-container">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
          variants={staggerContainer}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary mb-4"
          >
            <MessageSquare className="w-4 h-4" />
            Client testimonials
          </motion.div>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-5xl font-bold font-headline mb-4"
          >
            Trusted by<br />
            <span className="text-primary">industry leaders</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-lg text-foreground/70 leading-relaxed"
          >
            Don't just take our word for it. Here's what our clients say about working with DigitalAccel and the results they've achieved.
          </motion.p>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, i) => (
            <motion.div key={testimonial.author} variants={fadeInUp} custom={i}>
              <Card className="bg-white/5 border-white/10 hover:bg-white/10 hover:border-primary/20 transition-all duration-300 p-8 rounded-card">
                <blockquote className="italic text-lg text-foreground/80 mb-4">"{testimonial.quote}"</blockquote>
                <div className="font-semibold text-primary">{testimonial.author}</div>
                <div className="text-xs text-foreground/60">{testimonial.company}</div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 