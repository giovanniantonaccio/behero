const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const OngValidator = require('./validators/OngValidator');
const ProfileValidator = require('./validators/ProfileValidator');
const IncidentValidator = require('./validators/IncidentValidator');
const SessionValidator = require('./validators/SessionValidator');

const routes = express.Router();

routes.post('/sessions', SessionValidator.post, SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngValidator.post, OngController.create);

routes.get('/incidents', IncidentValidator.get, IncidentController.index);
routes.post('/incidents', IncidentValidator.post, IncidentController.create);
routes.delete(
  '/incidents/:id',
  IncidentValidator.delete,
  IncidentController.delete
);

routes.get('/profile', ProfileValidator.get, ProfileController.index);

module.exports = routes;
