'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const navItems = [
  { href: '/philosophy', label: 'The Philosophy' },
  { href: '/fiction', label: 'The Wayfarer in Fiction' },
  { href: '/codex', label: 'The Codex' },
  { href: '/quotes', label: 'Quotes' },
  { href: '/about', label: 'About' },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--color-background)]/95 backdrop-blur-sm border-b border-[var(--color-border)]">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/logo-small.png"
            alt="Wayfarer"
            width={40}
            height={40}
            className="hover:opacity-80 transition-opacity"
          />
        </Link>

        <ul className="hidden md:flex items-center gap-8 text-sm nav-text">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`transition-colors ${
                  pathname === item.href
                    ? 'text-[var(--color-lantern)]'
                    : 'text-[var(--color-muted)] hover:text-[var(--color-foreground)]'
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <button className="md:hidden p-2 nav-text text-[var(--color-muted)]">
          Menu
        </button>
      </nav>
    </header>
  );
}
