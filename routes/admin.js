const express = require('express');

const { getUsuarios } = require('../controllers/admin');
const {verificarSesionCookie}=require('../middleware/autenticacion')
const {verificarPermiso}=require('../middleware/permisos');

const router= express.Router();

router.get("/",verificarSesionCookie,verificarPermiso, getUsuarios);

module.exports=router
