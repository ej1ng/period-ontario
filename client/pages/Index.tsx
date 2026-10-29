import { FormEvent, useState } from "react";
import { ContactRequest, ContactResponse } from "@shared/api";
import TeamCarousel from "../components/TeamCarousel";
import TeamMemberCard from "../components/TeamMemberCard";
import {
  boardOfDirectors,
  departmentHeads,
  leadership,
  officers,
} from "../data/team";

const recentEvents = [
  {
    title: "Angus Glen Packing Party",
    date: "November 29, 2025",
    image: "/PackingParty11.29.jpg",
    alt: "Volunteers at the Angus Glen packing party in November 2025",
    description:
      "Volunteers and the PERIOD. Ontario team came together to prepare period packs that were donated to local organizations, raising awareness of period poverty along the way.",
  },
  {
    title: "Period Action Day",
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

const googleCalendarEmbedUrl = "https://calendar.google.com/calendar/embed?src=f0366f7864ecec16fbc0cd1c41df7d82320675416c8627ea75991501db424af9%40group.calendar.google.com&ctz=America%2FToronto";

const pillars = [
  {
    name: "Service",
    description:
      "We host packing parties that bring volunteers of all ages together to assemble period packs, which we donate to local organizations supporting people who can't reliably access menstrual products.",
  },
  {
    name: "Education",
    description:
      "We create workshops, presentations, and our PERIOD talk modules to make menstrual health knowledge accurate, inclusive, and accessible, starting as early as elementary school.",
  },
  {
    name: "Advocacy",
    description:
      "We push for systemic change in law and policy so that period products are affordable, tax-free, and freely available in every public space across Ontario.",
  },
];

const values = [
  {
    name: "Equity",
    description:
      "Menstrual products are a necessity, not a luxury. Everyone deserves access, regardless of income.",
  },
  {
    name: "Inclusivity",
    description:
      "Periods don't only affect women. Our work includes every person who menstruates.",
  },
  {
    name: "Openness",
    description:
      "Stigma thrives in silence. We talk about periods openly, honestly, and without shame.",
  },
  {
    name: "Community",
    description:
      "Change happens together. We build partnerships with volunteers, schools, and local organizations.",
  },
];

const donationWays = [
  {
    title: "Donate products",
    description:
      "Unopened pads, tampons, liners, and menstrual cups go straight into the period packs we assemble at our packing parties.",
  },
  {
    title: "Give funds",
    description:
      "Monetary donations let us buy products in bulk, run our events, and create educational resources for schools.",
  },
  {
    title: "Sponsor or partner",
    description:
      "Businesses, schools, and community groups can sponsor a packing party or host a product drive with us.",
  },
];

type Status = { type: "idle" | "sending" | "success" | "error"; message?: string };

const contactInputClass =
  "w-full rounded-lg border border-black/20 bg-white px-4 py-3 font-inter text-base focus:outline-none focus:ring-2 focus:ring-[#EF4036] focus:border-transparent";

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
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterStatus, setNewsletterStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [contactForm, setContactForm] = useState<ContactRequest>({
    name: "",
    email: "",
    message: "",
  });
  const [contactStatus, setContactStatus] = useState<Status>({ type: "idle" });

  const updateContact = (field: keyof ContactRequest) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => setContactForm((form) => ({ ...form, [field]: e.target.value }));

  async function handleNewsletterSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setNewsletterStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: "The Periodical Signup",
          email: newsletterEmail,
          message: "Please add me to The Periodical newsletter.",
        }),
      });
      const data = (await res.json()) as ContactResponse;

      if (res.ok && data.success) {
        setNewsletterEmail("");
        setNewsletterStatus("success");
      } else {
        setNewsletterStatus("error");
      }
    } catch {
      setNewsletterStatus("error");
    }
  }

  async function handleContactSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setContactStatus({ type: "sending" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(contactForm),
      });
      const data = (await res.json()) as ContactResponse;

      if (res.ok && data.success) {
        setContactStatus({ type: "success", message: data.message });
        setContactForm({ name: "", email: "", message: "" });
      } else {
        setContactStatus({ type: "error", message: data.message });
      }
    } catch {
      setContactStatus({
        type: "error",
        message: "We couldn't send your message. Please try again later.",
      });
    }
  }

  function scrollToSection(id: string) {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    window.history.replaceState(null, "", `#${id}`);
  }

  return (
    <main>
      {/* ── Hero ── */}
      <section className="relative w-full min-h-[calc(100svh-4rem)] md:min-h-[calc(100svh-5rem)] overflow-hidden flex flex-col">
        {/* Background photo */}
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/a9cec267488d404cf822a3a4a904b3da34917e07"
          alt="PERIOD. Ontario volunteers at an event"
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
              text="PERIOD."
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
            <a
              href="#mission"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("mission");
              }}
              className="inline-flex items-center gap-2 bg-black text-white font-medium rounded-lg hover:bg-[#EF4036] transition-colors mt-6"
              style={{
                fontSize: "clamp(0.875rem, 1.5vw, 1rem)",
                padding: "clamp(10px,1.5vw,16px) clamp(16px,2.5vw,24px)",
              }}
            >
              MORE
            </a>
          </div>
        </div>
      </section>

      {/* ── Partners / sponsors strip ── */}
      <section className="w-full bg-[#F5F5F5] py-10">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 min-h-[80px] flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-center">
          <p className="text-black/60 text-sm font-inter tracking-widest uppercase">
            Our Partners &amp; Sponsors
          </p>
          <a
            href="#contact"
            className="font-inter text-sm font-medium text-[#EF4036] hover:underline"
          >
            Interested in partnering with us? Get in touch →
          </a>
        </div>
      </section>

      {/* ── Newsletter signup ── */}
      <section id="mission" className="w-full bg-black text-white py-10 md:py-14 scroll-mt-20">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-8 lg:gap-16 items-center">
          <div>
            <p className="font-inter text-sm uppercase tracking-[0.25em] text-white/60 mb-4">
              Newsletter
            </p>
            <h2 className="text-3xl md:text-5xl font-bold uppercase mb-5">
              Sign up for The Periodical
            </h2>
            <p className="font-inter text-lg text-white/75 leading-relaxed max-w-2xl">
              Get updates on upcoming packing parties, PERIOD talks, advocacy
              work, volunteer opportunities, and ways to support menstrual
              equity across Ontario.
            </p>
          </div>

          <form
            onSubmit={handleNewsletterSubmit}
            className="bg-white rounded-lg p-6 sm:p-8 shadow-2xl"
          >
            <label
              htmlFor="newsletter-email"
              className="block font-inter font-medium text-black mb-3"
            >
              Email address
            </label>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                id="newsletter-email"
                name="email"
                type="email"
                autoComplete="email"
                required
                maxLength={200}
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="you@example.com"
                className="min-w-0 flex-1 rounded-lg border border-black/20 bg-white px-4 py-3 font-inter text-base text-black focus:outline-none focus:ring-2 focus:ring-[#EF4036] focus:border-transparent"
              />
              <button
                type="submit"
                disabled={newsletterStatus === "sending"}
                className="bg-[#EF4036] text-white font-inter font-medium px-8 py-3 rounded-lg hover:bg-black transition-colors disabled:opacity-60"
              >
                {newsletterStatus === "sending" ? "SIGNING UP..." : "SIGN UP"}
              </button>
            </div>
            <div aria-live="polite" className="mt-4">
              {newsletterStatus === "success" && (
                <p className="font-inter text-sm rounded-lg bg-green-50 text-green-800 px-4 py-3">
                  Thanks for signing up for The Periodical!
                </p>
              )}
              {newsletterStatus === "error" && (
                <p className="font-inter text-sm rounded-lg bg-red-50 text-red-800 px-4 py-3">
                  We couldn't submit your signup. Please try again later.
                </p>
              )}
            </div>
          </form>
        </div>
      </section>

      {/* ── Mission ── */}
      <section className="bg-[#F5F5F5] scroll-mt-20">
        <div className="max-w-4xl mx-auto px-6 md:px-10 py-10 md:py-14 text-center">
          <h2 className="text-3xl md:text-5xl font-bold uppercase mb-8">
            Our Mission
          </h2>
          <p
            className="text-black leading-relaxed"
            style={{ fontSize: "clamp(1.15rem, 2.4vw, 1.6rem)" }}
          >
            PERIOD. Ontario works to end period poverty and stigma through
            service, education, and advocacy, so that everyone has access to the
            period products and knowledge they need. We aim to create an Ontario
            where period products are accessible to everyone, and where periods are talked
            about openly, without shame.
          </p>
          <div className="mt-10 w-28 h-1 bg-[#EF4036] rounded-full mx-auto" />
        </div>

        <div className="max-w-[1440px] mx-auto px-6 md:px-10 py-10 md:py-14">
          <h3 className="text-3xl md:text-4xl font-bold mb-10 text-center">
            HOW WE DO IT
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
            {pillars.map((pillar) => (
              <div
                key={pillar.name}
                className="rounded-lg border-t-4 border-[#EF4036] bg-white shadow p-6 md:p-8"
              >
                <h4 className="text-2xl font-bold uppercase text-[#EF4036] mb-3">
                  {pillar.name}
                </h4>
                <p className="font-inter text-black/70 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full bg-black text-white">
          <div className="max-w-[1440px] mx-auto px-6 md:px-10 py-10 md:py-14">
            <h3 className="text-3xl md:text-4xl font-bold mb-10 text-center">
              OUR VALUES
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value) => (
                <div key={value.name}>
                  <h4 className="text-xl font-bold uppercase text-[#F8755B] mb-2">
                    {value.name}
                  </h4>
                  <p className="font-inter text-white/75 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

      {/* ── Recent events ── */}
      <section id="events" className="w-full bg-white py-10 md:py-14 scroll-mt-20">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10">
          <h2 className="text-3xl md:text-5xl font-bold uppercase mb-6 md:mb-8">
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
                  className="w-full h-56 md:h-64 lg:h-72 object-cover rounded-lg mt-4"
                />
                <p className="mt-4 font-inter text-black/70 leading-relaxed">
                  {event.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Upcoming events and calendar ── */}
      <section className="w-full bg-[#EF4036] text-white py-10 md:py-14">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-16 items-center">
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
            <a
              href="#contact"
              className="inline-block mt-8 bg-black text-white font-inter font-medium px-8 py-3 rounded-lg hover:bg-white hover:text-black transition-colors"
            >
              JOIN US
            </a>
          </div>

          <div className="rounded-lg bg-white text-black shadow-2xl overflow-hidden">
            {googleCalendarEmbedUrl ? (
              <iframe
                title="PERIOD. Ontario event calendar"
                src={googleCalendarEmbedUrl}
                className="w-full h-[460px] border-0"
              />
            ) : (
              <div className="min-h-[320px] flex flex-col items-center justify-center text-center px-6 py-10">
                <div className="w-16 h-16 rounded-full bg-[#EF4036] text-white flex items-center justify-center text-2xl font-bold mb-6">
                  31
                </div>
                <h3 className="text-2xl md:text-3xl font-bold uppercase mb-3">
                  Calendar Coming Soon
                </h3>
              </div>
            )}
          </div>
        </div>
      </section>
      </section>

      {/* ── Team preview ── */}
      <section id="team" className="bg-white py-10 md:py-14 scroll-mt-20">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10">
          <h2 className="text-3xl md:text-5xl font-bold uppercase mb-6 md:mb-8">
            Our Team
          </h2>

          <div className="space-y-10">
            <div className="flex flex-wrap justify-center gap-x-16 gap-y-10">
              {[
                { label: "Board of Directors", members: boardOfDirectors },
                { label: "Leadership", members: leadership },
              ].map((group) => (
                <div key={group.label}>
                  <h3 className="font-inter text-sm uppercase tracking-[0.25em] text-black/50 mb-4 text-center">
                    {group.label}
                  </h3>
                  <div className="flex flex-wrap justify-center gap-6">
                    {group.members.map((member) => (
                      <div key={member.name} className="w-44">
                        <TeamMemberCard member={member} size="md-lg" />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div>
              <h3 className="font-inter text-sm uppercase tracking-[0.25em] text-black/50 mb-4 text-center">
                Department Heads
              </h3>
              <div className="max-w-[1016px] mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-y-8">
                {departmentHeads.map((member) => (
                  <TeamMemberCard key={member.role} member={member} size="md" />
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-inter text-sm uppercase tracking-[0.25em] text-black/50 mb-4 text-center">
                Officers
              </h3>
              <TeamCarousel members={officers.flatMap((group) => group.members)} />
            </div>

            <a
              href="#contact"
              className="inline-flex bg-black text-white font-inter font-medium px-8 py-3 rounded-lg hover:bg-[#EF4036] transition-colors"
            >
              Get in touch →
            </a>
          </div>
        </div>
      </section>

      {/* ── Donate ── */}
      <section id="donate" className="w-full bg-[#F5F5F5] scroll-mt-20">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 py-10 md:py-14">
          <h2 className="text-3xl md:text-5xl font-bold uppercase mb-4 text-center">
            Donate
          </h2>
          <p className="font-inter text-black/70 text-base md:text-lg text-center max-w-3xl mx-auto mb-10 leading-relaxed">
            Every period pack we donate starts with someone like you. Your
            support puts essential products in the hands of people who need
            them.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
            {donationWays.map((way) => (
              <div
                key={way.title}
                className="rounded-lg border-t-4 border-[#EF4036] bg-white shadow p-6 md:p-8"
              >
                <h3 className="text-xl md:text-2xl font-bold uppercase mb-3">
                  {way.title}
                </h3>
                <p className="font-inter text-black/70 leading-relaxed">
                  {way.description}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a
              href="#contact"
              className="inline-block bg-black text-white font-inter font-medium px-8 py-3 rounded-lg hover:bg-[#EF4036] transition-colors"
            >
              GET IN TOUCH
            </a>
          </div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section id="contact" className="w-full bg-white scroll-mt-20">
        <div className="max-w-2xl mx-auto px-6 md:px-10 py-10 md:py-14">
          <h2 className="text-3xl md:text-5xl font-bold uppercase mb-4 text-center">
            Contact Us
          </h2>
          <p className="font-inter text-black/70 text-base md:text-lg text-center mb-10 leading-relaxed">
            Want to volunteer, partner with us, book a PERIOD talk, or donate
            products? We'd love to hear from you.
          </p>

          <form onSubmit={handleContactSubmit} className="flex flex-col gap-6">
            <div>
              <label htmlFor="name" className="block font-inter font-medium mb-2">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                maxLength={100}
                value={contactForm.name}
                onChange={updateContact("name")}
                className={contactInputClass}
              />
            </div>

            <div>
              <label htmlFor="email" className="block font-inter font-medium mb-2">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                maxLength={200}
                value={contactForm.email}
                onChange={updateContact("email")}
                className={contactInputClass}
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block font-inter font-medium mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                maxLength={5000}
                value={contactForm.message}
                onChange={updateContact("message")}
                className={`${contactInputClass} resize-y`}
              />
            </div>

            <button
              type="submit"
              disabled={contactStatus.type === "sending"}
              className="self-start bg-black text-white font-inter font-medium px-8 py-3 rounded-lg hover:bg-[#EF4036] transition-colors disabled:opacity-60"
            >
              {contactStatus.type === "sending" ? "SENDING..." : "SEND MESSAGE"}
            </button>

            <div aria-live="polite">
              {contactStatus.type === "success" && (
                <p className="font-inter rounded-lg bg-green-50 text-green-800 px-4 py-3">
                  {contactStatus.message}
                </p>
              )}
              {contactStatus.type === "error" && (
                <p className="font-inter rounded-lg bg-red-50 text-red-800 px-4 py-3">
                  {contactStatus.message}
                </p>
              )}
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
