"use client";

import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Check, ArrowRight, MessageCircle, Zap, TrendingUp, BarChart3, Sparkles } from 'lucide-react';
import { useAnimationVariants } from './lib/utils';

const accelerationPackages = [
  {
    name: 'VELOCITY',
    price: 'Custom',
    description: 'Rapid digital acceleration for startups and growing businesses.',
    features: [
      'Digital strategy consultation',
      'MVP development & launch', 
      'Performance optimization',
      'Growth analytics setup',
      'Mobile-first architecture',
      'Ongoing acceleration support'
    ],
    badge: 'Popular Choice',
    icon: TrendingUp,
    cta: 'Explore Velocity Program',
    variant: 'default' as const,
    packageType: 'velocity',
    recommended: true,
  },
  {
    name: 'SCALE',
    price: 'Custom',
    description: 'Enterprise-grade acceleration for established organizations.',
    features: [
      'Complete digital transformation',
      'Multi-platform solutions',
      'Advanced integrations & APIs',
      'Enterprise security & compliance',
      'Scalable cloud architecture',
      'White-label solutions',
      'Dedicated acceleration team'
    ],
    badge: 'Enterprise',
    icon: BarChart3,
    cta: 'Explore Scale Program',
    variant: 'default' as const,
    packageType: 'scale',
  },
  {
    name: 'TRANSFORM',
    price: 'Custom',
    description: 'Complete digital ecosystem transformation for large enterprises.',
    features: [
      'End-to-end digital strategy',
      'Legacy system modernization',
      'Multi-stakeholder platforms',
      'Advanced AI/ML integration',
      'Enterprise-grade infrastructure',
      'Compliance & governance',
      'Executive acceleration program',
      'Long-term partnership'
    ],
    badge: 'Premium',
    icon: Sparkles,
    cta: 'Explore Transform Program',
    variant: 'default' as const,
    packageType: 'transform',
  },
];

export default function PricingSection() {
  const { fadeInUp, staggerContainer } = useAnimationVariants();

  return (
    <section id="pricing" className="py-section-large bg-gradient-to-b from-background to-background/95">
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
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-primary/10 border border-primary/20 text-sm font-semibold text-primary mb-8 backdrop-blur-xl"
          >
            <Zap className="w-4 h-4" />
            Digital Acceleration Programs
          </motion.div>
          
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-6xl lg:text-7xl font-bold font-headline mb-8 tracking-tight"
          >
            Accelerate at
            <span className="block bg-gradient-to-r from-primary via-primary/90 to-primary/70 bg-clip-text text-transparent">
              Your Pace
            </span>
          </motion.h2>
          
          <motion.p
            variants={fadeInUp}
            className="text-xl md:text-2xl text-foreground/70 leading-relaxed"
          >
            Enterprise-grade acceleration packages tailored to your specific business velocity requirements.
            <span className="block mt-4 text-primary font-medium">Every solution is custom-built for maximum impact.</span>
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          className="grid md:grid-cols-3 gap-8 mb-20"
        >
          {accelerationPackages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              variants={fadeInUp}
              custom={index}
              className="group"
            >
              <Card className={`relative h-full p-8 bg-gradient-to-br from-background/80 via-background/60 to-background/40 backdrop-blur-2xl border border-primary/20 shadow-2xl hover:shadow-luxury transition-all duration-500 hover:scale-105 rounded-showcase ${
                pkg.recommended ? 'ring-2 ring-primary/30' : ''
              }`}>
                {/* Recommended badge */}
                {pkg.recommended && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary/80 text-primary-foreground px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                    {pkg.badge}
                  </div>
                )}

                {/* Package icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 backdrop-blur-xl border border-primary/30 rounded-feature flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <pkg.icon className="w-8 h-8 text-primary" />
                </div>

                {/* Package name */}
                <h3 className="text-2xl font-bold font-headline text-center mb-2">{pkg.name}</h3>
                
                {/* Price */}
                <div className="text-center mb-4">
                  <span className="text-3xl font-bold text-primary">{pkg.price}</span>
                </div>

                {/* Description */}
                <p className="text-foreground/70 text-center mb-8 leading-relaxed">{pkg.description}</p>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <motion.li
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: featureIndex * 0.1 }}
                      className="flex items-center gap-3 text-sm"
                    >
                      <Check className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-foreground/80">{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button 
                  className={`w-full group relative overflow-hidden rounded-feature py-4 text-lg font-semibold transition-all duration-500 hover:scale-105 ${
                    pkg.recommended 
                      ? 'bg-primary hover:bg-primary/90 text-primary-foreground' 
                      : 'bg-primary/10 hover:bg-primary/80 text-primary hover:text-primary-foreground'
                  }`}
                  asChild
                >
                  <a href={`/contact?package=${pkg.packageType}&utm_source=website&utm_medium=cta&utm_campaign=conversion&utm_content=pricing-${pkg.packageType}`}>
                    <span className="relative z-10">{pkg.cta}</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </Button>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Enterprise CTA */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
          className="text-center bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 rounded-showcase p-12 backdrop-blur-xl border border-primary/20"
        >
          <motion.h3
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold font-headline mb-6"
          >
            Need a Custom Solution?
            <span className="block bg-gradient-to-r from-primary via-primary/90 to-primary/70 bg-clip-text text-transparent">
              Let's Build Together
            </span>
          </motion.h3>
          
          <motion.p
            variants={fadeInUp}
            className="text-xl text-foreground/70 mb-8 max-w-2xl mx-auto"
          >
            Every business is unique. We'll create a tailored acceleration program that perfectly fits your specific needs and goals.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <a 
              href="/contact?utm_source=website&utm_medium=cta&utm_campaign=conversion&utm_content=pricing-custom"
              className="group relative overflow-hidden bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-6 text-xl font-semibold rounded-full shadow-luxury transition-all duration-500 hover:shadow-luxury-lg hover:scale-105"
            >
              <span className="relative z-10">Schedule Consultation</span>
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