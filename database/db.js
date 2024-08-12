// Conexion con la Base de Datos mediante libreria MySQL
const mysql = require("mysql");

// Autenticación con la Base de Datos
const conexion = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "healthby"
});

// Revisor de conexión e indeificador de errores         
conexion.connect((error)=>{
    if(error){
        console.error("Error en la conexión " +error);
        return
    }else{
        console.log("Conexión con la base de datos exitosa");
    }
});

module.exports = conexion;