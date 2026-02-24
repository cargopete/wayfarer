const quotes = [
  // On motion and continuation
  {
    text: 'In three words I can sum up everything I\'ve learned about life: it goes on.',
    author: 'Robert Frost',
  },
  {
    text: 'It does not matter how slowly you go as long as you do not stop.',
    author: 'Confucius',
  },
  {
    text: 'Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.',
    author: 'Thomas Edison',
  },
  // On direction and choice
  {
    text: 'Do not go where the path may lead, go instead where there is no path and leave a trail.',
    author: 'Ralph Waldo Emerson',
  },
  {
    text: 'If you\'re going through hell, keep going.',
    author: 'Winston Churchill',
  },
  {
    text: 'Waste no more time arguing about what a good man should be. Be one.',
    author: 'Marcus Aurelius',
  },
  // On transmission and legacy
  {
    text: 'They may forget what you said, but they will never forget how you made them feel.',
    author: 'Carl W. Buehner',
  },
  {
    text: 'We do not inherit the earth from our ancestors; we borrow it from our children.',
    author: 'Native American Proverb',
  },
  // On levity and endurance
  {
    text: 'I like work: it fascinates me. I can sit and look at it for hours.',
    author: 'Jerome K. Jerome',
  },
  {
    text: 'Life is what happens to you while you\'re busy making other plans.',
    author: 'John Lennon',
  },
  // Wayfarist
  {
    text: 'The universe offers no directions. The Wayfarer brings their own.',
    author: 'Wayfarism',
  },
];

const maxims = [
  'Motion is the mechanism.',
  'Bearing is the meaning.',
  'Levity is what makes both sustainable.',
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

      {/* The three maxims as a triptych */}
      <div className="border-t border-[var(--color-border)] pt-16">
        <div className="grid md:grid-cols-3 gap-8 text-center">
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
