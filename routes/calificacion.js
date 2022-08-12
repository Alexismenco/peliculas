const express = require('express');

const { calificacion,volver } = require('../controllers/calificacion');
const {verificarSesionCookie}=require('../middleware/autenticacion')
const {verificarPermiso}=require('../middleware/permisos2');

const router= express.Router();

router.post("/",verificarSesionCookie,verificarPermiso, calificacion);
router.get("/",verificarSesionCookie,verificarPermiso, volver);


module.exports=router
