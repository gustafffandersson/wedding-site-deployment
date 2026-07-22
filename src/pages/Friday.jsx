import dag1 from "../assets/Dag1.jpg";

export default function Friday() {
  return (
    <section className="w-full py-12 bg-white">
      <div className="max-w-3xl mx-auto px-6">

        <div className="mb-12 overflow-hidden rounded-2xl">
          <img
            src={dag1}
            alt="Fredag pizzakväll"
            className="w-full aspect-[5/4] object-cover"
          />
        </div>

        <h2 className="font-serif text-3xl mb-8">
          Fredag · Pizzakväll
        </h2>

        <p className="text-neutral-700 leading-relaxed mb-16">
          Bröllopshelgen inleds med en avslappnad pizzakväll på
          [HEMLIG PLATS] i Uppsala. Ett perfekt tillfälle att landa,
          träffa varandra och starta helgen tillsammans i en mer
          avslappnad atmosfär.
        </p>

        {/* Timeline style layout for consistency */}
        <div className="relative">
          <div className="absolute left-3 top-0 bottom-0 w-px bg-neutral-300" />

          <div className="space-y-14">

            {/* Location */}
            <div className="relative pl-12">
              <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-white border-2 border-neutral-400" />
              <h3 className="font-serif text-xl mb-2">
                [HEMLIG PLATS] · Uppsala · 18:00
              </h3>
              <p className="text-neutral-700 leading-relaxed">
                Vi samlas på [HEMLIG PLATS] för en kväll fylld av pizza, spritzar, och
                uppladdning inför morgondagen.
              </p>
            </div>

            {/* Food & Drinks */}
            <div className="relative pl-12">
              <h3 className="font-serif text-xl mb-2">
                Mat & Dryck
              </h3>
              <p className="text-neutral-700 leading-relaxed">
                Vi bjuder på pizza till alla gäster. Dryck finns att köpa i baren.
              </p>
            </div>

            {/* Theme */}
            <div className="relative pl-12">
              <h3 className="font-serif text-xl mb-2">
                Dresscode · Färgsprakande Italien
              </h3>
              <p className="text-neutral-700 leading-relaxed">
                Tänk en kväll på en italiensk piazza. Linnekostymer, udda kavaj eller ljus kostym för herrar. Eleganta sommarklänningar eller andra festliga sommaroutfits för damer.
                

                Vi uppmuntrar till en färgstark och somrig klädsel i italiensk anda.
                Tänk livfulla färger, mönster och en avslappnad elegans. Se bilder ovan för inspiration.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}