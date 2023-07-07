'use strict';
var dbConn = require('../../config/db.config.js');

var Clientes = function (clientes) {
    this.empresa = clientes.empresa;
    this.nombre = clientes.nombre;
    this.apellido = clientes.apellido;
    this.email = clientes.email;
    this.contraseña = clientes.contraseña;
};

Clientes.findAll = function (result) {
    dbConn.query("Select * from clientes", function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            console.log('clientes : ', res);
            result(null, res);
        }
    });
}; 

Clientes.create = function (nuevoCliente, result) {
    dbConn.query("INSERT INTO clientes set ?", nuevoCliente, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};
Clientes.findById = function (id, result) {
    dbConn.query("Select * from clientes where id_clientes = ? ", id, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);
        }
    });
};

Clientes.update = function (id, clientes, result) {
    dbConn.query("UPDATE clientes SET empresa=?,nombre=?,apellido=?,email=?,contraseña=? WHERE id_clientes = ?", [clientes.empresa, clientes.nombre, clientes.apellido, clientes.email, clientes.contraseña, id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};
// Employee.delete = function (id, result) {
//     dbConn.query("DELETE FROM employees WHERE id = ?", [id], function (err, res) {
//         if (err) {
//             console.log("error: ", err);
//             result(null, err);
//         }
//         else {
//             result(null, res);
//         }
//     });
// };
module.exports = Clientes;