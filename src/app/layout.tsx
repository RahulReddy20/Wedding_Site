import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import TopNav from '@/components/TopNav';
import './globals.css';

const playfairDisplay = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  display: 'swap',
});

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Wedding Site',
  description: 'An elegant wedding website',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@700&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Alex+Brush&family=Great+Vibes&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${playfairDisplay.variable} ${inter.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        <div className="min-h-screen">
          <header role="banner">
            <TopNav />
          </header>
          <main role="main" id="main-content">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
