import { useLanguage } from "../../hooks/LanguageContext";
import { translations } from "../../hooks/translations";
import styles from "./Projetos.module.css";

function Projetos({ projeto }) {
  const { language } = useLanguage();
  const t = translations[language];

  const getProjectTranslation = (projectTitle) => {
    // Normaliza o título: "Chat para portfólio" vira "chatparaportfólio"
    const projectKey = projectTitle
      .toLowerCase()
      .normalize("NFD") // Remove acentos
      .replace(/[\u0300-\u036f]/g, "") 
      .replace(/\s+/g, "");
    
    switch (projectKey) {
      case 'serginhoesteticar':
        return t.serginhoEstetiCar;
      case 'calculadora':
        return t.calculator;
      case 'quiz':
        return t.quiz;
      case 'projetoweb1':
        return t.projectWeb1;
      case 'timerinterativo':
        return t.timer;
      case 'projetoweb2':
        return t.projectWeb2;
      case 'youtubeclone':
        return t.youtubeClone;
      case 'mariojump':
        return t.MarioJump;
      case 'githubfinder':
        return t.githubFinder;
      case 'instagramclone':
        return t.instagramClone;
      case 'shoppinglife':
        return t.shoppingLife;
      case 'personia':
        return t.PersonIA;
      case 'chatparaportfolio': // Agora combina com o título do seu array
        return t.portfolioBackend;
      default:
        // Fallback caso não encontre a tradução
        return { title: projectTitle, description: "Description not found" };
    }
  };

  return (
    <section id="projetos" className={`gap-5 ${styles.projetos}`}>
      {projeto.map((proj, index) => {
        const projectTranslation = getProjectTranslation(proj.titulo);

        return (
          <div className={`p-2 ${styles.containerProjetos}`} key={index}>
            <div className={`${styles.img_projeto} ${styles.projeto}`}>
              <img src={`/image/${proj.imagem}`} alt={proj.alt} />
            </div>
            <div className={`${styles.sobre_projeto} ${styles.projeto} p-3`}>
              <h3>{projectTranslation.title}</h3>
              <p>{projectTranslation.description}</p>
              
              <div className={styles.container_tecnologia}>
                {proj.tecnologias.map((tech, idx) => (
                  <i key={idx} className={`p-1 ${tech}`}></i>
                ))}
              </div>

              <div className={`gap-2 ${styles.links}`}>
                <a href={proj.site} className={styles.site} target="_blank" rel="noreferrer">
                  {t.viewProject}
                </a>
                <a
                  href={proj.repositorio}
                  className={styles.repositorio}
                  target="_blank"
                  rel="noreferrer"
                >
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