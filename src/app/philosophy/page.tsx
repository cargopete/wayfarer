'use client';

import { useEffect, useState } from 'react';

const chapters = [
  { id: 'the-problem', title: 'The Problem' },
  { id: 'motion', title: 'Motion' },
  { id: 'bearing', title: 'Bearing' },
  { id: 'the-pillars', title: 'The Pillars' },
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
          <p className="text-[var(--color-muted)] italic mb-8">What Absurdism got right, and what it left unanswered.</p>

          <p className="mb-6">
            Any serious philosophy must begin with what is actually true, even when what is actually true is uncomfortable.
          </p>

          <p className="mb-6">
            Absurdism, as articulated by Albert Camus in the middle of the twentieth century, is the most honest diagnosis of the human condition available. The diagnosis runs as follows. Human beings are creatures who demand meaning—we cannot help it, it is structural to how we think and feel and organise our lives. We require reasons, narratives, purposes. We need to know why. The universe, however, offers no answer to this demand. It is silent, indifferent, and entirely uninterested in our requirement for significance.
          </p>

          <p className="mb-6">
            The collision between our demand for meaning and the universe's silence is what Camus called the Absurd. It is not a property of the world alone, nor of the human mind alone, but of the confrontation between the two. We are meaning-seeking creatures in a meaning-free universe, and this mismatch is the fundamental condition of conscious existence.
          </p>

          <p className="mb-6">
            Camus identified three possible responses to the Absurd, and rejected all three. Physical suicide accepts the Absurd's verdict. Philosophical suicide resolves the confrontation by refusing to see it clearly—this includes religious faith and ideological commitment. Resignation accepts the Absurd passively, waiting for death.
          </p>

          <p className="mb-6">
            Camus proposed a fourth response: Absurd revolt. The absurd hero lives consciously within the contradiction. They neither resolve it nor succumb to it. They embrace life precisely because it is finite, meaningless, and absurd.
          </p>

          <blockquote className="pull-quote text-xl">
            "One must imagine Sisyphus happy."<br />
            <span className="text-sm">— Camus</span><br />
            <span className="text-sm italic">Wayfarism asks: and then what?</span>
          </blockquote>

          <p className="mb-6">
            Absurdism is correct. As a diagnosis, it is essentially complete. But Absurdism is a stance, not a practice. It tells you how to hold your situation. It does not tell you what to do on Tuesday morning.
          </p>

          <p>
            A diagnosis is not a treatment. Absurdism tells us how to hold our situation. It does not tell us what to do on Tuesday.
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
            This is the bootstrapping problem. You cannot pull yourself up by your own bootstraps because your boots are in a locked room and the condition has hidden the key. Standard advice fails here. "Just do something" assumes the capacity to just do.
          </p>

          <p className="mb-6">
            The counterintuitive truth—well-established in behavioural psychology—is that action generates motivation more reliably than motivation generates action. Do the thing, and the feeling sometimes follows. Or it doesn't follow, but the thing is done regardless.
          </p>

          <blockquote className="pull-quote text-xl">
            "Feed the dog. Fix the door. Move before the mind fully wakes to its misery."
          </blockquote>

          <p className="mb-6">
            If internal motivation is unavailable, external demand becomes essential. An external demand is a claim made on you by something outside yourself: a person, an animal, a commitment, a deadline. The dog does not care about your depression. The dog needs feeding. This is annoying, intrusive, relentless—and exactly what is needed.
          </p>

          <p className="mb-6">
            Concrete work is work with visible results. The garage door was broken; now it works. The dishes were dirty; now they are clean. This concreteness matters because it provides feedback that depressive cognition cannot distort. Your mind may tell you that you are worthless—but the fixed garage door is a fact, indifferent to interpretation.
          </p>

          <p>
            Motion is correct and necessary. For the person in crisis, it is sufficient. But for the person standing upright, asking what to do with their aliveness — Motion alone is a floor without walls. The second level builds from here.
          </p>
        </section>

        {/* Chapter 3: Bearing */}
        <section id="bearing" className="mb-24 scroll-mt-32">
          <h2 className="text-2xl md:text-3xl mb-2">Bearing</h2>
          <p className="text-[var(--color-muted)] italic mb-8">The second level. Choose your road. Walk it with open eyes.</p>

          <p className="mb-6">
            Bearing is a navigational term. It means the direction of travel relative to a fixed point. It implies movement — but oriented movement. A person with a bearing is going somewhere, even if somewhere is partly invented, even if the road needs revision, even if it is muddier than the map suggested.
          </p>

          <p className="mb-6">
            Bearing is the second level of Wayfarism. It is the orientation that transforms motion into direction. It does not replace Motion—the floor remains, and you will return to it—but it builds upon Motion by asking the question Motion declines to ask: not just how to keep going, but where.
          </p>

          <p className="mb-6">Bearing has four pillars:</p>

          <ul className="mb-6 space-y-2 pl-6">
            <li><strong>Mastery</strong> — A craft or skill pursued with genuine attention.</li>
            <li><strong>Transmission</strong> — The deliberate act of passing something on.</li>
            <li><strong>Chosen Cause</strong> — A direction larger than personal competence or family.</li>
            <li><strong>Levity</strong> — Seriousness held lightly.</li>
          </ul>

          <p>
            The Bearing is chosen, not given. This is not a weakness — it is the only honest kind.
          </p>
        </section>

        {/* Chapter 4: The Pillars */}
        <section id="the-pillars" className="mb-16 scroll-mt-32">
          <h2 className="text-2xl md:text-3xl mb-2">The Four Pillars</h2>
          <p className="text-[var(--color-muted)] italic mb-8">What Bearing is made of.</p>

          {/* Mastery */}
          <div className="mb-12">
            <h3 className="text-xl font-medium mb-1">Mastery</h3>
            <p className="text-[var(--color-muted)] italic mb-4">Submit to the resistance of good work.</p>

            <p className="mb-4">
              A craft or skill pursued with genuine attention generates a particular kind of meaning—not because the universe endorses it but because the work talks back. This is the crucial distinction. Most sources of comfort are passive: they offer warmth or distraction or temporary relief. A skill is active and demanding. It has its own standards, its own resistance. You can be wrong about it in ways that are not matters of opinion.
            </p>

            <p className="mb-4">
              The enforced humility of mastery is psychologically significant. The depressed mind tends toward grandiosity in one direction or self-contempt in another. Genuine craft cuts through both. The work simply requires your best current ability, registers whether it received it, and continues regardless of your feelings about yourself.
            </p>

            <p className="text-[var(--color-muted)] italic">
              The garage door either works or it does not. This is the most reliable feedback the universe offers.
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

            <p className="text-[var(--color-muted)] italic">
              You received something. Pass it on. That is enough.
            </p>
          </div>

          {/* Chosen Cause */}
          <div className="mb-12">
            <h3 className="text-xl font-medium mb-1">Chosen Cause</h3>
            <p className="text-[var(--color-muted)] italic mb-4">Pick your stupid battle. Fight it anyway.</p>

            <p className="mb-4">
              A cause is a direction larger than personal competence or family—something you fight for that extends beyond the boundary of your own life and the lives immediately connected to it.
            </p>

            <p className="mb-4">
              The most philosophically important feature of the chosen cause is that it is chosen. Not revealed, not given, not cosmically ordained. Chosen—with full awareness that the choice is somewhat arbitrary, that no authority in the universe has endorsed this particular fight, that someone else with equally good judgment might have chosen differently. This self-awareness is not a weakness of the chosen cause. It is its integrity.
            </p>

            <p className="text-[var(--color-muted)] italic">
              The man who knows his cause is somewhat absurd but fights for it anyway is braver than the man who believes it was chosen for him.
            </p>
          </div>

          {/* Levity */}
          <div className="mb-12">
            <h3 className="text-xl font-medium mb-1">Levity</h3>
            <p className="text-[var(--color-muted)] italic mb-4">Notice that this is all quite funny.</p>

            <p className="mb-4">
              Levity is not the opposite of seriousness. It is seriousness held lightly. It is the capacity to notice that the gap between how things ought to go and how they actually go is not only a source of suffering but a source of comedy—and that noticing this, and finding it genuinely amusing, is a philosophical act rather than an evasion of one.
            </p>

            <p className="mb-4">
              Jerome K. Jerome's river trip is objectively disastrous from beginning to end. E.M. Delafield's Provincial Lady is perpetually outmanoeuvred by her household. James Herriot's Yorkshire practice is physically brutal, frequently thankless, and conducted largely in conditions of significant personal discomfort. None of these people are winning. But they are also not losing, because they have discovered something the more earnest philosophical traditions consistently miss: the absurd gap between expectation and reality is not only survivable but enjoyable, if held correctly.
            </p>

            <p className="text-[var(--color-muted)] italic">
              Understatement is not denial. It is a form of dignity.
            </p>
          </div>

          {/* Closing statement */}
          <div className="border-t border-[var(--color-border)] pt-12 mt-16 text-center">
            <p className="text-xl italic text-[var(--color-muted)]">
              Motion is the mechanism. Bearing is the meaning. Levity is what makes both sustainable. The road continues. We go again tomorrow.
            </p>
          </div>
        </section>
      </article>
    </>
  );
}
