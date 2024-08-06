// importamos libreria
const express = require('express');

// llamar los metodos de express
const app = express();

// motor de visualizacion ejs
app.set('view engine','ejs');

// llamada al archivo router
app.use('/', require('./router'));

// ejemplos de ruta cuando solo se usa el archivo app.js
// mostra en pantalla hola mundo, ruta de prueba
// app.get('/', (req,res)=>{
//     res.send('<h1> Hola Mundo');
// });

// middleware, para conectar los estilos en la carpeta public
app.use(express.static('public'));

// configurar puerto para el servidor local
app.listen(3000, ()=>{
    console.log('servidor http://localhost:3000');
});