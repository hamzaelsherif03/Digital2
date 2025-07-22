# DigitalAccel Website Enhancement Plan
*Comprehensive improvement roadmap for Series A startup presentation*

## Overview
This document outlines the strategic enhancement plan for DigitalAccel's website, focusing on conversion optimization, professional presentation, and competitive positioning. All improvements maintain the existing brand identity while elevating the user experience to enterprise standards.

---

## 🚨 Phase 1: Critical Fixes (Weeks 1-2)
*Priority: URGENT - Blocking conversions*

### 1.1 Missing Contact Page Implementation
**Status**: ❌ Referenced in navigation but doesn't exist
**Impact**: High - Primary conversion blocker
**Effort**: Medium

**Tasks:**
- [ ] Create `/src/app/contact/page.tsx`
- [ ] Design contact form with fields: Name, Email, Company, Project Type, Budget, Message
- [ ] Implement form validation using React Hook Form
- [ ] Set up email integration (EmailJS or similar)
- [ ] Add contact information and office details
- [ ] Include calendar booking widget for discovery calls
- [ ] Implement form submission success/error states

**UI/UX Implementation Details:**

**Layout & Placement:**
- Hero section: Full-width background with centered form (max-width: 800px)
- Two-column layout on desktop: Contact form (60%) + Contact info (40%)
- Mobile: Single column, stacked layout
- Breadcrumb navigation: Home > Contact

**Visual Design:**
- Background: Subtle gradient overlay on dark theme
- Form container: `bg-white/5 border border-white/10` with `rounded-xl`
- Input fields: Consistent with existing design system
- Primary CTA button: `bg-primary text-primary-foreground` with hover effects

**Animations & Interactions:**
```typescript
// Form entrance animation
const formVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
}

// Input focus animations
const inputFocus = {
  scale: 1.02,
  transition: { duration: 0.2 }
}

// Submit button states
const submitStates = {
  idle: { scale: 1 },
  loading: { scale: 0.95 },
  success: { scale: 1.05, backgroundColor: "#10B981" }
}
```

**Form UX Flow:**
1. Progressive disclosure: Basic fields → Advanced fields (on expand)
2. Real-time validation with inline error messages
3. Smart field suggestions (company domain detection)
4. Multi-step form for complex projects:
   - Step 1: Contact info
   - Step 2: Project details  
   - Step 3: Timeline & budget
5. Success state: Animated checkmark + next steps

**Micro-interactions:**
- Input field elevation on focus (`shadow-lg`)
- Label float animation on focus
- Character count for message field
- Smart autofill suggestions
- Smooth error state transitions (shake animation)

**Acceptance Criteria:**
- Contact page loads from navigation
- Form submits successfully to email
- Validation prevents invalid submissions
- Mobile-responsive design
- Matches existing design system
- Smooth animations throughout user journey

### 1.2 Non-Functional CTA Repairs
**Status**: ❌ Multiple buttons link to "#"
**Impact**: High - Lost conversion opportunities
**Effort**: Low

**Current Issues:**
- Hero "Start Building" button → `href="#"`
- Hero "See Timeline" button → `href="#"`
- Pricing "Start Sprint" buttons → `href="#"`
- Multiple other CTAs throughout site

**Tasks:**
- [ ] Update Hero "Start Building" → `/contact`
- [ ] Update Hero "See Timeline" → `/process`
- [ ] Update all pricing CTAs → `/contact?package=sprint|marathon|enterprise`
- [ ] Update footer service links to functional pages
- [ ] Add tracking parameters to all CTA links
- [ ] Test all button functionality

### 1.3 Mobile Navigation Implementation
**Status**: ❌ Missing hamburger menu
**Impact**: High - Mobile users can't navigate
**Effort**: Medium

**Tasks:**
- [ ] Create mobile hamburger menu component
- [ ] Implement slide-out navigation drawer
- [ ] Add mobile-optimized menu items
- [ ] Ensure touch-friendly interaction targets (44px minimum)
- [ ] Add smooth animations for open/close
- [ ] Test across all mobile devices

**UI/UX Implementation Details:**

