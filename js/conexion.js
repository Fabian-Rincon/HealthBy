// Conexion con la Base de Datos mediante libreria MySQL
let mysql = require("mysql");

// Autenticación con la Base de Datos
let conexion = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "healthby"
});

// Revisor de conexión e indeificador de errores         
conexion.connect(function(err){
    if(err){
        throw err;
        conexion.end()
    } else {
        console.log("Conexión exitosa")
    }
});

// Realizador de consultas e identificador de errores 
const pacientes = "SELECT cor_ele_pac, cont_pac FROM `pacientes`";
conexion.query(pacientes,function(error,registros){
    if(error){
        throw error;
    }else{
        console.log(registros);
    }
});

// Realizador de consultas a indices especificos
/*
const pacientes = "SELECT * FROM `pacientes`";
conexion.query(pacientes,function(error,registros){
    if(error){
        throw error;
    }else{
        console.log(registros[0].num_doc_pac);
    }
});
*/

// Finalizador de Conexión
conexion.end()
