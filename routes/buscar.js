const express = require('express');

const { buscar } = require('../controllers/buscar');
const {verificarSesionCookie}=require('../middleware/autenticacion')

const router= express.Router();

router.get("/",verificarSesionCookie, buscar);


module.exports=router
