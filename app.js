// Importanción librerias
const express = require("express");
const mysql = require("mysql");

// objetos para llamar los metodos de express
const app = express();
let conexion = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "healthby"
});

// configuracion
app.set("view engine","ejs");
app.get("/", function(req,res){
    res.render("index");
});

// Obtener información en formatos desde los formularios
app.use(express.json());
app.use(express.urlencoded({extended:false}))

app.post("/validar", function(req,res){
    const datos = req.body;
    let documento = datos.num_doc_pac;
    let nombre = datos.nom_pac;
    let apellido = datos.ape_pac;
    let fechaNacimiento = datos.fec_nac_pac;
    let correo = datos.cor_ele_pac;
    let password = datos.cont_pac;

    let examinar = "SELECT * FROM pacientes WHERE num_doc_pac = "+documento+""
    
    conexion.query(examinar,function(error, row){
        if(error){
            throw error;
        }else{
            if(row.length>0){
                console.log("No fue posible registrase, usuario ya existente");
            }else{
                let registrar = "INSERT INTO pacientes (num_doc_pac, nom_pac, ape_pac, fec_nac_pac, cor_ele_pac, cont_pac) VALUES ('"+documento+"', '"+nombre+"', '"+apellido+"', '"+fechaNacimiento +"', '"+correo+"', '"+password+"')";

                    conexion.query(registrar, function(error){
                        if(error){
                            throw error;
                        }else{
                            console.log("Datos almacenados correctamente");
                        }
                    });
            }
        }
    })

    // console.log(datos)
})


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