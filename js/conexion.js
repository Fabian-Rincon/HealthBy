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

/*
// Realizador de consultas e identificador de errores 
const PACIENTES = "SELECT * FROM pacientes";
conexion.query(PACIENTES,function(error,registros){
    if(error){
        throw error;
    }else{
        console.log(registros);
    }
});

// Realizador de consultas a indices especificos
const PACIENTES = "SELECT * FROM pacientes";
conexion.query(PACIENTES,function(error,registros){
    if(error){
        throw error;
    }else{
        console.log(registros[3].num_doc_pac);
    }
});
*/

// Agregar registro a base de datos y consultarlo mediante la cantidad total de registros -1
const AGREGAR_REGISTRO = "INSERT INTO pacientes (num_doc_pac, nom_pac, ape_pac, fec_nac_pac, gen_pac, dir_pac, tel_pac, cor_ele_pac, fec_afi_pac, cont_pac, his_med_pac) VALUES ('1000000001', 'Pepito ', 'Perez', '2014-04-23', 'Masculino', 'Direccion de ejemplo Pepito', '3010000000', 'pepitoperez54@gmail.com', '2020-11-24', 'pepitoperez1111', NULL)";
conexion.query(AGREGAR_REGISTRO, function(error,nuevoRegistro){
    if(error){
        throw error;
    } else {
        console.log("Datos insertados correctamente");
    }
});

const PACIENTES = "SELECT * FROM pacientes";
conexion.query(PACIENTES,function(error,registros){
    if(error){
        throw error;
    }else{
        console.log(registros[registros.length-1]);
    }
});

// Finalizador de Conexión
conexion.end()