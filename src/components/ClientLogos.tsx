"use client";

import React from 'react';
import Image from 'next/image';
import { clients, getFeaturedClients, type Client } from '@/data/clients';
import { cn, animationClasses } from '@/components/lib/utils';
import { useEffect, useRef } from 'react';

interface ClientLogosProps {
  showAll?: boolean;
  className?: string;
}

export default function ClientLogos({ showAll = false, className = "" }: ClientLogosProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const displayClients = showAll ? clients : getFeaturedClients();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.setAttribute('data-visible', 'true');
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className={cn(
        "py-16 bg-white/5 border-y border-white/10",
        animationClasses.fadeInUp,
        className
      )}
    >
      <div className="container mx-auto px-6">
        <div 
          className={cn(
            "text-center mb-12",
            animationClasses.fadeInUp
          )}
          style={{ animationDelay: '0ms' }}
        >
          <h2 className="text-lg font-semibold text-muted-foreground mb-4">
            Trusted by industry leaders
          </h2>
        </div>

        {/* Desktop Grid Layout */}
        <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center">
          {displayClients.map((client, index) => (
            <div
              key={client.id}
              className={cn(
                "group cursor-pointer",
                animationClasses.fadeInUp,
                animationClasses.hoverScale
              )}
              style={{ animationDelay: `${100 + index * 100}ms` }}
            >
              <div className="h-16 w-32 relative flex items-center justify-center p-4 rounded-lg transition-all duration-300 filter grayscale hover:grayscale-0">
                <Image
                  src={client.logoWhite || client.logo}
                  alt={`${client.name} logo`}
                  width={128}
                  height={64}
                  className="object-contain max-w-full max-h-full"
                  loading="lazy"
                  sizes="128px"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Grid Layout */}
        <div className="md:hidden grid grid-cols-2 gap-4">
          {displayClients.slice(0, 4).map((client, index) => (
            <div
              key={client.id}
              className={cn(
                "group cursor-pointer",
                animationClasses.fadeInUp
              )}
              style={{ animationDelay: `${100 + index * 150}ms` }}
            >
              <div className="h-12 w-24 relative flex items-center justify-center p-2 rounded-lg filter grayscale transition-all duration-300 hover:grayscale-0">
                <Image
                  src={client.logoWhite || client.logo}
                  alt={`${client.name} logo`}
                  width={96}
                  height={48}
                  className="object-contain max-w-full max-h-full"
                  loading="lazy"
                  sizes="96px"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 