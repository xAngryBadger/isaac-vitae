import { Link } from "react-router-dom";
import { Globe, Volume2, VolumeX } from "lucide-react";
import { personal } from "../data/content";
import { useLang } from "../lib/LanguageContext";
import { useSounds } from "../lib/useSounds";
import { menuLinks } from "../data/menu-links";
import DirectionalLinkTile from "./DirectionalLinkTile";
import BottomSheet from "./BottomSheet";
import { DyslexiaToggle } from "./DyslexiaToggle";

export default function Nav() {
  const { lang, toggle, t } = useLang();
  const { enabled: soundsEnabled, toggleSounds } = useSounds();
  return (
    <>
      <div className="hidden sm:flex split-left-inner h-[100dvh] flex-col">
        <div className="flex flex-col flex-1 pt-6 pb-4 px-5">
          <Link to="/" className="font-mono text-sm tracking-[0.2em] uppercase custom-cursor-target mb-8" style={{ color: "var(--color-accent)", textDecoration: "none" }}>
            {personal.name.split(" ")[0]}
            <span style={{ color: "var(--color-text-3)" }}>.</span>
          </Link>

          <nav className="flex flex-col gap-0">
            {menuLinks.map((link) => (
              <DirectionalLinkTile key={link.href} to={link.href} num={link.num}>
                {t(link.label)}
              </DirectionalLinkTile>
            ))}
          </nav>

<div className="mt-auto flex flex-col gap-3">
<div className="flex items-center gap-4">
<button onClick={toggle} className="flex items-center gap-1.5 font-mono text-xs tracking-[0.1em] uppercase custom-cursor-target" style={{ color: "var(--color-text-3)", background: "none", border: "none" }}>
<Globe className="w-3.5 h-3.5" />{lang.toUpperCase()}
</button>
<button onClick={toggleSounds} className="flex items-center gap-1.5 font-mono text-xs tracking-[0.1em] uppercase custom-cursor-target" style={{ color: "var(--color-text-3)", background: "none", border: "none" }}>
{soundsEnabled ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
{soundsEnabled ? "ON" : "OFF"}
</button>
<DyslexiaToggle />
</div>
            <a href={`mailto:${personal.email}`} className="font-mono text-xs custom-cursor-target accent-underline" style={{ color: "var(--color-text-3)" }}>
              {personal.email}
            </a>
            <span className="font-mono text-xs" style={{ color: "var(--color-text-3)" }}>
              © {new Date().getFullYear()} {personal.name.split(" ")[0]}.
            </span>
          </div>
        </div>
      </div>

      <div className="sm:hidden">
        <BottomSheet />
      </div>
    </>
  );
}
