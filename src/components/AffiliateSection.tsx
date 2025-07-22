"use client";

import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { useAnimationVariants } from './lib/utils';
import { Users, DollarSign, TrendingUp, Shield, Zap, ArrowRight } from 'lucide-react';

const affiliateBenefits = [
  {
    icon: <DollarSign className="w-6 h-6 text-primary" />,
    title: 'High Commission Rates',
    description: 'Earn up to 30% commission on successful referrals with our competitive affiliate program.'
  },
  {
    icon: <Users className="w-6 h-6 text-primary" />,
    title: 'Dedicated Support',
    description: 'Get personalized support and resources to help you succeed as our affiliate partner.'
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-primary" />,
    title: 'Performance Tracking',
    description: 'Real-time analytics and tracking to monitor your performance and earnings.'
  },
  {
    icon: <Shield className="w-6 h-6 text-primary" />,
    title: 'Quality Assurance',
    description: 'We maintain high standards to ensure your referrals receive exceptional service.'
  }
];

export default function AffiliateSection() {
  const { fadeInUp, staggerContainer } = useAnimationVariants();
  
  return (
    <section className="py-section bg-white/5">
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
            Partner Program
          </motion.div>
          
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-6xl lg:text-7xl font-bold font-headline mb-8 tracking-tight"
          >
            Join Our
            <span className="block bg-gradient-to-r from-primary via-primary/90 to-primary/70 bg-clip-text text-transparent">
              Affiliate Network
            </span>
          </motion.h2>
          
          <motion.p
            variants={fadeInUp}
            className="text-xl md:text-2xl text-foreground/70 leading-relaxed"
          >
            Partner with us and earn competitive commissions while helping businesses accelerate their digital transformation.
          </motion.p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {affiliateBenefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              variants={fadeInUp}
              custom={index}
              className="group"
            >
              <Card className="relative h-full p-8 bg-gradient-to-br from-background/80 via-background/60 to-background/40 backdrop-blur-2xl border border-primary/20 shadow-2xl hover:shadow-luxury transition-all duration-500 hover:scale-105 rounded-feature overflow-hidden">
                {/* Background gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                {/* Content */}
                <div className="relative z-10 text-center">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 backdrop-blur-xl border border-primary/30 rounded-feature flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-luxury transition-all duration-500">
                    {benefit.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold font-headline mb-4 text-foreground group-hover:text-primary transition-colors duration-500">
                    {benefit.title}
                  </h3>

                  {/* Description */}
                  <p className="text-foreground/70 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>

                {/* Hover border effect */}
                <div className="absolute inset-0 rounded-feature bg-gradient-to-r from-primary/20 via-transparent to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
          className="text-center bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 rounded-showcase p-12 backdrop-blur-xl border border-primary/20 shadow-2xl"
        >
          <motion.h3
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold font-headline mb-6"
          >
            Ready to Start
            <span className="block bg-gradient-to-r from-primary via-primary/90 to-primary/70 bg-clip-text text-transparent">
              Earning?
            </span>
          </motion.h3>
          
          <motion.p
            variants={fadeInUp}
            className="text-xl text-foreground/70 mb-8 max-w-2xl mx-auto"
          >
            Join our affiliate program today and start earning competitive commissions while helping businesses grow.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Button 
              size="lg" 
              className="group bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold" 
              asChild
            >
              <a href="/affiliate" className="flex items-center gap-4">
                <span>Apply Now</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </Button>
            
            <a 
              href="/contact?utm_source=website&utm_medium=cta&utm_campaign=conversion&utm_content=affiliate-info"
              className="group px-8 py-4 text-lg font-medium rounded-full hover:bg-primary/5 transition-all duration-300 border border-primary/20 backdrop-blur-xl"
            >
              Learn More
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 