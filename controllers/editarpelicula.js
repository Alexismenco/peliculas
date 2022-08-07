const db =require("../models");

var editarPelicula= async function(req,res){   
    let pelicula;
    try{
        pelicula = await db.Pelicula.findAll({
            where:{
                id:req.query.idpelicula
            }
        });
    }catch (error){
        console.log("Error en la consulta: "+ error.message);
        
    }
    res.render("editarpelicula",{pelicula:pelicula})
}

var peliculaPut = async function(req,res){
    var pelicula = req.body
    console.log(req.kHeaders)
    try{
        await db.Pelicula.update({
            nombre:pelicula.nombre,
            year:pelicula.year,
            director:pelicula.director,
            casting:pelicula.casting,
            sinopsis:pelicula.sinopsis,
            genero:pelicula.genero,
            trailer:pelicula.trailer,
        },{where:{id:pelicula.id}});
        console.log("Datos guardatos correctamente");
    } catch(error){
        console.log("Error en la creación: " + error.message)
    }
    res.redirect('/editarpelicula?idpelicula=+'+pelicula.id+'+&editarpelicula=Ver+más...')
}

module.exports = { editarPelicula,peliculaPut }