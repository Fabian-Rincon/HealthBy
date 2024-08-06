// importamos libreria
const express = require("express");

// llamar los metodos de express
const app = express();

// motor de visualizacion ejs
app.set("view engine","ejs");

// res.render para cargar archivos ejs 
// index page
app.get("/", function(req,res){
    res.render("index");
});
// home page
app.get('/pages/home', function(req, res){
    res.render('pages/home');
});
// login page
app.get('/pages/login', function(req, res){
    res.render('pages/login');
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