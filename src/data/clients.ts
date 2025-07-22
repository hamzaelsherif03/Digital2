export interface Client {
  id: string;
  name: string;
  logo: string;
  logoWhite?: string;
  category: string;
  featured: boolean;
}

export const clients: Client[] = [
  {
    id: "client-1",
    name: "TechFlow AI",
    logo: "/images/logos/techflow-ai.svg",
    logoWhite: "/images/logos/techflow-ai-white.svg",
    category: "AI/ML",
    featured: true
  },
  {
    id: "client-2",
    name: "ScaleUp Dynamics",
    logo: "/images/logos/scaleup-dynamics.svg",
    logoWhite: "/images/logos/scaleup-dynamics-white.svg",
    category: "SaaS",
    featured: true
  },
  {
    id: "client-3",
    name: "Enterprise Solutions Inc",
    logo: "/images/logos/enterprise-solutions.svg",
    logoWhite: "/images/logos/enterprise-solutions-white.svg",
    category: "Enterprise",
    featured: true
  },
  {
    id: "client-4",
    name: "MobileFirst Ventures",
    logo: "/images/logos/mobilefirst.svg",
    logoWhite: "/images/logos/mobilefirst-white.svg",
    category: "Mobile",
    featured: true
  },
  {
    id: "client-5",
    name: "GrowthLab",
    logo: "/images/logos/growthlab.svg",
    logoWhite: "/images/logos/growthlab-white.svg",
    category: "Analytics",
    featured: true
  },
  {
    id: "client-6",
    name: "Innovation Hub",
    logo: "/images/logos/innovation-hub.svg",
    logoWhite: "/images/logos/innovation-hub-white.svg",
    category: "Consulting",
    featured: true
  },
  {
    id: "client-7",
    name: "CloudTech Solutions",
    logo: "/images/logos/cloudtech.svg",
    logoWhite: "/images/logos/cloudtech-white.svg",
    category: "Cloud",
    featured: false
  },
  {
    id: "client-8",
    name: "DataStream Corp",
    logo: "/images/logos/datastream.svg",
    logoWhite: "/images/logos/datastream-white.svg",
    category: "Data",
    featured: false
  },
  {
    id: "client-9",
    name: "NextGen Robotics",
    logo: "/images/logos/nextgen-robotics.svg",
    logoWhite: "/images/logos/nextgen-robotics-white.svg",
    category: "Hardware",
    featured: false
  },
  {
    id: "client-10",
    name: "FinTech Solutions",
    logo: "/images/logos/fintech-solutions.svg",
    logoWhite: "/images/logos/fintech-solutions-white.svg",
    category: "FinTech",
    featured: false
  }
];

export const getFeaturedClients = (): Client[] => {
  return clients.filter(client => client.featured);
};

export const getClientsByCategory = (category: string): Client[] => {
  return clients.filter(client => client.category === category);
};

export const getClientById = (id: string): Client | undefined => {
  return clients.find(client => client.id === id);
}; 