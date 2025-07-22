"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, TrendingUp } from 'lucide-react';
import { caseStudies, getFeaturedCaseStudies, type CaseStudy } from '@/data/caseStudies';
import { useAnimationVariants } from '@/components/lib/utils';

interface CaseStudyCardProps {
  caseStudy?: CaseStudy;
  showFeaturedOnly?: boolean;
  layout?: 'grid' | 'carousel' | 'single';
  className?: string;
}

export default function CaseStudyCard({ 
  caseStudy, 
  showFeaturedOnly = true, 
  layout = 'grid',
  className = "" 
}: CaseStudyCardProps) {
  const { fadeInUp, staggerContainer } = useAnimationVariants();
  
  if (caseStudy) {
    return <SingleCaseStudy caseStudy={caseStudy} />;
  }

  const displayCaseStudies = showFeaturedOnly ? getFeaturedCaseStudies() : caseStudies;

  if (layout === 'single' && displayCaseStudies.length > 0) {
    return <SingleCaseStudy caseStudy={displayCaseStudies[0]} />;
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
            <TrendingUp className="w-4 h-4" />
            Success stories
          </div>
          <h2 className="text-3xl md:text-5xl font-bold font-headline mb-4">
            Real results from<br />
            <span className="text-primary">real projects</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            See how we've helped startups and scale-ups achieve their digital transformation goals with measurable results.
          </p>
        </motion.div>

        <motion.div 
          className={`grid gap-8 ${
            layout === 'grid' 
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
              : 'grid-cols-1'
          }`}
          variants={staggerContainer}
        >
          {displayCaseStudies.map((study, index) => (
            <CaseStudyCard 
              key={study.id} 
              caseStudy={study} 
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

// Individual Case Study Card Component
interface SingleCaseStudyProps {
  caseStudy: CaseStudy;
  index?: number;
}

function SingleCaseStudy({ caseStudy, index = 0 }: SingleCaseStudyProps) {
  const { fadeInUp } = useAnimationVariants();

  const cardHover = {
    y: -12,
    scale: 1.02,
    boxShadow: "0 25px 50px rgba(0,0,0,0.2)",
    transition: { duration: 0.4, ease: "easeOut" }
  };

  const imageHover = {
    scale: 1.05,
    transition: { duration: 0.4 }
  };

  const metricAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.5
      }
    })
  };

  return (
    <motion.div
      variants={fadeInUp}
      custom={index}
      whileHover={cardHover}
      className="group"
    >
      <Link href={`/case-studies/${caseStudy.slug}`}>
        <div className="rounded-2xl border text-card-foreground shadow-lg bg-white/5 border-white/10 hover:bg-white/10 hover:border-primary/20 transition-all duration-300 overflow-hidden h-full">
          {/* Case Study Image */}
          <div className="relative h-48 overflow-hidden">
            <motion.div whileHover={imageHover}>
              <Image
                src={caseStudy.image}
                alt={caseStudy.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            
            {/* Client Badge */}
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 bg-primary/90 text-primary-foreground text-sm font-medium rounded-full">
                {caseStudy.client}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <h3 className="text-xl font-bold font-headline mb-3 group-hover:text-primary transition-colors">
              {caseStudy.title}
            </h3>
            
            <p className="text-muted-foreground mb-6 leading-relaxed">
              {caseStudy.preview}
            </p>

            {/* Metrics */}
            <motion.div 
              className="grid grid-cols-3 gap-4 mb-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {caseStudy.metrics.map((metric, i) => (
                <motion.div
                  key={metric.label}
                  variants={metricAnimation}
                  custom={i}
                  className="text-center p-3 rounded-lg bg-white/5 border border-white/10"
                >
                  <div className="text-lg font-bold text-primary mb-1">
                    {metric.value}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {metric.label}
                  </div>
                  <div className="text-xs text-green-400 mt-1">
                    {metric.improvement}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Read More Link */}
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">
                Read full case study
              </span>
              <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

// Compact Case Study Component (for sidebars, etc.)
interface CompactCaseStudyProps {
  caseStudy: CaseStudy;
}

export function CompactCaseStudy({ caseStudy }: CompactCaseStudyProps) {
  return (
    <Link href={`/case-studies/${caseStudy.slug}`}>
      <div className="group flex gap-4 p-4 rounded-lg hover:bg-white/5 transition-colors">
        <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
          <Image
            src={caseStudy.image}
            alt={caseStudy.title}
            fill
            className="object-cover"
            sizes="64px"
          />
        </div>
        
        <div className="flex-grow">
          <h4 className="font-semibold group-hover:text-primary transition-colors line-clamp-2">
            {caseStudy.title}
          </h4>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {caseStudy.preview}
          </p>
          <div className="flex gap-2 mt-2">
            {caseStudy.metrics.slice(0, 2).map((metric) => (
              <span key={metric.label} className="text-xs text-primary font-medium">
                {metric.value} {metric.improvement}
              </span>
            ))}
          </div>
        </div>

        <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0 mt-2" />
      </div>
    </Link>
  );
}

// Metrics Display Component
interface MetricsDisplayProps {
  metrics: CaseStudy['metrics'];
  layout?: 'horizontal' | 'vertical';
}

export function MetricsDisplay({ metrics, layout = 'horizontal' }: MetricsDisplayProps) {
  const { fadeInUp, staggerContainer } = useAnimationVariants();

  return (
    <motion.div 
      className={`grid gap-4 ${
        layout === 'horizontal' 
          ? 'grid-cols-1 md:grid-cols-3' 
          : 'grid-cols-1'
      }`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
    >
      {metrics.map((metric, index) => (
        <motion.div
          key={metric.label}
          variants={fadeInUp}
          custom={index}
          className="text-center p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
        >
          <div className="text-3xl font-bold text-primary mb-2">
            {metric.value}
          </div>
          <div className="text-sm font-medium text-foreground mb-1">
            {metric.label}
          </div>
          <div className="text-xs text-green-400 capitalize">
            {metric.improvement}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
} 