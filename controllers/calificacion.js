const db =require("../models");

var calificacion= async function(req,res){
    var calificacion;
    var emailUsuario = req.usuario.email
    var idPelicula = req.body.idpelicula

    if(req.body.c1){calificacion=1}
    if(req.body.c2){calificacion=2}
    if(req.body.c3){calificacion=3}
    if(req.body.c4){calificacion=4}
    if(req.body.c5){calificacion=5}
    
    try{
        await db.Calificaciones.create({
            idPelicula:idPelicula,
            emailUsuario:emailUsuario,
            calificacion:calificacion
        });
        console.log("Calificación se guardo correctamente");
    } catch(error){
        console.log("Error en la creación: " + error.message)
    }    
    res.redirect('/peliculas')
    
}

var volver=function (req,res){
    res.redirect('/peliculas')
}

module.exports = { calificacion, volver }