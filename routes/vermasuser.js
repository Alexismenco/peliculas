const express = require('express');

const { verMas } = require('../controllers/vermasuser');
const {verificarSesionCookie}=require('../middleware/autenticacion')

const router= express.Router();

router.post("/",verificarSesionCookie, verMas);

module.exports=router
