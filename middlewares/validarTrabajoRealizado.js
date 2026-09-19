function validarTrabajoRealizado(req, res, next) {
  const { categoria, imagen_url } = req.body;

  if (!categoria || typeof categoria !== 'string' || categoria.trim() === '') {
    return res.status(400).json({ error: 'El campo categoria es obligatorio y debe ser texto' });
  }
  if (!imagen_url || typeof imagen_url !== 'string' || imagen_url.trim() === '') {
    return res.status(400).json({ error: 'El campo imagen_url es obligatorio y debe ser texto' });
  }

  next();
}

module.exports = validarTrabajoRealizado;