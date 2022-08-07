const db =require("../models");

var calificacion= async function(req,res){
    var calificacion= req.body.radio
    var emailUsuario = req.usuario.email
    var idPelicula = req.body.id
    console.log(idPelicula)
    try{
        await db.Calificacion.create({
            idPelicula:idPelicula,
            emailUsuario:emailUsuario,
            calificacion:calificacion
        });
        console.log("Datos guardatos correctamente");
    } catch(error){
        console.log("Error en la creación: " + error.message)
    }    
    res.redirect('/peliculas')
    
}

var volver=function (req,res){
    res.redirect('/peliculas')
}

module.exports = { calificacion, volver }