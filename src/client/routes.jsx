import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Main from './containers/main.jsx';
import Home from './components/home.jsx';
import City from './components/city.jsx';
import CityMap from './components/city_map.jsx';
import AboutUs from './components/about_us.jsx';
import NotFoundPage from './components/not_found_page.jsx';
import maps_data from './data/maps.js';

const renderCityMapRoutes = (city_map, i) => {
  return (
    <Route key={i} city_map={city_map} path={city_map.id} component={CityMap} />
  )
}

const renderCityRoutes = (city, i) => {
  return (
    <Route key={i} city={city} path={city.id} component={City}>
      {city.maps.map(renderCityMapRoutes, city.id)}
    </Route>
  )
}

const routes = (
  <Route path="/" component={Main}>
    <IndexRoute component={Home}/>
    {maps_data.map(renderCityRoutes)}
    <Route path='/about_us' component={AboutUs}/>
    <Route path='*' component={Home}/>
  </Route>
);

export default routes;