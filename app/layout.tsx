import './globals.css';
import type { Metadata } from 'next';
import { ThemeProvider } from 'next-themes';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Mobile Gurus - On-Demand Mobile Repairs',
  description: 'Professional mobile device repairs at your fingertips. We repair phones, laptops, smartwatches and more across Nigeria and Africa.',
  // You can also add the favicon here
  icons: {
    icon: '/favicon.ico', // make sure favicon.ico is in the /public folder
    apple: '/apple-touch-icon.png', // optional for iOS
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
        {/* Optional: You can manually include favicon too */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>    
        {children}
        </ThemeProvider>
        </body>
    </html>
  );
}
