import Image from "next/image";
import Link from "next/link";

const sidebarLinks = [
  { href: "#about", label: "About Me" },
  { href: "#awards", label: "Awards" },
  { href: "#performances", label: "Performances" },
  { href: "#classes", label: "Classes & Programs" },
  { href: "#contact", label: "Contact & Location" },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* TOP BANNER */}
<section className="relative h-[420px] w-full overflow-hidden">
  <Image
    src="/collage/b4.jpeg" // ⬅️ change this to the number you liked
    alt="Bijal performing Kathak"
    fill
    priority
    sizes="100vw"
    className="object-cover"
    style={{ objectPosition: "center 20%" }}
  />
  {/* darker gradient so text is readable */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/40 to-black/80" />

  <div className="relative z-10 flex h-full items-end">
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 pb-8 md:px-6">
      <p className="text-xs uppercase tracking-[0.25em] text-amber-200/80">
        Shridhar Kala Kendra
      </p>
      <h1 className="max-w-3xl font-serif text-3xl md:text-4xl lg:text-5xl">
        About Bijal – Founder &amp; Artistic Director
      </h1>
      <p className="max-w-2xl text-sm md:text-base text-neutral-100/85">
        National award-winning Kathak dancer, choreographer, and educator
        bringing the grace of Indian classical dance to New Jersey and to
        students around the world.
      </p>
    </div>
  </div>
</section>


      {/* MAIN CONTENT */}
      <section className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 py-12 md:flex-row md:px-6 md:py-16">
        {/* LEFT SIDEBAR */}
        <aside className="w-full md:w-64 md:flex-shrink-0">
          {/* Logo + name */}
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-amber-200/80 bg-black/80">
              <span className="text-xl" aria-hidden="true">
                💃
              </span>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-amber-200/80">
                SKK
              </p>
              <p className="text-sm font-semibold">
                Shridhar Kala Kendra
              </p>
            </div>
          </div>

          {/* Register card */}
          <div className="mb-8 rounded-2xl bg-white/5 p-4 shadow-[0_18px_50px_rgba(0,0,0,0.75)]">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200">
              Registration Open
            </p>
            <p className="mt-2 text-sm text-neutral-100">
              New batches for kids, teens, and adults in New Jersey & online.
            </p>
            <p className="mt-2 text-xs text-neutral-300">
              Beginner to advanced Kathak, with optional exam & performance
              opportunities.
            </p>
            <Link
              href="#contact"
              className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-amber-300 px-4 py-2 text-xs font-semibold tracking-wide text-black hover:bg-amber-200 transition"
            >
              REGISTER / ENQUIRE
            </Link>
          </div>

          {/* Sidebar navigation */}
          <nav className="space-y-1 text-sm">
            {sidebarLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block rounded-full px-3 py-2 text-neutral-300 hover:bg-white/10 hover:text-white transition"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </aside>

        {/* RIGHT CONTENT */}
        <div className="flex-1 space-y-12 text-sm md:text-[15px] leading-relaxed">
          {/* ABOUT SECTION */}
          <section id="about" className="space-y-4">
            <h2 className="font-serif text-xl md:text-2xl">
              A life dedicated to Kathak
            </h2>
            <p>
              Bijal is a{" "}
              <span className="font-semibold">
                national award-winning Kathak artist
              </span>{" "}
              from India, trained in the{" "}
              <span className="italic">Lucknow</span> and{" "}
              <span className="italic">Jaipur gharanas</span>. From a young age
              she has performed on some of India&apos;s most prestigious
              stages, representing her state and winning recognition for her
              clarity of footwork, expressive abhinaya, and powerful stage
              presence.
            </p>
            <p>
              After moving to New Jersey, USA, she founded{" "}
              <span className="font-semibold">ShreeDhar Kala Kendra</span> with
              a simple vision: to create a warm, disciplined space where
              students of all ages can discover the joy, depth, and spirituality
              of Kathak – whether they are preparing for professional stages or
              simply dancing for the love of the art.
            </p>
            <p>
              Her teaching blends the traditional guru–shishya parampara with a
              modern, student-friendly approach. Classes focus equally on{" "}
              <span className="font-semibold">
                technique, expression, theory, and storytelling
              </span>
              , helping students build confidence on stage and in life.
            </p>
          </section>

          {/* AWARDS SECTION */}
          <section id="awards" className="space-y-4">
            <h2 className="font-serif text-xl md:text-2xl">
              Selected Awards & Recognition
            </h2>
            <ul className="list-disc space-y-2 pl-5 text-neutral-100/90">
              <li>
                National-level Kathak competition winner (India) – honoured for
                excellence in classical choreography and performance.
              </li>
              <li>
                Lead performer at multiple state cultural festivals and
                government events.
              </li>
              <li>
                Invited soloist for temple festivals, university events, and
                cultural organizations.
              </li>
              <li>
                Choreographed group productions featuring more than 30 dancers
                across age groups.
              </li>
            </ul>
          </section>

          {/* PERFORMANCES SECTION */}
          <section id="performances" className="space-y-4">
            <h2 className="font-serif text-xl md:text-2xl">
              Performances & Productions
            </h2>
            <p>
              Bijal has presented solo, duet, and group works across India and
              now in the United States – from intimate temple spaces to large
              auditoriums and festival stages. Her repertoire includes
              traditional Kathak nritta, abhinaya pieces, thematic works, and
              collaborations with other classical and folk styles.
            </p>
            <p>
              ShreeDhar Kala Kendra regularly creates{" "}
              <span className="font-semibold">
                annual student showcases, community performances, and special
                thematic productions
              </span>{" "}
              that give students real stage experience in a professional
              setting.
            </p>
          </section>

          {/* CLASSES SECTION */}
          <section id="classes" className="space-y-4">
            <h2 className="font-serif text-xl md:text-2xl">
              Classes & Programs
            </h2>
            <p>We currently offer:</p>
            <ul className="list-disc space-y-2 pl-5 text-neutral-100/90">
              <li>Beginner, intermediate, and advanced Kathak batches</li>
              <li>Kids classes (5–12), teen batches, and adult groups</li>
              <li>Personalized one-on-one coaching (limited slots)</li>
              <li>Online classes for students outside New Jersey</li>
              <li>
                Workshop series on abhinaya, rhythm, theory, and
                choreography
              </li>
            </ul>
            <p className="text-neutral-200">
              Every batch focuses on technique, taal, padhant, body alignment,
              stage presence, and understanding of the stories behind the dance.
            </p>
          </section>

          {/* CONTACT SECTION */}
          <section id="contact" className="space-y-4">
            <h2 className="font-serif text-xl md:text-2xl">
              Contact & Location
            </h2>
            <p>
              ShreeDhar Kala Kendra is based in{" "}
              <span className="font-semibold">New Jersey, USA</span>, with
              in-person classes planned in the Edison / Iselin area and online
              batches for students across the US and internationally.
            </p>
            <p className="space-y-1 text-sm text-neutral-100">
              <span className="block">
                <span className="font-semibold">Email:</span>{" "}
                <a
                  href="mailto:info@shreedharkalakendra.com"
                  className="underline underline-offset-2 hover:text-amber-200"
                >
                  info@shreedharkalakendra.com
                </a>
              </span>
              <span className="block">
                <span className="font-semibold">Instagram:</span>{" "}
                <a
                  href="https://instagram.com/your_instagram_here"
                  target="_blank"
                  rel="noreferrer"
                  className="underline underline-offset-2 hover:text-amber-200"
                >
                  @your_instagram_here
                </a>
              </span>
            </p>
            <p className="text-sm text-neutral-300">
              For detailed schedule, fees, or to book a trial class, please use
              the Register / Enquire button above or send us an email with your
              name, age, and previous dance experience.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}
