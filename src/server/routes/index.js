const usersController = require('../controllers').users;
const purchasedMapsController = require('../controllers').purchased_maps;

module.exports = (app) => {
  app.get('/api/emails/:email', usersController.read);
  app.post('/api/emails', usersController.create);
  app.get('/api/purchased_maps/:city/:city_map_id/:user_id', purchasedMapsController.read);
  app.post('/api/purchased_maps', purchasedMapsController.create);
};