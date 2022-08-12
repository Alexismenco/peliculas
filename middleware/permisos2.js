

const { Usuario }= require('../models');

const verificarPermiso = async function(req,res,next){
    let datos = req.datos;
    let usuario;
    try{
        usuario = await Usuario.findByPk(datos.email);
    } catch(error){
        console.log("Error al buscar permisos"+ error.message);
        res.status(500).json({error:"Error interno"});
    }
    console.log(usuario)

    if(!usuario){
        return res.status(403).render("forbidden");
    }
    if(usuario.idRol!=1 && usuario.idRol!=2){
        return res.status(403).render("forbidden");
    }
    req.usuario=usuario.dataValues;
    next()
}

module.exports={verificarPermiso}