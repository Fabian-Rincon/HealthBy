// Conexion con la Base de Datos
let mysql = require("mysql");

// Datos de autentificasion
let conexion = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "healthby"
});

// Revisa posibles errores en la conexión
conexion.connect(function(err){
    if(err){
        throw err;
    } else {
        console.log("Conexión exitosa")
    }
})

// Finaliza la conexion
conexion.end()