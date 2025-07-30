import { useState } from "react";
import { createPortal } from "react-dom";
import { useLanguage } from "../../contexts/LanguageContext";
import { translations } from "../../translations/translations";
import styles from "./Modal.module.scss";

function Modal({ text , resumo}) {
  const [modal, setModal] = useState(false);
  const { language } = useLanguage();
  const t = translations[language];
  
  const abrirModal = () => setModal(true);
  const fecharModal = () => setModal(false);

  return (
    <>
      <button onClick={abrirModal} className={`p-1 ${styles.botao}`}>
        {text}
      </button>
      {modal && createPortal(
        <div className={styles.modalOverlay} onClick={fecharModal}>
          <section className={styles.modal} onClick={e => e.stopPropagation()}>
           {resumo && (
            <div>
              <p>{resumo}</p>
              <button onClick={fecharModal}>{t.close}</button>
              </div>)
           }
          </section>
        </div>,
        document.body
      )}
    </>
  );
}

export default Modal;
