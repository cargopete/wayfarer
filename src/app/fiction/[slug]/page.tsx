import Link from 'next/link';
import { notFound } from 'next/navigation';

const characterStudies: Record<string, {
  name: string;
  show: string;
  subtitle: string;
  content: React.ReactNode;
}> = {
  'juliette': {
    name: 'Juliette',
    show: 'Silo',
    subtitle: 'The purest Wayfarer in the group.',
    content: (
      <>
        <p>
          Juliette is Motion incarnate. She fixes things. Literally — she is a mechanic, and the
          work talks back to her in the most direct way possible. When her world reveals itself to
          be built on systematic lies and institutional violence, she does not philosophise. She
          moves. She digs. She descends and ascends and descends again.
        </p>
        <p>
          Her Bearing is truth — not abstract truth but specific, concrete, verifiable truth: what
          is actually out there, what actually happened, what the silo actually is. She chose this
          cause without anyone endorsing it, against all rational self-interest, knowing it might
          kill her. She fights for it anyway.
        </p>
        <p>
          Her levity is quieter — a dry practicality, a refusal to be melodramatic about things
          that are genuinely terrible. She notes, gets on with it, and continues. She is a Wayfarer
          in a world designed to prevent anyone from having a bearing at all.
        </p>
      </>
    ),
  },
  'mark': {
    name: 'Mark',
    show: 'Severance',
    subtitle: 'Motion as survival mechanism; Bearing as the thing severed.',
    content: (
      <>
        <p>
          Mark's severance procedure is the most literal enactment of the Motion floor imaginable.
          Unable to bear the weight of grief after his wife's death, he surgically separates his
          working self from his feeling self. His Innie — the version of him at work — has pure
          Motion without any Bearing at all. Purpose without direction. Structure without meaning.
          He functions. He does not live.
        </p>
        <p>
          The tragedy of Mark is that severance solves the bootstrapping problem and destroys
          everything else. His Innie is efficient, loyal, competent — and completely without a
          chosen bearing, because the capacity to choose has been locked in another room. What
          Severance argues, almost accidentally, is that Motion without Bearing is not a solution.
          It is a very sophisticated postponement.
        </p>
        <p>
          Mark's arc is about recovering his Bearing — the grief, the love, the cause — at the
          cost of the numbness that made functioning possible. Wayfarism would say: this is right.
          The floor is not a destination.
        </p>
      </>
    ),
  },
  'harry-ambrose': {
    name: 'Harry Ambrose',
    show: 'The Sinner',
    subtitle: 'A Bearing in ruins, still generating motion.',
    content: (
      <>
        <p>
          Ambrose is perhaps the most complex case. He functions — barely, erratically, with
          considerable personal cost — and his function is entirely in service of understanding.
          Not justice exactly, not law, but the specific human truth of why someone did what they
          did. This is his cause, and it is a strange one: a detective whose real investigation
          is always psychological, always reaching for something the official process cannot name.
        </p>
        <p>
          His Motion is unreliable. He is not a well man. But his Bearing — toward understanding,
          toward the buried human truth — is absolutely consistent. It survives his personal chaos
          because it is not dependent on his personal wellbeing. He drags himself to the cause
          regardless.
        </p>
        <p>
          His levity is almost nonexistent, which is both his limitation and his gift. He goes
          all the way in. He is a Wayfarer without much lightness, which makes him effective and
          also makes him hard to be.
        </p>
      </>
    ),
  },
  'holden-ford-and-bill-tench': {
    name: 'Holden Ford & Bill Tench',
    show: 'Mindhunter',
    subtitle: 'Two Wayfarers, two kinds of failure.',
    content: (
      <>
        <p>
          They share a cause — understanding the criminal mind, building the language for something
          that has no language yet — and that shared cause is genuinely worth fighting for. But
          they carry it differently, and the difference is instructive.
        </p>
        <p>
          Holden has the cause and loses himself in it. His Bearing is clear but he has no levity
          whatsoever — he disappears into the work, loses the ability to maintain transmission
          (his relationships dissolve, his personal life collapses), and eventually breaks. He is
          a warning about what happens when the chosen cause consumes the other pillars rather
          than complementing them.
        </p>
        <p>
          Bill has all four pillars — the cause, genuine mastery, deep transmission (his family
          is everything to him), and a quiet, dry Midwestern levity that keeps him sane. But
          circumstances attack his transmission catastrophically, and watching him try to maintain
          Bearing while his personal life disintegrates is the emotional core of the series. Bill
          is what a Wayfarer looks like under genuinely hostile conditions: diminished, damaged,
          still walking.
        </p>
        <p>
          Together they illustrate that the four pillars must work in concert. A cause without
          levity consumes. Transmission without cause stagnates. The balance is the practice.
        </p>
      </>
    ),
  },
  'jimmy-mcgill': {
    name: 'Jimmy McGill / Saul Goodman',
    show: 'Better Call Saul',
    subtitle: 'A Wayfarer who chose the wrong bearing.',
    content: (
      <>
        <p>
          Jimmy is perhaps the most philosophically rich case of the group, because he has
          everything Wayfarism asks for except one thing: his chosen cause is wrong, and he knows it.
        </p>
        <p>
          He has extraordinary mastery — of language, of people, of legal manoeuvre, of
          improvisation. He has levity in abundance, perhaps the most naturally levitous character
          in the group; his humour is genuine, his lightness is real, his ability to find the
          comedy in his situation is almost heroic. He has transmission — he cares about people,
          genuinely, including Chuck, including Kim, including his clients whom no one else will
          represent.
        </p>
        <p>
          But his bearing is bent. He chooses the path of least moral resistance repeatedly,
          framing each choice as pragmatism, until pragmatism has accumulated into something he
          can no longer look at directly. His tragedy is not that he lacks the Wayfarist virtues
          — he has them in abundance — but that he points them in the wrong direction and then
          cannot turn back.
        </p>
        <p>
          Jimmy is what happens when the chosen cause is oneself. Not narcissism exactly —
          something more sympathetic and more sad. He wanted to be recognised, to matter, to be
          the equal of the brother who dismissed him. This is a human want. It is not a Bearing.
        </p>
        <p className="italic text-[var(--color-muted)]">
          Saul Goodman is the Motion that remains when the Bearing has been surrendered.
        </p>
      </>
    ),
  },
  'walter-white': {
    name: 'Walter White',
    show: 'Breaking Bad',
    subtitle: 'The anti-Wayfarer; or, what happens when ego replaces bearing.',
    content: (
      <>
        <p>
          Walter begins as a candidate for Wayfarism. He has mastery — genuine, exceptional
          mastery that has been systematically undervalued. He has a transmission impulse, or
          the appearance of one: he tells himself, convincingly, that everything is for his
          family. He even has a cause: dignity, recognition, the correction of a long injustice
          done to his talent.
        </p>
        <p>
          But Walter's bearing is not chosen with open eyes. It is chosen with closed ones. He
          does not acknowledge that his cause is ego dressed as principle; he cannot hold his
          situation with levity because he cannot afford to see it clearly; and his mastery,
          rather than submitting him to the work's resistance, becomes a tool of domination.
        </p>
        <p>
          The Wayfarist reading of Walter White is that he mistakes intensity for bearing. He is
          moving with tremendous force in a direction he has not honestly chosen. The result is
          the destruction of everything the other pillars were supposed to protect — the family
          he claimed to transmit to, the community he claimed to serve, the self he claimed to
          be expressing.
        </p>
        <p>
          Walter is a cautionary figure not because he is evil — he is not simply evil — but
          because he is a person with real Wayfarist materials who assembles them in the wrong
          order, with the wrong kind of seriousness, and without the levity that might have let
          him see what he was becoming.
        </p>
        <p className="italic text-[var(--color-muted)]">
          He said it himself, in the end: he did it for himself. He liked it. He was good at it.
          This is Motion without Bearing. This is what it costs.
        </p>
      </>
    ),
  },
};

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
  return Object.keys(characterStudies).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Params }) {
  const { slug } = await params;
  const character = characterStudies[slug];
  if (!character) return { title: 'Not Found' };

  return {
    title: `${character.name} — The Wayfarer in Fiction`,
    description: character.subtitle,
  };
}

export default async function CharacterPage({ params }: { params: Params }) {
  const { slug } = await params;
  const character = characterStudies[slug];

  if (!character) {
    notFound();
  }

  return (
    <article className="max-w-3xl mx-auto px-6 py-16">
      <Link
        href="/fiction"
        className="inline-block mb-8 text-sm nav-text text-[var(--color-muted)] hover:text-[var(--color-lantern)]"
      >
        &larr; Back to Fiction
      </Link>

      <header className="mb-12">
        <p className="text-sm nav-text text-[var(--color-muted)] mb-2">{character.show}</p>
        <h1 className="text-4xl md:text-5xl font-light mb-4">{character.name}</h1>
        <p className="text-xl italic text-[var(--color-muted)]">{character.subtitle}</p>
      </header>

      <div className="prose space-y-6 text-lg leading-relaxed">
        {character.content}
      </div>

      <footer className="mt-16 pt-8 border-t border-[var(--color-border)]">
        <Link
          href="/fiction"
          className="text-[var(--color-muted)] hover:text-[var(--color-lantern)] transition-colors"
        >
          &larr; Return to character studies
        </Link>
      </footer>
    </article>
  );
}
