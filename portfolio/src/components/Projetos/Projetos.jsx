import styles from "./Projetos.module.scss";
function Projetos({ pessoa, index }) {
  return (
    <section className={`flex-row p-2 ${styles.projetos}`}>
      {pessoa.map((pessoa, index) => (
        <div
          key={index}
          className={`${styles.sobre_projeto} ${styles.projeto} p-3`}
        >
          <h3>{pessoa.nome}</h3>
          <p>{pessoa.idade}</p>
          <div>
            <button>ver site</button>
            <button>reposdfsd</button>
          </div>
        </div>
      ))}
    </section>
  );
}
export default Projetos;
