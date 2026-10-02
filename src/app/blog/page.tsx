import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  description: 'The philosophy at work on particular problems.',
};

const posts = [
  {
    slug: 'on-the-unbolted-ceiling',
    title: 'On the Unbolted Ceiling',
    date: '2 October 2026',
    subtitle: 'A reply to Aldric Fynch. The silence is a bet, not a finding, and nothing on the floor depends on it. What this site accepts, what it leaves open, and why the door stays propped.',
  },
  {
    slug: 'the-pen-does-not-expire',
    title: 'The Pen Does Not Expire',
    date: '17 July 2026',
    subtitle: "On the belief that your life was written by a deceived child, and all that remains is to live in it. Authorship does not expire; only the excuse for declining it does. You are not the draft's tenant. You are its editor.",
  },
  {
    slug: 'on-the-propped-door',
    title: 'On the Propped Door',
    date: '16 June 2026',
    subtitle: 'A Road Note in another voice, and a companion to the last. The open door is no use unwalked. Here is what holding it open looks like day to day: five minutes, a cheap notebook, and a great deal of honest tedium.',
  },
  {
    slug: 'on-the-unproven-silence',
    title: 'On the Unproven Silence',
    date: '16 June 2026',
    subtitle: 'A Road Note in another voice. Wayfarism rests on a silent universe — but that silence was asserted, never proven. Here is how to prop the door honestly open without lying to yourself.',
  },
  {
    slug: 'on-other-maps',
    title: 'On Other Maps',
    date: '19 May 2026',
    subtitle: "A traveller's notes on the tools different traditions have made for carrying weight, and what the Wayfarer can borrow.",
  },
  {
    slug: 'on-family',
    title: 'On Family',
    date: '8 May 2026',
    subtitle: 'Family commitments are chosen without cosmic mandate, conducted without guarantee, and require something more durable than how you feel on any given morning. Here is what you are doing, if you walk that road.',
  },
  {
    slug: 'concerning-alice',
    title: 'Concerning Alice',
    date: '8 May 2026',
    subtitle: 'A commentary on a composite life built around the discovery model of the self — what Alice has genuinely noticed, and what the sensibility she has built from it quietly leaves out.',
  },
  {
    slug: 'on-the-self-underneath',
    title: 'On the Self Underneath',
    date: '7 May 2026',
    subtitle: 'Beneath the noise there is said to be a real self, accessible by subtraction, knowable by quieting. There is no marble. The self is not found. It is built.',
  },
  {
    slug: 'one-day',
    title: 'One Day',
    date: '5 May 2026',
    subtitle: 'The weight of everything life requires cannot be held all at once. You do not have to hold it all. You only have to get through today.',
  },
  {
    slug: 'on-the-bootstrapping-problem',
    title: 'On the Bootstrapping Problem',
    date: '5 May 2026',
    subtitle: 'The condition hides your boots. You cannot pull yourself up by them. Here is what you do instead.',
  },
];

export default function BlogPage() {
  return (
    <article className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-4xl md:text-5xl font-light mb-4 text-center">The Road Notes</h1>
      <p className="text-center text-[var(--color-muted)] italic mb-16">
        Wayfarism worked out in practice, not in theory.
      </p>

      <div className="space-y-10">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group block border-b border-[var(--color-border)] pb-10"
          >
            <p className="text-sm nav-text text-[var(--color-muted)] mb-2">{post.date}</p>
            <h2 className="text-2xl font-light mb-3 group-hover:text-[var(--color-lantern)] transition-colors">
              {post.title}
            </h2>
            <p className="text-[var(--color-muted)] italic">{post.subtitle}</p>
            <span className="inline-block mt-3 text-sm nav-text text-[var(--color-lantern)]">Read →</span>
          </Link>
        ))}
      </div>

      <div className="mt-16 pt-8 border-t border-[var(--color-border)] text-center">
        <p className="text-[var(--color-muted)] italic">
          &ldquo;Motion is the mechanism. Bearing is the meaning. Levity is what makes both sustainable.&rdquo;
        </p>
        <p className="text-sm nav-text text-[var(--color-muted)] mt-2">The road continues. We go again tomorrow.</p>
      </div>
    </article>
  );
}
