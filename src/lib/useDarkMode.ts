import { useEffect, useState, useCallback } from 'react';

const DARK_MODE_KEY = 'dark-mode-enabled';

export function useDarkMode() {
  const [isEnabled, setIsEnabled] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem(DARK_MODE_KEY);
    if (saved !== null) {
      const enabled = saved === 'true';
      setIsEnabled(enabled);
      if (enabled) {
        document.documentElement.classList.add('dark-mode');
      } else {
        document.documentElement.classList.remove('dark-mode');
      }
    } else {
      const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
      if (prefersLight) {
        setIsEnabled(false);
        document.documentElement.classList.remove('dark-mode');
      } else {
        document.documentElement.classList.add('dark-mode');
      }
    }
  }, []);

  const toggle = useCallback(() => {
    setIsEnabled(prev => {
      const newValue = !prev;
      localStorage.setItem(DARK_MODE_KEY, newValue ? 'true' : 'false');

      if (newValue) {
        document.documentElement.classList.add('dark-mode');
      } else {
        document.documentElement.classList.remove('dark-mode');
      }

      return newValue;
    });
  }, []);

  return { isEnabled, toggle };
}
