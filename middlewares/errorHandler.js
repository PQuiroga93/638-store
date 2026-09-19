function errorHandler(err, req, res, next) {
  console.error(err.stack);

  // Codigo de error de PostgreSQL cuando una clave foranea no existe
  if (err.code === '23503') {
    return res.status(400).json({ error: 'La categoria_producto_id enviada no existe' });
  }

  res.status(500).json({ error: 'Error interno del servidor' });
}

module.exports = errorHandler;