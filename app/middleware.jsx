import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import routes from './routes.jsx';
import NotFoundPage from './components/not_found_page.jsx';
import html_template from './html_template.jsx';

export default (req, res) => {
  match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
    if(error) {
      res.status(500).send(error.message);
    } else if(redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if(renderProps) {
      if(process.env.NODE_ENV != 'production') {
        res.status(200).send(html_template(''));
      } else if(process.env.NODE_ENV == 'production') {
        const body = renderToString(<RouterContext {...renderProps} />);
        res.status(200).send(html_template(body));
      }
    } else {
      const body = renderToString(<NotFoundPage/>);;
      res.status(404).send(html_template(body));
    }
  });
};