**Hamburger Menu Design:**
- Position: Top-right corner (aligned with desktop nav)
- Size: 44px x 44px touch target (24px icon inside)
- Icon: Three-line hamburger with smooth transform to X
- Color: `text-foreground` with `hover:text-primary` transition

**Slide-out Navigation:**
```typescript
// Drawer animation variants
const drawerVariants = {
  closed: {
    x: "100%",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  },
  open: {
    x: 0,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
}

// Overlay backdrop
const backdropVariants = {
  closed: { opacity: 0 },
  open: { opacity: 1 }
}
```

**Navigation Layout:**
- Full-height drawer (100vh)
- Width: 280px on mobile, 320px on tablet
- Background: `bg-background/95 backdrop-blur-xl`
- Border: `border-l border-white/10`
- Z-index: 50 (above header)

**Menu Item Design:**
- Vertical spacing: 16px between items
- Touch targets: 44px height minimum
- Typography: `text-lg font-medium`
- Hover state: `bg-white/5` background
- Active state: `text-primary bg-primary/10`

**Stagger Animation for Menu Items:**
```typescript
const menuItemVariants = {
  closed: { opacity: 0, x: 20 },
  open: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.3
    }
  })
}
```

**Accessibility Features:**
- Focus trap within open drawer
- Escape key closes drawer
- ARIA labels for screen readers
- High contrast focus indicators
- Reduced motion support

### 1.4 Essential SEO Fixes
**Status**: ⚠️ Basic implementation, missing advanced features
**Impact**: Medium - Organic discovery
**Effort**: Low

**Tasks:**
- [ ] Add Open Graph meta tags to all pages
- [ ] Implement Twitter Card meta tags
- [ ] Add structured data (JSON-LD) for organization
- [ ] Create sitemap.xml
- [ ] Add robots.txt
- [ ] Implement canonical URLs
- [ ] Add meta descriptions to all pages

---

## 🎯 Phase 2: Professional Enhancement (Weeks 3-8)
*Priority: HIGH - Professional credibility*

### 2.1 Social Proof & Trust Signals
**Status**: ⚠️ Generic testimonials, no client logos
**Impact**: High - Credibility and conversion
**Effort**: Medium

**Tasks:**
- [ ] Design client logo showcase section
- [ ] Create testimonial component with photos
- [ ] Add case study preview cards
- [ ] Implement security badges (SSL, privacy, etc.)
- [ ] Add team photos and credentials
- [ ] Create "Featured In" media section
- [ ] Add client success metrics counter

**Components to Create:**
```
/components/ClientLogos.tsx
/components/TestimonialWithPhoto.tsx
/components/CaseStudyCard.tsx
/components/SecurityBadges.tsx
/components/TeamSection.tsx
```

**UI/UX Implementation Details:**

**Client Logos Section:**
```typescript
// Logo carousel animation
const logoAnimation = {
  x: [0, -100],
  transition: {
    x: {
      repeat: Infinity,
      repeatType: "loop",
      duration: 20,
      ease: "linear",
    },
  },
}
```

**Placement:** After hero section, before services
**Layout:** Horizontal scrolling marquee on mobile, grid on desktop
**Design:** 
- Logo container: `h-16 w-32` grayscale filter with hover color
- Background: `bg-white/5` section with subtle border
- Typography: "Trusted by industry leaders" headline

**Enhanced Testimonials:**
**Layout Design:**
- Grid: 1 column mobile, 2 columns tablet, 3 columns desktop
- Card design: `bg-white/5 border border-white/10 rounded-xl p-8`
- Photo: 64px circular avatar, top-left of card
- Quote: Large quote marks, italic text
- Attribution: Name, title, company logo

**Hover Effects:**
```typescript
const testimonialHover = {
  y: -8,
  scale: 1.02,
  boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
  transition: { duration: 0.3 }
}
```

**Case Study Cards:**
**Placement:** Dedicated section or sidebar on service pages
**Design Specs:**
- Card size: 360px x 240px (16:9 aspect ratio for preview image)
- Overlay gradient: `bg-gradient-to-t from-black/80 to-transparent`
- CTA: "View Case Study" button with arrow icon
- Metrics: Large numbers with descriptions (e.g., "300% Growth")

