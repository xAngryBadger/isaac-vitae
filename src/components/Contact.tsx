import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { personal } from "../data/content";
import { Mail, MapPin, MessageCircle, Linkedin, Github, FileText } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-label, .contact-title", {
        autoAlpha: 0, y: 40,
        stagger: 0.15, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: ".contact-title", start: "top 85%", once: true },
      });
      gsap.from(".contact-card", {
        autoAlpha: 0, y: 30,
        stagger: 0.1, duration: 0.7, ease: "power2.out",
        scrollTrigger: { trigger: ".contact-cards", start: "top 80%", once: true },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const whatsappLink = `https://wa.me/5531994417786?text=Olá Isaac! Tive interesse em conversar.`;
  const resumeLink = "/#sobre"; // Links back to about / could link to CV file

  const contacts = [
    {
      icon: Mail,
      label: "E-mail",
      value: personal.email,
      href: `mailto:${personal.email}`,
      description: "Respondi em até 24h",
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "+55 (31) 99441-7786",
      href: whatsappLink,
      description: "Conversa mais rápida",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "isaac-nathan",
      href: personal.linkedin,
      description: "Conecta comigo",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "xAngryBadger",
      href: personal.github,
      description: "Vê meus projetos",
    },
    {
      icon: FileText,
      label: "Currículo",
      value: "Download",
      href: resumeLink,
      description: "Voltar ao topo ou CV",
    },
    {
      icon: MapPin,
      label: "Localização",
      value: personal.location,
      href: null,
      description: "Based in Mariana, MG",
    },
  ];

  return (
    <section id="contato" ref={sectionRef} className="py-32 lg:py-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <span className="contact-label section-label">Contato</span>
          <h2
            className="contact-title font-serif font-bold leading-tight"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", color: "var(--color-text)" }}
          >
            Vamos construir{" "}
            <span className="italic" style={{ color: "var(--color-gold)" }}>algo incrível juntos?</span>
          </h2>
          <p className="text-lg mt-6" style={{ color: "var(--color-text-2)", lineHeight: "1.7" }}>
            Aberto a oportunidades, colabs e freelance. Escolha seu melhor meio de contato.
          </p>
        </div>

        {/* Contact cards grid */}
        <div className="contact-cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {contacts.map((contact, i) => {
            const Icon = contact.icon;
            return (
              <div
                key={i}
                className="contact-card p-6 lg:p-8 border transition-all duration-300 group"
                style={{
                  borderColor: "var(--color-border)",
                  backgroundColor: "var(--color-bg-100)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(196,165,116,0.35)";
                  (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(196,165,116,0.04)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--color-border)";
                  (e.currentTarget as HTMLElement).style.backgroundColor = "var(--color-bg-100)";
                }}
              >
                {/* Icon circle */}
                <div
                  className="w-14 h-14 flex items-center justify-center border rounded-lg mb-5 transition-all duration-300"
                  style={{
                    borderColor: "var(--color-border-2)",
                    backgroundColor: "rgba(196,165,116,0.06)",
                    color: "var(--color-gold)",
                  }}
                >
                  <Icon className="w-6 h-6" />
                </div>

                {/* Label */}
                <p className="font-mono text-xs uppercase tracking-wider mb-2" style={{ color: "var(--color-text-3)" }}>
                  {contact.label}
                </p>

                {/* Value/Link */}
                {contact.href ? (
                  <a
                    href={contact.href}
                    target={contact.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="font-serif font-semibold text-lg transition-colors duration-300 gold-underline block mb-3"
                    style={{ color: "var(--color-text)" }}
                  >
                    {contact.value}
                  </a>
                ) : (
                  <p className="font-serif font-semibold text-lg mb-3" style={{ color: "var(--color-text)" }}>
                    {contact.value}
                  </p>
                )}

                {/* Description */}
                <p className="text-sm" style={{ color: "var(--color-text-3)" }}>
                  {contact.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
