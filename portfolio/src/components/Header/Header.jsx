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
      <video
        src="/video/video_1.mp4"
        className={styles.videoBackground}
        autoPlay
        muted
        playsInline
        loop
      ></video>
      <section className={styles.navegacao}>
        <nav>
          <ul className="text-end">
            <li>
              <a href="#home">Home</a>
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

      <div className={styles.apresentacao}>
        <section className={styles.comeco}>
          <div>
            <h1>{nome}</h1>
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
          <div className={styles.centro}></div>
          <div className={styles.objeto_wrapper}>
            <div className={styles.objeto}>
              <img src="/image/clipart-rocket.png" alt="Foguete em órbita" />
            </div>
          </div>
        </section>
      </div>
    </header>
  );
}

export default Header;
