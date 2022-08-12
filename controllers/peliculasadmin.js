// carga de modelo
const db =require('../models');
const { Op, sequelize } = require("sequelize");
const fs = require('fs');


const pelisAdmin = async function(req,res){
    let peliculas;
    try{
        peliculas = await db.Pelicula.findAll();
        // console.log(peliculas);
    } catch(error){
        console.log("Error en la creación: " + error.message)
    }
    
    const listaArchivos=fs.readdirSync("public/img/");
    let archivo=listaArchivos.filter(a=>{return peliculas.find(b=>{if(b.id==a.split(".")[0]){return b.img=a}})})
    res.render("peliculasadmin",{peliculas:peliculas,admin:req.datos,usuario:req.datos});
}

const peliculas = async function(req,res){
    var idMax;
    try{
        idMax = await db.Pelicula.max('id');
        console.log("Datos guardatos correctamente");
    } catch(error){
        console.log("Error en la creación: " + error.message)
    }
    let pelicula=req.body;
    try{
        await db.Pelicula.create({
            id:idMax+1,
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