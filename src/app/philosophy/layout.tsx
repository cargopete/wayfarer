import type { Metadata } from 'next';

export const metadata: Metadata = {
  description: 'The full argument: why Absurdism needs a method, and the two levels that supply one.',
};

export default function PhilosophyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
