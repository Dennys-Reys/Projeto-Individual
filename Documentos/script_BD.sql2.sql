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


drop table musica;


select * from usuario;








 


