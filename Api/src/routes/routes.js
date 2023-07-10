const express = require('express')
const router = express.Router()
const clientesController = require('../controllers/clientes.controllers');

router.get('/all', clientesController.findAll);

router.post('/nuevoCliente', clientesController.create);

router.get('/:id', clientesController.findById);

router.put('/:id', clientesController.update);

// router.delete('/:id', employeeController.delete);
module.exports = router