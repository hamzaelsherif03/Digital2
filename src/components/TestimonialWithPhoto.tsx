"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Star, Quote } from 'lucide-react';
import { testimonials, getFeaturedTestimonials, type Testimonial } from '@/data/testimonials';
import { useAnimationVariants } from '@/components/lib/utils';

interface TestimonialWithPhotoProps {
  testimonial?: Testimonial;
  showFeaturedOnly?: boolean;
  layout?: 'grid' | 'carousel' | 'single';
  className?: string;
}

export default function TestimonialWithPhoto({ 
  testimonial, 
  showFeaturedOnly = true, 
  layout = 'grid',
  className = "" 
}: TestimonialWithPhotoProps) {
  const { fadeInUp, staggerContainer } = useAnimationVariants();
  
  if (testimonial) {
    return <SingleTestimonial testimonial={testimonial} />;
  }

  const displayTestimonials = showFeaturedOnly ? getFeaturedTestimonials() : testimonials;

  if (layout === 'single' && displayTestimonials.length > 0) {
    return <SingleTestimonial testimonial={displayTestimonials[0]} />;
  }

  return (
    <motion.section 
      className={`py-20 ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
    >
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          variants={fadeInUp}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary mb-4">
            <Quote className="w-4 h-4" />
            Client testimonials
          </div>
          <h2 className="text-3xl md:text-5xl font-bold font-headline mb-4">
            Trusted by<br />
            <span className="text-primary">industry leaders</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Don't just take our word for it. Here's what our clients say about working with DigitalAccel and the results they've achieved.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
        >
          {displayTestimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={testimonial.id} 
              testimonial={testimonial} 
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

// Individual Testimonial Card Component
interface TestimonialCardProps {
  testimonial: Testimonial;
  index?: number;
}

function TestimonialCard({ testimonial, index = 0 }: TestimonialCardProps) {
  const { fadeInUp } = useAnimationVariants();

  const testimonialHover = {
    y: -8,
    scale: 1.02,
    boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
    transition: { duration: 0.3 }
  };

  const starAnimation = {
    hidden: { opacity: 0, scale: 0 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.1 * i,
        type: "spring",
        stiffness: 200,
        damping: 10
      }
    })
  };

  return (
    <motion.div
      variants={fadeInUp}
      custom={index}
      whileHover={testimonialHover}
      className="group"
    >
      <div className="rounded-xl border text-card-foreground shadow-sm bg-white/5 border-white/10 hover:bg-white/10 hover:border-primary/20 transition-all duration-300 p-8 h-full flex flex-col">
        {/* Quote Icon */}
        <div className="relative mb-6">
          <Quote className="w-8 h-8 text-primary/30 absolute -top-2 -left-2" />
        </div>

        {/* Rating Stars */}
        <motion.div 
          className="flex gap-1 mb-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <motion.div
              key={i}
              variants={starAnimation}
              custom={i}
            >
              <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
            </motion.div>
          ))}
        </motion.div>

        {/* Quote Text */}
        <blockquote className="text-foreground/90 leading-relaxed mb-6 flex-grow italic">
          "{testimonial.quote}"
        </blockquote>

        {/* Author Section */}
        <div className="flex items-center gap-4 pt-4 border-t border-white/10">
          {/* Author Photo */}
          <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-primary/20">
            <Image
              src={testimonial.author.photo}
              alt={testimonial.author.name}
              fill
              className="object-cover"
              sizes="48px"
            />
          </div>

          {/* Author Info */}
          <div className="flex-grow">
            <div className="font-semibold text-primary">
              {testimonial.author.name}
            </div>
            <div className="text-sm text-muted-foreground">
              {testimonial.author.title}
            </div>
            <div className="text-sm text-muted-foreground">
              {testimonial.author.company}
            </div>
          </div>

          {/* Company Logo */}
          {testimonial.author.companyLogo && (
            <div className="relative w-8 h-8 opacity-60 group-hover:opacity-100 transition-opacity">
              <Image
                src={testimonial.author.companyLogo}
                alt={`${testimonial.author.company} logo`}
                fill
                className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                sizes="32px"
              />
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

// Single Testimonial Component (for hero sections, etc.)
function SingleTestimonial({ testimonial }: { testimonial: Testimonial }) {
  const { fadeInUp } = useAnimationVariants();

  return (
    <motion.div
      className="max-w-4xl mx-auto text-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
    >
      <div className="relative">
        <Quote className="w-16 h-16 text-primary/20 mx-auto mb-6" />
        
        <blockquote className="text-xl md:text-2xl font-medium text-foreground/90 leading-relaxed mb-8 italic">
          "{testimonial.quote}"
        </blockquote>

        <div className="flex items-center justify-center gap-4">
          <div className="relative w-16 h-16 rounded-full overflow-hidden ring-2 ring-primary/20">
            <Image
              src={testimonial.author.photo}
              alt={testimonial.author.name}
              fill
              className="object-cover"
              sizes="64px"
            />
          </div>
          
          <div className="text-left">
            <div className="font-semibold text-lg text-primary">
              {testimonial.author.name}
            </div>
            <div className="text-muted-foreground">
              {testimonial.author.title}, {testimonial.author.company}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
} 