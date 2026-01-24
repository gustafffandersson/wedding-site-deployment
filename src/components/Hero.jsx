export default function Hero() {
  return (
    <section className="relative w-full bg-neutral-100">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1523430410476-0185cb1f6ff9')",
        }}
      />
      {/* Soft overlay */}
      <div className="absolute inset-0 bg-white/70" />

      {/* Content */}
      <div className="relative max-w-5xl mx-auto px-6 py-32 text-center">
        <h1 className="font-serif text-5xl md:text-6xl tracking-wide mb-6">
          Ankan & Berit
        </h1>

        <p className="text-lg md:text-xl text-neutral-700 mb-10">
          We’re getting married — and we can’t wait to celebrate with you.
        </p>

        <p className="uppercase tracking-widest text-sm text-neutral-600">
          11-13 Juni, 2027 • Uppsala
        </p>
      </div>
    </section>
  );
}
