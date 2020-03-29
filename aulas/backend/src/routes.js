const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

//o módulo de rotas do express foi desacoplado na variável routes
const routes = express.Router();

//rotas de Ongs

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create); 

//rotas de Incidents

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

//rotas de Profile

routes.get('/profile', ProfileController.index);

//rotas de Sessions

routes.post('/sessions', SessionController.create);

//as rotas são exportadas aqui e devem ser importadas no index.js
module.exports = routes;