import type { Metadata } from 'next';

const BASE_URL = 'https://kababking.com';

export const metadata: Metadata = {
  title: 'Menu',
  description:
    'Browse the full Kabab King menu — 50+ halal dishes including kebabs, biryani, curries, breads, and more with prices. Order online or dine in daily 7 AM – 2 AM in Jackson Heights, Queens.',
  openGraph: {
    title: 'Menu | Kabab King',
    description:
      'Browse 50+ authentic halal dishes — kebabs, biryani, curries, and more. All with prices. Open daily 7 AM – 2 AM.',
    url: `${BASE_URL}/menu`,
    images: [{ url: '/kk-hero.png', width: 1200, height: 630, alt: 'Kabab King Menu' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Menu | Kabab King',
    description: 'Browse 50+ authentic halal dishes with prices. Open daily 7 AM – 2 AM.',
    images: ['/kk-hero.png'],
  },
  alternates: {
    canonical: `${BASE_URL}/menu`,
  },
};

export default function MenuLayout({ children }: { children: React.ReactNode }) {
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
              { '@type': 'ListItem', position: 2, name: 'Menu', item: `${BASE_URL}/menu` },
            ],
          }),
        }}
      />
      {children}
    </>
  );
}
