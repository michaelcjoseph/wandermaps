import path from 'path';
import { Server } from 'http';
import Express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import nodemailer from 'nodemailer';
import routes from './routes';
import NotFoundPage from './components/not_found_page.jsx';

// initialize the server and configure support for ejs templates
const app = new Express();
const server = new Server(app);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// define the folder that will be used for static assets
app.use(Express.static(path.join(__dirname, 'static')));

// universal routing and rendering
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
        res.status(200);
      } else {
        // otherwise we can render a 404 page
        markup = renderToString(<NotFoundPage/>);
        res.status(404);
      }

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

if (process.env.NODE_ENV !== 'production') {
  const webpack = require('webpack')
  const webpackDevMiddleware = require('webpack-dev-middleware')
  const webpackHotMiddleware = require('webpack-hot-middleware')
  const config = require('../webpack.config.js')
  const compiler = webpack(config)

  app.use(webpackHotMiddleware(compiler))
  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPathdist
  }))
}

// start the server
const port = process.env.PORT || 8080;
const env = process.env.NODE_ENV || 'production';

server.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  console.info(`Server running on http://localhost:${port} [${env}]`);
});