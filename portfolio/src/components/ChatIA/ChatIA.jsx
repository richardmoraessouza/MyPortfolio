import { useEffect, useRef, useState, useCallback } from "react";
import styles from "./ChatIA.module.css";
import { translations } from "../../hooks/translations";
import { useLanguage } from "../../hooks/LanguageContext";

// ── Robô futurista com boca animada ──

const RobotAvatar = ({ thinking, talking }) => (
  
  <div className={`${styles.avatar} ${thinking ? styles.avatarThinking : ""} ${talking ? styles.avatarTalking : ""}`}>
    <svg viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.robotSvg}>

      {/* ── ANTENA ── */}
      <line x1="50" y1="2" x2="50" y2="14" stroke="#6366f1" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="50" cy="2" r="3" fill="#6366f1" className={styles.antennaDot}/>
      <line x1="50" y1="8" x2="40" y2="14" stroke="#6366f1" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
      <line x1="50" y1="8" x2="60" y2="14" stroke="#6366f1" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>

      {/* ── CABEÇA ── */}
      <rect x="20" y="14" width="60" height="48" rx="14" fill="url(#headGrad)"/>
      {/* borda brilhante */}
      <rect x="20" y="14" width="60" height="48" rx="14" stroke="url(#borderGrad)" strokeWidth="1.5" fill="none"/>
      {/* reflexo no topo */}
      <rect x="28" y="17" width="44" height="8" rx="4" fill="rgba(255,255,255,0.06)"/>

      {/* ── ORELHAS / LATERAIS ── */}
      <rect x="13" y="26" width="8" height="16" rx="4" fill="url(#sideGrad)" stroke="#6366f1" strokeWidth="1"/>
      <rect x="79" y="26" width="8" height="16" rx="4" fill="url(#sideGrad)" stroke="#6366f1" strokeWidth="1"/>
      {/* luzinhas nas orelhas */}
      <circle cx="17" cy="34" r="2" fill="#6366f1" className={styles.earLight}/>
      <circle cx="83" cy="34" r="2" fill="#6366f1" className={styles.earLight}/>

      {/* ── OLHOS ── */}
      {/* soquete esquerdo */}
      <rect x="28" y="26" width="18" height="14" rx="6" fill="#050810"/>
      {/* íris esquerda */}
      <circle cx="37" cy="33" r="5" fill="url(#eyeGrad)" className={styles.iris}/>
      {/* pupila */}
      <circle cx="37" cy="33" r="2.5" fill="#0a0a1a"/>
      {/* brilho */}
      <circle cx="39" cy="31" r="1.2" fill="white" opacity="0.9"/>
      <circle cx="35.5" cy="35" r="0.7" fill="white" opacity="0.4"/>

      {/* soquete direito */}
      <rect x="54" y="26" width="18" height="14" rx="6" fill="#050810"/>
      {/* íris direita */}
      <circle cx="63" cy="33" r="5" fill="url(#eyeGrad)" className={styles.iris}/>
      <circle cx="63" cy="33" r="2.5" fill="#0a0a1a"/>
      <circle cx="65" cy="31" r="1.2" fill="white" opacity="0.9"/>
      <circle cx="61.5" cy="35" r="0.7" fill="white" opacity="0.4"/>

      {/* sobrancelhas LED */}
      <rect x="29" y="23" width="16" height="2" rx="1" fill="#6366f1" opacity="0.6" className={styles.brow}/>
      <rect x="55" y="23" width="16" height="2" rx="1" fill="#6366f1" opacity="0.6" className={styles.brow}/>

      {/* ── NARIZ ── */}
      <circle cx="50" cy="43" r="1.5" fill="#6366f1" opacity="0.5"/>

      {/* ── BOCA ── animada com clipPath */}
      <rect x="30" y="48" width="40" height="10" rx="5" fill="#050810" stroke="#6366f1" strokeWidth="1" opacity="0.9"/>
      {/* dentes / display da boca */}
      <g className={`${styles.mouthDisplay} ${talking ? styles.mouthTalking : ""}`}>
        <rect x="32" y="50" width="6"  height="6" rx="2" fill="#6366f1" className={styles.mouthBar}/>
        <rect x="40" y="50" width="6"  height="6" rx="2" fill="#8b5cf6" className={styles.mouthBar} style={{animationDelay:"0.1s"}}/>
        <rect x="48" y="50" width="6"  height="6" rx="2" fill="#a855f7" className={styles.mouthBar} style={{animationDelay:"0.2s"}}/>
        <rect x="56" y="50" width="6"  height="6" rx="2" fill="#ec4899" className={styles.mouthBar} style={{animationDelay:"0.15s"}}/>
      </g>

      {/* ── PESCOÇO ── */}
      <rect x="43" y="62" width="14" height="8" rx="3" fill="url(#neckGrad)"/>
      <rect x="46" y="63" width="4" height="1.5" rx="1" fill="#6366f1" opacity="0.4"/>
      <rect x="46" y="66" width="4" height="1.5" rx="1" fill="#6366f1" opacity="0.4"/>

      {/* ── CORPO ── */}
      <rect x="18" y="70" width="64" height="42" rx="14" fill="url(#bodyGrad)"/>
      <rect x="18" y="70" width="64" height="42" rx="14" stroke="url(#borderGrad)" strokeWidth="1.5" fill="none"/>

      {/* painel do peito */}
      <rect x="28" y="78" width="44" height="26" rx="8" fill="#050810" stroke="#6366f1" strokeWidth="0.8" opacity="0.8"/>

      {/* núcleo central pulsante */}
      <circle cx="50" cy="91" r="7" fill="url(#coreGrad)" className={styles.core}/>
      <circle cx="50" cy="91" r="4" fill="#0a0a1a"/>
      <circle cx="50" cy="91" r="2" fill="#6366f1" className={styles.coreDot}/>

      {/* luzinhas laterais no peito */}
      <circle cx="34" cy="84" r="2" fill="#6366f1" className={styles.chestLight} style={{animationDelay:"0s"}}/>
      <circle cx="34" cy="91" r="2" fill="#8b5cf6" className={styles.chestLight} style={{animationDelay:"0.3s"}}/>
      <circle cx="34" cy="98" r="2" fill="#ec4899" className={styles.chestLight} style={{animationDelay:"0.6s"}}/>
      <circle cx="66" cy="84" r="2" fill="#ec4899" className={styles.chestLight} style={{animationDelay:"0.6s"}}/>
      <circle cx="66" cy="91" r="2" fill="#8b5cf6" className={styles.chestLight} style={{animationDelay:"0.3s"}}/>
      <circle cx="66" cy="98" r="2" fill="#6366f1" className={styles.chestLight} style={{animationDelay:"0s"}}/>

      {/* ── OMBROS / BRAÇOS ── */}
      <rect x="4"  y="72" width="14" height="32" rx="7" fill="url(#armGrad)" stroke="#6366f1" strokeWidth="1"/>
      <rect x="82" y="72" width="14" height="32" rx="7" fill="url(#armGrad)" stroke="#6366f1" strokeWidth="1"/>
      {/* juntas */}
      <circle cx="11" cy="75" r="3" fill="#6366f1" opacity="0.5"/>
      <circle cx="89" cy="75" r="3" fill="#6366f1" opacity="0.5"/>

      <defs>
        <linearGradient id="headGrad" x1="20" y1="14" x2="80" y2="62" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#1a1740"/>
          <stop offset="100%" stopColor="#0c0b1e"/>
        </linearGradient>
        <linearGradient id="bodyGrad" x1="18" y1="70" x2="82" y2="112" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#151330"/>
          <stop offset="100%" stopColor="#0a0918"/>
        </linearGradient>
        <linearGradient id="neckGrad" x1="43" y1="62" x2="57" y2="70" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#1a1740"/>
          <stop offset="100%" stopColor="#0c0b1e"/>
        </linearGradient>
        <linearGradient id="sideGrad" x1="0" y1="0" x2="8" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#0c0b1e"/>
          <stop offset="100%" stopColor="#1a1740"/>
        </linearGradient>
        <linearGradient id="armGrad" x1="0" y1="72" x2="0" y2="104" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#1a1740"/>
          <stop offset="100%" stopColor="#0c0b1e"/>
        </linearGradient>
        <linearGradient id="borderGrad" x1="0" y1="0" x2="100" y2="120" gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stopColor="#6366f1" stopOpacity="0.7"/>
          <stop offset="50%"  stopColor="#a855f7" stopOpacity="0.4"/>
          <stop offset="100%" stopColor="#ec4899" stopOpacity="0.6"/>
        </linearGradient>
        <radialGradient id="eyeGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stopColor="#818cf8"/>
          <stop offset="100%" stopColor="#4338ca"/>
        </radialGradient>
        <radialGradient id="coreGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stopColor="#6366f1" stopOpacity="0.6"/>
          <stop offset="100%" stopColor="#6366f1" stopOpacity="0"/>
        </radialGradient>
      </defs>
    </svg>

    <div className={`${styles.statusRing} ${thinking ? styles.statusRingThinking : styles.statusRingIdle}`}/>
  </div>
);

