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
// recovery page
app.get('/pages/recovery', function(req, res){
    res.render('pages/recovery');
});
// register page
app.get('/pages/register', function(req, res){
    res.render('pages/register');
});

/* 
rutas ejemplos

mostra en pantalla, ruta de prueba
app.get("/",function(req,res){
    res.send("<h1> Hola Mundo");
});

main page
app.get('/pages/main', function(req, res){
    res.render('pages/main');
});
*/

// middleware
app.use(express.static("public"));

// configurar puerto para el servidor local
app.listen(3000,function(){
    console.log("servidor http://localhost:3000");
});