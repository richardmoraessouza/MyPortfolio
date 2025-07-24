import styles from "./Projetos.module.scss";
function Projetos({ projeto, index }) {
  return (
    <section className={`gap-5 ${styles.projetos}`}>
      {projeto.map((projeto, index) => (
        <div className={`flex-row p-2 ${styles.containerProjetos}`} key={index}>
          <div className={`${styles.img_projeto} ${styles.projeto}`}>
            <img src={`/Portf-lio/image/${projeto.imagem}`} alt={projeto.alt} />
          </div>
          <div className={`${styles.sobre_projeto} ${styles.projeto} p-3`}>
            <h3>{projeto.titulo}</h3>
            <p>{projeto.sobre}</p>
            <div className={`gap-2 ${styles.links}`}>
              <a href={projeto.site} className={styles.site} target="_blank">
                Ver projeto
              </a>
              <a
                href={projeto.repositorio}
                className={styles.repositorio}
                target="_blank"
              >
                &lt;Repositório/&gt;
              </a>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
export default Projetos;
