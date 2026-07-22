import dag2 from "../assets/Dag2.jpg";

export default function Saturday() {
  const events = [
    {
      time: "14.00",
      title: "Vigsel – Helga Trefaldighets kyrka",
      text: "Vi säger ja till varandra i Helga Trefaldighets kyrka i Uppsala. Efter ceremonin väntar bussar som tar oss vidare till festlokalen.",
    },
    {
      title: "Transport till Örbyhus slott",
      text: "Chartrade bussar avgår direkt efter vigseln och tar oss till Örbyhus slott där kvällens firande fortsätter.",
    },
    {
      title: "Mingel",
      text: "Bubbel och tårta serveras ute i Örbyhus slotts trädgård.",
    },
    {
      time: "17.30",
      title: "Middag & Fest",
      text: "Middagen serveras och följs av tal, skratt och dans långt in på natten.",
    },
    {
      time: "00.00",
      title: "Första bussen hem",
      text: "Bussar tillbaka till Uppsala går i två omgångar under natten. Det kommer att gå en tidigare buss tillbaka till Uppsala kl 00 för den som dansat klart. Bussen stannar utanför Scandic Uplandia samt Villa Anna.",
    },
    {
      time: "02.00",
      title: "Hemresa för resten",
      text: "Sista bussen avgår kl. 02.00. Bussarna stannar utanför Scandic Uplandia samt Villa Anna.",
    },
  ];

  return (
    <section className="w-full py-12 bg-white">
      <div className="max-w-3xl mx-auto px-6">

        <div className="mb-12 overflow-hidden rounded-2xl">
          <img
            src={dag2}
            alt="Fredag pizzakväll"
            className="w-full aspect-[5/4] object-cover"
          />
        </div>

        <div className="mb-16 text-center">
          <p className="text-sm tracking-[0.3em] uppercase text-neutral-500 mb-3">
            Lördag
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl mb-6">
            Bröllopsdagen
          </h2>
          <div className="w-16 h-px bg-neutral-400 mx-auto" />
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-3 top-0 bottom-0 w-px bg-neutral-300" />

          <div className="space-y-14">
            {events.map((event, index) => (
              <div key={index} className="relative pl-12">
                {/* Dot */}
                <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-white border-2 border-neutral-400" />

                {event.time && (
                  <p className="text-sm uppercase tracking-widest text-neutral-500 mb-2">
                    {event.time}
                  </p>
                )}

                <h3 className="font-serif text-xl mb-2">
                  {event.title}
                </h3>

                <p className="text-neutral-700 leading-relaxed">
                  {event.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Extra Information */}
      <div className="mt-24 border-t border-neutral-200 pt-16 pl-12 space-y-12">

        {/* Dresscode */}
        <div>
          <h3 className="font-serif text-2xl mb-6">
            Dresscode
          </h3>

          <div className="grid md:grid-cols-2 gap-10 items-start">

            {/* Text */}
            <div>
              <p className="text-neutral-700 leading-relaxed mb-4">
                Mörk kostym. För den som önskar är smoking varmt välkommet.
              </p>

              <p className="text-neutral-600 text-sm leading-relaxed">
                Tänk klassiskt, elegant och festligt. Lång klänning eller
                knälång festklänning för damer, mörk kostym eller smoking
                för herrar.
              </p>
            </div>
          </div>
        </div>

        {/* Tal */}
        <div>
          <h3 className="font-serif text-2xl mb-4">
            Tal
          </h3>
          <p className="text-neutral-700 leading-relaxed">
            Vill du hålla tal under middagen? Kontakta vår toast på{" "}
            <a
              href="mailto:ebbaochgustafstoastar@gmail.com"
              className="underline hover:text-neutral-500 transition-colors"
            >
              ebbaochgustafstoastar@gmail.com
            </a>.
          </p>
        </div>

      </div>
    </section>
  );
}