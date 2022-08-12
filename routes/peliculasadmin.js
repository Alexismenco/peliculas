const express = require('express');
const path = require('path');


const { pelisAdmin, peliculas } = require('../controllers/peliculasadmin');
const {verificarSesionCookie}=require('../middleware/autenticacion');
const {verificarPermiso}=require('../middleware/permisos');
const router= express.Router();


router.post("/",verificarSesionCookie,verificarPermiso,peliculas)
router.get("/",verificarSesionCookie,verificarPermiso,pelisAdmin);

module.exports=router