const express = require('express');

const { editarPelicula,peliculaPut } = require('../controllers/editarPelicula');
const {verificarSesionCookie}=require('../middleware/autenticacion')
const {verificarPermiso}=require('../middleware/permisos');

const router= express.Router();

router.post("/",verificarSesionCookie,verificarPermiso, peliculaPut);
router.get("/",verificarSesionCookie,verificarPermiso, editarPelicula);

module.exports=router
