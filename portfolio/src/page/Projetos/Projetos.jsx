import { useLanguage } from "../../hooks/LanguageContext";
import { translations } from "../../hooks/translations";
import styles from "./Projetos.module.css";

function Projetos({ projeto }) {
  const { language } = useLanguage();
  const t = translations[language];

  const getProjectTranslation = (projectTitle) => {
    const projectKey = projectTitle
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/\s+/g, "");

    switch (projectKey) {
      case "serginhoesteticar":   return t.serginhoEstetiCar;
      case "calculadora":         return t.calculator;
      case "quiz":                return t.quiz;
      case "projetoweb1":         return t.projectWeb1;
      case "timerinterativo":     return t.timer;
      case "projetoweb2":         return t.projectWeb2;
      case "youtubeclone":        return t.youtubeClone;
      case "mariojump":           return t.MarioJump;
      case "githubfinder":        return t.githubFinder;
      case "instagramclone":      return t.instagramClone;
      case "shoppinglife":        return t.shoppingLife;
      case "personia":            return t.PersonIA;
      case "chatparaportfolio":   return t.portfolioBackend;
      default:
        return { title: projectTitle, description: "Description not found" };
    }
  };

  return (
    <section id="projetos" className={styles.projetos}>
      {projeto.map((proj, index) => {
        const projectTranslation = getProjectTranslation(proj.titulo);
        const num = String(index + 1).padStart(2, "0");

        return (
          <div className={styles.containerProjetos} key={index}>

            {/* número */}
            <span className={styles.numProjeto}>{num}</span>

            {/* imagem */}
            <div className={styles.img_projeto}>
              <img src={`/image/${proj.imagem}`} alt={proj.alt} />
            </div>

            {/* conteúdo */}
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
              </div>
            </div>

          </div>
        );
      })}
    </section>
  );
}

export default Projetos;