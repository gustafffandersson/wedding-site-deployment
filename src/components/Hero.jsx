import heroDesktop from "../assets/berg_desktop.jpg";
import heroMobile from "../assets/berg_mobile.jpg";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      <picture className="absolute inset-0">
        <source srcSet={heroDesktop} media="(min-width: 768px)" />
        <img
          src={heroMobile}
          alt=""
          className="w-full h-full object-cover"
        />
      </picture>
      {/* Soft overlay */}
      <div className="absolute inset-0 bg-white/80" />

      {/* Content */}
      <div className="relative max-w-5xl mx-auto px-6 py-32 text-center">
        <h1 className="font-serif text-5xl md:text-6xl tracking-wide mb-6">
          Ebba & Gustaf
        </h1>

        <p className="text-lg md:text-xl text-neutral-700 mb-10">
          Vi ska äntligen gifta oss och längtar efter att få fira med er!
        </p>

        <p className="uppercase tracking-widest text-sm text-neutral-600">
          11-12 Juni, 2027 • Uppsala
        </p>
      </div>
    </section>
  );
}
