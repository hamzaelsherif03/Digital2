"use client";

import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { ArrowRight, Clock, Users, Shield, CheckCircle, Zap } from 'lucide-react';
import { useAnimationVariants } from './lib/utils';

const enterpriseCommitments = [
  {
    icon: <Clock className="w-5 h-5 text-primary" />,
    title: "Rapid Engagement Start",
    description: "Dedicated team assignment within 24 hours of agreement"
  },
  {
    icon: <Users className="w-5 h-5 text-primary" />,
    title: "Direct Team Access", 
    description: "Dedicated project management with executive-level communication"
  },
  {
    icon: <Shield className="w-5 h-5 text-primary" />,
    title: "Enterprise Assurance",
    description: "Comprehensive SLAs and performance guarantees"
  },
  {
    icon: <CheckCircle className="w-5 h-5 text-primary" />,
    title: "Success Partnership",
    description: "Ongoing commitment to your digital transformation success"
  }
];

export default function CTASection() {
  const { fadeInUp, staggerContainer } = useAnimationVariants();
  return (
    <section className="py-section-large relative overflow-hidden bg-gradient-to-br from-primary/5 via-transparent to-primary/10">
      <div className="container mx-auto px-container text-center relative z-10">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
          className="max-w-5xl mx-auto"
        >
          {/* Professional Badge */}
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-primary/10 border border-primary/20 text-sm font-semibold text-primary mb-8 backdrop-blur-xl"
          >
            <Zap className="w-4 h-4" />
            Strategic Partnership
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-6xl lg:text-7xl font-bold font-headline mb-8 leading-tight tracking-tight"
          >
            Transform Your Business
            <span className="text-primary block">Velocity Today</span>
          </motion.h2>
          
          <motion.p
            variants={fadeInUp}
            className="text-xl md:text-2xl text-foreground/70 mb-12 leading-relaxed max-w-3xl mx-auto"
          >
            Partner with our enterprise acceleration team to unlock your organization's digital potential and achieve sustainable competitive advantage.
          </motion.p>

          {/* Enterprise Commitments */}
          <motion.div
            variants={fadeInUp}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          >
            {enterpriseCommitments.map((commitment, index) => (
              <motion.div
                key={commitment.title}
                variants={fadeInUp}
                custom={index}
                className="bg-gradient-to-br from-background/80 via-background/60 to-background/40 backdrop-blur-xl border border-primary/20 rounded-feature p-6 shadow-lg hover:shadow-luxury transition-all duration-500"
              >
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-card flex items-center justify-center">
                    {commitment.icon}
                  </div>
                  <h3 className="font-semibold text-foreground">{commitment.title}</h3>
                  <p className="text-sm text-foreground/70 leading-relaxed">{commitment.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <a 
              href="/contact?utm_source=website&utm_medium=cta&utm_campaign=conversion&utm_content=cta-schedule"
              className="group relative overflow-hidden bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-6 text-xl font-semibold rounded-full shadow-luxury transition-all duration-500 hover:shadow-luxury-lg hover:scale-105"
            >
              <span className="relative z-10">Schedule Consultation</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
            </a>
            
            <a 
              href="/process"
              className="group px-12 py-6 text-xl font-medium rounded-full hover:bg-primary/5 transition-all duration-300 border border-primary/20 backdrop-blur-xl"
            >
              View Our Process
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 