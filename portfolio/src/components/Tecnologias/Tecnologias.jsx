import { useLanguage } from "../../contexts/LanguageContext";
import { translations } from "../../translations/translations";
import styles from "./Tecnologias.module.scss";
import Modal from "../Modal/Modal";

function Tecnologias({ front, back, git }) {
  const { language } = useLanguage();
  const t = translations[language];

  // Função para obter a tradução da tecnologia
  const getTechnologyTranslation = (techName, techType) => {
    const techKey = techName.toLowerCase();
    
    // Traduções para tecnologias frontend
    if (techType === 'frontend') {
      switch (techKey) {
        case 'css':
          return {
            title: language === 'pt' ? 'CSS' : 'CSS',
            description: language === 'pt' ? 'Estilização visual das páginas' : 'Visual styling of pages'
          };
        case 'bootstrap':
          return {
            title: 'Bootstrap',
            description: language === 'pt' ? 'Framework CSS responsivo' : 'Responsive CSS framework'
          };
        case 'javascript':
          return {
            title: 'JavaScript',
            description: language === 'pt' ? 'Linguagem para interatividade' : 'Language for interactivity'
          };
        case 'html':
          return {
            title: 'HTML',
            description: language === 'pt' ? 'Estrutura de páginas web' : 'Web page structure'
          };
        case 'sass':
          return {
            title: 'Sass',
            description: language === 'pt' ? 'Pré-processador CSS para estilos mais organizados' : 'CSS preprocessor for more organized styles'
          };
        case 'react':
          return {
            title: 'React',
            description: language === 'pt' ? 'Biblioteca JavaScript para interfaces' : 'JavaScript library for interfaces'
          };
        default:
          return { title: techName, description: '' };
      }
    }
    
    // Traduções para tecnologias backend
    if (techType === 'backend') {
      switch (techKey) {
        case 'python':
          return {
            title: 'Python',
            description: language === 'pt' ? 'Linguagem de programação backend' : 'Backend programming language'
          };
        case 'mysql':
          return {
            title: 'MySQL',
            description: language === 'pt' ? 'Sistema de gerenciamento de banco de dados' : 'Database management system'
          };
        default:
          return { title: techName, description: '' };
      }
    }
    
    // Traduções para ferramentas
    if (techType === 'tools') {
      switch (techKey) {
        case 'git':
          return {
            title: 'Git',
            description: language === 'pt' ? 'Sistema de controle de versão' : 'Version control system'
          };
        case 'github':
          return {
            title: 'GitHub',
            description: language === 'pt' ? 'Plataforma de hospedagem de código' : 'Code hosting platform'
          };
        default:
          return { title: techName, description: '' };
      }
    }
    
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
                  <p>{techTranslation.description}</p>
                  <Modal text={t.aboutTechnology} className={styles.botao} resumo={item.resumo} />
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
                  <p>{techTranslation.description}</p>
                  <Modal text={t.aboutTechnology} className={styles.botao} resumo={item.resumo}/>
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
                <p>{techTranslation.description}</p>
                <Modal text={t.aboutTechnology} className={styles.botao} resumo={item.resumo}/>
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
