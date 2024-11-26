import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

import NextTopLoader from 'nextjs-toploader';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import './markdown.css';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Bitte',
  openGraph: {
    title: 'Bitte - https://bitte.ai',
    description:
      'Your portal to effortlessly launch cutting-edge Web3 experiences.',

    images: [
      {
        type: 'image/png',
        url: 'https://bitte.ai/thumbnail.png',
        width: '1200',
        height: '630',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bitte',
    description:
      'Your portal to effortlessly launch cutting-edge Web3 experiences.',
    siteId: '1467726470533754880',
    creator: 'Mintbase',
    images: 'https://bitte.ai/thumbnail.png',
  },
  description:
    'Your portal to effortlessly launch cutting-edge Web3 experiences.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className='overflow-x-hidden'>
      <head>
        <meta
          name='google-site-verification'
          content='L_YAA1wl9HK-pwje3STY_KyHj7yQN1oTfq09H_r9Kqw'
        />
      </head>
      <body className={`${inter.className} dark bg-black`}>
        <Header />
        {children}
        <Footer />
        <Analytics />
        <NextTopLoader color='#334155' showSpinner={false} height={4} />
        <SpeedInsights />
      </body>
    </html>
  );
}
