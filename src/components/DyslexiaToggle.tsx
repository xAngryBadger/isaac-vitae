import { useLang } from './LanguageContext';
import { useDyslexiaFont } from './useDyslexiaFont';

export function DyslexiaToggle() {
const { lang } = useLang();
const { isEnabled, toggle } = useDyslexiaFont();

return (
<button
onClick={toggle}
className="dyslexia-toggle"
title={lang === 'pt' ? 'Alternar fonte para dislexia' : 'Toggle dyslexia font'}
aria-label={lang === 'pt' ? 'Alternar fonte para dislexia' : 'Toggle dyslexia font'}
>
<span className="icon">{isEnabled ? 'D✓' : 'D'}</span>
</button>
);
}
