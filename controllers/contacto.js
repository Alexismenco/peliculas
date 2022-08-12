var nodemailer =require('nodemailer');
const db =require("../models");
require('dotenv').config();

var contacto= async function(req,res){
    // console.log(req)
   
    res.render("contacto",{usuario:req.datos})
    
}

var email= async function (req,res){

    var administradores;
    try{
       administradores = await db.Usuario.findAll({where:{idRol:1}});
       console.log(administradores.map(a=>{return a.email}))
    }catch (error){
        console.log("Error en la consulta: "+ error.message);
        
    }
    
    if(req.body.contacto){

        var transporter = nodemailer.createTransport({
            service : 'gmail',
            auth : {
                user : process.env.CORREO_USER,
                pass : process.env.PASS_CORREO
            }
        });

        var mailOptions = {
            from : 'mencoalexis@gmail.com',
            to : administradores.map(a=>{return a.email}),
            subject: req.body.asunto,
            text: req.body.comentario
        };

        transporter.sendMail(mailOptions,function(err,info){
            if(err){
                console.log(err.message)
            }else{
                console.log(info.response);
                res.redirect('/contacto')
            }
        })

        var mailOptions = {
            from : 'mencoalexis@gmail.com',
            to : req.datos.email,
            subject: 'Envias un mensaje',
            text: 'Tu mensaje: '+req.body.comentario
        };

        transporter.sendMail(mailOptions,function(err,info){
            if(err){
                console.log(err.message)
            }else{
                console.log(info.response);
                res.redirect('/contacto')
            }
        })
    }

}

module.exports = { contacto, email }