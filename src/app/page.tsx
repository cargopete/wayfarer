import Image from 'next/image';
import Link from 'next/link';

const navTiles = [
  {
    href: '/philosophy',
    title: 'The Philosophy',
    description: 'Start here. The full argument.',
  },
  {
    href: '/fiction',
    title: 'The Wayfarer in Fiction',
    description: 'What it looks like in practice.',
  },
  {
    href: '/codex',
    title: 'The Codex',
    description: 'Definitions. Short and clear.',
  },
];

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-5rem)] flex flex-col items-center justify-center px-6">
      {/* Hero section */}
      <div className="text-center max-w-3xl mx-auto">
        <Image
          src="/logo-full.png"
          alt="Wayfarism"
          width={300}
          height={300}
          className="mx-auto mb-12"
          priority
        />

        <p className="text-xl md:text-2xl italic text-[var(--color-muted)] mb-12">
          The universe offers no directions. The Wayfarer brings their own.
        </p>

        <div className="prose text-lg leading-relaxed mb-16">
          <p>
            Wayfarism is a philosophy for people who have stopped waiting for meaning to arrive.
            It accepts the silence of the universe without despair, and responds with a practical
            question: given that, what do we do? The answer is in two levels — Motion, which keeps
            you going when everything internal has failed, and Bearing, which tells you which way
            to face when you can stand upright. No cosmic sanction. No predetermined destination.
            Just a road, a lantern, and the decision to walk.
          </p>
        </div>

        {/* Navigation tiles */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {navTiles.map((tile) => (
            <Link
              key={tile.href}
              href={tile.href}
              className="group block p-8 border border-[var(--color-border)] rounded-lg hover:border-[var(--color-lantern)] transition-colors"
            >
              <h2 className="text-lg font-medium mb-2 nav-text group-hover:text-[var(--color-lantern)] transition-colors">
                → {tile.title}
              </h2>
              <p className="text-sm text-[var(--color-muted)] italic">
                {tile.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
