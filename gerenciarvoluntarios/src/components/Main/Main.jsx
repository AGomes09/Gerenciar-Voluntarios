import { Container, FormCheck } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./main.css";

function Formulario() {
  return (
    <Container className="container-form">
      <Form>
        <Form.Group>
          <h3 className="titulo-form">Dados do Voluntário</h3>
        </Form.Group>
        <Form.Group className="mb-1">
          <Form.Label>Nome</Form.Label>
          <Form.Control type="text" />
        </Form.Group>

        <Form.Group className="mb-1">
          <Form.Label>CPF</Form.Label>
          <Form.Control type="text" />
        </Form.Group>

        <Form.Group className="mb-1">
          <Form.Label>Telefone</Form.Label>
          <Form.Control type="text" />
        </Form.Group>

        <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="joao@gmail.com" />
        </Form.Group>

        <Form.Group className="mb-1" controlId="ControlTextarea">
          <Form.Label>Example textarea</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>

        <Form.Group>
          <FormCheck
            type="checkbox"
            label="Aceito receber comunicados por e-mail"
          ></FormCheck>
          <FormCheck
            type="checkbox"
            label="Li e concordo com os Termos de Voluntário"
          ></FormCheck>
        </Form.Group>
        <div className="opcao-form">
          <Button type="reset" variant="danger" className="btn-form">
            Cancelar
          </Button>
          <Button type="submit" variant="success" className="btn-form">
            Enviar
          </Button>
        </div>
      </Form>
    </Container>
  );
}

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
