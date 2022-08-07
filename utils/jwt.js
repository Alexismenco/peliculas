const jwt = require('jsonwebtoken');
require('dotenv').config();

// generar token con clave secreta .env
const generarToken = async function (usuario) {
    const token = await jwt.sign({
        email:usuario.email,
        nombre:usuario.nombre,
        username:usuario.username,
        rol:usuario.idRol
    },
    process.env.JWT_SECRET,
    {
        expiresIn:"1h"
    })
    return token;
}

// revisar si el token es valido
const verificarToken = async function (token) {
    try{
        return jwt.verify(token,process.env.JWT_SECRET);
    } catch (error){
        return null
    }
    
}

module.exports={generarToken,verificarToken}