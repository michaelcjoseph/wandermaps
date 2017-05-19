import React from 'react';
import { Link } from 'react-router';
import Header from './header.jsx';
import MapsList from './maps_list.jsx';
import FixedSectionPanel from './fixed_section_panel.jsx';

const City = (props) => {
  const getSecondSectionClasses = () => {
    if (props.is_mobile) {
      return "padding-for-header-mobile"
    } else {
      return "padding-for-header overflow-scroll second-section-border"
    }
  };

  const getMapsList = () => {
    return (
      <div className="col-xs-12">
        <Header back_button={true} back_route={"/"} email_form={true} />
        <FixedSectionPanel 
          classes={props.getSectionGridClasses()}
          styles={props.getSectionHeight()}
          is_mobile={props.is_mobile}
          id_link={"/" + props.route.city.id + "/#" + props.route.city.city}
          parent="city"
          title={props.route.city.city}
          subtitle={props.route.city.country}
          description={props.route.city.description}
          background_image={"/img/" + props.route.city.image} />
        <div 
          id={props.route.city.city}
          className={getSecondSectionClasses() + props.getSectionGridClasses()}
          style={props.getSectionHeight()}>
          <MapsList city={props.route.city} />
        </div>
      </div>
    )
  };

  const getMapView = () => {
    return ( 
      React.cloneElement(
        props.children, {
          city: props.route.city,
          is_mobile: props.is_mobile,
          getSectionHeight: props.getSectionHeight,
          getSecondSectionClasses: getSecondSectionClasses,
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