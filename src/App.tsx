import { useEffect, useRef } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";
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

const BASE_PATH = "/isaac-vitae";

gsap.registerPlugin(ScrollTrigger);

const pageTitles: Record<string, { pt: string; en: string }> = {
  `${BASE_PATH}/`: { pt: "Isaac Nathan — Portfólio", en: "Isaac Nathan — Portfolio" },
  `${BASE_PATH}/about`: { pt: "Sobre — Isaac Nathan", en: "About — Isaac Nathan" },
  `${BASE_PATH}/experience`: { pt: "Experiência — Isaac Nathan", en: "Experience — Isaac Nathan" },
  `${BASE_PATH}/projects`: { pt: "Projetos — Isaac Nathan", en: "Projects — Isaac Nathan" },
  `${BASE_PATH}/skills`: { pt: "Habilidades — Isaac Nathan", en: "Skills — Isaac Nathan" },
  `${BASE_PATH}/gallery`: { pt: "Galeria — Isaac Nathan", en: "Gallery — Isaac Nathan" },
  `${BASE_PATH}/certificates`: { pt: "Certificações — Isaac Nathan", en: "Certificates — Isaac Nathan" },
  `${BASE_PATH}/contact`: { pt: "Contato — Isaac Nathan", en: "Contact — Isaac Nathan" },
  `${BASE_PATH}/cv`: { pt: "Currículo — Isaac Nathan", en: "Resume — Isaac Nathan" },
  `${BASE_PATH}/playground`: { pt: "Playground — Isaac Nathan", en: "Playground — Isaac Nathan" },
  `${BASE_PATH}/security`: { pt: "Segurança — Isaac Nathan", en: "Security — Isaac Nathan" },
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
    } else if (path.startsWith("/security/")) {
      const slug = path.replace("/security/", "");
      document.title = `${slug} — Isaac Nathan`;
    } else {
      document.title = lang === "pt" ? "Página não encontrada — Isaac Nathan" : "Page not found — Isaac Nathan";
    }
  }, [location.pathname, lang]);

  return null;
}

function AppContent() {
  const isFirstMount = useRef(true);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = window.setTimeout(() => ScrollTrigger.refresh(), 300);
    return () => window.clearTimeout(timer);
  }, [location.pathname]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  if (isFirstMount.current) isFirstMount.current = false;

  return (
    <>
      <DocumentTitle />
      <Nav />
      <CustomCursor />
      <main key={location.pathname} className="route-fade">
        <Routes basename={BASE_PATH} location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<ProjectCaseStudy />} />
          <Route path="/security" element={<Security />} />
          <Route path="/security/:slug" element={<SecurityCaseStudy />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/cv" element={<CV />} />
          <Route path="/playground" element={<Playground />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
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
