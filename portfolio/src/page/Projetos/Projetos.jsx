import { useLanguage } from "../../contexts/LanguageContext";
import { translations } from "../../translations/translations";
import styles from "./Projetos.module.css";

function Projetos({ projeto, index }) {
  const { language } = useLanguage();
  const t = translations[language];

  const getProjectTranslation = (projectTitle) => {
    const projectKey = projectTitle.toLowerCase().replace(/\s+/g, '');
    
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
        
      default:
        return { title: projectTitle, description: projeto.sobre };
    }
  };

  return (
    <section id="projetos" className={`gap-5 ${styles.projetos}`}>
      {projeto.map((projeto, index) => {
        const projectTranslation = getProjectTranslation(projeto.titulo);

        let tecnologias = []
        for(let contador = 0; contador < projeto.tecnologias.length; contador++) {
          tecnologias.push(<i key={contador} className={`p-1 ${projeto.tecnologias[contador]}`}></i>)
        }
        
        return (
          <div className={`p-2 ${styles.containerProjetos}`} key={index}>
            <div className={`${styles.img_projeto} ${styles.projeto}`}>
              <img src={`/image/${projeto.imagem}`} alt={projeto.alt} />
            </div>
            <div className={`${styles.sobre_projeto} ${styles.projeto} p-3`}>
              <h3>{projectTranslation.title}</h3>
              <p>{projectTranslation.description}</p>
              <div className={styles.container_tecnologia}>{tecnologias}</div>
              <div className={`gap-2 ${styles.links}`}>
                <a href={projeto.site} className={styles.site} target="_blank">
                  {t.viewProject}
                </a>
                <a
                  href={projeto.repositorio}
                  className={styles.repositorio}
                  target="_blank"
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
