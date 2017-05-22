const User = require('../models').user;

module.exports = {
  create(req, res) {
    return User
      .create({
        email: req.body.email,
      })
      .then(user => res.status(201).send(user))
      .catch(error => res.status(400).send(error));
  },
  read(req, res) {
    return User
      .findOne({
        where: { email: req.params.email }
      })
      .then(user => res.status(201).send(user))
      .catch(error => res.status(400).send(error));
  }
};