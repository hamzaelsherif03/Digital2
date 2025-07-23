"use client";

import { Suspense } from 'react';
import dynamic from 'next/dynamic';

// Lazy load the ContactForm component
const ContactForm = dynamic(() => import('./ContactForm'), {
  loading: () => (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="flex flex-col items-center space-y-4">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
        <p className="text-muted-foreground">Loading contact form...</p>
      </div>
    </div>
  ),
  ssr: false, // Disable SSR for this component to reduce initial bundle
});

export default function ContactPageClient() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="flex flex-col items-center space-y-4">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    }>
      <ContactForm />
    </Suspense>
  );
}