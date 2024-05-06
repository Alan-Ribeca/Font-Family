import { Footer } from "./components/footer/Footer";
import { Container } from "./components/grid/Container";
import { Header } from "./components/navbar/Header";
import { StateCompo } from "./context/StateCompo";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/App.scss";
import { Favorito } from "./components/favorito/Favorito";

function App() {
  return (
    <BrowserRouter>
      <StateCompo>
        <div className="body">
          <Header />
          <Routes>
            <Route path="/" element={<Container />}/>
            <Route path="/favorito" element={<Favorito />}/>
          </Routes>
        </div>
        <Footer />
      </StateCompo>
    </BrowserRouter>
  );
}

export default App;
