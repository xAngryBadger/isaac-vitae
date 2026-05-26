import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from 'react';

const DARK_MODE_KEY = 'dark-mode-enabled';

const getInitialValue = (): boolean => {
  if (typeof window === 'undefined') return true;
  const saved = localStorage.getItem(DARK_MODE_KEY);
  if (saved !== null) return saved === 'true';
  return true;
};

const DarkModeContext = createContext<{
  isEnabled: boolean;
  toggle: () => void;
}>({
  isEnabled: true,
  toggle: () => {},
});

export function DarkModeProvider({ children }: { children: ReactNode }) {
  const [isEnabled, setIsEnabled] = useState(getInitialValue);

  useEffect(() => {
    if (isEnabled) {
      document.documentElement.classList.add('dark-mode');
    } else {
      document.documentElement.classList.remove('dark-mode');
    }
    localStorage.setItem(DARK_MODE_KEY, isEnabled ? 'true' : 'false');
    const themeColor = document.querySelector('meta[name="theme-color"]');
    if (themeColor) themeColor.setAttribute('content', isEnabled ? '#0a0a0a' : '#456A4B');
  }, [isEnabled]);

  const toggle = useCallback(() => {
    setIsEnabled(prev => !prev);
  }, []);

  return (
    <DarkModeContext.Provider value={{ isEnabled, toggle }}>
      {children}
    </DarkModeContext.Provider>
  );
}

export function useDarkMode() {
  return useContext(DarkModeContext);
}
