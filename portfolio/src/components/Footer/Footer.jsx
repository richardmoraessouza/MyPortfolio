import styles from "./Footer.module.scss";
function Footer() {
  return (
    <section className={styles.redes_socias}>
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
            href="https://linkedin.com/in/your-profile"
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
            <img src="/Portf-lio/image/Gmail.png" alt="Gmail" />
          </a>
        </li>
      </ul>
      <p>&copy; 2025 Richard Moraes Souza. Todos os direitos reservados.</p>
    </section>
  );
}
export default Footer;
