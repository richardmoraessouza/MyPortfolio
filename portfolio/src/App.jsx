import Header from "./components/Header/Header.jsx";
import Sobre_mim from "./components/sobre_mim/sobre_mim.jsx";
import Tecnologias from "./components/Tecnologias/Tecnologias.jsx";
import "./index.css";

function App() {
  return (
    <>
      <Header />
      <main>
        <Sobre_mim />
        <Tecnologias />
      </main>
    </>
  );
}
export default App;
