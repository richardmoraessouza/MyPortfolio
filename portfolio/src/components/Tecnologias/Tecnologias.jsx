import { useLanguage } from "../../contexts/LanguageContext";
import { translations } from "../../translations/translations";
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
                <div className={styles.tecnologia} key={index}>
                  <i className={`${styles.icon} ${item.icon}`}></i>
                  <h3 style={{ color: item.cor }}>{techTranslation.title}</h3>
                 
                </div>
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
                <div className={styles.tecnologia} key={index}>
                  <i className={`${styles.icon} ${item.icon}`}></i>
                  <h3 style={{ color: item.cor }}>{techTranslation.title}</h3>
                </div>
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
              <div className={`${styles.tecnologia}`} key={index}>
                <i className={`${styles.icon} ${item.icon}`} ></i>
                <h3 style={{color: item.cor }}>{techTranslation.title}</h3>
              </div>
            );
          })}
          </section>
        </section>
      </div>
    </>
  );
}

export default Tecnologias;
