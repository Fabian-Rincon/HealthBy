// importamos libreria
const express = require('express');
const router = express.Router();

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

router.get('/pages/headquarters/add_headquarters', (req, res)=>{
    res.render('pages/headquarters/add_headquarters');
});
router.get('/pages/headquarters/edit_headquarters', (req, res)=>{
    res.render('pages/headquarters/edit_headquarters');
});
router.get('/pages/headquarters/mod_headquarters', (req, res)=>{
    res.render('pages/headquarters/mod_headquarters');
});

router.get('/pages/laboral_category_workers/add_lab_cat', (req, res)=>{
    res.render('/pages/laboral_category_workers/add_lab_cat');
});
router.get('/pages/laboral_category_workers/edit_lab_cat', (req, res)=>{
    res.render('/pages/laboral_category_workers/edit_lab_cat');
});
router.get('/pages/laboral_category_workers/mod_lab_cat', (req, res)=>{
    res.render('pages/laboral_category_workers/mod_lab_cat');
});

router.get('/pages/medical_appoint/add_med_app', (req, res)=>{
    res.render('pages/medical_appoint/add_med_app');
});
router.get('/pages/medical_appoint/edit_med_app', (req, res)=>{
    res.render('pages/medical_appoint/edit_med_app');
});
router.get('/pages/medical_appoint/mod_med_app', (req, res)=>{
    res.render('pages/medical_appoint/mod_med_app');
});

router.get('/pages/municipalities/add_municipality', (req, res)=>{
    res.render('pages/municipalities/add_municipality');
});
router.get('/pages/municipalities/edit_municipality', (req, res)=>{
    res.render('pages/municipalities/edit_municipality');
});
router.get('/pages/municipalities/mod_municipality', (req, res)=>{
    res.render('pages/municipalities/mod_municipality');
});

router.get('/pages/patients/add_patient', (req, res)=>{
    res.render('pages/patients/add_patient');
});
router.get('/pages/patients/edit_patient', (req, res)=>{
    res.render('pages/patients/edit_patient');
});
router.get('/pages/patients/mod_patient', (req, res)=>{
    res.render('pages/patients/mod_patient');
});

router.get('/pages/specialty_workers/add_spe_work', (req, res)=>{
    res.render('pages/specialty_workers/add_spe_work');
});
router.get('/pages/specialty_workers/edit_spe_work', (req, res)=>{
    res.render('pages/specialty_workers/edit_spe_work');
});
router.get('/pages/specialty_workers/mod_spe_work', (req, res)=>{
    res.render('pages/specialty_workers/mod_spe_work');
});

router.get('/pages/workers/add_worker', (req, res)=>{
    res.render('pages/workers/add_worker');
});
router.get('/pages/workers/edit_worker', (req, res)=>{
    res.render('pages/workers/edit_worker');
});
router.get('/pages/workers/mod_worker', (req, res)=>{
    res.render('pages/workers/mod_worker');
});

// exporta para poder usar router
module.exports = router;