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
        </p>
        <p>Lorem ipsum dolor, sit amet consectetti iste!</p>
      </section>
    </section>
  );
}
export default Sobre_mim;
