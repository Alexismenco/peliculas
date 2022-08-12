const db =require("../models");

var agregarImagen= async function(req,res){
    var id= req.body.id

    res.redirect("peliculasadmin")
}

module.exports = { agregarImagen }