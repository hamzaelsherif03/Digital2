"use client";

import { Button } from './ui/button';
import { Card } from './ui/card';
import { cn, animationClasses } from './lib/utils';
import { Users, DollarSign, TrendingUp, Shield, Zap, ArrowRight } from 'lucide-react';
import { useEffect, useRef } from 'react';

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
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.setAttribute('data-visible', 'true');
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);
  
  return (
    <section ref={sectionRef} className="py-section bg-white/5">
      <div className="container mx-auto px-container">
        <div className={cn(
          "text-center max-w-4xl mx-auto mb-20",
          animationClasses.fadeInUp
        )}>
          <div
            className={cn(
              "inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary mb-4",
              animationClasses.scaleIn
            )}
            style={{ animationDelay: '0ms' }}
          >
            <Zap className="w-4 h-4" />
            Partner Program
          </div>
          
          <h2
            className={cn(
              "text-4xl md:text-6xl lg:text-7xl font-bold font-headline mb-8 tracking-tight",
              animationClasses.fadeInUp
            )}
            style={{ animationDelay: '100ms' }}
          >
            Join Our
            <span className="block bg-gradient-to-r from-primary via-primary/90 to-primary/70 bg-clip-text text-transparent">
              Affiliate Network
            </span>
          </h2>
          
          <p
            className={cn(
              "text-xl md:text-2xl text-foreground/70 leading-relaxed",
              animationClasses.fadeInUp
            )}
            style={{ animationDelay: '200ms' }}
          >
            Partner with us and earn competitive commissions while helping businesses accelerate their digital transformation.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {affiliateBenefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className={cn(
                animationClasses.fadeInUp,
                animationClasses.hoverScale
              )}
              style={{ animationDelay: `${300 + index * 100}ms` }}
            >
              <Card className="p-8 text-center hover:shadow-lg transition-all duration-300 bg-background/50 backdrop-blur border-primary/10 hover:border-primary/20">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-foreground">
                  {benefit.title}
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  {benefit.description}
                </p>
              </Card>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div
          className={cn(
            "text-center",
            animationClasses.fadeInUp
          )}
          style={{ animationDelay: '700ms' }}
        >
          <h3
            className={cn(
              "text-3xl md:text-4xl font-bold font-headline mb-6",
              animationClasses.fadeInUp
            )}
            style={{ animationDelay: '800ms' }}
          >
            Ready to Start Earning?
          </h3>
          
          <p
            className={cn(
              "text-lg text-foreground/70 mb-8 max-w-2xl mx-auto",
              animationClasses.fadeInUp
            )}
            style={{ animationDelay: '900ms' }}
          >
            Join thousands of successful partners who are already earning with our affiliate program.
          </p>
          
          <div
            className={cn(
              "flex flex-col sm:flex-row gap-4 justify-center",
              animationClasses.fadeInUp
            )}
            style={{ animationDelay: '1000ms' }}
          >
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105"
              asChild
            >
              <a href="/affiliate" className="flex items-center gap-2">
                <span>Apply Now</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary/30 hover:border-primary text-primary hover:bg-primary/10 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105"
              asChild
            >
              <a href="/contact">
                Learn More
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
} 