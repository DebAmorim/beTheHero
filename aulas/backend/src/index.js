//importando funcionalidades do express
const express = require('express');
const routes = require('./routes');
const cors = require('cors');

//variável que armazena a aplicação
const app = express();

app.use(cors());

//informa que o formato JSON será usado para o corpo das requisições
//deve ser declarado antes das rotas
app.use(express.json());
//tem que estar abaixo do express.json
app.use(routes);



//porta da aplicação
app.listen(3333);

