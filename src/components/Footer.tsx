'use client';

import { useState, useEffect } from 'react';

const footerQuotes = [
  'Motion is the mechanism. Bearing is the meaning. Levity is what makes both sustainable.',
  'One must imagine Sisyphus happy. Wayfarism asks: and in which direction is he walking?',
  'The road continues. We go again tomorrow.',
];

export default function Footer() {
  const [quoteIndex, setQuoteIndex] = useState(0);

  useEffect(() => {
    // Rotate quotes every 10 seconds
    const interval = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % footerQuotes.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="border-t border-[var(--color-border)] mt-24">
      <div className="max-w-4xl mx-auto px-6 py-16 text-center">
        <p className="text-[var(--color-muted)] italic mb-8 transition-opacity duration-500">
          "{footerQuotes[quoteIndex]}"
        </p>
        <p className="text-sm nav-text text-[var(--color-muted)]">
          The road continues. We go again tomorrow.
        </p>
      </div>
    </footer>
  );
}
