"use client";

import { motion } from 'framer-motion';
import { Button } from './ui/button';
import HeroVisual from './HeroVisual';
import { ArrowRight, PlayCircle, Zap, Phone, Mail } from 'lucide-react';
import { useAnimationVariants } from './lib/utils';
import { useMobile } from './hooks/use-mobile';

export default function HeroSection() {
  const { heroItem } = useAnimationVariants();
  const isMobile = useMobile();
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 sm:pt-24 lg:pt-section-large pb-16 sm:pb-20 lg:pb-section-large">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background/95" />
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center max-w-6xl mx-auto"
          initial="hidden"
          animate="show"
        >
          {/* Premium Badge - Mobile Optimized */}
          <motion.div
            className="inline-flex items-center gap-2 md:gap-3 px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-full bg-primary/10 border border-primary/20 text-xs sm:text-sm md:text-base font-semibold text-primary mb-6 sm:mb-8 md:mb-12 backdrop-blur-xl shadow-luxury"
            variants={heroItem}
            custom={0}
          >
            <Zap className="w-4 h-4 md:w-5 md:h-5" />
            <span className="tracking-wide">Digital Acceleration Partner</span>
          </motion.div>

          {/* Hero Headline - Mobile Responsive Typography */}
          <motion.h1
            className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold font-headline tracking-tighter leading-[0.9] md:leading-[0.85] mb-6 sm:mb-8 md:mb-12 px-2 sm:px-4"
            variants={heroItem}
            custom={1}
          >
            <span className="block">Accelerate</span>
            <span className="block bg-gradient-to-r from-primary via-primary/90 to-primary/70 bg-clip-text text-transparent">
              Digital
            </span>
            <span className="block">Transformation</span>
          </motion.h1>
          
          {/* Refined Value Proposition - Mobile Optimized */}
          <motion.p
            className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-foreground/70 max-w-4xl mx-auto leading-relaxed mb-8 sm:mb-12 md:mb-16 font-light px-2 sm:px-4"
            variants={heroItem}
            custom={2}
          >
            Enterprise-grade digital solutions that accelerate your business velocity. 
            <span className="text-primary font-medium block mt-2 sm:mt-3 md:mt-4">Custom-built. Performance-driven. Results-focused.</span>
          </motion.p>
          
          {/* CTA Section - Mobile Optimized with Call Button */}
          <motion.div
            className="flex flex-col items-center justify-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 mb-12 sm:mb-16 md:mb-20 px-2 sm:px-4"
            variants={heroItem}
            custom={3}
          >
            {/* Primary CTA */}
            <Button 
              size="lg" 
              className="group relative overflow-hidden bg-primary hover:bg-primary/90 text-primary-foreground px-6 sm:px-8 md:px-12 py-3 sm:py-4 md:py-6 text-base sm:text-lg md:text-xl font-semibold rounded-full border-0 shadow-luxury transition-all duration-500 hover:shadow-luxury-lg hover:scale-105 w-full sm:w-auto max-w-sm sm:max-w-none" 
              asChild
            >
              <a href="/contact?utm_source=website&utm_medium=cta&utm_campaign=conversion&utm_content=hero-accelerate-now" className="flex items-center justify-center gap-2 sm:gap-3 md:gap-4">
                <span className="relative z-10">Schedule Consultation</span>
                <ArrowRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
              </a>
            </Button>
            
            {/* Mobile Call Button */}
            {isMobile && (
              <Button 
                size="lg" 
                className="group bg-green-600 hover:bg-green-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-full border-0 shadow-luxury transition-all duration-500 hover:shadow-luxury-lg hover:scale-105 w-full max-w-sm" 
                asChild
              >
                <a href="tel:+1234567890" className="flex items-center justify-center gap-2 sm:gap-3">
                  <Phone className="w-5 h-5" />
                  <span className="relative z-10">Call Now</span>
                </a>
              </Button>
            )}
            
            {/* Secondary CTA */}
            <Button 
              size="lg" 
              variant="ghost" 
              className="group px-6 sm:px-8 md:px-12 py-3 sm:py-4 md:py-6 text-base sm:text-lg md:text-xl font-medium rounded-full hover:bg-primary/5 transition-all duration-300 border border-primary/20 backdrop-blur-xl w-full sm:w-auto max-w-sm sm:max-w-none" 
              asChild
            >
              <a href="/process" className="flex items-center justify-center gap-2 sm:gap-3 md:gap-4">
                <PlayCircle className="w-5 h-5 md:w-6 md:h-6" />
                <span>View Process</span>
              </a>
            </Button>
            
            {/* Mobile Email Button */}
            {isMobile && (
              <Button 
                size="lg" 
                variant="outline" 
                className="group px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium rounded-full hover:bg-primary/5 transition-all duration-300 border border-primary/20 backdrop-blur-xl w-full max-w-sm" 
                asChild
              >
                <a href="mailto:hello@digitalaccel.com" className="flex items-center justify-center gap-2 sm:gap-3">
                  <Mail className="w-5 h-5" />
                  <span>Email Us</span>
                </a>
              </Button>
            )}
          </motion.div>

          {/* Hero Visual - Mobile Optimized */}
          <motion.div
            variants={heroItem}
            custom={4}
            className="px-2 sm:px-4"
          >
            <HeroVisual />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 