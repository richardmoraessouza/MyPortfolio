import styles from "./Tecnologias.module.scss";
import Modal from "../Modal/Modal";
function Tecnologias({ front, back }) {
  return (
    <>
      <section className={styles.tecnologias}>
        <section className={styles.area}>
          <h2>FRONT-END</h2>
          <section className={styles.containerTecnologias}>
            {front.map((item, index) => (
              <div className={styles.tecnologia} key={index}>
                <i className={`${styles.icon} ${item.icon}`}></i>
                <h3 style={{ color: item.cor }}>{item.titulo}</h3>
                <p>{item.sobre}</p>
                <Modal text="Sobre Tecnologia" className={styles.botao} resumo={item.resumo} />
              </div>
            ))}
          </section>
        </section>

        <section className={styles.area}>
          <h2>BACK-END</h2>
          <section className={styles.containerTecnologias}>
            {back.map((item, index) => (
              <div className={styles.tecnologia} key={index}>
                <i className={`${styles.icon} ${item.icon}`}></i>
                <h3 style={{ color: item.cor }}>{item.tecnologia}</h3>
                <p>{item.sobre}</p>
                <Modal text="Sobre Tecnologia" className={styles.botao} resumo={item.resumo}/>
              </div>
            ))}
          </section>
        </section>
      </section>

      <div className={styles.containerGit}>
        <section className={styles.area}>
          <h2>Controle de Versão</h2>
          <section className={styles.containerTecnologias}>
            <div className={styles.tecnologia}>
              <i className={`devicon-git-plain colored ${styles.icon}`}></i>
              <h3 className={styles.git}>GIT</h3>
              <p>Sistema de controle de versão distribuído</p>
              <Modal text="Sobre Tecnologia" className={styles.botao} />
            </div>
            <div className={styles.tecnologia}>
              <i
                className={`devicon-github-original colored ${styles.icon}`}
              ></i>
              <h3>GITHUB</h3>
              <p>Plataforma de hospedagem de código-fonte</p>
              <Modal text="Sobre Tecnologia" className={styles.botao} />
            </div>
          </section>
        </section>
      </div>
    </>
  );
}

export default Tecnologias;
