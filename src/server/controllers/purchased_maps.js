const PurchasedMap = require('../models').purchased_map;

module.exports = {
  create(req, res) {
    return PurchasedMap
      .create({
        city: req.body.city,
        city_map_id: req.body.city_map_id,
        user_id: req.body.user_id,
      })
      .then(user => res.status(201).send(user))
      .catch(error => res.status(400).send(error));
  },
};