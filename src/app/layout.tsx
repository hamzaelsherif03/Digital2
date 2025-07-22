import type {Metadata} from 'next';
import Script from 'next/script';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { ToastProvider } from '@/components/hooks/use-toast';
import { inter, spaceGrotesk } from './fonts';
import { cn } from '@/components/lib/utils';
import { homeMetadata, organizationStructuredData, serviceStructuredData } from '@/lib/metadata';

export const metadata: Metadata = homeMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationStructuredData),
          }}
        />
        <Script
          id="service-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(serviceStructuredData),
          }}
        />
      </head>
      <body className={cn(
        "font-body antialiased bg-background text-foreground",
        inter.variable,
        spaceGrotesk.variable
      )}>
        <ToastProvider>
          {children}
          <Toaster />
        </ToastProvider>
      </body>
    </html>
  );
}
