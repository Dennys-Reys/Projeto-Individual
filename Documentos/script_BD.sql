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
)auto_increment = 1000;

create table votacao (
id_votacao int,
fk_usuario int,
fk_artista int,
foreign key (fk_usuario) references usuario (id_usuario),
foreign key (fk_artista) references artista (id_artista),
primary key (id_votacao, fk_usuario, fk_artista)
);

create table musica (
id_musica int,
fk_artista int, 
foreign key(fk_artista) references artista (id_artista),
primary key(fk_artista, id_musica),
titulo varchar (45),
dtLancamento date,
compositor varchar (45),
album varchar(45)
);
select * from usuario;








 


