import { Container, FormCheck, Button, Form } from "react-bootstrap";
import "./formulario.css";

function Formulario() {
  return (
    <Container className="container-form">
      <Form>
        <h3 className="titulo-form">Dados do Voluntário</h3>

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

        <Form.Group className="mb-2">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="joao@gmail.com" />
        </Form.Group>

        <Form.Group className="mb-1">
          <Form.Label>Qual a disponibilidade e interesse?</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>

        <Form.Group className="mb-3">
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
          <Button type="reset" variant="outline-info" className="btn-form">
            Resetar
          </Button>
          <Button type="submit" variant="success" className="btn-form">
            Enviar
          </Button>
        </div>
      </Form>
    </Container>
  );
}

export default Formulario;
