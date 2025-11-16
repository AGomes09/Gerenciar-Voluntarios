import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import Header from "src/components/Header/Header.jsx";
import Table from "react-bootstrap/Table";
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";
import "./listadevoluntarios.css";

function ListaDeVoluntarios() {
  const [voluntarios, setVoluntarios] = useState([]);
  const [search, setSearch] = useState("");
  const [showToast, setShowToast] = useState(false);

  const toggleShowToast = () => setShowToast(!showToast);

  useEffect(() => {
    const dados = JSON.parse(localStorage.getItem("voluntarios"));
    if (dados && dados.length) {
      setVoluntarios(dados);
    }
  }, []);

  const handleExcluirChange = (id) => {
    const dados = JSON.parse(localStorage.getItem("voluntarios"));
    const updateVoluntarios = dados.filter((voluntario) => {
      return Number(voluntario.id) != Number(id);
    });
    setVoluntarios(updateVoluntarios);
    toggleShowToast();
  };

  if (!voluntarios.length) {
    return (
      <>
        <Header title="Lista de Voluntários" background="#7BB1E2" />
        <main className="empty-list">
          <p className="empty-message">Nenhum voluntário cadastrado</p>
        </main>
      </>
    );
  }
  const voluntariosFiltrados = voluntarios.filter(
    (v) =>
      v.nome.toLowerCase().includes(search.toLowerCase()) ||
      v.cpf.toLowerCase().includes(search.toLowerCase()) ||
      v.email.toLowerCase().includes(search.toLowerCase()) ||
      v.telefone.toLowerCase().includes(search.toLowerCase()) ||
      String(v.id).includes(search)
  );
  return (
    <>
      <Header title="Lista de Voluntários" background="#7BB1E2" />

      <main className="d-flex flex-column min-vh-100">
        <div className="d-flex justify-content-center mt-4">
          <input
            type="text"
            placeholder="Pesquisar..."
            className="form-control w-50"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="main d-flex justify-content-center">
          <Table
            striped
            bordered
            hover
            responsive
            className="mt-5 text-center w-100"
          >
            <thead>
              <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>CPF</th>
                <th>Telefone</th>
                <th>Email</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {voluntariosFiltrados.map((voluntario) => (
                <tr key={voluntario.id}>
                  <td>{voluntario.id}</td>
                  <td>{voluntario.nome}</td>
                  <td>{voluntario.cpf}</td>
                  <td>{voluntario.telefone}</td>
                  <td>{voluntario.email}</td>
                  <td className="d-flex gap-2">
                    <Link
                      to={`/cadastrodevoluntarios/editar/${voluntario.id}`}
                      className="btn btn-primary btn-sm"
                    >
                      Editar
                    </Link>
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => handleExcluirChange(voluntario.id)}
                    >
                      Excluir
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </main>
      <ToastContainer position="bottom-center">
        <Toast
          show={showToast}
          onClose={() => setShowToast(false)}
          delay={3000}
          autohide
          bg="danger"
        >
          <Toast.Body className="text-white text-center">
            {`Voluntário Excluído com Sucesso!!`}
          </Toast.Body>
        </Toast>
      </ToastContainer>
    </>
  );
}

export default ListaDeVoluntarios;
