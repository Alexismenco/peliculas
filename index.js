//cargar librerias y/o módulos
const chalk = require('chalk');
const app = require('./app');
require('dotenv').config();

// iniciamos el server
app.listen(process.env.APP_PORT,function(){
    console.log("*****"+
    chalk.cyan.inverse("Servidor iniciado en el puerto "+
    process.env.APP_PORT)+"*****")
})
