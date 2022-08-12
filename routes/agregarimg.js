const express = require('express');
const multer= require('multer');
const path = require('path')
const fileUpload = require('express-fileupload')

const app =express()
app.use(fileUpload())

var storage = multer.diskStorage({   
    destination: function(req, file, cb) { 
       cb(null, './public/img');    
    }, 
    filename: function (req, file, cb) { 
        console.log(file)
        console.log(req.body.id)
        

       cb(null , req.body.id+path.extname(file.originalname));   
    }
 });

 const upload = multer({ storage: storage })

const { agregarImagen } = require('../controllers/agregarimg');
const {verificarSesionCookie}=require('../middleware/autenticacion')
const {verificarPermiso}=require('../middleware/permisos');

const router= express.Router();

router.post("/",verificarSesionCookie,verificarPermiso,upload.single('img'), agregarImagen);

module.exports=router
