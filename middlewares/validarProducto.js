function validarProducto(req, res, next) {
  const { nombre, precio, categoria_producto_id } = req.body;

  if (!nombre || typeof nombre !== 'string' || nombre.trim() === '') {
    return res.status(400).json({ error: 'El campo nombre es obligatorio y debe ser texto' });
  }
  if (precio === undefined || typeof precio !== 'number' || precio <= 0) {
    return res.status(400).json({ error: 'El campo precio es obligatorio y debe ser un numero mayor a 0' });
  }
  if (!categoria_producto_id || typeof categoria_producto_id !== 'number') {
    return res.status(400).json({ error: 'El campo categoria_producto_id es obligatorio y debe ser numerico' });
  }

  next(); // Todo esta en orden: dejamos pasar el request
}

module.exports = validarProducto;