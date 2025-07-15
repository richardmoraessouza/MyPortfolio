import { useEffect, useState } from "react";
import styles from "./Tecnologias.module.css";
import Modal from "../Modal/Modal";
function Tecnologias() {
  useEffect(() => {
    const cor_titulo = document.querySelectorAll("h3");
    const cores = ["#7952B3", "#1572B6", "#F7DF1E", "#61dafb", "#E34F26"];
    let index = 0;
    cor_titulo.forEach((h3) => {
      h3.style.color = `${cores[index]}`;
      index++;
    });
  }, []);

  return (
    <section className={styles.tecnologias}>
      <section className={styles.area}>
        <h2>Front-End</h2>
        <div className={styles.containerTecnologias}>
          <div className={styles.tecnologia}>
            <i className={`${styles.icon} devicon-bootstrap-plain colored`}></i>
            <h3>BOOTSTRAP</h3>
            <p>Framework CSS responsivo</p>
            <Modal text="Sobre Tecnologia" className={styles.botao} />
          </div>
          <div className={styles.tecnologia}>
            <i className={`${styles.icon} devicon-css3-plain colored`}></i>
            <h3>CSS</h3>
            <p>Estilização visual das páginas</p>
            <Modal text="Sobre Tecnologia" className={styles.botao} />
          </div>
          <div className={styles.tecnologia}>
            <i
              className={`${styles.icon} devicon-javascript-plain colored`}
            ></i>
            <h3>JAVASCRIPT</h3>
            <p>Linguagem para interatividade</p>
            <Modal text="Sobre Tecnologia" className={styles.botao} />
          </div>
          <div className={styles.tecnologia}>
            <i className={`${styles.icon} devicon-react-original colored`}></i>
            <h3>REACT</h3>
            <p>Biblioteca JavaScript para interfaces</p>
            <Modal text="Sobre Tecnologia" className={styles.botao} />
          </div>
          <div className={styles.tecnologia}>
            <i className={`${styles.icon} devicon-html5-plain colored`}></i>
            <h3>HTML</h3>
            <p>Estrutura de páginas web</p>
            <Modal text="Sobre Tecnologia" className={styles.botao} />
          </div>
        </div>
      </section>

      <section>
        <h2>Back-End</h2>
        <div className={styles.containerTecnologias}>
          <i className="devicon-python-plain colored" title="Python"></i>
          <i className="devicon-mysql-plain colored" title="MySQL"></i>
          <i
            className="devicon-postgresql-plain colored"
            title="SQL (via PostgreSQL)"
          ></i>
        </div>
      </section>
    </section>
  );
}
export default Tecnologias;
