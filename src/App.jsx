import { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import BackgroundGlow from "./components/BackgroundGlow";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Experience from "./components/sections/Experience";
import Projects from "./components/sections/Projects";
import Contact, { SiteFooter } from "./components/sections/Contact";
import useActiveSection from "./hooks/useActiveSection";

const SECTION_IDS = ["top", "about", "experience", "projects", "contact"];

function App() {
  const activeId = useActiveSection(SECTION_IDS);
  const [showTopButton, setShowTopButton] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTopButton(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="relative min-h-screen text-mist-100 selection:bg-accent/30 selection:text-mist-100">
      <BackgroundGlow />
      <Sidebar activeId={activeId} />

      <main className="lg:ml-[400px] xl:ml-[460px] px-6 sm:px-12 lg:pr-16 lg:pl-16 max-w-content">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
        <SiteFooter />
      </main>

      <button
        onClick={scrollToTop}
        aria-label="Back to top"
        className={`fixed bottom-6 right-6 z-40 rounded-full bg-ink-800/70 backdrop-blur-sm border border-line shadow-glass text-accent w-11 h-11 grid place-items-center duration-200 hover:border-accent hover:bg-accent/10 ${
          showTopButton ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <i className="fa-solid fa-arrow-up"></i>
      </button>
    </div>
  );
}

export default App;
