const path = require('path');
const express = require('express');
var nodemailer = require('nodemailer');

module.exports = {
  app: function () {
    const app = express();
    const indexPath = path.join(__dirname, 'index.html');
    const publicPath = express.static(path.join(__dirname, '../dist'));
    const emailsJsonPath = path.join(__dirname, 'emails.json');

    app.use(publicPath);

    app.get('*', (request, response) => { 
      response.sendFile(indexPath) 
    });

    app.post('/api/emails/:email', (request, response) => {
      var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
          user: 'michael.c.joseph.12@gmail.com', // Your email id
          pass: 'YoFool*90' // Your password
        }
      });

      var text = 'New email added to Wander Maps: ' + request.params.email;

      var mailOptions = {
        from: 'michael.c.joseph.12@gmail.com', 
        to: 'mjoseph.cm@gmail.com', 
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

      response.send(request.params);
    });

    return app;
  }
}