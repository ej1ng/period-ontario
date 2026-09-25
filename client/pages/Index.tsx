import { Link } from "react-router-dom";

const recentEvents = [
  {
    title: "Angus Glen Packing Party",
    date: "November 29, 2025",
    image: "/PackingParty11.29.jpg",
    alt: "Volunteers at the Angus Glen packing party in November 2025",
    description:
      "Volunteers and the PERIOD Ontario team came together to prepare period packs that were donated to local organizations, raising awareness of period poverty along the way.",
  },
  {
    title: "Packing Party",
    date: "October 10, 2025",
    image: "/PackingParty10.10.jpg",
    alt: "Volunteers at the packing party in October 2025",
    description:
      "Our fall packing party brought community members together to assemble period packs for people in need and learn about menstrual equity.",
  },
  {
    title: "Packing Party",
    date: "June 21, 2025",
    image: "/PackingParty6.21.jpg",
    alt: "Volunteers at the packing party in June 2025",
    description:
      "Volunteers of all ages joined us to pack essential menstrual products and start conversations about period poverty and access.",
  },
];

const leaders = [
  { role: "President", name: "Mehrava Afshani" },
  { role: "Vice-President", name: "Valerie Tso" },
];

// A word with a dark offset outline layered on top, sized by the same class so they always line up
function OutlinedWord({
  text,
  className,
  stroke,
  offset,
}: {
  text: string;
  className: string;
  stroke: number;
  offset: number;
}) {
  return (
    <span className={`relative block w-fit leading-none ${className}`}>
      {text}
      <span
        aria-hidden="true"
        className="absolute pointer-events-none"
        style={{
          top: -offset,
          left: -offset,
          color: "transparent",
          WebkitTextStroke: `${stroke}px #7A0F0F`,
          textShadow: "none",
        }}
      >
        {text}
      </span>
    </span>
  );
}

