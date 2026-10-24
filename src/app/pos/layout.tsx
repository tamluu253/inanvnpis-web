import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Internal System',
  robots: {
    index: false,
    follow: false,
  },
};

export default function PosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
