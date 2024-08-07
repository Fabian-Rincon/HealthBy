// importamos libreria
const express = require('express');
const router = express.Router();

const conexion = require("./database/db")

// res.render para cargar archivos ejs 
// index page
router.get('/', (req,res)=>{
    res.render('index');
});
// home page
router.get('/pages/home', (req, res)=>{
    res.render('pages/home');
});
// login page
router.get('/pages/login', (req, res)=>{
    res.render('pages/login');
});
// recovery page
router.get('/pages/recovery', (req, res)=>{
    res.render('pages/recovery');
});
// register page
router.get('/pages/register', (req, res)=>{
    res.render('pages/register');
});

// plantilla main page
// router.get('/pages/main', (req, res)=>{
//     res.render('pages/main');
// });

// Exportando router para utilizarlo en otros lugares
module.exports = router;