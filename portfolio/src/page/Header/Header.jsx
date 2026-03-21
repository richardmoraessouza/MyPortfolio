import { useState, useEffect } from "react";
import { useLanguage } from "../../hooks/LanguageContext";
import { translations } from "../../hooks/translations";
import ThemeToggle from "../../components/ThemeToggle/ThemeToggle";
import LanguageToggle from "../../components/LanguageToggle/LanguageToggle";
import styles from "./Header.module.css";
import Navegacao from "../../components/Navegacao/Navegacao";

function Header() {
  const [nome, setNome] = useState("");
  const { language } = useLanguage();
  const t = translations[language];
  const nome_completo = "Richard Moraes Souza";
  const typingSpeed = 100;
  const [modal, setModal] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const abrirModal = () => setModal(prev => !prev);

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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header id="home" className={styles.header}>
      {modal && <Navegacao />}

      {/* ── NAVBAR ── */}
      <nav className={`${styles.navegacao} ${scrolled ? styles.navegacaoScrolled : ""}`}>
        <div className={styles.navLogo}>
          <span className={styles.navLogoDot} />
          RM
        </div>

        <ul className={styles.navLinks}>
          {[
            { href: "#home",        label: t.home },
            { href: "#sobre_mim",   label: t.about },
            { href: "#tecnologias", label: t.technologies },
            { href: "#projetos",    label: t.projects },
            { href: "#contatos",    label: t.contact },
          ].map(({ href, label }) => (
            <li key={href}>
              <a href={href} className={styles.navLink}>{label}</a>
            </li>
          ))}
        </ul>

        <div className={styles.navRight}>
          <div className={styles.controlsGroup}>
            <ThemeToggle />
            <LanguageToggle />
          </div>
          <button onClick={abrirModal} className={styles.hamburger} aria-label="Menu">
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* ── HERO ── */}
      <div className={styles.apresentacao}>

        {/* esquerda: texto */}
        <section className={styles.comeco}>
          <span className={styles.badge}>
            <span className={styles.badgeDot} />
            &lt;Desenvolvedor Full Stack /&gt;
          </span>

          <h1>{nome}<span className={styles.cursor}>|</span></h1>

          <div className={styles.redes_socias}>
            <a
              href="https://www.linkedin.com/in/richard-moraes-souza/"
              target="_blank" rel="noopener noreferrer"
              className={`${styles.btn} ${styles.linkedin}`}
            >
              <i className="bi bi-linkedin" />
              LinkedIn
            </a>
            <a
              href="https://github.com/richardmoraessouza"
              target="_blank" rel="noopener noreferrer"
              className={`${styles.btn} ${styles.github}`}
            >
              <i className="bi bi-github" />
              GitHub
            </a>
            <a
              href="Richard Moraes Souza - Desenvolvedor Full Stack Júnior.pdf"
              target="_blank" rel="noopener noreferrer"
              className={`${styles.btn} ${styles.curriculo}`}
            >
              <i className="bi bi-file-earmark-pdf" />
              Currículo
            </a>
          </div>
        </section>

        {/* direita: buraco negro realista */}
        <section className={styles.orbita}>

          {/* horizonte de eventos */}
          <div className={styles.anelOrbita} />

          {/* disco de acreção achatado */}
          <div className={styles.discoAcrecao} />

          {/* foto atrás do horizonte */}
          <div className={styles.centro}>
            <img src="/image/eu.jpg" alt="Richard Moraes Souza" className={styles.eu} />
          </div>

          {/* poeira orbitando */}
          {[
            { size:3, top:"10%", left:"20%", dur:"5s",   delay:"0s",   tx:"4px",  ty:"-6px", op:0.6, color:"rgba(255,140,40,0.8)"  },
            { size:2, top:"18%", left:"75%", dur:"6.5s", delay:"1s",   tx:"-3px", ty:"-5px", op:0.5, color:"rgba(255,100,20,0.7)"  },
            { size:4, top:"72%", left:"14%", dur:"4.5s", delay:"1.5s", tx:"5px",  ty:"4px",  op:0.6, color:"rgba(255,160,60,0.75)" },
            { size:2, top:"80%", left:"76%", dur:"7s",   delay:"0.5s", tx:"-4px", ty:"3px",  op:0.4, color:"rgba(255,80,10,0.6)"   },
            { size:5, top:"48%", left:"4%",  dur:"5.5s", delay:"2.2s", tx:"6px",  ty:"-3px", op:0.35,color:"rgba(255,120,30,0.5)"  },
            { size:2, top:"38%", left:"91%", dur:"4.8s", delay:"1.8s", tx:"-2px", ty:"-6px", op:0.5, color:"rgba(255,180,80,0.7)"  },
            { size:3, top:"90%", left:"48%", dur:"6s",   delay:"0.3s", tx:"3px",  ty:"5px",  op:0.45,color:"rgba(220,80,0,0.6)"    },
          ].map((p, i) => (
            <div key={i} className={styles.particula} style={{
              width: p.size, height: p.size,
              top: p.top, left: p.left,
              background: p.color,
              boxShadow: `0 0 ${p.size * 3}px ${p.color}`,
              '--dur': p.dur, '--delay': p.delay,
              '--tx': p.tx, '--ty': p.ty, '--op': p.op,
            }} />
          ))}

        </section>

      </div>

      {/* scroll hint */}
      <div className={styles.scrollHint}>
        <span className={styles.scrollDot} />
      </div>
    </header>
  );
}

export default Header;