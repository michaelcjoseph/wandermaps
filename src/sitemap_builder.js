require('babel-register');

import path from 'path';
import Sitemap from 'react-router-sitemap';
import routes from './client/routes.jsx';

const sitemap = (
  new Sitemap(routes)
    .build('https://wandermaps.herokuapp.com/')
    .save(path.join(__dirname, 'client', 'static', 'sitemap.xml'))
);