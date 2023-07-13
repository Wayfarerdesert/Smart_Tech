const express = require('express')
const router = express.Router()
const { registro, usuarios, login, perfil } = require('../controllers/usuarios.controllers');



router.post('/registro', registro);
router.get('/all', usuarios);
router.post('/login', login);
router.post('/perfil', perfil);


module.exports = router