// carga de librerias
const express = require('express');

// configuración
const app = express();
const router=require('./routes');
const bodyparser=require('body-parser');
const cookieParser=require('cookie-parser')
// carpeta de archivos estáticos
app.use(express.static('public'));
// motor de vistas ejs
app.set("view engine","ejs");
// carpetade las vistas
app.set("views",__dirname+"/views");
// para tomar datos de body formulario
app.use(bodyparser.urlencoded({extended:false}))
// para la cookies
app.use(cookieParser());
app.use(express.json());
// carga de rutas siempre alfinal
app.use("/",router)
// redireccion de la raíz al home
app.get("/",function(req,res){
    res.redirect("/home");
})

module.exports=app;

