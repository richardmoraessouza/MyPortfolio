import { useLanguage } from "../../contexts/LanguageContext";
import { translations } from "../../translations/translations";
import styles from "./Sobre_mim.module.scss";

function Sobre_mim() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section
      id="sobre_mim"
      className={`align-items-center justify-content-center ${styles.sobre_mim}`}
    >
      <section className={`${styles.foguete}`}> 
      <spline-viewer url="https://prod.spline.design/CCEqHGxP14bc69Xo/scene.splinecode"></spline-viewer>
      </section>
      <section className={`${styles.textoSobreMim}`}>
        <h2 className={`p-1 ${styles.tituloTexto}`}>
          <i className="bi bi-star-fill"></i> {t.aboutMe}
        </h2>
        <p>{t.aboutMeText1}</p>
        <p>{t.aboutMeText2}</p>
        <p>{t.aboutMeText3}</p>
        <a href="public/RichardMoraesSouza_DevFrontEnd.pdf" target="_blank" className={styles.curriculo}>{t.curriculum}</a>
      </section>
    </section>
  );
}

export default Sobre_mim;
