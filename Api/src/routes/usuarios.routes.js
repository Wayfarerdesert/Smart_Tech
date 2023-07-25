const express = require('express')
const router = express.Router()
const { registro, usuarios, login, perfil, eliminar, editar, usuario } = require('../controllers/usuarios.controllers');



router.post('/registro', registro);
router.get('/all', usuarios);
router.post('/login', login);
router.post('/perfil', perfil);
router.get('/eliminar/:id', eliminar);
router.post('/editar/:id', editar);
router.get('/usuario/:id', usuario);


module.exports = router