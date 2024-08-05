// Importanción libreria
const express = require("express");

// objetos para llamar los metodos de express
const app = express();

// configuracion
app.set("view engine","ejs");
app.get("/", function(req,res){
    res.render("index");
});

// rutas

/* // Ruta inicial
app.get("/",function(req,res){
    res.send("<h1> Hola Mundo");
}); */

// Middleware
app.use(express.static("public"));

// configurar puerto para el servidor local
app.listen(3000,function(){
    console.log("Servidor creado exitosamente en http://localhost:3000");
});