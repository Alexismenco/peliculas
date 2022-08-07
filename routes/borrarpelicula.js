const express = require('express');

const { borrarPelicula } = require('../controllers/borrarpelicula');
const {verificarSesionCookie}=require('../middleware/autenticacion')
const {verificarPermiso}=require('../middleware/permisos');

const router= express.Router();

router.post("/",verificarSesionCookie,verificarPermiso, borrarPelicula);

module.exports=router
