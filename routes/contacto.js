const express = require('express');

const { contacto, email } = require('../controllers/contacto');
const {verificarSesionCookie}=require('../middleware/autenticacion')
const {verificarPermiso}=require('../middleware/permisos');

const router= express.Router();

router.get("/",verificarSesionCookie, contacto);
router.post("/",verificarSesionCookie, email);

module.exports=router
