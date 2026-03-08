import { useEffect, useState } from "react"; 
import { useLanguage } from "../../hooks/LanguageContext";
import { translations } from "../../hooks/translations";
import styles from "./Sobre_mim.module.css";
import axios from "axios";
import ChatIA from "../../components/ChatIA/ChatIA";

function Sobre_mim() {
  const { language } = useLanguage();
  const t = translations[language];

  const perguntasDinamicas = t.questions ? Object.values(t.questions) : [];
  const [mensagem, setMensagem] = useState("");
  const [respostaIA, setRespostaIA] = useState("");
  const [carregando, setCarregando] = useState(false);
  const [animateRobot, setAnimateRobot] = useState(false);
  const [sobre, setSobre] = useState(false);
  const [respostaRapida, setRespostaRapida] = useState("");

  // função para perguntas rápidas
    const perguntaRapida = async (id) => {
      setCarregando(true);
      try {
        const res = await axios.get(`https://portf-lio-api.onrender.com/perguntas/pergunta-rapida/${id}`);
        const resposta = language === 'en' ? res.data.resposta_english : res.data.resposta;

        if (res.data && resposta) {
          setRespostaIA(resposta);
          setSobre(true); 
          setAnimateRobot(true);
          
          setTimeout(() => setAnimateRobot(false), 3000);
        }

      } catch (error) {
        console.error("Erro:", error);
        const mensagemErro = language === 'en' 
          ? "Sorry, I couldn't find that answer in my database." 
          : "Desculpe, não consegui encontrar essa resposta no meu banco de dados.";
        setRespostaIA(mensagemErro);
        setSobre(true);
      } finally {
        setCarregando(false);
      }
    };

  // Função para o formulário de texto livre
  const handleEnviarMensagem = async (e) => {
    e.preventDefault();
    if (!mensagem.trim()) return;
    realizarChamadaApi(mensagem);
    setMensagem(""); 
    setSobre(true);
  };

  // Função centralizada de API para evitar repetição
  const realizarChamadaApi = async (texto) => {
    setCarregando(true);
    setAnimateRobot(true);
    try {
        const res = await axios.post("https://portf-lio-api.onrender.com/perguntas/chat", { 
          mensagem: texto 
      });

      // Seleciona a resposta correta baseado no idioma
      const resposta = language === 'en' ? res.data.resposta_english : res.data.resposta;
      setRespostaIA(resposta);
    } catch (error) {
      console.error("Erro:", error);
      const mensagemErro = language === 'en' 
        ? "Oops, I had a problem connecting." 
        : "Ops, tive um problema para me conectar.";
      setRespostaIA(mensagemErro);
    } finally {
      setCarregando(false);
      setAnimateRobot(false);
    }
  };

  return (
    <div>
      <h2 className={styles.titulo}>{t.about}</h2>

      <section id="sobre_mim" className={`${styles.sobre_mim} align-items-center justify-content-center`}>
      
        <section className={styles.chatBot}>
          <ChatIA animate={animateRobot} respostaIA={respostaIA} sobre={sobre} respota={respostaRapida} />
        </section>
        <section className={styles.perguntas_respostas}>
          <div className={styles.containerPerguntas}>
            {perguntasDinamicas.map((pergunta, index) => (
              <button
                className={styles.btnPerguntas}
                key={pergunta.id || index}
                disabled={carregando}
                onClick={() => perguntaRapida(pergunta.id)}
              >
                {pergunta.text}
              </button>
            ))}
      
          </div>
          <form onSubmit={handleEnviarMensagem} className={styles.chatForm}>
            <div className={styles.containerEnviar}>
              <input
                type="text"
                value={mensagem}
                onChange={(e) => setMensagem(e.target.value)}
                placeholder={t.perguntar}
                className={styles.inputIA}
              />
      
                <button type="submit" disabled={carregando} className={styles.btnEnviar}>
                  {carregando ? (
                    <span className={styles.loader}></span>
                  ) : (
                    <>
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        width="20"
                        height="20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"></path>
                      </svg>
                    </>
                  )}
                </button>
              </div>
          </form>
        </section>
      </section>
    </div>
  );
}

export default Sobre_mim;