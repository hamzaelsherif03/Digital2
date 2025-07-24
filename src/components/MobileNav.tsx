"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, ChevronUp, Phone, Mail } from 'lucide-react';
import { Button } from './ui/button';
import { Logo } from './logo';
import { cn } from './lib/utils';

interface MobileNavProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const navigationItems = [
  {
    name: 'Accelerators',
    href: '/accelerators',
    hasDropdown: true,
    children: [
      { name: 'MVP Launchpad', href: '/accelerators/mvp-launchpad', description: 'Launch your MVP in 7 days' },
      { name: 'Scale-Up Engine', href: '/accelerators/scale-up-engine', description: 'Scale your business rapidly' },
      { name: 'Enterprise Innovation Sprint', href: '/accelerators/enterprise-innovation-sprint', description: 'Enterprise digital transformation' },
    ]
  },
  { name: 'Services', href: '/services', description: 'Our digital acceleration services' },
  { name: 'Pricing', href: '/pricing', description: 'Transparent pricing plans' },
  { name: 'Our Process', href: '/process', description: 'How we accelerate your business' },
  { name: 'Insights', href: '/insights', description: 'Latest industry insights' },
  { name: 'About Us', href: '/about', description: 'Learn about our team' },
  { name: 'Careers', href: '/careers', description: 'Join our team' },
  { name: 'Contact', href: '/contact', description: 'Get in touch with us' },
  { name: 'Partner Program', href: '/affiliate', description: 'Become an affiliate partner' },
];

