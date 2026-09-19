const express = require('express');
const router = express.Router();
const controller = require('../controllers/color.controller');
const validarColor = require('../middlewares/validarColor');


router.get('/', controller.obtenerTodos);
router.get('/:id', controller.obtenerPorId);

router.delete('/:id', controller.eliminar);
router.post('/', validarColor, controller.crear);
router.put('/:id', validarColor, controller.actualizar);

module.exports = router;