// ── Loader ──
const ThinkingLoader = () => (
  <div className={styles.thinkingLoader}>
    <div className={styles.codeLines}>
      {["analyzing...", "processing...", "generating..."].map((txt, i) => (
        <div key={i} className={styles.codeLine} style={{ animationDelay: `${i * 0.4}s` }}>
          <span className={styles.codePrompt}>&gt;</span>
          <span className={styles.codeText}>{txt}</span>
          <span className={styles.codeCursor} style={{ animationDelay: `${i * 0.4}s` }}>_</span>
        </div>
      ))}
    </div>
    <div className={styles.thinkingDots}>
      <span style={{ animationDelay: "0s" }}/>
      <span style={{ animationDelay: "0.2s" }}/>
      <span style={{ animationDelay: "0.4s" }}/>
    </div>
  </div>
);

// ── Typewriter ──
const TypewriterText = ({ text, onStart, onEnd }) => {
  const [displayed, setDisplayed] = useState("");
  const idx = useRef(0);

  useEffect(() => {
    setDisplayed("");
    idx.current = 0;
    if (!text) return;
    onStart?.();
    const t = setInterval(() => {
      idx.current++;
      setDisplayed(text.slice(0, idx.current));
      if (idx.current >= text.length) {
        clearInterval(t);
        onEnd?.();
      }
    }, 18);
    return () => { clearInterval(t); onEnd?.(); };
  }, [text, onStart, onEnd]);

  return <span>{displayed}<span className={styles.typeCursor}>|</span></span>;

};

// ── Principal ──
function ChatIA({ animate, respostaIA, sobre }) {
  const balaoRef = useRef(null);
  const [talking, setTalking] = useState(false);
  const { language } = useLanguage();
  const t = translations[language];

  useEffect(() => {
    if (balaoRef.current && respostaIA) balaoRef.current.scrollTop = 0;
  }, [respostaIA]);

  const handleTalkingStart = useCallback(() => {
    setTalking(true);
  }, []);

  const handleTalkingEnd = useCallback(() => {
    setTalking(false);
  }, []);

  return (
    <div className={styles.chatContainer}>
      <div className={styles.balloon} ref={balaoRef}>
        {animate ? (
          <ThinkingLoader />
        ) : sobre && respostaIA ? (
          <TypewriterText
            text={respostaIA}
            onStart={handleTalkingStart}
            onEnd={handleTalkingEnd}
          />
        ) : (
          <div className={styles.idleMessage}>
            <span>{t.sobre_mim}</span>
          </div>
        )}
      </div>

      <div className={styles.balloonTail} />
      <RobotAvatar thinking={animate} talking={talking} />
    </div>
  );
}

export default ChatIA;