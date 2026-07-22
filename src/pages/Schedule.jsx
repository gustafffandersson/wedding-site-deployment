import { Link } from "react-router-dom";

export default function Schedule() {
  return (
    <section className="w-full py-20">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="font-serif text-3xl mb-6">
          Helgen i stort
        </h2>

        <p className="text-neutral-700 mb-12 leading-relaxed">
          Vi firar hela helgen - från en avslappnad pizzakväll med italienskt tema
          på fredagen till bröllopet på lördagen. Du är varmt välkommen att delta 
          och vi hoppas att du vill vara med hela helgen.
        </p>

        <div className="space-y-10">
          {/* Friday */}
          <div>
            <h3 className="font-serif text-2xl mb-2">
              Fredag · Italian Pizza Night
            </h3>
            <p className="text-neutral-600 leading-relaxed">
              Vi kickstartar helgen med en avslappnad pizzakväll. Ett informellt
              sätt för oss att spendera tid tillsammans. Tema för kvällen är
              Italiensk afton. Mer info här: {" "}
              <Link
                to="/friday"
                className="underline underline-offset-4 hover:text-neutral-800 transition"
              >
                Fredag
              </Link>
            </p>
          </div>

          {/* Saturday */}
          <div>
            <h3 className="font-serif text-2xl mb-2">
              Lördag · Bröllopsdagen
            </h3>
            <p className="text-neutral-600 leading-relaxed">
              Lördagen är dagen D - Cermoni följt av firande ända in på småtimmarna.
              Mer detaljerad information hittar du på sidan för {" "}
              <Link
                to="/saturday"
                className="underline underline-offset-4 hover:text-neutral-800 transition"
              >
                Lördag
              </Link>
              .
            </p>
          </div>
        </div>

        {/* Transport note */}
        <div className="mt-12 border-t pt-6 text-neutral-600 text-sm leading-relaxed">
          <p>
            Det kommer att gå bussar mellan kyrkan och festen som också tar dig tillbaka
            till Uppsala under kvällen. 
          </p>
        </div>
      </div>
    </section>
  );
}
