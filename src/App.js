import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./components/Inicio"
import FuturasCarreras from "./components/FuturasCarreras"
import UltimasCarreras from "./components/UltimasCarreras";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inicio/>}></Route>
          <Route path="/futuras-carreras" element={<FuturasCarreras/>}></Route>
          <Route path="/ultimas-carreras" element={<UltimasCarreras/>}></Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App