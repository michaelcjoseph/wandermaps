import React from 'react';
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
        <Title 
          parent={props.parent}
          image={props.image} 
          title={props.title}
          subtitle={props.subtitle} 
          description={props.description} />
        {getBackgroundImage()}
        <DownArrow 
          is_mobile={props.is_mobile} 
          id_link={props.id_link} />
      </div>
    </div>
  )
}

export default FixedSectionPanel;