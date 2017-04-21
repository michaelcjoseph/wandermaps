import React from 'react';
import MapItem from './map_item.jsx';

const MapsList = (props) => {
  const renderMapItem = (item, i) => {
    return (
      <MapItem key={i} item={item} />
    )
  }

  return (
    <div className="maps-list col-xs-12">
      {props.maps_data.map(renderMapItem)}
    </div>
  );
}

export default MapsList;