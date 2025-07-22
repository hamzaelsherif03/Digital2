"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href: string;
  isCurrent?: boolean;
}

interface BreadcrumbProps {
  items?: BreadcrumbItem[];
  className?: string;
}

export default function Breadcrumb({ items, className = "" }: BreadcrumbProps) {
  const pathname = usePathname();
  
  // Auto-generate breadcrumbs if not provided
  const breadcrumbItems = items || generateBreadcrumbs(pathname);

  if (breadcrumbItems.length <= 1) {
    return null; // Don't show breadcrumbs for home page
  }

  return (
    <motion.nav
      className={`py-4 ${className}`}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      aria-label="Breadcrumb navigation"
    >
      <ol className="flex items-center space-x-2 text-sm">
        {breadcrumbItems.map((item, index) => (
          <motion.li
            key={item.href}
            className="flex items-center"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1, duration: 0.3 }}
          >
            {/* Separator */}
            {index > 0 && (
              <ChevronRight className="w-4 h-4 text-foreground/40 mx-2 flex-shrink-0" />
            )}
            
            {/* Breadcrumb Item */}
            {item.isCurrent ? (
              <span
                className="text-foreground/60 font-medium"
                aria-current="page"
              >
                {item.label}
              </span>
            ) : (
              <Link
                href={item.href}
                className="group flex items-center gap-1 text-foreground/70 hover:text-primary transition-colors duration-300 min-h-[44px] flex items-center px-2 py-1 rounded-element hover:bg-primary/5"
                aria-label={`Navigate to ${item.label}`}
              >
                {index === 0 && <Home className="w-4 h-4" />}
                <span className="font-medium">{item.label}</span>
              </Link>
            )}
          </motion.li>
        ))}
      </ol>
    </motion.nav>
  );
}

// Helper function to generate breadcrumbs from pathname
function generateBreadcrumbs(pathname: string): BreadcrumbItem[] {
  const segments = pathname.split('/').filter(Boolean);
  const breadcrumbs: BreadcrumbItem[] = [
    { label: 'Home', href: '/' }
  ];

  let currentPath = '';
  
  segments.forEach((segment, index) => {
    currentPath += `/${segment}`;
    
    // Convert segment to readable label
    const label = formatSegmentLabel(segment);
    
    breadcrumbs.push({
      label,
      href: currentPath,
      isCurrent: index === segments.length - 1
    });
  });

  return breadcrumbs;
}

// Helper function to format segment labels
function formatSegmentLabel(segment: string): string {
  // Handle special cases
  const labelMap: Record<string, string> = {
    'accelerators': 'Accelerators',
    'mvp-launchpad': 'MVP Launchpad',
    'scale-up-engine': 'Scale-Up Engine',
    'enterprise-innovation-sprint': 'Enterprise Innovation Sprint',
    'services': 'Services',
    'pricing': 'Pricing',
    'process': 'Our Process',
    'insights': 'Insights',
    'about': 'About Us',
    'contact': 'Contact',
    'careers': 'Careers',
    'affiliate': 'Partner Program',
    'partners': 'Partners',
    'blog': 'Blog',
    'case-studies': 'Case Studies',
    'resources': 'Resources'
  };

  if (labelMap[segment]) {
    return labelMap[segment];
  }

  // Default formatting: capitalize and replace hyphens with spaces
  return segment
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

// Export the helper function for custom breadcrumb generation
export { generateBreadcrumbs, formatSegmentLabel };
export type { BreadcrumbItem }; 