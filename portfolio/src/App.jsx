


import "./index.css";
import Projeto from "./page/Projetos/Projetos.json";
import Front from "./page/Tecnologias/front.json";
import Back from "./page/Tecnologias/back.json";
import Git from "./page/Tecnologias/git.json";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import MouseTrail from "./components/MouseTrail/MouseTrail.jsx";
import Footer from "./page/Footer/Footer.jsx";
import Sobre_mim from "./page/Sobre_mim/Sobre_mim.jsx";
import Projetos from "./page/Projetos/Projetos.jsx";
import Header from "./page/Header/Header.jsx";
import Tecnologias from "./page/Tecnologias/Tecnologias.jsx";

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <>
          <MouseTrail/>
          <Header />
          <div className="container mx-auto px-4 py-8">
            <main>
              <Sobre_mim />
              <Tecnologias front={Front} back={Back} git={Git} />
              <Projetos projeto={Projeto} />
            </main>
          </div>
          <Footer />
        </>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
