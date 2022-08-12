const express = require('express');

const { peliculas } = require('../controllers/home');
const {verificarSesionCookie}=require('../middleware/autenticacion2')
const router= express.Router();

router.get("/",verificarSesionCookie,peliculas);

module.exports=router
