import { Container } from "react-bootstrap";
import Header from "src/components/Header/Header.jsx";
import Formulario from "./components/Formulario/Formulario.jsx";
import "bootstrap-icons/font/bootstrap-icons.css";

import "./cadastrodevoluntarios.css";

function CadastroDeVoluntarios() {
  return (
    <>
      <Header title="Cadastro de Voluntários" background="#009951" />
      <div className="d-flex flex-column min-vh-100">
        <main>
          <section className="section-hero">
            <Container className="container-hero">
              <Formulario />
            </Container>
          </section>
        </main>
      </div>
    </>
  );
}

export default CadastroDeVoluntarios;
