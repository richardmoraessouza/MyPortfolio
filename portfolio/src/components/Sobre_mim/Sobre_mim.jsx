import { useLanguage } from "../../contexts/LanguageContext";
import { translations } from "../../translations/translations";
import styles from "./Sobre_mim.module.scss";

function Sobre_mim() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section
      id="sobre_mim"
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
          <i className="bi bi-star-fill"></i> {t.aboutMe}
        </h2>
        <p>{t.aboutMeText1}</p>
        <p>{t.aboutMeText2}</p>
        <p>{t.aboutMeText3}</p>
      </section>
    </section>
  );
}

export default Sobre_mim;
