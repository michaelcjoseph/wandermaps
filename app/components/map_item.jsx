import React from 'react';
import { Link } from 'react-router';

const MapItem = (props) => {
  const getImageUrl = () => {
    var image = require('../static/img/' + props.item.image);
    return image;
  }

  const getMapItemBorder = () => {
    return props.is_mobile ? "map-item-border-mobile" : "map-item-border";
  }

  const getComingSoon = () => {
    if (props.item.maps[0].url.length > 0) {
      return "";
    } else {
      return " (Coming Soon)";
    }
  }

  return (
    <Link to={"/" + props.item.id} >
      <div className={"map-item display-block position-relative overflow-hidden center-align col-xs-12 col-md-6 " + getMapItemBorder()} >
        <div className="position-relative position0">
          <img className="map-item-img position-relative display-inline-block left0" src={getImageUrl()} alt={props.item.city}/>
        </div>
        <div className="map-item-text position-absolute center-align width100 zindex1">
          <h1 className="fat-font">{props.item.city}</h1>
          <h4 className="thin-font">{getComingSoon()}</h4>
          <h4 className="thin-font">{props.item.country}</h4>
        </div>
      </div>
    </Link>
  );
}

export default MapItem;