import React from 'react';
import { Link } from 'react-router';

const MapsListItem = (props) => {
  const getMapPrice = (price) => {
    return price ? ("$" + price) : "Free";
  };

  const getMapType = (price) => {
    return price ? "Premium Map" : "General Map";
  }

  const getMapItemOuterClass = (price) => {
    return price ? "city-maps-item-premium" : "city-maps-item-general";
  };

  const getMapItemInnerClass = (price) => {
    return price ? "city-maps-item-inner-premium" : "city-maps-item-inner-general";
  };

  return (
    <li key={props.id} className="col-xs-12 col-sm-6">
      <Link to={"/" + props.city.id + "/" + props.city_map.id}>
        <div className={getMapItemOuterClass(props.city_map.price) + " city-maps-item col-xs-10 col-md-8 col-lg-6"}>
          <div className={getMapItemInnerClass(props.city_map.price) + " city-maps-item-inner city-maps-item-padding col-xs-8"}>
            <p className="thin-font">{getMapType(props.city_map.price)}</p>
            <h3 className="">{props.city_map.title}</h3>
          </div>
          <div className="city-maps-item-padding center-align col-xs-4">
            <h3 className="thin-font">{getMapPrice(props.city_map.price)}</h3>
          </div>
        </div>
      </Link>
    </li>
  )
}

export default MapsListItem;