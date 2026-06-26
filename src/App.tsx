import { useEffect, useRef, useState, useCallback } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";
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
import Playground from "./pages/Playground";
import Security from "./pages/Security";
import SecurityCaseStudy from "./pages/SecurityCaseStudy";
import NotFound from "./pages/NotFound";
import { LanguageProvider, useLang } from "./lib/LanguageContext";
import { useSounds } from "./lib/useSounds";

gsap.registerPlugin(ScrollTrigger);

const pageTitles: Record<string, { pt: string; en: string }> = {
  "/": { pt: "Isaac Nathan — Portfólio", en: "Isaac Nathan — Portfolio" },
  "/about": { pt: "Sobre", en: "About" },
  "/experience": { pt: "Experiência", en: "Experience" },
  "/projects": { pt: "Projetos", en: "Projects" },
  "/skills": { pt: "Habilidades", en: "Skills" },
  "/gallery": { pt: "Galeria", en: "Gallery" },
  "/certificates": { pt: "Certificações", en: "Certificates" },
  "/contact": { pt: "Contato", en: "Contact" },
  "/cv": { pt: "Currículo", en: "Resume" },
  "/playground": { pt: "Playground", en: "Playground" },
  "/security": { pt: "Segurança", en: "Security" },
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
      document.title = `${slug} — Projects`;
    } else if (path.startsWith("/security/")) {
      const slug = path.replace("/security/", "");
      document.title = `${slug} — Security`;
    } else {
      document.title = lang === "pt" ? "Página não encontrada" : "Page not found";
    }
  }, [location.pathname, lang]);

  return null;
}

function AppContent() {
  const [loaded, setLoaded] = useState(() => sessionStorage.getItem("preloader-done") === "true");
  const isFirstMount = useRef(true);
  const location = useLocation();
  const { playRouteChange } = useSounds();

  const handlePreloaderDone = useCallback(() => { sessionStorage.setItem("preloader-done", "true"); setLoaded(true); }, []);

  useEffect(() => {
    const lenis = (window as unknown as { lenis?: { scrollTo: (pos: number, opts?: { immediate?: boolean }) => void } }).lenis;
    if (lenis) lenis.scrollTo(0, { immediate: true });
    else window.scrollTo(0, 0);
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

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ clipPath: "inset(100% 0 0 0)" }}
      animate={{ clipPath: "inset(0 0 0 0)", transition: { duration: 0.6, ease: "var(--ease-project)" } as any }}
      exit={{ clipPath: "inset(0 0 100% 0)", transition: { duration: 0.6, ease: "var(--ease-project)" } as any }}
      style={{ position: "relative", width: "100%" }}
    >
      {children}
    </motion.div>
  );
}

  return (
    <>
      {!loaded && <Preloader onDone={handlePreloaderDone} />}
      {loaded && (
        <>
          <DocumentTitle />
          <CustomCursor />
          <Nav />
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<PageTransition><Home /></PageTransition>} />
              <Route path="/about" element={<PageTransition><About /></PageTransition>} />
              <Route path="/experience" element={<PageTransition><Experience /></PageTransition>} />
              <Route path="/projects" element={<PageTransition><Projects /></PageTransition>} />
              <Route path="/projects/:slug" element={<PageTransition><ProjectCaseStudy /></PageTransition>} />
              <Route path="/security" element={<PageTransition><Security /></PageTransition>} />
              <Route path="/security/:slug" element={<PageTransition><SecurityCaseStudy /></PageTransition>} />
              <Route path="/skills" element={<PageTransition><Skills /></PageTransition>} />
              <Route path="/gallery" element={<PageTransition><Gallery /></PageTransition>} />
              <Route path="/certificates" element={<PageTransition><Certificates /></PageTransition>} />
              <Route path="/cv" element={<PageTransition><CV /></PageTransition>} />
              <Route path="/playground" element={<PageTransition><Playground /></PageTransition>} />
              <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
              <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
            </Routes>
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
