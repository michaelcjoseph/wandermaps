import React from 'react';
import { Link } from 'react-router';
import Title from './title.jsx';
import DownArrow from './down_arrow.jsx';
import LazyLoadImg from './lazy_load_img.jsx';

const FixedSectionPanel = (props) => {
  return (
    <div className={"center-align position0 overflow-hidden" + props.classes} style={props.styles}>
      <div className="title-section top0 width100 height100 position-absolute col-xs-12">
        <div 
          className={
            "map-background width100 position-absolute center-align " + 
            (props.parent == "home" ? "" : "height100")
          }>
          <img 
            className={props.parent == "home" ? "background-svg width100 position-relative bottom0 left0" : "height100"}
            src={props.background_image}
            alt="World Map"
          />
        </div>
        <div className="zindex100 right-align">
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