const express = require('express');
const router = express.Router();
const controller = require('../controllers/categorias.controller');
const validarCategoria = require('../middlewares/validarCategoria');


router.get('/', controller.obtenerTodos);
router.get('/:id', controller.obtenerPorId);
router.delete('/:id', controller.eliminar);

router.post('/', validarCategoria, controller.crear);
router.put('/:id', validarCategoria, controller.actualizar);


module.exports = router;