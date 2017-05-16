import React from 'react';
import Header from './header.jsx';

const CityMapView = (props) => {
  const getCityMapBodyStyle = () => {
    return { height: props.window_height + 'px' };
  };

  const getCityMapBodyClasses = () => {
    return props.is_mobile ? "padding-for-header-mobile" : "padding-for-header";
  };

  const getCityMapBody = () => {
    if (props.route.city_map_view.url.length > 0) {
      return getCityMapFrame();
    } else {
      return getCityMapUnavailable();
    };
  };

  const getCityMapFrame = () => {
    return (
      <iframe src={props.route.city_map_view.url} width="100%" height="100%"></iframe>
    )
  };

  const getCityMapUnavailable = () => {
    return (
      <div className="col-xs-12 center-align padding-for-header">
        <div className="top0 width100 height100 col-xs-12">
          <img className="no-city-map-logo" src={"/img/logo.svg"} alt="Wander Maps" />
          <div className="map-background no-city-map-background width100 position-absolute center-align">
            <img className="background-svg width100 position-relative bottom0 left0" src={"/img/world_map.svg"} alt="World Map"/>
          </div>
        </div>
        <h3 className="padding-for-header col-xs-12">
          This map will be available soon! Subscribe above to be informed when 
          it is ready. 
        </h3>
      </div>
    )
  };

  return (
    <div className="col-xs-12">
      <Header 
        email_form={true}
        back_button={true} 
        back_route={"/" + props.city_id} />
      <div className={"col-xs-12 position0 " + getCityMapBodyClasses()} style={getCityMapBodyStyle()} >
        {getCityMapBody()}
      </div>
    </div>
  );
}

export default CityMapView;