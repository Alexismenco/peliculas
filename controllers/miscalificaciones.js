const {db,sequelize} =require("../models");
const { QueryTypes } = require('sequelize');    

var misCalificaciones= async function(req,res){


    var misCalificaciones= await sequelize.query(
        `SELECT "idPelicula","emailUsuario","calificacion","nombre" FROM "Calificaciones" c JOIN "Peliculas" p ON p."id"=c."idPelicula"  WHERE "emailUsuario"='${req.datos.email}'`,
    {
        replacements: ['active'],
        type: QueryTypes.SELECT
    }
    )
    res.render("miscalificaciones",{misCalificaciones,usuario:req.datos})    
}

module.exports = { misCalificaciones }