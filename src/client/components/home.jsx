import React from 'react';
import { Link } from 'react-router';
import Header from './header.jsx';
import DownArrow from './down_arrow.jsx';
import SearchBar from './search_bar.jsx';
import CitiesList from './cities_list.jsx';

const Home = (props) => {
  const getFirstSection = () => {
    return (
      <div 
        className={"position0 overflow-hidden" + props.getSectionGridClasses()} 
        style={props.getSectionHeight()} >
        <div className="title-section top0 width100 height100 position-absolute col-xs-12">
          <div className="map-background width100 position-absolute center-align ">
            <img 
              className="background-svg width100 position-relative bottom0 left0"
              src="/img/svg/world_map.svg"
              alt="World Map"
            />
          </div>
          <Header parent="home" />
          {getMainTitle()}
          <DownArrow 
            is_mobile={props.is_mobile} 
            id_link="/#maps" />
        </div>
      </div>
    )
  };

  const getMainTitle = () => {
    return (
      <div className="width100">
        <div className="title position-absolute center-align col-xs-12">
          <img className="title-logo" src="/img/svg/logo.svg" alt="Wander Maps" />
          <h4 className="title-subtext thin-font">
            City guides crowdsourced from locals, travelers, blogs, and You*
          </h4>
        </div>
        <div className="title-desc position-absolute">
          <p className="thin-font">
            *Help contribute to our community! All general city maps are openly 
            editable so that you can add new places or notes to make the next 
            person's experience in that city all the better.
          </p>
        </div>
      </div>
    )
  };

  const getSecondSection = () => {
    return (
      <div 
        id="maps"
        className={props.getSecondSectionClasses() + props.getSectionGridClasses()} 
        style={props.getSectionStyle()} >
        <SearchBar 
          is_mobile={props.is_mobile}
          search_value={props.search_value} 
          handleSearch={props.handleSearch} />
        <CitiesList 
          is_mobile={props.is_mobile} 
          maps_data={props.maps_data} 
          window_width={props.window_width} />
      </div>
    )
  };

  return (
    <div className="col-xs-12">
      {getFirstSection()}
      {getSecondSection()}
    </div>
  );
}

export default Home;