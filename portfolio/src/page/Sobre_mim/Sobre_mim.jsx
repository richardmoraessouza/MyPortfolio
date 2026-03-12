import { useState } from "react";
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

  const perguntaRapida = async (id) => {
    setCarregando(true);
    const resposta = Object.values(t.responses).find((resp) => resp.id === id);
    setAnimateRobot(true);

    if (resposta) {
      setTimeout(() => {
        setRespostaIA(resposta.text);
        setSobre(true);
        setAnimateRobot(false);
        setCarregando(false);
      }, 2500)
    } else {
      setRespostaIA(language === "en" ? "Sorry, I don't have an answer for that." : "Desculpe, não tenho uma resposta para isso.");
      setSobre(true);
      setAnimateRobot(false);
      setCarregando(false);
    }
  };

  const handleEnviarMensagem = async (e) => {
    e.preventDefault();
    if (!mensagem.trim()) return;
    realizarChamadaApi(mensagem);
    setMensagem("");
    setSobre(true);
  };

  const realizarChamadaApi = async (texto) => {
    setCarregando(true);
    setAnimateRobot(true);
    try {
      const res = await axios.post("https://portf-lio-api.onrender.com/perguntas/chat", {
        mensagem: texto,
      });
      const resposta = language === "en" ? res.data.resposta_english : res.data.resposta;
      setRespostaIA(resposta);
    } catch {
      const msg = language === "en" ? "Oops, connection error." : "Ops, erro de conexão.";
      setRespostaIA(msg);
    } finally {
      setCarregando(false);
      setAnimateRobot(false);
    }
  };

  return (
    <section id="sobre_mim" className={styles.secao}>

      {/* ── HEADER DA SEÇÃO ── */}
      <div className={styles.secaoHeader}>
        <span className={styles.secaoTag}>
          <span className={styles.tagDot} />
          {language === "en" ? "About me" : "Sobre mim"}
        </span>
        <p className={styles.subtitulo}>
          {language === "en"
            ? "Ask me anything — I'm powered by AI"
            : "Me pergunte qualquer coisa — sou movido por IA"}
        </p>
      </div>

      {/* ── CARD CENTRAL ── */}
      <div className={styles.card}>

        {/* coluna esquerda: chatbot */}
        <div className={styles.colChat}>
          <div className={styles.chatBot}>
            <ChatIA animate={animateRobot} respostaIA={respostaIA} sobre={sobre} />
          </div>
        </div>

        {/* divisor */}
        <div className={styles.divisor} />

        {/* coluna direita: perguntas + input */}
        <div className={styles.colPerguntas}>

          <p className={styles.labelPerguntas}>
            {language === "en" ? "Quick questions" : "Perguntas rápidas"}
          </p>

          <div className={styles.containerPerguntas}>
            {perguntasDinamicas.map((pergunta, index) => (
              <button
                className={styles.btnPergunta}
                key={pergunta.id || index}
                disabled={carregando}
                onClick={() => perguntaRapida(pergunta.id)}
              >
                <span className={styles.btnPerguntaIcon}>?</span>
                {pergunta.text}
              </button>
            ))}
          </div>

          <form onSubmit={handleEnviarMensagem} className={styles.chatForm}>
            <div className={styles.inputWrapper}>
              <input
                type="text"
                value={mensagem}
                onChange={(e) => setMensagem(e.target.value)}
                placeholder={t.perguntar || (language === "en" ? "Ask something…" : "Pergunte algo…")}
                className={styles.inputIA}
              />
              <button type="submit" disabled={carregando} className={styles.btnEnviar}>
                {carregando ? (
                  <span className={styles.loader} />
                ) : (
                  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                  </svg>
                )}
              </button>
            </div>
          </form>

        </div>
      </div>
    </section>
  );
}

export default Sobre_mim;