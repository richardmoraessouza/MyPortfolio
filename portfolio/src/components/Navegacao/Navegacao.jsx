import { useState } from "react";
import styles from "./Navegacao.module.scss"
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
                </section>
        ) 
        }  
        </>
    )
}
export default Navegacao;