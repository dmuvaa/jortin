import type { Metadata } from 'next';
import './globals.css';
import TopBar from '@/components/TopBar';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { generalContractorSchema } from '@/lib/schema';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.jortinlimited.co.ke'),
  title: {
    default: 'Construction Company in Kenya | Jortin Limited',
    template: '%s | Jortin Limited',
  },
  description: 'NCA 8 registered contractor in Ongata Rongai for road works, water works, structural and civil works, building and construction consultancy in Kenya.',
  keywords: [
    'construction company Kenya',
    'NCA registered contractor',
    'road works Kenya',
    'water works contractor Kenya',
    'construction company Ongata Rongai',
    'civil engineering contractor Kajiado'
  ],
  authors: [{ name: 'Jortin Limited' }],
  creator: 'Jortin Limited',
  publisher: 'Jortin Limited',
  icons: {
    icon: '/images/logo.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_KE',
    url: 'https://www.jortinlimited.co.ke',
    siteName: 'Jortin Limited',
    title: "Jortin Limited | Building Kenya's Infrastructure, Right",
    description: 'Kenyan-owned, NCA 8 registered for road and water works. Consultancy, structural and civil works, building and project management from Ongata Rongai.',
    images: [
      {
        url: '/images/hero-home-bg.jpg',
        width: 1200,
        height: 630,
        alt: 'Jortin Limited Construction in Kenya',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Jortin Limited | Building Kenya's Infrastructure, Right",
    description: 'Kenyan-owned, NCA 8 registered for road and water works. Consultancy, structural and civil works, building and project management.',
    images: ['/images/hero-home-bg.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generalContractorSchema),
          }}
        />
      </head>
      <body className="flex flex-col min-h-screen">
        {/* Accessibility Skip Link */}
        <a href="#main-content" className="skip-link visually-hidden">
          Skip to main content
        </a>

        <TopBar />
        <Navbar />

        <main id="main-content" className="flex-grow">
          {children}
        </main>

        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
