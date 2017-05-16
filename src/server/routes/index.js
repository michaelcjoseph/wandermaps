const usersController = require('../controllers').users;

module.exports = (app) => {
  app.post('/api/emails', usersController.create);
};