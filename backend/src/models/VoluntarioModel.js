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
    const [rows] = await pool.query("SELECT * FROM voluntarios WHERE id = ?", [
      id,
    ]);
    return rows[0];
  }

  static async criar(voluntario) {
    const { nome, cpf, telefone, vlt_tel_Residencial, email, disponibilidade } =
      voluntario;
    const [result] = await pool.query(
      `INSERT INTO voluntarios (vlt_nome, vlt_cpf, vlt_telefone, vlt_tel_Residencial, vlt_email, vlt_disponibilidade) VALUES (?,?,?,?,?,?)`,
      [nome, cpf, telefone, vlt_tel_Residencial, email, disponibilidade]
    );
    return {
      id: result.insertId,
      nome,
      cpf,
      telefone,
      vlt_tel_Residencial,
      email,
      disponibilidade,
    };
  }

  // Atualizar Voluntário
  static async atualizar(id, voluntario) {
    const { nome, cpf, telefone, vlt_tel_Residencial, email, disponibilidade } =
      voluntario;
    const [result] = await pool.query(
      `UPDATE voluntarios SET vlt_nome = ?, vlt_cpf = ?, vlt_telefone = ?, vlt_tel_Residencial = ? ,vlt_email = ?, vlt_disponibilidade = ? WHERE id = ?`,
      [nome, cpf, telefone, vlt_tel_Residencial, email, disponibilidade, id]
    );

    if (result.affectedRows === 0) {
      return null;
    }
    return {
      id: result.insertId,
      nome,
      cpf,
      telefone,
      vlt_tel_Residencial,
      email,
      disponibilidade,
    };
  }

  // Excluir Voluntário

  static async excluir(id) {
    const [result] = await pool.query("DELETE FROM voluntarios WHERE id = ?", [
      id,
    ]);
    return result.affectedRows > 0;
  }
}
export default Voluntario;
