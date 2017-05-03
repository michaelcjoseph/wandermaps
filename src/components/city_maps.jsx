import React from 'react';
import { Link } from 'react-router';
import Header from './header.jsx';
import CityMapView from './city_map_view.jsx';

const CityMap = (props) => {
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

  const getMapsListItem = (city_map_view, i) => {
    return (
      <li key={i} className="col-xs-12 col-sm-6">
        <Link to={"/" + props.route.city_maps.id + "/" + city_map_view.id}>
          <div className={getMapItemOuterClass(city_map_view.price) + " city-maps-item col-xs-10 col-md-8 col-lg-6"}>
            <div className={getMapItemInnerClass(city_map_view.price) + " city-maps-item-inner city-maps-item-padding col-xs-8"}>
              <p className="thin-font">{getMapType(city_map_view.price)}</p>
              <h3 className="">{city_map_view.title}</h3>
            </div>
            <div className="city-maps-item-padding center-align col-xs-4">
              <h3 className="thin-font">{getMapPrice(city_map_view.price)}</h3>
            </div>
          </div>
        </Link>
      </li>
    )
  };

  const getMapsList = () => {
    return (
      <div className="col-xs-12">
        <Header back_button={true} back_route={"/"} email_form={true} paid={false} />
        <div className="center-align width100 padding-for-header col-xs-12">
          <h1 className="fat-font">{props.route.city_maps.city}</h1>
          <h4 className="thin-font">{props.route.city_maps.country}</h4>
        </div>
        <ul className="city-maps-list col-xs-12">
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