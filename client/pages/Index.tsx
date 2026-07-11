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

      <section className="w-full bg-[#FFFFFF] py-20">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10">
          <h2 className="text-4xl font-bold mb-8">Recent Events</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div className="bg-white rounded-lg shadow p-6">
              <p className="text-xl font-semibold">Packing Party – June 21, 2025</p>
              <img
                src = "PackingParty6.21.png"
                alt = "Packing Party in June 2025"
                className="w-full h-80 object-cover rounded-lg mt-4"
              />
              <p className="mt-2 text-center text-black-600">
                Short description of the event.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <p className="text-xl font-semibold">Packing Party – October 10, 2025</p>
              <img
                src = "PackingParty10.10.png"
                alt = "Packing Party in October 2025"
                className="w-full h-80 object-cover rounded-lg mt-4"
              />
              <p className="mt-2 text-center text-black-600">
                Short description of the event.
              </p>
            </div>

              <div className="bg-white rounded-lg shadow p-6">
                <p className="text-xl font-semibold">Angus Glen Packing Party – November 29, 2025</p>
                <img
                  src = "PackingParty11.29.png"
                  alt = "Packing Party in November 2025"
                  className="w-full h-80 object-cover rounded-lg mt-4"
                />
                <p className="mt-2 text-center text-black-600">   
                PERIOD. Ontario arranges packing parties consistently in a year to raise awareness and combat for menstrual poverty. 
                This was an opportunity for everyone to come together, volunteers and the PERIOD.
                Ontario team, to prepare period packs that were donated to local organizations.</p>
              </div>
            </div>
          </div>
      </section>

      <section className="w-full bg-[#F44336] py-20">
          <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            <div>
              <h2 className="text-5xl font-bold uppercase mb-10">
                Upcoming Events
              </h2>

              <div className="space-y-10">
                <div>
                  <h3 className="text-2xl font-semibold mb-2">Event Name</h3>
                  <p className="text-lg text-white leading-relaxed">
                    Brief Event details.
                  </p>
                </div>

                <button className="mt-6 bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-900 transition">
                  JOIN US
                </button>
              </div>
            </div>

            <div className="flex justify-center">
              <img
                src = ""
              />
            </div>
          </div>
      </section>

      <section className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-8">

            <h2 className="text-5xl font-bold mb-16">
              Our Team
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
              <div className="flex flex-col">
                <img
                  src=""
                />
                <div className="bg-[#F8755B] text-center py-5">
                  <h3 className="text-3xl font-bold uppercase">
                    President
                  </h3>

                  <p className="text-2xl font-semibold">
                    Mehrava Afshani
                  </p>
                </div>
              </div>

              <div className="flex flex-col">
                <img
                  src=""
                />
                <div className="bg-[#F8755B] text-center py-5">
                  <h3 className="text-3xl font-bold uppercase">
                    Vice-President
                  </h3>

                  <p className="text-2xl font-semibold">
                    Valerie Tso
                  </p>
                </div>
              </div>

              <div className="flex flex-col">
                <img
                  src=""
                />
                <Link to ="/team">
                  <div className="bg-[#F8755B] text-center py-5">
                    <h3 className="text-3xl font-bold uppercase">
                      Departments
                    </h3>
                  </div>
               </Link>
              </div>
            </div>
          </div>
      </section>

    </main>
  );
}
