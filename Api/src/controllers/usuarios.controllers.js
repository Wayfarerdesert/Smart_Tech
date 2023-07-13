const dbConn = require('../../config/db.config');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const registro = (req, res) => {
    let { empresa, nombre, apellido, email, contraseña, rol } = req.body;
    dbConn.query('SELECT * FROM usuarios WHERE email = ?', [email], (error, result) => {
        if (error) {
            console.log(error);
        }
        if (result.length > 0) {
            console.log(result)
            return res.send({ msg: "Usuario ya registrado" })
        } else {
            contraseña = bcrypt.hashSync(contraseña, 12);
            dbConn.query('INSERT INTO usuarios SET ?', { empresa, nombre, apellido, email, contraseña, rol }, (error, result) => {
                if (error) throw error;
                return res.send({ msg: "Usuario añadido correctamente" })
            })
        }
    })

}

const usuarios = (req, res) => {
    dbConn.query('SELECT * FROM usuarios', (error, results) => {
        if (error) throw error;
        res.json({ results });
    });

}
const login = (req, res) => {
    const { email, contraseña } = req.body;
    dbConn.query('SELECT * FROM usuarios WHERE email = ?', [email], (error, result) => {
        if (error) {
            res.status(500).json({ error: 'Ocurrió un error al obtener los datos del usuario' });
        } else {
            if (result.length === 0) {
                res.status(401).json({ error: 'Credenciales inválidas' });
            } else {
                jwt.sign({ email }, 'secretKey', (err, token) => {
                    if (result.length !== 0) {
                        result.forEach(e => {
                            bcrypt.compare(contraseña, e.contraseña, function (err, isMatch) {
                                if (!isMatch) {
                                    return res.send({ msg: "Contraseña incorrecta" })
                                } else
                                    return res.send({ token })
                            })
                        });
                    }
                })

            }
        }
    })
}

const perfil = (req, res) => {
    verificaToken(req, res, () => {
        jwt.verify(req.token, 'secretKey', (error, data) => {
            if (error) {
                res.sendStatus(403);
            } else {
                res.json({ msg: "Acceso correcto", data });
            }
        });
    });
};

function verificaToken(req, res, next) {
    const bearerHeader = req.headers['autorizacion'];
    if (typeof bearerHeader !== 'undefined') {
        const bearerToken = bearerHeader.split(" ")[1];
        req.token = bearerToken;
        next();
    } else {
        res.sendStatus(403);
    }
}

module.exports = { registro, usuarios, login, perfil };