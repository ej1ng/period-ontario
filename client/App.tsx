import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import Navigation from "./components/Navigation";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Support both top-of-page navigation and in-page hash links from the navbar.
function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    requestAnimationFrame(() => {
      document
        .getElementById(hash.replace("#", ""))
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }, [pathname, hash]);

  return null;
}

const footerLinks = [
  { label: "Our Mission", to: "/#mission" },
  { label: "Events", to: "/#events" },
  { label: "Our Team", to: "/#team" },
  { label: "Contact Us", to: "/#contact" },
  { label: "Donate", to: "/#donate" },
];

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <div className="flex-1">{children}</div>
      <footer className="w-full bg-black text-white/60 font-inter text-sm">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center">
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {footerLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <p>© {new Date().getFullYear()} PERIOD. Ontario. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <Toaster />
    <Sonner />
    <BrowserRouter>
      <ScrollToHash />
      <Layout>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/mission" element={<Index />} />
          <Route path="/team" element={<Index />} />
          <Route path="/contact" element={<Index />} />
          <Route path="/donate" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
