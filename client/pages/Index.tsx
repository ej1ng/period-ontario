import { Link } from "react-router-dom";

export default function Index() {
  return (
    <main>
      {/* ── Hero ── */}
      <section className="relative w-full h-[calc(100vh-5rem)] overflow-hidden">
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
        <div className="relative z-10 flex flex-col justify-start h-full min-h-[calc(100vh-5rem)] max-w-[1440px] mx-auto w-full px-6 md:px-10 pt-24 md:pt-32">
          <div className="relative">
            {/* White base text */}
            <h1
              className="text-white leading-none"
              style={{ 
                fontFamily: "'Avenir', sans-serif", 
                fontWeight: 700,
                textShadow: "0 8px 16px rgba(0, 0, 0, 0.4)",
              }}
            >
              <span className="block text-[clamp(4rem,12vw,12rem)] leading-none tracking-tight">
                PERIOD
              </span>
              <span className="block text-[clamp(2rem,6vw,6rem)] leading-none tracking-tight">
                ONTARIO
              </span>
            </h1>

            {/* Offset border text overlay - PERIOD */}
            <h1
              className="absolute leading-none"
              style={{ 
                fontFamily: "'Avenir', sans-serif", 
                fontWeight: 700,
                top: "-5px",
                left: "-5px",
                color: "transparent",
                WebkitTextStroke: "3px #7A0F0F",
                zIndex: 5,
                pointerEvents: "none",
              }}
            >
              <span className="block text-[clamp(4rem,12vw,12rem)] leading-none tracking-tight">
                PERIOD
              </span>
            </h1>

            {/* Offset border text overlay - ONTARIO */}
            <h1
              className="absolute leading-none"
              style={{ 
                fontFamily: "'Avenir', sans-serif", 
                fontWeight: 700,
                top: "calc(-3.5px + clamp(4rem,12vw,12rem))",
                left: "-3.5px",
                color: "transparent",
                WebkitTextStroke: "2px #7A0F0F",
                zIndex: 5,
                pointerEvents: "none",
              }}
            >
              <span className="block text-[clamp(2rem,6vw,6rem)] leading-none tracking-tight">
                ONTARIO
              </span>
            </h1>
          </div>
        </div>

        {/* Our Mission Overlay Card */}
        <div className="absolute bottom-12 md:bottom-24 left-1/2 transform -translate-x-1/2 z-20 w-full max-w-[1440px] px-6 md:px-10">
          <div className="bg-white/70 rounded-lg shadow-2xl p-8 md:p-12 w-full backdrop-blur-sm">
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
      <section className="w-full bg-[#D9D9D9] py-10">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 min-h-[80px] flex items-center justify-center">
          <p className="text-gray-500 text-sm font-inter tracking-widest uppercase">
            Our Partners &amp; Sponsors
          </p>
        </div>
      </section>
    </main>
  );
}
