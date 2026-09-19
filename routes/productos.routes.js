const express = require('express');
const router = express.Router();
const controller = require('../controllers/productos.controller');
const validarProducto = require('../middlewares/validarProducto');

router.get('/', controller.obtenerTodos);
router.get('/:id', controller.obtenerPorId);
router.post('/', validarProducto, controller.crear);
router.put('/:id', validarProducto, controller.actualizar);
router.delete('/:id', controller.eliminar);

module.exports = router;