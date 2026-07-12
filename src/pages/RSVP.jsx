export default function RSVP() {
  return (
    <section className="max-w-3xl mx-auto py-20 px-6">
      <h2 className="font-serif text-3xl mb-6">OSA</h2>
      <p className="text-neutral-600">
        Anmäl dig via detta formulär senast 28:e februari: {" "}
        <a
          href="https://forms.gle/w33UA1XzFqvZK8MD9"
          className="font-semibold text-neutral-800 underline underline-offset-2 decoration-neutral-400 hover:decoration-neutral-800 transition"
        >
          Anmälningsformulär
        </a>
        .
      </p>
      <p className="text-neutral-600">
        OBS! En anmälan per person.
      </p>
    </section>
  );
}