**Security Badges:**
**Placement:** Footer + contact page
**Layout:** Horizontal row of badges
**Badges Include:**
- SSL Certificate icon
- Privacy Policy shield
- GDPR Compliance
- ISO certification (if applicable)
- Security audit badge

**Animation:**
```typescript
const badgeHover = {
  scale: 1.1,
  transition: { type: "spring", stiffness: 400, damping: 10 }
}
```

### 2.2 Content Management System
**Status**: ❌ Static content only
**Impact**: Medium - Content marketing capability
**Effort**: High

**Tasks:**
- [ ] Implement blog functionality in `/insights`
- [ ] Create MDX support for rich content
- [ ] Design blog post template
- [ ] Add author profiles system
- [ ] Implement content categorization
- [ ] Add search functionality
- [ ] Create RSS feed

**File Structure:**
```
/src/content/
  /blog/
    /posts/
  /case-studies/
  /resources/
/src/components/blog/
  PostCard.tsx
  PostDetail.tsx
  AuthorBio.tsx
```

### 2.3 Advanced Lead Capture
**Status**: ⚠️ Basic email collection only
**Impact**: High - Lead qualification
**Effort**: Medium

**Tasks:**
- [ ] Create multi-step project questionnaire
- [ ] Implement progressive profiling forms
- [ ] Add lead scoring based on responses
- [ ] Create downloadable resources (guides, checklists)
- [ ] Implement email sequence automation
- [ ] Add calendar integration for bookings

### 2.4 Performance Optimization
**Status**: ⚠️ Good foundation, needs optimization
**Impact**: Medium - User experience and SEO
**Effort**: Medium

**Tasks:**
- [ ] Implement Next.js Image optimization
- [ ] Add lazy loading for components
- [ ] Optimize bundle splitting
- [ ] Implement service worker for caching
- [ ] Add CDN configuration
- [ ] Optimize font loading strategy
- [ ] Implement critical CSS inlining

---

## 🚀 Phase 3: Innovation & Growth (Months 3-6)
*Priority: MEDIUM - Competitive advantage*

### 3.1 Interactive Project Builder
**Status**: ❌ New feature
**Impact**: High - Differentiation and lead qualification
**Effort**: High

**Vision**: Allow prospects to configure their project requirements and get instant pricing estimates.

**Tasks:**
- [ ] Design project configuration flow
- [ ] Create interactive form components
- [ ] Implement pricing calculation engine
- [ ] Add real-time estimate updates
- [ ] Create project summary generation
- [ ] Integrate with CRM system
- [ ] Add save/share functionality

**Components:**
```
/components/ProjectBuilder/
  ConfigurationFlow.tsx
  PricingCalculator.tsx
  RequirementsForm.tsx
  ProjectSummary.tsx
  SavedProjects.tsx
```

**UI/UX Implementation Details:**

**Multi-Step Flow Design:**
```typescript
// Step progression animation
const stepTransition = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -50 },
  transition: { duration: 0.4, ease: "easeInOut" }
}

// Progress indicator
const progressVariants = {
  initial: { width: 0 },
  animate: (progress) => ({
    width: `${progress}%`,
    transition: { duration: 0.6, ease: "easeOut" }
  })
}
```

**Step 1: Project Type Selection**
- Layout: Card-based selection grid (2x2 on mobile, 3x2 on desktop)
- Cards: `200px x 150px` with icon, title, description
- Selection state: `border-primary bg-primary/10` with checkmark
- Animations: Stagger entrance, hover scale (1.05)

**Step 2: Feature Configuration**
- Layout: Collapsible feature categories
- Toggle switches: Custom styled with smooth transitions
- Price impact: Real-time updates with number counting animation
- Visual feedback: Feature adds/removes with slide animations

**Step 3: Timeline & Budget**
- Slider components: Custom styled range inputs
- Budget visualization: Progress bar with color coding
- Timeline: Interactive calendar component
- Dependencies: Visual connections between related features

**Real-time Pricing Display:**
```typescript
// Price counter animation
const priceCounter = {
  type: "spring",
  stiffness: 100,
  damping: 15,
  duration: 0.8
}

// Pricing breakdown
const breakdownItems = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1 }
  })
}
```

