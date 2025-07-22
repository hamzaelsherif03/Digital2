import { Metadata } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://digitalaccel.com';
const defaultOGImage = '/images/og-default.jpg';

interface GenerateMetadataProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  keywords?: string[];
  noIndex?: boolean;
}

export function generateMetadata({
  title,
  description,
  canonical,
  ogImage = defaultOGImage,
  ogType = 'website',
  keywords,
  noIndex = false
}: GenerateMetadataProps): Metadata {
  const fullTitle = title.includes('DigitalAccel') ? title : `${title} | DigitalAccel`;
  const canonicalUrl = canonical || siteUrl;
  const fullOGImage = ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`;

  return {
    title: fullTitle,
    description,
    keywords: keywords?.join(', '),
    robots: noIndex ? 'noindex, nofollow' : 'index, follow',
    canonical: canonicalUrl,
    openGraph: {
      type: ogType,
      title: fullTitle,
      description,
      url: canonicalUrl,
      siteName: 'DigitalAccel',
      images: [
        {
          url: fullOGImage,
          width: 1200,
          height: 630,
          alt: title,
        }
      ],
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [fullOGImage],
      site: '@digitalaccel',
      creator: '@digitalaccel',
    },
    authors: [{ name: 'DigitalAccel' }],
    other: {
      'theme-color': '#3B82F6',
      'msapplication-TileColor': '#3B82F6',
    },
    icons: {
      icon: [
        { url: '/favicon.ico' },
        { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
        { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      ],
      apple: [
        { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
      ],
      other: [
        { rel: 'manifest', url: '/site.webmanifest' },
      ],
    },
  };
}

// Predefined metadata for common pages
export const homeMetadata = generateMetadata({
  title: 'DigitalAccel - Premium Digital Solutions That Convert',
  description: 'Professional landing pages, mobile apps, and SEO optimization designed to boost your digital presence and drive sustainable business growth. 7-day delivery, enterprise-grade quality.',
  keywords: ['digital development', 'MVP development', 'mobile apps', 'startup development', 'web development', 'SEO optimization', 'digital acceleration']
});

export const contactMetadata = generateMetadata({
  title: 'Contact DigitalAccel - Start Your Project Today',
  description: 'Get in touch with DigitalAccel to discuss your project requirements. Free consultation, custom quotes, and 24-hour response time. Let\'s build something amazing together.',
  keywords: ['contact', 'consultation', 'project inquiry', 'digital development quote', 'startup development']
});

export const affiliateMetadata = generateMetadata({
  title: 'Partner Game - Gamified Affiliate Program | DigitalAccel',
  description: 'Join the most rewarding affiliate program in digital development! Level up through 5 tiers, unlock achievements, compete on leaderboards, and earn up to 40% commission + bonuses.',
  keywords: ['affiliate program', 'partner program', 'referral program', 'commission', 'gamified rewards', 'digital development affiliate']
});

export const processMetadata = generateMetadata({
  title: 'Our Process - How DigitalAccel Delivers Results',
  description: 'Discover DigitalAccel\'s proven development process. From strategy to launch in just 7-14 days. Transparent workflow, daily updates, and guaranteed results.',
  keywords: ['development process', 'project workflow', 'agile development', 'startup process', 'MVP process']
});

export const insightsMetadata = generateMetadata({
  title: 'Insights & Resources - Digital Development Best Practices',
  description: 'Expert insights on digital development, startup growth strategies, and industry best practices. Case studies, guides, and resources to accelerate your business.',
  keywords: ['digital insights', 'startup resources', 'development best practices', 'case studies', 'business growth']
});

export const aboutMetadata = generateMetadata({
  title: 'About DigitalAccel - Digital Development Experts',
  description: 'Meet the team behind DigitalAccel. Expert developers, designers, and strategists helping startups and scale-ups build successful digital products.',
  keywords: ['about digitalaccel', 'development team', 'digital experts', 'startup specialists', 'company information']
});

export const careersMetadata = generateMetadata({
  title: 'Careers at DigitalAccel - Join Our Team',
  description: 'Join DigitalAccel\'s team of digital development experts. Remote-first culture, competitive benefits, and the opportunity to work on exciting startup projects.',
  keywords: ['careers', 'jobs', 'remote work', 'digital development careers', 'startup jobs']
});

// Structured Data
export const organizationStructuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "DigitalAccel",
  "description": "Premium digital development services for startups and scale-ups. MVP development, mobile apps, and SEO optimization that drives results.",
  "url": siteUrl,
  "logo": `${siteUrl}/images/logo.png`,
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-555-123-4567",
    "contactType": "customer service",
    "email": "hello@digitalaccel.com",
    "availableLanguage": "English"
  },
  "address": {
    "@type": "PostalAddress",
    "addressRegion": "CA",
    "addressCountry": "US",
    "addressLocality": "San Francisco Bay Area"
  },
  "sameAs": [
    "https://linkedin.com/company/digitalaccel",
    "https://twitter.com/digitalaccel"
  ],
  "founder": {
    "@type": "Person",
    "name": "DigitalAccel Team"
  },
  "foundingDate": "2023",
  "numberOfEmployees": {
    "@type": "QuantitativeValue",
    "value": "10-50"
  },
  "industry": "Software Development",
  "serviceArea": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": "37.7749",
      "longitude": "-122.4194"
    },
    "geoRadius": "Global"
  }
};

export const serviceStructuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Digital Development Services",
  "provider": {
    "@type": "Organization",
    "name": "DigitalAccel"
  },
  "areaServed": "Worldwide",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Digital Development Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "MVP Development",
          "description": "7-day MVP development for startups"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Scale-Up Development",
          "description": "14-day full web and mobile app development"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Enterprise Solutions",
          "description": "Custom enterprise digital solutions"
        }
      }
    ]
  }
}; 