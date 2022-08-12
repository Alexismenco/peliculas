const db = require("../models");
const fs= require('fs')

const peliculas =async function(req,res){

    try {
        var peliculas =await db.Pelicula.findAll(); 

    } catch (error){
        console.log("Error al sincronizar "+ error.message)
    }

    const listaArchivos=fs.readdirSync("public/img/");
    let archivo=listaArchivos.filter(a=>{return peliculas.find(b=>{if(b.id==a.split(".")[0]){return b.img=a}})})

    if(req.datos){
        return res.render("home",{peliculas,usuario:req.datos})

    }
    if(!req.datos){
        return res.render("home2",{peliculas,usuario:req.datos})
        
    }
}

module.exports = { peliculas }