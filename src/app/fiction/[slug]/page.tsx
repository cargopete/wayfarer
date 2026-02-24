import Link from 'next/link';
import { notFound } from 'next/navigation';

const characterStudies: Record<string, {
  name: string;
  source: string;
  subtitle: string;
  content: React.ReactNode;
}> = {
  'jerome-k-jerome': {
    name: 'Jerome, George & Harris',
    source: 'Three Men in a Boat',
    subtitle: 'The founding text of Wayfarist levity.',
    content: (
      <>
        <p>
          Three Men in a Boat is not, on the surface, a philosophical work. It is a comic novel
          about three men and a dog taking a boating holiday up the Thames, getting into minor
          difficulties, and complaining about the weather. And yet it is the founding text of
          Wayfarist levity, and arguably the reason the fourth pillar exists at all.
        </p>
        <p>
          The entire trip is a sustained Motion exercise. They are going somewhere specific, with
          companions, doing concrete things — rowing, camping, cooking badly, getting lost. The
          structure is pure Wayfarism: movement with direction, difficulty met with persistence,
          the work talking back constantly. They are not good at any of this. It does not matter.
          They continue.
        </p>
        <p>
          What transforms the book from pleasant travelogue to something approaching philosophy is
          the levity. Every disaster is recorded with the same affectionate irony. The tin of
          pineapple that cannot be opened. The maze at Hampton Court. Harris singing comic songs.
          The tone never wavers: this is all absurd, we are all absurd, and it is entirely worth
          doing anyway.
        </p>
        <p>
          Jerome himself is the Wayfarer in miniature. He has hypochondria, mild uselessness,
          genuine warmth, and the capacity to find everything funny without finding it meaningless.
          His companions are no better — George is pompous, Harris is deluded about his own
          competence — and the friendship survives because no one expects anyone to be otherwise.
        </p>
        <p>
          The book teaches, without ever announcing that it is teaching, that seriousness held
          lightly is more durable than seriousness held grimly. The trip succeeds not despite the
          disasters but because the disasters are received correctly. This is Wayfarism before the
          word existed.
        </p>
        <p className="italic text-[var(--color-muted)]">
          "I like work: it fascinates me. I can sit and look at it for hours."
        </p>
      </>
    ),
  },
  'provincial-lady': {
    name: 'The Provincial Lady',
    source: 'E.M. Delafield',
    subtitle: 'Bearing maintained under conditions of chronic domestic entropy.',
    content: (
      <>
        <p>
          The Provincial Lady has chosen her road — family, community, the writing — and walks it
          while Cook gives notice, the bank balance declines, Robert reads the newspaper throughout
          every conversation, and the bulbs fail to come up in the garden. Her diary is a masterpiece
          of Bearing under pressure, recorded with a levity so precise it constitutes a philosophy.
        </p>
        <p>
          She is not heroic. She does not overcome her circumstances through dramatic action. She
          endures them through the simple practice of continuing — attending to the children, managing
          the household, pursuing her writing, maintaining the social obligations that village life
          demands. The Motion is modest but relentless.
        </p>
        <p>
          Her levity is not a coping mechanism. It is her philosophy, expressed in the gap between
          what she observes and how she records it. When Robert is particularly uncommunicative, she
          notes it with dry precision. When Lady Boxe is insufferable, the insufferability is captured
          without editorial comment. The comedy emerges from the accuracy of the observation, not from
          exaggeration.
        </p>
        <p>
          She is also a transmission figure of the highest order. The diaries were written in the
          1930s and they still circulate, still make people laugh, still pass on a way of seeing that
          is recognisably the same as the Wayfarist stance: affectionate, ironic, persistent. She
          transmitted not just her stories but her posture toward difficulty.
        </p>
        <p>
          The Provincial Lady demonstrates that Wayfarism does not require grand causes or dramatic
          circumstances. It can be practiced in a Devon village, with inadequate help, insufficient
          funds, and a husband who prefers The Times to conversation. The bearing is the same. The
          levity is the same. The Motion continues.
        </p>
        <p className="italic text-[var(--color-muted)]">
          Reflect, not for the first time, that the most difficult thing in life is to maintain
          reasonable cheerfulness whilst looking at the Monthly Books.
        </p>
      </>
    ),
  },
  'james-herriot': {
    name: 'James Herriot',
    source: 'All Creatures Great and Small',
    subtitle: 'The complete Wayfarer — all four pillars, consistently, across a whole life.',
    content: (
      <>
        <p>
          James Herriot is perhaps the most complete Wayfarer in the literary tradition. All four
          pillars are present, consistently, across decades of practice. He did not achieve this
          through philosophical intention — he simply lived it, and then wrote it down, and the
          writing reveals the structure.
        </p>
        <p>
          His mastery was pursued in conditions of significant difficulty. The Yorkshire Dales in
          the 1930s and 40s were not gentle on veterinarians. The work was physical, often brutal,
          frequently unsuccessful. Animals died despite his best efforts. Farmers were sceptical,
          sometimes hostile. The weather was terrible. He submitted to the resistance of the work
          completely, and the work made him into something.
        </p>
        <p>
          His transmission operated on multiple levels: to his patients and their owners, to his
          children, to the profession itself, to the Yorkshire community that became his home. And
          then, through the books, to millions of readers who received not just his stories but his
          way of being — the warmth, the humour, the fundamental decency that runs through every
          chapter.
        </p>
        <p>
          His cause — animal welfare, rural medicine, the dignity of both creatures and the people
          who tend them — was chosen without announcement and fought for daily. He did not give
          speeches about it. He simply practiced it, every day, in barns and fields and farmhouse
          kitchens, until the practice itself became the argument.
        </p>
        <p>
          And his levity is so structural that the books cannot be described without it. The comedy
          and the tenderness are the same thing, delivered simultaneously. Tristan's escapades,
          Siegfried's explosions, the endless parade of eccentric farmers — all of it is funny, and
          all of it is affectionate, and none of it diminishes the seriousness of the work being done.
        </p>
        <p>
          He is also honest about the floor. The exhaustion, the failed cases, the physical and
          emotional cost — all of it is present in the books. He does not pretend that the work was
          easy or that he was always equal to it. But the floor never becomes the story. The story
          is the continuing, the showing up, the next farm and the next patient and the next
          opportunity to be useful.
        </p>
        <p className="italic text-[var(--color-muted)]">
          "If having a soul means being able to feel love and loyalty and gratitude, then animals
          are better off than a lot of humans."
        </p>
      </>
    ),
  },
  'juliette': {
    name: 'Juliette',
    source: 'Silo',
    subtitle: 'Motion as vocation, truth as bearing.',
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
          Her mastery is genuine and hard-won. She knows machines because she has submitted to their
          resistance for years. When the silo's systems try to kill her, she survives because she
          understands them better than the people who designed them. The work saved her life because
          she had done the work.
        </p>
        <p>
          Her levity is quieter than the British tradition — a dry practicality, a refusal to be
          melodramatic about things that are genuinely terrible. She notes, gets on with it, and
          continues. She is not funny in the Jerome K. Jerome sense. But she holds her seriousness
          lightly enough to survive it.
        </p>
        <p>
          Juliette is a Wayfarer in a world designed to prevent anyone from having a bearing at all.
          The silo exists to keep people moving in circles, to provide motion without direction, to
          make truth itself impossible. She breaks through anyway. This is what the philosophy looks
          like when the stakes are absolute.
        </p>
      </>
    ),
  },
  'mark': {
    name: 'Mark',
    source: 'Severance',
    subtitle: 'Motion without Bearing — what severance actually severs.',
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
          The show is most powerful when it examines what the Innies lack. They have work — endless,
          mysterious, possibly meaningless work — but they have no cause beyond compliance. They
          have colleagues but limited transmission; the relationships are shallow because the
          selves are shallow. They have no levity because levity requires perspective, and
          perspective requires continuity of experience.
        </p>
        <p>
          Mark's arc is about recovering his Bearing — the grief, the love, the cause — at the
          cost of the numbness that made functioning possible. Wayfarism would say: this is right.
          The floor is not a destination. Motion that goes nowhere is not Wayfarism; it is
          sophisticated avoidance. The pain of a chosen bearing is preferable to the emptiness
          of having none.
        </p>
        <p className="italic text-[var(--color-muted)]">
          The Innies are the most efficient workers Lumon has ever produced. They are also the
          most incomplete humans imaginable. This is not a coincidence.
        </p>
      </>
    ),
  },
  'jeremy-clarkson': {
    name: 'Jeremy Clarkson',
    source: "Clarkson's Farm",
    subtitle: 'Wayfarism arrived uninvited — and was accepted anyway.',
    content: (
      <>
        <p>
          This is perhaps the most surprising entry on the list, and possibly the most genuinely
          useful. Jeremy Clarkson — the loud, opinionated, frequently insufferable presenter of
          Top Gear — turns out to be an accidental Wayfarer, and watching his conversion is
          unexpectedly instructive.
        </p>
        <p>
          He arrives at Motion involuntarily. He bought the farm as a kind of retirement project,
          knowing nothing about farming, and the work immediately and comprehensively defeats him.
          He cannot drive the tractor. He does not understand the subsidies. His crops fail. His
          sheep escape. His planning applications are rejected. Everything he attempts goes wrong
          in ways he did not anticipate.
        </p>
        <p>
          What makes it Wayfarist is that he stays. He submits to the resistance of the work in a
          way he never had to in his previous career. Cars did not talk back to him like this;
          they did what he wanted, and if they didn't, there was another car. The farm is different.
          The land does not care about his opinions. The weather does not negotiate. The lambing
          happens whether he is ready or not.
        </p>
        <p>
          His mastery develops painfully and visibly. By the third series, he is not the same man
          who started. He knows things. He can do things. The knowledge came at the cost of
          repeated failure, and he paid the cost.
        </p>
        <p>
          His levity is intact throughout — he is almost constitutionally incapable of melodrama —
          but it is paired with genuine respect for the difficulty of what he is doing. He mocks
          himself far more than he mocks the work. The humour is not defensive; it is how he
          processes what he is learning.
        </p>
        <p>
          And unexpectedly, transmission emerges. The farm, Kaleb, the village, the farm shop, the
          restaurant, the advocacy for small farmers — he did not plan to care. He ended up caring
          enormously. His platform, which used to be about cars and shouting, is now partly about
          the crisis in British agriculture and the people who work the land.
        </p>
        <p>
          This is Wayfarism arriving uninvited and being accepted anyway. He did not choose the
          bearing; the bearing chose him. And he was honest enough, eventually, to walk it.
        </p>
        <p className="italic text-[var(--color-muted)]">
          "I genuinely love it here. I'm not sure I expected that."
        </p>
      </>
    ),
  },
  'ted-lasso': {
    name: 'Ted Lasso',
    source: 'Ted Lasso',
    subtitle: 'Bearing as a way of treating people.',
    content: (
      <>
        <p>
          Ted Lasso is possibly the most explicit Wayfarist character in contemporary television,
          which is both his strength and his slight weakness as an example — he is almost too
          on-the-nose. But he earns his place, because the explicitness is honest. He means it.
        </p>
        <p>
          His chosen cause is belief itself — belief in people, in the possibility of growth, in
          the value of trying regardless of outcome. This sounds saccharine when summarised, but
          the show earns it through specificity. Ted believes in Roy Kent when Roy is being
          impossible. He believes in Jamie Tartt when Jamie is being selfish. He believes in
          Rebecca when she is actively trying to destroy him. The belief is not naive; it is
          chosen, with open eyes, as a way of being in the world.
        </p>
        <p>
          His levity is not deflection but genuine philosophical stance. The jokes, the folksy
          sayings, the relentless positivity — none of it is armour. Or rather, it is armour
          that he has chosen to wear permanently, because he has decided that this is how he
          wants to meet the world. The humour is transmission; he is passing on a way of being.
        </p>
        <p>
          His transmission is extraordinary. Nearly every character around him is changed by
          contact with him — not through lectures or interventions but through sustained
          presence. He does not tell people how to be better; he treats them as if they already
          are, and many of them rise to meet his expectation. This is Bearing as relationship.
        </p>
        <p>
          The interesting Wayfarist question with Ted is whether his Motion ever fails, whether
          there is a floor beneath the relentless optimism. And the answer, in the later series,
          is yes. The panic attacks, the therapy, the admission that the positivity has costs —
          the show is most interesting precisely there. Ted is not a cartoon. He is a man who
          has chosen a bearing and pays for it, and sometimes the payment is visible.
        </p>
        <p>
          What he demonstrates is that Wayfarism is not necessarily about grand causes or heroic
          suffering. It can be about how you treat the people around you, every day, as a
          practice. His mastery is in people, not in football. His transmission is kindness,
          systematically applied. His levity is sincere.
        </p>
        <p className="italic text-[var(--color-muted)]">
          "Be curious, not judgmental."
        </p>
      </>
    ),
  },
  'detectorists': {
    name: 'Lance & Andy',
    source: 'Detectorists',
    subtitle: 'Wayfarism on a quiet Tuesday afternoon.',
    content: (
      <>
        <p>
          The Detectorists is a quieter, more specifically British addition to the list, and
          possibly the most purely Wayfarist thing on television. Two men with metal detectors,
          walking fields in Essex, finding very little of monetary value, and finding it entirely
          sufficient.
        </p>
        <p>
          Their cause is small and self-chosen. They are looking for treasure — Saxon gold,
          ideally — but the looking is the point more than the finding. They have committed to
          this pursuit without any guarantee of success, without social recognition, without
          obvious reward. They do it anyway. They do it every week. They will probably do it
          forever.
        </p>
        <p>
          Their mastery is genuine. They know their fields. They know their machines. They know
          the history beneath their feet, the patterns of settlement and cultivation, the places
          where something might be buried. The expertise is real and hard-won, even if the
          outside world considers it eccentric.
        </p>
        <p>
          Their transmission is the friendship itself. Andy and Lance pass on to each other,
          constantly, a way of being in the world — patient, attentive, unhurried. They maintain
          each other. When one is struggling, the other notices. The detecting is the excuse;
          the friendship is the substance.
        </p>
        <p>
          And the levity is the whole texture of the show. Gentle, unhurried, aware that what
          they are doing is slightly absurd and entirely worth doing. The jokes are small. The
          drama is small. The lives are small. And none of this is presented as a limitation.
          The show insists, quietly but firmly, that small lives lived with attention are not
          lesser lives.
        </p>
        <p>
          The Detectorists is what Wayfarism looks like on a Tuesday afternoon when nothing
          dramatic is happening — which is most of the time. The bearing does not require a
          crisis to be valid. Motion does not require urgency. The treasure may never be found.
          The looking is still worth doing.
        </p>
        <p className="italic text-[var(--color-muted)]">
          "This is the best bit, though, isn't it? Just before you find out what it is.
          Anything's possible."
        </p>
      </>
    ),
  },
  'sam-gamgee': {
    name: 'Samwise Gamgee',
    source: 'The Lord of the Rings',
    subtitle: 'The purest Wayfarer in all of fiction.',
    content: (
      <>
        <p>
          Tolkien said that Sam was the real hero of The Lord of the Rings. He was right, and
          the reason is Wayfarist — though Tolkien would not have used the word. Sam embodies
          all four pillars more completely than any other character in the literary canon, and
          he does it without any of the attributes we usually associate with heroism.
        </p>
        <p>
          He has no grand destiny. He is not chosen by prophecy. He has no special powers, no
          particular claim to courage, no aristocratic lineage. He is a gardener from the Shire,
          and his primary qualifications for the quest are loyalty and the ability to cook.
          These turn out to be exactly sufficient.
        </p>
        <p>
          His transmission is absolute. His loyalty to Frodo is the structural centre of the
          entire narrative. Without Sam, Frodo fails — not metaphorically but literally. Sam
          carries him. Sam feeds him. Sam protects him from Gollum. Sam, at the end, carries
          him up Mount Doom when Frodo can no longer walk. This is transmission as practice:
          the deliberate, sustained passing on of strength to someone who needs it.
        </p>
        <p>
          His mastery is practical. He knows plants and cooking and rope and the small skills
          that keep people alive. The great warriors of the story — Aragorn, Legolas, Gimli —
          have dramatic competencies. Sam's competence is domestic, and it saves everyone.
          The lembas bread, the water, the cooking fire in Ithilien — these matter as much
          as any sword.
        </p>
        <p>
          His cause is a small one that expands. He did not set out to save Middle-earth; he
          set out to help Mr. Frodo. The cosmic stakes arrived later, and he accepted them
          without complaint, because his original commitment was still operative. He would
          have done it for Frodo alone. That it also saved the world was, in a sense, incidental.
        </p>
        <p>
          And his levity — the Shire, the cooking, the matter-of-fact decency, the capacity to
          think about gardens and potatoes even in Mordor — sustains him through conditions
          that break everyone else. His homesickness is not weakness; it is what keeps him
          sane. He knows what he is fighting for because he remembers it constantly.
        </p>
        <p>
          Sam is what a Wayfarer looks like when the stakes are absolute and the resources are
          minimal. He has nothing but his own persistence, his practical skills, his loyalty,
          and his memory of home. It is enough. It is more than enough. He walks into the
          darkness and walks out again, and then he goes home and plants a garden.
        </p>
        <p className="italic text-[var(--color-muted)]">
          "I can't carry it for you, but I can carry you."
        </p>
      </>
    ),
  },
  'jimmy-mcgill': {
    name: 'Jimmy McGill / Saul Goodman',
    source: 'Better Call Saul',
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
        <p>
          The show traces, with painful precision, the moments where he could have turned back
          and didn't. Each one is small. Each one is understandable. And each one moves him
          further from the person he could have been. By the time he is Saul Goodman, the
          levity has curdled into performance, the transmission has narrowed to transaction,
          and the mastery serves nothing but survival.
        </p>
        <p>
          He is a cautionary figure, but a sympathetic one. The show never suggests that his
          fate was inevitable, only that his choices accumulated. A Wayfarer with all the
          materials, who built the wrong thing.
        </p>
        <p className="italic text-[var(--color-muted)]">
          Saul Goodman is the Motion that remains when the Bearing has been surrendered.
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
        <p className="text-sm nav-text text-[var(--color-muted)] mb-2">{character.source}</p>
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
