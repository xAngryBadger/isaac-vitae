import { useEffect, useState, useCallback } from 'react';

const DYSLEXIA_FONT_KEY = 'dyslexia-font-enabled';

export function useDyslexiaFont() {
  const [isEnabled, setIsEnabled] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(DYSLEXIA_FONT_KEY);
    const enabled = saved === 'true';
    setIsEnabled(enabled);
    
    if (enabled) {
      document.documentElement.classList.add('dyslexia-font');
      document.documentElement.style.setProperty('--font-sans', "'Lexend', sans-serif");
      document.documentElement.style.setProperty('--font-mono', "'Lexend', monospace");
    }
  }, []);

  const toggle = useCallback(() => {
    setIsEnabled(prev => {
      const newValue = !prev;
      localStorage.setItem(DYSLEXIA_FONT_KEY, newValue ? 'true' : 'false');
      
      if (newValue) {
        document.documentElement.classList.add('dyslexia-font');
        document.documentElement.style.setProperty('--font-sans', "'Lexend', sans-serif");
        document.documentElement.style.setProperty('--font-mono', "'Lexend', monospace");
      } else {
        document.documentElement.classList.remove('dyslexia-font');
        document.documentElement.style.setProperty('--font-sans', "'Inter', system-ui, sans-serif");
        document.documentElement.style.setProperty('--font-mono', "'Space Mono', 'Courier New', monospace");
      }
      
      return newValue;
    });
  }, []);

  return { isEnabled, toggle };
}
