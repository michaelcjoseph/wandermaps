const PurchasedMap = require('../models').purchased_map;

module.exports = {
  create(req, res) {
    return PurchasedMap
      .create({
        city: req.body.city,
        city_map_id: req.body.city_map_id,
        user_id: req.body.user_id,
      })
      .then(purchased_map => res.status(201).send(purchased_map))
      .catch(error => res.status(400).send(error));
  },
  read(req, res) {
    return PurchasedMap
      .findOne({
        where: {
          city: req.params.city,
          city_map_id: req.params.city_map_id,
          user_id: req.params.user_id
        }
      })
      .then(purchased_map => res.status(201).send(purchased_map))
      .catch(error => res.status(400).send(error));
  }
};