import Header from "./components/Header/Header.jsx";
import Sobre_mim from "./components/Sobre_mim/Sobre_mim.jsx";
import Tecnologias from "./components/Tecnologias/Tecnologias.jsx";
import Footer from "./components/Footer/Footer.jsx";
import "./index.css";
import Projetos from "./components/Projetos/Projetos.jsx";
import Projeto from "./components/Projetos/Projetos.json";
import Front from "./components/Tecnologias/front.json";
import Back from "./components/Tecnologias/back.json";
import Git from "./components/Tecnologias/git.json";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <>
          <Header />
          <div className="container mx-auto px-4 py-8">
            <main>
              <Sobre_mim />
              <Tecnologias front={Front} back={Back} git={Git}/>
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
