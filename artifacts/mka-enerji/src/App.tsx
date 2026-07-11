import { useEffect, useState } from "react";

import LoadingScreen from "./components/LoadingScreen";
import { Navbar } from "./components/navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import References from "./components/References";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setLoading(false);
    }, 2200);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <>
      <LoadingScreen loading={loading} />

      {!loading && (
        <>
          <Navbar />

          <main>
            <Hero />
            <About />
            <Services />
            <Projects />
            <References />
            <Contact />
          </main>

          <Footer />
        </>
      )}
    </>
  );
}