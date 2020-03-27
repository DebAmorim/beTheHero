//importando funcionalidades do express
const express = require('express');

//variável que armazena a aplicação
const app = express();

//criando rota
app.get('/', (request, response) => {
    return response.json({
        evento: 'Semana OmniStack 11.0',
        aluno: 'Débora Amorim'
    });
});

//porta da aplicação
app.listen(3333);

