const conexion = require('../database/db');

/* ----------Sección Municipios----------  */
// Crear registros 
exports.save_municipios = (req, res)=>{
    const nom_mun = req.body.nom_mun;
    const num_afi_mun = req.body.num_afi_mun;
    const fk_nom_dep = req.body.fk_nom_dep;

    conexion.query('INSERT INTO municipios SET ?', {nom_mun:nom_mun, num_afi_mun:num_afi_mun, fk_nom_dep:fk_nom_dep},(error, results)=>{
        if(error){
            console.log(error);
        }else{
            res.redirect('pages/municipalities/mod_municipality');
        }
    })
};
// Editar registros 
exports.update_municipios = (req, res)=>{
    const nom_mun = req.body.nom_mun;
    const cod_mun = req.body.cod_mun;
    const num_afi_mun = req.body.num_afi_mun;
    const fk_nom_dep = req.body.fk_nom_dep;

    conexion.query('UPDATE municipios SET ? WHERE cod_mun = ?',[{nom_mun:nom_mun, num_afi_mun:num_afi_mun, fk_nom_dep:fk_nom_dep}, cod_mun], (error, results)=>{
        if(error){
            console.log(error);
        }else{
            res.redirect('pages/municipalities/mod_municipality');
        }
    })
};

/* ----------Sección Sedes---------- */
// Crear registros
exports.save_sedes = (req, res)=>{
    const nom_sed = req.body.nom_sed;
    const dir_sed = req.body.dir_sed;
    const tel_sed = req.body.tel_sed;
    const cor_ele_sed = req.body.cor_ele_sed;

    conexion.query('INSERT INTO sedes SET ?',{nom_sed:nom_sed, dir_sed:dir_sed, tel_sed:tel_sed, cor_ele_sed:cor_ele_sed}, (error,results)=>{
        if(error){
            console.error(error);
        }else{
            res.redirect('pages/headquarters/mod_headquarters');
        }
    })
};
// Editar registros
exports.update_sedes = (req, res)=>{
    const cod_sed = req.body.cod_sed;
    const nom_sed = req.body.nom_sed;
    const dir_sed = req.body.dir_sed;
    const tel_sed = req.body.tel_sed;
    const cor_ele_sed = req.body.cor_ele_sed;

    conexion.query('UPDATE sedes SET ? WHERE cod_sed = ?',[{nom_sed:nom_sed, dir_sed:dir_sed, tel_sed:tel_sed, cor_ele_sed:cor_ele_sed},cod_sed], (error,results)=>{
        if(error){
            console.error(error);
        }else{
            res.redirect('pages/headquarters/mod_headquarters');
        }
    })
};

/* ----------Sección Trabajadores----------  */
// Crear registros
exports.save_trabajadores = (req, res)=>{
    const nom_tra = req.body.nom_tra;
    const ape_tra = req.body.ape_tra;
    const num_doc_tra = req.body.num_doc_tra;
    const fec_nac_tra = req.body.fec_nac_tra;
    const gen_tra = req.body.gen_tra;
    const tel_tra = req.body.tel_tra;
    const cor_ele_tra = req.body.cor_ele_tra;
    const fec_vin_tra = req.body.fec_vin_tra;
    const fk_cod_sed = req.body.fk_cod_sed;
    const fk_cod_cla = req.body.fk_cod_cla;
 
    conexion.query('INSERT INTO trabajadores SET ?',{ nom_tra:nom_tra, ape_tra:ape_tra, num_doc_tra:num_doc_tra, fec_nac_tra:fec_nac_tra, gen_tra:gen_tra, tel_tra:tel_tra, cor_ele_tra:cor_ele_tra, fec_vin_tra:fec_vin_tra, fk_cod_sed:fk_cod_sed, fk_cod_cla:fk_cod_cla}, (error,results)=>{
        if(error){
            console.error(error);
        }else{
            res.redirect('pages/workers/mod_worker');
        }
    })
};
// Editar registros
exports.update_trabajadores = (req, res)=>{
    const nom_tra = req.body.nom_tra;
    const ape_tra = req.body.ape_tra;
    const num_doc_tra = req.body.num_doc_tra;
    const fec_nac_tra = req.body.fec_nac_tra;
    const gen_tra = req.body.gen_tra;
    const tel_tra = req.body.tel_tra;
    const cor_ele_tra = req.body.cor_ele_tra;
    const fec_vin_tra = req.body.fec_vin_tra;
    const fk_cod_sed = req.body.fk_cod_sed;
    const fk_cod_cla = req.body.fk_cod_cla;

    conexion.query('UPDATE trabajadores set ? WHERE num_doc_tra = ?',[{ nom_tra:nom_tra, ape_tra:ape_tra, fec_nac_tra:fec_nac_tra, gen_tra:gen_tra, tel_tra:tel_tra, cor_ele_tra:cor_ele_tra, fec_vin_tra:fec_vin_tra, fk_cod_sed:fk_cod_sed, fk_cod_cla:fk_cod_cla}, num_doc_tra], (error,results)=>{
        if(error){
            console.error(error);
        }else{
            res.redirect('pages/workers/mod_worker');
        }
    })
};

