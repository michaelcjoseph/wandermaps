import React from 'react';

const MapItem = (props) => {
  const getImageUrl = () => {
    var image = require('../assets/images/' + props.item.image);
    return image;
  }

  const getMapItemBorder = () => {
    return props.is_mobile ? "map-item-border-mobile" : "map-item-border";
  }

  return (
    <a 
      className={"map-item display-block position-relative overflow-hidden center-align col-xs-12 col-md-6 " + getMapItemBorder()} 
      href={props.item.url} 
      target="_blank" >
      <div className="position-relative position0">
        <img className="map-item-img position-relative display-inline-block left0" src={getImageUrl()} alt={props.item.city}/>
      </div>
      <div className="map-item-text position-absolute center-align width100 zindex1">
        <h1 className="fat-font">{props.item.city}</h1>
        <h4 className="thin-font">{props.item.country}</h4>
      </div>
    </a>
  );
}

export default MapItem;