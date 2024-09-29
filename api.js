const express = require('express');
const cors = require('cors');
const banco = require('./banco');
const app = express();

app.use(express.json());
app.use(cors({
    origin : "*",
    methods: "GET,POST,DELETE,PUT"
}));


//Metodo Get http://127.0.0.1:3000/carros   lista todos os carros cadastrados
//Metodo Get  http://127.0.0.1:3000/carros/id   filtra os carros cadastrados


app.get('/carros',(req,res)=> {

    banco.query('select * from carros',(err,rows) => {
        if(err){
            throw err 
        } else {
            res.json(rows);
        }
    });

    app.get('/carros/:id',(req,res) => {

        banco.query(`select * from carros where id_carro= ${req.params.id}`,(err,rows) => {
            if(err){
                throw err 
            } else {
                res.json(rows);
            }
        });

    });
});

app.listen(3000, () => {
    console.log('Servidor Rodando na porta:3000');
});








