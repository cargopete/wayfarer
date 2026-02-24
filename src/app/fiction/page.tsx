import Link from 'next/link';

const characters = [
  {
    slug: 'juliette',
    name: 'Juliette',
    show: 'Silo',
    summary: 'The purest Wayfarer. Motion as vocation, truth as bearing.',
  },
  {
    slug: 'mark',
    name: 'Mark',
    show: 'Severance',
    summary: 'Motion without Bearing. What severance actually severs.',
  },
  {
    slug: 'harry-ambrose',
    name: 'Harry Ambrose',
    show: 'The Sinner',
    summary: 'A bearing in ruins, still generating motion.',
  },
  {
    slug: 'holden-ford-and-bill-tench',
    name: 'Holden Ford & Bill Tench',
    show: 'Mindhunter',
    summary: 'Two Wayfarers, two kinds of failure.',
  },
  {
    slug: 'jimmy-mcgill',
    name: 'Jimmy McGill',
    show: 'Better Call Saul',
    summary: 'A Wayfarer who chose the wrong bearing.',
  },
  {
    slug: 'walter-white',
    name: 'Walter White',
    show: 'Breaking Bad',
    summary: 'The anti-Wayfarer. Intensity mistaken for direction.',
  },
];

export default function FictionPage() {
  return (
    <article className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl md:text-5xl font-light mb-8 text-center">The Wayfarer in Fiction</h1>

      <div className="prose max-w-3xl mx-auto mb-16">
        <p className="text-lg">
          These characters were not written as Wayfarist illustrations. They arrived at the same
          territory independently, through story rather than argument. That is why they are useful.
          They show what the philosophy looks like when lived rather than theorised — imperfectly,
          under pressure, in worlds that are often unjust and sometimes actively hostile.
        </p>
      </div>

      {/* Character grid */}
      <div className="grid md:grid-cols-2 gap-6 mb-16">
        {characters.map((character) => (
          <Link
            key={character.slug}
            href={`/fiction/${character.slug}`}
            className="group block p-6 border border-[var(--color-border)] rounded-lg hover:border-[var(--color-lantern)] transition-colors"
          >
            <div className="flex justify-between items-start mb-2">
              <h2 className="text-xl font-medium group-hover:text-[var(--color-lantern)] transition-colors">
                {character.name}
              </h2>
              <span className="text-sm nav-text text-[var(--color-muted)]">
                {character.show}
              </span>
            </div>
            <p className="text-[var(--color-muted)] italic">
              {character.summary}
            </p>
          </Link>
        ))}
      </div>

      {/* Invitation */}
      <div className="text-center border-t border-[var(--color-border)] pt-12">
        <p className="text-[var(--color-muted)] italic">
          Know a character who belongs here? The Wayfarer appears in more stories than we have named.
        </p>
      </div>
    </article>
  );
}
