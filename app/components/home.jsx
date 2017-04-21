import React from 'react';
import Header from './Header.jsx';
import Title from './title.jsx';
import SearchBar from './search_bar.jsx';
import MapsList from './maps_list.jsx';
var map_background = require('../assets/images/world_map.svg');

const Home = (props) => {
  const isMobile = () => {
    return props.window_width <= 768
  };

  const getSectionGridClasses = () => {
    return " col-xs-12 col-sm-12 col-md-6 col-lg-6 ";
  };

  const getSectionStyle = () => {
    return { height: props.window_height + 'px' };
  };

  return (
    <div className="col-xs-12">
      <Header />
      <div className={"center-align position0 overflow-hidden" + getSectionGridClasses()} style={getSectionStyle()}>
        <div className="title-section top0 width100 height100 position-absolute col-xs-12">
          <Title />
          <div className="map-background width100 position-absolute center-align">
            <img className="background-svg width100 position-relative bottom0 left0" src={map_background} alt="World Map"/>
          </div>
        </div>
      </div>
      <div className={(isMobile() ? "" : "overflow-scroll") + getSectionGridClasses()} style={getSectionStyle()}>
        <SearchBar 
          is_mobile={isMobile()}
          search_value={props.search_value} 
          handleSearch={props.handleSearch} />
        <MapsList is_mobile={isMobile()} maps_data={props.maps_data} />
      </div>
    </div>
  );
}

export default Home;