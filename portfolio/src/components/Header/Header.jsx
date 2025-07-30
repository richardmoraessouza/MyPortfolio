import { useState, useEffect } from "react";
import { useLanguage } from "../../contexts/LanguageContext";
import { translations } from "../../translations/translations";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import LanguageToggle from "../LanguageToggle/LanguageToggle";
import styles from "./Header.module.scss";

function Header() {
  const [nome, setNome] = useState("");
  const { language } = useLanguage();
  const t = translations[language];
  const nome_completo = "Richard Moraes Souza";
  const typingSpeed = 100;


  useEffect(() => {
    let index = 0;

    const typing = () => {
      if (index < nome_completo.length) {
        setNome(nome_completo.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    };

    const interval = setInterval(typing, typingSpeed);

    return () => clearInterval(interval);
  }, []);

  return (
    <header id="home" className={styles.header}>
      <section className={styles.navegacao}>
        <nav className={styles.normal}>
          <ul>
            <li>
              <a href="#home" className={styles.link}>
                {t.home}
              </a>
            </li>
            <li>
              <a href="#sobre_mim">{t.about}</a>
            </li>
            <li>
              <a href="#tecnologias">{t.technologies}</a>
            </li>
            <li>
              <a href="#projetos">{t.projects}</a>
            </li>
            <li>
              <a href="#contatos">{t.contact}</a>
            </li>
          </ul>
        </nav>
        <div>
        </div>
        <div className={styles.controls}>
          <ThemeToggle />
          <LanguageToggle />
        </div>
      </section>

      <div className="p-3"></div>

      <div className={styles.apresentacao}>
        <section className={styles.comeco}>
          <div>
            <h1 className="m-1">{nome}</h1>
            <p>&lt;Desenvolvedor Front-end/&gt;</p>
          </div>
          <div className={styles.redes_socias}>
            <button className={`${styles.btn} ${styles.linkedin}`}>
              <a href="https://www.linkedin.com/in/richard-moraes-souza/" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-linkedin me-2"></i>Linkedin
              </a>
            </button>
            <button className={`${styles.btn} ${styles.github}`}>
              <a href="https://github.com/richardmoraessouza" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-github me-2"></i>GitHub
              </a>
            </button>
          </div>
        </section>

        <section className={styles.orbita}>
          <div className={styles.centro}>
            <img
              src="/Portf-lio/image/eu.jpg"
              alt=""
              className={styles.eu}
            />
          </div>
          <div className={styles.objeto_wrapper}>
            <div className={styles.objeto}>
              <img
                src="/Portf-lio/image/clipart-rocket.png"
                alt="Foguete em órbita"
              />
            </div>
          </div>
        </section>
      </div>
      <video
        src="/Portf-lio/video/bolinhas.mp4"
        autoPlay
        className={styles.video}
        muted
        loop
        playsInline
      ></video> 
    </header>
  );
}

export default Header;
