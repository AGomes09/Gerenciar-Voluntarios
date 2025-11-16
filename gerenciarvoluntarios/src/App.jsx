import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Footer from "src/components/Footer/Footer.jsx";
import CadastroDeVoluntarios from "./pages/CadastroDeVoluntarios/CadastroDeVoluntarios.jsx";
import ListaDeVoluntarios from "./pages/ListaDeVoluntarios/ListaDeVoluntarios.jsx";
import "./app.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>Ola</div>} />
        <Route
          path="/cadastrodevoluntarios"
          element={<CadastroDeVoluntarios />}
        />
        <Route
          path="/cadastrodevoluntarios/editar/:id"
          element={<CadastroDeVoluntarios />}
        />
        <Route
          path="/listadevoluntarios"
          element={<ListaDeVoluntarios />}
          exact
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
