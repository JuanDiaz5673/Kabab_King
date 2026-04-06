import type { Metadata } from 'next';

const BASE_URL = 'https://kababking.com';

export const metadata: Metadata = {
  title: 'Order Online',
  description:
    'Order Kabab King online for pickup or delivery. Authentic halal kebabs, biryani, curries, and more delivered to your door in Jackson Heights, Queens.',
  openGraph: {
    title: 'Order Online | Kabab King',
    description:
      'Order authentic halal food online for pickup or delivery. Kebabs, biryani, and more from Jackson Heights, Queens.',
    url: `${BASE_URL}/order`,
    images: [{ url: '/kk-hero.png', width: 1200, height: 630, alt: 'Order Kabab King Online' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Order Online | Kabab King',
    description: 'Order authentic halal food online for pickup or delivery from Jackson Heights, Queens.',
    images: ['/kk-hero.png'],
  },
  alternates: {
    canonical: `${BASE_URL}/order`,
  },
};

export default function OrderLayout({ children }: { children: React.ReactNode }) {
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
              { '@type': 'ListItem', position: 2, name: 'Order Online', item: `${BASE_URL}/order` },
            ],
          }),
        }}
      />
      {children}
    </>
  );
}
