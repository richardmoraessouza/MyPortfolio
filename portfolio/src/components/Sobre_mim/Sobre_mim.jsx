import { useLanguage } from "../../contexts/LanguageContext";
import { translations } from "../../translations/translations";
import styles from "./Sobre_mim.module.css";

function Sobre_mim() {
  const { language } = useLanguage();
  const t = translations[language];
  
  return (
    <section
      id="sobre_mim"
      className={`align-items-center justify-content-center ${styles.sobre_mim}`}
    >
      <section className={`${styles.linkImg}`}> 
      <img src="/image/programacao.png" alt="Richard Moraes Souza programando - desenvolvedor front-end trabalhando com React e JavaScript" />
      </section>
      <section className={`${styles.textoSobreMim}`}>
        <div className={styles.containerTitulo}>
          <h2 className={`p-1 ${styles.tituloTexto}`}>
            <i className="bi bi-star-fill"></i> {t.aboutMe}
          </h2>
        </div>
        <p>{t.aboutMeText1}</p>
        <p>{t.aboutMeText2}</p>
        <p>{t.aboutMeText3}</p>
        <a href="/RichardMoraesSouza_DevFrontEnd.pdf" target="_blank" className={styles.curriculo}>{t.curriculum}</a>
      </section>
    </section>
  );
}

export default Sobre_mim;
