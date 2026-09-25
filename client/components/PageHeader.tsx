interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

// Red title banner shared by the inner pages
export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <header className="w-full bg-[#EF4036] text-white">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 py-14 md:py-20 text-center">
        <h1
          className="font-bold leading-none"
          style={{
            fontSize: "clamp(2.25rem, 6vw, 4rem)",
            letterSpacing: "-0.02em",
          }}
        >
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 font-inter text-base md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </header>
  );
}
