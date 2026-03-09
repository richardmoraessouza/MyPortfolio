import { useLanguage } from "../../hooks/LanguageContext";
import { translations } from "../../hooks/translations";
import styles from "./Footer.module.css";

const sociais = [
  {
    href:  "https://wa.me/47999326217",
    title: "WhatsApp",
    src:   "https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg",
    alt:   "WhatsApp",
    color: "#25d366",
  },
  {
    href:  "https://github.com/richardmoraessouza",
    title: "GitHub",
    src:   "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg",
    alt:   "GitHub",
    color: "#e0e0e0",
    invert: true,
  },
  {
    href:  "https://www.linkedin.com/in/richard-moraes-souza/",
    title: "LinkedIn",
    src:   "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png",
    alt:   "LinkedIn",
    color: "#0077b5",
  },
  {
    href:  "https://mail.google.com/mail/?view=cm&fs=1&to=richardmoraessouza2006@gmail.com",
    title: "Gmail",
    src:   "/image/Gmail.png",
    alt:   "Gmail",
    color: "#ea4335",
  },
];

function Footer() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <footer id="contatos" className={styles.footer}>

      {/* linha decorativa */}
      <div className={styles.divider} />

      <div className={styles.inner}>

        {/* logo / assinatura */}
        <div className={styles.brand}>
          <span className={styles.brandDot} />
          <span className={styles.brandName}>Richard Moraes</span>
        </div>

        {/* ícones sociais */}
        <ul className={styles.sociais}>
          {sociais.map(({ href, title, src, alt, color, invert }) => (
            <li key={title}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                title={title}
                className={styles.socialLink}
                style={{ '--hover-color': color }}
              >
                <span className={styles.iconWrap}>
                  <img
                    src={src}
                    alt={alt}
                    width="22"
                    className={invert ? styles.invertImg : ""}
                  />
                </span>
                <span className={styles.socialLabel}>{title}</span>
              </a>
            </li>
          ))}
        </ul>

        {/* copyright */}
        <p className={styles.copy}>{t.footerText}</p>

      </div>
    </footer>
  );
}

export default Footer;