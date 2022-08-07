const express = require('express');

const { peliculas } = require('../controllers/home');
const {verificarSesionCookie}=require('../middleware/autenticacion')
const router= express.Router();

router.get("/",peliculas);

module.exports=router
