create database if not exists veiculos;
use veiculos;
create table if not exists carros(
 id_carro int auto_increment primary key,
 marca varchar(40) not null,
 modelo varchar(40) not null,
 ano int not null,
 cor varchar(20) not null,
 motor varchar(3) not null
);

insert into carros (marca,modelo,ano,cor,motor) values 
('Fiat','Uno',1998,'Branco','1.4'),
('Fiat','Bravo',2002,'Preto','1.6'),
('Fiat','Punto',2010,'Vermelho','1.4'),
('Volkswagen','Fusca',1972,'Branco','1.6'),
('volkswagen','Gol',1998,'Branco','1.0'),
('volkswagen','Fox',2018,'Azul','1.6'),
('Chevrolet','Corsa',2011,'Verde','1.8'), 
('Chevrolet','Celta',2012,'Preto','1.0'), 
('Chevrolet','Meriva',2011,'Verde','1.8')