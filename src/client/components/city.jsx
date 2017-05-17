import React from 'react';
import { Link } from 'react-router';
import Header from './header.jsx';
import MapsList from './maps_list.jsx';

const City = (props) => {
  const getMapsList = () => {
    return (
      <div className="col-xs-12">
        <Header back_button={true} back_route={"/"} email_form={true} />
        <div className="center-align width100 padding-for-header col-xs-12">
          <h1 className="fat-font">{props.route.city.city}</h1>
          <h4 className="thin-font">{props.route.city.country}</h4>
        </div>
        <MapsList city={props.route.city} />
      </div>
    )
  };

  const getMapView = () => {
    return ( 
      React.cloneElement(
        props.children, {
          city_id: props.route.city.id,
          window_height: props.window_height,
          is_mobile: props.is_mobile,
        }
      )
    )
  }

  const getCityView = () => {
    if (props.children) {
      return getMapView();
    } else {
      return getMapsList();
    }
  }

  return (
    getCityView()
  );
}

export default City;