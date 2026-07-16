import type { Metadata } from 'next';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Roberts Motor Group | Quality Used Cars You Can Trust',
  description: 'Premium UK used car dealership. Browse our quality selection of used vehicles. Sell your car or part exchange with Roberts Motor Group.',
  keywords: 'used cars, car dealership, UK, quality vehicles, part exchange',
  authors: [{ name: 'Roberts Motor Group' }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        <Navigation />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}