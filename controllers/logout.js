require('dotenv').config();
const getLogout = function (req,res) {  
    res.cookie(process.env.JWT_COOKIE,"",{httpOnly:true,maxAge:1});
    res.redirect("/login");
}
module.exports={getLogout};