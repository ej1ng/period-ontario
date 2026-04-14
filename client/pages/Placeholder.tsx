interface PlaceholderProps {
  title: string;
}

export default function Placeholder({ title }: PlaceholderProps) {
  return (
    <main className="w-full">
      <div className="min-h-[60vh] flex flex-col items-center justify-center max-w-[1440px] mx-auto px-6 md:px-10 py-24 text-center">
        <h1
          className="text-black font-bold mb-6"
          style={{
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            letterSpacing: "-0.02em",
          }}
        >
          {title}
        </h1>
        <p className="text-black/60 font-inter text-lg max-w-lg">
          This page is coming soon.
        </p>
        <div className="mt-2 w-16 h-1 bg-[#EF4036] rounded-full" />
      </div>
    </main>
  );
}
