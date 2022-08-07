// carga de modelo
const db =require('../models');

const pelisAdmin = async function(req,res){
    let peliculas;
    try{
        peliculas = await db.Pelicula.findAll();
        // console.log(peliculas);
    } catch(error){
        console.log("Error en la creación: " + error.message)
    }
    
    res.render("peliculasadmin",{peliculas:peliculas,admin:req.datos});
}

const peliculas = async function(req,res){
    let pelicula=req.body;

    try{
        await db.Pelicula.create({
            nombre:pelicula.nombre,
            year:pelicula.age,
            director:pelicula.director,
            casting:pelicula.casting,
            sinopsis:pelicula.sinopsis,
            genero:pelicula.genero,
            trailer:pelicula.trailer,
            vigente:1
        
        });
        console.log("Datos guardatos correctamente");
    } catch(error){
        console.log("Error en la creación: " + error.message)
    }
    res.redirect("/peliculasadmin")
}



module.exports = { pelisAdmin,peliculas }