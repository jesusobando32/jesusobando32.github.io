import React, { createContext, useContext, useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolio';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en'); // Default fallback

  useEffect(() => {
    // Detect browser language on load
    const browserLang = navigator.language.split('-')[0];
    if (browserLang === 'es') {
      setLanguage('es');
    } else {
      setLanguage('en');
    }
  }, []);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'es' ? 'en' : 'es');
  };

  const t = portfolioData[language];

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
