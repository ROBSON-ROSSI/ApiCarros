// ESSE MODULO REALIZA A CONEXÃO COM BANCO DADOS 
const mysql = require('mysql2');

//CONFIGURAÇÃO DO BANCO DE DADOS 
const cone = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'veiculos'
});

//REALIZA A CONEXÃO COM BANCO DE DADOS
cone.connect((err)=>{
    if(err) {
        throw err
    } else {
        console.log('Banco de dados conectado com sucesso');
    }
});

module.exports = cone;