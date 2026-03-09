import { useLanguage } from '../../hooks/LanguageContext';
import { useTheme } from '../../hooks/ThemeContext';
import { translations } from '../../hooks/translations';
import styles from './LanguageToggle.module.css';

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();
  const { isDark } = useTheme();
  const t = translations[language];
  
  return (
    <button
      onClick={toggleLanguage}
      className={styles.languageToggle}
      aria-label={t.toggleLanguage}
      title={t.toggleLanguage}
    >
      <span className={styles.textWrapper}>
        {language === 'pt' ? 'EN' : 'PT'}
      </span>
    </button>
  );
};

export default LanguageToggle; 