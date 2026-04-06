import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    default: 'Kabab King | Authentic Pakistani & Indian Cuisine — Jackson Heights, Queens',
    template: '%s | Kabab King',
  },
  description:
    'Kabab King serves authentic halal Pakistani & Indian kebabs, biryani, and curries 24/7 in Jackson Heights, Queens, NY. Order online or visit us today.',
  keywords: [
    'halal food Jackson Heights',
    'kebabs Queens NY',
    'Pakistani restaurant near me',
    '24 hour restaurant Queens',
    'Indian food Jackson Heights',
    'catering halal Queens',
    'biryani Queens',
    'Kabab King',
  ],
  openGraph: {
    title: 'Kabab King | Authentic Pakistani & Indian Cuisine',
    description:
      'Authentic halal kebabs, biryani, and curries served 24/7 in Jackson Heights, Queens.',
    url: 'https://kababking.com',
    siteName: 'Kabab King',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700&family=Outfit:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Restaurant',
              name: 'Kabab King',
              description: 'Authentic Pakistani & Indian halal restaurant in Jackson Heights, Queens.',
              url: 'https://kababking.com',
              telephone: '+1-718-457-5857',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '7301 37th Rd',
                addressLocality: 'Jackson Heights',
                addressRegion: 'NY',
                postalCode: '11372',
                addressCountry: 'US',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 40.7488,
                longitude: -73.8839,
              },
              openingHoursSpecification: {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
                opens: '00:00',
                closes: '23:59',
              },
              servesCuisine: ['Pakistani', 'Indian', 'Halal'],
              priceRange: '$$',
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <Navbar />
        <main className="flex-1 pt-16 sm:pt-[75px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
