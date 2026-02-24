export default function AboutPage() {
  return (
    <article className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-4xl md:text-5xl font-light mb-16 text-center">About</h1>

      <div className="space-y-16">
        {/* What this is */}
        <section>
          <h2 className="text-2xl mb-6">What this is</h2>
          <p className="leading-relaxed">
            Wayfarism is a philosophy assembled from existing traditions — Absurdism, Stoicism,
            Aristotelian virtue ethics, Pragmatism — and from the British literary tradition of
            endurance with humour. It does not claim to have invented any of its component parts.
            It claims to have arranged them in a way that is useful.
          </p>
        </section>

        {/* Where it came from */}
        <section>
          <h2 className="text-2xl mb-6">Where it came from</h2>
          <p className="leading-relaxed">
            A conversation about what to do with a life, conducted honestly. The philosophy was
            not written in a study. It was worked out in the way most useful things are worked
            out — in fragments, over time, in response to actual difficulty.
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
            For discussions, suggestions, or corrections — the door is open.
          </p>
        </section>
      </div>
    </article>
  );
}
