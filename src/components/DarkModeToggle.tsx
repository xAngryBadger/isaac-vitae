import { useLang } from '../lib/LanguageContext';
import { useDarkMode } from '../lib/useDarkMode';

export function DarkModeToggle() {
  const { lang } = useLang();
  const { isEnabled, toggle } = useDarkMode();

  return (
    <button
      onClick={toggle}
      className="dark-mode-toggle"
      title={lang === 'pt' ? 'Alternar modo escuro' : 'Toggle dark mode'}
      aria-label={lang === 'pt' ? 'Alternar modo escuro' : 'Toggle dark mode'}
    >
      <span className="icon">{isEnabled ? '☀️' : '🌙'}</span>
    </button>
  );
}
