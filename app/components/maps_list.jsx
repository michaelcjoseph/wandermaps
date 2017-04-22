import React from 'react';
import MapItem from './map_item.jsx';

const MapsList = (props) => {
  const searchBarFixedPadding = () => {
    return props.is_mobile ? "" : "padding-for-header";
  };

  const renderMapItem = (item, i) => {
    return (
      <MapItem key={i} item={item} is_mobile={props.is_mobile} />
    )
  };

  return (
    <div className={searchBarFixedPadding() + " col-xs-12"}>
      {props.maps_data.map(renderMapItem)}
    </div>
  );
}

export default MapsList;