const db = require("../models");

const peliculas =async function(req,res){

    try {
        var peliculas =await db.Pelicula.findAll(); 

    } catch (error){
        console.log(chalk.red.inverse("Error al sincronizar "+ error.message))
    }
    
    res.render("peliculas",{peliculas,usuario:req.usuarios});
}

module.exports = { peliculas }