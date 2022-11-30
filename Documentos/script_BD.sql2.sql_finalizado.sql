create database projetoIndividual;
use projetoIndividual;

create table usuario (
id_usuario int primary key auto_increment,
nome varchar (45),
email varchar (45),
telefone char (11),
senha char (20),
conf_senha char(20)
);

create table artista (
id_artista int primary key auto_increment,
nome varchar (45),
dtNasc date, 
nacionalidade varchar (45),
sexo char(1),
check (sexo = 'm' or sexo= 'f' or sexo= 'n')
)auto_increment = 1;

create table votacao (
id_votacao int auto_increment,
fk_artista int,
foreign key (fk_artista) references artista (id_artista),
primary key (id_votacao, fk_artista)
);

insert into artista values
(1, 'Taylor Swift', '1989-09-21','Americana','f'),
(2, 'Lana del Rey', '1989-09-21','Americana','f'),
(3, 'Lorde', '1989-09-21','Americana','f'),
(4, 'Jonathan Bree', '1989-09-21','Americana','f'),
(5, 'Princess Chelsea', '1989-09-21','Americana','f'),
(6, 'Zella Day', '1989-09-21','Americana','f'),
(7, 'Marina', '1989-09-21','Americana','f'),
(8, 'Melanie Martinez', '1989-09-21','Americana','f'),
(9, 'Harry Styles', '1989-09-21','Americana','f'),
(10, 'Honey Gendry', '1989-09-21','Americana','f'),
(11, 'Sharon Van Etten', '1989-09-21','Americana','f'),
(12, 'Phoebe Bridgers', '1989-09-21','Americana','f'),
(13, 'Mitski', '1990-09-27','Japão','f');

select * from votacao;
select nome, count(fk_artista) 'votos' from artista join votacao on id_artista = fk_artista group by fk_artista order by votos desc limit 1;
select * from artista;





select * from usuario;








 


