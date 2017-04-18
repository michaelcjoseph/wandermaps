import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Main from './containers/main.jsx';
import Home from './components/home.jsx';
import NotFoundPage from './components/not_found_page.jsx';

const routes = (
  <Route path="/" component={Main}>
    <IndexRoute component={Home}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);

export default routes;