**Sticky Sidebar Summary:**
- Position: Right sidebar on desktop, bottom sheet on mobile
- Content: Selected features, price breakdown, next steps
- CTA: "Get Started" button with loading states
- Save functionality: "Save Configuration" with user account integration

**Mobile Optimization:**
- Swipe gestures for step navigation
- Bottom sheet for summary (drag to expand)
- Touch-optimized selection areas
- Reduced cognitive load per step

### 3.2 Client Portal Preview
**Status**: ❌ New feature
**Impact**: Medium - Trust building and differentiation
**Effort**: High

**Tasks:**
- [ ] Create demo client dashboard
- [ ] Show project progress visualization
- [ ] Add communication timeline mockup
- [ ] Implement file sharing interface
- [ ] Create project milestone tracker
- [ ] Add team collaboration preview

### 3.3 Advanced Analytics & Personalization
**Status**: ❌ Basic tracking only
**Impact**: Medium - Conversion optimization
**Effort**: Medium

**Tasks:**
- [ ] Implement advanced event tracking
- [ ] Add user behavior analytics
- [ ] Create A/B testing framework
- [ ] Implement dynamic content personalization
- [ ] Add conversion funnel analysis
- [ ] Create automated optimization triggers

### 3.4 Developer Community Features
**Status**: ❌ New initiative
**Impact**: Medium - Brand building and lead generation
**Effort**: High

**Tasks:**
- [ ] Create developer resource section
- [ ] Add code snippet sharing
- [ ] Implement technical blog content
- [ ] Create API documentation preview
- [ ] Add developer newsletter signup
- [ ] Implement community forum

---

## 🔧 Technical Debt & Improvements

### Code Quality Enhancements
- [ ] Add comprehensive TypeScript types
- [ ] Implement error boundary components
- [ ] Add unit testing with Jest
- [ ] Implement E2E testing with Playwright
- [ ] Add component documentation with Storybook
- [ ] Set up automated code quality checks

### Security Enhancements
- [ ] Implement Content Security Policy
- [ ] Add rate limiting for forms
- [ ] Implement CSRF protection
- [ ] Add input sanitization
- [ ] Set up security headers
- [ ] Implement data encryption for sensitive forms

### Accessibility Improvements
- [ ] Complete WCAG 2.1 AA compliance audit
- [ ] Add screen reader testing
- [ ] Implement skip navigation links
- [ ] Add keyboard navigation indicators
- [ ] Test with accessibility tools
- [ ] Add accessibility statement page

---

## 📊 Success Metrics & KPIs

### Conversion Metrics
- **Contact Form Submissions**: Target 300% increase
- **Discovery Call Bookings**: Track booking rates
- **Email Signups**: Target 200% increase
- **Resource Downloads**: Track engagement levels

### User Experience Metrics
- **Page Load Speed**: <2s mobile, <1s desktop
- **Bounce Rate**: Target 25% reduction
- **Session Duration**: Target 40% increase
- **Pages per Session**: Target 60% increase

### Technical Metrics
- **Core Web Vitals**: All green scores
- **Accessibility Score**: 95+ Lighthouse score
- **SEO Score**: 90+ Lighthouse score
- **Error Rate**: <0.1% JavaScript errors

### Business Metrics
- **Lead Quality Score**: Implement scoring system
- **Customer Acquisition Cost**: Track per channel
- **Conversion Rate**: Overall site conversion
- **Revenue Attribution**: Track leads to revenue

---

## 🎨 Comprehensive UI/UX Guidelines

### Animation Standards

**Entrance Animations:**
```typescript
// Standard fade in up for content sections
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
}

// Stagger container for multiple elements
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
}

// Hero elements with blur effect
const heroAnimation = {
  hidden: { 
    opacity: 0, 
    y: 20, 
    filter: "blur(10px)" 
  },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)",
    transition: { duration: 1.1, delay: 0.2 }
  }
}
```

**Interaction Animations:**
```typescript
// Button hover states
const buttonHover = {
  scale: 1.03,
  boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
  transition: { duration: 0.2 }
}

// Card hover effects
const cardHover = {
  y: -8,
  scale: 1.02,
  boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
  transition: { duration: 0.3 }
}

// Loading states
const loadingSpinner = {
  rotate: 360,
  transition: {
    duration: 1,
    repeat: Infinity,
    ease: "linear"
  }
}
```

