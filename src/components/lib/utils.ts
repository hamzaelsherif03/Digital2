import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { useReducedMotion } from 'framer-motion';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function useAnimationVariants() {
  const shouldReduceMotion = useReducedMotion();

  const fadeInUp = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.5,
        delay: shouldReduceMotion ? 0 : i * 0.1,
      },
    }),
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.5,
      },
    },
  };

  const heroItem = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20, filter: shouldReduceMotion ? 'blur(0px)' : 'blur(10px)' },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: shouldReduceMotion ? 0 : 1.1,
        delay: shouldReduceMotion ? 0 : 0.2 + i * 0.32,
      },
    }),
    show: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: shouldReduceMotion ? 0 : 1.1,
        staggerChildren: shouldReduceMotion ? 0 : 0.32,
      },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.1,
        delayChildren: shouldReduceMotion ? 0 : 0.1,
      },
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.1,
        delayChildren: shouldReduceMotion ? 0 : 0.1,
      },
    },
  };

  return { fadeInUp, heroItem, staggerContainer };
}