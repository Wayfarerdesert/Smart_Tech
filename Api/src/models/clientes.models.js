'use strict';
var dbConn = require('../../config/db.config.js');

var Clientes = function (clientes) {
    this.empresa = clientes.empresa;
    this.nombre = clientes.nombre;
    this.apellido = clientes.apellido;
    this.email = clientes.email;
    this.contraseña = clientes.contraseña;
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
// Employee.findById = function (id, result) {
//     dbConn.query("Select * from employees where id = ? ", id, function (err, res) {
//         if (err) {
//             console.log("error: ", err);
//             result(err, null);
//         }
//         else {
//             result(null, res);
//         }
//     });
// };
// Employee.findAll = function (result) {
//     dbConn.query("Select * from employees", function (err, res) {
//         if (err) {
//             console.log("error: ", err);
//             result(null, err);
//         }
//         else {
//             console.log('employees : ', res);
//             result(null, res);
//         }
//     });
// };
// Employee.update = function (id, employee, result) {
//     dbConn.query("UPDATE employees SET first_name=?,last_name=?,email=?,phone=?,organization=?,designation=?,salary=? WHERE id = ?", [employee.first_name, employee.last_name, employee.email, employee.phone, employee.organization, employee.designation, employee.salary, id], function (err, res) {
//         if (err) {
//             console.log("error: ", err);
//             result(null, err);
//         } else {
//             result(null, res);
//         }
//     });
// };
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