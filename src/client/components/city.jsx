import React from 'react';
import { Link } from 'react-router';
import MapsList from './maps_list.jsx';
import FixedSectionPanel from './fixed_section_panel.jsx';

const City = (props) => {
  const getMapsList = () => {
    return (
      <div className="col-xs-12">
        <FixedSectionPanel 
          classes={props.getSectionGridClasses()}
          styles={props.getSectionHeight()}
          is_mobile={props.is_mobile}
          id_link={"/" + props.route.city.id + "/#" + props.route.city.city}
          parent="city"
          title={props.route.city.city}
          subtitle={props.route.city.country}
          description={props.route.city.description}
          background_image={"/img/min-png/" + props.route.city.image} />
        <div 
          id={props.route.city.city}
          className={props.getSecondSectionClasses() + props.getSectionGridClasses()}
          style={props.getSectionStyle()}>
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