const db =require("../models");

var reCalificacion= async function(req,res){
    var calificacion;

    if(req.body.c1){calificacion=1}
    if(req.body.c2){calificacion=2}
    if(req.body.c3){calificacion=3}
    if(req.body.c4){calificacion=4}
    if(req.body.c5){calificacion=5}
    try{
       var recalificacion = await db.Calificaciones.update({calificacion:calificacion},
        {where:{idPelicula:req.body.idpelicula,emailUsuario:req.datos.email}});
    }catch (error){
        console.log("Error en la consulta: "+ error.message);
        
    }
    res.redirect("miscalificaciones")
    
}

module.exports = { reCalificacion }