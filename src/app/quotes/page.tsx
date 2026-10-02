import type { Metadata } from 'next';

export const metadata: Metadata = {
  description: 'Lines worth carrying, and the Wayfarist maxims.',
};

const quotes = [
  // On motion and continuation
  {
    text: 'In three words I can sum up everything I\'ve learned about life: it goes on.',
    author: 'Robert Frost',
  },
  {
    text: 'If you\'re going through hell, keep going.',
    author: 'Anonymous (often credited to Churchill)',
  },
  {
    text: 'Do not disturb yourself by thinking of the whole of your life.',
    author: 'Marcus Aurelius, Meditations 8.36',
  },
  {
    text: 'Vindica te tibi. Claim yourself for yourself.',
    author: 'Seneca, Letters 1',
  },
  // On direction and choice
  {
    text: 'Waste no more time arguing about what a good man should be. Be one.',
    author: 'Marcus Aurelius, Meditations 10.16',
  },
  // On transmission and legacy
  {
    text: 'They may forget what you said, but they will never forget how you made them feel.',
    author: 'Carl W. Buehner',
  },
  {
    text: 'If having a soul means being able to feel love and loyalty and gratitude, then animals are better off than a lot of humans.',
    author: 'James Herriot',
  },
  // On levity and endurance
  {
    text: 'I like work: it fascinates me. I can sit and look at it for hours.',
    author: 'Jerome K. Jerome, Three Men in a Boat',
  },
    {
    text: 'Am never much exhilarated at this prospect, and do not in the least find that it becomes less unpleasant with repetition, but rather the contrary.',
    author: 'E.M. Delafield, Diary of a Provincial Lady, on asking the Bank for an overdraft',
  },
  {
    text: 'Life is what happens to you while you\'re busy making other plans.',
    author: 'Allen Saunders, 1957; later sung by John Lennon',
  },
  // Wayfarist
  {
    text: 'The universe offers no directions. The Wayfarer brings their own.',
    author: 'Wayfarism',
  },
];

const maxims = [
  'The universe offers no directions. The Wayfarer brings their own.',
  'The fixed point is where we put it.',
  'The dog does not care about your depression.',
  'Feed the dog. Fix the door.',
  'Pick your stupid battle. Fight it anyway.',
  'Understatement is not denial. It is a form of dignity.',
  "You are not the draft's tenant. You are its editor.",
  'Get through today. That is the task.',
  'Motion is the mechanism. Bearing is the meaning. Levity is what makes both sustainable.',
];

export default function QuotesPage() {
  return (
    <article className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl md:text-5xl font-light mb-16 text-center">Quotes</h1>

      {/* Individual quotes */}
      <div className="space-y-24 mb-24">
        {quotes.map((quote, index) => (
          <blockquote key={index} className="text-center">
            <p className="text-2xl md:text-3xl italic leading-relaxed mb-6">
              "{quote.text}"
            </p>
            <cite className="text-sm nav-text text-[var(--color-muted)] uppercase tracking-wider not-italic">
              — {quote.author}
            </cite>
          </blockquote>
        ))}
      </div>

      {/* The Wayfarist maxims */}
      <div className="border-t border-[var(--color-border)] pt-16">
        <div className="grid md:grid-cols-3 gap-x-8 gap-y-12 text-center">
          {maxims.map((maxim, index) => (
            <p key={index} className="text-xl italic text-[var(--color-muted)]">
              {maxim}
            </p>
          ))}
        </div>
      </div>
    </article>
  );
}
