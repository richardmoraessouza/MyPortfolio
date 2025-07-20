import { useState } from "react";
import styles from "./Modal.module.css";
function Button({ text }) {
  const [modal, setModal] = useState(false);
  const abrirModal = () => {
    setModal(!modal);
  };
  return (
    <div>
      <button onClick={abrirModal} className={`p-1 ${styles.botao}`}>
        {text}
      </button>
      {modal && (
        <div className={styles.cu}>
          <section className={styles.modal}>
            Olá! Eu sou o HTML — sigla para HyperText Markup Language, ou em
            português, Linguagem de Marcação de Hipertexto. Nasci em 1991,
            criado por Tim Berners-Lee, o pai da web. Desde então, sou o
            esqueleto de quase todas as páginas da internet que você visita. Eu
            não sou uma linguagem de programação. Sou uma linguagem de marcação,
            o que significa que organizo e estruturo o conteúdo. Sozinho, eu sou
            meio básico. Mas, junto com o CSS (que me deixa bonito) e o
            JavaScript (que me dá vida e interatividade), faço maravilhas. 📦 O
            que eu faço? Estruturo textos, imagens, vídeos, botões, formulários
            e tudo mais. Digo ao navegador: “isso é um título”, “isso é um
            parágrafo”, “isso é uma imagem”. Ajudo na acessibilidade, SEO (para
            mecanismos de busca) e na organização do conteúdo da web.
          </section>
        </div>
      )}
    </div>
  );
}

export default Button;
