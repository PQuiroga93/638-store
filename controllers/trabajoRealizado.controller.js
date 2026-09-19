const service = require('../services/trabajoRealizado.service');

exports.obtenerPorCategoria = async (req, res, next) => {
  try {
    res.json(await service.obtenerPorCategoria(req.params.categoria));
  } catch (error) { next(error); }
};

exports.crear = async (req, res, next) => {
  try {
    res.status(201).json(await service.crear(req.body));
  } catch (error) { next(error); }
};

exports.eliminar = async (req, res, next) => {
  try {
    const eliminado = await service.eliminar(req.params.id);
    if (!eliminado) return res.status(404).json({ error: 'No encontrado' });
    res.status(204).send();
  } catch (error) { next(error); }
};