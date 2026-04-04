interface PlaceholderProps {
  title: string;
}

export default function Placeholder({ title }: PlaceholderProps) {
  return (
    <main className="min-h-[60vh] flex flex-col items-center justify-center px-8 py-24 text-center">
      <h1
        className="text-black font-bold mb-6"
        style={{
          fontFamily: "Inter, sans-serif",
          fontSize: "clamp(2rem, 5vw, 3.5rem)",
          letterSpacing: "-0.02em",
        }}
      >
        {title}
      </h1>
      <p className="text-black/60 font-inter text-lg max-w-lg">
        This page is coming soon. Continue prompting to fill in the content for
        this section.
      </p>
      <div className="mt-2 w-16 h-1 bg-[#EF4036] rounded-full" />
    </main>
  );
}
