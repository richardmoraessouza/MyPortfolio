
import "./index.css";
import Projeto from "./page/Projetos/Projetos.json";
import Front from "./page/Tecnologias/front.json";
import Back from "./page/Tecnologias/back.json";
import Git from "./page/Tecnologias/git.json";
import { ThemeProvider } from "./hooks/ThemeContext.jsx";
import { LanguageProvider } from "./hooks/LanguageContext.jsx";
import { lazy, Suspense, useMemo, useState, useEffect } from "react";
import Footer from "./page/Footer/Footer.jsx";
import Sobre_mim from "./page/Sobre_mim/Sobre_mim.jsx";
import Projetos from "./page/Projetos/Projetos.jsx";
import Header from "./page/Header/Header.jsx";
import Tecnologias from "./page/Tecnologias/Tecnologias.jsx";
import { StarBackground } from "./components/StarBackgroud/StarBackgroud.jsx";
import Painel from "./components/Painel/Painel.jsx";

const MouseTrail = lazy(() => import("./components/MouseTrail/MouseTrail.jsx"));

function App() {
  const isDesktop = useMemo(() => {
    if (typeof window === "undefined") return false;
    return window.innerWidth > 768;
  }, []);

  const [currentSection, setCurrentSection] = useState("home");

  useEffect(() => {
    const sections = ['home', 'sobre_mim', 'tecnologias', 'projetos', 'contatos'];
    const sectionMap = {
      home: 'home',
      sobre_mim: 'sobre',
      tecnologias: 'skills',
      projetos: 'projetos',
      contatos: 'contato'
    };

    const observers = sections.map(sectionId => {
      const element = document.getElementById(sectionId);
      if (!element) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              setCurrentSection(sectionMap[sectionId]);
            }
          });
        },
        { threshold: 0.2 }
      );
      observer.observe(element);
      return observer;
    });

    return () => {
      observers.forEach(obs => obs && obs.disconnect());
    };
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
          <Painel section={currentSection} />
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