### Typography Hierarchy

**Headlines:**
```css
/* H1 - Page titles */
.text-display {
  font-size: clamp(2.5rem, 8vw, 4.5rem);
  font-family: var(--font-space-grotesk);
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -0.02em;
}

/* H2 - Section titles */
.text-heading {
  font-size: clamp(1.875rem, 5vw, 3rem);
  font-family: var(--font-space-grotesk);
  font-weight: 700;
  line-height: 1.2;
}

/* H3 - Subsection titles */
.text-subheading {
  font-size: clamp(1.25rem, 3vw, 1.5rem);
  font-family: var(--font-space-grotesk);
  font-weight: 600;
  line-height: 1.3;
}
```

**Body Text:**
```css
/* Large body text */
.text-lg {
  font-size: 1.125rem;
  line-height: 1.7;
  font-family: var(--font-inter);
}

/* Regular body text */
.text-base {
  font-size: 1rem;
  line-height: 1.6;
  font-family: var(--font-inter);
}

/* Small text */
.text-sm {
  font-size: 0.875rem;
  line-height: 1.5;
  font-family: var(--font-inter);
}
```

### Spacing System

**Container Specifications:**
```css
/* Section padding */
.section-padding {
  padding: 5rem 0; /* 80px */
}

.section-padding-sm {
  padding: 3rem 0; /* 48px */
}

/* Container max-widths */
.container-sm { max-width: 640px; }
.container-md { max-width: 768px; }
.container-lg { max-width: 1024px; }
.container-xl { max-width: 1280px; }
.container-2xl { max-width: 1536px; }
```

**Component Spacing:**
```css
/* Card internal padding */
.card-padding-sm { padding: 1.5rem; }
.card-padding-md { padding: 2rem; }
.card-padding-lg { padding: 2.5rem; }

/* Element spacing */
.space-section { margin-bottom: 3rem; }
.space-element { margin-bottom: 1.5rem; }
.space-tight { margin-bottom: 0.75rem; }
```

### Color Usage Guidelines

**Background Variations:**
```css
/* Primary backgrounds */
.bg-primary-subtle { background: hsl(var(--primary) / 0.05); }
.bg-primary-muted { background: hsl(var(--primary) / 0.1); }

/* Card backgrounds */
.bg-card-subtle { background: hsl(var(--card) / 0.5); }
.bg-card-elevated { background: hsl(var(--card) / 0.8); }

/* Overlay backgrounds */
.bg-overlay { background: hsl(var(--background) / 0.95); }
.bg-overlay-dark { background: hsl(var(--background) / 0.8); }
```

**Border Styles:**
```css
.border-subtle { border-color: hsl(var(--border) / 0.5); }
.border-standard { border-color: hsl(var(--border)); }
.border-emphasis { border-color: hsl(var(--primary) / 0.3); }
```

### Component Design Patterns

**Card Components:**
```typescript
// Standard card props
interface CardProps {
  variant?: 'default' | 'elevated' | 'outline';
  padding?: 'sm' | 'md' | 'lg';
  hover?: boolean;
  className?: string;
}

// Card styles
const cardVariants = {
  default: "bg-white/5 border border-white/10",
  elevated: "bg-white/10 border border-white/20 shadow-lg",
  outline: "border-2 border-primary/20 bg-transparent"
}
```

**Button System:**
```typescript
// Button size specifications
const buttonSizes = {
  sm: "h-8 px-3 text-sm",
  md: "h-10 px-4 text-sm", 
  lg: "h-11 px-8 text-base",
  xl: "h-12 px-10 text-lg"
}

// Icon button specifications
const iconButton = {
  sm: "h-8 w-8",
  md: "h-10 w-10",
  lg: "h-11 w-11"
}
```

### Responsive Breakpoints

**Design System Breakpoints:**
```typescript
const breakpoints = {
  xs: '475px',    // Small phones
  sm: '640px',    // Large phones
  md: '768px',    // Tablets
  lg: '1024px',   // Small laptops
  xl: '1280px',   // Large laptops
  '2xl': '1536px' // Desktops
}
```

