import { useLanguage } from "../../contexts/LanguageContext";
import { translations } from "../../translations/translations";
import styles from "./Footer.module.scss";

function Footer() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    
    <section id="contatos" className={styles.redes_socias}>
      <ul
        className={`align-items-center justify-content-center d-inline-flex gap-4`}
      >
        <li>
          <a
            href="https://wa.me/47999326217"
            target="_blank"
            rel="noopener noreferrer"
            title="WhatsApp"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
              alt="WhatsApp"
              width="32"
              className={styles.app_social}
            />{" "}
          </a>
        </li>
        <li>
          <a
            href="https://github.com/richardmoraessouza"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
              alt="GitHub"
              width="32"
              className={styles.app_social}
            />{" "}
          </a>
        </li>

        <li>
          <a
            href="https://www.linkedin.com/in/richard-moraes-souza/"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
            className={styles.app_social}
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
              alt="LinkedIn"
              width="32"
              className={styles.app_social}
            />
            {""}
          </a>
        </li>
        <li>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=richardmoraessouza2006@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            title="Gmail"
          >
            <img src="/image/Gmail.png" alt="Gmail"  className={styles.app_social}/>
          </a>
        </li>
      </ul>
      <p>{t.footerText}</p>
    </section>
  );
}

export default Footer;
