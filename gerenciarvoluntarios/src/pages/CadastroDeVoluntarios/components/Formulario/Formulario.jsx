import { useEffect, useState } from "react";
import { Container, FormCheck, Button, Form } from "react-bootstrap";
import { aplicarMascaraCpf, aplicarMascaraTelefone } from "src/utils/mascaras";
import { useParams } from "react-router-dom";
import "./formulario.css";

function Formulario() {
  const { id } = useParams();
  const isEdit = !!id;

  const [formData, setFormData] = useState({
    nome: "",
    cpf: "",
    email: "",
    telefone: "",
  });

  const [errors, setErrors] = useState({});
  useEffect(() => {
    const mockData = {
      nome: "Adriano",
      cpf: "400.200.100-99",
      email: "adriano@gmail.com",
      telefone: "1499830-7893",
    };
    if (isEdit) {
      setFormData(mockData);
    }
  }, [id, isEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    let newValue = value;

    if (name === "cpf") newValue = aplicarMascaraCpf(value);
    if (name === "telefone") newValue = aplicarMascaraTelefone(value);

    setFormData({ ...formData, [name]: newValue });
  };

  const validarFormulario = () => {
    const novosErros = {};
    if (!formData.nome || formData.nome.length < 3) {
      novosErros.nome = "Digite o nome correto SEU BURRO";
    }
    // CPF
    if (!formData.cpf || formData.cpf.length < 14) {
      novosErros.cpf = "CPF inválido";
    }

    // Email
    if (!formData.email.includes("@")) {
      novosErros.email = "Email inválido";
    }

    // Telefone
    if (!formData.telefone || formData.telefone.length < 14) {
      novosErros.telefone = "Telefone inválido";
    }

    setErrors(novosErros);
    return Object.keys(novosErros).length === 0; // true se estiver tudo certo
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validarFormulario()) {
      console.log("Formulário válido:", formData);
      alert("Formulário enviado com sucesso!");
    } else {
      console.log("Erros:", errors);
    }
  };

  const handleReset = () => {
    setFormData({
      nome: "",
      cpf: "",
      email: "",
      telefone: "",
    });
    setErrors({});
  };
  return (
    <Container className="container-form">
      <Form onSubmit={handleSubmit}>
        <h3 className="titulo-form">
          {isEdit ? "Editar Voluntário" : "Dados Voluntários"}
        </h3>

        <Form.Group className="mb-1">
          <Form.Label>Nome</Form.Label>
          <Form.Control
            type="text"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            isInvalid={!!errors.nome}
          />
          <Form.Control.Feedback type="invalid">
            {errors.nome}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-1">
          <Form.Label>CPF</Form.Label>
          <Form.Control
            type="text"
            name="cpf"
            value={formData.cpf}
            onChange={handleChange}
            placeholder="Não utilize . ou - Ex: 00000000000"
            isInvalid={!!errors.cpf}
          />
          <Form.Control.Feedback type="invalid">
            {errors.cpf}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-1">
          <Form.Label>Telefone</Form.Label>
          <Form.Control
            type="text"
            name="telefone"
            value={formData.telefone}
            onChange={handleChange}
            isInvalid={!!errors.telefone}
            placeholder="(14) 9999-9999"
          />
          <Form.Control.Feedback type="invalid">
            {errors.telefone}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-2">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            isInvalid={!!errors.email}
            placeholder="joao@gmail.com"
          />
          <Form.Control.Feedback type="invalid">
            {errors.email}
          </Form.Control.Feedback>
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
          <Button
            type="reset"
            variant="outline-info"
            className="btn-form"
            onClick={handleReset}
          >
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
