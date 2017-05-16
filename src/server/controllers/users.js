const nodemailer = require('nodemailer');
const User = require('../models').user;

module.exports = {
  create(req, res) {
    var transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: 'wandermapss@gmail.com', // Your email id
        pass: 'WanderMapsPasswordSamMike8' // Your password
      }
    });

    var text = 'New email added to Wander Maps: ' + req.body.email;

    var mailOptions = {
      from: 'wandermapss@gmail.com', 
      to: 'wandermapss@gmail.com', 
      subject: 'New Wander Maps Subscriber!', 
      text: text 
    };

    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Message sent: ' + info.response);
      };
    });

    return User
      .create({
        email: req.body.email,
      })
      .then(user => res.status(201).send(user))
      .catch(error => res.status(400).send(error));
  },
};