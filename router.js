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
    conexion.query("SELECT * FROM municipios WHERE cod_mun = ?",[cod_mun], (error, results)=>{
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
// Eliminar registros
router.get('/pages/municipalities/delete_municipality:cod_mun', (req, res)=>{
    const cod_mun = req.params.cod_mun;
    conexion.query('DELETE FROM municipios WHERE cod_mun = ?',[cod_mun], (error, results)=>{
        if(error){
            throw error;
        }else{
            res.redirect('mod_municipality');
        }
    })
});

/* ----------Sedes---------- */
// Crear registros 
router.get('/pages/headquarters/add_headquarters', (req, res)=>{
    res.render('pages/headquarters/add_headquarters');
});
// Editar registros 
router.get('/pages/headquarters/edit_headquarters:cod_sed', (req, res)=>{
    const cod_sed = req.params.cod_sed;
    conexion.query("SELECT * FROM sedes WHERE cod_sed=?", [cod_sed], (error, results)=>{
        if(error){
            throw error;
        }else{
            res.render('pages/headquarters/edit_headquarters', {sede:results[0]});
        }
    })
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
// Eliminar registros
router.get('/pages/headquarters/delete_headquarters:cod_sed', (req, res)=>{
    const cod_sed = req.params.cod_sed;
    conexion.query('DELETE FROM sedes WHERE cod_sed = ?',[cod_sed], (error, results)=>{
        if(error){
            throw error;
        }else{
            res.redirect('mod_headquarters');
        }
    })
});


/* ----------Trabajadores---------- */
// Crear registros 
router.get('/pages/workers/add_worker', (req, res)=>{
    res.render('pages/workers/add_worker');
});
// Editar registros 
router.get('/pages/workers/edit_worker:num_doc_tra', (req, res)=>{
    const num_doc_tra = req.params.num_doc_tra;
    conexion.query("SELECT num_doc_tra , nom_tra , ape_tra , date_format(fec_nac_tra, '%Y-%m-%d') as fec_nac_tra , gen_tra , dir_tra , tel_tra , cor_ele_tra , cont_tra , date_format(fec_vin_tra,'%Y-%m-%d') as fec_vin_tra , fk_cod_sed , fk_cod_cla FROM trabajadores WHERE num_doc_tra = ?", [num_doc_tra], (error, results)=>{
        if(error){
            throw error;
        }else{
            res.render('pages/workers/edit_worker', {trabajador:results[0]});
        }
    })
});
// Mostrar registros 
router.get('/pages/workers/mod_worker', (req, res)=>{
    conexion.query("SELECT num_doc_tra , nom_tra , ape_tra , date_format(fec_nac_tra, '%d-%m-%Y') as fec_nac_tra , gen_tra , dir_tra , tel_tra , cor_ele_tra , cont_tra , date_format(fec_vin_tra,'%d-%m-%Y') as fec_vin_tra , fk_cod_sed , fk_cod_cla FROM trabajadores",(error,results)=>{
        if(error){
            throw error;
        }else{
            res.render('pages/workers/mod_worker', {results:results});
        }
    })
});
// Eliminar registros
router.get('/pages/workers/delete_worker:num_doc_tra', (req, res)=>{
    const num_doc_tra = req.params.num_doc_tra;
    conexion.query('DELETE FROM trabajadores WHERE num_doc_tra = ?',[num_doc_tra], (error, results)=>{
        if(error){
            throw error;
        }else{
            res.redirect('mod_worker');
        }
    })
});

/* ----------Categoria Laboral - Trabajadores---------- */
// Crear registros 
router.get('/pages/laboral_category_workers/add_lab_cat', (req, res)=>{
    res.render('pages/laboral_category_workers/add_lab_cat');
});
// Editar registros 
router.get('/pages/laboral_category_workers/edit_lab_cat:cod_cla', (req, res)=>{
    const cod_cla = req.params.cod_cla;
    conexion.query("SELECT * FROM categoria_laboral WHERE cod_cla=?", [cod_cla], (error, results)=>{
        if(error){
            throw error;
        }else{
            res.render('pages/laboral_category_workers/edit_lab_cat', {categoria_laboral:results[0]});
        }
    })
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
//Eliminar registros
router.get('/pages/laboral_category_workers/delete_lab_cat:cod_cla', (req, res)=>{
    const cod_cla = req.params.cod_cla;
    conexion.query('DELETE FROM categoria_laboral WHERE cod_cla = ?',[cod_cla], (error, results)=>{
        if(error){
            throw error;
        }else{
            res.redirect('mod_lab_cat');
        }
    })
});

/* ----------Especialidad - Trabajadores---------- */
// Crear registros 
router.get('/pages/speciality_workers/add_spe_work', (req, res)=>{
    res.render('pages/speciality_workers/add_spe_work');
});
// Editar registros 
router.get('/pages/speciality_workers/edit_spe_work:cod_esp', (req, res)=>{
    const cod_esp = req.params.cod_esp;
    conexion.query("SELECT * FROM especialidad WHERE cod_esp=?", [cod_esp], (error, results)=>{
        if(error){
            throw error;
        }else{
            res.render('pages/speciality_workers/edit_spe_work', {especialidad:results[0]});
        }
    })
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
// ELiminar registros 
router.get('/pages/speciality_workers/delete_spe_work:cod_esp', (req, res)=>{
    const cod_esp = req.params.cod_esp;
    conexion.query('DELETE FROM especialidad WHERE cod_esp = ?',[cod_esp], (error, results)=>{
        if(error){
            throw error;
        }else{
            res.redirect('mod_spe_work');
        }
    })
});

/* ----------Pacientes---------- */
// Crear registros 
router.get('/pages/patients/add_patient', (req, res)=>{
    res.render('pages/patients/add_patient');
});
// Editar registros 
router.get('/pages/patients/edit_patient:num_doc_pac', (req, res)=>{
    const num_doc_pac = req.params.num_doc_pac;
    conexion.query("SELECT  num_doc_pac , nom_pac , ape_pac , date_format(fec_nac_pac, '%Y-%m-%d') as fec_nac_pac , gen_pac , dir_pac ,  tel_pac ,  cor_ele_pac , cont_pac , date_format(fec_afi_pac, '%Y-%m-%d') as fec_afi_pac ,  his_med_pac FROM pacientes WHERE num_doc_pac=?", [num_doc_pac], (error, results)=>{
        if(error){
            throw error;
        }else{
            res.render('pages/patients/edit_patient', {paciente:results[0]});
        }
    })
});
// Mostrar registros 
router.get('/pages/patients/mod_patient', (req, res)=>{
    conexion.query("SELECT  num_doc_pac , nom_pac , ape_pac , date_format(fec_nac_pac, '%d-%m-%Y') as fec_nac_pac , gen_pac , dir_pac ,  tel_pac ,  cor_ele_pac , cont_pac , date_format(fec_afi_pac, '%d-%m-%Y') as fec_afi_pac ,  his_med_pac FROM pacientes",(error,results)=>{
        if(error){
            throw error;
        }else{
            res.render('pages/patients/mod_patient', {results:results});
        }
    })
});
// Eliminar registros 
router.get('/pages/patients/delete_patient:num_doc_pac', (req, res)=>{
    const num_doc_pac = req.params.num_doc_pac;
    conexion.query('DELETE FROM pacientes WHERE num_doc_pac = ?',[num_doc_pac], (error, results)=>{
        if(error){
            throw error;
        }else{
            res.redirect('mod_patient');
        }
    })
});

/* ----------Citas Medicas---------- */
// Crear registros 
router.get('/pages/medical_appoint/add_med_app', (req, res)=>{
    res.render('pages/medical_appoint/add_med_app');
});
// Editar registros 
router.get('/pages/medical_appoint/edit_med_app:cod_cit_med', (req, res)=>{
    const cod_cit_med = req.params.cod_cit_med;
    conexion.query("SELECT cod_cit_med , esp_cit_med , date_format(fyh_cit_med, '%Y-%m-%dT%H:%i') as fyh_cit_med ,  mot_cit_med , nom_pac_cit_med ,  tel_cit_med , cor_ele_cit_med , fk_num_doc_pac FROM citas_medicas WHERE cod_cit_med=?", [cod_cit_med], (error, results)=>{
        if(error){
            throw error;
        }else{
            res.render('pages/medical_appoint/edit_med_app', {cita_medica:results[0]});
        }
    })
});
// Mostrar registros 
router.get('/pages/medical_appoint/mod_med_app', (req, res)=>{
    conexion.query("SELECT cod_cit_med , esp_cit_med , date_format(fyh_cit_med, '%d-%m-%Y | %h:%i %p') as fyh_cit_med ,  mot_cit_med , nom_pac_cit_med ,  tel_cit_med , cor_ele_cit_med , fk_num_doc_pac FROM citas_medicas",(error,results)=>{
        if(error){
            throw error;
        }else{
            res.render('pages/medical_appoint/mod_med_app', {results:results});
        }
    })
});
// Eliminar registros 
router.get('/pages/medical_appoint/delete_med_app:cod_cit_med', (req, res)=>{
    const cod_cit_med = req.params.cod_cit_med;
    conexion.query('DELETE FROM citas_medicas WHERE cod_cit_med = ?',[cod_cit_med], (error, results)=>{
        if(error){
            throw error;
        }else{
            res.redirect('mod_med_app');
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
router.post('/update_sedes', crud.update_sedes);

// Trabajadores 
router.post('/save_trabajadores', crud.save_trabajadores);
router.post('/update_trabajadores', crud.update_trabajadores);

// Categoria laboral - Trabajadores
router.post('/save_categoria_laboral', crud.save_categoria_laboral);
router.post('/update_categoria_laboral', crud.update_categoria_laboral);

// Especialidad - Trabajadores 
router.post('/save_especialidad', crud.save_especialidad);
router.post('/update_especialidad', crud.update_especialidad);

// Pacientes
router.post('/save_pacientes', crud.save_pacientes);
router.post('/update_pacientes', crud.update_pacientes);

// Citas medicas
router.post('/save_citas_medicas', crud.save_citas_medicas);
router.post('/update_citas_medicas', crud.update_citas_medicas);


// Exportando router para utilizarlo en otros lugares
module.exports = router;