const express = require('express');

const { peliculas } = require('../controllers/peliculas');
const {verificarSesionCookie}=require('../middleware/autenticacion')
const router= express.Router();

router.get("/",verificarSesionCookie,peliculas);

module.exports=router
