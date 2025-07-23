"use client";

import { Button } from './ui/button';
import HeroVisual from './HeroVisual';
import { ArrowRight, PlayCircle, Zap, Phone, Mail } from 'lucide-react';
import { cn, animationClasses } from './lib/utils';
import { useMobile } from './hooks/use-mobile';
import { useEffect, useRef } from 'react';

export default function HeroSection() {
  const isMobile = useMobile();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      sectionRef.current.setAttribute('data-visible', 'true');
    }
  }, []);
  
  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 sm:pt-24 lg:pt-section-large pb-16 sm:pb-20 lg:pb-section-large"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background/95" />
      
      {/* Optimized floating backgrounds with CSS animations */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse opacity-30" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-3xl animate-pulse opacity-20" 
           style={{ animationDelay: '2s', animationDuration: '6s' }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={cn("text-center max-w-6xl mx-auto", animationClasses.fadeInUp)}>
          {/* Premium Badge - Mobile Optimized */}
          <div
            className={cn(
              "inline-flex items-center gap-2 md:gap-3 px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-full bg-primary/10 border border-primary/20 text-xs sm:text-sm md:text-base font-semibold text-primary mb-6 sm:mb-8 md:mb-12 backdrop-blur-xl shadow-luxury",
              animationClasses.fadeInUp
            )}
            style={{ animationDelay: '0ms' }}
          >
            <Zap className="w-4 h-4 md:w-5 md:h-5" />
            <span className="tracking-wide">Digital Acceleration Partner</span>
          </div>

          {/* Hero Headline - Mobile Responsive Typography */}
          <h1
            className={cn(
              "text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold font-headline tracking-tighter leading-[0.9] md:leading-[0.85] mb-6 sm:mb-8 md:mb-12 px-2 sm:px-4",
              animationClasses.fadeInUp
            )}
            style={{ animationDelay: '100ms' }}
          >
            <span className="block">Accelerate</span>
            <span className="block bg-gradient-to-r from-primary via-primary/90 to-primary/70 bg-clip-text text-transparent">
              Digital
            </span>
            <span className="block">Transformation</span>
          </h1>
          
          {/* Refined Value Proposition - Mobile Optimized */}
          <p
            className={cn(
              "text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-foreground/70 max-w-4xl mx-auto leading-relaxed mb-8 sm:mb-12 md:mb-16 font-light px-2 sm:px-4",
              animationClasses.fadeInUp
            )}
            style={{ animationDelay: '200ms' }}
          >
            Enterprise-grade digital solutions that accelerate your business velocity. 
            <span className="text-primary font-medium block mt-2 sm:mt-3 md:mt-4">Custom-built. Performance-driven. Results-focused.</span>
          </p>
          
          {/* CTA Section - Mobile Optimized with Call Button */}
          <div
            className={cn(
              "flex flex-col items-center justify-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 mb-12 sm:mb-16 md:mb-20 px-2 sm:px-4",
              animationClasses.fadeInUp
            )}
            style={{ animationDelay: '300ms' }}
          >
            {/* Primary CTA */}
            <Button 
              size="lg" 
              className="group relative overflow-hidden bg-primary hover:bg-primary/90 text-primary-foreground px-6 sm:px-8 md:px-12 py-3 sm:py-4 md:py-6 text-base sm:text-lg md:text-xl font-semibold rounded-full border-0 shadow-luxury transition-all duration-500 hover:shadow-luxury-lg hover:scale-105 w-full sm:w-auto max-w-sm sm:max-w-none" 
              asChild
            >
              <a href="/contact?utm_source=website&utm_medium=cta&utm_campaign=conversion&utm_content=hero-accelerate-now" className="flex items-center justify-center gap-2 sm:gap-3 md:gap-4">
                <span>Accelerate Now</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </Button>

            {/* Secondary Actions - Mobile Priority */}
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto">
              {/* Call Direct - Mobile Priority */}
              <Button 
                variant="outline" 
                size="lg"
                className="group border-primary/30 hover:border-primary text-primary hover:bg-primary/10 px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-full transition-all duration-300 hover:scale-105 w-full sm:w-auto" 
                asChild
              >
                <a 
                  href="tel:+1234567890" 
                  className="flex items-center justify-center gap-2 sm:gap-3"
                  aria-label="Call us directly for immediate consultation"
                >
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="text-sm sm:text-base font-medium">Call Direct</span>
                </a>
              </Button>

              {/* Portfolio CTA */}
              <Button 
                variant="ghost" 
                size="lg"
                className="group text-primary hover:text-primary/80 hover:bg-primary/5 px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-full transition-all duration-300 hover:scale-105 w-full sm:w-auto" 
                asChild
              >
                <a href="#portfolio" className="flex items-center justify-center gap-2 sm:gap-3">
                  <PlayCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="text-sm sm:text-base font-medium">View Portfolio</span>
                </a>
              </Button>
            </div>
          </div>
          
          {/* Stats Preview - Mobile Optimized */}
          <div
            className={cn(
              "grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 md:gap-12 max-w-4xl mx-auto px-2 sm:px-4",
              animationClasses.fadeInUp
            )}
            style={{ animationDelay: '400ms' }}
          >
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-1 sm:mb-2">200+</div>
              <div className="text-xs sm:text-sm md:text-base text-foreground/60 font-medium">Projects Delivered</div>
            </div>
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-1 sm:mb-2">7</div>
              <div className="text-xs sm:text-sm md:text-base text-foreground/60 font-medium">Day MVP Launch</div>
            </div>
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-1 sm:mb-2">99%</div>
              <div className="text-xs sm:text-sm md:text-base text-foreground/60 font-medium">Success Rate</div>
            </div>
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-1 sm:mb-2">50+</div>
              <div className="text-xs sm:text-sm md:text-base text-foreground/60 font-medium">Team Experts</div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Hero Visual */}
      <div
        className={cn(
          "absolute bottom-0 right-0 w-full h-full pointer-events-none",
          animationClasses.fadeIn
        )}
        style={{ animationDelay: '500ms' }}
      >
        <HeroVisual />
      </div>
    </section>
  );
} 