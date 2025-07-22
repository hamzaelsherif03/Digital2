"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, ChevronUp, Phone, Mail } from 'lucide-react';
import { Button } from './ui/button';
import { Logo } from './logo';

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

  // Animation variants
  const drawerVariants = {
    closed: {
      x: '100%',
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 40,
      }
    },
    open: {
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 40,
      }
    }
  };

  const backdropVariants = {
    closed: {
      opacity: 0,
      transition: {
        duration: 0.3,
      }
    },
    open: {
      opacity: 1,
      transition: {
        duration: 0.3,
      }
    }
  };

  const menuItemVariants = {
    closed: {
      opacity: 0,
      x: 50,
    },
    open: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.4,
        ease: "easeOut"
      }
    })
  };

  const submenuVariants = {
    closed: {
      height: 0,
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    open: {
      height: 'auto',
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Enhanced Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-md z-40 md:hidden"
            variants={backdropVariants}
            initial="closed"
            animate="open"
            exit="closed"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />

          {/* Enhanced Mobile Navigation Drawer */}
          <motion.div
            className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-background/95 backdrop-blur-xl border-l border-primary/20 shadow-2xl z-50 md:hidden"
            variants={drawerVariants}
            initial="closed"
            animate="open"
            exit="closed"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation menu"
          >
            {/* Enhanced Header */}
            <div className="flex items-center justify-between p-6 border-b border-primary/20 bg-gradient-to-r from-primary/5 to-transparent">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Logo />
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-lg opacity-50" />
                </div>
                <span className="text-lg font-bold font-headline bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
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

            {/* Enhanced Navigation Items */}
            <nav className="flex-1 overflow-y-auto">
              <div className="px-6 py-4">
                <motion.ul 
                  className="space-y-2"
                  initial="closed"
                  animate="open"
                >
                  {navigationItems.map((item, index) => (
                    <motion.li 
                      key={item.name}
                      variants={menuItemVariants}
                      custom={index}
                    >
                      {item.hasDropdown ? (
                        <div>
                          <button
                            onClick={() => toggleExpanded(item.name)}
                            className="flex items-center justify-between w-full p-4 text-left rounded-feature hover:bg-primary/10 transition-all duration-300 min-h-[56px] group"
                            aria-expanded={expandedItems.includes(item.name)}
                            aria-controls={`submenu-${item.name}`}
                          >
                            <div className="flex flex-col items-start">
                              <span className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
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
                          
                          <AnimatePresence>
                            {expandedItems.includes(item.name) && (
                              <motion.div
                                id={`submenu-${item.name}`}
                                variants={submenuVariants}
                                initial="closed"
                                animate="open"
                                exit="closed"
                                className="overflow-hidden"
                              >
                                <ul className="ml-4 mt-2 space-y-1 border-l border-primary/20 pl-4">
                                  {item.children?.map((child, childIndex) => (
                                    <motion.li 
                                      key={child.name}
                                      variants={menuItemVariants}
                                      custom={childIndex + 0.5}
                                    >
                                      <Link
                                        href={child.href}
                                        onClick={handleLinkClick}
                                        className={`block p-4 rounded-feature transition-all duration-300 min-h-[56px] flex flex-col ${
                                          pathname === child.href 
                                            ? 'bg-primary/20 text-primary font-semibold' 
                                            : 'hover:bg-primary/5 hover:text-primary'
                                        }`}
                                      >
                                        <span className="font-medium">{child.name}</span>
                                        {child.description && (
                                          <span className="text-xs text-foreground/60 mt-1">
                                            {child.description}
                                          </span>
                                        )}
                                      </Link>
                                    </motion.li>
                                  ))}
                                </ul>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <Link
                          href={item.href}
                          onClick={handleLinkClick}
                          className={`block p-4 rounded-feature transition-all duration-300 min-h-[56px] flex flex-col ${
                            pathname === item.href 
                              ? 'bg-primary/20 text-primary font-semibold' 
                              : 'hover:bg-primary/5 hover:text-primary'
                          }`}
                        >
                          <span className="font-semibold">{item.name}</span>
                          {item.description && (
                            <span className="text-xs text-foreground/60 mt-1">
                              {item.description}
                            </span>
                          )}
                        </Link>
                      )}
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </nav>

            {/* Enhanced Footer CTA */}
            <motion.div 
              className="p-6 border-t border-primary/20 bg-gradient-to-r from-primary/5 to-transparent"
              variants={menuItemVariants}
              custom={navigationItems.length}
            >
              <div className="space-y-4">
                <Button 
                  asChild 
                  className="w-full h-14 text-lg font-semibold bg-primary hover:bg-primary/90 text-primary-foreground rounded-feature shadow-luxury hover:shadow-luxury-lg transition-all duration-300"
                  size="lg"
                >
                  <Link 
                    href="/contact?utm_source=website&utm_medium=mobile-nav&utm_campaign=conversion&utm_content=mobile-cta"
                    onClick={handleLinkClick}
                  >
                    Schedule Consultation
                  </Link>
                </Button>
                
                {/* Quick Contact Options */}
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="flex-1 h-12 border-primary/20 hover:border-primary hover:bg-primary/5 rounded-feature"
                  >
                    <a 
                      href="tel:+1234567890"
                      onClick={handleLinkClick}
                      className="flex items-center justify-center gap-2"
                    >
                      <Phone className="w-4 h-4" />
                      <span className="text-sm font-medium">Call</span>
                    </a>
                  </Button>
                  
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="flex-1 h-12 border-primary/20 hover:border-primary hover:bg-primary/5 rounded-feature"
                  >
                    <a 
                      href="mailto:hello@digitalaccel.com"
                      onClick={handleLinkClick}
                      className="flex items-center justify-center gap-2"
                    >
                      <Mail className="w-4 h-4" />
                      <span className="text-sm font-medium">Email</span>
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
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