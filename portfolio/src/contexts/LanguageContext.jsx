import { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage deve ser usado dentro de um LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('pt'); // Default to 'pt' for SSR
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    // Only access localStorage after component mounts (client-side)
    const savedLanguage = localStorage.getItem('language');
    const initialLanguage = savedLanguage || 'pt';
    
    setLanguage(initialLanguage);
    setIsInitialized(true);
  }, []);

  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem('language', language);
      document.documentElement.setAttribute('lang', language);
    }
  }, [language, isInitialized]);

  const toggleLanguage = () => {
    setLanguage(language === 'pt' ? 'en' : 'pt');
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, isInitialized }}>
      {children}
    </LanguageContext.Provider>
  );
}; 