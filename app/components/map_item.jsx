import React from 'react';

const MapItem = (props) => {
  return (
    <div className="col-xs-6 col-md-4">
      <h1>{props.item.city}</h1>
      <h3>{props.item.country}</h3>
    </div>
  );
}

export default MapItem;