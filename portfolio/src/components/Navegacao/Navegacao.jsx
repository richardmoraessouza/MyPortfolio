import { useState } from "react";
import styles from "./Navegacao.module.css"
import { useLanguage } from "../../contexts/LanguageContext";
import { translations } from "../../translations/translations";

function Navegacao() {
    const [fecha, setFechar] = useState(false)
    const { language } = useLanguage();
    const t = translations[language];
    
    const modal = () => {
        setFechar(true);
    }
    return (
        <>
        {! fecha && (
           <section className={styles.navegacao}>
            <div className="p-5"></div>
                <button className={styles.fechar} onClick={modal}>☰</button>
                <section className={styles.map}>
                    <nav>
                        <ul>
                            <li>
                            <a href="#home">{t.home}</a>
                            </li>
                            <li>
                                <a href="#sobre_mim">{t.about}</a>
                            </li>
                            <li>
                                <a href="#tecnologias">{t.technologies}</a>
                            </li>
                            <li>
                                <a href="#projetos">{t.projects}</a>
                            </li>
                            <li>
                                <a href="#contatos">{t.contact}</a>
                            </li>
                        </ul>
                    </nav>
                </section>
                    <nav className={styles.redes_socias}>
                        <ul
                                className={`align-items-center justify-content-center d-inline-flex gap-4`}
                              >
                                <li>
                                  <a
                                    href="https://wa.me/47999326217"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title="WhatsApp"
                                  >
                                    <img
                                      src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                                      alt="WhatsApp"
                                      width="32"
                                    />{" "}
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="https://github.com/richardmoraessouza"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title="GitHub"
                                  >
                                    <img
                                      src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
                                      alt="GitHub"
                                      width="32"
                                    />{" "}
                                  </a>
                                </li>
                        
                                <li>
                                  <a
                                    href="https://www.linkedin.com/in/richard-moraes-souza/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title="LinkedIn"
                                  >
                                    <img
                                      src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
                                      alt="LinkedIn"
                                      width="32"
                                    />
                                    {""}
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="https://mail.google.com/mail/?view=cm&fs=1&to=richardmoraessouza2006@gmail.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title="Gmail"
                                  >
                                    <img src="/image/Gmail.png" alt="Gmail" />
                                  </a>
                                </li>
                              </ul>
                    </nav>
            </section>
        ) 
        }
        </>
    )
}
export default Navegacao;