import Link from 'next/link';

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
];

const modernWayfarers = [
  {
    slug: 'juliette',
    name: 'Juliette',
    source: 'Silo',
    summary: 'Motion as vocation, truth as bearing.',
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
    summary: 'Wayfarism arrived uninvited — and was accepted anyway.',
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
    summary: 'The purest Wayfarer in all of fiction.',
  },
  {
    slug: 'jimmy-mcgill',
    name: 'Jimmy McGill',
    source: 'Better Call Saul',
    summary: 'A Wayfarer who chose the wrong bearing.',
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
          under pressure, sometimes triumphantly, sometimes as a warning.
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
        </p>
      </div>
    </article>
  );
}
