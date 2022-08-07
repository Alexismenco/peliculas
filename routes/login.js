// carga de las librerias
const express = require('express');
// inicializacion del router donde guardaremos las rutas del login
const router = express.Router();
// carga de las funciones del controlador login
const {getLogin,postLogin}=require('../controllers/login');
const {prevenirLoginRegistro}=require("../middleware/autenticacion");

router.get("/",prevenirLoginRegistro,getLogin);
router.post("/",prevenirLoginRegistro,postLogin);

module.exports=router;