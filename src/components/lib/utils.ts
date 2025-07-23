import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Optimized animation variants using lighter configurations
export const useAnimationVariants = () => {
  return {
    // Lightweight fade in up animation
    fadeInUp: {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.3, ease: "easeOut" }
    },
    
    // Optimized stagger container
    staggerContainer: {
      initial: {},
      animate: {
        transition: {
          staggerChildren: 0.1,
          ease: "easeOut"
        }
      }
    },
    
    // Lightweight slide in variants
    slideInLeft: {
      initial: { opacity: 0, x: -20 },
      animate: { opacity: 1, x: 0 },
      transition: { duration: 0.3, ease: "easeOut" }
    },
    
    slideInRight: {
      initial: { opacity: 0, x: 20 },
      animate: { opacity: 1, x: 0 },
      transition: { duration: 0.3, ease: "easeOut" }
    },
    
    // Optimized scale animation
    scaleIn: {
      initial: { scale: 0.95, opacity: 0 },
      animate: { scale: 1, opacity: 1 },
      transition: { duration: 0.3, ease: "easeOut" }
    }
  }
}

// CSS-based animation classes (preferred for performance)
export const animationClasses = {
  // Intersection Observer based animations (no JS library needed)
  fadeInUp: "opacity-0 translate-y-4 transition-all duration-300 ease-out data-[visible=true]:opacity-100 data-[visible=true]:translate-y-0",
  fadeIn: "opacity-0 transition-opacity duration-300 ease-out data-[visible=true]:opacity-100",
  slideInLeft: "opacity-0 -translate-x-4 transition-all duration-300 ease-out data-[visible=true]:opacity-100 data-[visible=true]:translate-x-0",
  slideInRight: "opacity-0 translate-x-4 transition-all duration-300 ease-out data-[visible=true]:opacity-100 data-[visible=true]:translate-x-0",
  scaleIn: "opacity-0 scale-95 transition-all duration-300 ease-out data-[visible=true]:opacity-100 data-[visible=true]:scale-100",
  
  // Hover animations
  hoverScale: "transition-transform duration-200 ease-out hover:scale-105",
  hoverLift: "transition-transform duration-200 ease-out hover:-translate-y-1",
  
  // Loading animations
  pulse: "animate-pulse",
  spin: "animate-spin",
  bounce: "animate-bounce"
}

// Lightweight intersection observer hook for scroll animations
export const useScrollAnimation = () => {
  const observeElement = (element: Element) => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.setAttribute('data-visible', 'true')
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )
    
    observer.observe(element)
    return () => observer.unobserve(element)
  }
  
  return { observeElement }
}