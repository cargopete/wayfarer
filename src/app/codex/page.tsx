const definitions = [
  {
    term: 'Wayfarism',
    category: 'The philosophy',
    definition: 'A complete philosophy of motion and direction, built in two levels. It accepts the silence of the universe and responds with a practical question: given that, what do we do? The answer: keep moving, choose a direction, hold it all with enough lightness that it does not crush you.',
  },
  {
    term: 'Wayfarer',
    category: 'The practitioner',
    definition: 'One who travels the road. Not a pilgrim, which implies a destination and a faith. Not a wanderer, which implies no direction. A Wayfarer is someone on a road — going somewhere, not always certain where, but going. The word is Old English: weg (road) and faran (to travel, to get along, to fare). The Wayfarer is anyone still walking.',
  },
  {
    term: 'Motion',
    category: 'The first level',
    definition: 'The floor. The principle that action precedes motivation — that you do not need to feel ready in order to move. Motion asks nothing philosophical. It requires only continuation: concrete work, external demands, accumulated small results. It keeps you alive until Bearing becomes possible again. It is not a destination. It is a floor.',
  },
  {
    term: 'Bearing',
    category: 'The second level',
    definition: 'The orientation. A navigational term: direction of travel relative to a fixed point. In Wayfarism, Bearing is the answer to the question Motion does not ask — not just how to keep going, but where. Bearing is chosen, not given. It is held loosely enough to be revised, seriously enough to be enacted, and lightly enough to be sustained.',
  },
  {
    term: 'Mastery',
    category: 'The first pillar',
    definition: 'A craft or skill pursued with genuine attention. The work talks back — it has its own standards, its own resistance. Competence accumulated over a life is something the universe cannot revoke.',
  },
  {
    term: 'Transmission',
    category: 'The second pillar',
    definition: 'The deliberate act of passing something on. You received something — a language, a way of seeing, a quality of attention. The chain matters not because it is eternal but because you are a link in it.',
  },
  {
    term: 'Chosen Cause',
    category: 'The third pillar',
    definition: 'A direction larger than personal competence or family. Chosen with open eyes, committed to without illusion, fought for knowing it may not be won. The cause is arbitrary in the cosmic sense. This is not a weakness. It is its integrity.',
  },
  {
    term: 'Levity',
    category: 'The fourth pillar',
    definition: 'Seriousness held lightly. The capacity to notice that the gap between how things ought to go and how they actually go is not only a source of suffering but a source of comedy. Levity keeps the other pillars honest. Understatement is not denial. It is a form of dignity.',
  },
  {
    term: 'The Bootstrapping Problem',
    category: 'The condition Motion addresses',
    definition: 'The state in which the very capacities needed to recover are the capacities that have failed. You cannot pull yourself up by your own bootstraps because the condition has hidden your boots. Motion is the answer — not because it solves the problem, but because it bypasses it.',
  },
  {
    term: 'The Floor',
    category: 'Synonym for Motion',
    definition: 'The minimum. The thing that keeps you functional when everything internal has failed. Not a destination, not a goal, not a philosophy of the good life — simply the ground beneath your feet when the ground is all there is.',
  },
  {
    term: 'The Absurd',
    category: 'The founding condition',
    definition: "Albert Camus's term for the collision between human beings' demand for meaning and the universe's silence. Not a property of the world alone, nor of the mind alone, but of the confrontation between the two. Wayfarism accepts the Absurd entirely and builds from it.",
  },
];

export default function CodexPage() {
  return (
    <article className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-4xl md:text-5xl font-light mb-16 text-center">The Codex</h1>

      <div className="space-y-12">
        {definitions.map((entry) => (
          <div key={entry.term} className="border-b border-[var(--color-border)] pb-8">
            <h2 className="text-xl font-medium mb-1">{entry.term}</h2>
            <p className="text-sm nav-text text-[var(--color-lantern)] uppercase tracking-wider mb-4">
              {entry.category}
            </p>
            <p className="text-[var(--color-foreground)] leading-relaxed">
              {entry.definition}
            </p>
          </div>
        ))}
      </div>
    </article>
  );
}
