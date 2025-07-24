import { useState } from "react";
import { createPortal } from "react-dom";
import styles from "./Modal.module.scss";

function Modal({ text , resumo}) {
  const [modal, setModal] = useState(false);
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
           {resumo && <p>{resumo}</p>}
            <button onClick={fecharModal}>Fechar</button>
          </section>
        </div>,
        document.body
      )}
    </>
  );
}

export default Modal;
