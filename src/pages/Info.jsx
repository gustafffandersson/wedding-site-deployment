import orbyMap from "../assets/orby_map.jpg";

export default function Info() {
  const items = [
    {
      title: "Barnfritt",
      body: "Vi har valt att fira bröllopet barnfritt. Ammande barn är undantagna. Tack för förståelse!",
    },
    {
      title: "Transport",
      body: "Vi räknar med att ni tar er till Uppsala själva. Efter Ceremonin i Helga Trefaldighets kyrka, har vi chartrat bussar som tar oss till festlokalen. Det kommer sedan att gå bussar tillbaka till Uppsala (Scandic Uplandia & Villa Anna) klockan 00 och 02 under kvällen.",
    },
    {
      title: "Parkering",
      body: "I Uppsala finns gatuparkeringar, parkeringsgarage, och parkering i samband med hotell. Vill man åka egen bil till festlokalen kan man parkera i allén (se karta över Örbyhus slott).",
    },
    {
      title: "Klädkod",
      body: "Fredag: Färgsprakande Italien. \nLördag: Mörk kostym. \nSe sidaorna för varje enskild dag för inspiration.",
    },
    {
    title: "Boende",
    body: (
      <>
        Om ni behöver boende i Uppsala, rekommenderar vi att ni bokar Scandic Uplandia ({" "}
        
        <a  href="https://www.scandichotels.com/sv/hotell/scandic-uplandia"
          className="font-semibold text-neutral-800 underline underline-offset-2 decoration-neutral-400 hover:decoration-neutral-800 transition"
        >
          Scandic Uplandia
        </a>{" "}
        ) och ange koden <strong>BGOE110627</strong> för ett förmånligare pris. <br />
        Vill ni lösa boende själva går det såklart också bra.
      </>
    ),
    },
    {
      title: "Present",
      body: "Er närvaro är den finaste gåvan. Om ni ändå vill uppmärksamma vår dag önskar vi oss minnen för livet i form av upplevelser. Vi uppskattar särskilt gastronomiska upplevelser, fine dining, vin- och champagneprovningar, exklusiva restaurangbesök, spaupplevelser, weekendresor och andra upplevelser med lite extra guldkant. \n \nOm ni hellre vill ge något att ta med hem uppskattar vi tidlös inredning av hög kvalitet, särskilt från Svenskt Tenn.",
    },
    {
      title: "Kontakt",
      body: "Har ni frågor? Hör av er! \nGustaf: 073-575 38 38 \nToastmasters: ebbaochgustafstoastar@gmail.com \nEbba & Gustaf: ebbaochgustafbrollop@gmail.com",
    },
  ];

  return (
    <section className="max-w-3xl mx-auto py-20 px-6">
      <h2 className="font-serif text-3xl mb-6">Information</h2>
      <p className="text-neutral-600 mb-12">
        Här är lite praktisk information inför helgen.
      </p>

      <div className="grid sm:grid-cols-2 gap-x-10 gap-y-10">
        {items.map((item) => (
          <div key={item.title}>
            <h3 className="font-serif text-xl mb-2 text-neutral-800">
              {item.title}
            </h3>
            <p className="text-neutral-600 leading-relaxed whitespace-pre-line">{item.body}</p>
          </div>
        ))}
      </div>
      
      <div className="mt-16 pt-16 border-t border-neutral-200">
        <p className="text-neutral-600 mb-2">
          Vill du ta egen bil till Örbyhus slott, parkerar du enklast i allén enligt bilden nedan.
        </p>

        <div className="mb-12 overflow-hidden rounded-2xl">
          <img
            src={orbyMap}
            alt="Karta Örbyhus slott parkering"
            className="w-full aspect-[3/2] object-cover"
          />
        </div>
      </div>
    </section>
  );
}
