const conexion = require('../database/db');

exports.save_municipios = (req, res)=>{
    const nom_mun = req.body.nom_mun;
    const cod_mun = req.body.cod_mun;
    const num_afi_mun = req.body.num_afi_mun;
    const fk_nom_dep = req.body.fk_nom_dep;
    conexion.query('INSERT INTO municipios SET ?', {nom_mun:nom_mun, cod_mun:cod_mun, num_afi_mun:num_afi_mun, fk_nom_dep:fk_nom_dep},(error, results)=>{
        if(error){
            console.log(error);
        }else{
            res.redirect('pages/municipalities/mod_municipality');
        }
    })
};

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