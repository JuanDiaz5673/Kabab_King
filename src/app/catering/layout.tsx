import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Catering',
  description:
    'Kabab King catering for events, parties, and corporate gatherings in Queens, NY. Halal Pakistani & Indian food packages for 10 to 500+ guests.',
};

export default function CateringLayout({ children }: { children: React.ReactNode }) {
  return children;
}
