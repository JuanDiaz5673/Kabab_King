import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Menu',
  description:
    'Browse the full Kabab King menu — kebabs, biryani, curries, breads, and more. All 100% halal with prices. Order online or dine in 24/7.',
};

export default function MenuLayout({ children }: { children: React.ReactNode }) {
  return children;
}
