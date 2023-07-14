const express = require('express')
const router = express.Router()
const { registro, usuarios, login, perfil, eliminar, editar } = require('../controllers/usuarios.controllers');



router.post('/registro', registro);
router.get('/all', usuarios);
router.post('/login', login);
router.post('/perfil', perfil);
router.get('/eliminar/:id', eliminar);
router.post('/editar/:id', editar);


module.exports = router