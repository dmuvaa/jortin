import type { Metadata } from 'next';
import './globals.css';
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
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/images/favicon/icon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/images/favicon/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/images/favicon/icon-180.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    type: 'website',
    locale: 'en_KE',
    url: 'https://www.jortinlimited.co.ke',
    siteName: 'Jortin Limited',
    title: 'Jortin Limited',
    description: 'Construction company in Ongata Rongai for roads, water, buildings and structural works.',
    images: [
      {
        url: '/images/house-complete.jpg',
        width: 2160,
        height: 960,
        alt: 'Completed two-storey residential building',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jortin Limited',
    description: 'Construction company in Ongata Rongai for roads, water, buildings and structural works.',
    images: ['/images/house-complete.jpg'],
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
