import { Link } from "react-router-dom";

export default function Index() {
  return (
    <main>
      {/* ── Hero ── */}
      <section className="relative w-full min-h-[calc(100vh-5rem)] overflow-hidden">
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

        {/* Hero text */}
        <div className="relative z-10 flex flex-col justify-center h-full min-h-[calc(100vh-5rem)] px-8 md:px-16 lg:px-20 pt-12 pb-16">
          <h1
            className="text-white leading-none"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            <span className="block text-[clamp(5rem,18vw,18rem)] leading-none tracking-tight">
              PERIOD
            </span>
            <span className="block text-[clamp(2.5rem,9vw,9rem)] leading-none tracking-tight">
              ONTARIO
            </span>
          </h1>
        </div>
      </section>

      {/* ── Partners / sponsors strip ── */}
      <section className="w-full bg-[#D9D9D9] py-10 px-8 md:px-16 lg:px-20">
        <div className="max-w-[1250px] mx-auto min-h-[80px] flex items-center justify-center">
          <p className="text-gray-500 text-sm font-inter tracking-widest uppercase">
            Our Partners &amp; Sponsors
          </p>
        </div>
      </section>

      {/* ── Our Mission ── */}
      <section className="w-full bg-white px-8 md:px-16 lg:px-20 py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto flex flex-col items-start gap-8 md:gap-10">
          {/* Heading */}
          <div className="flex flex-col gap-5 md:gap-6 w-full">
            <h2
              className="text-black font-bold leading-none"
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "clamp(2.25rem, 5vw, 4rem)",
                letterSpacing: "-0.02em",
              }}
            >
              OUR MISSION
            </h2>
            <p
              className="text-black/75 leading-relaxed max-w-3xl"
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "clamp(1rem, 2vw, 1.5rem)",
              }}
            >
              A proud chapter fighting period poverty and stigma through
              service, education, and advocacy
            </p>
          </div>

          {/* CTA */}
          <Link
            to="/mission"
            className="inline-flex items-center gap-2 bg-black text-white font-inter font-medium rounded-lg hover:bg-[#EF4036] transition-colors"
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "clamp(0.875rem, 1.5vw, 1.5rem)",
              padding: "clamp(12px,1.5vw,20px) clamp(20px,2.5vw,32px)",
            }}
          >
            MORE
          </Link>
        </div>
      </section>
    </main>
  );
}
