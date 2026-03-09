import { useLanguage } from "../../hooks/LanguageContext";
import { translations } from "../../hooks/translations";
import styles from "./Tecnologias.module.css";

function Tecnologias({ front, back, git }) {
  const { language } = useLanguage();
  const t = translations[language];

  const getTechnologyTranslation = (techName) => {
    if (!techName) return { title: "" };
    return { title: techName };
  };

  return (
    <>
      <section id="tecnologias" className={styles.tecnologias}>
        <section className={styles.area}>
          <h2>{t.frontend}</h2>
          <section className={styles.containerTecnologias}>
            {front.map((item, index) => {
              const techTranslation = getTechnologyTranslation(item.titulo);
              return (
                <article
                  className={styles.tecnologia}
                  key={index}
                  style={{ "--tech-color": item.cor }}
                >
                  <i className={`${styles.icon} ${item.icon}`}></i>
                  <h3 style={{ color: item.cor }}>{techTranslation.title}</h3>
                </article>
              );
            })}
          </section>
        </section>

        <section className={styles.area}>
          <h2>{t.backend}</h2>
          <section className={styles.containerTecnologias}>
            {back.map((item, index) => {
              const techTranslation = getTechnologyTranslation(item.tecnologia);
              return (
                <article
                  className={styles.tecnologia}
                  key={index}
                  style={{ "--tech-color": item.cor }}
                >
                  <i className={`${styles.icon} ${item.icon}`}></i>
                  <h3 style={{ color: item.cor }}>{techTranslation.title}</h3>
                </article>
              );
            })}
          </section>
        </section>
      </section>

      <div className={styles.containerGit}>
        <section className={styles.area}>
          <h2>{t.tools}</h2>
          <section className={styles.containerTecnologias}>
            {git.map((item, index) => {
              const techTranslation = getTechnologyTranslation(item.tecnologia);
              return (
                <article
                  className={styles.tecnologia}
                  key={index}
                  style={{ "--tech-color": item.cor }}
                >
                  <i className={`${styles.icon} ${item.icon}`}></i>
                  <h3 style={{ color: item.cor }}>{techTranslation.title}</h3>
                </article>
              );
            })}
          </section>
        </section>
      </div>
    </>
  );
}

export default Tecnologias;