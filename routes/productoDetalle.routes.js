const express = require('express');
const router = express.Router();
const controller = require('../controllers/productoDetalle.controller');
const validarProductoDetalle = require('../middlewares/validarProductoDetalle');


router.get('/', controller.obtenerTodos);
router.get('/:id', controller.obtenerPorId);
router.delete('/:id', controller.eliminar);
router.post('/', validarProductoDetalle, controller.crear);
router.put('/:id', validarProductoDetalle, controller.actualizar);


module.exports = router;