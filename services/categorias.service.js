const pool = require('../db');

exports.obtenerTodos = async () => {
  const resultado = await pool.query('SELECT * FROM categoria_producto ORDER BY id');
  return resultado.rows;
};

exports.obtenerPorId = async (id) => {
  const resultado = await pool.query('SELECT * FROM categoria_producto WHERE id = $1', [id]);
  return resultado.rows[0] || null;
};

exports.crear = async (datos) => {
  const { nombre } = datos;
  const resultado = await pool.query(
    'INSERT INTO categoria_producto (nombre) VALUES ($1) RETURNING *',
    [nombre]
  );
  return resultado.rows[0];
};

exports.actualizar = async (id, datos) => {
  const { nombre } = datos;
  const resultado = await pool.query(
    'UPDATE categoria_producto SET nombre=$1 WHERE id=$2 RETURNING *',
    [nombre, id]
  );
  return resultado.rows[0] || null;
};

exports.eliminar = async (id) => {
  const resultado = await pool.query('DELETE FROM categoria_producto WHERE id = $1 RETURNING *', [id]);
  return resultado.rows[0] || null;
};