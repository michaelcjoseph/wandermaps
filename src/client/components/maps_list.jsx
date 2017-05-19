import React from 'react';
import MapsListItem from './maps_list_item.jsx';

const MapsList = (props) => {
  const getMapsListItem = (city_map, i) => {
    return (
      <MapsListItem key={i} city={props.city} city_map={city_map} />
    )
  }

  return (
    <div className="height100 col-xs-12">
      {props.city.maps.map(getMapsListItem)}
    </div>
  )
}

export default MapsList;