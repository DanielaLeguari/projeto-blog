
import PaginaPadrao from "components/PaginaPadrao";
import Rodape from "components/Rodape";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./components/menu";
import Inicio from "./pages/Inicio";
import SobreSerie from "./pages/SobreSerie";
import Opiniao from "./pages/Opiniao";


function AppRoutes() {
  return (
    <>
      <BrowserRouter>
        <Menu />
        <Routes>
            <Route path="/" element={<PaginaPadrao />}>
            <Route path="/" element={<Inicio />} />
            <Route path="/Opiniao" element={<Opiniao />} />
          </Route>
          <Route path="/SobreSerie" element={<SobreSerie />} />

          <Route path="*" element={<div>Erro 404-Página não encontrada</div>} />
        </Routes>
        <Rodape />
      </BrowserRouter>
    </>
  );
}

export default AppRoutes;