/* ----------Sección Categoria Laboral - Trabajadores----------  */
// Crear registros
exports.save_categoria_laboral = (req, res)=>{
    const nom_cla = req.body.nom_cla;
    const des_cla = req.body.des_cla;

    conexion.query('INSERT INTO categoria_laboral SET ?',{nom_cla:nom_cla, des_cla:des_cla},(error,results)=>{
        if(error){
            console.error(error);
        }else{
            res.redirect('pages/laboral_category_workers/mod_lab_cat');
        }
    })
};
// Editar registros
exports.update_categoria_laboral = (req, res)=>{
    const cod_cla = req.body.cod_cla;
    const nom_cla = req.body.nom_cla;
    const des_cla = req.body.des_cla;

    conexion.query('UPDATE categoria_laboral SET ? WHERE cod_cla = ?',[{nom_cla:nom_cla, des_cla:des_cla},cod_cla], (error,results)=>{
        if(error){
            console.error(error);
        }else{
            res.redirect('pages/laboral_category_workers/mod_lab_cat');
        }
    })
};

/* ----------Sección Especialidad - Trabajadores----------  */
// Crear registros
exports.save_especialidad = (req, res)=>{
    const nom_esp = req.body.nom_esp;
    const des_esp = req.body.des_esp;

    conexion.query('INSERT INTO especialidad SET ?',{nom_esp:nom_esp, des_esp:des_esp} ,(error,results)=>{
        if(error){
            console.error(error);
        }else{
            res.redirect('pages/speciality_workers/mod_spe_work');
        }
    })
};
// Editar registros
exports.update_especialidad = (req, res)=>{
    const cod_esp = req.body.cod_esp; 
    const nom_esp = req.body.nom_esp;
    const des_esp = req.body.des_esp;

    conexion.query('UPDATE especialidad SET ? WHERE cod_esp = ?',[{nom_esp:nom_esp, des_esp:des_esp},cod_esp], (error,results)=>{
        if(error){
            console.error(error);
        }else{
            res.redirect('pages/speciality_workers/mod_spe_work');
        }
    })
};

/* ----------Sección Pacientes----------  */
// Crear registros
exports.save_pacientes = (req, res)=>{
    const nom_pac = req.body.nom_pac;
    const ape_pac = req.body.ape_pac;
    const num_doc_pac = req.body.num_doc_pac;
    const fec_nac_pac = req.body.fec_nac_pac;
    const gen_pac = req.body.gen_pac;
    const dir_pac = req.body.dir_pac;
    const tel_pac = req.body.tel_pac;
    const cor_ele_pac = req.body.cor_ele_pac;
    const fec_afi_pac = req.body.fec_afi_pac;

    conexion.query('INSERT INTO pacientes SET ?',{nom_pac:nom_pac, ape_pac:ape_pac, num_doc_pac:num_doc_pac, fec_nac_pac:fec_nac_pac, gen_pac:gen_pac, dir_pac:dir_pac, tel_pac:tel_pac, cor_ele_pac:cor_ele_pac, fec_afi_pac:fec_afi_pac} ,(error,results)=>{
        if(error){
            console.error(error);
        }else{
            res.redirect('pages/patients/mod_patient');
        }
    })
};
// Editar registros
exports.update_pacientes = (req, res)=>{
    const nom_pac = req.body.nom_pac;
    const ape_pac = req.body.ape_pac;
    const num_doc_pac = req.body.num_doc_pac;
    const fec_nac_pac = req.body.fec_nac_pac;
    const gen_pac = req.body.gen_pac;
    const dir_pac = req.body.dir_pac;
    const tel_pac = req.body.tel_pac;
    const cor_ele_pac = req.body.cor_ele_pac;
    const fec_afi_pac = req.body.fec_afi_pac;

    conexion.query('UPDATE pacientes SET ? WHERE num_doc_pac = ?',[{nom_pac:nom_pac, ape_pac:ape_pac, fec_nac_pac:fec_nac_pac, gen_pac:gen_pac, dir_pac:dir_pac, tel_pac:tel_pac, cor_ele_pac:cor_ele_pac, fec_afi_pac:fec_afi_pac},num_doc_pac], (error,results)=>{
        if(error){
            console.error(error);
        }else{
            res.redirect('pages/patients/mod_patient');
        }
    })
};

