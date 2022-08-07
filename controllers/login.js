// carga de modelo
const {Usuario}=require('../models');
const jwt = require('../utils/jwt');
require('dotenv').config();
const bcrypt = require("bcrypt");

const getLogin = function(req,res){
    res.render("login");
}

const postLogin = async function(req,res){
    if(!req.body){
        return res.status(500).json({error:"ERROR BODY"})
    } 
    
    if(!req.body.email){
        return res.status(500).json({error:"ERROR EMAIL"})
    }

    let usuario;
    try{
        usuario = await Usuario.findByPk(req.body.email)

    } catch (error){
        console.log("Error al buscar usuario: "+error.message)
        return res.status(500).json({error:"Error BD"})
    }
    if(!usuario){
        return res.status(400).json({error:"Usuario no encontrado"})
    }

    if(!(await bcrypt.compare(req.body.password,usuario.password))){
        return res.status(401).json({error:"Error de credenciales"})
    }
    const token = await jwt.generarToken(usuario);
    res.cookie(process.env.JWT_COOKIE,token,{httpOnly:true});
    res.header('auth-token',{token}).json({
        error:null,
        msg:"autenticación correcta",
        token:token
    })
}

module.exports={getLogin,postLogin}