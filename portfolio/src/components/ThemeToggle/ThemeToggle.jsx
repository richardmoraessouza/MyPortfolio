import { useTheme } from '../../contexts/ThemeContext';
import { useLanguage } from '../../contexts/LanguageContext';
import { translations } from '../../translations/translations';
import styles from './ThemeToggle.module.scss';

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <button
      onClick={toggleTheme}
      className={styles.themeToggle}
      aria-label={t.toggleTheme}
      title={t.toggleTheme}
    >
      {isDark ? (
        <i className="bi bi-sun-fill"></i>
      ) : (
        <i className="bi bi-moon-fill"></i>
      )}
    </button>
  );
};

export default ThemeToggle; 