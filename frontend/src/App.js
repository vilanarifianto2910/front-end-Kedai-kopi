import { useEffect, useState } from "react";
import "@/App.css";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { MenuCatalog } from "@/components/menu/MenuCatalog";
import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { LocationSection } from "@/components/sections/LocationSection";
import { QuickInfoSection } from "@/components/sections/QuickInfoSection";

function App() {
  const [navElevated, setNavElevated] = useState(false);

  useEffect(() => {
    const handleScroll = () => setNavElevated(window.scrollY > 8);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app-shell">
      <a className="skip-link" href="#main-content" data-testid="skip-to-content">Lewati ke konten utama</a>
      <Navbar elevated={navElevated} />
      <main id="main-content">
        <HeroSection />
        <QuickInfoSection />
        <MenuCatalog />
        <AboutSection />
        <LocationSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
