import { useEffect, useState, useCallback } from 'react';

const DARK_MODE_KEY = 'dark-mode-enabled';

// Get initial value synchronously to avoid flash
const getInitialValue = (): boolean => {
  if (typeof window === 'undefined') return true;
  const saved = localStorage.getItem(DARK_MODE_KEY);
  if (saved !== null) {
    return saved === 'true';
  }
  return !window.matchMedia('(prefers-color-scheme: light)').matches;
};

export function useDarkMode() {
  const [isEnabled, setIsEnabled] = useState(getInitialValue);

  useEffect(() => {
    const saved = localStorage.getItem(DARK_MODE_KEY);
    if (saved === null) {
      // First visit - set initial state
      const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
      const initialValue = !prefersLight;
      setIsEnabled(initialValue);
      if (initialValue) {
        document.documentElement.classList.add('dark-mode');
      } else {
        document.documentElement.classList.remove('dark-mode');
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
