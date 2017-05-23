const PurchasedMap = require('../models').purchased_map;
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

module.exports = {
  create(req, res) {
    let amount = req.body.amount;

    stripe.customers.create({
      email: req.body.user_email,
      source: req.body.stripe_token_id
    })
    .then(customer =>
      stripe.charges.create({
        amount,
        description: ("Purchase Map: " + req.body.city + " " + req.body.city_map_id),
          currency: "usd",
          customer: customer.id
      })
    )
    .then(charge =>
      PurchasedMap.create({
        city: req.body.city,
        city_map_id: req.body.city_map_id,
        user_id: req.body.user_id,
      })
      .then(purchased_map => res.status(201).send(purchased_map))
      .catch(error => res.status(400).send(error))
    ).catch(error => res.status(400).send(error));
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