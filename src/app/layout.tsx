import type { Metadata, Viewport } from 'next';
import './globals.css';
import { FloatingWhatsApp, StickyMobileCTA } from '@/components/CTA';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { JsonLd } from '@/components/JsonLd';
import { organizationSchema } from '@/data/content';
import { absoluteUrl, siteConfig } from '@/lib/site';

export const viewport: Viewport = { width: 'device-width', initialScale: 1, themeColor: '#071A3D' };

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: 'Online Spoken English Classes in India | Speak-Up English Academy', template: '%s | Speak-Up English Online Academy' },
  description: 'Join live online spoken English classes in India with Zoom practice, interview English, public speaking, communication skills, and flexible batches from 7 AM to 9 PM.',
  keywords: ['spoken english classes online', 'online spoken english classes in India', 'english speaking course india', 'communication skills classes'],
  alternates: { canonical: absoluteUrl('/') },
  openGraph: { type: 'website', url: absoluteUrl('/'), title: 'Online Spoken English Classes in India', description: 'Live spoken English, interview English, office communication, and public speaking classes for Indian learners.', siteName: siteConfig.name },
  twitter: { card: 'summary_large_image', title: 'Speak-Up English Online Academy', description: 'Book a free demo for online spoken English classes in India.' },
  verification: siteConfig.gscVerification ? { google: siteConfig.gscVerification } : undefined
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-IN" suppressHydrationWarning>
      <body>
        <JsonLd data={organizationSchema()} />
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingWhatsApp />
        <StickyMobileCTA />
      </body>
    </html>
  );
}
