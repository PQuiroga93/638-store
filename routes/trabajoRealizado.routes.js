const express = require('express');
const router = express.Router();
const controller = require('../controllers/trabajoRealizado.controller');

router.get('/:categoria', controller.obtenerPorCategoria);
router.post('/', controller.crear);
router.delete('/:id', controller.eliminar);

module.exports = router;