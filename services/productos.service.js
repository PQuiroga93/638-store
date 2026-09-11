
const pool = require('../db');

exports.obtenerTodos = async () => {
  const resultado = await pool.query(`
    SELECT p.id, p.nombre, p.precio, cp.nombre AS categoria
    FROM productos p
    INNER JOIN categoria_producto cp ON p.categoria_producto_id = cp.id
    ORDER BY p.id
  `);
  return resultado.rows;
};

exports.obtenerPorId = async (id) => {
  const resultado = await pool.query(`
    SELECT p.id, p.nombre, p.precio, cp.nombre AS categoria
    FROM productos p
    INNER JOIN categoria_producto cp ON p.categoria_producto_id = cp.id
    WHERE p.id = $1
  `, [id]);
  return resultado.rows[0] || null;
};
exports.crear = async (datos) => {
  const { nombre, precio, categoria_producto_id } = datos;
  const resultado = await pool.query(
    'INSERT INTO productos (nombre, precio, categoria_producto_id) VALUES ($1, $2, $3) RETURNING *',
    [nombre, precio, categoria_producto_id]
  );
  return resultado.rows[0];
};

exports.actualizar = async (id, datos) => {
  const { nombre, precio, categoria_producto_id } = datos;
  const resultado = await pool.query(
    'UPDATE productos SET nombre=$1, precio=$2, categoria_producto_id=$3 WHERE id=$4 RETURNING *',
    [nombre, precio, categoria_producto_id, id]
  );
  return resultado.rows[0] || null;
};

exports.eliminar = async (id) => {
  const resultado = await pool.query('DELETE FROM productos WHERE id = $1 RETURNING *', [id]);
  return resultado.rows[0] || null;
};