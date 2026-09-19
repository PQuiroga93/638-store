function errorHandler(err, req, res, next) {
  console.error(err.stack);

  if (err.code === '23503') {
    return res.status(400).json({ error: 'Uno de los datos relacionados enviados no existe' });
  }

  res.status(500).json({ error: 'Error interno del servidor' });
}

module.exports = errorHandler;