/* ----------Sección Citas Medicas----------  */
// Crear registros
exports.save_citas_medicas = (req, res)=>{
    const esp_cit_med = req.body.esp_cit_med;
    const fyh_cit_med = req.body.fyh_cit_med;
    const mot_cit_med = req.body.mot_cit_med;
    const nom_pac_cit_med = req.body.nom_pac_cit_med;
    const fk_num_doc_pac = req.body.fk_num_doc_pac;
    const tel_cit_med = req.body.tel_cit_med;
    const cor_ele_cit_med = req.body.cor_ele_cit_med;

    conexion.query('INSERT INTO citas_medicas SET ?',{esp_cit_med:esp_cit_med, fyh_cit_med:fyh_cit_med, mot_cit_med:mot_cit_med, nom_pac_cit_med:nom_pac_cit_med, fk_num_doc_pac:fk_num_doc_pac, tel_cit_med:tel_cit_med, cor_ele_cit_med:cor_ele_cit_med} ,(error,results)=>{
        if(error){
            console.error(error);
        }else{
            res.redirect('pages/medical_appoint/mod_med_app');
        }
    })
};
// Editar registros
exports.update_citas_medicas = (req, res)=>{
    const cod_cit_med = req.body.cod_cit_med;
    const esp_cit_med = req.body.esp_cit_med;
    const fyh_cit_med = req.body.fyh_cit_med;
    const mot_cit_med = req.body.mot_cit_med;
    const nom_pac_cit_med = req.body.nom_pac_cit_med;
    const fk_num_doc_pac = req.body.fk_num_doc_pac;
    const tel_cit_med = req.body.tel_cit_med;
    const cor_ele_cit_med = req.body.cor_ele_cit_med;

    conexion.query('UPDATE citas_medicas SET ? WHERE cod_cit_med = ?',[{esp_cit_med:esp_cit_med, fyh_cit_med:fyh_cit_med, mot_cit_med:mot_cit_med, nom_pac_cit_med:nom_pac_cit_med, fk_num_doc_pac:fk_num_doc_pac, tel_cit_med:tel_cit_med, cor_ele_cit_med:cor_ele_cit_med},cod_cit_med], (error,results)=>{
        if(error){
            console.error(error);
        }else{
            res.redirect('pages/medical_appoint/mod_med_app');
        }
    })
};

/* ----------Sección Cuenta----------  */
/* // Editar informacion
exports.update_pacientes = (req, res)=>{
    const nom_pac = req.body.nom_pac;
    const ape_pac = req.body.ape_pac;
    const num_doc_pac = req.body.num_doc_pac;
    const fec_nac_pac = req.body.fec_nac_pac;
    const gen_pac = req.body.gen_pac;
    const dir_pac = req.body.dir_pac;
    const tel_pac = req.body.tel_pac;
    const cor_ele_pac = req.body.cor_ele_pac;
    const fec_afi_pac = req.body.fec_afi_pac;

    conexion.query('UPDATE pacientes SET ? WHERE num_doc_pac = ?',[{nom_pac:nom_pac, ape_pac:ape_pac, fec_nac_pac:fec_nac_pac, gen_pac:gen_pac, dir_pac:dir_pac, tel_pac:tel_pac, cor_ele_pac:cor_ele_pac, fec_afi_pac:fec_afi_pac},num_doc_pac], (error,results)=>{
        if(error){
            console.error(error);
        }else{
            res.redirect('pages/patients/mod_patient');
        }
    })
};
 */