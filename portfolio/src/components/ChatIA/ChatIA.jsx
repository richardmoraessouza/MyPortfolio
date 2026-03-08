import { useRef, useEffect, useState } from 'react';
import styles from './ChatIA.module.css';
import { useLanguage } from '../../hooks/LanguageContext';
import { translations } from '../../hooks/translations';

const ChatIA = ({ respostaIA, animate = false, sobre, respotaRapida }) => {
  const { language } = useLanguage();
  const t = translations[language];

  const modelRef = useRef(null);
  const [textoExibido, setTextoExibido] = useState("");

  //  Animação da bot recebe uma pergunta do usuário
  useEffect(() => {
    if (modelRef.current) {
      if (animate) {
        modelRef.current.animationName = "Dance";
        modelRef.current.play();

        const timer = setTimeout(() => {
          if (modelRef.current) {
            modelRef.current.animationName = "Idle";
          }
        }, 10000);

        return () => clearTimeout(timer);
      } else {
        modelRef.current.animationName = "Idle";
      }
    }
  }, [animate]);


  // Faz uma animation de digitação para a resposta da IA
  useEffect(() => {
  if (respostaIA) {
    setTextoExibido(""); 
    let i = 0;
    const velocidade = 0; 

    const interval = setInterval(() => {
      const char = respostaIA[i]; 
      
      if (char !== undefined) {
        setTextoExibido((prev) => prev + char);
        i++;
      }

      if (i >= respostaIA.length) {
        clearInterval(interval);
      }
    }, velocidade);

    return () => clearInterval(interval);
  }
}, [respostaIA]);

  return (
    <section className={styles.chatContainer}>
      {sobre ? (
        <div>
          {textoExibido && (
            <div className={styles.balaoConversa}>
              <p>{textoExibido}</p>
            </div>
          )}
        </div>
      ): (
         <div className={styles.balaoConversa}>
             <p>{t.sobre_mim}</p>
          </div>
      )} 
      
      <div className={styles.modelWrapper}>
        <model-viewer
          ref={modelRef}
          src="https://modelviewer.dev/shared-assets/models/RobotExpressive.glb"
          auto-rotate
          camera-controls
          animation-name="Idle"
          disable-zoom
          autoplay 
          style={{ width: '100%', height: '100%' }}
        ></model-viewer>
      </div>
    </section>
  );
};

export default ChatIA;