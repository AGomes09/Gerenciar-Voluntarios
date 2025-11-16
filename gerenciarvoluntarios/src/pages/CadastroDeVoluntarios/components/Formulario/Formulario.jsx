import { useEffect, useState } from "react";
import { Container, FormCheck, Button, Form } from "react-bootstrap";
import { aplicarMascaraCpf, aplicarMascaraTelefone } from "src/utils/mascaras";
import { useParams } from "react-router-dom";
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";
import "./formulario.css";

function Formulario() {
  const { id } = useParams();
  const isEdit = !!id;

  const [formData, setFormData] = useState({
    id: null,
    nome: "",
    cpf: "",
    email: "",
    telefone: "",
    disponibilidade: "",
  });
  const [showToast, setShowToast] = useState(false);
  const [errors, setErrors] = useState({});

  const toggleShowToast = () => setShowToast(!showToast);
  useEffect(() => {
    if (isEdit) {
      const dados = JSON.parse(localStorage.getItem("voluntarios"));
      if (dados.length) {
        const findVoluntario = dados.find((voluntario) => {
          return Number(voluntario.id) === Number(id);
        });
        if (findVoluntario) {
          setFormData(findVoluntario);
        }
      }
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

    // ID
    if (!formData.id) {
      novosErros.id = "Digite o ID";
    }

    // Nome
    if (!formData.nome || formData.nome.length < 3) {
      novosErros.nome = "Digite o nome correto";
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

    // Disponibilidade
    if (!formData.disponibilidade) {
      novosErros.disponibilidade = "Coloque a sua disponibilidade";
    }

    setErrors(novosErros);
    return Object.keys(novosErros).length === 0; // true se estiver tudo certo
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validarFormulario()) {
      if (isEdit) {
        const dados = JSON.parse(localStorage.getItem("voluntarios"));
        const updateVoluntarios = dados.map((voluntario) => {
          if (Number(voluntario.id) === Number(id)) {
            return formData;
          }
          return voluntario;
        });

        localStorage.setItem("voluntarios", JSON.stringify(updateVoluntarios));
        toggleShowToast();
        return;
      }
      const dados = JSON.parse(localStorage.getItem("voluntarios")) || [];
      const updateVoluntarios = [...dados, formData];
      localStorage.setItem("voluntarios", JSON.stringify(updateVoluntarios));
      toggleShowToast();
      handleReset();
    }
  };

  const handleReset = () => {
    setFormData({
      id: null,
      nome: "",
      cpf: "",
      email: "",
      telefone: "",
      disponibilidade: "",
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
          <Form.Label>ID</Form.Label>
          <Form.Control
            type="text"
            name="id"
            value={formData.id}
            onChange={handleChange}
            isInvalid={!!errors.id}
          />
          <Form.Control.Feedback type="invalid">
            {errors.id}
          </Form.Control.Feedback>
        </Form.Group>
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
          <Form.Control
            as="textarea"
            name="disponibilidade"
            rows={3}
            value={formData.disponibilidade}
            onChange={handleChange}
            isInvalid={!!errors.disponibilidade}
          />
          <Form.Control.Feedback type="invalid">
            {errors.disponibilidade}
          </Form.Control.Feedback>
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
            {isEdit ? "Salvar" : "Cadastrar"}
          </Button>
        </div>
      </Form>
      <ToastContainer position="bottom-center">
        <Toast
          show={showToast}
          onClose={() => setShowToast(false)}
          delay={3000}
          autohide
          bg="success"
        >
          <Toast.Body className="text-white">
            {`Voluntário ${isEdit ? "Editado" : "Cadastrado"} com Sucesso!!`}
          </Toast.Body>
        </Toast>
      </ToastContainer>
    </Container>
  );
}

export default Formulario;
