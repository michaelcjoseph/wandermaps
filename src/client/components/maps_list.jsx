import React from 'react';
import MapsListItem from './maps_list_item.jsx';

const MapsList = (props) => {
  const getMapsListItem = (city_map, i) => {
    return (
      <MapsListItem id={i} city={props.city} city_map={city_map} />
    )
  }

  return (
    <ul className="city-maps-list col-xs-12">
      {props.city.maps.map(getMapsListItem)}
    </ul>
  )
}

export default MapsList;