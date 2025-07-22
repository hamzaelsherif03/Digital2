"use client";

import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import ResultsSection from '@/components/ResultsSection';
import PricingSection from '@/components/PricingSection';
import AffiliateSection from '@/components/AffiliateSection';
import FAQSection from '@/components/FAQSection';
import CTASection from '@/components/CTASection';
import FooterSection from '@/components/FooterSection';
import HeaderNav from '@/components/HeaderNav';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <HeaderNav />
      <main className="flex-grow">
        {/* Full-Screen Hero */}
        <HeroSection />
        
        {/* Content Sections */}
        <ResultsSection />
        <ServicesSection />
        
        {/* Partner Program - Secondary Flow */}
        <AffiliateSection />
        
        {/* Final Conversion Push */}
        <PricingSection />
        <FAQSection />
        <CTASection />
      </main>
      <FooterSection />
    </div>
  );
}