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
      time: "18.00",
      title: "Middag & Fest",
      text: "Middagen serveras kl. 18.00 och följs av tal, skratt och dans långt in på natten.",
    },
    {
      time: "00.00",
      title: "Första bussen hem",
      text: "Det kommer att gå en buss tillbaka till Uppsala för den som dansat klart.",
    },
    {
      time: "02.00",
      title: "Hemresa för resten",
      text: "Bussar tillbaka till Uppsala går i två omgångar under natten. Sista bussen avgår kl. 02.00.",
    },
  ];

  return (
    <section className="w-full py-24 bg-neutral-50">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="font-serif text-3xl mb-16">
          Lördag · Bröllopsdagen
        </h2>

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