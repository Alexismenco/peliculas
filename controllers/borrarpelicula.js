const db =require("../models");
const fs = require('fs');

var borrarPelicula= async function(req,res){
    var pelicula= req.body;
    if(pelicula.borrarpelicula){
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

    var listaArchivos=fs.readdirSync("public/img");
    let archivo= listaArchivos.map( b=>{ if((Number(b.split(".")[0])==pelicula.idpelicula)==true){ fs.unlink("public/img/"+b, (err) => {
        if (err) {
        console.error(err)
        }}) }})
    
    res.redirect('/peliculasadmin')
}

module.exports = { borrarPelicula }