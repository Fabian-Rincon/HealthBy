// importamos libreria
const express = require('express');
const router = express.Router();

const conexion = require("./database/db")

// res.render para cargar archivos ejs 
// ruta index page o pagina principal
router.get('/', (req,res)=>{
    res.render('index');
});
// rutas a otras paginas
router.get('/pages/home', (req, res)=>{
    res.render('pages/home');
});
router.get('/pages/login', (req, res)=>{
    res.render('pages/login');
});
router.get('/pages/recovery', (req, res)=>{
    res.render('pages/recovery');
});
router.get('/pages/register', (req, res)=>{
    res.render('pages/register');
});

router.get('/pages/account/edit_data', (req, res)=>{
    res.render('pages/account/edit_data');
});
router.get('/pages/account/mod_password', (req, res)=>{
    res.render('pages/account/mod_password');
});
router.get('/pages/account/recovery_password', (req, res)=>{
    res.render('pages/account/recovery_password');
});

/* ----------Municipios---------- */
// Crear registros
router.get('/pages/municipalities/add_municipality', (req, res)=>{
    res.render('pages/municipalities/add_municipality');
});
// Editar registros 
router.get('/pages/municipalities/edit_municipality:cod_mun', (req, res)=>{
    const cod_mun = req.params.cod_mun;
    conexion.query('SELECT * FROM municipios WHERE cod_mun = ?',[cod_mun], (error, results)=>{
        if(error){
            throw error;
        }else{
            res.render('pages/municipalities/edit_municipality', {municipio:results[0]});
        }
    })
});
// Mostrar registros 
router.get('/pages/municipalities/mod_municipality', (req, res)=>{
    conexion.query('SELECT * FROM municipios', (error, results)=>{
        if(error){
            throw error;
        }else{
            res.render('pages/municipalities/mod_municipality', {results:results});
        }
    });
});
// ruta para eliminar
router.get('/pages/municipalities/delete_municipality:cod_mun', (req, res)=>{
    const cod_mun = req.params.cod_mun;
    conexion.query('DELETE FROM municipios WHERE cod_mun = ?',[cod_mun], (error, results)=>{
        if(error){
            throw error;
        }else{
            res.redirect('mod_municipality');
        }
    })
})

/* ----------Sedes---------- */
// Crear registros 
router.get('/pages/headquarters/add_headquarters', (req, res)=>{
    res.render('pages/headquarters/add_headquarters');
});
// Editar registros 
router.get('/pages/headquarters/edit_headquarters', (req, res)=>{
    res.render('pages/headquarters/edit_headquarters');
});
// Mostrar registros 
router.get('/pages/headquarters/mod_headquarters', (req, res)=>{
    conexion.query("SELECT * FROM sedes",(error,results)=>{
        if(error){
            throw error;
        }else{
            res.render('pages/headquarters/mod_headquarters', {results:results});
        }
    })
});

/* ----------Trabajadores---------- */
// Crear registros 
router.get('/pages/workers/add_worker', (req, res)=>{
    res.render('pages/workers/add_worker');
});
// Editar registros 
router.get('/pages/workers/edit_worker', (req, res)=>{
    res.render('pages/workers/edit_worker');
});
// Mostrar registros 
router.get('/pages/workers/mod_worker', (req, res)=>{
    conexion.query("SELECT * FROM trabajadores",(error,results)=>{
        if(error){
            throw error;
        }else{
            res.render('pages/workers/mod_worker', {results:results});
        }
    })
});

/* ----------Categoria Laboral - Trabajadores---------- */
// Crear registros 
router.get('/pages/laboral_category_workers/add_lab_cat', (req, res)=>{
    res.render('pages/laboral_category_workers/add_lab_cat');
});
// Editar registros 
router.get('/pages/laboral_category_workers/edit_lab_cat', (req, res)=>{
    res.render('pages/laboral_category_workers/edit_lab_cat');
});
// Mostrar registros 
router.get('/pages/laboral_category_workers/mod_lab_cat', (req, res)=>{
    conexion.query("SELECT * FROM categoria_laboral",(error,results)=>{
        if(error){
            throw error;
        }else{
            res.render('pages/laboral_category_workers/mod_lab_cat', {results:results});
        }
    })
});

/* ----------Especialidad - Trabajadores---------- */
// Crear registros 
router.get('/pages/speciality_workers/add_spe_work', (req, res)=>{
    res.render('pages/speciality_workers/add_spe_work');
});
// Editar registros 
router.get('/pages/speciality_workers/edit_spe_work', (req, res)=>{
    res.render('pages/speciality_workers/edit_spe_work');
});
// Mostrar registros 
router.get('/pages/speciality_workers/mod_spe_work', (req, res)=>{
    conexion.query("SELECT * FROM especialidad",(error,results)=>{
        if(error){
            throw error;
        }else{
            res.render('pages/speciality_workers/mod_spe_work', {results:results});
        }
    })
});

/* ----------Pacientes---------- */
// Crear registros 
router.get('/pages/patients/add_patient', (req, res)=>{
    res.render('pages/patients/add_patient');
});
// Editar registros 
router.get('/pages/patients/edit_patient', (req, res)=>{
    res.render('pages/patients/edit_patient');
});
// Mostrar registros 
router.get('/pages/patients/mod_patient', (req, res)=>{
    conexion.query("SELECT * FROM pacientes",(error,results)=>{
        if(error){
            throw error;
        }else{
            res.render('pages/patients/mod_patient', {results:results});
        }
    })
});

/* ----------Citas Medicas---------- */
// Crear registros 
router.get('/pages/medical_appoint/add_med_app', (req, res)=>{
    res.render('pages/medical_appoint/add_med_app');
});
// Editar registros 
router.get('/pages/medical_appoint/edit_med_app', (req, res)=>{
    res.render('pages/medical_appoint/edit_med_app');
});
// Mostrar registros 
router.get('/pages/medical_appoint/mod_med_app', (req, res)=>{
    conexion.query("SELECT * FROM citas_medicas",(error,results)=>{
        if(error){
            throw error;
        }else{
            res.render('pages/medical_appoint/mod_med_app', {results:results});
        }
    })
});

/* ----------controladores del crud---------- */
const crud = require('./controllers/crud');

// Municipios
router.post('/save_municipios', crud.save_municipios);
router.post('/update_municipios', crud.update_municipios);

// Sedes 
router.post('/save_sedes', crud.save_sedes);
/* router.post('/update_sedes', crud.update_sedes); */

// Trabajadores 
router.post('/save_trabajadores', crud.save_trabajadores);
/* router.post('/update_trabajadores', crud.update_trabajadores); */

// Categoria laboral - Trabajadores
router.post('/save_categoria_laboral', crud.save_categoria_laboral);
/* router.post('/update_categoria_laboral', crud.update_categoria_laboral); */

// Especialidad - Trabajadores 
router.post('/save_especialidad', crud.save_especialidad);
/* router.post('/update_especialidad', crud.update_especialidad); */

// Pacientes
router.post('/save_pacientes', crud.save_pacientes);
/* router.post('/update_pacientes', crud.update_pacientes); */

// Citas medicas
router.post('/save_citas_medicas', crud.save_citas_medicas);
/* router.post('/update_citas_medicas', crud.update_citas_medicas); */


// Exportando router para utilizarlo en otros lugares
module.exports = router;