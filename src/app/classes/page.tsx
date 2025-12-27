import Link from "next/link";

export default function ClassesPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <div className="mx-auto max-w-6xl px-4 pt-28 pb-16">
        {/* HERO */}
        <section className="mb-10">
          <p className="text-xs tracking-[0.25em] text-amber-200/80">
            BIJALSANGNAACH • CLASSES
          </p>

          <h1 className="mt-3 font-serif text-4xl md:text-5xl">
            Online Kathak Classes
          </h1>

          <p className="mt-3 max-w-2xl text-neutral-300">
            Beginner / Intermediate / Advance batches. Classes are conducted online via Zoom.
            If you miss a class, recording will be available for 7 days.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/register"
              className="rounded-full bg-amber-300 px-6 py-3 font-semibold text-neutral-900 hover:bg-amber-200 transition"
            >
              Book Trial / Register
            </Link>
            <Link
              href="/about"
              className="rounded-full border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white hover:bg-white/10 transition"
            >
              Know More
            </Link>
          </div>
        </section>

        {/* GRID */}
        <section className="grid gap-6 lg:grid-cols-[1fr_380px]">
          {/* LEFT */}
          <div className="space-y-6">
            {/* Beginner Schedule */}
            <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6">
              <h2 className="font-serif text-2xl">Beginner Schedule</h2>
              <p className="mt-2 text-sm text-neutral-300">
                Total: 8 classes per month
              </p>

              <div className="mt-5 grid gap-4 md:grid-cols-3">
                <ScheduleCard
                  title="Monday – Tuesday"
                  est="8:30 PM – 9:30 PM (EST)"
                  ist="7:00 AM – 8:00 AM (IST)"
                />
                <ScheduleCard
                  title="Wednesday – Thursday"
                  est="7:30 PM – 8:30 PM (EST)"
                  ist="6:00 AM – 7:00 AM (IST)"
                />
                <ScheduleCard
                  title="Saturday – Sunday"
                  est="8:30 AM – 9:30 AM (EST)"
                  ist="7:00 PM – 8:00 PM (IST)"
                />
              </div>
            </div>

            {/* Trial Banner */}
            <div className="rounded-2xl border border-amber-300/30 bg-amber-300/10 p-6">
              <h3 className="font-serif text-xl text-amber-100">
                Trial Class — December 27, 2025
              </h3>
              <div className="mt-3 grid gap-2 text-sm text-neutral-200 md:grid-cols-2">
                <p>
                  <span className="text-neutral-300">India:</span>{" "}
                  7:00 PM – 7:30 PM (IST)
                </p>
                <p>
                  <span className="text-neutral-300">USA/UK/CANADA:</span>{" "}
                  8:00 AM – 8:30 AM (EST)
                </p>
              </div>

              <div className="mt-5">
                <Link
                  href="/register"
                  className="inline-flex rounded-full bg-amber-300 px-6 py-3 font-semibold text-neutral-900 hover:bg-amber-200 transition"
                >
                  Register for Trial
                </Link>
              </div>
            </div>

            {/* Fees */}
            <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6">
              <h2 className="font-serif text-2xl">Fees</h2>

              <div className="mt-5 grid gap-4 md:grid-cols-2">
                <FeeCard
                  title="For Indian Residents"
                  price="₹1500 per month"
                  note="Beginner Level"
                />
                <FeeCard
                  title="For USA / UK / CANADA Residents"
                  price="$160 per month"
                  note="Beginner Level"
                />
              </div>

              <p className="mt-4 text-sm text-neutral-400">
                If you reside outside India (even if you are an Indian citizen), international session fees will apply.
              </p>
            </div>

            {/* CTA */}
            <div className="rounded-2xl border border-white/10 bg-gradient-to-r from-white/5 to-white/0 p-6">
              <h3 className="font-serif text-2xl">Ready to begin?</h3>
              <p className="mt-2 text-sm text-neutral-300">
                Submit your details and we will reach out personally with next steps.
              </p>
              <div className="mt-5">
                <Link
                  href="/register"
                  className="inline-flex rounded-full bg-amber-300 px-6 py-3 font-semibold text-neutral-900 hover:bg-amber-200 transition"
                >
                  Book Trial / Register
                </Link>
              </div>
            </div>
          </div>

          {/* RIGHT SIDEBAR */}
          <aside className="space-y-6">
            <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6">
              <h3 className="font-serif text-xl">How classes work</h3>
              <ul className="mt-4 space-y-3 text-sm text-neutral-300">
                <li>• Online via Zoom</li>
                <li>• Recording available for 7 days if you miss a class</li>
                <li>• Beginner / Intermediate / Advance</li>
                <li>• Personal guidance & structured learning</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6">
              <h3 className="font-serif text-xl">Quick action</h3>
              <p className="mt-2 text-sm text-neutral-300">
                Want us to contact you directly? Fill the registration form and we’ll message you on WhatsApp/email.
              </p>
              <Link
                href="/register"
                className="mt-5 inline-flex w-full justify-center rounded-full bg-amber-300 px-6 py-3 font-semibold text-neutral-900 hover:bg-amber-200 transition"
              >
                Register / Enquire
              </Link>
            </div>
          </aside>
        </section>
      </div>
    </main>
  );
}

function ScheduleCard({
  title,
  est,
  ist,
}: {
  title: string;
  est: string;
  ist: string;
}) {
  return (
    <div className="rounded-2xl border border-neutral-800 bg-neutral-950/40 p-4">
      <p className="font-semibold">{title}</p>
      <p className="mt-2 text-sm text-neutral-300">{est}</p>
      <p className="mt-1 text-sm text-neutral-300">{ist}</p>
    </div>
  );
}

function FeeCard({
  title,
  price,
  note,
}: {
  title: string;
  price: string;
  note: string;
}) {
  return (
    <div className="rounded-2xl border border-neutral-800 bg-neutral-950/40 p-4">
      <p className="font-semibold">{title}</p>
      <p className="mt-2 text-2xl font-semibold text-amber-200">{price}</p>
      <p className="mt-1 text-sm text-neutral-400">{note}</p>
    </div>
  );
}
