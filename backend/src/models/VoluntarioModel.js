import pool from "../config/database.js";

class Voluntario {
  //Listar todos voluntários
  static async listarTodos() {
    const [rows] = await pool.query(
      "SELECT * FROM voluntarios order by vlt_nome "
    );
    return rows;
  }

  // Buscar por ID
  static async buscarPorId(id) {
    const [rows] = await pool.query("select * from voluntarios WHERE id = ?", [
      id,
    ]);
    return rows[0];
  }

  static async criar(voluntario) {
    const { id, nome, cpf, telefone, email, disponibilidade } = voluntario;
    const [result] = await pool.query(
      `INSERT INTO voluntarios (id, vlt_nome, vlt_cpf, vlt_telefone, vlt_email, vlt_disponibilidade) VALUES (?,?,?,?,?,?)`,
      [id, nome, cpf, telefone, email, disponibilidade]
    );
    return { id: result.insertId, nome, cpf, telefone, email, disponibilidade };
  }

  // Atualizar Voluntário
  static async atualizar(id, voluntario) {
    const { nome, cpf, telefone, email, disponibilidade } = voluntario;
    const [result] = await pool.query(
      `UPDATE voluntarios SET vlt_nome = ?, vlt_cpf = ?, vlt_telefone = ?, vlt_email = ?, vlt_disponibilidade = ? WHERE id = ?`,
      [nome, cpf, telefone, email, disponibilidade, id]
    );

    if (result.affectedRows === 0) {
      return null;
    }
    return { id: result.insertId, nome, cpf, telefone, email, disponibilidade };
  }

  // Excluir Voluntário

  static async excluir(id) {
    const [result] = await pool.query("DELETE FROM voluntarios WHERE id = ?", [
      id,
    ]);
    return result.affectedRows > 0;
  }

  //Filtrar Voluntário

  static async filtrar(termo) {
    const termoBusca = `%${termo}%`;
    const [rows] = await pool.query(
      `SELECT * FROM voluntarios WHERE id like ? OR nome like ? OR cpf like ? OR telefone like ? OR email like ? OR disponibilidade like ? ORDER BY id DESC`,
      [termoBusca, termoBusca, termoBusca, termoBusca, termoBusca, termoBusca]
    );
  }
}
export default Voluntario;
