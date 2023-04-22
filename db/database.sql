
use BPMCommunity;

CREATE TABLE genero_musical(
	idGenero_musical INT AUTO_INCREMENT PRIMARY KEY,
    nombreGenero_musical VARCHAR(50) NOT NULL,
    imagenGenero_musical VARCHAR(2000) 
);
INSERT INTO genero_musical(nombreGenero_musical,imagenGenero_musical) 
VALUES 
('afro','/img/covers/afro.png'),
('blues','/img/covers/blues.png'),
('jazz','/img/covers/jazz.png'),
('r&b','/img/covers/r&b.png'),
('salsa','/img/covers/salsa.png'),
('rock','/img/covers/rock.png'),
('electronica','/img/covers/electronica.png'),
('reggaeton','/img/covers/reggaeton.png'),
('pop','/img/covers/pop.png');

CREATE TABLE pais(
	idPais INT AUTO_INCREMENT PRIMARY KEY,
    nombrePais VARCHAR(30)
);
INSERT INTO pais (nombrePais) VALUES ('chile'),('eeuu'),('canada');

CREATE TABLE perfil( 
	idPerfil INT AUTO_INCREMENT PRIMARY KEY,
    tituloPerfil VARCHAR(100) DEFAULT '',
    nombreArtistaPerfil varchar(20) DEFAULT '',
	telefonoPerfil int DEFAULT 0,
	nacimientoPerfil date,
    generoPerfil varchar(20),
    biografiaPerfil varchar(200) DEFAULT '',
    idPais INT,
	FOREIGN KEY (idPais) REFERENCES pais(idPais)
);
INSERT INTO perfil (tituloPerfil,nombreArtistaPerfil,telefonoPerfil,nacimientoPerfil,generoPerfil,biografiaPerfil,idPais)
VALUES
('Bienvenidos a mi perfil ignacio','NASH',934318746,'1999-07-14','masculino','Me inicie en la musica...',1),
('Bienvenidos a mi perfil pedro','Pedro Pascal',934318745,'1998-07-14','masculino','Me inicie en la musica...',2),
('Bienvenidos a mi perfil nicolas','Sasito',934318744,'1995-07-14','masculino','Me inicie en la musica...',3),
('Bienvenidos a mi perfil juan','JH',934318744,'1990-05-23','masculino','Me inicie en la musica...',3),
('Bienvenidos a mi perfil maria','Maria Becerra',5551234,'1995-08-12','femenino','Me inicie en la musica...',3),
('Bienvenidos a mi perfil Andrea','Andrea González',934318746,'1996-10-05','femenino','Soy cantautora y estoy en busca de...',1),
('Bienvenidos a mi perfil Alejandro','Alejandro Pérez',934318745,'1997-08-24','masculino','Soy guitarrista y compositor...',2),
('Bienvenidos a mi perfil Julieta','Julieta Rodriguez',934318744,'1992-03-17','femenino','Me gusta experimentar con diferentes...',2),
('Bienvenidos a mi perfil Carlos','Carlos Hernández',934318744,'1991-11-08','masculino','Me considero un amante de la música desde...',3),
('Bienvenidos a mi perfil Ana','Ana García',5551234,'1998-06-21','femenino','Desde pequeña siempre me ha gustado...',1);

CREATE TABLE publicacion(
	idPublicacion INT AUTO_INCREMENT PRIMARY KEY,
    tituloPublicacion VARCHAR(50) NOT NULL,
    descripcionPublicacion VARCHAR(2000) NOT NULL,
    fechaPublicacion date NOT NULL
);
INSERT INTO publicacion (tituloPublicacion,descripcionPublicacion,fechaPublicacion)
VALUES
('¿Que opinan de mi track?','descripcion de la publicacion','2023-03-28'),
('Tengo problemas con el DAW','descripcion de la publicacion','2023-03-27'),
('Colaboremos','descripcion de la publicacion','2023-03-26'),
('Nuevo sencillo','Escucha mi nuevo sencillo en todas las plataformas digitales.','2023-04-21'),
('Concierto en vivo','No te pierdas mi próximo concierto en vivo el próximo fin de semana.','2023-05-01'),
('Estoy en busca de colaboraciones','Soy cantante y estoy buscando artistas para colaborar...', '2023-04-20'),
('Mi nuevo álbum ya está disponible','Después de meses de trabajo, mi nuevo álbum...', '2023-04-18'),
('Próximo concierto en la ciudad','No te pierdas mi próximo concierto en la ciudad el próximo fin de semana...', '2023-05-05'),
('¿Qué opinan de mi última canción?','He estado trabajando en mi última canción...', '2023-04-15'),
('Nuevo video musical','Miren mi nuevo video musical...', '2023-04-12');

CREATE TABLE usuario( 
	idUsuario INT AUTO_INCREMENT PRIMARY KEY,
    nombreUsuario VARCHAR(25) NOT NULL ,
	apellidoUsuario VARCHAR(25) NOT NULL ,
	nickUsuario varchar(30) NOT NULL,
    emailUsuario varchar(30) NOT NULL,
    claveUsuario varchar(30) NOT NULL,
    topUsuario int default 1,
    isadminUsuario boolean DEFAULT false,
    idPerfil int,
    idGenero_musical int,
    idPublicacion int,
    FOREIGN KEY (idPublicacion) REFERENCES publicacion(idPublicacion),
    FOREIGN KEY (idPerfil) REFERENCES perfil(idPerfil),
    FOREIGN KEY (idGenero_musical) REFERENCES genero_musical(idGenero_musical)
);

INSERT INTO usuario (nombreUsuario, apellidoUsuario, nickUsuario, emailUsuario, claveUsuario,topUsuario,idPerfil,idGenero_musical,idPublicacion)
VALUES 
    ('Juan', 'García', 'juangar', 'juangar@gmail.com', '123456', 1,1,1,1),
    ('María', 'López', 'marialo', 'marialo@hotmail.com', 'abcdef', 2,2,2,2),
    ('Pedro', 'Hernández', 'pedroh', 'pedroh@gmail.com', 'qwerty', 3,3,3,3),
	('Juan','Perez','JPmusic','juanperezmusic@gmail.com','password',4,4,1,4),
	('Maria','Gonzalez','MGmusic','mariagonzalezmusic@gmail.com','1234',5,5,1,5),
    ('Sofía', 'García', 'sofigar', 'sofigar@gmail.com', 'password123', 1,6,1,6),
	('Miguel', 'Martínez', 'migmar', 'migmar@hotmail.com', 'abcdef123', 2,7,2,7),
	('Luisa', 'González', 'luisago', 'luisago@gmail.com', 'qwerty123', 3,8,3,8),
	('Carla','Fernández','carlafmusic','carlafernandezmusic@gmail.com','pass123',4,9,1,9),
	('Mario','Torres','Mariot','mariotorresmusic@gmail.com','music123',5,10,2,10);
select * from usuario order by topUsuario desc limit 10;

select * from perfil;
select * from usuario;

update usuario set topUsuario = 11 where idUsuario = 20;
drop table usuario,publicacion,perfil,pais,genero_musical;