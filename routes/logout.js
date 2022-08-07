// carga de las librerias
const express = require('express');
// inicializacion del router donde guardaremos las rutas del login
const router = express.Router();
// carga de las funciones del controlador login
const {getLogout}=require('../controllers/logout');

router.get("/",getLogout);

module.exports=router;