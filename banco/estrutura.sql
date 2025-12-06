create database Voluntarios;

use Voluntarios;

create table if not exists voluntarios(
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    vlt_nome varchar(200) not null,
    vlt_cpf varchar(200) not null,
    vlt_telefone varchar(200) not null,
    vlt_tel_Residencial varchar(200) not null,
    vlt_email varchar(200) not null,
    vlt_disponibilidade varchar(200)
);

INSERT INTO voluntarios (vlt_nome, vlt_cpf, vlt_telefone, vlt_tel_Residencial ,vlt_email, vlt_disponibilidade)
VALUES
('Adriano Almeida Gomes', '000.000.000-00', '(11) 99999-9999','(14) 0000-0000' ,'adriano@email.com','segunda-feira '),
('Maria Silva', '111.111.111-11', '(11) 98888-8888', '(14) 0000-0000' , 'maria@example.com', 'quarta-feira '),
('João Santos', '222.222.222-22', '(11) 97777-7777', '(14) 0000-0000' ,'joao@example.com', 'quinta-feira ');


