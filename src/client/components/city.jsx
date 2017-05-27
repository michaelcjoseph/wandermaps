import React from 'react';
import { Link } from 'react-router';
import Header from './header.jsx';
import MapsList from './maps_list.jsx';
import CityBlog from './city_blog.jsx';

const City = (props) => {
  const getMapsList = () => {
    return (
      <div className="col-xs-12">
        <div 
          className={props.getSectionGridClasses() + getOverflowScroll()} 
          style={props.getSectionStyle()} >
          <Header parent="City" />
          <div className="city-img-div dark-background display-block position-relative overflow-hidden center-align col-xs-12">
            <div className="position-relative position0">
              <img 
                className="city-img width100 position-relative display-inline-block left0" 
                src={"/img/min-png/" + props.route.city.image} />
            </div>
            <div className="cities-list-item-text position-absolute center-align width100 zindex1">
              <h1 className="fat-font margin0 col-xs-12">{props.route.city.city}</h1>
              <h3 className="thin-font margin0 col-xs-12">{props.route.city.country}</h3>
            </div>
          </div>
          {props.is_mobile ? null : getCityBlog()}
        </div>
        <div 
          id={props.route.city.city}
          className={props.getSecondSectionClasses() + props.getSectionGridClasses()}
          style={props.getSectionStyle()}>
          <MapsList city={props.route.city} is_mobile={props.is_mobile} />
        </div>
        {props.is_mobile ? getCityBlog() : null}
      </div>
    )
  };

  const getOverflowScroll = () => {
    if (!props.is_mobile) {
      return "overflow-scroll";
    };

    return ""
  };

  const getCityBlog = () => {
    return (
      <CityBlog city_desc={props.route.city.description} />
    );
  };

  const getMapView = () => {
    return ( 
      React.cloneElement(
        props.children, {
          city: props.route.city,
          is_mobile: props.is_mobile,
          getSectionStyle: props.getSectionStyle,
          getSectionHeight: props.getSectionHeight,
          getSecondSectionClasses: props.getSecondSectionClasses,
          getSectionGridClasses: props.getSectionGridClasses,
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