import path from 'path';
import express from 'express';
import nodemailer from 'nodemailer';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import routes from './routes.jsx';
import NotFoundPage from './components/not_found_page.jsx';

module.exports = {
  app: function () {
    const app = express();
    app.set('view engine', 'ejs');
    app.set('views', path.join(__dirname, 'views'));
    const publicPath = express.static(path.join(__dirname, 'static'));

    app.use(publicPath);

    app.get('*', (req, res) => {
      match(
        { routes, location: req.url },
        (err, redirectLocation, renderProps) => {

          // in case of error display the error message
          if (err) {
            return res.status(500).send(err.message);
          }

          // in case of redirect propagate the redirect to the browser
          if (redirectLocation) {
            return res.redirect(302, redirectLocation.pathname + redirectLocation.search);
          }

          // generate the React markup for the current route
          let markup;
          if (renderProps) {
            // if the current route matched we have renderProps
            markup = renderToString(<RouterContext {...renderProps}/>);
          } else {
            // otherwise we can render a 404 page
            markup = renderToString(<NotFoundPage/>);
            res.status(404);
          }

          console.log(markup);
          // render the index template with the embedded React markup
          return res.render('index', { markup });
        }
      );
    });

    app.post('/api/emails/:email/:paid', (request, response) => {
      var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
          user: 'michael.c.joseph.12@gmail.com', // Your email id
          pass: 'YoFool*90' // Your password
        }
      });

      var text = 'New email added to Wander Maps: ' + request.params.email + '\n\nPaid status: ' + request.params.paid;

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