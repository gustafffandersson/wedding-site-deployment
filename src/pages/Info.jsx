import coffeesDesktop from "../assets/coffees_desktop.jpg";

export default function Info() {
  const items = [
    {
      title: "Transport",
      body: "Vi räknar med att ni tar er till Uppsala själva. Efter Ceremonin i Helga Trefaldighets kyrka, har vi chartrat bussar som tar oss till festlokalen. Det kommer sedan att gå bussar tillbaka till Uppsala (Scandic Uplandia & Villa Anna) klockan 12 och 02 under kvällen.",
    },
    {
      title: "Parkering",
      body: "I Uppsala finns gatuparkeringar, parkeringsgarage, och parkering i samband med hotell. Vill man åka egen bil till festlokalen kan man parkera i allén (se karta över Örbyhus slott).",
    },
    {
      title: "Klädkod",
      body: "Fredag: Udda kavaj, gärna färgglatt. \nLördag: Mörk kostym. ",
    },
    {
    title: "Boende",
    body: (
      <>
        Om ni behöver boende i Uppsala, rekommenderar vi att ni bokar Scandic Uplandia ({" "}
        
        <a  href="https://example.com/busstider"
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
      title: "Kontakt",
      body: "Har ni frågor? Hör av er! \nGustaf: 073 575 38 38 \nToastmasters: ebbaochgustafstoastar@gmail.com \nEbba & Gustaf: ebbaochgustafbrollop@gmail.com",
    },
  ];

  const images = [
    { src: coffeesDesktop, alt: "Karta Fredag" },
    { src: coffeesDesktop, alt: "Karta kyrka" },
    { src: coffeesDesktop, alt: "Karta Örbyhus slott" },
  ];

  return (
    <section className="max-w-3xl mx-auto py-20 px-6">
      <h2 className="font-serif text-3xl mb-6">Information</h2>
      <p className="text-neutral-600 mb-12">
        Här är lite praktisk information inför dagen.
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

      <div className="mt-20 grid grid-cols-2 sm:grid-cols-3 gap-4">
        {images.map((img) => (
          <img
            key={img.src}
            src={img.src}
            alt={img.alt}
            className="w-full aspect-square object-cover rounded-md"
          />
        ))}
      </div>
    </section>
  );
}
