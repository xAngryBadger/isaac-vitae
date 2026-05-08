import { useEffect, useRef, useState, useCallback } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";
import NoiseOverlay from "./components/NoiseOverlay";
import Preloader from "./components/Preloader";
import Home from "./pages/Home";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import ProjectCaseStudy from "./pages/ProjectCaseStudy";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Certificates from "./pages/Certificates";
import CV from "./pages/CV";
import NotFound from "./pages/NotFound";
import { LanguageProvider, useLang } from "./lib/LanguageContext";
import { useSounds } from "./lib/useSounds";

gsap.registerPlugin(ScrollTrigger);

const pageTitles: Record<string, { pt: string; en: string }> = {
  "/": { pt: "Isaac Nathan — Portfólio", en: "Isaac Nathan — Portfolio" },
  "/about": { pt: "Sobre — Isaac Nathan", en: "About — Isaac Nathan" },
  "/experience": { pt: "Experiência — Isaac Nathan", en: "Experience — Isaac Nathan" },
  "/projects": { pt: "Projetos — Isaac Nathan", en: "Projects — Isaac Nathan" },
  "/skills": { pt: "Habilidades — Isaac Nathan", en: "Skills — Isaac Nathan" },
  "/gallery": { pt: "Galeria — Isaac Nathan", en: "Gallery — Isaac Nathan" },
  "/certificates": { pt: "Certificações — Isaac Nathan", en: "Certificates — Isaac Nathan" },
  "/contact": { pt: "Contato — Isaac Nathan", en: "Contact — Isaac Nathan" },
  "/cv": { pt: "Currículo — Isaac Nathan", en: "Resume — Isaac Nathan" },
};

function DocumentTitle() {
  const location = useLocation();
  const { lang } = useLang();

  useEffect(() => {
    const path = location.pathname;
    const title = pageTitles[path];
    if (title) {
      document.title = title[lang];
  } else if (path.startsWith("/projects/")) {
  const slug = path.replace("/projects/", "");
  document.title = `${slug} — Isaac Nathan`;
    } else {
      document.title = lang === "pt" ? "Página não encontrada — Isaac Nathan" : "Page not found — Isaac Nathan";
    }
  }, [location.pathname, lang]);

  return null;
}

function AppContent() {
  const [loaded, setLoaded] = useState(false);
  const isFirstMount = useRef(true);
  const location = useLocation();
  const { playRouteChange } = useSounds();

  const handlePreloaderDone = useCallback(() => setLoaded(true), []);

  useEffect(() => {
    const timer = window.setTimeout(() => ScrollTrigger.refresh(), 500);
    if (loaded && !isFirstMount.current) playRouteChange();
    return () => window.clearTimeout(timer);
  }, [location.pathname, loaded, playRouteChange]);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    (window as unknown as Record<string, unknown>).lenis = lenis;

    lenis.on("scroll", ScrollTrigger.update);
    const ticker = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(ticker);
    gsap.ticker.lagSmoothing(0);

    const refreshTimer = window.setTimeout(() => ScrollTrigger.refresh(), 300);

    return () => {
      window.clearTimeout(refreshTimer);
      delete (window as unknown as Record<string, unknown>).lenis;
      lenis.destroy();
      gsap.ticker.remove(ticker);
    };
  }, []);

  const firstRender = isFirstMount.current;
  if (loaded && isFirstMount.current) isFirstMount.current = false;

  return (
    <>
      {!loaded && <Preloader onDone={handlePreloaderDone} />}
      {loaded && (
        <>
          <DocumentTitle />
          <NoiseOverlay />
          <CustomCursor />
          <Nav />
          <AnimatePresence mode="wait">
            <motion.main
              key={location.pathname}
              initial={firstRender ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <Routes location={location}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/projects/:slug" element={<ProjectCaseStudy />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/gallery" element={<Gallery />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/cv" element={<CV />} />
          <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </motion.main>
          </AnimatePresence>
          <Footer />
        </>
      )}
    </>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}
