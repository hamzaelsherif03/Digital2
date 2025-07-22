export interface TeamMember {
  id: string;
  name: string;
  title: string;
  bio: string;
  photo: string;
  expertise: string[];
  social: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
  featured: boolean;
}

export const teamMembers: TeamMember[] = [
  {
    id: "team-1",
    name: "Alexandra Rivera",
    title: "Founder & CEO",
    bio: "Former engineering director at Google with 12+ years building scalable products. Led teams that delivered solutions for 100M+ users.",
    photo: "/images/team/alexandra-rivera.jpg",
    expertise: ["Product Strategy", "Team Leadership", "Scaling", "Fundraising"],
    social: {
      linkedin: "https://linkedin.com/in/alexandra-rivera",
      twitter: "https://twitter.com/alex_rivera_dev"
    },
    featured: true
  },
  {
    id: "team-2",
    name: "Marcus Chen",
    title: "CTO & Co-Founder",
    bio: "Ex-Tesla software architect and Y Combinator alum. Specializes in rapid prototyping and technical architecture for high-growth startups.",
    photo: "/images/team/marcus-chen.jpg",
    expertise: ["System Architecture", "React/Next.js", "Cloud Infrastructure", "AI/ML"],
    social: {
      linkedin: "https://linkedin.com/in/marcus-chen-cto",
      github: "https://github.com/marcus-chen",
      twitter: "https://twitter.com/marcus_builds"
    },
    featured: true
  },
  {
    id: "team-3",
    name: "Sophia Kim",
    title: "Head of Design",
    bio: "Award-winning UX designer from Apple and Airbnb. Passionate about creating interfaces that users love and convert at scale.",
    photo: "/images/team/sophia-kim.jpg",
    expertise: ["UX/UI Design", "Design Systems", "User Research", "Conversion Optimization"],
    social: {
      linkedin: "https://linkedin.com/in/sophia-kim-design",
      twitter: "https://twitter.com/sophia_designs"
    },
    featured: true
  },
  {
    id: "team-4",
    name: "James Mitchell",
    title: "Senior Full-Stack Developer",
    bio: "Full-stack expert with deep experience in TypeScript, React, and Node.js. Previously built core features at Stripe and Shopify.",
    photo: "/images/team/james-mitchell.jpg",
    expertise: ["TypeScript", "React", "Node.js", "Database Design"],
    social: {
      linkedin: "https://linkedin.com/in/james-mitchell-dev",
      github: "https://github.com/james-mitchell"
    },
    featured: false
  },
  {
    id: "team-5",
    name: "Dr. Emily Watson",
    title: "VP of Growth",
    bio: "Former growth lead at Uber and Pinterest. PhD in Data Science with expertise in growth hacking and performance marketing.",
    photo: "/images/team/emily-watson.jpg",
    expertise: ["Growth Strategy", "Data Analytics", "Performance Marketing", "A/B Testing"],
    social: {
      linkedin: "https://linkedin.com/in/emily-watson-growth",
      twitter: "https://twitter.com/emily_growth"
    },
    featured: false
  },
  {
    id: "team-6",
    name: "Ryan Torres",
    title: "Senior DevOps Engineer",
    bio: "Infrastructure specialist who scaled Netflix's deployment pipeline. Expert in AWS, Kubernetes, and building bulletproof systems.",
    photo: "/images/team/ryan-torres.jpg",
    expertise: ["AWS", "Kubernetes", "CI/CD", "Infrastructure", "Security"],
    social: {
      linkedin: "https://linkedin.com/in/ryan-torres-devops",
      github: "https://github.com/ryan-torres"
    },
    featured: false
  }
];

export const getFeaturedTeamMembers = (): TeamMember[] => {
  return teamMembers.filter(member => member.featured);
};

export const getTeamMemberById = (id: string): TeamMember | undefined => {
  return teamMembers.find(member => member.id === id);
};

export const getTeamMembersByExpertise = (expertise: string): TeamMember[] => {
  return teamMembers.filter(member => 
    member.expertise.some(skill => 
      skill.toLowerCase().includes(expertise.toLowerCase())
    )
  );
}; 