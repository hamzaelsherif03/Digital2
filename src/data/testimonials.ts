export interface Testimonial {
  id: string;
  quote: string;
  author: {
    name: string;
    title: string;
    company: string;
    photo: string;
    companyLogo?: string;
  };
  rating: number;
  featured: boolean;
}

export const testimonials: Testimonial[] = [
  {
    id: "testimonial-1",
    quote: "DigitalAccel transformed our startup vision into a live product in just 7 days. The quality exceeded our expectations, and their team's expertise in both technical implementation and user experience design was evident throughout. We saw a 340% increase in user engagement within the first month.",
    author: {
      name: "Sarah Chen",
      title: "CEO & Founder",
      company: "TechFlow AI",
      photo: "/images/testimonials/sarah-chen.jpg",
      companyLogo: "/images/logos/techflow-ai.svg"
    },
    rating: 5,
    featured: true
  },
  {
    id: "testimonial-2", 
    quote: "Working with DigitalAccel was a game-changer for our Series A fundraising. They delivered a professional-grade platform that impressed our investors and helped us close our round 2 months ahead of schedule. The ROI was immediate and significant.",
    author: {
      name: "Marcus Rodriguez",
      title: "Co-Founder & CTO",
      company: "ScaleUp Dynamics",
      photo: "/images/testimonials/marcus-rodriguez.jpg",
      companyLogo: "/images/logos/scaleup-dynamics.svg"
    },
    rating: 5,
    featured: true
  },
  {
    id: "testimonial-3",
    quote: "The team's ability to understand our complex enterprise requirements and deliver a scalable solution was remarkable. Our customer acquisition costs dropped by 60% after implementing their optimized conversion funnels.",
    author: {
      name: "Emily Watson",
      title: "Head of Digital Strategy",
      company: "Enterprise Solutions Inc",
      photo: "/images/testimonials/emily-watson.jpg",
      companyLogo: "/images/logos/enterprise-solutions.svg"
    },
    rating: 5,
    featured: true
  },
  {
    id: "testimonial-4",
    quote: "DigitalAccel didn't just build our app – they became our strategic partners. Their insights on user behavior and market positioning helped us pivot our entire business model, leading to our successful acquisition.",
    author: {
      name: "David Kim",
      title: "Founder",
      company: "MobileFirst Ventures",
      photo: "/images/testimonials/david-kim.jpg",
      companyLogo: "/images/logos/mobilefirst.svg"
    },
    rating: 5,
    featured: false
  },
  {
    id: "testimonial-5",
    quote: "From MVP to market leader in 6 months. DigitalAccel's technical expertise combined with their understanding of startup dynamics made all the difference. They're not just developers – they're growth partners.",
    author: {
      name: "Lisa Thompson",
      title: "VP of Product",
      company: "GrowthLab",
      photo: "/images/testimonials/lisa-thompson.jpg",
      companyLogo: "/images/logos/growthlab.svg"
    },
    rating: 5,
    featured: false
  },
  {
    id: "testimonial-6",
    quote: "The attention to detail and commitment to quality is unmatched. Every pixel, every interaction, every line of code reflects their dedication to excellence. Our conversion rates improved by 85% post-launch.",
    author: {
      name: "Alex Turner",
      title: "Product Manager",
      company: "Innovation Hub",
      photo: "/images/testimonials/alex-turner.jpg",
      companyLogo: "/images/logos/innovation-hub.svg"
    },
    rating: 5,
    featured: false
  }
];

export const getFeaturedTestimonials = (): Testimonial[] => {
  return testimonials.filter(testimonial => testimonial.featured);
};

export const getTestimonialById = (id: string): Testimonial | undefined => {
  return testimonials.find(testimonial => testimonial.id === id);
}; 