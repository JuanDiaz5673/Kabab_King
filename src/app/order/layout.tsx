import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Order Online',
  description:
    'Order Kabab King online for pickup or delivery. Authentic halal kebabs, biryani, and more delivered to your door in Jackson Heights, Queens.',
};

export default function OrderLayout({ children }: { children: React.ReactNode }) {
  return children;
}
