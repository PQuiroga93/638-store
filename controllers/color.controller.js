const service = require('../services/color.service');

exports.obtenerTodos = async (req, res, next) => {
  try {
    res.json(await service.obtenerTodos());
  } catch (error) { next(error); }
};

exports.obtenerPorId = async (req, res, next) => {
  try {
    const color = await service.obtenerPorId(req.params.id);
    if (!color) return res.status(404).json({ error: 'Color no encontrado' });
    res.json(color);
  } catch (error) { next(error); }
};

exports.crear = async (req, res, next) => {
  try {
    res.status(201).json(await service.crear(req.body));
  } catch (error) { next(error); }
};

exports.actualizar = async (req, res, next) => {
  try {
    const actualizado = await service.actualizar(req.params.id, req.body);
    if (!actualizado) return res.status(404).json({ error: 'Color no encontrado' });
    res.json(actualizado);
  } catch (error) { next(error); }
};

exports.eliminar = async (req, res, next) => {
  try {
    const eliminado = await service.eliminar(req.params.id);
    if (!eliminado) return res.status(404).json({ error: 'Color no encontrado' });
    res.status(204).send();
  } catch (error) { next(error); }
};