import React from 'react';
import HeaderNav from '@/components/HeaderNav';
import FooterSection from '@/components/FooterSection';

export default function PartnersPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <HeaderNav />
      <main className="flex-grow pt-20">
        <section className="container mx-auto px-6 py-20">
          <h1 className="text-4xl md:text-6xl font-bold font-headline mb-8">Partner Program</h1>
          <p className="text-lg text-foreground/70 mb-8 max-w-2xl">Grow with us. Join our affiliate and referral program for VCs, incubators, and agencies. Earn commissions and access exclusive partner resources.</p>
          <div className="bg-white/5 border border-white/10 rounded-lg p-8 max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl font-bold font-headline mb-2">Partner Portal</h2>
            <a href="#" className="text-primary underline">Login to your dashboard</a>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-lg p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold font-headline mb-2">Apply to Become a Partner</h2>
            <form className="flex flex-col gap-4">
              <input type="text" placeholder="Your name" className="px-4 py-2 rounded bg-background border border-white/10 text-sm" />
              <input type="email" placeholder="Your email" className="px-4 py-2 rounded bg-background border border-white/10 text-sm" />
              <input type="text" placeholder="Organization" className="px-4 py-2 rounded bg-background border border-white/10 text-sm" />
              <button type="submit" className="px-6 py-2 rounded bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition">Apply</button>
            </form>
          </div>
        </section>
      </main>
      <FooterSection />
    </div>
  );
} 