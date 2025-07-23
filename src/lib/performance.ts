// Performance monitoring and optimization utilities

export interface PerformanceMetrics {
  FCP?: number;  // First Contentful Paint
  LCP?: number;  // Largest Contentful Paint
  FID?: number;  // First Input Delay
  CLS?: number;  // Cumulative Layout Shift
  TTFB?: number; // Time to First Byte
  INP?: number;  // Interaction to Next Paint
}

// Web Vitals monitoring
export function setupWebVitals() {
  if (typeof window === 'undefined') return;

  // Dynamic import to avoid bundling if not needed
  import('web-vitals').then(({ onCLS, onFCP, onFID, onLCP, onTTFB, onINP }) => {
    onCLS(sendToAnalytics);
    onFCP(sendToAnalytics);
    onFID(sendToAnalytics);
    onLCP(sendToAnalytics);
    onTTFB(sendToAnalytics);
    onINP(sendToAnalytics);
  }).catch(() => {
    // Graceful fallback if web-vitals fails to load
    console.warn('Web Vitals monitoring unavailable');
  });
}

// Send metrics to analytics service
function sendToAnalytics(metric: any) {
  // In production, send to your analytics service
  if (process.env.NODE_ENV === 'development') {
    console.log('📊 Performance Metric:', {
      name: metric.name,
      value: Math.round(metric.value),
      rating: metric.rating,
      delta: metric.delta
    });
  }

  // Example: Send to Google Analytics 4
  if (typeof gtag !== 'undefined') {
    gtag('event', metric.name, {
      custom_parameter_1: Math.round(metric.value),
      custom_parameter_2: metric.rating,
    });
  }
}

// Resource loading performance monitoring
export function monitorResourceLoading() {
  if (typeof window === 'undefined' || !window.PerformanceObserver) return;

  // Monitor resource loading times
  const resourceObserver = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      if (entry.entryType === 'resource') {
        const resource = entry as PerformanceResourceTiming;
        
        // Flag slow resources (>1s)
        if (resource.duration > 1000) {
          console.warn('🐌 Slow resource detected:', {
            name: resource.name,
            duration: Math.round(resource.duration),
            size: resource.transferSize,
          });
        }
      }
    }
  });

  resourceObserver.observe({ entryTypes: ['resource'] });
}

// Critical performance optimizations
export function applyCriticalOptimizations() {
  if (typeof window === 'undefined') return;

  // Preload critical resources
  preloadCriticalResources();
  
  // Setup efficient intersection observer for animations
  setupAnimationObserver();
  
  // Monitor and optimize images
  optimizeImages();
}

// Preload critical resources
function preloadCriticalResources() {
  const criticalResources = [
    // Add critical CSS, fonts, or scripts
    { href: '/fonts/inter-var.woff2', as: 'font', type: 'font/woff2' },
    { href: '/fonts/space-grotesk-var.woff2', as: 'font', type: 'font/woff2' },
  ];

  criticalResources.forEach(resource => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = resource.href;
    link.as = resource.as;
    if (resource.type) link.type = resource.type;
    link.crossOrigin = 'anonymous';
    document.head.appendChild(link);
  });
}

// Global animation observer for performance
let animationObserver: IntersectionObserver | null = null;

function setupAnimationObserver() {
  if (animationObserver) return;

  animationObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const element = entry.target as HTMLElement;
        
        if (entry.isIntersecting) {
          element.setAttribute('data-visible', 'true');
          element.style.animationPlayState = 'running';
        } else {
          // Pause animations for elements out of view to save CPU
          element.style.animationPlayState = 'paused';
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }
  );

  // Auto-observe elements with animation classes
  document.querySelectorAll('[class*="animate-"], [data-animate="true"]').forEach(el => {
    animationObserver!.observe(el);
  });
}

// Image optimization utilities
function optimizeImages() {
  if (typeof window === 'undefined' || !window.IntersectionObserver) return;

  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target as HTMLImageElement;
        
        // Lazy load images
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
        }
        
        // Add loading class for skeleton
        img.classList.add('loading-skeleton');
        
        img.onload = () => {
          img.classList.remove('loading-skeleton');
          imageObserver.unobserve(img);
        };
      }
    });
  });

  // Observe all images with data-src
  document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
  });
}

// Performance budget monitoring
export function checkPerformanceBudget() {
  if (typeof window === 'undefined' || !window.performance) return;

  const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
  
  const budgets = {
    FCP: 1800,  // First Contentful Paint budget: 1.8s
    LCP: 2500,  // Largest Contentful Paint budget: 2.5s
    TTFB: 800,  // Time to First Byte budget: 800ms
    domComplete: 3000, // DOM Complete budget: 3s
  };

  const metrics = {
    FCP: navigation.responseStart - navigation.fetchStart,
    TTFB: navigation.responseStart - navigation.requestStart,
    domComplete: navigation.domComplete - navigation.fetchStart,
  };

  Object.entries(budgets).forEach(([metric, budget]) => {
    const value = metrics[metric as keyof typeof metrics];
    if (value && value > budget) {
      console.warn(`⚠️ Performance budget exceeded for ${metric}: ${Math.round(value)}ms (budget: ${budget}ms)`);
    }
  });
}

// Bundle size monitoring
export function analyzeBundleSize() {
  if (typeof window === 'undefined') return;

  // Analyze loaded resources
  const resources = performance.getEntriesByType('resource');
  const scripts = resources.filter(r => r.name.includes('.js'));
  const styles = resources.filter(r => r.name.includes('.css'));

  const totalJS = scripts.reduce((sum, script) => sum + (script as any).transferSize || 0, 0);
  const totalCSS = styles.reduce((sum, style) => sum + (style as any).transferSize || 0, 0);

  console.log('📦 Bundle Analysis:', {
    'JavaScript': `${(totalJS / 1024).toFixed(1)} KB`,
    'CSS': `${(totalCSS / 1024).toFixed(1)} KB`,
    'Total Scripts': scripts.length,
    'Total Stylesheets': styles.length,
  });

  // Flag large bundles
  if (totalJS > 250000) { // 250KB
    console.warn('⚠️ Large JavaScript bundle detected:', `${(totalJS / 1024).toFixed(1)} KB`);
  }
}

// Export utilities for components
export const performanceUtils = {
  observeElement: (element: Element, callback?: () => void) => {
    if (!animationObserver) setupAnimationObserver();
    animationObserver?.observe(element);
    if (callback) callback();
  },
  
  unobserveElement: (element: Element) => {
    animationObserver?.unobserve(element);
  },
  
  preloadResource: (href: string, as: string, type?: string) => {
    if (typeof document === 'undefined') return;
    
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = href;
    link.as = as;
    if (type) link.type = type;
    document.head.appendChild(link);
  },
  
  measureTiming: (name: string, fn: () => void) => {
    if (typeof performance === 'undefined') return fn();
    
    const start = performance.now();
    fn();
    const end = performance.now();
    console.log(`⏱️ ${name}: ${(end - start).toFixed(2)}ms`);
  }
};

// Initialize performance monitoring
export function initPerformanceMonitoring() {
  if (typeof window === 'undefined') return;

  // Setup core monitoring
  setupWebVitals();
  monitorResourceLoading();
  applyCriticalOptimizations();
  
  // Check budgets after page load
  window.addEventListener('load', () => {
    setTimeout(() => {
      checkPerformanceBudget();
      analyzeBundleSize();
    }, 1000);
  });
}