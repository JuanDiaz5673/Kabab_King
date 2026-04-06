import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contact Kabab King — visit us at 7301 37th Rd, Jackson Heights, Queens, NY 11372. Call (718) 457-5857. Open 24/7.',
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
