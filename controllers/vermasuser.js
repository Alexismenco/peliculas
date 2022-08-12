const db =require("../models");
const fs = require('fs');

var verMas= async function(req,res){
    let pelicula;
    try{
        pelicula = await db.Pelicula.findAll({where:{id:req.body.idPelicula}});
    }catch (error){
        console.log("Error en la consulta: "+ error.message);
    }


    var imagen=fs.readdirSync("public/img/");
    var archivo=imagen.map(a=>{return pelicula.find(b=>{if(b.id==a.split(".")[0]){return b.img=a}})})

    res.render("vermasuser",{pelicula,usuario:req.datos})
    
}

module.exports = { verMas }