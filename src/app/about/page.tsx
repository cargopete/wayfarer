import type { Metadata } from 'next';

export const metadata: Metadata = {
  description: 'Where Wayfarism came from, what it borrows, and what it is not.',
};

export default function AboutPage() {
  return (
    <article className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-4xl md:text-5xl font-light mb-16 text-center">About</h1>

      <div className="space-y-16">
        {/* What this is */}
        <section>
          <h2 className="text-2xl mb-6">What this is</h2>
          <p className="leading-relaxed mb-6">
            Wayfarism is a philosophy assembled from existing traditions — Absurdism, Stoicism,
            Aristotelian virtue ethics, Pragmatism — and from the British literary tradition of
            endurance with humour. It does not claim to have invented any of its component parts.
            It claims to have arranged them in a way that is useful.
          </p>
          <p className="leading-relaxed mb-6">
            It also has neighbours worth naming: behavioural activation and Morita therapy, on
            action before feeling; Viktor Frankl, on meaning through work, love and the stance
            taken toward suffering; Thomas Nagel, on irony as the answer to absurdity; Sartre and
            de Beauvoir, on the self as something made; Matthew Crawford and Richard Sennett, on
            work that talks back.
          </p>
          <p className="leading-relaxed">
            What it claims as its own is the arrangement: a floor built for the days when the self
            has failed; the dog, or any demand that does not consult your mood; the English comic
            tradition taken seriously as philosophy; and passing things on as a pillar in its own
            right.
          </p>
        </section>

        {/* Where it came from */}
        <section>
          <h2 className="text-2xl mb-6">Where it came from</h2>
          <p className="leading-relaxed">
            I spent years searching for a philosophy that helps with the meaninglessness of life.
            The ones I found were honest about the problem or useful on a bad morning, but rarely
            both. Wayfarism is what I assembled in the end — not in a study, but in fragments,
            over time, in response to actual difficulty.
          </p>
        </section>

        {/* An open philosophy */}
        <section>
          <h2 className="text-2xl mb-6">An open philosophy</h2>
          <p className="leading-relaxed mb-6">
            Wayfarism is not finished. The Wayfarer in Fiction section will grow. The Codex will
            be revised. If a character, a quote, a definition, or an argument belongs here and is
            missing, that is an oversight rather than a position. The road is still being walked.
          </p>
          <p className="text-[var(--color-muted)] italic">
            For discussions, suggestions, or corrections, write to{' '}
            <a href="mailto:pavlovskipetko@gmail.com" className="text-[var(--color-lantern)] hover:underline not-italic">
              pavlovskipetko@gmail.com
            </a>
            .
          </p>
          <p className="text-sm nav-text text-[var(--color-muted)] mt-6">— Petko Pavlovski</p>
        </section>

        {/* What this is not */}
        <section>
          <h2 className="text-2xl mb-6">What this is not</h2>
          <p className="leading-relaxed">
            Wayfarism is a philosophy, not a treatment. If you are in danger, tell someone first:
            a doctor, a crisis line, a person who will come. The dog can wait ten minutes.
          </p>
        </section>
      </div>
    </article>
  );
}
