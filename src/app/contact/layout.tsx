import type { Metadata } from 'next';

const BASE_URL = 'https://kababking.com';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contact Kabab King — visit us at 7301 37th Rd, Jackson Heights, Queens, NY 11372. Call (718) 457-5857. Open 24/7. Directions, map, and contact form.',
  openGraph: {
    title: 'Contact | Kabab King',
    description:
      'Visit Kabab King at 7301 37th Rd, Jackson Heights, Queens, NY 11372. Call (718) 457-5857. Open 24/7.',
    url: `${BASE_URL}/contact`,
    images: [{ url: '/kk-hero.png', width: 1200, height: 630, alt: 'Contact Kabab King' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact | Kabab King',
    description: 'Visit us at 7301 37th Rd, Jackson Heights, Queens, NY. Call (718) 457-5857. Open 24/7.',
    images: ['/kk-hero.png'],
  },
  alternates: {
    canonical: `${BASE_URL}/contact`,
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
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
              { '@type': 'ListItem', position: 2, name: 'Contact', item: `${BASE_URL}/contact` },
            ],
          }),
        }}
      />
      {children}
    </>
  );
}
