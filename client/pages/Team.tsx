export default function Team() {
  return (
    <main className="w-full">
      <div className="min-h-[60vh] max-w-[1440px] mx-auto px-6 md:px-10 py-24">

        <h1
          className="text-black font-bold mb-12 text-center"
          style={{
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            letterSpacing: "-0.02em",
          }}
        >
          Our Team
        </h1>

        <div className="space-y-10">
          <section>
            <h2 className="text-2xl font-bold mb-3 text-[#EF4036]">
              Finance Department
            </h2>
            <p className="text-black/60 font-inter text-lg max-w-4xl">
              As part of the finance department, we are responsible for managing
              and providing our organization with all the financial resources we
              need to operate effectively. A large part of our role involves
              reaching out to potential sponsors, applying for grants, and
              organizing donations for PERIOD Ontario. Beyond securing funds, we
              dedicate our resources to supporting the other departments within
              our organization and helping them carry out any events or
              initiatives that we host, such as our packing parties! Our work
              helps keep the organization running smoothly and ensures that every
              project has the financial backing it needs to succeed.
            </p>
          </section>
        </div>
        <div className="mt-12 w-16 h-1 bg-[#EF4036] rounded-full" />

      </div>
    </main>
  );
}