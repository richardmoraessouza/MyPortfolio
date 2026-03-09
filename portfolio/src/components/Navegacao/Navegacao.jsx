import { useState, useEffect } from "react";
import styles from "./Navegacao.module.css";
import { useLanguage } from "../../hooks/LanguageContext";
import { translations } from "../../hooks/translations";

function Navegacao() {
  const [fecha, setFechar] = useState(false);
  const [visible, setVisible] = useState(false);
  const { language } = useLanguage();
  const t = translations[language];

  useEffect(() => {
    // trigger entrance animation
    const t = setTimeout(() => setVisible(true), 10);
    return () => clearTimeout(t);
  }, []);

  const fecharMenu = () => {
    setVisible(false);
    setTimeout(() => setFechar(true), 320);
  };

  const links = [
    { href: "#home",        label: t.home },
    { href: "#sobre_mim",   label: t.about },
    { href: "#tecnologias", label: t.technologies },
    { href: "#projetos",    label: t.projects },
    { href: "#contatos",    label: t.contact },
  ];

  const sociais = [
    {
      href: "https://wa.me/47999326217",
      title: "WhatsApp",
      icon: "https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg",
      alt: "WhatsApp",
    },
    {
      href: "https://github.com/richardmoraessouza",
      title: "GitHub",
      icon: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg",
      alt: "GitHub",
      invert: true,
    },
    {
      href: "https://www.linkedin.com/in/richard-moraes-souza/",
      title: "LinkedIn",
      icon: "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png",
      alt: "LinkedIn",
    },
    {
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=richardmoraessouza2006@gmail.com",
      title: "Gmail",
      icon: "/image/Gmail.png",
      alt: "Gmail",
    },
  ];

  if (fecha) return null;

  return (
    <>
      {/* backdrop */}
      <div
        className={`${styles.backdrop} ${visible ? styles.backdropVisible : ""}`}
        onClick={fecharMenu}
      />

      {/* drawer */}
      <aside className={`${styles.navegacao} ${visible ? styles.navegacaoVisible : ""}`}>

        {/* header */}
        <div className={styles.drawerHeader}>
          <span className={styles.drawerLogo}>
            <span className={styles.drawerLogoDot} />
          </span>
          <button className={styles.fechar} onClick={fecharMenu} aria-label="Fechar menu">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M1 1l16 16M17 1L1 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        {/* nav links */}
        <nav className={styles.map}>
          <ul>
            {links.map(({ href, label }, i) => (
              <li key={href} style={{ animationDelay: `${0.05 + i * 0.06}s` }}>
                <a href={href} onClick={fecharMenu}>
                  <span className={styles.linkNum}>0{i + 1}</span>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* divider */}
        <div className={styles.divider} />

        {/* redes sociais */}
        <nav className={styles.redes_socias}>
          <ul>
            {sociais.map(({ href, title, icon, alt, invert }) => (
              <li key={title}>
                <a href={href} target="_blank" rel="noopener noreferrer" title={title}>
                  <img
                    src={icon}
                    alt={alt}
                    className={invert ? styles.invertImg : ""}
                  />
                </a>
              </li>
            ))}
          </ul>
        </nav>

      </aside>
    </>
  );
}

export default Navegacao;