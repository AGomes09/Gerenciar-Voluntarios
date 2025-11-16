import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import NavBar from "../NavBar/NavBar.jsx";
import Stack from "react-bootstrap/Stack";
import "./header.css";
function Header({ title, background }) {
  return (
    <header>
      <NavBar />
      <Stack direction="horizontal" className="d-block p-0 m-0">
        <div className="d-block p-2 text-center" style={{ background }}>
          <h1 style={{ color: "#FFF" }}>{title}</h1>
        </div>
      </Stack>
      <section className="container-top mt-5">
        <Container className="d-flex justify-content-center gap-5">
          <div>
            <button type="button" className="btn btn-semborda btn-cadastro">
              <Link className="nav-link" to="/cadastrodevoluntarios">
                <i class="bi bi-plus-lg"></i> NOVO VOLUNTÁRIO
              </Link>
            </button>
          </div>

          <div>
            <button
              type="button"
              className="btn btn-semborda btn-lista-voluntarios"
              width="200"
            >
              <Link className="nav-link" to="/listadevoluntarios">
                <i class="bi bi-plus-lg"></i> LISTA DE VOLUNTÁRIOS
              </Link>
            </button>
          </div>
        </Container>
      </section>
    </header>
  );
}

export default Header;
