let mysql = require("mysql");

let conexion = mysql.createConnection({
    host: "localhost",
    database: "healthby",
    user: "root",
    password: ""
});

// Revisor de conexión con la BD
conexion.connect(function(err){
    if(err){
        throw err;
    } else {
        console.log("Conexión exitosa")
    }
})

conexion.end()