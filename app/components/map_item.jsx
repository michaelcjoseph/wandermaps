import React from 'react';

const MapItem = (props) => {
  const getImageUrl = () => {
    var image = require('../assets/images/' + props.item.image);
    return image;
  }

  return (
    <a className="display-block position-relative overflow-hidden center-align col-xs-6" href={props.item.url} target="_blank">
      <div className="position-relative position0">
        <img className="map-item-img position-relative display-inline-block left0" src={getImageUrl()} alt={props.item.city}/>
      </div>
      <div className="map-item-text position-absolute center-align width100 bottom-zindex">
        <h1>{props.item.city}</h1>
        <h3>{props.item.country}</h3>
      </div>
    </a>
  );
}

export default MapItem;