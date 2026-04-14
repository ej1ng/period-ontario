import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: "HOME", to: "/" },
    { label: "OUR MISSION", to: "/mission" },
    { label: "OUR TEAM", to: "/team" },
    { label: "CONTACT US", to: "/contact" },
  ];

  return (
    <nav className="w-full bg-white z-50 sticky top-0 shadow-sm">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link to="/" className="h-12 md:h-16 flex items-center">
          <img
            src="/period-logo.png"
            alt="Period Ontario"
            className="h-full w-auto"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 lg:gap-12">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`font-inter font-medium text-sm lg:text-base tracking-wide transition-colors hover:text-[#EF4036] ${
                location.pathname === link.to
                  ? "text-[#EF4036]"
                  : "text-black"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/donate"
            className="bg-black text-white font-inter font-medium text-sm px-5 py-2.5 rounded-lg hover:bg-[#EF4036] transition-colors whitespace-nowrap"
          >
            DONATE
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-black transition-transform duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-black transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-black transition-transform duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`font-inter font-medium text-base tracking-wide py-1 transition-colors hover:text-[#EF4036] ${
                location.pathname === link.to ? "text-[#EF4036]" : "text-black"
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/donate"
            className="bg-black text-white font-inter font-medium text-sm px-5 py-3 rounded-lg text-center hover:bg-[#EF4036] transition-colors mt-2"
            onClick={() => setMenuOpen(false)}
          >
            DONATE
          </Link>
        </div>
      )}
    </nav>
  );
}
