import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <main className="w-full">
      <div className="min-h-[60vh] flex items-center justify-center max-w-[1440px] mx-auto px-6 md:px-10 py-24">
        <div className="text-center">
          <h1
            className="font-bold text-[#EF4036] leading-none mb-4"
            style={{ fontSize: "clamp(4rem, 12vw, 8rem)" }}
          >
            404
          </h1>
          <p className="font-inter text-lg md:text-xl text-black/60 mb-8">
            Sorry, we couldn't find that page.
          </p>
          <Link
            to="/"
            className="inline-block bg-black text-white font-inter font-medium px-8 py-3 rounded-lg hover:bg-[#EF4036] transition-colors"
          >
            BACK TO HOME
          </Link>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
