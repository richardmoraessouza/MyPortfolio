import Header from "./components/Header/Header.jsx";
import Sobre_mim from "./components/sobre_mim/sobre_mim.jsx";
import Tecnologias from "./components/Tecnologias/Tecnologias.jsx";
import Footer from "./components/Footer/Footer.jsx";
import "./index.css";

function App() {
  return (
    <>
      <Header />
      <div className="p-5"></div>
      <main>
        <Sobre_mim />
        <div className="p-5"></div>
        <Tecnologias />
      </main>
      <div className="p-5"></div>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
export default App;
