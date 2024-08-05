// importamos libreria
const express = require("express");

// llamar los metodos de express
const app = express();

// configuracion
app.set("view engine","ejs");
app.get("/", function(req,res){
    res.render("index");
});

// rutas
/* mostra en pantalla
app.get("/",function(req,res){
    res.send("<h1> Hola Mundo");
});
*/
// ruta pagina estatica
app.use(express.static("public"));

// configurar puerto para el servidor local
app.listen(3000,function(){
    console.log("servidor http://localhost:3000");
});