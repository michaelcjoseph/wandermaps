import React from 'react';

const CityTitle = (props) => {
  return (
    <div className="city-img-div dark-background display-block position-relative overflow-hidden center-align col-xs-12">
      <div className="position-relative position0">
        <img 
          className="city-img width100 position-relative display-inline-block left0" 
          src={"/img/min-png/" + props.city_img} />
      </div>
      <div className="cities-list-item-text position-absolute center-align width100 zindex1">
        <h1 className="fat-font margin0 col-xs-12">{props.city_name}</h1>
        <h3 className="thin-font margin0 col-xs-12">{props.city_country}</h3>
      </div>
    </div>
  );
};

export default CityTitle;