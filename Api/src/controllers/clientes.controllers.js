'use strict';
const Clientes = require('../models/clientes.models');

// exports.findAll = function (req, res) {
//     Employee.findAll(function (err, employee) {
//         console.log('controller')
//         if (err)
//             res.send(err);
//         console.log('res', employee);
//         res.send(employee);
//     });
// };
exports.create = function (req, res) {
    const nuevoCliente = new Clientes(req.body);

    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Por favor complete todos los campos requeridos' });
    } else {
        Clientes.create(nuevoCliente, function (err, cliente) {
            if (err)
                res.send(err);
            res.json({ error: false, message: "Cliente añadido con exito!", data: cliente });
        });
    }
};
// exports.findById = function (req, res) {
//     Employee.findById(req.params.id, function (err, employee) {
//         if (err)
//             res.send(err);
//         res.json(employee);
//     });
// };
// exports.update = function (req, res) {
//     if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
//         res.status(400).send({ error: true, message: 'Please provide all required field' });
//     } else {
//         Employee.update(req.params.id, new Employee(req.body), function (err, employee) {
//             if (err)
//                 res.send(err);
//             res.json({ error: false, message: 'Employee successfully updated' });
//         });
//     }
// };
// exports.delete = function (req, res) {
//     Employee.delete(req.params.id, function (err, employee) {
//         if (err)
//             res.send(err);
//         res.json({ error: false, message: 'Employee successfully deleted' });
//     });
// };