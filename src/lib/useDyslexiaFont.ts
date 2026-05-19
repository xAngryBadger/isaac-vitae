import { useEffect, useState, useCallback } from 'react';

const DYSLEXIA_FONT_KEY = 'dyslexia-font-enabled';
const DYSLEXIA_FONT_URL = 'https://cdn.jsdelivr.net/npm/opendyslexic@latest/opendyslexic-regular.ttf';

export function useDyslexiaFont() {
  const [isEnabled, setIsEnabled] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(DYSLEXIA_FONT_KEY);
    const enabled = saved === 'true';
    setIsEnabled(enabled);
    
    if (enabled) {
      document.documentElement.classList.add('dyslexia-font');
    }
    
    const font = new FontFace('OpenDyslexic', `url(${DYSLEXIA_FONT_URL})`);
    font.load().then((loadedFont) => {
      document.fonts.add(loadedFont);
      setIsLoaded(true);
      if (enabled) {
        document.documentElement.style.setProperty('--font-sans', 'OpenDyslexic, sans-serif');
        document.documentElement.style.setProperty('--font-mono', 'OpenDyslexic, monospace');
      }
    }).catch(() => {
      console.warn('Failed to load OpenDyslexic font');
    });
  }, []);

  const toggle = useCallback(() => {
    setIsEnabled(prev => {
      const newValue = !prev;
      localStorage.setItem(DYSLEXIA_FONT_KEY, newValue ? 'true' : 'false');
      
      if (newValue) {
        document.documentElement.classList.add('dyslexia-font');
        document.documentElement.style.setProperty('--font-sans', 'OpenDyslexic, sans-serif');
        document.documentElement.style.setProperty('--font-mono', 'OpenDyslexic, monospace');
      } else {
        document.documentElement.classList.remove('dyslexia-font');
        document.documentElement.style.setProperty('--font-sans', "'Inter', system-ui, sans-serif");
        document.documentElement.style.setProperty('--font-mono', "'Space Mono', 'Courier New', monospace");
      }
      
      return newValue;
    });
  }, []);

  return { isEnabled, isLoaded, toggle };
}
