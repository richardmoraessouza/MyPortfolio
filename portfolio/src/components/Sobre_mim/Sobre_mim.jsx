import styles from "./Sobre_mim.module.css";
function Sobre_mim() {
  return (
    <section
      className={`justify-content-center align-items-center ${styles.sobre_mim}`}
    >
      <section className={`p-3 ${styles.img}`}>
        <img
          src="/Portf-lio/image/programacao.png"
          alt=""
          className={styles.foto}
        />
      </section>
      <section className={`${styles.textoSobreMim}`}>
        <h2 className={`p-1 ${styles.tituloTexto}`}>
          <i className="bi bi-star-fill"></i> Sobre mim
        </h2>
        <p>
          Sou desenvolvedor front-end autodidata, apaixonado por criar
          experiências digitais envolventes. Busco constantemente aprimorar
          minhas habilidades e aprender novas tecnologias.
        </p>
        <p>
          Desenvolvi um site institucional sob demanda para meu chefe, com o
          objetivo de apresentar os serviços de estética automotiva e atrair
          novos clientes. O projeto foi desenvolvido utilizando HTML, CSS e
          JavaScript, sendo totalmente responsivo e otimizado para SEO, com
          estrutura de código modular e reutilizável.
        </p>
        <p>
          Tenho experiência em projetos utilizando HTML, CSS, JSON, JavaScript e
          React. Também possuo conhecimentos em backend com Python, utilizando
          bibliotecas como mysql-connector para manipular bancos de dados MySQL,
          criando tabelas, inserindo e consultando dados.
        </p>
      </section>
    </section>
  );
}
export default Sobre_mim;
