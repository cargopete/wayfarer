'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

const chapters = [
  { id: 'the-problem', title: 'The Problem' },
  { id: 'motion', title: 'Motion' },
  { id: 'bearing', title: 'Bearing' },
  { id: 'the-pillars', title: 'The Four Pillars' },
  { id: 'the-road', title: 'The Road, Day by Day' },
];

export default function PhilosophyPage() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setProgress(scrollPercent);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Reading progress bar */}
      <div className="fixed top-[73px] left-0 right-0 h-0.5 bg-[var(--color-border)] z-40">
        <div className="progress-bar h-full" style={{ width: `${progress}%` }} />
      </div>

      {/* Sticky chapter navigation */}
      <nav className="sticky top-[73px] bg-[var(--color-background)]/95 backdrop-blur-sm border-b border-[var(--color-border)] z-30">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <ul className="flex gap-8 text-sm nav-text overflow-x-auto">
            {chapters.map((chapter) => (
              <li key={chapter.id}>
                <a
                  href={`#${chapter.id}`}
                  className="text-[var(--color-muted)] hover:text-[var(--color-lantern)] transition-colors whitespace-nowrap"
                >
                  {chapter.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <article className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-light mb-16 text-center">The Philosophy</h1>

        {/* Chapter 1: The Problem */}
        <section id="the-problem" className="mb-24 scroll-mt-32">
          <h2 className="text-2xl md:text-3xl mb-2">The Problem</h2>
          <p className="text-[var(--color-muted)] italic mb-8">What Absurdism got right, and what it left to be worked out.</p>

          <p className="mb-6">
            Any serious philosophy must begin with what is actually true, even when what is actually true is uncomfortable.
          </p>

          <p className="mb-6">
            Absurdism, as articulated by Albert Camus in the middle of the twentieth century, is the most honest diagnosis of the human condition available. The diagnosis runs as follows. Human beings are creatures who demand meaning — we cannot help it, it is structural to how we think and feel and organise our lives. We require reasons, narratives, purposes. We need to know why. The universe, however, offers no answer to this demand — none, at least, that anyone has been able to show. As far as we can honestly tell, it is silent, indifferent, and entirely uninterested in our requirement for significance.
          </p>

          <p className="mb-6">
            The collision between our demand for meaning and the universe's silence is what Camus called the Absurd. It is not a property of the world alone, nor of the human mind alone, but of the confrontation between the two. We are meaning-seeking creatures in a meaning-free universe, and this mismatch is the fundamental condition of conscious existence.
          </p>

          <p className="mb-6">
            Camus considered the ways out and refused them. Physical suicide accepts the Absurd's verdict. Philosophical suicide — the leap into a faith or a system that explains the silence away — resolves the confrontation by refusing to see it clearly. And he had no patience for plain resignation, the folded hands and the waiting.
          </p>

          <p className="mb-6">
            Camus proposed revolt. The absurd hero lives consciously within the contradiction. They neither resolve it nor succumb to it. They embrace life in full knowledge that it is finite and unsanctioned — not because of the Absurd, but with their eyes open to it.
          </p>

          <blockquote className="pull-quote text-xl">
            "One must imagine Sisyphus happy."<br />
            <span className="text-sm">— Camus</span><br />
            <span className="text-sm italic">Wayfarism asks: and in which direction is he walking?</span>
          </blockquote>

          <p>
            Absurdism is correct. As a diagnosis, it is essentially complete. But a diagnosis is not a treatment. <em>The Myth of Sisyphus</em> tells us how to hold our situation. It does not tell us what to do on Tuesday. Camus knew this — Dr Rieux in <em>The Plague</em>, doing his rounds in a city he cannot save, is the beginning of an answer. Wayfarism tries to turn that example into a method.
          </p>
        </section>

        {/* Chapter 2: Motion */}
        <section id="motion" className="mb-24 scroll-mt-32">
          <h2 className="text-2xl md:text-3xl mb-2">Motion</h2>
          <p className="text-[var(--color-muted)] italic mb-8">The first level. Keep going. That is enough.</p>

          <p className="mb-6">
            Motion is the floor. It asks nothing philosophical of you. It asks only that you move.
          </p>

          <p className="mb-6">
            To understand why Motion is necessary, one must understand what it works against. Depression and anxiety are self-reinforcing conditions. Depression reduces activity, and reduced activity deepens depression. Anxiety promotes avoidance, and avoidance increases anxiety. Both disorders share a crucial feature: they disable the very capacities needed to recover from them.
          </p>

          <p className="mb-6">
            This is the bootstrapping problem. You cannot pull yourself up by your own bootstraps because the condition has hidden your boots. Standard advice fails here. "Just do something" assumes the capacity to just do.
          </p>

          <p className="mb-6">
            The counterintuitive truth — the basis of what clinicians call behavioural activation, and of Morita therapy before it — is that action generates motivation more reliably than motivation generates action. Do the thing, and the feeling sometimes follows. Or it doesn't follow, but the thing is done regardless.
          </p>

          <blockquote className="pull-quote text-xl">
            Feed the dog. Fix the door. Move before the mind fully wakes to its misery.
          </blockquote>

          <p className="mb-6">
            If internal motivation is unavailable, external demand becomes essential. An external demand is a claim made on you by something outside yourself: a person, an animal, a commitment, a deadline. The dog does not care about your depression. The dog needs feeding. This is annoying, intrusive, relentless — and exactly what is needed.
          </p>

          <p className="mb-6">
            Concrete work is work with visible results. The garage door was broken; now it works. The dishes were dirty; now they are clean. This concreteness matters because it provides feedback that depressive cognition cannot distort. Your mind may tell you that you are worthless — but the fixed garage door is a fact, indifferent to interpretation.
          </p>

          <p className="mb-6">
            All of this assumes a dog. Some people have none — no animal, no rota, no one expecting them on Thursday. The answer is to get one while you can still stand: take on a responsibility that will not wait for your mood. An animal, an allotment, a standing appointment, a promise made to a particular person. This is the service Bearing does for Motion: every pillar, pursued while upright, leaves behind demands that will catch you later. Build the floor before you need it. And if you are already down with no dog, borrow one: make an appointment with someone whose job is to expect you.
          </p>

          <p>
            Motion is correct and necessary. For the person in crisis, it is the first move — the one available before any other is. It is not a cure; it is a floor. And it is not a substitute for help: if you cannot keep yourself safe, the first motion is to tell someone — a doctor, a crisis line, a person who will come. Feeding the dog and asking for help are not alternatives. Do both. For the person standing upright, asking what to do with their aliveness, Motion alone is a floor without walls. The second level builds from here.
          </p>
        </section>

        {/* Chapter 3: Bearing */}
        <section id="bearing" className="mb-24 scroll-mt-32">
          <h2 className="text-2xl md:text-3xl mb-2">Bearing</h2>
          <p className="text-[var(--color-muted)] italic mb-8">The second level. Choose your road. Walk it with open eyes.</p>

          <p className="mb-6">
            Bearing is a navigational term. It means the direction of travel relative to a fixed point. A bearing needs a fixed point, and the universe supplies none. So the Wayfarer sets one. The fixed point is where we put it — and the honesty of the system lies in remembering that we put it there.
          </p>

          <p className="mb-6">
            Bearing implies movement — but oriented movement. A person with a bearing is going somewhere, even if somewhere is partly invented, even if the road needs revision, even if it is muddier than the map suggested.
          </p>

          <p className="mb-6">
            Bearing is the second level of Wayfarism. It is the orientation that transforms motion into direction. It does not replace Motion — the floor remains, and you will return to it — but it builds upon Motion by asking the question Motion declines to ask: not just how to keep going, but where.
          </p>

          <p className="mb-6">
            Bearing is whatever you set your course by. It can be a craft, a cause, a person, a household, a friendship — love and care are bearings as surely as work is. In practice it stands on four pillars:
          </p>

          <ul className="mb-6 space-y-2 pl-6">
            <li><strong>Mastery</strong> — A craft or skill pursued with genuine attention.</li>
            <li><strong>Transmission</strong> — The deliberate act of passing something on, down the chain or across it.</li>
            <li><strong>Chosen Cause</strong> — A direction that reaches beyond your own household.</li>
            <li><strong>Levity</strong> — Seriousness held lightly.</li>
          </ul>

          <p className="mb-6">
            The Bearing is chosen, not given. This is not a weakness — it is the only honest kind.
          </p>

          <p className="mb-6">
            Not everything a person wants is a Bearing. Wayfarism does not rank roads — it will not tell you which cause is worthy — but it does say what a road is. A Bearing points beyond the self: the wish to be recognised is a human want, not a direction. A Bearing holds when it stops feeling good: what you would drop on the first bad morning was a mood. And a Bearing stays open to revision: it is chosen again, with corrections, every time the road proves muddier than the map. These are tests of structure, not of virtue.
          </p>

          <p>
            <strong>The boundary.</strong> Wayfarism does not moralise. It holds one line: you may not take another person's road from them by force, threat or fraud. This is not discovered in the universe. It is a fixed point we place, for the same reason we place every other — a philosophy of chosen roads cannot coherently deny other people theirs.
          </p>
        </section>

        {/* Chapter 4: The Pillars */}
        <section id="the-pillars" className="mb-24 scroll-mt-32">
          <h2 className="text-2xl md:text-3xl mb-2">The Four Pillars</h2>
          <p className="text-[var(--color-muted)] italic mb-8">What Bearing is made of.</p>

          {/* Mastery */}
          <div className="mb-12">
            <h3 className="text-xl font-medium mb-1">Mastery</h3>
            <p className="text-[var(--color-muted)] italic mb-4">Submit to the resistance of good work.</p>

            <p className="mb-4">
              A craft or skill pursued with genuine attention generates a particular kind of meaning — not because the universe endorses it but because the work talks back. This is the crucial distinction. Most sources of comfort are passive: they offer warmth or distraction or temporary relief. A skill is active and demanding. It has its own standards, its own resistance. You can be wrong about it in ways that are not matters of opinion.
            </p>

            <p className="mb-4">
              The enforced humility of mastery is psychologically significant. The mind left to itself drifts toward self-contempt in one direction or an untested high opinion of itself in the other. Genuine craft cuts through both. The work simply requires your best current ability, registers whether it received it, and continues regardless of your feelings about yourself.
            </p>

            <p className="text-[var(--color-muted)] italic">
              The universe offers no directions. It will, however, tell you whether the garage door works. This is the most reliable feedback available.
            </p>
          </div>

          {/* Transmission */}
          <div className="mb-12">
            <h3 className="text-xl font-medium mb-1">Transmission</h3>
            <p className="text-[var(--color-muted)] italic mb-4">You are a link in a chain. Don't break it.</p>

            <p className="mb-4">
              You received something. A language, a way of seeing, a set of tools, a particular quality of attention, a set of values held imperfectly but genuinely. You received these things from people who received them from others, in a chain that extends back beyond any individual life.
            </p>

            <p className="mb-4">
              Transmission is the deliberate act of passing something on. Children are the most obvious form, but the principle is broader. A teacher transmits. A craftsperson who takes on an apprentice transmits. A writer transmits. Even a person who simply maintains a community transmits.
            </p>

            <p className="mb-4">
              Transmission is not only handing down. It is also handing across: strength lent to someone who has run out, attention paid to a friend, care given to the person in front of you. Friendship transmits. Looking after someone transmits. What makes it Transmission is that it leaves you and arrives somewhere.
            </p>

            <p className="text-[var(--color-muted)] italic">
              You received something. Pass it on. That is enough.
            </p>
          </div>

          {/* Chosen Cause */}
          <div className="mb-12">
            <h3 className="text-xl font-medium mb-1">Chosen Cause</h3>
            <p className="text-[var(--color-muted)] italic mb-4">Pick your stupid battle. Fight it anyway.</p>

            <p className="mb-4">
              A cause is a direction that reaches beyond your own household — something you fight for that extends beyond the boundary of your own life and the lives immediately connected to it.
            </p>

            <p className="mb-4">
              This is not a coldness toward family. Family is a bearing in its own right — the longest mastery and the nearest transmission most people will know. But a family asked to be a person's entire purpose is being asked to bear weight it was not built for. Hold family and a road beyond family. Both. (See the Road Note{' '}
              <Link href="/blog/on-family" className="text-[var(--color-lantern)] hover:underline"><em>On Family</em></Link>.)
            </p>

            <p className="mb-4">
              The most philosophically important feature of the chosen cause is that it is chosen. Not revealed, not given, not cosmically ordained. Chosen — with full awareness that the choice is unsanctioned, that no authority in the universe has endorsed this particular fight, that someone else with equally good judgment might have chosen differently. This self-awareness is not a weakness of the chosen cause. It is its integrity.
            </p>

            <p className="text-[var(--color-muted)] italic">
              The person who knows their cause is somewhat absurd and fights for it anyway is braver than the one who believes it was chosen for them.
            </p>
          </div>

          {/* Levity */}
          <div className="mb-12">
            <h3 className="text-xl font-medium mb-1">Levity</h3>
            <p className="text-[var(--color-muted)] italic mb-4">Notice that this is all quite funny.</p>

            <p className="mb-4">
              Levity is not the opposite of seriousness. It is seriousness held lightly. It is the capacity to notice that the gap between how things ought to go and how they actually go is not only a source of suffering but a source of comedy — and that noticing this, and finding it genuinely amusing, is a philosophical act rather than an evasion of one.
            </p>

            <p className="mb-4">
              Levity is a pillar, and the only one that reaches down to the floor. You cannot practise Mastery or pursue a cause on the mornings when all you can do is feed the dog — but you can still notice that the dog is absurd. That is why Levity sustains both levels: it is the part of Bearing you can carry into Motion. Without it the floor becomes a cell and the road becomes a sentence, and the whole structure comes down.
            </p>

            <p className="mb-4">
              Levity is not the same as joking. The anecdote passed across a Soviet kitchen table, the dry line at the broken kettle and the meal laid out for the dead are the same act: refusing suffering the full theatrical scope it asked for.
            </p>

            <p className="mb-4">
              Jerome K. Jerome's river trip is a fortnight of small defeats: the tin that will not open, the canvas that will not go up, the rain. E.M. Delafield's Provincial Lady is perpetually outmanoeuvred by her household. James Herriot's Yorkshire practice is physically brutal, frequently thankless, and conducted largely in conditions of significant personal discomfort. None of these people are winning. But they are also not losing, because they have discovered something the more earnest philosophical traditions consistently miss: the absurd gap between expectation and reality is not only survivable but enjoyable, if held correctly.
            </p>

            <p className="text-[var(--color-muted)] italic">
              Understatement is not denial. It is a form of dignity.
            </p>
          </div>
        </section>

        {/* Chapter 5: The Road, Day by Day */}
        <section id="the-road" className="mb-16 scroll-mt-32">
          <h2 className="text-2xl md:text-3xl mb-2">The Road, Day by Day</h2>
          <p className="text-[var(--color-muted)] italic mb-8">How the walking is done.</p>

          <p className="mb-6">
            <strong>The day is the unit.</strong> The whole weight of a life cannot be held at once, and does not need to be. Today's portion is a specific weight, and a specific weight can be lifted. (<Link href="/blog/one-day" className="text-[var(--color-lantern)] hover:underline"><em>One Day</em></Link>)
          </p>

          <p className="mb-6">
            <strong>The self is built, not found.</strong> There is no finished self underneath, waiting to be uncovered. You are what you have walked toward. (<Link href="/blog/on-the-self-underneath" className="text-[var(--color-lantern)] hover:underline"><em>On the Self Underneath</em></Link>)
          </p>

          <p className="mb-6">
            <strong>The road is revised.</strong> The bearing you chose at nineteen was chosen on bad information. That is not a sentence to be served. You are not the draft's tenant. You are its editor. (<Link href="/blog/the-pen-does-not-expire" className="text-[var(--color-lantern)] hover:underline"><em>The Pen Does Not Expire</em></Link>)
          </p>

          {/* Where next */}
          <div className="border-t border-[var(--color-border)] pt-12 mt-16 text-center">
            <p className="text-[var(--color-muted)]">
              Next:{' '}
              <Link href="/codex" className="text-[var(--color-lantern)] hover:underline"><strong>The Codex</strong></Link> for the terms,{' '}
              <Link href="/fiction" className="text-[var(--color-lantern)] hover:underline"><strong>The Wayfarer in Fiction</strong></Link> for what it looks like when lived,{' '}
              <Link href="/blog" className="text-[var(--color-lantern)] hover:underline"><strong>The Road Notes</strong></Link> for the philosophy at work.
            </p>
          </div>
        </section>
      </article>
    </>
  );
}
