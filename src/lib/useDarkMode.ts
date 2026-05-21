import { useEffect, useState, useCallback } from 'react';

const DARK_MODE_KEY = 'dark-mode-enabled';

// Get initial value synchronously to avoid flash
// Default: dark mode ON (visitors can toggle to light mode if they prefer)
const getInitialValue = (): boolean => {
if (typeof window === 'undefined') return true;
const saved = localStorage.getItem(DARK_MODE_KEY);
if (saved !== null) {
return saved === 'true';
}
return true; // Default to dark mode
};

export function useDarkMode() {
  const [isEnabled, setIsEnabled] = useState(getInitialValue);

useEffect(() => {
const saved = localStorage.getItem(DARK_MODE_KEY);
if (saved === null) {
// First visit - default to dark mode
document.documentElement.classList.add('dark-mode');
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
