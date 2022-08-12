const express = require('express');

const { reCalificacion } = require('../controllers/recalificacion');
const {verificarSesionCookie}=require('../middleware/autenticacion')
const {verificarPermiso}=require('../middleware/permisos');

const router= express.Router();

router.post("/",verificarSesionCookie, reCalificacion);

module.exports=router
