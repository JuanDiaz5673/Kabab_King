import type { Metadata } from 'next';

const BASE_URL = 'https://kababking.com';

export const metadata: Metadata = {
  title: 'Catering',
  description:
    'Kabab King catering for events, parties, and corporate gatherings in Queens, NY. Halal Pakistani & Indian food packages for 10 to 500+ guests. Get a free quote.',
  openGraph: {
    title: 'Catering | Kabab King',
    description:
      'Halal catering for events, parties, and corporate gatherings. Pakistani & Indian food packages for 10 to 500+ guests.',
    url: `${BASE_URL}/catering`,
    images: [{ url: '/kk-hero.png', width: 1200, height: 630, alt: 'Kabab King Catering Services' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Catering | Kabab King',
    description: 'Halal catering for 10 to 500+ guests. Pakistani & Indian food packages in Queens, NY.',
    images: ['/kk-hero.png'],
  },
  alternates: {
    canonical: `${BASE_URL}/catering`,
  },
};

export default function CateringLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
              { '@type': 'ListItem', position: 2, name: 'Catering', item: `${BASE_URL}/catering` },
            ],
          }),
        }}
      />
      {children}
    </>
  );
}
