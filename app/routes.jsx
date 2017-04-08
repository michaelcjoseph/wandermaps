import React from 'react'
import { Route, IndexRoute } from 'react-router'
import MainContainer from './containers/main_container.jsx';
import MainComponent from './components/main_component.jsx';
import NotFoundPage from './components/not_found_page.jsx';

const routes = (
  <Route path="/" component={MainContainer}>
    <IndexRoute component={MainComponent}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);

export default routes;