// carga de las librerias
const express = require('express');
// inicializacion del router donde guardaremos las rutas del login
const router = express.Router();
// carga de las funciones del controlador login
const {getRegister,postRegister}=require('../controllers/register');
const { prevenirLoginRegistro } =require('../middleware/autenticacion');

router.get("/",prevenirLoginRegistro,getRegister);
router.post("/",prevenirLoginRegistro,postRegister);

module.exports=router; 