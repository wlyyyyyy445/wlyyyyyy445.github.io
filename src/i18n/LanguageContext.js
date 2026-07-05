import React, { createContext, useContext, useState, useEffect } from 'react';
import translations from './translations';

const LanguageContext = createContext();

const SUPPORTED_LANGS = Object.keys(translations);

function getInitialLang() {
  try {
    const saved = localStorage.getItem('site_lang');
    if (saved && SUPPORTED_LANGS.includes(saved)) return saved;
  } catch (e) { /* localStorage blocked */ }
  return 'en';
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(getInitialLang);

  useEffect(() => {
    try { localStorage.setItem('site_lang', lang); } catch (e) { /* ignore */ }
  }, [lang]);

  const t = translations[lang];

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, supportedLangs: SUPPORTED_LANGS }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}

export { translations };
