import { useEffect, useState } from "react";
import { LanguageProvider } from "@/context/LanguageContext";
import { Navbar } from "@/components/navbar";
import LoadingScreen from "@/components/LoadingScreen";
import Hero from "@/components/Hero";
import TrustPillars from "@/components/TrustPillars";
import About from "@/components/About";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import Projects from "@/components/Projects";
import WhyUs from "@/components/WhyUs";
import Certificates from "@/components/Certificates";
import References from "@/components/References";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

function HomeContent() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 1200);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div className="bg-background min-h-screen text-foreground overflow-x-hidden selection:bg-amber selection:text-navy-darker">
      <LoadingScreen loading={loading} />
      <Navbar />
      <Hero />
      <TrustPillars />
      <About />
      <Services />
      <Stats />
      <Projects />
      <WhyUs />
      <Certificates />
      <References />
      <Contact />
      <Footer />
    </div>
  );
}

export default function Home() {
  return (
    <LanguageProvider>
      <HomeContent />
    </LanguageProvider>
  );
}
