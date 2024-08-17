create database healthby
CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish_ci;

use healthby;
create table departamento
(
nom_dep varchar(20) primary key not null default "Cundinamarca",
num_afi_dep mediumint default null 
);
INSERT INTO `departamento` (`nom_dep`, `num_afi_dep`) VALUES ('Cundinamarca', NULL);

create table municipios 
(
cod_mun tinyint primary key not null unique auto_increment,
nom_mun varchar(30) not null,
num_afi_mun mediumint default null,
fk_nom_dep varchar(20),
foreign key(fk_nom_dep) references departamento(nom_dep)
);
INSERT INTO `municipios` (`cod_mun`, `nom_mun`, `num_afi_mun`, `fk_nom_dep`) VALUES (NULL, 'Cajicá', '40000', 'Cundinamarca'), (NULL, 'Fusagasugá', '27400', 'Cundinamarca'), (NULL, 'Chía', '75800', 'Cundinamarca');

create table sedes 
(
cod_sed tinyint primary key not null unique auto_increment,
nom_sed varchar(40) not null,
dir_sed varchar(50) default null, 
tel_sed varchar(20) default null,
cor_ele_sed varchar(50) default null
);
INSERT INTO `sedes` (`cod_sed`, `nom_sed`, `dir_sed`, `tel_sed`, `cor_ele_sed`) VALUES (NULL, 'Clínica SaludVida', 'Avenida 19 #100-50', '+57 6 123 4567', 'contacto@saludvida.com	'), (NULL, 'Centro Médico La Sabana', 'Carrera 23 #45-67', '+57 1 890 1234', 'citas@centromedicosabana.com'), (NULL, 'Sanatorio El Bosque', 'Transversal 5 #30-20', '+57 5 321 0987', 'sanatorio@elbosque.com');

create table municipios_sedes 
(
cod_mse tinyint primary key not null unique auto_increment,
fk_cod_mun tinyint,
fk_cod_sed tinyint, 
foreign key(fk_cod_mun) references municipios(cod_mun),
foreign key(fk_cod_sed) references sedes(cod_sed)
);

create table pacientes 
(
num_doc_pac varchar(15) primary key not null unique, 
nom_pac varchar(50) not null,
ape_pac varchar(50) not null,
fec_nac_pac date not null,
gen_pac varchar(12) default null,
dir_pac varchar(50) default null,
tel_pac varchar(20) default null,
cor_ele_pac varchar(50) not null,
cont_pac varchar(50) default null,
fec_afi_pac date default null,
his_med_pac text default null
);
INSERT INTO `pacientes` (`num_doc_pac`, `nom_pac`, `ape_pac`, `fec_nac_pac`, `gen_pac`, `dir_pac`, `tel_pac`, `cor_ele_pac`, `cont_pac`, `fec_afi_pac`, `his_med_pac`) VALUES ('10038770016', 'Juan Carlos', 'Pérez', '2000-08-03', 'Masculino', 'Calle 15 #10-01', '3152228800', 'juancaperez@gmail.com', NULL, '2018-06-30', NULL), ('7955588810', 'María Alejandra', 'Rodríguez Pachón', '2015-08-03', 'Femenino', 'Carrera 61 #13-24', '3158080906', 'marialejarod@gmail.com', NULL, '2007-05-13', NULL), ('1357924600', 'María Fernanda', 'Castillo', '2000-12-08', 'Femenino', 'Calle 101 #72-05', '3248998160', 'mafe1975@gmail.com', NULL, '2022-11-13', NULL);

create table sedes_pacientes
(
cod_spa int primary key not null unique auto_increment,
fk_cod_sed tinyint ,
fk_num_doc_pac varchar(15),
foreign key(fk_cod_sed) references sedes(cod_sed),
foreign key(fk_num_doc_pac) references pacientes(num_doc_pac)
);

create table categoria_laboral
(
cod_cla tinyint primary key not null unique auto_increment,
nom_cla varchar(30) not null,
des_cla varchar(200) not null
);
INSERT INTO `categoria_laboral` (`cod_cla`, `nom_cla`, `des_cla`) VALUES (NULL, 'Enfermero', 'Profesional especializado en el cuidado de los pacientes.'), (NULL, 'Cardiólogo ', 'Médico especializado en el diagnóstico, tratamiento y prevención de enfermedades del corazón.'), (NULL, 'Recepcionista ', 'Encargado de atender las solicitudes de los pacientes.');

