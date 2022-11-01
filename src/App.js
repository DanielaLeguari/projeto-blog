import PaginaPadrao from "components/PaginaPadrao";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./components/menu";
import Inicio from "./pages/Inicio";
import SobreMim from "./pages/SobreMim";


function App() {
  return (
    <>
      <BrowserRouter>
        <Menu />
        <Routes>
        <Route path="/" element={<PaginaPadrao />} />
          <Route index element={<Inicio />} />
          <Route path="/SobreMim" element={<SobreMim />} />
          <Route path="*" element={<div>Erro 404-Página não encontrada</div>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
