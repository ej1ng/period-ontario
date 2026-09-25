import PageHeader from "../components/PageHeader";

const departments = [
  {
    name: "Finance",
    description:
      "As part of the finance department, we are responsible for managing and providing our organization with all the financial resources we need to operate effectively. A large part of our role involves reaching out to potential sponsors, applying for grants, and organizing donations for PERIOD Ontario. Beyond securing funds, we dedicate our resources to supporting the other departments within our organization and helping them carry out any events or initiatives that we host, such as our packing parties! Our work helps keep the organization running smoothly and ensures that every project has the financial backing it needs to succeed.",
  },
  {
    name: "Advocacy",
    description:
      "PERIOD Ontario's Advocacy team works towards reaching menstrual equity through systemic change in law and policy, raising awareness of the need for affordable, tax-free, and accessible period products in all public spaces.",
  },
  {
    name: "Service",
    description:
      "The Service Department at PERIOD Ontario focuses on organizing events that bring together community members of all ages to learn about the importance of menstrual equity while contributing to meaningful change. We host period packing parties that not only provide essential menstrual products to those in need, but also create space for education and conversation around period poverty and access.",
  },
  {
    name: "Education",
    description:
      "The education team of PERIOD Ontario creates engaging resources and learning opportunities that promote menstrual health, education and awareness. Our goal is to make menstrual knowledge accessible, inclusive, and empowering for everyone. One of our initiatives is PERIOD talk modules, a series of educational modules directed towards elementary school students to provide introductory information on menstrual anatomy, stigma, and advocacy. The education team is also responsible for preparing engaging presentations for our packing parties. Previous presentation topics include pop culture and periods, and sustainable menstruation.",
  },
  {
    name: "Communications",
    description:
      "The Communications Department at PERIOD Ontario is responsible for all things media! Our goal is to spread awareness about menstrual equity and keep our community informed and engaged. Our team manages social media, creates educational content, promotes campaigns and events, and works to amplify the voices of those advocating for accessible menstrual products and reproductive health education across Ontario.",
  },
];

export default function Team() {
  return (
    <main className="w-full">
      <PageHeader
        title="OUR TEAM"
        subtitle="Five departments working together to end period poverty and stigma across Ontario."
      />

      <div className="max-w-[1440px] mx-auto px-6 md:px-10 py-14 md:py-20">
        <div className="space-y-10 md:space-y-12 max-w-4xl mx-auto">
          {departments.map((dept) => (
            <section key={dept.name}>
              <h2 className="text-xl md:text-2xl font-bold mb-3 text-[#EF4036] uppercase tracking-wide">
                {dept.name}
              </h2>
              <p className="text-black/60 font-inter text-base md:text-lg leading-relaxed">
                {dept.description}
              </p>
            </section>
          ))}
        </div>
        <div className="mt-12 w-16 h-1 bg-[#EF4036] rounded-full mx-auto" />

      </div>
    </main>
  );
}
