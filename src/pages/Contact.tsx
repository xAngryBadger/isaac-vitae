import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { personal } from "../data/content";
import { useLang } from "../lib/LanguageContext";
import { Mail, Phone, MapPin, Linkedin, Github, Send, CheckCircle, AlertCircle, FileDown } from "lucide-react";
import { Link } from "react-router-dom";
import { EASE_PRIMARY, EASE_SECONDARY, SCROLL_START } from "../lib/scroll-anim";
import { SplitText } from "../components/SplitText";

gsap.registerPlugin(ScrollTrigger);

type FormState = "idle" | "sending" | "sent" | "error" | "rate-limited";

const RATE_LIMIT_MS = 30_000;
const RATE_LIMIT_KEY = "contact-last-submit";

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { t } = useLang();
  const [formState, setFormState] = useState<FormState>("idle");
  const formRef = useRef<HTMLFormElement>(null);

useEffect(() => {
const ctx = gsap.context(() => {
gsap.from(".contact-label", {
  opacity: 0, y: 24, clipPath: "inset(0 0 100% 0)", duration: 0.9, ease: EASE_PRIMARY,
  scrollTrigger: { trigger: ".contact-label", start: SCROLL_START, once: true },
});

gsap.from(".contact-info-item", {
y: 20, opacity: 0, stagger: 0.08, duration: 0.6, ease: EASE_SECONDARY,
scrollTrigger: { trigger: ".contact-info-item", start: SCROLL_START, once: true },
});

gsap.from(".contact-form", {
y: 30, opacity: 0, duration: 0.8, ease: EASE_SECONDARY,
scrollTrigger: { trigger: ".contact-form", start: SCROLL_START, once: true },
});
}, sectionRef);
return () => ctx.revert();
}, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    const honey = formRef.current.querySelector<HTMLInputElement>('input[name="_honey"]');
    if (honey && honey.value) {
      setFormState("sent");
      formRef.current.reset();
      setTimeout(() => setFormState("idle"), 5000);
      return;
    }

    const now = Date.now();
    const lastSubmit = Number(localStorage.getItem(RATE_LIMIT_KEY) || 0);
    if (now - lastSubmit < RATE_LIMIT_MS) {
      setFormState("rate-limited");
      setTimeout(() => setFormState("idle"), 3000);
      return;
    }

    setFormState("sending");
    const formData = new FormData(formRef.current);

    try {
      const res = await fetch("https://formspree.io/f/xwpkvwgl", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        localStorage.setItem(RATE_LIMIT_KEY, String(now));
        setFormState("sent");
        formRef.current.reset();
        setTimeout(() => setFormState("idle"), 5000);
      } else {
        setFormState("error");
        setTimeout(() => setFormState("idle"), 5000);
      }
    } catch {
      setFormState("error");
      setTimeout(() => setFormState("idle"), 5000);
    }
  };

  const contactItems = [
    { icon: Mail, label: "Email", value: personal.email, href: `mailto:${personal.email}` },
    { icon: Phone, label: t({ pt: "Telefone", en: "Phone" }), value: personal.phone, href: `tel:${personal.phone.replace(/\D/g, "")}` },
    { icon: MapPin, label: t({ pt: "Localização", en: "Location" }), value: t(personal.location), href: undefined },
    { icon: Linkedin, label: "LinkedIn", value: "isaac-nathan", href: personal.linkedin },
    { icon: Github, label: "GitHub", value: "xAngryBadger", href: personal.github },
  ];

  return (
    <div ref={sectionRef} className="section-root">
    <div className="section-container">
        <div className="max-w-3xl mb-20">
          <span className="contact-label section-label">{t({ pt: "Contato", en: "Contact" })}</span>
          <h2
            className="contact-title font-serif font-bold leading-tight"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", color: "var(--color-text)" }}
          >
            <SplitText as="span" className="inline" splitType="words" stagger={0.08} delay={0.3}>
              {t({ pt: "Vamos construir ", en: "Let's build " })}
            </SplitText>
            <span className="italic" style={{ color: "var(--color-text-2)" }}>
              {t({ pt: "algo juntos.", en: "something together." })}
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 lg:gap-32">
          <div>
            <div className="space-y-6 mb-12">
              {contactItems.map((item) => {
                const Icon = item.icon;
                const content = (
                  <div className="contact-info-item flex items-center gap-4 group custom-cursor-target">
                    <div
                      className="w-10 h-10 flex items-center justify-center border transition-colors duration-300"
                      style={{ borderColor: "var(--color-border)", color: "var(--color-text-3)" }}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-mono text-xs tracking-[0.15em] uppercase" style={{ color: "var(--color-text-3)" }}>
                        {item.label}
                      </p>
                      {item.href ? (
                        <p className="text-sm accent-underline transition-colors duration-300" style={{ color: "var(--color-text)" }} data-selectable>
                          {item.value}
                        </p>
                      ) : (
                        <p className="text-sm" style={{ color: "var(--color-text)" }} data-selectable>{item.value}</p>
                      )}
                    </div>
                  </div>
                );
                return item.href ? (
                  <a key={item.label} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" aria-label={item.label} style={{ textDecoration: "none" }}>
                    {content}
                  </a>
                ) : (
                  <div key={item.label}>{content}</div>
                );
              })}
            </div>

            <div className="p-8 border card-hover" style={{ borderColor: "var(--color-border)", backgroundColor: "var(--color-bg-card)" }}>
              <p className="font-mono text-xs tracking-[0.15em] uppercase mb-3" style={{ color: "var(--color-text-2)" }}>
                {t({ pt: "Disponibilidade", en: "Availability" })}
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-2)" }} data-selectable>
        {t({
          pt: "Disponível imediatamente para oportunidades de desenvolvimento full-stack, projetos de IA e consultoria técnica. Resposta em até 24h.",
          en: "Available immediately for full-stack development opportunities, AI projects, and technical consulting. Response within 24h.",
        })}
            </p>
            <Link
              to="/cv"
              className="clip-btn-filled inline-flex items-center gap-2 mt-4"
              style={{ textDecoration: "none" }}
            >
              <FileDown className="w-4 h-4" />
              {t({ pt: "Ver Currículo", en: "View Resume" })}
            </Link>
            </div>
          </div>

          <div>
        <form ref={formRef} onSubmit={handleSubmit} className="contact-form space-y-6">
          <div aria-hidden="true" style={{ position: "absolute", width: 0, height: 0, overflow: "hidden", opacity: 0, pointerEvents: "none" }}>
            <input
              name="_honey"
              type="text"
              tabIndex={-1}
              autoComplete="off"
            />
          </div>
          <div>
          <label htmlFor="contact-name" className="font-mono text-xs tracking-[0.15em] uppercase block mb-2" style={{ color: "var(--color-text-3)" }}>
            {t({ pt: "Nome", en: "Name" })}
          </label>
          <input
            id="contact-name"
            name="name"
                  type="text"
                  required
                  disabled={formState === "sending"}
                  className="w-full px-4 py-3 bg-transparent border outline-none transition-colors duration-300 font-mono text-sm"
                  style={{ borderColor: "var(--color-border)", color: "var(--color-text)" }}
                  onFocus={(e) => { (e.target as HTMLElement).style.borderColor = "var(--color-accent)"; }}
                  onBlur={(e) => { (e.target as HTMLElement).style.borderColor = "var(--color-border)"; }}
                />
              </div>
              <div>
          <label htmlFor="contact-email" className="font-mono text-xs tracking-[0.15em] uppercase block mb-2" style={{ color: "var(--color-text-3)" }}>
            {t({ pt: "E-mail", en: "Email" })}
          </label>
          <input
            id="contact-email"
            name="email"
                  type="email"
                  required
                  disabled={formState === "sending"}
                  className="w-full px-4 py-3 bg-transparent border outline-none transition-colors duration-300 font-mono text-sm"
                  style={{ borderColor: "var(--color-border)", color: "var(--color-text)" }}
                  onFocus={(e) => { (e.target as HTMLElement).style.borderColor = "var(--color-accent)"; }}
                  onBlur={(e) => { (e.target as HTMLElement).style.borderColor = "var(--color-border)"; }}
                />
              </div>
              <div>
          <label htmlFor="contact-message" className="font-mono text-xs tracking-[0.15em] uppercase block mb-2" style={{ color: "var(--color-text-3)" }}>
            {t({ pt: "Mensagem", en: "Message" })}
          </label>
          <textarea
            id="contact-message"
            name="message"
                  required
                  rows={5}
                  disabled={formState === "sending"}
                  className="w-full px-4 py-3 bg-transparent border outline-none transition-colors duration-300 font-mono text-sm resize-none"
                  style={{ borderColor: "var(--color-border)", color: "var(--color-text)" }}
                  onFocus={(e) => { (e.target as HTMLElement).style.borderColor = "var(--color-accent)"; }}
                  onBlur={(e) => { (e.target as HTMLElement).style.borderColor = "var(--color-border)"; }}
                />
              </div>
              <button
                type="submit"
                className="clip-btn-filled"
                disabled={formState === "sending" || formState === "sent" || formState === "rate-limited"}
              >
                {formState === "idle" && (
                  <>{t({ pt: "Enviar Mensagem", en: "Send Message" })} <Send className="w-4 h-4" /></>
                )}
                {formState === "sending" && (
                  <>{t({ pt: "Enviando...", en: "Sending..." })}</>
                )}
                {formState === "sent" && (
                  <><CheckCircle className="w-4 h-4" /> {t({ pt: "Enviado!", en: "Sent!" })}</>
                )}
          {formState === "error" && (
            <><AlertCircle className="w-4 h-4" /> {t({ pt: "Erro — use o email abaixo", en: "Error — use the email below" })}</>
          )}
          {formState === "rate-limited" && (
            <><AlertCircle className="w-4 h-4" /> {t({ pt: "Aguarde um momento...", en: "Wait a moment..." })}</>
          )}
        </button>
        {(formState === "error" || formState === "idle") && (
          <a
            href={`mailto:${personal.email}`}
            className="clip-btn inline-flex items-center gap-2"
            style={{ textDecoration: "none" }}
          >
            <Mail className="w-4 h-4" />
            {t({ pt: "Prefere email?", en: "Prefer email?" })}
          </a>
        )}
      </form>
          </div>
        </div>
      </div>
    </div>
  );
}
