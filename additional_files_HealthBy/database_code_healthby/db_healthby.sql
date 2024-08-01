create database healthby
CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish_ci;

use healthby;
create table departamento
(
nom_dep varchar(20) primary key not null default "cundinamarca",
num_afi_dep mediumint default null 
);

create table municipios 
(
cod_mun tinyint primary key not null auto_increment,
nom_mun varchar(30) not null,
num_afi_mun mediumint default null,
fk_nom_dep varchar(20),
foreign key(fk_nom_dep) references departamento(nom_dep)
);

create table sedes 
(
cod_sed tinyint primary key not null auto_increment,
nom_sed varchar(40) not null,
dir_sed varchar(50) default null, 
tel_sed varchar(20) default null,
cor_sed varchar(50) default null
);

create table municipios_sedes 
(
cod_mse tinyint primary key not null auto_increment,
fk_cod_mun tinyint,
fk_cod_sed tinyint, 
foreign key(fk_cod_mun) references municipios(cod_mun),
foreign key(fk_cod_sed) references sedes(cod_sed)
);

create table pacientes 
(
num_doc_pac varchar(15) primary key not null, 
nom_pac varchar(50) not null,
ape_pac varchar(50) not null,
fec_nac_pac date default null,
gen_pac varchar(12) default null,
dir_pac varchar(50) default null,
tel_pac varchar(20),
cor_ele_pac varchar(50),
fec_afi_pac date not null,
cont_pac varchar(50) not null,
his_med_pac text default null
);

create table sedes_pacientes
(
cod_spa int primary key not null auto_increment,
fk_cod_sed tinyint ,
fk_num_doc_pac varchar(15),
foreign key(fk_cod_sed) references sedes(cod_sed),
foreign key(fk_num_doc_pac) references pacientes(num_doc_pac)
);

create table categoria_laboral
(
cod_cla tinyint primary key not null auto_increment,
nom_cla varchar(30) not null,
des_cla varchar(200) default null
);

create table trabajadores
(
num_doc_tra varchar(15) primary key not null,
nom_tra varchar(50) not null,
ape_tra varchar(50) not null,
fec_nac_tra date default null,
gen_tra varchar(12) default null,
dir_tra varchar(50) default null,
tel_tra varchar(20) default null,
cor_ele_tra varchar(50) default null,
fec_vin_tra date not null,
cont_tra varchar(50) not null,
fk_cod_sed tinyint,
fk_cod_cla tinyint,
foreign key(fk_cod_sed) references sedes(cod_sed),
foreign key(fk_cod_cla) references categoria_laboral(cod_cla)
);

create table trabajadores_pacientes 
(
cod_tpa tinyint primary key not null auto_increment,
fk_num_doc_tra varchar(15),
fk_num_doc_pac varchar(15),
foreign key(fk_num_doc_tra) references trabajadores(num_doc_tra),
foreign key(fk_num_doc_pac) references pacientes(num_doc_pac)
);

create table especialidad
(
cod_esp tinyint primary key not null auto_increment,
nom_esp varchar (30) not null,
des_esp varchar(200) default null
);

create table trabajadores_especialidad
(
cod_tes tinyint primary key not null auto_increment,
fk_num_doc_tra varchar(15),
fk_cod_esp tinyint,
foreign key(fk_num_doc_tra) references trabajadores(num_doc_tra),
foreign key (fk_cod_esp) references especialidad(cod_esp)
);

create table citas_medicas
(
cod_cit_med int primary key not null auto_increment, 
esp_cit_med varchar(50) not null,
fyh_cit_med datetime not null,
mot_cit_med varchar(255) default null,
nom_pac_cit_med varchar(50) not null,
tel_cit_med varchar(20) default null,
cor_ele_cit_med varchar(50) default null,
fk_num_doc_pac varchar(15),
foreign key(fk_num_doc_pac) references pacientes(num_doc_pac)
);

create table trabajadores_citas_medicas
(
cod_tcm int primary key not null,
fk_num_doc_tra varchar(15),
fk_cod_cit_med int,
foreign key(fk_num_doc_tra) references trabajadores(num_doc_tra),
foreign key(fk_cod_cit_med) references citas_medicas(cod_cit_med)
);

create table admins(
num_doc_adm int primary key not null,
nom_adm varchar(50) not null,
ape_adm varchar(50) not null,
cor_ele_adm varchar(50) not null,
cont_adm varchar(50) not null
);