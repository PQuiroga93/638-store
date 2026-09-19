const express = require('express');
const router = express.Router();
const controller = require('../controllers/trabajoRealizado.controller');
const validarTrabajoRealizado = require('../middlewares/validarTrabajoRealizado');


router.get('/:categoria', controller.obtenerPorCategoria);
router.post('/', validarTrabajoRealizado, controller.crear);
router.delete('/:id', controller.eliminar);

module.exports = router;