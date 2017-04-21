import React from 'react';
import MapItem from './map_item.jsx';

const MapsList = (props) => {
  const searchBarFixedPadding = () => {
    return props.is_mobile ? "" : "maps-list-padding";
  };

  const renderMapItem = (item, i) => {
    return (
      <MapItem key={i} item={item} />
    )
  };

  return (
    <div className={searchBarFixedPadding() + " col-xs-12"}>
      {props.maps_data.map(renderMapItem)}
    </div>
  );
}

export default MapsList;