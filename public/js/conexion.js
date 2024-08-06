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
/* --------------------------------------------------------------------------- */

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

/* --------------------------------------------------------------------------- */

/* 
// Agregar registro a base de datos y consultarlo mediante la cantidad total de registros -1
const AGREGAR_REGISTRO = "INSERT INTO pacientes (num_doc_pac, nom_pac, ape_pac, fec_nac_pac, gen_pac, dir_pac, tel_pac, cor_ele_pac, fec_afi_pac, cont_pac, his_med_pac) VALUES ('1000000007', 'Pepito ', 'Perez', '2014-04-23', 'Masculino', 'Direccion de ejemplo Pepito', '3010000000', 'pepitoperez54@gmail.com', '2020-11-24', 'pepitoperez1111', NULL)";
conexion.query(AGREGAR_REGISTRO, function(error,nuevoRegistro){
    if(error){
        throw error;
    } else {
        console.log("Datos insertados correctamente");
    }
});

// Mostrar ultimo registro agregado
const PACIENTES = "SELECT * FROM pacientes";
conexion.query(PACIENTES,function(error,registros){
    if(error){
        throw error;
    }else{
        console.log(registros[registros.length-1]);
    }
});
 */
/* --------------------------------------------------------------------------- */

/* 
// Modificar un registro ya agregado a la base de datos y consultarlo
const MODIFICAR = "UPDATE pacientes SET nom_pac = 'juanito', ape_pac ='Molina', dir_pac = 'Dirreción de Juanito', cor_ele_pac = 'juanitomolina@gmail.com', cont_pac = 'juanitomolina1234' WHERE pacientes.num_doc_pac = '1000000003'"
conexion.query(MODIFICAR, function(error,registros){
    if(error){
        throw error;
    }else{
        console.log("Datos modificados correctamente");
    }
});

// Consultar todos los registros 
const PACIENTES = "SELECT * FROM pacientes";
conexion.query(PACIENTES,function(error,registros){
    if(error){
        throw error;
    }else{
        console.log(registros);
    }
});
 */

/* --------------------------------------------------------------------------- */

// Eliminar registros en la base de datos
const ELIMINAR = "DELETE FROM pacientes WHERE pacientes.num_doc_pac = '1000000007'"
conexion.query(ELIMINAR, function(error,registros){
    if(error){
        throw error;
    }else{
        console.log("Datos eliminados correctamente")
    }
})

//Consultar todos los registros
const PACIENTES = "SELECT * FROM pacientes";
conexion.query(PACIENTES,function(error,registros){
    if(error){
        throw error;
    }else{
        console.log(registros);
    }
});

/* --------------------------------------------------------------------------- */

// Finalizador de Conexión
conexion.end()

/*
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
*/