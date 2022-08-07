const db =require("../models");

var borrarPelicula= async function(req,res){
    var pelicula= req.body;
    if(pelicula.borrarpelicula){
        console.log()
        try{
            usuarios = await db.Pelicula.destroy({
             where:{
                 id:pelicula.idpelicula
             }
            });
         }catch (error){
             console.log("Error en la consulta: "+ error.message);
             
         }
    }
    
    
    res.redirect('/peliculasadmin')
    
}

module.exports = { borrarPelicula }