import { useState, useEffect } from "react";
import styles from "./Header.module.css";

function Header() {
  const [nome, setNome] = useState("");
  const nome_completo = "Richard Moras Souza";
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
    <header className={styles.header}>
      <section className={styles.navegacao}>
        <nav>
          <ul>
            <li>
              <a href="#home" className={styles.link}>
                Home
              </a>
            </li>
            <li>
              <a href="">sobre mim</a>
            </li>
            <li>
              <a href="">nada</a>
            </li>
          </ul>
        </nav>
      </section>

      <div className="p-3"></div>

      <div className={styles.apresentacao}>
        <section className={styles.comeco}>
          <div>
            <h1 className="m-2">{nome}</h1>
            <p>Desenvolvedor Front-end</p>
          </div>
          <div className={styles.redes_socias}>
            <button className={`${styles.btn} ${styles.linkedin}`}>
              Linkedin
            </button>
            <button className={`${styles.btn} ${styles.github}`}>GitHub</button>
          </div>
        </section>

        <section className={styles.orbita}>
          <div className={styles.centro}>
            <img src="/image/absulute-cinema.jpg" alt="" />
          </div>
          <div className={styles.objeto_wrapper}>
            <div className={styles.objeto}>
              <img src="/image/clipart-rocket.png" alt="Foguete em órbita" />
            </div>
          </div>
        </section>
      </div>
      <video
        src="/video/video_4.mp4"
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
