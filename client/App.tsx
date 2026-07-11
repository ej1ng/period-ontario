import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Index from "./pages/Index";
import Team from "./pages/Team";
import NotFound from "./pages/NotFound";
import Placeholder from "./pages/Placeholder";


const queryClient = new QueryClient();

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <div className="flex-1">{children}</div>
      <footer className="w-full bg-black text-white/60 font-inter text-sm">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 text-center py-6">
          © {new Date().getFullYear()} PERIOD Ontario. All rights reserved.
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
      <Layout>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route
            path="/mission"
            element={<Placeholder title="OUR MISSION" />}
          />
          <Route path="/team" element={<Team />} />
          <Route
            path="/contact"
            element={<Placeholder title="CONTACT US" />}
          />
          <Route
            path="/donate"
            element={<Placeholder title="DONATE" />}
          />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
