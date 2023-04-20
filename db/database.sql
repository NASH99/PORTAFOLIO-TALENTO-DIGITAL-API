create database BPMCommunity;
use BPMCommunity;

CREATE TABLE genero_musical(
	idGenero_musical INT AUTO_INCREMENT PRIMARY KEY,
    nombreGenero_musical VARCHAR(50) NOT NULL,
    imagenGenero_musical VARCHAR(2000) 
);

INSERT INTO genero_musical(nombreGenero_musical,imagenGenero_musical) 
VALUES 
('rock','src/img/covers/rock.png'),
('electronica','src/img/covers/electronica.png'),
('reggaeton','src/img/covers/reggaeton.png'),
('pop','src/img/covers/pop.png');

CREATE TABLE usuario( 
	idUsuario INT AUTO_INCREMENT PRIMARY KEY,
    nombreUsuario VARCHAR(25) NOT NULL ,
	apellidoUsuario VARCHAR(25) NOT NULL ,
	nickUsuario varchar(30) NOT NULL,
    emailUsuario varchar(30) NOT NULL,
    claveUsuario varchar(30) NOT NULL,
    isadminUsuario boolean DEFAULT false,
    idGenero_musical int,
    FOREIGN KEY (idGenero_musical) REFERENCES genero_musical(idGenero_musical)
);

INSERT INTO usuario (nombreUsuario,apellidoUsuario,nickUsuario,emailUsuario,claveUsuario,isadminUsuario,idGenero_musical)
VALUES
('ignacio','alvarado','ignacio99k','ignacio99k@hotmail.com','123',true,3),
('pedro','heiser','nico123','pedro@gmail.com','123',false,2),
('nicolas','sanhuesa','nico123','nico@gmail.com','123',true,1);
select * from usuario;

CREATE TABLE publicacion(
	idPublicaciones INT AUTO_INCREMENT PRIMARY KEY,
    tituloPublicacion VARCHAR(50) NOT NULL,
    descripcionPublicacion VARCHAR(2000) NOT NULL,
    fechaPublicacion date NOT NULL ,
    idUsuario INT,
    FOREIGN KEY (idUsuario) REFERENCES usuario(idUsuario)
);

INSERT INTO publicacion (tituloPublicacion,descripcionPublicacion,fechaPublicacion,idUsuario)
VALUES
('¿Que opinan de mi track?','descripcion de la publicacion','2023-03-28',1),
('Tengo problemas con el DAW','descripcion de la publicacion','2023-03-27',2),
('Colaboremos','descripcion de la publicacion','2023-03-26',3);
select * from publicacion;

CREATE TABLE pais(
	idPais INT AUTO_INCREMENT PRIMARY KEY,
    nombrePais VARCHAR(30)
);
INSERT INTO pais (nombrePais) VALUES ('chile'),('eeuu'),('canada');
select * from pais;

CREATE TABLE perfil( 
	idPerfil INT AUTO_INCREMENT PRIMARY KEY,
    tituloPerfil VARCHAR(100),
	telefonoPerfil int,
	nacimientoPerfil date,
    generoPerfil varchar(20),
    biografiaPerfil varchar(200),
	idUsuario INT,
    idPais INT,
	FOREIGN KEY (idUsuario) REFERENCES usuario(idUsuario),
	FOREIGN KEY (idPais) REFERENCES pais(idPais)
);

INSERT INTO perfil (tituloPerfil,telefonoPerfil,nacimientoPerfil,generoPerfil,biografiaPerfil,idUsuario,idPais)
VALUES
('Bienvenidos a mi perfil ignacio',934318746,'1999-07-14','masculino','Me inicie en la musica...',1,1),
('Bienvenidos a mi perfil pedro',934318745,'1998-07-14','masculino','Me inicie en la musica...',2,2),
('Bienvenidos a mi perfil nicolas',934318744,'1995-07-14','masculino','Me inicie en la musica...',3,3);
select * from perfil;


drop table publicacion;
drop table perfil;
drop table pais;
drop table usuario;
drop table genero_musical;