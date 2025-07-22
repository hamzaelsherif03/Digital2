"use client";

import { motion } from 'framer-motion';
import { TrendingUp, Target, Award } from 'lucide-react';
import { Card } from './ui/card';
import { useAnimationVariants } from './lib/utils';

const features = [
  {
    title: 'Engineered for scalability',
    description: 'Every solution is architected with enterprise scalability and performance optimization in mind, ensuring your digital infrastructure evolves with your business growth.',
    icon: TrendingUp,
    stats: 'Performance optimized',
  },
  {
    title: 'Designed for conversion',
    description: "Our solutions aren't just visually compelling—they're strategically designed to drive business outcomes with proven user experience methodologies and conversion optimization.",
    icon: Target,
    stats: 'Results driven',
  },
  {
    title: 'Crafted for excellence',
    description: "Meticulous attention to detail in every aspect of design, interaction, and code architecture. Quality standards that reflect and enhance your brand's market position.",
    icon: Award,
    stats: 'Enterprise grade',
  },
];

export default function ResultsSection() {
  const { fadeInUp, staggerContainer } = useAnimationVariants();
  return (
    <section id="results" className="py-32">
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
            Built for
            <span className="block bg-gradient-to-r from-primary via-primary/90 to-primary/70 bg-clip-text text-transparent">
              Enterprise Success
            </span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl md:text-2xl text-foreground/70 leading-relaxed"
          >
            We're guided by the methodologies and principles that distinguish enterprise-grade digital solutions: strategic precision, accelerated execution, and uncompromising quality standards.
          </motion.p>
        </motion.div>
        
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {features.map((feature, i) => (
            <motion.div key={feature.title} variants={fadeInUp} custom={i}>
              <Card className="h-full bg-gradient-to-br from-background/80 via-background/60 to-background/40 backdrop-blur-2xl border border-primary/20 p-8 flex flex-col justify-between rounded-3xl shadow-lg hover:shadow-luxury transition-all duration-500 hover:scale-105">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 backdrop-blur-xl border border-primary/30 rounded-2xl flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {feature.stats}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold font-headline mb-4">{feature.title}</h3>
                  <p className="text-foreground/70 leading-relaxed">{feature.description}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 