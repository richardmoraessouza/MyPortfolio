
import "./index.css";
import Projeto from "./page/Projetos/Projetos.json";
import Front from "./page/Tecnologias/front.json";
import Back from "./page/Tecnologias/back.json";
import Git from "./page/Tecnologias/git.json";
import { ThemeProvider } from "./hooks/ThemeContext.jsx";
import { LanguageProvider } from "./hooks/LanguageContext.jsx";
import { lazy, Suspense, useMemo } from "react";
import Footer from "./page/Footer/Footer.jsx";
import Sobre_mim from "./page/Sobre_mim/Sobre_mim.jsx";
import Projetos from "./page/Projetos/Projetos.jsx";
import Header from "./page/Header/Header.jsx";
import Tecnologias from "./page/Tecnologias/Tecnologias.jsx";
import { StarBackground } from "./components/StarBackgroud/StarBackgroud.jsx";

const MouseTrail = lazy(() => import("./components/MouseTrail/MouseTrail.jsx"));

function App() {
  const isDesktop = useMemo(() => {
    if (typeof window === "undefined") return false;
    return window.innerWidth > 768;
  }, []);

  return (
    <ThemeProvider>
      <LanguageProvider>
        <>
          <StarBackground />
          {isDesktop && (
            <Suspense fallback={null}>
              <MouseTrail />
            </Suspense>
          )}
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
