import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Footer from "src/components/Footer/Footer.jsx";
import CadastroDeVoluntarios from "./pages/CadastroDeVoluntarios/CadastroDeVoluntarios.jsx";
import ListaDeVoluntarios from "./pages/ListaDeVoluntarios/ListaDeVoluntarios.jsx";
import "./app.css";

function App() {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Home
          </Link>
          <div className="navbar-nav">
            <Link className="nav-link" to="/cadastrodevoluntarios">
              Cadastro de Voluntários
            </Link>
          </div>
          <div className="navbar-nav">
            <Link className="nav-link" to="/listadevoluntarios">
              Lista de Voluntários
            </Link>
          </div>
        </div>
      </nav>

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
