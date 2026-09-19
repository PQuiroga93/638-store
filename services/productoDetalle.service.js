const pool = require('../db');

exports.obtenerTodos = async () => {
  const resultado = await pool.query(`
    SELECT pd.id, p.nombre AS producto, pd.talle, c.nombre AS color, pd.stock, pd.precio_costo
    FROM producto_detalle pd
    INNER JOIN productos p ON pd.producto_id = p.id
    INNER JOIN color c ON pd.color_id = c.id
    ORDER BY pd.id
  `);
  return resultado.rows;
};

exports.obtenerPorId = async (id) => {
  const resultado = await pool.query(`
    SELECT pd.id, p.nombre AS producto, pd.talle, c.nombre AS color, pd.stock, pd.precio_costo
    FROM producto_detalle pd
    INNER JOIN productos p ON pd.producto_id = p.id
    INNER JOIN color c ON pd.color_id = c.id
    WHERE pd.id = $1
  `, [id]);
  return resultado.rows[0] || null;
};

exports.crear = async (datos) => {
  const { producto_id, talle, color_id, stock, precio_costo } = datos;
  const resultado = await pool.query(
    'INSERT INTO producto_detalle (producto_id, talle, color_id, stock, precio_costo) VALUES ($1, $2, $3, $4, $5) RETURNING *',
    [producto_id, talle, color_id, stock, precio_costo]
  );
  return resultado.rows[0];
};

exports.actualizar = async (id, datos) => {
  const { producto_id, talle, color_id, stock, precio_costo } = datos;
  const resultado = await pool.query(
    'UPDATE producto_detalle SET producto_id=$1, talle=$2, color_id=$3, stock=$4, precio_costo=$5 WHERE id=$6 RETURNING *',
    [producto_id, talle, color_id, stock, precio_costo, id]
  );
  return resultado.rows[0] || null;
};

exports.eliminar = async (id) => {
  const resultado = await pool.query('DELETE FROM producto_detalle WHERE id = $1 RETURNING *', [id]);
  return resultado.rows[0] || null;
};