create table trabajadores
(
num_doc_tra varchar(15) primary key not null unique,
nom_tra varchar(50) not null,
ape_tra varchar(50) not null,
fec_nac_tra date not null,
gen_tra varchar(12) default null,
dir_tra varchar(50) default null,
tel_tra varchar(20) default null,
cor_ele_tra varchar(50) not null,
cont_tra varchar(50) default null,
fec_vin_tra date default null,
fk_cod_sed tinyint,
fk_cod_cla tinyint,
foreign key(fk_cod_sed) references sedes(cod_sed),
foreign key(fk_cod_cla) references categoria_laboral(cod_cla)
);
INSERT INTO `trabajadores` (`num_doc_tra`, `nom_tra`, `ape_tra`, `fec_nac_tra`, `gen_tra`, `dir_tra`, `tel_tra`, `cor_ele_tra`, `cont_tra`, `fec_vin_tra`, `fk_cod_sed`, `fk_cod_cla`) VALUES ('1018456798', 'Laura', 'Gómez Martínez', '1987-08-07', 'Femenino', NULL, '3145678901', 'laura.gomez@gmail.com', NULL, '2018-08-04', '1', '1'), ('1020304050', 'Alejandro', 'Sánchez', '1973-03-12', 'Masculino', NULL, '3214567898', 'alejandosanches1509@gmail.com', NULL, '2016-10-15', '2', '2'), ('1020304040', 'Laura Andrea', 'Rodríguez', '2002-08-15', 'Femenino', NULL, '3025554980', 'juancamedina@gmail.com', NULL, '2019-01-30', '3', '2');

create table trabajadores_pacientes 
(
cod_tpa tinyint primary key not null unique auto_increment,
fk_num_doc_tra varchar(15),
fk_num_doc_pac varchar(15),
foreign key(fk_num_doc_tra) references trabajadores(num_doc_tra),
foreign key(fk_num_doc_pac) references pacientes(num_doc_pac)
);

create table especialidad
(
cod_esp tinyint primary key not null unique auto_increment,
nom_esp varchar (30) not null,
des_esp varchar(200) not null
);
INSERT INTO `especialidad` (`cod_esp`, `nom_esp`, `des_esp`) VALUES (NULL, 'Pediatría', 'El trabajador es especializado en la atención de niños y adolescentes. '), (NULL, 'Ginecología', 'El trabajador es especialista en la salud reproductiva de las mujeres, incluyendo el embarazo y el parto.'), (NULL, 'Fisioterapia ', 'El trabajador es especialista en la rehabilitación física de pacientes con lesiones o enfermedades que afectan el movimiento.');

create table trabajadores_especialidad
(
cod_tes tinyint primary key not null unique auto_increment,
fk_num_doc_tra varchar(15),
fk_cod_esp tinyint,
foreign key(fk_num_doc_tra) references trabajadores(num_doc_tra),
foreign key (fk_cod_esp) references especialidad(cod_esp)
);

create table citas_medicas
(
cod_cit_med int primary key not null unique auto_increment, 
esp_cit_med varchar(50) not null,
fyh_cit_med datetime not null,
mot_cit_med varchar(255) default null,
nom_pac_cit_med varchar(50) not null,
tel_cit_med varchar(20) default null,
cor_ele_cit_med varchar(50) not null,
fk_num_doc_pac varchar(15) not null,
foreign key(fk_num_doc_pac) references pacientes(num_doc_pac)
);
INSERT INTO `citas_medicas` (`cod_cit_med`, `esp_cit_med`, `fyh_cit_med`, `mot_cit_med`, `nom_pac_cit_med`, `tel_cit_med`, `cor_ele_cit_med`, `fk_num_doc_pac`) VALUES (NULL, 'Dr. Alejandro Sánchez', '2024-08-21 14:00:00', 'Tengo un dolor de migraña severa', 'Juan Carlos Pérez', '3152228800', 'juancaperez@gmail.com', '10038770016'), (NULL, 'Dra. Laura Rodríguez', '2024-08-29 08:30:00', 'Presento síntomas de rinitis alérgica desde la semana pasada', 'María Fernanda Castillo', '3248998160', 'mafe1975@gmail.com', '1357924600'), (NULL, 'Dr. Carlos Medina', '2024-08-20 14:15:00', 'Dolor intenso ubicado en la espalda baja', 'María Alejandra Rodríguez', '3158080906', 'marialejarod@gmail.com', '7955588810');

create table trabajadores_citas_medicas
(
cod_tcm int primary key not null unique,
fk_num_doc_tra varchar(15),
fk_cod_cit_med int,
foreign key(fk_num_doc_tra) references trabajadores(num_doc_tra),
foreign key(fk_cod_cit_med) references citas_medicas(cod_cit_med)
);

create table admins(
num_doc_adm varchar(15) primary key not null unique,
nom_adm varchar(50) not null,
ape_adm varchar(50) not null,
cor_ele_adm varchar(50) not null,
cont_adm varchar(255) not null
);