import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";

const ways = [
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

export default function Donate() {
  return (
    <main className="w-full">
      <PageHeader
        title="DONATE"
        subtitle="Every period pack we donate starts with someone like you. Your support puts essential products in the hands of people who need them."
      />

      <section className="max-w-[1440px] mx-auto px-6 md:px-10 py-14 md:py-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
          WAYS TO GIVE
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
          {ways.map((way) => (
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
      </section>

      <section className="w-full bg-[#F5F5F5]">
        <div className="max-w-3xl mx-auto px-6 md:px-10 py-14 md:py-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">READY TO HELP?</h2>
          <p className="font-inter text-black/70 text-base md:text-lg mb-8 leading-relaxed">
            Reach out to our finance team and we'll help you arrange a drop-off,
            a donation, or a sponsorship that works for you.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-black text-white font-inter font-medium px-8 py-3 rounded-lg hover:bg-[#EF4036] transition-colors"
          >
            GET IN TOUCH
          </Link>
        </div>
      </section>
    </main>
  );
}
