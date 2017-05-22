const usersController = require('../controllers').users;

module.exports = (app) => {
  app.get('/api/emails/:email', usersController.read);
  app.post('/api/emails', usersController.create);
};