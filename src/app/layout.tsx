import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { menuItems } from '@/data/menu';

const BASE_URL = 'https://kababking.com';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Kabab King | Authentic Pakistani & Indian Cuisine — Jackson Heights, Queens',
    template: '%s | Kabab King',
  },
  description:
    'Authentic Pakistani & Indian cuisine in Jackson Heights, Queens. Open daily 7 AM – 2 AM. View our full menu with 50+ halal dishes, order online, or book catering.',
  keywords: [
    'halal food Jackson Heights',
    'kebabs Queens NY',
    'Pakistani restaurant near me',
    'late night restaurant Queens',
    'Indian food Jackson Heights',
    'catering halal Queens',
    'biryani Queens',
    'Kabab King',
    'halal restaurant Queens',
    'best kebabs NYC',
    'Pakistani food delivery Queens',
  ],
  openGraph: {
    title: 'Kabab King | Authentic Pakistani & Indian Cuisine',
    description:
      'Authentic halal kebabs, biryani, and curries in Jackson Heights, Queens. Open daily 7 AM – 2 AM. 50+ dishes, online ordering, and catering.',
    url: BASE_URL,
    siteName: 'Kabab King',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/kk-hero.png',
        width: 1200,
        height: 630,
        alt: 'Kabab King — Authentic Pakistani & Indian Cuisine in Jackson Heights, Queens',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kabab King | Authentic Pakistani & Indian Cuisine',
    description:
      'Authentic halal kebabs, biryani, and curries in Jackson Heights, Queens. Open daily 7 AM – 2 AM.',
    images: ['/kk-hero.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: BASE_URL,
  },
};

// Build the full JSON-LD structured data
function buildJsonLd() {
  // Menu items grouped by category for Menu schema
  const menuSections = Object.entries(
    menuItems.reduce<Record<string, typeof menuItems>>((acc, item) => {
      if (!acc[item.category]) acc[item.category] = [];
      acc[item.category].push(item);
      return acc;
    }, {})
  ).map(([category, items]) => ({
    '@type': 'MenuSection',
    name: category,
    hasMenuItem: items.map((item) => ({
      '@type': 'MenuItem',
      name: item.name,
      description: item.description,
      offers: {
        '@type': 'Offer',
        price: item.price.toFixed(2),
        priceCurrency: 'USD',
      },
    })),
  }));

  const restaurant = {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    '@id': `${BASE_URL}/#restaurant`,
    name: 'Kabab King',
    description:
      'Authentic Pakistani & Indian halal restaurant in Jackson Heights, Queens. Open daily 7 AM – 2 AM serving kebabs, biryani, curries, and more since 1997.',
    url: BASE_URL,
    telephone: '+1-718-457-5857',
    image: `${BASE_URL}/kk-hero.png`,
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
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '07:00',
      closes: '02:00',
    },
    servesCuisine: ['Pakistani', 'Indian', 'Halal'],
    priceRange: '$$',
    acceptsReservations: false,
    paymentAccepted: 'Cash, Credit Card',
    currenciesAccepted: 'USD',
    hasMenu: {
      '@type': 'Menu',
      name: 'Kabab King Menu',
      url: `${BASE_URL}/menu`,
      hasMenuSection: menuSections,
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.3',
      reviewCount: '418',
      bestRating: '5',
      worstRating: '1',
    },
    review: [
      {
        '@type': 'Review',
        author: { '@type': 'Person', name: 'Anish C' },
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
          bestRating: '5',
        },
        name: 'Best Chicken Kebabs Ever!',
        reviewBody:
          'The chicken kebabs are exceptional \u2014 the meat quality, the spices, and the flavor were incredible. Quick service and affordable prices.',
        publisher: { '@type': 'Organization', name: 'TripAdvisor' },
      },
      {
        '@type': 'Review',
        author: { '@type': 'Person', name: 'Daniel Sumit Ghosal' },
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
          bestRating: '5',
        },
        name: 'Oh my, I\u2019m Drooling!!!!',
        reviewBody:
          'One of NY\u2019s best Indian and Pakistani restaurants. Fresh naan and traditional Mughal cuisine done right.',
        publisher: { '@type': 'Organization', name: 'TripAdvisor' },
      },
      {
        '@type': 'Review',
        author: { '@type': 'Person', name: 'Tampa_traveler63' },
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '4',
          bestRating: '5',
        },
        name: 'Lots of great food at good prices',
        reviewBody:
          'Came with a group of 8 \u2014 excellent service and dishes. The best (and most raved-about dish) was the lamb chops. The kebabs were also excellent.',
        publisher: { '@type': 'Organization', name: 'TripAdvisor' },
      },
    ],
    sameAs: [
      'https://www.facebook.com/kababkingempire/',
      'https://www.instagram.com/kababkingny/',
      'https://www.yelp.com/biz/kabab-king-jackson-heights',
    ],
  };

  const breadcrumbHome = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: BASE_URL,
      },
    ],
  };

  return [restaurant, breadcrumbHome];
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = buildJsonLd();

  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700&family=Outfit:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        {jsonLd.map((data, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
          />
        ))}
      </head>
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-0 focus:left-0 focus:z-[99999] focus:bg-crimson focus:text-white focus:px-6 focus:py-3 focus:text-sm focus:font-semibold">
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" className="flex-1 pt-20 sm:pt-[91px]">{children}</main>
        <Footer />
        {/* Diagonal watermark overlay */}
        <div className="fixed inset-0 pointer-events-none z-[9998] overflow-hidden" aria-hidden="true">
          <div className="absolute inset-0 flex items-center justify-center">
            <p
              className="text-[clamp(2rem,5vw,4rem)] font-bold uppercase tracking-[0.25em] text-charcoal/[0.06] whitespace-nowrap select-none"
              style={{ transform: 'rotate(-30deg)' }}
            >
              Made by Intellizen LLC
            </p>
          </div>
        </div>
      </body>
    </html>
  );
}
