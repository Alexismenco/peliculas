const db =require("../models");

var getUsuarios= async function(req,res){
    let usuarios;
    try{
       usuarios = await db.Usuario.findAll();
    }catch (error){
        console.log("Error en la consulta: "+ error.message);
        
    }
    res.render("admin",{usuarios,usuario:req.usuario})
    
}

module.exports = { getUsuarios }