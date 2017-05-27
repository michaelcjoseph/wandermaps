import React from 'react';
import { Link } from 'react-router';

const MapsListItem = (props) => {
  const getMapPrice = (price) => {
    return price ? ("$" + price) : "Free";
  };

  const getMapType = (price) => {
    return price ? "Premium Map" : "General Map";
  }

  return (
    <Link to={"/" + props.city.id + "/" + props.city_map.id}>
      <div className={(props.is_mobile ? "city-maps-item-mobile" : "city-maps-item") + " col-xs-12 col-md-6"}>
        <div className={"city-maps-item-inner city-maps-item-padding height100 col-xs-8"}>
          <p className="thin-font">{getMapType(props.city_map.price)}</p>
          <h3 className="">{props.city_map.title}</h3>
        </div>
        <div className="city-maps-item-padding center-align height100 col-xs-4">
          <h3 className="thin-font">{getMapPrice(props.city_map.price)}</h3>
        </div>
      </div>
    </Link>
  )
}

export default MapsListItem;