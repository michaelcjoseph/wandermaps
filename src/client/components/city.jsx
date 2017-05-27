import React from 'react';
import Header from './header.jsx';
import MapsList from './maps_list.jsx';
import CityTitle from './city_title.jsx';
import CityBlog from './city_blog.jsx';

const City = (props) => {
  const getCityView = () => {
    if (props.children) {
      return getMapView();
    } else {
      return getMapsList();
    }
  }

  const getMapsList = () => {
    return (
      <div className="col-xs-12">
        <div 
          className={props.getSectionGridClasses() + getOverflowScroll()} 
          style={props.getSectionStyle()} >
          <Header parent="City" />
          <CityTitle 
            city_img={props.route.city.image}
            city_name={props.route.city.city}
            city_country={props.route.city.country} />
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
          getOverflowScroll: getOverflowScroll,
          getSecondSectionClasses: props.getSecondSectionClasses,
          getSectionGridClasses: props.getSectionGridClasses,
        }
      )
    )
  }

  return (
    getCityView()
  );
}

export default City;