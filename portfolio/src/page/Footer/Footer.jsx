import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { useLanguage } from "../../hooks/LanguageContext";
import { translations } from "../../hooks/translations";
import styles from "./Footer.module.css";

const SERVICE_ID  = import.meta.env.VITE_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
const PUBLIC_KEY  = import.meta.env.VITE_PUBLIC_KEY;

const sociais = [
  {
    href:  "https://wa.me/47999326217",
    title: "WhatsApp",
    src:   "https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg",
    alt:   "WhatsApp",
    color: "#25d366",
  },
  {
    href:  "https://github.com/richardmoraessouza",
    title: "GitHub",
    src:   "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg",
    alt:   "GitHub",
    color: "#e0e0e0",
    invert: true,
  },
  {
    href:  "https://www.linkedin.com/in/richard-moraes-souza/",
    title: "LinkedIn",
    src:   "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png",
    alt:   "LinkedIn",
    color: "#0077b5",
  },
  {
    href:  "https://mail.google.com/mail/?view=cm&fs=1&to=richardmoraessouza2006@gmail.com",
    title: "Gmail",
    src:   "/image/Gmail.png",
    alt:   "Gmail",
    color: "#ea4335",
  },
];

function Footer() {
  const { language } = useLanguage();
  const t = translations[language];
  const formRef = useRef();

  const [status, setStatus] = useState("idle");
  const [form, setForm]     = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus("sending");
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY);
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  const isEN = language === "en";
  const labels = {
    coords:   "SECTOR-7G · DEEP SPACE CONTACT",
    title:    isEN ? "Ready to launch?" : "Pronto para decolar?",
    sub:      isEN ? "Send a transmission. I respond within the orbit." : "Envie uma transmissão. Respondo dentro da órbita.",
    name:     isEN ? "Your name" : "Seu nome",
    email:    isEN ? "Your e-mail" : "Seu e-mail",
    message:  isEN ? "Your message" : "Sua mensagem",
    send:     isEN ? "Transmit" : "Transmitir",
    sending:  isEN ? "Transmitting…" : "Transmitindo…",
    success:  isEN ? "Transmission received. Standing by." : "Transmissão recebida. Aguarde retorno.",
    error:    isEN ? "Signal lost. Try again." : "Sinal perdido. Tente novamente.",
  };

  return (
    <footer id="contatos" className={styles.footer}>

      {/* linha de sinal */}
      <div className={styles.signalLine} />

      <div className={styles.inner}>

        {/* coordenada */}
        <span className={styles.coords}>{labels.coords}</span>

        {/* título */}
        <h2 className={styles.ctaTitle}>{labels.title}</h2>
        <p className={styles.ctaSub}>{labels.sub}</p>

        {/* formulário */}
        <form ref={formRef} onSubmit={handleSubmit} className={styles.form} noValidate>

          <div className={styles.formRow}>
            <div className={styles.inputWrap}>
              <span className={styles.inputTag}>01</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder={labels.name}
                className={styles.input}
                required
              />
            </div>
            <div className={styles.inputWrap}>
              <span className={styles.inputTag}>02</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder={labels.email}
                className={styles.input}
                required
              />
            </div>
          </div>

          <div className={styles.inputWrap}>
            <span className={styles.inputTag}>03</span>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder={labels.message}
              className={`${styles.input} ${styles.textarea}`}
              rows={4}
              required
            />
          </div>

          <button
            type="submit"
            className={styles.sendBtn}
            disabled={status === "sending"}
          >
            {/* cantos decorativos */}
            <span className={`${styles.bc} ${styles.bcTL}`} />
            <span className={`${styles.bc} ${styles.bcTR}`} />
            <span className={`${styles.bc} ${styles.bcBL}`} />
            <span className={`${styles.bc} ${styles.bcBR}`} />

            <span className={styles.sendIcon}>
              {status === "sending" ? "◌" : "↗"}
            </span>
            <span className={styles.sendLabel}>
              {status === "sending" ? labels.sending : labels.send}
            </span>
          </button>

          {status === "success" && (
            <p className={styles.feedOk}>✦ {labels.success}</p>
          )}
          {status === "error" && (
            <p className={styles.feedErr}>✕ {labels.error}</p>
          )}
        </form>

        {/* sociais */}
        <ul className={styles.sociais}>
          {sociais.map(({ href, title, src, alt, color, invert }) => (
            <li key={title}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                title={title}
                className={styles.socialLink}
                style={{ '--hc': color }}
              >
                <span className={styles.iconWrap}>
                  <img src={src} alt={alt} width="20" className={invert ? styles.invertImg : ""} />
                </span>
                <span className={styles.socialLabel}>{title}</span>
              </a>
            </li>
          ))}
        </ul>


        <div className={styles.bottom}>
          <span className={styles.brandDot} />
          <span className={styles.brandName}>Richard Moraes</span>
          <span className={styles.brandSep}>·</span>
          <span className={styles.copy}>{t.footerText}</span>
        </div>

      </div>
    </footer>
  );
}

export default Footer;