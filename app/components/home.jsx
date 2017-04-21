import React from 'react';
import Header from './Header.jsx';
import Title from './title.jsx';
import SearchBar from './search_bar.jsx';
import MapsList from './maps_list.jsx';
var map_background = require('../assets/images/world_map_light_gray.svg');

const Home = (props) => {
  const getSectionGridClasses = () => {
    return "col-xs-12 col-md-6 col-lg-6 ";
  };

  const getSectionStyle = () => {
    return { height: window.innerHeight + 'px' };
  };

  return (
    <div className="col-xs-12">
      <div className={"center-align first-section " + getSectionGridClasses()} style={getSectionStyle()}>
        <Header />
        <div className="width100 height100 position-absolute title-section col-xs-12">
          <Title />
          <div className="width100 position-absolute center-align map-background">
            <img className="width100 position-relative background-svg" src={map_background} alt="World Map"/>
          </div>
        </div>
      </div>
      <div className={getSectionGridClasses()}>
        <SearchBar 
          search_value={props.search_value} 
          handleSearch={props.handleSearch} />
        <MapsList maps_data={props.maps_data} />
      </div>
    </div>
  );
}

export default Home;