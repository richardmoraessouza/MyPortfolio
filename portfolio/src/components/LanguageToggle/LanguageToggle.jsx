import { useLanguage } from '../../contexts/LanguageContext';
import { useTheme } from '../../contexts/ThemeContext';
import { translations } from '../../translations/translations';
import styles from './LanguageToggle.module.scss';

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
      {language === 'pt' ? 'EN' : 'PT'}
    </button>
  );
};

export default LanguageToggle; 