**Component Responsive Patterns:**
```css
/* Grid responsive patterns */
.grid-responsive-2 {
  grid-template-columns: 1fr;
}
@media (min-width: 768px) {
  .grid-responsive-2 {
    grid-template-columns: repeat(2, 1fr);
  }
}

.grid-responsive-3 {
  grid-template-columns: 1fr;
}
@media (min-width: 768px) {
  .grid-responsive-3 {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (min-width: 1024px) {
  .grid-responsive-3 {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

### Accessibility Implementation

**Focus Management:**
```css
/* Focus styles */
.focus-ring {
  @apply focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background;
}

/* High contrast mode support */
@media (prefers-contrast: high) {
  .border-subtle {
    border-width: 2px;
  }
}
```

**Motion Preferences:**
```typescript
// Respect reduced motion preference
const useReducedMotion = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
  }, []);
  
  return prefersReducedMotion;
};
```

---

## 🛠️ Implementation Guidelines

### Development Standards
- Use TypeScript for all new code
- Follow existing component patterns
- Maintain design system consistency
- Write comprehensive tests for new features
- Document all new components

### Design Principles
- Maintain existing color palette and typography
- Ensure mobile-first responsive design
- Follow accessibility best practices
- Keep animations subtle and purposeful
- Prioritize performance in all decisions

### Content Strategy
- Maintain professional, technical tone
- Focus on results and specific outcomes
- Use data-driven language where possible
- Keep copy concise and scannable
- Optimize for search intent

---

## 📅 Timeline Summary

| Phase | Duration | Budget Range | Key Deliverables |
|-------|----------|--------------|-----------------|
| Phase 1 | 2 weeks | $8K - $12K | Contact page, mobile nav, CTA fixes |
| Phase 2 | 6 weeks | $15K - $25K | Social proof, CMS, lead capture |
| Phase 3 | 12 weeks | $25K - $40K | Project builder, portal, analytics |

### Resource Requirements
- **Developer**: Full-stack Next.js/React developer
- **Designer**: UI/UX designer with startup experience
- **Content**: Technical content strategist
- **Marketing**: Growth marketing specialist (Phase 3)

---

## 🎯 Immediate Next Steps

1. **Week 1**: Implement contact page and repair critical CTAs
2. **Week 2**: Complete mobile navigation and SEO basics
3. **Week 3**: Begin social proof integration and content planning
4. **Week 4**: Start performance optimization and analytics setup

### Risk Mitigation
- Maintain staging environment for all changes
- Implement feature flags for gradual rollouts
- Keep rollback procedures documented
- Test thoroughly on all devices and browsers

---

## 💻 Implementation Code Examples

### Contact Form Component Structure
```typescript
// /src/app/contact/page.tsx
'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select } from '@/components/ui/select';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Form submission logic
    await submitForm(formData);
    
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold font-headline mb-6">
            Let's Build Something Amazing Together
          </h1>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Ready to accelerate your digital presence? Share your vision and we'll create a custom plan to bring it to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form - 2/3 width */}
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div whileFocus={{ scale: 1.02 }}>
                  <Input
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                  />
                </motion.div>
                <motion.div whileFocus={{ scale: 1.02 }}>
                  <Input
                    type="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                  />
                </motion.div>
              </div>
              
              {/* Additional form fields... */}
              
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Start My Project'}
                </Button>
              </motion.div>
            </form>
          </motion.div>

          {/* Contact Info - 1/3 width */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white/5 border border-white/10 rounded-xl p-8"
          >
            {/* Contact information content */}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
```

### Mobile Navigation Implementation
```typescript
// /src/components/MobileNav.tsx
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuVariants = {
    closed: {
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    },
    open: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    }
  };

  const menuItemVariants = {
    closed: { opacity: 0, x: 20 },
    open: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.3
      }
    })
  };

  const menuItems = [
    { href: '/accelerators', label: 'Accelerators' },
    { href: '/process', label: 'Our Process' },
    { href: '/insights', label: 'Insights' },
    { href: '/about', label: 'About Us' },
    { href: '/careers', label: 'Careers' },
    { href: '/contact', label: 'Contact' }
  ];

  return (
    <>
      {/* Hamburger Button */}
      <button
        className="md:hidden w-11 h-11 flex items-center justify-center"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.div>
      </button>

      {/* Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/50 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed top-0 right-0 h-full w-80 bg-background/95 backdrop-blur-xl border-l border-white/10 z-50"
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <div className="p-6 pt-20">
              <nav className="space-y-4">
                {menuItems.map((item, i) => (
                  <motion.div
                    key={item.href}
                    variants={menuItemVariants}
                    initial="closed"
                    animate="open"
                    custom={i}
                  >
                    <Link
                      href={item.href}
                      className="block py-3 px-4 text-lg font-medium hover:bg-white/5 rounded-lg transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
```

### Enhanced Testimonial Component
```typescript
// /src/components/TestimonialWithPhoto.tsx
'use client';

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import Image from 'next/image';

interface TestimonialProps {
  quote: string;
  author: {
    name: string;
    title: string;
    company: string;
    photo: string;
    companyLogo?: string;
  };
  rating?: number;
  delay?: number;
}

const TestimonialWithPhoto = ({ quote, author, rating = 5, delay = 0 }: TestimonialProps) => {
  return (
    <motion.div
      className="bg-white/5 border border-white/10 rounded-xl p-8 h-full"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{
        y: -8,
        scale: 1.02,
        boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
        transition: { duration: 0.3 }
      }}
      viewport={{ once: true }}
    >
      {/* Rating Stars */}
      <div className="flex items-center gap-1 mb-4">
        {[...Array(rating)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: delay + (i * 0.1) }}
          >
            ⭐
          </motion.div>
        ))}
      </div>

      {/* Quote */}
      <div className="relative mb-6">
        <Quote className="absolute -top-2 -left-2 w-8 h-8 text-primary/30" />
        <blockquote className="text-lg text-foreground/90 italic leading-relaxed pl-6">
          "{quote}"
        </blockquote>
      </div>

      {/* Author Info */}
      <div className="flex items-center gap-4">
        <motion.div
          className="relative"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.2 }}
        >
          <Image
            src={author.photo}
            alt={author.name}
            width={56}
            height={56}
            className="rounded-full object-cover"
          />
        </motion.div>
        
        <div className="flex-1">
          <div className="font-semibold text-foreground">{author.name}</div>
          <div className="text-sm text-foreground/70">{author.title}</div>
          <div className="text-sm text-primary font-medium">{author.company}</div>
        </div>

        {author.companyLogo && (
          <Image
            src={author.companyLogo}
            alt={author.company}
            width={40}
            height={40}
            className="opacity-70"
          />
        )}
      </div>
    </motion.div>
  );
};
```

### Project Builder Step Component
```typescript
// /src/components/ProjectBuilder/ProjectStep.tsx
'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

