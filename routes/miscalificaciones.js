const express = require('express');

const { misCalificaciones } = require('../controllers/miscalificaciones');
const {verificarSesionCookie}=require('../middleware/autenticacion')

const router= express.Router();

router.get("/",verificarSesionCookie, misCalificaciones);

module.exports=router
