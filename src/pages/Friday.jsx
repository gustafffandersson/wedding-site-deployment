export default function Friday() {
  return (
    <section className="w-full py-24 bg-neutral-50">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="font-serif text-3xl mb-8">
          Fredag · Pizzakväll
        </h2>

        <p className="text-neutral-700 leading-relaxed mb-16">
          Bröllopshelgen inleds med en avslappnad pizzakväll på
          Snerikes Nation i Uppsala. Ett perfekt tillfälle att landa,
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
                Snerikes Nation · Uppsala · 17:00
              </h3>
              <p className="text-neutral-700 leading-relaxed">
                Vi samlas på Snerikes Nation för en kväll fylld av pizza, spritzar, och
                uppladdning inför morgondagen.
              </p>
            </div>

            {/* Food & Drinks */}
            <div className="relative pl-12">
              {/* <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-white border-2 border-neutral-400" /> */}
              <h3 className="font-serif text-xl mb-2">
                Mat & Dryck
              </h3>
              <p className="text-neutral-700 leading-relaxed">
                Vi bjuder på pizza till alla gäster. Dryck finns att köpa i baren.
              </p>
            </div>

            {/* Theme */}
            <div className="relative pl-12">
              {/* <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-white border-2 border-neutral-400" /> */}
              <h3 className="font-serif text-xl mb-2">
                Tema · Färgsprakande Italien
              </h3>
              <p className="text-neutral-700 leading-relaxed">
                Dresscode: 
                <a href="https://www.careofcarl.se/sv/carlmagazine/stiltips/kladkoden-udda-kavaj.html" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                 &nbsp;Udda kavaj<br />
                </a>
                
                Vi uppmuntrar till en färgstark och somrig klädsel i italiensk anda.
                Tänk livfulla färger, mönster och en avslappnad elegans. Se bilder nedan för inspiration.
              </p>
            </div>

          </div>
        </div>

      </div>

      {/* Inspiration Section */}
      <div className="mt-24 border-t border-neutral-200 pt-16 pl-12">

        <div className="mb-10">
          <h3 className="font-serif text-2xl mb-3">
              Klädkoden i korthet
          </h3>
          <div className="w-60 h-px bg-neutral-400 mb-6" />
          <ul className="list-disc pl-6 space-y-2 text-neutral-700">
            <li>Kavaj</li>
            <li>Finare skjorta</li>
            <li>Byxor som chinos, flanellbyxor eller, vid mer informella tillfällen, mörka jeans</li>
            <li>Finare skor i läder eller mocka</li>
            <li>Slips och näsduk är valfritt</li>
          </ul>
          <h3 className="font-serif text-2xl mt-12 mb-3">
            Inspiration
          </h3>
          <div className="w-16 h-px bg-neutral-400 mb-6" />
          <p className="text-neutral-700 leading-relaxed">
            Tänk italiensk sommarkväll – varma färger, mönster,
            linnetyger och avslappnad elegans.
          </p>
          
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">

          <div className="group aspect-[4/5] overflow-hidden rounded-2xl shadow-sm bg-neutral-200">
            {/* 
      <img 
        src={inspo1} 
        alt="Färgstark italiensk klädsel"
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      */}
          </div>

          <div className="group aspect-[4/5] overflow-hidden rounded-2xl shadow-sm bg-neutral-200">
            {/* <img src={inspo2} alt="" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" /> */}
          </div>

          <div className="group aspect-[4/5] overflow-hidden rounded-2xl shadow-sm bg-neutral-200">
            {/* <img src={inspo3} alt="" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" /> */}
          </div>

        </div>

      </div>
    </section>
  );
}