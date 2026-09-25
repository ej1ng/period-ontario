import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";

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

export default function Mission() {
  return (
    <main className="w-full">
      <PageHeader title="OUR MISSION" />

      {/* Mission statement */}
      <section className="max-w-4xl mx-auto px-6 md:px-10 py-14 md:py-20 text-center">
        <p
          className="text-black leading-relaxed"
          style={{ fontSize: "clamp(1.15rem, 2.4vw, 1.6rem)" }}
        >
          PERIOD Ontario works to end period poverty and stigma through
          service, education, and advocacy, so that everyone has access to the
          period products and knowledge they need.
        </p>
        <div className="mt-10 w-16 h-1 bg-[#EF4036] rounded-full mx-auto" />
      </section>

      {/* Vision */}
      <section className="w-full bg-[#F5F5F5]">
        <div className="max-w-4xl mx-auto px-6 md:px-10 py-14 md:py-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">OUR VISION</h2>
          <p className="font-inter text-black/70 text-base md:text-xl leading-relaxed">
            An Ontario where no one misses school, work, or everyday life
            because they can't afford or access period products, and where
            periods are talked about openly, without shame.
          </p>
        </div>
      </section>

      {/* Three pillars */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-10 py-14 md:py-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
          HOW WE DO IT
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
          {pillars.map((pillar) => (
            <div
              key={pillar.name}
              className="rounded-lg border-t-4 border-[#EF4036] bg-white shadow p-6 md:p-8"
            >
              <h3 className="text-2xl font-bold uppercase text-[#EF4036] mb-3">
                {pillar.name}
              </h3>
              <p className="font-inter text-black/70 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="w-full bg-black text-white">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 py-14 md:py-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
            OUR VALUES
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.name}>
                <h3 className="text-xl font-bold uppercase text-[#F8755B] mb-2">
                  {value.name}
                </h3>
                <p className="font-inter text-white/75 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="max-w-4xl mx-auto px-6 md:px-10 py-14 md:py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">GET INVOLVED</h2>
        <p className="font-inter text-black/70 text-base md:text-lg mb-8">
          Volunteer at a packing party, bring a PERIOD talk to your school, or
          support our work with a donation.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/contact"
            className="bg-black text-white font-inter font-medium px-8 py-3 rounded-lg hover:bg-[#EF4036] transition-colors"
          >
            CONTACT US
          </Link>
          <Link
            to="/donate"
            className="border-2 border-black text-black font-inter font-medium px-8 py-3 rounded-lg hover:bg-black hover:text-white transition-colors"
          >
            DONATE
          </Link>
        </div>
      </section>
    </main>
  );
}
