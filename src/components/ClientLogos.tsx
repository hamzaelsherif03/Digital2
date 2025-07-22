"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { clients, getFeaturedClients, type Client } from '@/data/clients';
import { useAnimationVariants } from '@/components/lib/utils';

interface ClientLogosProps {
  showAll?: boolean;
  className?: string;
}

export default function ClientLogos({ showAll = false, className = "" }: ClientLogosProps) {
  const { fadeInUp, staggerContainer } = useAnimationVariants();
  const displayClients = showAll ? clients : getFeaturedClients();

  return (
    <motion.section 
      className={`py-16 bg-white/5 border-y border-white/10 ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
    >
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-12"
          variants={fadeInUp}
        >
          <h2 className="text-lg font-semibold text-muted-foreground mb-4">
            Trusted by industry leaders
          </h2>
        </motion.div>

        {/* Desktop Grid Layout */}
        <motion.div 
          className="hidden md:grid md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center"
          variants={staggerContainer}
        >
          {displayClients.map((client, index) => (
            <motion.div
              key={client.id}
              className="group cursor-pointer"
              variants={fadeInUp}
              custom={index}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
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
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile Grid Layout */}
        <div className="md:hidden grid grid-cols-2 gap-4">
          {displayClients.slice(0, 4).map((client, index) => (
            <motion.div
              key={client.id}
              className="group cursor-pointer"
              variants={fadeInUp}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="h-12 w-24 relative flex items-center justify-center p-2 rounded-lg filter grayscale">
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
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
} 