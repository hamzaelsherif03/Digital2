export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  preview: string;
  metrics: Array<{
    label: string;
    value: string;
    improvement: string;
  }>;
  image: string;
  slug: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: "case-study-1",
    title: "From Startup to Series A: TechFlow AI's 7-Day MVP Success",
    client: "TechFlow AI",
    preview: "How we helped TechFlow AI launch their AI-powered analytics platform in 7 days, leading to a successful Series A funding round within 4 months.",
    metrics: [
      {
        label: "User Engagement",
        value: "340%",
        improvement: "increase"
      },
      {
        label: "Time to Market",
        value: "7 days",
        improvement: "vs 3 months typical"
      },
      {
        label: "Series A Funding",
        value: "$12M",
        improvement: "raised in 4 months"
      }
    ],
    image: "/images/case-studies/techflow-ai-case.jpg",
    slug: "techflow-ai-mvp-success"
  },
  {
    id: "case-study-2",
    title: "Enterprise Transformation: ScaleUp Dynamics Platform Rebuild",
    client: "ScaleUp Dynamics",
    preview: "Complete platform overhaul for ScaleUp Dynamics, resulting in 60% reduction in customer acquisition costs and 250% increase in enterprise deals.",
    metrics: [
      {
        label: "Customer Acquisition Cost",
        value: "60%",
        improvement: "reduction"
      },
      {
        label: "Enterprise Deals",
        value: "250%",
        improvement: "increase"
      },
      {
        label: "Platform Performance",
        value: "85%",
        improvement: "faster load times"
      }
    ],
    image: "/images/case-studies/scaleup-dynamics-case.jpg",
    slug: "scaleup-dynamics-transformation"
  },
  {
    id: "case-study-3",
    title: "Mobile-First Success: MobileFirst Ventures App Revolution",
    client: "MobileFirst Ventures",
    preview: "Designed and developed a cross-platform mobile app that achieved 1M+ downloads in the first quarter and led to a successful acquisition.",
    metrics: [
      {
        label: "Downloads",
        value: "1M+",
        improvement: "in Q1"
      },
      {
        label: "User Rating",
        value: "4.8/5",
        improvement: "App Store rating"
      },
      {
        label: "Acquisition Value",
        value: "$25M",
        improvement: "successful exit"
      }
    ],
    image: "/images/case-studies/mobilefirst-case.jpg",
    slug: "mobilefirst-app-success"
  },
  {
    id: "case-study-4",
    title: "E-commerce Excellence: GrowthLab Conversion Optimization",
    client: "GrowthLab",
    preview: "Complete e-commerce platform optimization resulting in 185% increase in conversion rates and 320% boost in average order value.",
    metrics: [
      {
        label: "Conversion Rate",
        value: "185%",
        improvement: "increase"
      },
      {
        label: "Average Order Value",
        value: "320%",
        improvement: "boost"
      },
      {
        label: "Revenue Growth",
        value: "450%",
        improvement: "year-over-year"
      }
    ],
    image: "/images/case-studies/growthlab-case.jpg",
    slug: "growthlab-ecommerce-optimization"
  }
];

export const getFeaturedCaseStudies = (): CaseStudy[] => {
  return caseStudies.slice(0, 3); // Return first 3 as featured
};

export const getCaseStudyBySlug = (slug: string): CaseStudy | undefined => {
  return caseStudies.find(study => study.slug === slug);
};

export const getCaseStudyById = (id: string): CaseStudy | undefined => {
  return caseStudies.find(study => study.id === id);
}; 