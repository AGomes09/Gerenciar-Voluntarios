import { Container } from "react-bootstrap";
import Formulario from "../Formulario/Formulario.jsx";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./main.css";

function Main() {
  return (
    <main>
      <section className="container-top mt-5">
        <Container className="d-flex justify-content-center gap-5">
          <div>
            <button type="button" className="btn btn-semborda btn-cadastro">
              <i class="bi bi-plus-lg"></i> NOVO VOLUNTÁRIO
            </button>
          </div>

          <div>
            <button type="button" className="btn btn-semborda btn-atualizar">
              <i class="bi bi-plus-lg"></i> ATUALIZAR
            </button>
          </div>

          <div>
            <button
              type="button"
              className="btn btn-semborda btn-lista-voluntarios"
              width="200"
            >
              <i class="bi bi-plus-lg"></i> LISTA DE VOLUNTÁRIOS
            </button>
          </div>
        </Container>
      </section>
      <section className="section-hero">
        <Container className="container-hero">
          <Formulario />
        </Container>
      </section>
    </main>
  );
}

export default Main;
