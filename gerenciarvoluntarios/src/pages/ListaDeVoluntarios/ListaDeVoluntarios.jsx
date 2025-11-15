import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import Header from "src/components/Header/Header.jsx";
import Table from "react-bootstrap/Table";

import "./listadevoluntarios.css";

function ListaDeVoluntarios() {
  const [voluntarios, setVoluntarios] = useState([]);

  useEffect(() => {
    const dados = JSON.parse(localStorage.getItem("voluntarios"));
    if (dados && dados.length) {
      setVoluntarios(dados);
    }
  }, []);

  if (!voluntarios.length) {
    return <div>teste</div>;
  }

  return (
    <>
      <Header title="Lista de Voluntários" background="#7BB1E2" />
      <main className="d-flex flex-column min-vh-100">
        <div className="main">
          <Table striped bordered hover responsive className="mt-5 ">
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
              {voluntarios.map((voluntario) => (
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
                    <Button variant="danger" size="sm">
                      Excluir
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </main>
    </>
  );
}

export default ListaDeVoluntarios;
