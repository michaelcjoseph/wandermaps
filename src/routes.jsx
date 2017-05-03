import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Main from './containers/main.jsx';
import Home from './components/home.jsx';
import CityMaps from './components/city_maps.jsx';
import CityMapView from './components/city_map_view.jsx';
import NotFoundPage from './components/not_found_page.jsx';
import maps_data from './data/maps.js';

const renderCityMapViewRoute = (city_map_view, i) => {
  return (
    <Route key={i} city_map_view={city_map_view} path={city_map_view.id} component={CityMapView} />
  )
}

const renderCityMapsRoute = (city_maps, i) => {
  return (
    <Route key={i} city_maps={city_maps} path={city_maps.id} component={CityMaps}>
      {city_maps.maps.map(renderCityMapViewRoute, city_maps.id)}
    </Route>
  )
}

const routes = (
  <Route path="/" component={Main}>
    <IndexRoute component={Home}/>
    {maps_data.map(renderCityMapsRoute)}
    <Route path='*' component={NotFoundPage}/>
  </Route>
);

export default routes;