export default function MobileNav({ isOpen, setIsOpen }: MobileNavProps) {
  const [expandedItems, setExpandedItems] = useState<string[]>([]);
  const pathname = usePathname();

  // Close mobile nav when route changes
  useEffect(() => {
    setIsOpen(false);
    setExpandedItems([]);
  }, [pathname, setIsOpen]);

  // Handle body scroll lock when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Handle escape key to close menu
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, setIsOpen]);

  const toggleExpanded = (itemName: string) => {
    setExpandedItems(prev => 
      prev.includes(itemName) 
        ? prev.filter(name => name !== itemName)
        : [...prev, itemName]
    );
  };

  const handleLinkClick = () => {
    setIsOpen(false);
    setExpandedItems([]);
  };

  // CSS classes for optimized animations
  const drawerClasses = cn(
    "fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-background border-l shadow-lg transition-transform duration-300 ease-out",
    isOpen ? "translate-x-0" : "translate-x-full"
  );

  const backdropClasses = cn(
    "fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300",
    isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
  );

  if (!isOpen) return null;

  return (
    <div className="md:hidden">
      {/* Backdrop */}
      <div
        className={backdropClasses}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Navigation Drawer */}
      <div
        className={drawerClasses}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-primary/20 bg-background/95 backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <div className="relative">
              <Logo />
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-lg opacity-50" />
            </div>
            <span className="text-base sm:text-lg font-bold font-headline bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              DigitalAccel
            </span>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(false)}
            className="h-12 w-12 rounded-feature hover:bg-primary/10 hover:text-primary transition-all duration-300"
            aria-label="Close navigation menu"
          >
            <X className="w-6 h-6" />
          </Button>
        </div>

        {/* Navigation Items */}
        <nav className="flex-1 overflow-y-auto bg-background/95 backdrop-blur-xl">
          <div className="px-4 sm:px-6 py-4">
            <ul className="space-y-2">
              {navigationItems.map((item, index) => (
                <li 
                  key={item.name}
                  className={cn(
                    "opacity-0 translate-x-4 transition-all duration-300 ease-out",
                    isOpen && "opacity-100 translate-x-0"
                  )}
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  {item.hasDropdown ? (
                    <div>
                      <button
                        onClick={() => toggleExpanded(item.name)}
                        className="flex items-center justify-between w-full p-3 sm:p-4 text-left rounded-feature hover:bg-primary/10 transition-all duration-300 min-h-[48px] sm:min-h-[56px] group"
                        aria-expanded={expandedItems.includes(item.name)}
                        aria-controls={`submenu-${item.name}`}
                      >
                        <div className="flex flex-col items-start">
                          <span className="text-sm sm:text-base font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                            {item.name}
                          </span>
                          {item.description && (
                            <span className="text-xs text-foreground/60 mt-1">
                              {item.description}
                            </span>
                          )}
                        </div>
                        {expandedItems.includes(item.name) ? (
                          <ChevronUp className="w-5 h-5 text-primary transition-transform duration-300" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-foreground/60 group-hover:text-primary transition-all duration-300" />
                        )}
                      </button>
                      
                      {/* Submenu */}
                      <div
                        id={`submenu-${item.name}`}
                        className={cn(
                          "overflow-hidden transition-all duration-300 ease-in-out",
                          expandedItems.includes(item.name) 
                            ? "max-h-96 opacity-100" 
                            : "max-h-0 opacity-0"
                        )}
                      >
                        <ul className="ml-4 mt-2 space-y-1">
                          {item.children?.map((child, childIndex) => (
                            <li key={child.name}>
                              <Link
                                href={child.href}
                                onClick={handleLinkClick}
                                className={cn(
                                  "flex flex-col p-3 rounded-feature hover:bg-primary/5 transition-all duration-300 min-h-[44px] group",
                                  pathname === child.href && "bg-primary/10 text-primary"
                                )}
                              >
                                <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                                  {child.name}
                                </span>
                                <span className="text-xs text-foreground/60 mt-1">
                                  {child.description}
                                </span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={handleLinkClick}
                      className={cn(
                        "flex flex-col p-3 sm:p-4 rounded-feature hover:bg-primary/10 transition-all duration-300 min-h-[48px] sm:min-h-[56px] group",
                        pathname === item.href && "bg-primary/10 text-primary"
                      )}
                    >
                      <span className="text-sm sm:text-base font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                        {item.name}
                      </span>
                      {item.description && (
                        <span className="text-xs text-foreground/60 mt-1">
                          {item.description}
                        </span>
                      )}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {/* Enhanced Footer */}
        <div className="border-t border-primary/20 p-4 sm:p-6 bg-background/95 backdrop-blur-xl">
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                asChild
                size="sm"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold transition-all duration-300 hover:scale-105 flex-1"
              >
                <Link href="/contact" onClick={handleLinkClick}>
                  <Phone className="w-4 h-4 mr-2" />
                  Book Consultation
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="sm"
                className="border-primary/30 hover:bg-primary/10 hover:border-primary transition-all duration-300 hover:scale-105 flex-1"
              >
                <Link href="/contact" onClick={handleLinkClick}>
                  <Mail className="w-4 h-4 mr-2" />
                  Email Us
                </Link>
              </Button>
            </div>
            <div className="text-center">
              <p className="text-xs text-foreground/60">
                Ready to accelerate your business?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Enhanced Hamburger Menu Button Component
export function HamburgerButton({ isOpen, setIsOpen }: MobileNavProps) {
  const hamburgerVariants = {
    closed: {
      rotate: 0,
    },
    open: {
      rotate: 180,
    }
  };

  const topLineVariants = {
    closed: {
      rotate: 0,
      translateY: 0,
    },
    open: {
      rotate: 45,
      translateY: 6,
    }
  };

  const middleLineVariants = {
    closed: {
      opacity: 1,
    },
    open: {
      opacity: 0,
    }
  };

  const bottomLineVariants = {
    closed: {
      rotate: 0,
      translateY: 0,
    },
    open: {
      rotate: -45,
      translateY: -6,
    }
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setIsOpen(!isOpen)}
      className="h-12 w-12 md:hidden bg-primary/10 hover:bg-primary/20 border border-primary/20 hover:border-primary/40 rounded-feature transition-all duration-300 group"
      aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
      aria-expanded={isOpen}
      aria-controls="mobile-navigation"
    >
      <motion.div
        className="w-6 h-6 flex flex-col justify-center items-center"
        variants={hamburgerVariants}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        transition={{ duration: 0.3 }}
      >
        <motion.span
          className="w-6 h-0.5 bg-primary mb-1.5 rounded-full group-hover:bg-primary/80 transition-colors duration-300"
          variants={topLineVariants}
          transition={{ duration: 0.3 }}
        />
        <motion.span
          className="w-6 h-0.5 bg-primary mb-1.5 rounded-full group-hover:bg-primary/80 transition-colors duration-300"
          variants={middleLineVariants}
          transition={{ duration: 0.3 }}
        />
        <motion.span
          className="w-6 h-0.5 bg-primary rounded-full group-hover:bg-primary/80 transition-colors duration-300"
          variants={bottomLineVariants}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </Button>
  );
} 