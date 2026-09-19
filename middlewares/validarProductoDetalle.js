function validarProductoDetalle(req, res, next) {
  const { producto_id, talle, color_id, stock, precio_costo } = req.body;

  if (!producto_id || typeof producto_id !== 'number') {
    return res.status(400).json({ error: 'El campo producto_id es obligatorio y debe ser numérico' });
  }
  if (!talle || typeof talle !== 'string' || talle.trim() === '') {
    return res.status(400).json({ error: 'El campo talle es obligatorio y debe ser texto' });
  }
  if (!color_id || typeof color_id !== 'number') {
    return res.status(400).json({ error: 'El campo color_id es obligatorio y debe ser numérico' });
  }
  if (stock === undefined || typeof stock !== 'number' || stock < 0) {
    return res.status(400).json({ error: 'El campo stock es obligatorio y debe ser un número mayor o igual a 0' });
  }
  if (precio_costo !== undefined && precio_costo !== null && (typeof precio_costo !== 'number' || precio_costo < 0)) {
    return res.status(400).json({ error: 'El campo precio_costo debe ser un número mayor o igual a 0' });
  }

  next();
}

module.exports = validarProductoDetalle;