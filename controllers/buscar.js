const db =require("../models");
const fs=require('fs');

var buscar = async function(req,res){
    let busqueda;

    var pelicula = req.query.busqueda.charAt(0).toUpperCase() + req.query.busqueda.slice(1);
    
    try{
       busqueda = await db.Pelicula.findAll({where:{nombre:pelicula}});
    }catch (error){
        console.log("Error en la consulta: "+ error.message);
        
    }
    const listaArchivos=fs.readdirSync("public/img/");
    let archivo=listaArchivos.filter(a=>{return busqueda.find(b=>{if(b.id==a.split(".")[0]){return b.img=a}})})

    res.render("buscar",{busqueda,usuario:req.datos})
    
}

module.exports = { buscar }