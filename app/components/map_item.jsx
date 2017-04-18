import React from 'react';

const MapItem = (props) => {
  return (
    <a className="col-xs-6 col-md-4" href={props.item.url} target="_blank">
      <h1>{props.item.city}</h1>
      <h3>{props.item.country}</h3>
    </a>
  );
}

export default MapItem;