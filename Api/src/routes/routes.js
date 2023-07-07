const express = require('express')
const router = express.Router()
const clientesController = require('../controllers/clientes.controllers');

// router.get('/', employeeController.findAll);

router.post('/nuevoCliente', clientesController.create);

// router.get('/:id', employeeController.findById);

// router.put('/:id', employeeController.update);

// router.delete('/:id', employeeController.delete);
module.exports = router