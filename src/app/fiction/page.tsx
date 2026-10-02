import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  description: 'Twelve who walk the road, and one who lost it.',
};

const literaryWayfarers = [
  {
    slug: 'jerome-k-jerome',
    name: 'Jerome, George & Harris',
    source: 'Three Men in a Boat',
    summary: 'The founding text of Wayfarist levity.',
  },
  {
    slug: 'provincial-lady',
    name: 'The Provincial Lady',
    source: 'E.M. Delafield',
    summary: 'Bearing maintained under chronic domestic entropy.',
  },
  {
    slug: 'james-herriot',
    name: 'James Herriot',
    source: 'All Creatures Great and Small',
        summary: 'The complete Wayfarer. All four pillars, across a whole life.',
  },
  {
    slug: 'aubrey-maturin',
    name: 'Aubrey & Maturin',
    source: "Patrick O'Brian",
    summary: 'A friendship as a bearing.',
  },
  {
    slug: 'dr-rieux',
    name: 'Dr Bernard Rieux',
    source: 'The Plague',
    summary: 'The cause that cannot be won, worked at daily.',
  },
];

const modernWayfarers = [
  {
    slug: 'juliette',
    name: 'Juliette',
    source: 'Silo',
    summary: 'Mastery as vocation, truth as bearing.',
  },
  {
    slug: 'mark',
    name: 'Mark',
    source: 'Severance',
    summary: 'Motion without Bearing. What severance actually severs.',
  },
  {
    slug: 'jeremy-clarkson',
    name: 'Jeremy Clarkson',
    source: "Clarkson's Farm",
    summary: 'Wayfarism arrived uninvited, and he stayed.',
  },
  {
    slug: 'ted-lasso',
    name: 'Ted Lasso',
    source: 'Ted Lasso',
    summary: 'Bearing as a way of treating people.',
  },
  {
    slug: 'detectorists',
    name: 'Lance & Andy',
    source: 'Detectorists',
    summary: 'Wayfarism on a quiet Tuesday afternoon.',
  },
  {
    slug: 'sam-gamgee',
    name: 'Samwise Gamgee',
    source: 'The Lord of the Rings',
    summary: 'The Wayfarer with nothing but the road.',
  },
    {
    slug: 'morrie-schwartz',
    name: 'Morrie Schwartz',
    source: 'Tuesdays with Morrie',
    summary: 'What remains when you can no longer do.',
  },
  {
    slug: 'jimmy-mcgill',
    name: 'Jimmy McGill',
    source: 'Better Call Saul',
    summary: 'All the materials, and no bearing.',
  },
];

function CharacterCard({ character }: { character: { slug: string; name: string; source: string; summary: string } }) {
  return (
    <Link
      href={`/fiction/${character.slug}`}
      className="group block p-6 border border-[var(--color-border)] rounded-lg hover:border-[var(--color-lantern)] transition-colors"
    >
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-xl font-medium group-hover:text-[var(--color-lantern)] transition-colors">
          {character.name}
        </h3>
        <span className="text-sm nav-text text-[var(--color-muted)] text-right ml-4">
          {character.source}
        </span>
      </div>
      <p className="text-[var(--color-muted)] italic">
        {character.summary}
      </p>
    </Link>
  );
}

export default function FictionPage() {
  return (
    <article className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl md:text-5xl font-light mb-8 text-center">The Wayfarer in Fiction</h1>

      <div className="prose max-w-3xl mx-auto mb-16">
        <p className="text-lg">
          Wayfarism did not emerge from a vacuum. It has a literary tradition — British, humane,
          characterised by endurance held lightly — and a set of modern examples that arrived at
          the same territory independently, through story rather than argument. Both are useful.
          They show what the philosophy looks like when lived rather than theorised: imperfectly,
          under pressure, sometimes triumphantly, sometimes as a warning. Not all of it is fiction
          in the strict sense: Herriot is memoir lightly disguised, <em>Tuesdays with Morrie</em> is memoir
          outright, and <em>Clarkson&apos;s Farm</em> is a documentary. They are here because they are stories.
        </p>
      </div>

      {/* Literary Wayfarers */}
      <section className="mb-16">
        <h2 className="text-2xl font-light mb-2">The Literary Wayfarers</h2>
        <p className="text-[var(--color-muted)] mb-6 italic">The tradition that built the philosophy.</p>
        <div className="grid md:grid-cols-2 gap-6">
          {literaryWayfarers.map((character) => (
            <CharacterCard key={character.slug} character={character} />
          ))}
        </div>
      </section>

      {/* Modern Wayfarers */}
      <section className="mb-16">
        <h2 className="text-2xl font-light mb-2">The Modern Wayfarers</h2>
        <p className="text-[var(--color-muted)] mb-6 italic">What it looks like now.</p>
        <div className="grid md:grid-cols-2 gap-6">
          {modernWayfarers.map((character) => (
            <CharacterCard key={character.slug} character={character} />
          ))}
        </div>
      </section>

      {/* Invitation */}
      <div className="text-center border-t border-[var(--color-border)] pt-12">
        <p className="text-[var(--color-muted)] italic">
          Know a character who belongs here? The Wayfarer appears in more stories than we have named.
          Write to{' '}
          <a href="mailto:pavlovskipetko@gmail.com" className="text-[var(--color-lantern)] hover:underline not-italic">
            pavlovskipetko@gmail.com
          </a>
          .
        </p>
      </div>
    </article>
  );
}
