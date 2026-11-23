import type { Metadata, Viewport } from 'next';
import './globals.css';
import { portfolioContent } from '@/data/content';

export const viewport: Viewport = {
  themeColor: '#0a0d14',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: `${portfolioContent.personal.fullName} (${portfolioContent.personal.preferredName}) | Network Engineer & Cybersecurity Specialist`,
  description: portfolioContent.summary,
  keywords: [
    'Network Engineer',
    'Cybersecurity Specialist',
    'Software Developer',
    'MikroTik RouterOS',
    'BGP',
    'OSPF',
    'Accra Ghana',
    'Kingsville Internet Services',
    'Continual Learning',
    'Network Intrusion Detection',
    'Python',
    'Next.js',
  ],
  authors: [{ name: portfolioContent.personal.fullName, url: portfolioContent.personal.github }],
  openGraph: {
    title: `${portfolioContent.personal.fullName} (Elroy) | Portfolio`,
    description: portfolioContent.personal.headline,
    url: 'https://georgefiasorgbor.github.io/portfolio-website',
    siteName: `${portfolioContent.personal.fullName} Portfolio`,
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${portfolioContent.personal.fullName} (Elroy) | Portfolio`,
    description: portfolioContent.personal.headline,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="bg-[#0a0d14] text-slate-100 antialiased selection:bg-cyan-500 selection:text-slate-950 min-h-screen flex flex-col font-sans">
        {children}
      </body>
    </html>
  );
}
