import { useState } from "react";
import { useLanguage } from "../../hooks/LanguageContext";
import { translations } from "../../hooks/translations";
import styles from "./Projetos.module.css";

const MAIN_PROJECTS = ["serginhoesteticar", "personia", "shoppinglife", "chatparaportfolio"];

function Projetos({ projeto }) {
  const { language } = useLanguage();
  const t = translations[language];
  const [showAll, setShowAll] = useState(false);
  const normalizeKey = (titulo) =>
    titulo.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, "");

  const getProjectTranslation = (projectTitle) => {
    const k = normalizeKey(projectTitle);
    switch (k) {
      case "serginhoesteticar":  return t.serginhoEstetiCar;
      case "calculadora":        return t.calculator;
      case "quiz":               return t.quiz;
      case "projetoweb1":        return t.projectWeb1;
      case "timerinterativo":    return t.timer;
      case "projetoweb2":        return t.projectWeb2;
      case "youtubeclone":       return t.youtubeClone;
      case "mariojump":          return t.MarioJump;
      case "githubfinder":       return t.githubFinder;
      case "instagramclone":     return t.instagramClone;
      case "shoppinglife":       return t.shoppingLife;
      case "personia":           return t.PersonIA;
      case "chatparaportfolio":  return t.portfolioBackend;
      default: return { title: projectTitle, description: "Description not found" };
    }
  };

  const mainProjects = MAIN_PROJECTS
    .map((key) => projeto.find((p) => normalizeKey(p.titulo) === key))
    .filter(Boolean);

  const otherProjects = projeto.filter((p) => !MAIN_PROJECTS.includes(normalizeKey(p.titulo)));
  const visibleProjects = showAll ? [...mainProjects, ...otherProjects] : mainProjects;

  return (
    <section id="projetos">
      <div className={styles.projetos}>
        {visibleProjects.map((proj, index) => {
          const projectTranslation = getProjectTranslation(proj.titulo);
          const num = String(index + 1).padStart(2, "0");

          return (
            <article className={styles.containerProjetos} key={proj.titulo}>
              <span className={styles.numProjeto}>OBJ-{num}</span>

              <div className={styles.img_projeto}>
                <img src={`/image/${proj.imagem}`} alt={proj.alt} loading="lazy" decoding="async" />
              </div>

              <div className={styles.sobre_projeto}>
                <h3>{projectTranslation.title}</h3>
                <p>{projectTranslation.description}</p>

                <div className={styles.container_tecnologia}>
                  {proj.tecnologias.map((tech, idx) => (
                    <i key={idx} className={tech} title={tech} />
                  ))}
                </div>

                <div className={styles.links}>
                  <a href={proj.site} className={styles.site} target="_blank" rel="noreferrer">
                    ↗ {t.viewProject}
                  </a>
                  <a href={proj.repositorio} className={styles.repositorio} target="_blank" rel="noreferrer">
                    &lt;{t.viewRepository}/&gt;
                  </a>
                  {proj && (proj.api || proj.repositorioApi) && (
                    <>
                      <a href={proj.api} className={styles.api} target="_blank" rel="noreferrer">
                        &lt;{t.viewAPI}/&gt;
                      </a>
                      <a href={proj.repositorioApi} className={styles.repositorioApi} target="_blank" rel="noreferrer">
                        &lt;{t.viewRepositoryAPI}/&gt;
                      </a>
                    </>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {!showAll && otherProjects.length > 0 && (
        <div className={styles.expandWrapper}>

          <button className={styles.expandBtn} onClick={() => setShowAll(true)}>
            {/* Cantos decorativos */}
            <span className={`${styles.corner} ${styles.cornerTL}`} />
            <span className={`${styles.corner} ${styles.cornerTR}`} />
            <span className={`${styles.corner} ${styles.cornerBL}`} />
            <span className={`${styles.corner} ${styles.cornerBR}`} />

            <span className={styles.expandInner}>
              <span className={styles.expandCount}>{otherProjects.length}</span>
              <span className={styles.expandLabel}>{t.expandButton}</span>
              <span className={styles.expandArrow}>↓</span>
            </span>
          </button>

          <p className={styles.expandSub}>{t.expandSub}</p>
        </div>
      )}
    </section>
  );
}

export default Projetos;