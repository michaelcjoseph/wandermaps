import React from 'react';
import { Link } from 'react-router';
import Header from './header.jsx';
import Title from './title.jsx';
import SearchBar from './search_bar.jsx';
import CitiesList from './cities_list.jsx';
import DownArrow from './down_arrow.jsx';

const Home = (props) => {
  const getSectionGridClasses = () => {
    return " col-xs-12 col-sm-12 col-md-6 col-lg-6 ";
  };

  const getSectionStyle = () => {
    return { height: props.window_height + 'px' };
  };

  return (
    <div className="col-xs-12">
      <Header back_button={false} email_form={true} />
      <div className={"center-align position0 overflow-hidden" + getSectionGridClasses()} style={getSectionStyle()}>
        <div className="title-section top0 width100 height100 position-absolute col-xs-12">
          <Title />
          <DownArrow is_mobile={props.is_mobile} id_link="/#maps" />
          <div className="map-background width100 position-absolute center-align">
            <img className="background-svg width100 position-relative bottom0 left0" src={"/img/world_map.svg"} alt="World Map"/>
          </div>
        </div>
      </div>
      <div 
        id="maps"
        className={(props.is_mobile ? "padding-for-header-mobile" : "padding-for-header overflow-scroll second-section-border") + getSectionGridClasses()} 
        style={getSectionStyle()} >
        <SearchBar 
          is_mobile={props.is_mobile}
          search_value={props.search_value} 
          handleSearch={props.handleSearch} />
        <CitiesList is_mobile={props.is_mobile} maps_data={props.maps_data} />
      </div>
    </div>
  );
}

export default Home;