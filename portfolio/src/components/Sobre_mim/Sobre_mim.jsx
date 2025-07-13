import styles from "./Sobre_mim.module.css";
function Sobre_mim() {
  return (
    <section
      className={`justify-content-center align-items-center ${styles.sobre_mim}`}
    >
      <section className={`p-3 ${styles.img}`}>
        <img src="/image/absulute-cinema.jpg" alt="" className={styles.foto} />
      </section>
      <section className={`${styles.textoSobreMim}`}>
        <h2 className={`p-2 ${styles.tituloTexto}`}>
          <i className="bi bi-star-fill"></i> Sobre mim
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At blanditiis
          veritatis eligendi ipsa placeat tempore vitae, voluptates maxime
          aspernatur voluptatem ea sint tenetur odit vero enim in esse sequi
          cupiditate?
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis fuga
          provident eos sapiente commodi at, molestiae doloribus sed corrupti
          iste!
        </p>
      </section>
    </section>
  );
}
export default Sobre_mim;