interface StepProps {
  number: number;
  title: string;
  description: string;
  isActive: boolean;
  isCompleted: boolean;
  onClick: () => void;
}

const ProjectStep = ({ number, title, description, isActive, isCompleted, onClick }: StepProps) => {
  return (
    <motion.div
      className={`flex items-start gap-4 p-4 rounded-lg cursor-pointer transition-all ${
        isActive ? 'bg-primary/10 border border-primary/20' : 'hover:bg-white/5'
      }`}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Step Number/Check */}
      <motion.div
        className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
          isCompleted 
            ? 'bg-primary border-primary text-primary-foreground' 
            : isActive
            ? 'border-primary text-primary'
            : 'border-white/20 text-foreground/50'
        }`}
        animate={{
          scale: isActive ? 1.1 : 1,
          backgroundColor: isCompleted ? 'hsl(var(--primary))' : 'transparent'
        }}
        transition={{ duration: 0.3 }}
      >
        {isCompleted ? (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <Check size={16} />
          </motion.div>
        ) : (
          <span className="text-sm font-bold">{number}</span>
        )}
      </motion.div>

      {/* Step Content */}
      <div className="flex-1">
        <h3 className={`font-semibold ${isActive ? 'text-primary' : 'text-foreground'}`}>
          {title}
        </h3>
        <p className="text-sm text-foreground/70 mt-1">
          {description}
        </p>
      </div>
    </motion.div>
  );
};
```

---

*This enhancement plan transforms DigitalAccel from a strong foundation to an industry-leading startup presentation that matches Series A expectations and drives sustainable growth.* 