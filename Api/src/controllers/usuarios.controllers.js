const dbConn = require('../../config/db.config');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const verificaToken = require('../middleware/usuarios.middleware');


const registro = (req, res) => {
    let { empresa, nombre, apellido, email, contraseña, repContraseña, rol } = req.body;
    dbConn.query('SELECT * FROM usuarios WHERE email = ?', [email], (error, result) => {
        if (empresa === "" || nombre === "" || apellido === "" || email === "" || contraseña === "" || repContraseña === "") {
            return res.send({ msg: "Complete todos los campos" })
        }
        if (error) {
            console.log(error);
        }
        if (result.length > 0) {
            console.log(result)
            return res.send({ msg: "Usuario ya registrado" })
        }
        if (contraseña !== repContraseña) {
            console.log(contraseña, repContraseña)
            return res.send({ msg: "Las contraseñas no coinciden" })
        }
        if (email === "bonucci64@gmail.com" || email === "bonucci64@hotmail.com") {
            rol = "Admin"
            contraseña = bcrypt.hashSync(contraseña, 12);
            repContraseña = bcrypt.hashSync(repContraseña, 12);
            dbConn.query('INSERT INTO usuarios SET ?', { empresa, nombre, apellido, email, contraseña, repContraseña, rol }, (error, result) => {
                if (error) throw error;
                return res.send({ msg: "Administrador añadido correctamente" })
            })
        } else {
            rol = "User"
            contraseña = bcrypt.hashSync(contraseña, 12);
            repContraseña = bcrypt.hashSync(repContraseña, 12);
            dbConn.query('INSERT INTO usuarios SET ?', { empresa, nombre, apellido, email, contraseña, repContraseña, rol }, (error, result) => {
                if (error) throw error;
                return res.send({ msg: "Usuario añadido correctamente" })
            })
        }
    })

}

const usuarios = (req, res) => {
    dbConn.query('SELECT * FROM usuarios', (error, results) => {
        if (error) throw error;
        else if (results.length === 0) {
            res.send({ msg: "No hay usuarios" })
        } else {
            res.json({ results });
        }
    });

}

const login = (req, res) => {
    const { email, contraseña } = req.body;
    dbConn.query('SELECT * FROM usuarios WHERE email = ?', [email], (error, result) => {
        if (error) {
            res.status(500).json({ error: 'Ocurrió un error al obtener los datos del usuario' });
        }
        if (result.length === 0) {
            res.status(401).json({ error: 'Credenciales inválidas' });
        } else {
            const user = result[0];
            bcrypt.compare(contraseña, user.contraseña, function (err, isMatch) {
                if (!isMatch) {
                    return res.send({ msg: "Contraseña incorrecta" });
                } else {
                    jwt.sign({ email, id: user.id }, 'secretKey', (err, token) => {
                        return res.send({ email, id: user.id, token });
                    });
                }
            });
        }
    });
};

const perfil = (req, res) => {
    verificaToken(req, res, () => {
        jwt.verify(req.token, 'secretKey', (error, data) => {
            if (error) {
                res.sendStatus(403);
            } else {
                res.json({ msg: "Acceso autorizado", data });
                console.log(data.id)
            }
        });
    });
};

const eliminar = (req, res) => {
    const id = req.params.id;
    dbConn.query('DELETE FROM usuarios WHERE id = ?', id, (error, result) => {
        //console.log(result)
        if (error) throw error;
        else if (result.affectedRows === 0) {
            return res.send({ msg: "Usuario no encontrado" })
        } else {
            return res.send({ msg: "Usuario eliminado" });
        }
    });
}

const editar = (req, res) => {
    const id = req.params.id;
    const { empresa, nombre, apellido } = req.body;
    dbConn.query('UPDATE usuarios SET empresa = ?, nombre = ?, apellido = ? WHERE id = ?', [empresa, nombre, apellido, id], (error, result) => {
        //console.log(result)
        if (error) throw error;
        else if (result.affectedRows === 0) {
            return res.send({ msg: "Usuario no encontrado" })
        } else {
            return res.send({ msg: "Usuario actualizado correctamente" });
        }
    });
}


module.exports = { registro, usuarios, login, perfil, eliminar, editar };