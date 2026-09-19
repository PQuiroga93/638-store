const pool = require('../db');

exports.obtenerPorCategoria = async (categoria) => {
  const resultado = await pool.query(
    'SELECT * FROM trabajo_realizado WHERE categoria = $1 ORDER BY id DESC',
    [categoria]
  );
  return resultado.rows;
};

exports.crear = async (datos) => {
  const { categoria, imagen_url, descripcion } = datos;
  const resultado = await pool.query(
    'INSERT INTO trabajo_realizado (categoria, imagen_url, descripcion) VALUES ($1, $2, $3) RETURNING *',
    [categoria, imagen_url, descripcion]
  );
  return resultado.rows[0];
};

exports.eliminar = async (id) => {
  const resultado = await pool.query('DELETE FROM trabajo_realizado WHERE id = $1 RETURNING *', [id]);
  return resultado.rows[0] || null;
};