import { useLanguage } from "../../hooks/LanguageContext";
import { translations } from "../../hooks/translations";
import styles from "./Tecnologias.module.css";

function Tecnologias({ front, back, git }) {
  const { language } = useLanguage();
  const t = translations[language];

  // Função para obter a tradução da tecnologia
  const getTechnologyTranslation = (techName, techType) => {
    const techKey = techName.toLo
    return { title: techName, description: '' };
  };

  return (
    <>
      <section id="tecnologias" className={styles.tecnologias}>
        <section className={styles.area}>
          <h2>{t.frontend}</h2>
          <section className={styles.containerTecnologias}>
            {front.map((item, index) => {
              const techTranslation = getTechnologyTranslation(item.titulo, 'frontend');
              return (
                <article className={styles.tecnologia} key={index} style={{ '--tech-color': item.cor }}>
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
              const techTranslation = getTechnologyTranslation(item.tecnologia, 'backend');
              return (
                <article className={styles.tecnologia} key={index} style={{ '--tech-color': item.cor }}>
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
            const techTranslation = getTechnologyTranslation(item.tecnologia, 'tools');
            return (
              <article className={`${styles.tecnologia}`} key={index} style={{ '--tech-color': item.cor }}>
                <i className={`${styles.icon} ${item.icon}`} ></i>
                <h3 style={{color: item.cor }}>{techTranslation.title}</h3>
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
