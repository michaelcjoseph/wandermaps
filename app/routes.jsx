import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Main from './containers/main.jsx';
import Home from './components/home.jsx';
import CityMap from './components/city_map.jsx';
import NotFoundPage from './components/not_found_page.jsx';
import maps_data from './data/maps.json';

const renderCityMapRoute = (city_map, i) => {
  return (
    <Route key={i} city_map={city_map} path={"/" + city_map.id} component={CityMap} />
  )
}

const routes = (
  <Route path="/" component={Main}>
    <IndexRoute component={Home}/>
    {maps_data.map(renderCityMapRoute)}
    <Route path='*' component={NotFoundPage}/>
  </Route>
);

export default routes;