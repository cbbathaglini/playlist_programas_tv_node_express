CREATE DATABASE playlists_nodejs;
use playlists_nodejs;
CREATE TABLE filmes(
    idFilme int not null AUTO_INCREMENT,
    nome varchar(200) not null,
    duracao int not null,
    ano int not null,
    PRIMARY KEY(idFilme)
);

INSERT INTO filmes (nome, duracao, ano) VALUES 
    ("Legalmente Loira",96,2001),
    ("As Patricinhas de Beverly Hills",97,1995),
    ("As branquelas",109,2004),
    ("Todo Mundo em Pânico",88,2000);


CREATE TABLE series(
    idSerie int not null AUTO_INCREMENT,
    nome varchar(200) not null,
    temporadas int not null,
    ano int not null,
    PRIMARY KEY(idSerie)
);

INSERT INTO series (nome, temporadas, ano) VALUES 
    ("Friends",10,1994),
    ("Ted Lasso",3,2020),
    ("Modern Family",11,2009);


CREATE TABLE documentario(
    idDocumentario int not null AUTO_INCREMENT,
    nome varchar(200) not null,
    duracao int not null,
    ano int not null,
    PRIMARY KEY(idDocumentario)
);