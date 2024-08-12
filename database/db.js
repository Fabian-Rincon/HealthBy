// Conexion con la Base de Datos mediante libreria MySQL
const mysql = require("mysql");

// Autenticación con la Base de Datos, usando env
const conexion = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

// Revisor de conexión e indeificador de errores         
conexion.connect((error)=>{
    if(error){
        console.error("Error en la conexión " +error);
        return;
    }else{
        console.log("Conexión con la base de datos exitosa");
    }
});

module.exports = conexion;