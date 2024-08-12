// importamos libreria y llamamos los metodos de express
const express = require('express');
const app = express();

// captura datos de formularios
app.use(express.urlencoded({extended:false}));
app.use(express.json());

// invocamos dotenv
const dotenv = require('dotenv');
dotenv.config({path:'./env/.env'});

// middleware, para conectar los estilos y demas en la carpeta public
app.use(express.static('public'));

// motor de plantilla ejs
app.set('view engine','ejs');

// invocamos a bcryptjs
const bcryptjs = require('bcryptjs');

// variable de session
const session = require('express-session')
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));

const conexion = require("./database/db")

app.post('/reg_usu', async (req, res)=>{
    const num_doc_adm = req.body.num_doc_adm;
    const nom_adm = req.body.nom_adm;
    const ape_adm = req.body.ape_adm;
    const cor_ele_adm = req.body.cor_ele_adm;
    const cont_adm = req.body.cont_adm;
    let passwordHash = await bcryptjs.hash(cont_adm, 8);
    conexion.query('INSERT INTO admins SET ?', {num_doc_adm:num_doc_adm, nom_adm:nom_adm, ape_adm:ape_adm, cor_ele_adm:cor_ele_adm, cont_adm:passwordHash}, async(error, results)=>{
        if(error){
            console.log(error);
        }else{
            res.send('realizado');
        }
    })
})

// llamada al archivo router
app.use('/', require('./router'));

// muestra en pantalla hola mundo, ruta de prueba
// app.get('/', (req,res)=>{
//     res.send('<h1> Hola Mundo');
// });

// configurar puerto para el servidor local
app.listen(3000, ()=>{
    console.log('Servidor creado exitosamente en http://localhost:3000');
});