import React from 'react';
import { Link } from 'react-router';
import Title from './title.jsx';
import DownArrow from './down_arrow.jsx';

const FixedSectionPanel = (props) => {
  const getBackgroundImage = () => {
    if (props.parent == "home") {
      return (
        <div className="map-background width100 position-absolute center-align">
          <img 
            className="background-svg width100 position-relative bottom0 left0" 
            src={props.background_image} 
            alt="World Map" />
        </div>
      )
    } else {
      return (
        <div className="map-background height100 width100 position-absolute center-align">
          <img 
            className="height100" 
            src={props.background_image} 
            alt="World Map" />
        </div>
      )
    }
  }

  return (
    <div className={"center-align position0 overflow-hidden" + props.classes} style={props.styles}>
      <div className="title-section top0 width100 height100 position-absolute col-xs-12">
        {getBackgroundImage()}
        <div className={(props.is_mobile ? "padding-for-header-mobile" : "padding-for-header") + " zindex100 right-align"}>
          <Link to="/about_us">
            <i className="fa fa-question-circle-o fa-3x about-us-button"></i>
          </Link>
        </div>
        <Title 
          parent={props.parent}
          image={props.image} 
          title={props.title}
          subtitle={props.subtitle} 
          description={props.description} />
        <DownArrow 
          is_mobile={props.is_mobile} 
          id_link={props.id_link} />
      </div>
    </div>
  )
}

export default FixedSectionPanel;