export default function Index() {
  return (
    <main>
      {/* ── Hero ── */}
      <section className="relative w-full min-h-[calc(100svh-4rem)] md:min-h-[calc(100svh-5rem)] overflow-hidden flex flex-col">
        {/* Background photo */}
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/a9cec267488d404cf822a3a4a904b3da34917e07"
          alt="PERIOD Ontario volunteers at an event"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Diagonal red overlay – mirrors the Figma "Rectangle 1" shape */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom right, rgba(239,64,54,0.81) 55%, transparent 55%)",
          }}
        />

        {/* Hero text + mission card flow together so nothing overlaps or gets clipped */}
        <div className="relative z-10 flex flex-col flex-1 gap-10 md:gap-16 max-w-[1440px] mx-auto w-full px-6 md:px-10 pt-16 sm:pt-24 md:pt-32 pb-10 md:pb-24">
          <h1
            className="text-white leading-none tracking-tight"
            style={{
              fontFamily: "'Avenir', sans-serif",
              fontWeight: 700,
              textShadow: "0 8px 16px rgba(0, 0, 0, 0.4)",
            }}
          >
            <OutlinedWord
              text="PERIOD"
              className="text-[clamp(3.5rem,15vw,12rem)]"
              stroke={3}
              offset={5}
            />
            <OutlinedWord
              text="ONTARIO"
              className="text-[clamp(1.75rem,7.5vw,6rem)]"
              stroke={2}
              offset={3.5}
            />
          </h1>

          {/* Our Mission card */}
          <div className="mt-auto bg-white/70 rounded-lg shadow-2xl p-6 sm:p-8 md:p-12 w-full backdrop-blur-sm">
            {/* Heading */}
            <div className="flex flex-col gap-5 md:gap-6 w-full">
              <h2
                className="text-black font-bold leading-none"
                style={{
                  fontSize: "clamp(2rem, 5vw, 3rem)",
                  letterSpacing: "-0.02em",
                }}
              >
                OUR MISSION
              </h2>
              <p
                className="text-black/75 leading-relaxed"
                style={{
                  fontSize: "clamp(0.95rem, 2vw, 1.25rem)",
                }}
              >
                A proud chapter fighting period poverty and stigma through
                service, education, and advocacy
              </p>
            </div>

            {/* CTA */}
            <Link
              to="/mission"
              className="inline-flex items-center gap-2 bg-black text-white font-medium rounded-lg hover:bg-[#EF4036] transition-colors mt-6"
              style={{
                fontSize: "clamp(0.875rem, 1.5vw, 1rem)",
                padding: "clamp(10px,1.5vw,16px) clamp(16px,2.5vw,24px)",
              }}
            >
              MORE
            </Link>
          </div>
        </div>
      </section>

      {/* ── Partners / sponsors strip ── */}
      <section className="w-full bg-[#F5F5F5] py-10">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 min-h-[80px] flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-center">
          <p className="text-black/60 text-sm font-inter tracking-widest uppercase">
            Our Partners &amp; Sponsors
          </p>
          <Link
            to="/contact"
            className="font-inter text-sm font-medium text-[#EF4036] hover:underline"
          >
            Interested in partnering with us? Get in touch →
          </Link>
        </div>
      </section>

      {/* ── Recent events ── */}
      <section className="w-full bg-white py-14 md:py-20">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10">
          <h2 className="text-3xl md:text-5xl font-bold uppercase mb-8 md:mb-12">
            Recent Events
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentEvents.map((event) => (
              <article
                key={event.image}
                className="bg-white rounded-lg shadow p-6 flex flex-col"
              >
                <h3 className="text-xl font-semibold">{event.title}</h3>
                <p className="font-inter text-sm text-[#EF4036] font-medium mt-1">
                  {event.date}
                </p>
                <img
                  src={event.image}
                  alt={event.alt}
                  loading="lazy"
                  className="w-full h-64 md:h-72 lg:h-80 object-cover rounded-lg mt-4"
                />
                <p className="mt-4 font-inter text-black/70 leading-relaxed">
                  {event.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Upcoming events ── */}
      <section className="w-full bg-[#EF4036] text-white py-14 md:py-20">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold uppercase mb-6">
              Upcoming Events
            </h2>
            <p className="font-inter text-lg text-white/90 leading-relaxed max-w-xl">
              We host packing parties and PERIOD talks throughout the year. New
              events are announced soon. Reach out to volunteer, bring a
              packing party to your school, or be the first to hear about our
              next event.
            </p>
            <Link
              to="/contact"
              className="inline-block mt-8 bg-black text-white font-inter font-medium px-8 py-3 rounded-lg hover:bg-white hover:text-black transition-colors"
            >
              JOIN US
            </Link>
          </div>

          <img
            src="/PackingParty11.29.jpg"
            alt="Volunteers assembling period packs at a packing party"
            loading="lazy"
            className="w-full max-h-[420px] object-cover rounded-lg shadow-2xl"
          />
        </div>
      </section>

      {/* ── Team preview ── */}
      <section className="bg-white py-14 md:py-20">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10">
          <h2 className="text-3xl md:text-5xl font-bold uppercase mb-8 md:mb-12">
            Our Team
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
            {leaders.map((leader) => (
              <div
                key={leader.role}
                className="bg-[#F8755B] rounded-lg text-center px-6 py-10 flex flex-col items-center justify-center"
              >
                <h3 className="text-2xl lg:text-3xl font-bold uppercase">
                  {leader.role}
                </h3>
                <p className="text-xl lg:text-2xl font-semibold mt-2">
                  {leader.name}
                </p>
              </div>
            ))}

            <Link
              to="/team"
              className="group bg-black text-white rounded-lg text-center px-6 py-10 flex flex-col items-center justify-center hover:bg-[#EF4036] transition-colors"
            >
              <h3 className="text-2xl lg:text-3xl font-bold uppercase">
                Departments
              </h3>
              <p className="font-inter mt-2 text-white/80 group-hover:text-white">
                Meet our five teams →
              </p>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
