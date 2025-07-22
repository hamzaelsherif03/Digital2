"use client";

import { useState, useEffect } from 'react';
import { Logo } from './logo';
import { Button } from './ui/button';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from './ui/dropdown-menu';
import Link from 'next/link';
import MobileNav, { HamburgerButton } from './MobileNav';
import { motion } from 'framer-motion';

export default function HeaderNav() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out ${
        scrolled 
          ? 'bg-background/80 backdrop-blur-3xl shadow-2xl shadow-black/20 border-b border-primary/10' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Premium gradient line at bottom when scrolled */}
      <div className={`absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent transition-opacity duration-700 ${
        scrolled ? 'opacity-100' : 'opacity-0'
      }`} />
      
      <div className="container mx-auto px-container py-6">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <motion.div 
            className="flex items-center gap-4"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link href="/" className="flex items-center gap-4 group">
              <div className="relative">
                <Logo />
                <div className="absolute inset-0 bg-primary/30 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700 scale-150" />
              </div>
              <span className="text-2xl font-bold font-headline bg-gradient-to-r from-primary via-primary/90 to-primary/70 bg-clip-text text-transparent group-hover:from-primary group-hover:to-primary transition-all duration-500">
                DigitalAccel
              </span>
            </Link>
          </motion.div>

          {/* Navigation - Apple-style minimal with enhanced effects */}
          <nav className="hidden lg:flex items-center gap-12 text-sm font-medium tracking-wide">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="group relative py-3 px-2 text-foreground/80 hover:text-primary transition-all duration-500">
                  <span className="relative z-10">Accelerators</span>
                  <div className="absolute inset-0 bg-primary/5 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-xl" />
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-primary/50 group-hover:w-full transition-all duration-700" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-background/90 backdrop-blur-3xl border border-primary/20 shadow-2xl shadow-black/20 rounded-feature">
                <DropdownMenuItem asChild>
                  <Link href="/accelerators/mvp-launchpad" className="text-sm hover:text-primary transition-colors duration-300">MVP Launchpad</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/accelerators/scale-up-engine" className="text-sm hover:text-primary transition-colors duration-300">Scale-Up Engine</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/accelerators/enterprise-innovation-sprint" className="text-sm hover:text-primary transition-colors duration-300">Enterprise Innovation Sprint</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            {['Services', 'Pricing', 'Process', 'Insights', 'About', 'Contact'].map((item) => (
              <Link 
                key={item} 
                href={`/${item.toLowerCase().replace(' ', '-')}`} 
                className="group relative py-3 px-2 text-foreground/80 hover:text-primary transition-all duration-500"
              >
                <span className="relative z-10">{item}</span>
                <div className="absolute inset-0 bg-primary/5 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-xl" />
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-primary/50 group-hover:w-full transition-all duration-700" />
              </Link>
            ))}
          </nav>

          {/* CTA Section */}
          <div className="flex items-center gap-6">
            <div className="hidden lg:flex">
              <Button 
                asChild 
                className="relative overflow-hidden group bg-gradient-to-r from-primary/10 to-primary/5 hover:from-primary hover:to-primary/80 border border-primary/30 hover:border-primary text-primary hover:text-primary-foreground backdrop-blur-xl transition-all duration-700 hover:scale-105 hover:shadow-luxury rounded-feature px-8 py-3"
              >
                <Link href="/contact" className="relative z-10 flex items-center gap-2">
                  <span className="relative z-10 font-semibold">Start Accelerating</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700" />
                </Link>
              </Button>
            </div>
            
            {/* Enhanced Mobile Navigation Button */}
            <HamburgerButton 
              isOpen={isMobileNavOpen} 
              setIsOpen={setIsMobileNavOpen} 
            />
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <MobileNav 
        isOpen={isMobileNavOpen} 
        setIsOpen={setIsMobileNavOpen} 
      />
    </motion.header>
  );
} 