const service = require('../services/productos.service');

exports.obtenerTodos = async (req, res, next) => {
  try {
    const productos = await service.obtenerTodos();
    res.json(productos);
  } catch (error) { next(error); }
};

exports.obtenerPorId = async (req, res, next) => {
  try {
    const producto = await service.obtenerPorId(req.params.id);
    if (!producto) return res.status(404).json({ error: 'Producto no encontrado' });
    res.json(producto);
  } catch (error) { next(error); }
};

exports.crear = async (req, res, next) => {
  try {
    const nuevo = await service.crear(req.body);
    res.status(201).json(nuevo);
  } catch (error) { next(error); }
};

exports.actualizar = async (req, res, next) => {
  try {
    const actualizado = await service.actualizar(req.params.id, req.body);
    if (!actualizado) return res.status(404).json({ error: 'Producto no encontrado' });
    res.json(actualizado);
  } catch (error) { next(error); }
};

exports.eliminar = async (req, res, next) => {
  try {
    const eliminado = await service.eliminar(req.params.id);
    if (!eliminado) return res.status(404).json({ error: 'Producto no encontrado' });
    res.status(204).send();
  } catch (error) { next(error); }
};