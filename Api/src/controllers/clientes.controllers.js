'use strict';
const Clientes = require('../models/clientes.models');

exports.findAll = function (req, res) {
    Clientes.findAll(function (err, cliente) {
        if (err)
            res.send(err);
        console.log('res', cliente);
        res.send(cliente);
    });
};
exports.create = function (req, res) {
    const nuevoCliente = new Clientes(req.body);

    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Por favor complete todos los campos requeridos' });
    } else {
        Clientes.create(nuevoCliente, function (err, cliente) {
            if (err)
                res.send(err);
            res.json({cliente, message: "Cliente añadido con exito!"});
        });
    }
};
exports.findById = function (req, res) {
    Clientes.findById(req.params.id, function (err, cliente) {
        if (cliente.length < 1)
            res.send({ err, msg: "Cliente no existe" }); //consultar condicionales, da error en la segunda.!!
        res.json(cliente);
    });
};

exports.update = function (req, res) {
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Por favor complete los campos requeridos' });
    } else {
        Clientes.update(req.params.id, new Clientes(req.body), function (err, cliente) {
            if (err)
                res.send(err);
            res.json({msg: 'Cliente modificado con exito' });
        });
    }
};
exports.delete = function (req, res) {
    Clientes.delete(req.params.id, function (err, cliente) {
        if (err)
            res.send(err);
        res.json({msg: 'Cliente eliminado con exito!'});
    });
};