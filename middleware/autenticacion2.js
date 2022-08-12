require('dotenv').config();
const jwt = require('../utils/jwt');

const verificarSesionHeader = async function(req,res,next){
    
}

const verificarSesionCookie = async function(req,res,next){
    if(!req.cookies){

    }

    const token = req.cookies[process.env.JWT_COOKIE];
    if(!token){
 
    }
    let datos = await jwt.verificarToken(token);
    if(!datos){

    }
    req.datos=datos;
    next();
}

const prevenirLoginRegistro = async function(req,res,next){
    if(!req.cookies){
        return next();
    }
    const token = req.cookies[process.env.JWT_COOKIE];
    if(!token){
        return next();
    }
    let datos = await jwt.verificarToken(token);
    if(!datos){
        return next();
    }
    return res.redirect("/");
}

module.exports={verificarSesionHeader,verificarSesionCookie,prevenirLoginRegistro}