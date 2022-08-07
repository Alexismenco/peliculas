// carga de las librerias
const express = require('express');
// inicializacion del router donde guardaremos las rutas del login
const router = express.Router();

const { putUser,volver } = require('../controllers/putuser');
const {verificarSesionCookie}=require('../middleware/autenticacion')
const {verificarPermiso}=require('../middleware/permisos');

router.post("/",verificarSesionCookie,verificarPermiso,putUser);
router.get("/",verificarSesionCookie,verificarPermiso,volver);


module.exports=router;