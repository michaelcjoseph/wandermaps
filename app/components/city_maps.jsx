import React from 'react';
import { Link } from 'react-router';
import Header from './header.jsx';
import CityMapView from './city_map_view.jsx';

const CityMap = (props) => {
  const getMapPrice = (price) => {
    return price ? (" - $" + price) : " - Free";
  };

  const getMapsListItem = (city_map_view, i) => {
    return (
      <li key={i}>
        <Link to={"/" + props.route.city_maps.id + "/" + city_map_view.id}>
          {city_map_view.title + getMapPrice(city_map_view.price)}
        </Link>
      </li>
    )
  };

  const getMapsList = () => {
    return (
      <div className="col-xs-12">
        <Header back_button={true} back_route={"/"} />
        <div className="center-align width100 padding-for-header">
          <h1 className="fat-font">{props.route.city_maps.city}</h1>
          <h4 className="thin-font">{props.route.city_maps.country}</h4>
        </div>
        <ul className="">
          {props.route.city_maps.maps.map(getMapsListItem)}
        </ul>
      </div>
    )
  };

  const getMapView = () => {
    return ( 
      <div>
        {React.cloneElement(
          props.children, {
            city_id: props.route.city_maps.id,
            window_height: props.window_height,
            is_mobile: props.is_mobile,
          }
        )}
      </div>
    )
  }

  const getMapViewOptions = () => {
    if (props.children) {
      return getMapView();
    } else {
      return getMapsList();
    }
  }

  return (
    <div className="col-xs-12">
      {getMapViewOptions()}
    </div>
  );
}

export default CityMap;