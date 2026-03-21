import { useState, useEffect, useRef } from "react";
import styles from "./Painel.module.css";
import { useLanguage } from "../../hooks/LanguageContext.jsx";
import { translations } from "../../hooks/translations.js";

// ── Estrelas ──────────────────────────────────────────────
const STARS = Array.from({ length: 40 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 1.6 + 0.4,
  delay: Math.random() * 5,
  duration: Math.random() * 3 + 2,
}));

// ── Recursos ──────────────────────────────────────────────
const RESOURCES = [
  { label: "POWER",   value: 95, color: "#00ffb4" },
  { label: "SHIELDS", value: 41, color: "#ff4466" },
  { label: "FUEL",    value: 62, color: "#f0c040" },
];

// ─────────────────────────────────────────────────────────

function StarField() {
  return (
    <div className={styles.stars}>
      {STARS.map((s) => (
        <div
          key={s.id}
          className={styles.star}
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: s.size,
            height: s.size,
            animation: `twinkle ${s.duration}s ${s.delay}s infinite alternate`,
          }}
        />
      ))}
    </div>
  );
}

function Clock() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const t = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(t);
  }, []);
  const pad = (n) => String(n).padStart(2, "0");
  return (
    <span className={styles.clock}>
      {pad(time.getHours())}:{pad(time.getMinutes())}:{pad(time.getSeconds())}
    </span>
  );
}

function TypedText({ text }) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);
  const prevRef = useRef("");

  useEffect(() => {
    if (text === prevRef.current) return;
    prevRef.current = text;
    setDisplayed("");
    setDone(false);
    let i = 0;
    const iv = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) { clearInterval(iv); setDone(true); }
    }, 24);
    return () => clearInterval(iv);
  }, [text]);

  return (
    <p className={styles.sectionMsg}>
      {displayed}
      {!done && <span className={styles.cursor}>█</span>}
    </p>
  );
}

function ResourceBar({ label, value, color }) {
  return (
    <div className={styles.resourceRow}>
      <span className={styles.resourceLabel}>{label}</span>
      <div className={styles.resourceTrack}>
        <div
          className={styles.resourceFill}
          style={{ width: `${value}%`, background: color }}
        />
      </div>
      <span className={styles.resourceVal} style={{ color }}>{value}%</span>
    </div>
  );
}


export const Painel = ({ section = "home" }) => {
  const [visible, setVisible] = useState(true);
  const { language } = useLanguage();
  const t = translations[language];

  const sectionLabels = {
    home: t.home,
    sobre: t.about,
    skills: t.technologies,
    projetos: t.projects,
    contato: t.contact
  };

  const message = (t.Section_messages || t.section_messages)?.[section] || "Explorando o portfólio...";

  if (!visible) return (
    <button className={styles.reopenBtn} onClick={() => setVisible(true)}>
      <span className={styles.dot} />
      <span className={styles.reopenLabel}>NEXUS-7</span>
    </button>
  );

  return (
    <div className={styles.widget}>
      <div className={styles.card}>
        <StarField />
        <div className={styles.scanlines} />
        <div className={styles.scanBar} />

        <header className={styles.header}>
          <div className={styles.headerLeft}>
            <div className={styles.dot} />
            <span className={styles.title}>NEXUS-7</span>
          </div>
          <div className={styles.headerRight}>
            <Clock />
            <button className={styles.closeBtn} onClick={() => setVisible(false)}>✕</button>
          </div>
        </header>

        <div className={styles.body}>
          <div>
            <p className={styles.sectionLabel}>// {sectionLabels[section]?.toUpperCase() || section.toUpperCase()}</p>
            <TypedText text={message} />
          </div>

          <div className={styles.divider} />

          <div>
            {RESOURCES.map((r) => (
              <ResourceBar key={r.label} {...r} />
            ))}
          </div>
        </div>

        <footer className={styles.footer}>
          <span>NEXUS-7 · BUILD 4.2</span>
          <span>SECURE ■</span>
        </footer>
      </div>
    </div>
  );
};

export default Painel;